import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import { createInstagramApiPlugin } from "./server/instagram-api.mjs";

export default defineConfig(({ mode }) => {
  const projectRoot = fileURLToPath(new URL("..", import.meta.url));
  const env = loadEnv(mode, projectRoot, "");

  return {
    root: fileURLToPath(new URL(".", import.meta.url)),
    plugins: [createInstagramApiPlugin(env)],
    build: {
      outDir: "../dist-dashboard",
      emptyOutDir: true,
    },
  };
});
