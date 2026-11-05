# Local setup and Cloudflare Pages

## Local development

Use Node 24 and npm. From the repository root:

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open the local address printed by Vite. Blank environment variables are intentional for FEAT-001: the public app shell works without a Supabase account and creates no client or network connection.

When adding a development Supabase project in FEAT-002, set both values in `.env.local`:

```dotenv
VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_BROWSER_SAFE_PUBLISHABLE_KEY
```

Use the publishable key that begins `sb_publishable_`. Do not use a secret key or an old JWT key. Restart Vite after editing environment variables. `.env.local` is ignored by Git. Never paste credentials into an issue, a PR or a chat message.

The configuration validator allows HTTPS project origins and HTTP `localhost`/`127.0.0.1` development origins. It rejects embedded credentials, URL tokens, partial configuration and non-publishable keys. A `ready` configuration means the values passed validation; it does not prove a working connection.

If a local preview reverse proxy uses a custom host, set `DEV_ALLOWED_HOST` to that exact hostname in your ignored `.env.local`. Leave it blank for ordinary localhost development. Do not disable Vite's hostname checks globally.

## Checks

```sh
npm run check
```

This runs the configuration boundary tests, TypeScript checks and the production build. `npm run test:watch` supports local test development. The GitHub workflow repeats the same check with `npm ci`.

## Cloudflare Pages Git integration

After the repository exists and account access is available, create a Cloudflare Pages project and select this repository. Configure:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Root directory | Repository root |
| Build command | `npm run build` |
| Build output | `dist` |
| Node version | `24` via `.node-version`; set `NODE_VERSION=24` if the selected build image requires it |
| Environment variables | Both `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`, or both blank for this foundation preview |

The committed `wrangler.jsonc` declares the Pages project name and output directory. The app needs no Pages Functions or Worker runtime. `public/_redirects` provides SPA navigation fallback, and `public/_headers` declares basic response headers and immutable caching for hashed assets.

Before accepting real members, require the FEAT-002 database permissions and tests, a verified backend connection and configured authentication redirects. Configure authentication emails using a production SMTP provider. Changing `VITE_*` settings requires a new static build.

Use a separate development Supabase project for feature previews. Never let unreviewed preview branches modify production data. Keep service secrets out of every frontend environment, including preview settings.

## Deployment smoke check

1. Load the site on desktop and a narrow mobile viewport.
2. Switch between Chinese and English and check the document language.
3. Open a nested path directly and confirm the app loads through the SPA fallback.
4. Confirm the development configuration banner is absent in the production build.
5. Check that the prototype notice and coming-soon labels remain accurate.

## What is not connected yet

FEAT-001 prepares source and deployment configuration. It does not create a Supabase project, publish a Cloudflare deployment, send emails or process payments. No account tokens are required to run its local checks.
