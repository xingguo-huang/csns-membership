import { describe, expect, it } from 'vitest'
import { readSupabaseConfig } from './config'

const valid = {
  VITE_SUPABASE_URL: 'https://example.supabase.co',
  VITE_SUPABASE_PUBLISHABLE_KEY: 'sb_publishable_test_only_not_a_real_key',
}

describe('browser configuration boundary', () => {
  it('allows an offline foundation without inventing backend credentials', () => {
    expect(readSupabaseConfig({})).toEqual({ status: 'unconfigured' })
  })

  it.each([
    { VITE_SUPABASE_URL: valid.VITE_SUPABASE_URL },
    { VITE_SUPABASE_PUBLISHABLE_KEY: valid.VITE_SUPABASE_PUBLISHABLE_KEY },
  ])('rejects partial configuration instead of silently creating a broken client', (environment) => {
    expect(readSupabaseConfig(environment).status).toBe('invalid')
  })

  it.each(['sb_secret_never_expose', 'eyJlegacy-service-role-placeholder', 'service_role'])('rejects unsafe or legacy keys without reflecting them in the error', (key) => {
    const result = readSupabaseConfig({ ...valid, VITE_SUPABASE_PUBLISHABLE_KEY: key })
    expect(result.status).toBe('invalid')
    expect(JSON.stringify(result)).not.toContain(key)
  })

  it.each([
    'http://example.supabase.co',
    'https://user:password@example.supabase.co',
    'https://example.supabase.co?token=secret',
    'https://example.supabase.co#secret',
    'https://example.supabase.co/rest/v1',
    'not-a-url',
  ])('rejects unsafe project URLs', (url) => {
    expect(readSupabaseConfig({ ...valid, VITE_SUPABASE_URL: url }).status).toBe('invalid')
  })

  it('accepts a browser-safe hosted project configuration', () => {
    expect(readSupabaseConfig(valid).status).toBe('ready')
  })

  it('supports the local Supabase development origin', () => {
    expect(readSupabaseConfig({ ...valid, VITE_SUPABASE_URL: 'http://127.0.0.1:54321' }).status).toBe('ready')
  })
})
