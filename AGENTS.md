# Project conventions

- Keep this a small React + TypeScript application with a managed Supabase backend and static Cloudflare Pages hosting.
- Work in short-lived `feat/*` branches and keep commits focused.
- Use npm and commit `package-lock.json`. Use the Node version in `.node-version`.
- Run `npm run check` before committing implementation changes.
- Keep member-facing content available in Chinese and English. Do not present mock records or planned features as live services.
- Never put a Supabase secret key, legacy service-role key or database password in frontend code, a `VITE_*` variable or a commit.
- Enforce permissions in the database or backend, not by hiding controls in the UI. Cover authorization changes with meaningful tests.
- Version database changes in `supabase/migrations/`; do not rely on undocumented dashboard changes.
- Do not introduce a separate server, a new hosted service or a paid dependency without explaining the need.
- Update the relevant feature document and README when setup or behavior changes.
