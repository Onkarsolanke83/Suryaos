import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(__dirname, 'data');
const STATE_PATH = path.join(DATA_DIR, 'state.json');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const DEFAULT_PAYLOAD = { state: null, updatedAt: null, version: 1 };

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const hasRealSupabaseUrl =
  typeof SUPABASE_URL === 'string' &&
  SUPABASE_URL.startsWith('https://') &&
  !SUPABASE_URL.includes('YOUR_PROJECT_REF');
const hasRealSupabaseKey =
  typeof SUPABASE_SERVICE_ROLE_KEY === 'string' &&
  SUPABASE_SERVICE_ROLE_KEY.length > 20 &&
  !SUPABASE_SERVICE_ROLE_KEY.includes('YOUR_SUPABASE_SERVICE_ROLE_KEY');
const decodedSupabaseKeyRole = (() => {
  if (!hasRealSupabaseKey) return null;
  try {
    const tokenParts = SUPABASE_SERVICE_ROLE_KEY.split('.');
    if (tokenParts.length < 2) return null;
    const payload = JSON.parse(Buffer.from(tokenParts[1], 'base64url').toString('utf8'));
    return payload?.role || null;
  } catch {
    return null;
  }
})();
const hasServiceRoleKey = decodedSupabaseKeyRole === 'service_role';
const hasSupabase = hasRealSupabaseUrl && hasRealSupabaseKey;

const supabase = hasSupabase
  ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  : null;

const PORT = Number(process.env.PORT) || 4000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';
const BACKEND_URL = process.env.BACKEND_URL || `http://localhost:${PORT}`;
const CORS_ALLOWED_ORIGINS = (process.env.CORS_ALLOWED_ORIGINS || '')
  .split(',')
  .map((item) => item.trim())
  .filter(Boolean);
const corsAllowedOrigins = new Set([
  'http://localhost:3000',
  FRONTEND_URL,
  ...CORS_ALLOWED_ORIGINS
]);

const app = express();
const sseClients = new Set();
const startedAt = new Date().toISOString();
let lastMirrorStatus = {
  at: null,
  ok: null,
  details: null
};

app.use(cors({
  origin(origin, callback) {
    // Allow non-browser tooling plus configured frontend origins.
    if (!origin) {
      callback(null, true);
      return;
    }

    if (corsAllowedOrigins.has(origin) || origin.endsWith('.onrender.com')) {
      callback(null, true);
      return;
    }

    callback(new Error(`CORS blocked origin: ${origin}`));
  }
}));
app.use(express.json({ limit: '10mb' }));

function ensureStorage() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(STATE_PATH)) {
    const initial = {
      state: null,
      updatedAt: null,
      version: 1
    };
    fs.writeFileSync(STATE_PATH, JSON.stringify(initial, null, 2), 'utf8');
  }
}

function readStateFile() {
  ensureStorage();
  try {
    const raw = fs.readFileSync(STATE_PATH, 'utf8');
    const parsed = JSON.parse(raw);
    return parsed;
  } catch {
    return DEFAULT_PAYLOAD;
  }
}

function writeStateFile(payload) {
  ensureStorage();
  const tempPath = `${STATE_PATH}.tmp`;
  fs.writeFileSync(tempPath, JSON.stringify(payload, null, 2), 'utf8');
  fs.renameSync(tempPath, STATE_PATH);
}

async function readStateFromSupabase() {
  const { data, error } = await supabase
    .from('app_state')
    .select('id, state, updated_at, version')
    .eq('id', 'global')
    .maybeSingle();

  if (error) {
    throw new Error(`Supabase read failed: ${error.message}`);
  }

  if (!data) {
    return DEFAULT_PAYLOAD;
  }

  return {
    state: data.state ?? null,
    updatedAt: data.updated_at ?? null,
    version: data.version ?? 1
  };
}

async function writeStateToSupabase(payload) {
  const { error } = await supabase
    .from('app_state')
    .upsert(
      {
        id: 'global',
        state: payload.state,
        updated_at: payload.updatedAt,
        version: payload.version
      },
      { onConflict: 'id' }
    );

  if (error) {
    throw new Error(`Supabase write failed: ${error.message}`);
  }
}

async function readState() {
  if (!hasSupabase) {
    return readStateFile();
  }
  return readStateFromSupabase();
}

async function writeState(payload) {
  if (!hasSupabase) {
    writeStateFile(payload);
    return;
  }
  await writeStateToSupabase(payload);
}

