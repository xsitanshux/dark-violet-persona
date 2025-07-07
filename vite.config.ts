import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/dark-violet-persona/", // Keep this for GitHub Pages
  
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    // The componentTagger() line has been removed
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

