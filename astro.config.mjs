// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://best-time-japan.com",
  trailingSlash: "never",
  i18n: { defaultLocale: "en", locales: ["en", "ja"], routing: { prefixDefaultLocale: false } },
  integrations: [react(), sitemap({
    filter: (page) => !page.includes("/404"),
  })],
  vite: {
    server: { allowedHosts: ["terminal.local"] },
    plugins: [tailwindcss()],
  },
});
