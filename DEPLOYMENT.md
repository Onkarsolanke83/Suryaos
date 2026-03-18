# Deployment Guide

## Architecture
- Frontend: React + Vite
- Backend: Express (`server/index.js`)
- Database: Supabase

## 1) Prepare Supabase
1. Create project in Supabase.
2. Run SQL from `supabase/schema.sql`.
3. Run:

```sql
NOTIFY pgrst, 'reload schema';
```

## 2) Environment Variables
Set these in your deployment platform:

- `PORT` (platform usually sets this automatically)
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

Optional for local dev only:
- `VITE_API_PROXY_TARGET`

## 3) Build and Run Locally (production style)

```bash
npm install
npm run build
npm start
```

## 4) Deploy Backend (Render/Railway/Fly)
Use this config:
- Build command: `npm install && npm run build`
- Start command: `npm start`

Backend serves both API and built frontend from `dist/`.

## 5) Post-deploy verification
Check:
- `/api/health`
- `/api/diagnostics`
- Perform one add/update/delete in UI and verify save persists after refresh

## 6) Recommended hardening
- Rotate exposed Supabase keys immediately.
- Restrict CORS to your production domain.
- Add rate limiting to API routes.
- Add error monitoring (Sentry/Logflare).
