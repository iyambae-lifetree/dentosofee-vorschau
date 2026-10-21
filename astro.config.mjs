// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// BASE_PATH: z. B. "/dentosofee-vorschau/" für GitHub Pages, Standard "/".
// SITE_URL: Ursprung der Vorschau, Standard GitHub Pages der Organisation.
const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || 'https://iyambae-lifetree.github.io';

export default defineConfig({
  output: 'static',
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
