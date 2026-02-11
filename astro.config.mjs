import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.somice.ch',
  i18n: {
    locales: ['fr', 'de', 'en'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
