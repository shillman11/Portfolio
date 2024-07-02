import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      // Customize Rollup options here
    },
  },
  base: "./", // Set base to ensure relative paths work correctly
});
