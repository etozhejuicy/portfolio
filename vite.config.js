import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        index: "/index.html",
        works: "/works.html",
        contacts: "/contacts.html",
        about: "/about.html",
      },
    },
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "",
  },
  refresh: true,
});
