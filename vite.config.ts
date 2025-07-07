import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/dark-violet-persona/",
  
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  // This section has been corrected
  resolve: {
    alias: {
      "@": new URL('./src', import.meta.url).pathname
    },
  },
}));
