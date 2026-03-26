import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Bind IPv4 explicitly — on some Windows setups "localhost" can resolve differently than 127.0.0.1.
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
    open: true,
  },
})
