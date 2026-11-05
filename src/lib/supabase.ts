import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { readSupabaseConfig } from './config'

export const supabaseConfiguration = readSupabaseConfig({
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  VITE_SUPABASE_PUBLISHABLE_KEY: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
})
let client: SupabaseClient | undefined

/** Creates no client and makes no network request when the app is unconfigured. */
export function getSupabaseClient(): SupabaseClient | null {
  if (supabaseConfiguration.status !== 'ready') return null

  client ??= createClient(supabaseConfiguration.url, supabaseConfiguration.publishableKey)
  return client
}
