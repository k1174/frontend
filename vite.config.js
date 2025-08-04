import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const arr = ["https://server-56ae.onrender.com/" , "http://localhost:4000/", "https://server-ns3owqqj6-k1174s-projects.vercel.app/"]
const url = arr[0]

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
        target: `${url}/events`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/pia': {
        target: `${url}/admin`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pia/, '')
      },
      '/service': {
        target: `${url}/api`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/service/, '')
      },
      '/upload':{
        target: `${url}/test`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/upload/, '')
      }

    },
  },
})
