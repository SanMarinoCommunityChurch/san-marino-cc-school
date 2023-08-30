import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://www.smccnurseryschool.com",
  scopedStyleStrategy: "class",
  integrations: [tailwind({
    applyBaseStyles: false
  }), react(), sitemap(), svelte()]
});