import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [solidPlugin(), dts()],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    lib:
      process.env.NODE_ENV === "production"
        ? {
            entry: resolve(__dirname, "src/index.tsx"),
            fileName: "solid-lib",
            formats: ["es", "cjs"],
          }
        : undefined,
    rollupOptions: {
      external: ["solid-js", "solid-js/web", "solid-js/store"],
    },
  },
});
