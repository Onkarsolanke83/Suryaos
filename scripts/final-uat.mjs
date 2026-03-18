const API_BASE = process.env.UAT_API_BASE || 'http://localhost:4000';

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function getStartOfWeek(baseDate = new Date()) {
  const d = new Date(baseDate);
  d.setHours(0, 0, 0, 0);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  return d;
}

function getWeeklyMinutesFromSessions(sessions, weekStart, nowMs = Date.now()) {
  if (!Array.isArray(sessions) || sessions.length === 0) return 0;

  const weekStartMs = weekStart.getTime();
  let total = 0;

  for (const session of sessions) {
    if (!session || !session.login) continue;

    const startMs = new Date(session.login).getTime();
    const endMs = session.logout ? new Date(session.logout).getTime() : nowMs;

    if (Number.isNaN(startMs) || Number.isNaN(endMs) || endMs <= startMs) continue;

    const boundedStart = Math.max(startMs, weekStartMs);
    if (endMs <= boundedStart) continue;

    total += Math.floor((endMs - boundedStart) / 60000);
  }

  return total;
}

async function api(method, path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined
  });

  const text = await res.text();
  const data = text ? JSON.parse(text) : {};

  if (!res.ok) {
    throw new Error(`${method} ${path} failed: ${res.status} ${text}`);
  }

  return data;
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(`ASSERT_FAILED: ${message}`);
  }
}

async function main() {
  const report = {
    apiBase: API_BASE,
    checks: {
      health: false,
      roleBasedState: false,
      loginVisibility: false,
      logoutVisibility: false,
      weeklyCounters: false,
      weeklyReset: false,
      restore: false
    },
    notes: []
  };

  const health = await api('GET', '/api/health');
  assert(health.ok === true, 'API health must be ok');
  report.checks.health = true;

  const originalPayload = await api('GET', '/api/state');
  const originalState = clone(originalPayload.state || {});

  let restoreNeeded = true;

  try {
    const state = clone(originalState);
    state.users = state.users || {};
    state.log = Array.isArray(state.log) ? state.log : [];
    state.weeklyGoals = Array.isArray(state.weeklyGoals) ? state.weeklyGoals : [];

    assert(Boolean(state.users.onkar), 'onkar user missing');
    assert(Boolean(state.users.riya), 'riya user missing');
    assert(
      state.users.onkar.role === 'owner' || state.users.onkar.role === 'admin',
      'onkar must be owner/admin'
    );
    report.checks.roleBasedState = true;

    const now = Date.now();
    const loginAt = new Date(now - 95 * 60000).toISOString();
    const logoutAt = new Date(now - 35 * 60000).toISOString();

    state.users.riya.status = 'online';
    state.users.riya.loginTime = loginAt;
    state.users.riya.sessions = Array.isArray(state.users.riya.sessions) ? state.users.riya.sessions : [];
    state.users.riya.sessions.push({ login: loginAt, logout: null });

    await api('PUT', '/api/state', { state });

    const afterLogin = await api('GET', '/api/state');
    assert(afterLogin.state?.users?.riya?.status === 'online', 'riya should be online after login');
    report.checks.loginVisibility = true;

    const stateAfterLogin = clone(afterLogin.state);
    stateAfterLogin.users.riya.status = 'offline';
    stateAfterLogin.users.riya.lastSeen = logoutAt;

    const sessionList = Array.isArray(stateAfterLogin.users.riya.sessions)
      ? stateAfterLogin.users.riya.sessions
      : [];
    if (sessionList.length === 0) {
      sessionList.push({ login: loginAt, logout: logoutAt });
    } else {
      sessionList[sessionList.length - 1] = {
        ...sessionList[sessionList.length - 1],
        logout: logoutAt
      };
    }
    stateAfterLogin.users.riya.sessions = sessionList;

    await api('PUT', '/api/state', { state: stateAfterLogin });

    const afterLogout = await api('GET', '/api/state');
    assert(afterLogout.state?.users?.riya?.status === 'offline', 'riya should be offline after logout');
    assert(Boolean(afterLogout.state?.users?.riya?.lastSeen), 'riya should have lastSeen after logout');
    report.checks.logoutVisibility = true;

    const stateWeekly = clone(afterLogout.state);
    const weekStart = getStartOfWeek();
    const weekStartLabel = weekStart.toISOString().slice(0, 10);

    if (stateWeekly.weeklyGoals.length === 0) {
      stateWeekly.weeklyGoals = [
        { id: 'uat-goal-1', title: 'UAT Goal', target: 5, current: 0, unit: 'items', owner: 'riya' }
      ];
    }

    stateWeekly.weeklyGoals[0].current = Math.max(1, Number(stateWeekly.weeklyGoals[0].current || 0));
    stateWeekly.weeklyCycle = {
      weekStart: weekStartLabel,
      lastResetAt: null,
      resetBy: null
    };

    await api('PUT', '/api/state', { state: stateWeekly });

    const afterWeeklySet = await api('GET', '/api/state');
    const riyaSessions = afterWeeklySet.state?.users?.riya?.sessions || [];
    const weeklyMinutes = getWeeklyMinutesFromSessions(riyaSessions, weekStart);

    assert(weeklyMinutes > 0, 'weekly minutes should be > 0 for riya');
    report.checks.weeklyCounters = true;

    const stateReset = clone(afterWeeklySet.state);
    stateReset.weeklyGoals = (stateReset.weeklyGoals || []).map((goal) => ({ ...goal, current: 0 }));
    stateReset.weeklyCycle = {
      weekStart: weekStartLabel,
      lastResetAt: new Date().toISOString(),
      resetBy: 'uat-script'
    };

    await api('PUT', '/api/state', { state: stateReset });

    const afterReset = await api('GET', '/api/state');
    const allZero = (afterReset.state?.weeklyGoals || []).every((goal) => Number(goal.current || 0) === 0);

    assert(allZero, 'all weekly goals should be zero after reset');
    assert(afterReset.state?.weeklyCycle?.resetBy === 'uat-script', 'weekly cycle resetBy should be uat-script');
    report.checks.weeklyReset = true;

    report.notes.push(`Weekly minutes for riya after simulated session: ${weeklyMinutes}`);
  } finally {
    if (restoreNeeded) {
      await api('PUT', '/api/state', { state: originalState });
      const restored = await api('GET', '/api/state');
      assert(JSON.stringify(restored.state || {}) === JSON.stringify(originalState || {}), 'state restore mismatch');
      report.checks.restore = true;
    }
  }

  console.log(JSON.stringify({ ok: true, report }, null, 2));
}

main().catch((err) => {
  console.error(JSON.stringify({ ok: false, error: err.message }, null, 2));
  process.exit(1);
});
