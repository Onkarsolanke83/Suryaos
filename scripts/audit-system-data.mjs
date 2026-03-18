import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const API_BASE = process.env.AUDIT_API_BASE || 'http://localhost:4013';

async function getApi(path) {
  const res = await fetch(`${API_BASE}${path}`);
  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = text;
  }
  return { ok: res.ok, status: res.status, data };
}

async function checkTables(supabase, tables) {
  const out = [];
  for (const table of tables) {
    const { data, error } = await supabase.from(table).select('*').limit(1);
    out.push({
      table,
      ok: !error,
      hasRows: Array.isArray(data) ? data.length > 0 : false,
      error: error?.message || null
    });
  }
  return out;
}

function summarizeState(statePayload) {
  const state = statePayload?.state || {};
  return {
    users: state.users ? Object.keys(state.users).length : 0,
    leads: Array.isArray(state.leads) ? state.leads.length : 0,
    ideas: Array.isArray(state.ideas) ? state.ideas.length : 0,
    tasks: Array.isArray(state.tasks) ? state.tasks.length : 0,
    projects: Array.isArray(state.projects) ? state.projects.length : 0,
    followups: Array.isArray(state.followups) ? state.followups.length : 0,
    callNotes: Array.isArray(state.callNotes) ? state.callNotes.length : 0,
    posts: Array.isArray(state.posts) ? state.posts.length : 0,
    logs: Array.isArray(state.log) ? state.log.length : 0,
    updatedAt: statePayload?.updatedAt || null
  };
}

async function runSaveProbe(apiBase) {
  const probeId = `probe_${Date.now()}`;

  const readRes = await fetch(`${apiBase}/api/state`);
  if (!readRes.ok) {
    return { ok: false, step: 'read-before', status: readRes.status };
  }

  const current = await readRes.json();
  const originalState = current.state || {};
  const state = JSON.parse(JSON.stringify(originalState));
  state.__save_probe = { id: probeId, at: new Date().toISOString() };

  const putRes = await fetch(`${apiBase}/api/state`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ state })
  });

  if (!putRes.ok) {
    return { ok: false, step: 'write', status: putRes.status, body: await putRes.text() };
  }

  const putPayload = await putRes.json();

  const verifyRes = await fetch(`${apiBase}/api/state`);
  if (!verifyRes.ok) {
    return { ok: false, step: 'read-after', status: verifyRes.status };
  }

  const verifyPayload = await verifyRes.json();
  const persisted = verifyPayload?.state?.__save_probe?.id === probeId;

  await fetch(`${apiBase}/api/state`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ state: originalState })
  });

  return {
    ok: persisted,
    normalizedSync: putPayload?.normalizedSync || null
  };
}

async function main() {
  const health = await getApi('/api/health');
  const state = await getApi('/api/state');

  const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { autoRefreshToken: false, persistSession: false }
  });

  const tables = [
    'app_state',
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

  const tableChecks = await checkTables(supabase, tables);
  const probe = await runSaveProbe(API_BASE);

  const report = {
    apiBase: API_BASE,
    apiHealth: {
      ok: health.ok,
      status: health.status,
      persistence: health.data?.persistence || null
    },
    stateFetch: {
      ok: state.ok,
      status: state.status
    },
    stateSummary: summarizeState(state.data),
    tableChecks,
    saveProbe: probe
  };

  console.log(JSON.stringify(report, null, 2));
}

main().catch((err) => {
  console.error(JSON.stringify({ ok: false, error: err.message }, null, 2));
  process.exit(1);
});
