import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
             tailwindcss()],
  server: {
    // Bind to all network interfaces
    host: '0.0.0.0',
    // Use the environment variable PORT if it is defined; otherwise, fall back to 5173 (local development)
    port: Number(process.env.PORT) || 5173,
  },
})
