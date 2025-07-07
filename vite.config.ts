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
}));import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path"; // This is no longer needed for the alias

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


