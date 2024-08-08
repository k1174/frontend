import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/auth': {
        target: 'http://localhost:4000/auth',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, '')
      },

      '/api': {
        target: 'http://localhost:4000/events',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/pia': {
        target: 'http://localhost:4000/admin',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pia/, '')
      },
      '/service': {
        target: 'http://localhost:4000/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/service/, '')
      }

    },
  },
})
