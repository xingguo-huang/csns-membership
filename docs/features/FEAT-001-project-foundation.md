# FEAT-001 — Project foundation

Branch: `feat/project-foundation`

## Purpose

Give the membership project a repeatable starting point that runs locally without cloud accounts and can later be deployed as a static Cloudflare Pages application.

## Scope

- Responsive Chinese/English public app shell with accessible navigation and language switching.
- Honest coming-soon labels and a competition-prototype notice; no invented member records.
- Lazy Supabase client factory using current publishable keys only.
- Configuration validation in both runtime source and the Vite build boundary, with meaningful negative tests.
- Node 24, npm lockfile, TypeScript checks and GitHub CI.
- Cloudflare Pages configuration, ignored local credentials, architecture and handover-oriented setup notes.

## Acceptance criteria

- A fresh checkout can run `npm ci` and `npm run check` with no secrets.
- Blank Supabase configuration permits an offline foundation preview.
- Partial/unsafe Supabase configuration fails safely without echoing its value.
- Desktop and narrow mobile layouts remain usable; both interface languages work.
- `dist/` contains only a static application and hosting files, with no development status banner.
- The application does not call a backend or write data in this feature.

## Verification

Verified locally on 2026-11-05:

- Clean `npm ci` followed by `npm run check`: 14 tests passed, TypeScript checks passed, production build passed.
- An intentionally invalid backend-secret placeholder stops the actual Vite build, and its value is not printed in the error output.
- Production assets contain the hosting files and no development diagnostics or source maps.
- Production dependency audit reports no known vulnerabilities at verification time.
- Browser review: desktop viewport at 1363px and a 390px mobile frame; Chinese/English switching updates content and document language. No horizontal overflow observed (mobile content width 375px after scrollbar).

Not verified yet: hosted GitHub CI, live Cloudflare deployment, Supabase connectivity or database permissions. Those require connected remote projects; no claim of a live backend is made.

## Next feature

**FEAT-002 — Authentication and own profile:** confirm sign-in method; create the first profile migration; implement sign-in/out and session handling; enforce and test access to one's own profile. Membership eligibility, payments and staff permissions are separate later changes.
