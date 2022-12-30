import react from "@vitejs/plugin-react";
import { join } from "path";
import { defineConfig } from "vite";

const srcRoot = join(__dirname, "src");

export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "/@": srcRoot,
    },
  },
  build: {
    outDir: join(srcRoot, "/out"),
    emptyOutDir: true,
    rollupOptions: {},
  },
  server: {
    port: process.env.PORT === undefined ? 8080 : +process.env.PORT,
  },
  optimizeDeps: {
    exclude: ["path"],
  },
});
