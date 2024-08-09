import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const url = "https://server-56ae.onrender.com/"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/auth': {
        target: `${url}/auth`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, '')
      },

      '/api': {
        target: `${url}/api`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/pia': {
        target: `${url}/pia`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pia/, '')
      },
      '/service': {
        target: `${url}/service`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/service/, '')
      }

    },
  },
})
