import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://audunhov.github.io",
  base: "gokk",
  integrations: [vue(), tailwind()]
});