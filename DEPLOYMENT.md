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

## 7) Free Deployment (Render)

This project includes `render.yaml` for one-click setup on Render free plan.

### A) Push code to GitHub

```bash
git add .
git commit -m "Prepare free Render deployment"
git push origin main
```

### B) Create service on Render

1. Open Render dashboard.
2. Click **New +** -> **Blueprint**.
3. Connect your GitHub repo.
4. Render will detect `render.yaml` and create the web service.

### C) Set required environment variables in Render

- `SUPABASE_URL` = your Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` = service role key (must have JWT role `service_role`)
- `FRONTEND_URL` = your Render app URL, e.g. `https://surya-os.onrender.com`
- `BACKEND_URL` = same URL as above
- `CORS_ALLOWED_ORIGINS` = optional comma-separated list for extra domains

### D) Verify after deploy

1. Open your app URL.
2. Check `${APP_URL}/api/health` returns `ok: true`.
3. Confirm:
	- `persistence: "supabase"`
	- `supabase.serviceRoleReady: true`
4. Run a login, add/update/delete cycle, and verify refresh persistence.
