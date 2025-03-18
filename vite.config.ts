import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./", // Keep it as "./" to handle relative paths
  build: {
    outDir: "dist",
    assetsDir: "assets", // Ensures assets are stored in dist/assets
  },
  plugins: [tailwindcss()],
});
