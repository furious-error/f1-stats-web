import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/f1-stats-web/',
  plugins: [
    tailwindcss(),
  ],
})