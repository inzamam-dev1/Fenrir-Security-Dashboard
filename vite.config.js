import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you are using Tailwind v4 (the one giving the error), 
// it usually looks like this:
export default defineConfig({
  plugins: [
    react(),
  ],
})