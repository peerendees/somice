import { defineConfig } from 'astro/config';

// Prototyp: Vercel setzt VERCEL_URL. Später für somice.ch: PUBLIC_SITE_URL=https://www.somice.ch
const site = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.PUBLIC_SITE_URL || undefined;

export default defineConfig({
  site,
  i18n: {
    locales: ['fr', 'de', 'en'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
