# Supabase changes

FEAT-001 contains only frontend configuration and a lazy client factory. There is no hosted Supabase project or database migration yet.

Before FEAT-002:

1. Select a development project and confirm account ownership and hosting requirements.
2. Initialize the official Supabase CLI configuration for that project.
3. Add the profile schema, explicit grants and row-level policies as a migration in `migrations/`.
4. Verify member, non-owner and anonymous access cases before connecting a live frontend.
5. Configure allowed authentication URLs and production SMTP before external sign-ups.

Do not add tables or policies only through the hosted dashboard. Keep reproducible schema/permission changes in this directory. Do not store real member records, project access tokens, secret API keys or database passwords here.
