// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Cube-Portfolio/', // 👈 use your repo name here
  plugins: [react()],
})
