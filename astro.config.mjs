import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeCzechSpaces } from './src/lib/rehype-cs.mjs';

export default defineConfig({
  site: 'https://hajenkaspicak.cz',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (page) => !page.includes('/dekujeme/') })],
  markdown: { rehypePlugins: [rehypeCzechSpaces] },
});
