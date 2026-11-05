import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { readSupabaseConfig } from './src/lib/config.ts'

export default defineConfig(({ mode }) => {
  const configuration = readSupabaseConfig(loadEnv(mode, process.cwd(), 'VITE_'))
  const development = loadEnv(mode, process.cwd(), 'DEV_')

  // Fail before a build can embed a malformed URL or a backend secret.
  if (configuration.status === 'invalid') {
    throw new Error(configuration.message)
  }

  return {
    plugins: [react()],
    server: {
      allowedHosts: development.DEV_ALLOWED_HOST ? [development.DEV_ALLOWED_HOST] : undefined,
    },
    build: { sourcemap: false },
  }
})
