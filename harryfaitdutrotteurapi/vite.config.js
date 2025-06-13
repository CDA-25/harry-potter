import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    port: 4564,
    host: "0.0.0.0",
    strictPort: true,
    proxy: {
      '/api/potterhead': {
        target: 'https://potterhead-api.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/potterhead/, '/api'),
      },
      '/api/hp': {
        target: 'https://hp-api.onrender.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/hp/, '/api'),
      }
    },
  },
   plugins: [
    tailwindcss(),
  ],
})