function broadcastStateUpdate(meta) {
  const message = `event: state_updated\ndata: ${JSON.stringify(meta)}\n\n`;
  for (const client of sseClients) {
    try {
      client.write(message);
    } catch {
      sseClients.delete(client);
    }
  }
}

function safeIso(value) {
  if (!value) return null;
  const dt = new Date(value);
  return Number.isNaN(dt.getTime()) ? null : dt.toISOString();
}

function safeDate(value) {
  if (!value) return null;
  const dt = new Date(value);
  if (Number.isNaN(dt.getTime())) return null;
  return dt.toISOString().slice(0, 10);
}

async function replaceTableRows(table, rows) {
  const { error: deleteError } = await supabase.from(table).delete().not('id', 'is', null);
  if (deleteError) {
    throw new Error(`Normalized delete failed (${table}): ${deleteError.message}`);
  }

  if (!rows.length) return;

  const { error: upsertError } = await supabase.from(table).upsert(rows, { onConflict: 'id' });
  if (upsertError) {
    throw new Error(`Normalized upsert failed (${table}): ${upsertError.message}`);
  }
}

async function checkNormalizedTables() {
  if (!hasSupabase) {
    return [];
  }

  const tables = [
    'app_users',
    'leads',
    'ideas',
    'tasks',
    'projects',
    'followups',
    'call_notes',
    'conversations',
    'posts',
    'departments',
    'mentor_sessions',
    'automations',
    'notion_pages',
    'content_items',
    'activity_logs'
  ];

  const out = [];
  for (const table of tables) {
    const { error } = await supabase.from(table).select('id').limit(1);
    out.push({ table, ok: !error, error: error?.message || null });
  }
  return out;
}

