import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@shared": path.resolve(import.meta.dirname, "..", "shared"),
      "@assets": path.resolve(import.meta.dirname, "..", "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname),
  build: {
    // Output into server/dist/public so Express can serve the built frontend
    outDir: path.resolve(import.meta.dirname, "..", "server", "dist", "public"),
    emptyOutDir: true,
    chunkSizeWarningLimit: 1500,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
    proxy: {
      "/api": {
        target: "http://127.0.0.1:5000",
        changeOrigin: true,
      },
    },
  },
});
