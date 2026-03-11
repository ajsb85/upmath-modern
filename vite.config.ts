import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

let commitHash = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || 'unknown';
try {
  if (commitHash === 'unknown') {
    commitHash = execSync('git rev-parse --short HEAD').toString().trim();
  }
} catch (e) {
  // Fallback if git is not available
}
const buildDate = new Date().toISOString();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    '__APP_VERSION__': JSON.stringify(process.env.npm_package_version || '0.0.0'),
    '__COMMIT_HASH__': JSON.stringify(commitHash),
    '__BUILD_DATE__': JSON.stringify(buildDate),
  },
  build: {
    chunkSizeWarningLimit: 5000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('monaco-editor')) {
            return 'monaco';
          }
        }
      }
    }
  }
})
