import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path must match the GitHub repository name exactly.
// When deploying to https://Vyom1912.github.io/KrupaElevator/ the
// asset paths need the /KrupaElevator/ prefix.
export default defineConfig({
  plugins: [react()],
  base: '/KrupaElevator/',
})
