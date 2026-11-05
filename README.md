# CSNS Membership

华协会员与活动管理系统的参赛原型。当前处于开发阶段，尚未接入真实会员数据，也不是协会正式上线的服务。

## Technology

- React + TypeScript + Vite: one responsive web application.
- Supabase: managed PostgreSQL, authentication and narrowly scoped backend functions.
- Cloudflare Pages: static hosting; build output is `dist/`.

## Workflow

- `main`: stable, reviewed changes.
- `feat/<feature-name>`: one small, reviewable feature at a time.
- Use Conventional Commits, for example `feat: initialize project foundation`.
- Project setup, local development, checks and deployment instructions are added in FEAT-001.

## Feature sequence

1. **FEAT-001 — Project foundation:** app shell, bilingual interface, safe Supabase configuration, build checks and deployment instructions.
2. **FEAT-002 — Authentication and profile:** sign in/out, member profile and database permissions.
3. **FEAT-003 — Membership and payments:** membership periods, payment records and authorized confirmation.
4. **FEAT-004 — Events and check-in:** registration, staff check-in and duplicate protection.
5. **FEAT-005 — Operations and handover:** migration, exports, restore practice and administrator guide.

Business rules and this sequence remain subject to the association's confirmed requirements.

## Ownership

Keep the GitHub repository, Cloudflare project, Supabase organization and recovery methods under accounts that can be handed over to the association. Do not commit credentials or real member data. No open-source license is selected until competition and ownership terms are confirmed.
