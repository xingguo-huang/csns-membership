export type SupabaseConfig =
  | { status: 'unconfigured' }
  | { status: 'invalid'; message: string }
  | { status: 'ready'; url: string; publishableKey: string }

export function readSupabaseConfig(environment: Record<string, unknown>): SupabaseConfig {
  const rawUrl = environment.VITE_SUPABASE_URL
  const rawKey = environment.VITE_SUPABASE_PUBLISHABLE_KEY
  const url = typeof rawUrl === 'string' ? rawUrl.trim() : ''
  const key = typeof rawKey === 'string' ? rawKey.trim() : ''

  if (!url && !key) return { status: 'unconfigured' }

  if (!url || !key) {
    return {
      status: 'invalid',
      message: 'Set both VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY, or leave both blank.',
    }
  }

  // Accept the current browser-safe key format only. Never echo key contents.
  if (!/^sb_publishable_[A-Za-z0-9_-]+$/.test(key)) {
    return {
      status: 'invalid',
      message: 'VITE_SUPABASE_PUBLISHABLE_KEY must be a publishable key. Backend secret and legacy JWT keys are not supported in the frontend.',
    }
  }

  try {
    const parsed = new URL(url)
    const local = parsed.hostname === 'localhost' || parsed.hostname === '127.0.0.1'
    const secure = parsed.protocol === 'https:' || (local && parsed.protocol === 'http:')

    if (!secure || parsed.username || parsed.password || parsed.search || parsed.hash || parsed.pathname !== '/') {
      throw new Error('Invalid project origin')
    }

    return { status: 'ready', url: parsed.origin, publishableKey: key }
  } catch {
    return {
      status: 'invalid',
      message: 'VITE_SUPABASE_URL must be an HTTPS project origin, or an HTTP localhost origin for local development.',
    }
  }
}
