import { defineConfig } from "vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDirectory = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDirectory, "index.html"),
        kontakt: resolve(rootDirectory, "kontakt.html"),
        takk: resolve(rootDirectory, "takk.html"),
      },
    },
  },
});
