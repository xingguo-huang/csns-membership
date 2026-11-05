# CSNS Membership

华协会员与活动管理系统的参赛原型。当前处于开发阶段，尚未接入真实会员数据，也不是协会正式上线的服务。

## Technology

- React + TypeScript + Vite: one responsive web application.
- Supabase: managed PostgreSQL, authentication and narrowly scoped backend functions.
- Cloudflare Pages: static hosting; build output is `dist/`.

## Start locally

Use Node 24 and npm:

```sh
npm ci
cp .env.example .env.local
npm run dev
```

The app shell works with both Supabase values blank. Only a browser-safe publishable key belongs in `VITE_SUPABASE_PUBLISHABLE_KEY`; secret keys and legacy JWT keys are rejected. FEAT-001 performs no backend calls or data writes.

```sh
npm run check
```

This runs configuration boundary tests, TypeScript checks and a production build.

## Project map

| Path | Purpose |
| --- | --- |
| `src/App.tsx` | Public application shell |
| `src/i18n.ts` | Chinese/English interface copy |
| `src/lib/` | Configuration boundary and lazy Supabase client |
| `supabase/migrations/` | Future versioned schema and permission changes |
| `docs/features/` | Small feature scopes and acceptance criteria |
| `.github/workflows/ci.yml` | Reproducible checks |
| `wrangler.jsonc`, `public/_headers`, `public/_redirects` | Static Cloudflare Pages configuration |

See [architecture](docs/architecture.md), [setup and deployment](docs/deployment.md) and [FEAT-001](docs/features/FEAT-001-project-foundation.md).

## Workflow

- `main`: stable, reviewed changes.
- `feat/<feature-name>`: one small, reviewable feature at a time.
- Use Conventional Commits, for example `feat: initialize project foundation`.

## Feature sequence

1. **FEAT-001 — Project foundation:** app shell, bilingual interface, safe Supabase configuration, build checks and deployment instructions.
2. **FEAT-002 — Authentication and profile:** sign in/out, member profile and database permissions.
3. **FEAT-003 — Membership and payments:** membership periods, payment records and authorized confirmation.
4. **FEAT-004 — Events and check-in:** registration, staff check-in and duplicate protection.
5. **FEAT-005 — Operations and handover:** migration, exports, restore practice and administrator guide.

Business rules and this sequence remain subject to the association's confirmed requirements.

## Ownership

Keep the GitHub repository, Cloudflare project, Supabase organization and recovery methods under accounts that can be handed over to the association. Do not commit credentials or real member data. No open-source license is selected until competition and ownership terms are confirmed.
