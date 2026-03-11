import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 5000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('monaco-editor')) {
            return 'monaco';
          }
          if (id.includes('@react-spectrum/s2')) {
            return 's2';
          }
          if (id.includes('react-aria-components') || id.includes('react-aria') || id.includes('react-stately')) {
            return 'aria';
          }
          if (id.includes('markdown-it')) {
            return 'markdown';
          }
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
})
