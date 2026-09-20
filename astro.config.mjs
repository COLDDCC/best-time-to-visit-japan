// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { publishedFoliageSpots } from "./src/data/foliage.ts";

// The Kyoto koyo hub renders a placeholder (and noindex) until the first spot has
// enough sourced seasons, so keep it out of the sitemap until then.
const koyoIsLive = publishedFoliageSpots.length > 0;

// https://astro.build/config
export default defineConfig({
  site: "https://best-time-japan.com",
  trailingSlash: "never",
  integrations: [react(), sitemap({
    filter: (page) => !page.includes("/404") && (koyoIsLive || !page.includes("/koyo/")),
  })],
  vite: {
    plugins: [tailwindcss()],
  },
});