async function mirrorStateToNormalizedTables(state) {
  if (!hasSupabase || !state || typeof state !== 'object') return;

  const now = new Date().toISOString();
  const usersObj = state.users && typeof state.users === 'object' ? state.users : {};

  const usersRows = Object.entries(usersObj).map(([id, u]) => ({
    id,
    name: u?.name || id,
    role: u?.role || 'member',
    dept: u?.dept || null,
    av: u?.av || null,
    col: u?.col || null,
    phone: u?.phone || null,
    bio: u?.bio || null,
    status: u?.status || null,
    active: u?.active !== false,
    is_mentor: Boolean(u?.isMentor),
    login_time: safeIso(u?.loginTime),
    last_seen: safeIso(u?.lastSeen),
    total_logins: Number.isFinite(u?.totalLogins) ? u.totalLogins : 0,
    sessions: Array.isArray(u?.sessions) ? u.sessions : [],
    pass_hash: u?.pass || null,
    updated_at: now
  }));

  const leadsRows = (Array.isArray(state.leads) ? state.leads : []).map((x) => ({
    id: x.id,
    name: x.name || 'Unnamed lead',
    area: x.area || null,
    size: x.size || null,
    temp: x.temp || null,
    stage: x.stage || null,
    val: Number.isFinite(x.val) ? x.val : null,
    notes: x.notes || null,
    updated_at: now
  })).filter((x) => x.id);

  const ideasRows = (Array.isArray(state.ideas) ? state.ideas : []).map((x) => ({
    id: x.id,
    user_id: x.user || null,
    cat: x.cat || null,
    title: x.title || 'Untitled idea',
    desc: x.desc || null,
    st: x.st || null,
    ai: x.ai || null,
    ai_parsed: x.aiParsed || null,
    cc: x.cc || null,
    tasks: Array.isArray(x.tasks) ? x.tasks : [],
    created_at: safeIso(x.created),
    updated_at: now
  })).filter((x) => x.id);

  const tasksRows = (Array.isArray(state.tasks) ? state.tasks : []).map((x) => ({
    id: x.id,
    name: x.name || 'Untitled task',
    ow: x.ow || null,
    dept: x.dept || null,
    pri: x.pri || null,
    due: safeDate(x.due),
    done: Boolean(x.done),
    idea: x.idea || null,
    updated_at: now
  })).filter((x) => x.id);

  const projectsRows = (Array.isArray(state.projects) ? state.projects : []).map((x) => ({
    id: x.id,
    name: x.name || 'Untitled project',
    cat: x.cat || null,
    st: x.st || null,
    prog: Number.isFinite(x.prog) ? x.prog : 0,
    own: x.own || null,
    pri: x.pri || null,
    due: safeDate(x.due),
    desc: x.desc || null,
    impact: x.impact || null,
    block: x.block || null,
    created_at: safeIso(x.created),
    updated_at: now
  })).filter((x) => x.id);

  const followupsRows = (Array.isArray(state.followups) ? state.followups : []).map((x) => ({
    id: x.id,
    lid: x.lid || null,
    date: safeDate(x.date),
    type: x.type || null,
    note: x.note || null,
    done: Boolean(x.done),
    created_at: safeIso(x.created),
    updated_at: now
  })).filter((x) => x.id);

  const callNotesRows = (Array.isArray(state.callNotes) ? state.callNotes : []).map((x, idx) => ({
    id: x.id || `cn_${idx}_${Date.now()}`,
    lid: x.lid || null,
    outcome: x.outcome || null,
    notes: x.notes || null,
    next_date: safeDate(x.nextDate),
    created_at: safeIso(x.created),
    updated_at: now
  }));

  const messagesRows = Object.entries(state.messages && typeof state.messages === 'object' ? state.messages : {})
    .map(([id, msgs]) => ({
      id,
      messages: Array.isArray(msgs) ? msgs : [],
      updated_at: now
    }));

  const postsRows = (Array.isArray(state.posts) ? state.posts : []).map((x) => ({
    id: x.id,
    user_id: x.user || null,
    type: x.type || null,
    txt: x.txt || null,
    time: safeIso(x.time),
    updated_at: now
  })).filter((x) => x.id);

  const departmentsRows = (Array.isArray(state.depts) ? state.depts : []).map((x, idx) => ({
    id: x.id || `dept_${idx}`,
    name: x.name || null,
    desc: x.desc || null,
    head: x.head || null,
    emoji: x.emoji || null,
    updated_at: now
  }));

  const mentorSessionsRows = (Array.isArray(state.sessions) ? state.sessions : []).map((x, idx) => ({
    id: x.id || `ms_${idx}`,
    mentor: x.mentor || null,
    topic: x.topic || null,
    date: safeDate(x.date),
    notes: x.notes || null,
    status: x.status || null,
    updated_at: now
  }));

  const automationsRows = (Array.isArray(state.n8nFlows) ? state.n8nFlows : []).map((x) => ({
    id: x.id,
    name: x.name || null,
    tool: x.tool || null,
    trigger: x.trigger || null,
    action: x.action || null,
    webhook: x.webhook || null,
    st: x.st || null,
    runs: Number.isFinite(x.runs) ? x.runs : 0,
    last_run: safeIso(x.lastRun),
    updated_at: now
  })).filter((x) => x.id);

  const notionPagesRows = (Array.isArray(state.notionPages) ? state.notionPages : []).map((x) => ({
    id: x.id,
    title: x.title || null,
    url: x.url || null,
    cat: x.cat || null,
    notes: x.notes || null,
    updated: safeIso(x.updated),
    synced_at: now
  })).filter((x) => x.id);

  const contentRows = (Array.isArray(state.content) ? state.content : []).map((x) => ({
    id: x.id,
    title: x.title || null,
    plat: x.plat || null,
    type: x.type || null,
    st: x.st || null,
    topic: x.topic || null,
    date: safeDate(x.date),
    updated_at: now
  })).filter((x) => x.id);

  const logsRows = (Array.isArray(state.log) ? state.log : []).map((x, idx) => ({
    id: x.id || `log_${idx}_${safeIso(x.time) || now}`,
    username: x.user || null,
    action: x.action || null,
    detail: x.detail || null,
    time: safeIso(x.time),
    updated_at: now
  }));

  await replaceTableRows('app_users', usersRows);
  await replaceTableRows('leads', leadsRows);
  await replaceTableRows('ideas', ideasRows);
  await replaceTableRows('tasks', tasksRows);
  await replaceTableRows('projects', projectsRows);
  await replaceTableRows('followups', followupsRows);
  await replaceTableRows('call_notes', callNotesRows);
  await replaceTableRows('conversations', messagesRows);
  await replaceTableRows('posts', postsRows);
  await replaceTableRows('departments', departmentsRows);
  await replaceTableRows('mentor_sessions', mentorSessionsRows);
  await replaceTableRows('automations', automationsRows);
  await replaceTableRows('notion_pages', notionPagesRows);
  await replaceTableRows('content_items', contentRows);
  await replaceTableRows('activity_logs', logsRows);
}

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'surya-os-api',
    topology: {
      mode: 'single-instance',
        frontendUrl: FRONTEND_URL,
        backendUrl: BACKEND_URL
    },
    persistence: hasSupabase ? 'supabase' : 'file',
    supabase: {
      configured: hasSupabase,
      keyRole: decodedSupabaseKeyRole,
      serviceRoleReady: hasServiceRoleKey
    },
    time: new Date().toISOString()
  });
});

