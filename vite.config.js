import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // In dev (`vite`) base is '/' so localhost works normally.
  // In production (`vite build`) base is '/KrupaElevator/' so GitHub Pages
  // asset paths resolve correctly under the repo subdirectory.
  base: command === 'build' ? '/KrupaElevator/' : '/',
}))
