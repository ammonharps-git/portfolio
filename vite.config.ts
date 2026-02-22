import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { open } from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    open: true,
  }
})
