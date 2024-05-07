import { defineConfig } from "rasengan";

export default defineConfig({
  reactStrictMode: true,

  server: {
    development: {
      // open: true
    },
    production: {
      hosting: "vercel"
    }
  },

  // Define aliases
  vite: {
    optimizeDeps: {
      exclude: ["worker"]
    },
    resolve: {
      alias: [
        {
          find: "@app",
          replacement: "./src/app",
        },
        {
          find: "@components",
          replacement: "./src/components",
        },
        {
          find: "@assets",
          replacement: "./src/assets",
        },
        {
          find: "@styles",
          replacement: "./src/styles",
        },
      ],
    },
  },
});
