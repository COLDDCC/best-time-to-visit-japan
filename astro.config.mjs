// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://best-time-japan.com",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  integrations: [react(), sitemap({
    filter: (page) => !page.includes("/404"),
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
