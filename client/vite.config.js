import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/static/',
  build: {
    // where vite puts the bundled application
    outDir: '../server/static',

    // delete old build when creating new
    emptyOutDir: true,
    sourcemap: true,
  },
  plugins: [react()]
})
