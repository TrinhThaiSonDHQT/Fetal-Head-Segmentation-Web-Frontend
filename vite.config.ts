import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        // target: 'https://fetal-head-segmentation-web-backend.onrender.com',
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        timeout: 60000, // 60 second timeout for large uploads
        proxyTimeout: 60000,
      },
    },
  },
})
