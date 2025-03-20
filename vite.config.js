import tailwindcss from "@tailwindcss/vite";

export default {
  base: "./", // Keep it as "./" to handle relative paths
  build: {
    outDir: "dist",
    assetsDir: "assets", // Ensures assets are stored in dist/assets
  },
  plugins: [tailwindcss()],
};
