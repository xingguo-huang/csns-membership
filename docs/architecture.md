# Architecture decision — FEAT-001

Status: accepted for the competition prototype, 2026-11-05.

## Constraints

- One responsive Chinese/English web application, one Git repository, one npm lockfile.
- React + TypeScript + Vite, Supabase managed backend, Cloudflare Pages static hosting.
- Planning assumption only: 500–5,000 members, a small staff team and occasional event check-in peaks. Confirm actual traffic and budget with CSNS.
- No separate FastAPI/Node server, native mobile app, paid add-on or hosted resource is required for FEAT-001.

## Boundaries

| Component | Responsibility |
| --- | --- |
| Cloudflare Pages | Deliver built HTML/CSS/JavaScript from `dist/`; no member database or privileged credentials. |
| React application | Responsive member/staff screens, bilingual copy and browser-safe Supabase client. |
| Supabase Auth | Authentication and sessions, beginning in FEAT-002. |
| PostgreSQL + RLS | Records, relationships, ownership rules and least-privilege access. |
| Database/Edge functions | Authorized membership/payment changes and atomic check-in operations when implemented. |

The browser may use a publishable key. Database permissions remain mandatory. Hiding a staff control does not authorize an operation. Frontend bundles must never contain a secret key, legacy service-role key or database password.

## Data model to validate before migrations

Keep these concepts separate: member profile, membership period, payment record, event, event registration and check-in. Do not infer membership eligibility from a single editable `paid` flag. Confirm family membership, expiry rules, accepted payment methods, cancellation and access roles before implementing those rules.

FEAT-001 intentionally creates no tables, policies, users or live transactions. FEAT-002 will introduce the first versioned migration and authorization tests for a member's own profile. Later features add their own focused migrations.

## Operational decisions

- Use free/local tooling during development. Supabase Free may pause after inactivity; budget for Pro from US$25/month if selected for live use. Mail, domain, payment and usage charges are separate. Recheck pricing before handover.
- Production deployment is a separate account connection step. This repository does not automatically create or purchase Cloudflare or Supabase resources.
- Begin with the association's confirmed payment workflow; record a payment claim as pending until an authorized person confirms it.
- Backups must cover database records and uploaded objects separately. A CSV member export is not a complete restore plan.
- Store schema changes and permission policies in Git. Keep real member data and credentials out of Git.
- Defer offline check-in and automated AI features until core requirements and maintenance ownership are agreed.

## Official references

- [Vite guide](https://vite.dev/guide/)
- [Supabase React quickstart](https://supabase.com/docs/guides/getting-started/quickstarts/reactjs)
- [Supabase API keys](https://supabase.com/docs/guides/getting-started/api-keys)
- [Supabase row-level security](https://supabase.com/docs/guides/database/postgres/row-level-security)
- [Supabase pricing](https://supabase.com/pricing)
- [Cloudflare Pages React guide](https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/)
