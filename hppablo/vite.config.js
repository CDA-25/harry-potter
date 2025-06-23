import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  server: {
    port: 4200,
    host: "0.0.0.0",
    strictPort: true,
  },
  plugins: [    tailwindcss(),  ],

})
// IP local host 127.0.0.1