// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://when-to-visit-japan.com",
  trailingSlash: "never",
  integrations: [react(), sitemap({
    filter: (page) => !page.includes("/404"),
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
