-- Surya OS application state table
create table if not exists public.app_state (
  id text primary key,
  state jsonb,
  updated_at timestamptz not null default now(),
  version integer not null default 1
);

create table if not exists public.user_sessions (
  user_id text primary key,
  last_page text not null,
  updated_at timestamptz not null default now()
);

-- Seed a singleton row used by the app API
insert into public.app_state (id, state, updated_at, version)
values ('global', null, now(), 1)
on conflict (id) do nothing;

-- Phase 1 normalized tables (dual-write migration)
create table if not exists public.app_users (
  id text primary key,
  name text not null,
  role text not null,
  dept text,
  av text,
  col text,
  phone text,
  bio text,
  status text,
  active boolean not null default true,
  is_mentor boolean not null default false,
  login_time timestamptz,
  last_seen timestamptz,
  total_logins integer not null default 0,
  sessions jsonb not null default '[]'::jsonb,
  pass_hash text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.leads (
  id text primary key,
  name text not null,
  area text,
  size text,
  temp text,
  stage text,
  val numeric,
  notes text,
  created_at timestamptz,
  updated_at timestamptz not null default now()
);

create table if not exists public.ideas (
  id text primary key,
  user_id text references public.app_users(id) on delete set null,
  cat text,
  title text not null,
  "desc" text,
  st text,
  ai text,
  ai_parsed jsonb,
  cc text,
  tasks jsonb not null default '[]'::jsonb,
  created_at timestamptz,
  updated_at timestamptz not null default now()
);

create table if not exists public.tasks (
  id text primary key,
  name text not null,
  ow text references public.app_users(id) on delete set null,
  dept text,
  pri text,
  due date,
  done boolean not null default false,
  idea text,
  updated_at timestamptz not null default now()
);

create table if not exists public.projects (
  id text primary key,
  name text not null,
  cat text,
  st text,
  prog integer,
  own text references public.app_users(id) on delete set null,
  pri text,
  due date,
  "desc" text,
  impact text,
  block text,
  created_at timestamptz,
  updated_at timestamptz not null default now()
);

create table if not exists public.followups (
  id text primary key,
  lid text,
  date date,
  type text,
  note text,
  done boolean not null default false,
  created_at timestamptz,
  updated_at timestamptz not null default now()
);

create table if not exists public.call_notes (
  id text primary key,
  lid text,
  outcome text,
  notes text,
  next_date date,
  created_at timestamptz,
  updated_at timestamptz not null default now()
);

create table if not exists public.conversations (
  id text primary key,
  messages jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.posts (
  id text primary key,
  user_id text references public.app_users(id) on delete set null,
  type text,
  txt text,
  time timestamptz,
  updated_at timestamptz not null default now()
);

create table if not exists public.departments (
  id text primary key,
  name text,
  "desc" text,
  head text references public.app_users(id) on delete set null,
  emoji text,
  updated_at timestamptz not null default now()
);

create table if not exists public.mentor_sessions (
  id text primary key,
  mentor text references public.app_users(id) on delete set null,
  topic text,
  date date,
  notes text,
  status text,
  updated_at timestamptz not null default now()
);

create table if not exists public.automations (
  id text primary key,
  name text,
  tool text,
  trigger text,
  action text,
  webhook text,
  st text,
  runs integer,
  last_run timestamptz,
  updated_at timestamptz not null default now()
);

create table if not exists public.notion_pages (
  id text primary key,
  title text,
  url text,
  cat text,
  notes text,
  updated timestamptz,
  synced_at timestamptz not null default now()
);

create table if not exists public.content_items (
  id text primary key,
  title text,
  plat text,
  type text,
  st text,
  topic text,
  date date,
  updated_at timestamptz not null default now()
);

create table if not exists public.activity_logs (
  id text primary key,
  username text,
  action text,
  detail text,
  time timestamptz,
  updated_at timestamptz not null default now()
);

create index if not exists idx_tasks_owner on public.tasks (ow);
create index if not exists idx_projects_owner on public.projects (own);
create index if not exists idx_ideas_user on public.ideas (user_id);
create index if not exists idx_followups_lead on public.followups (lid);
create index if not exists idx_logs_time on public.activity_logs (time desc);