app.get('/api/diagnostics', async (_req, res) => {
  try {
    const normalizedTables = await checkNormalizedTables();
    const normalizedReady = normalizedTables.every((t) => t.ok);

    res.json({
      ok: true,
      service: 'surya-os-api',
      startedAt,
      now: new Date().toISOString(),
      persistence: hasSupabase ? 'supabase' : 'file',
      sseClients: sseClients.size,
      normalized: {
        ready: normalizedReady,
        tables: normalizedTables,
        lastMirrorStatus
      }
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      error: err.message,
      persistence: hasSupabase ? 'supabase' : 'file',
      sseClients: sseClients.size,
      normalized: {
        lastMirrorStatus
      }
    });
  }
});

app.get('/api/state', async (_req, res) => {
  try {
    const payload = await readState();
    res.json(payload);
  } catch (err) {
    res.status(500).json({
      ok: false,
      error: err.message,
      hint: 'If using Supabase, run supabase/schema.sql and set SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY.'
    });
  }
});

app.get('/api/events', (_req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders?.();

  res.write(`event: connected\ndata: ${JSON.stringify({ ok: true, time: new Date().toISOString() })}\n\n`);
  sseClients.add(res);

  const heartbeat = setInterval(() => {
    try {
      res.write(': heartbeat\n\n');
    } catch {
      clearInterval(heartbeat);
      sseClients.delete(res);
    }
  }, 25000);

  _req.on('close', () => {
    clearInterval(heartbeat);
    sseClients.delete(res);
    res.end();
  });
});

app.put('/api/state', async (req, res) => {
  const incoming = req.body;

  if (!incoming || typeof incoming !== 'object' || Array.isArray(incoming)) {
    return res.status(400).json({ ok: false, error: 'Invalid payload' });
  }

  if (!Object.prototype.hasOwnProperty.call(incoming, 'state')) {
    return res.status(400).json({ ok: false, error: 'Missing state property' });
  }

  const payload = {
    state: incoming.state,
    updatedAt: new Date().toISOString(),
    version: 1
  };

  try {
    await writeState(payload);

    let normalizedSync = 'skipped';
    if (hasSupabase) {
      try {
        const normalizedTables = await checkNormalizedTables();
        const normalizedReady = normalizedTables.every((t) => t.ok);

        if (!normalizedReady) {
          normalizedSync = 'skipped';
          lastMirrorStatus = {
            at: new Date().toISOString(),
            ok: false,
            details: 'normalized tables unavailable in API schema cache; mirror skipped'
          };
        } else {
          await mirrorStateToNormalizedTables(payload.state);
          normalizedSync = 'ok';
          lastMirrorStatus = {
            at: new Date().toISOString(),
            ok: true,
            details: 'normalized mirror sync completed'
          };
        }
      } catch (mirrorError) {
        normalizedSync = 'failed';
        lastMirrorStatus = {
          at: new Date().toISOString(),
          ok: false,
          details: mirrorError.message
        };
        console.warn(`Normalized mirror sync failed: ${mirrorError.message}`);
      }
    }

    broadcastStateUpdate({ updatedAt: payload.updatedAt });

    return res.json({ ok: true, updatedAt: payload.updatedAt, normalizedSync });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: err.message,
      hint: 'If using Supabase, run supabase/schema.sql and set SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY.'
    });
  }
});

if (fs.existsSync(DIST_DIR)) {
  app.use(express.static(DIST_DIR));

  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) {
      return next();
    }
    return res.sendFile(path.join(DIST_DIR, 'index.html'));
  });
}

app.listen(PORT, () => {
  ensureStorage();
  if (!hasSupabase) {
    console.warn('Supabase env missing. Falling back to local file storage at server/data/state.json');
  } else if (!hasServiceRoleKey) {
    console.warn('Supabase key role is not service_role. API writes may fail with RLS until SUPABASE_SERVICE_ROLE_KEY is corrected.');
  }
  console.log(`Surya OS backend running on ${BACKEND_URL}`);
  console.log(`Primary frontend URL allowed by CORS: ${FRONTEND_URL}`);
});
