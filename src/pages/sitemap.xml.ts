import type { APIRoute } from 'astro';

// Nutzt bei Vercel-Build die VERCEL_URL; sonst PUBLIC_SITE_URL oder aktuellen Origin
const site = import.meta.env.SITE || '';
const locales = ['fr', 'de', 'en'];
const paths = [
  '',
  '/prestations/',
  '/prestations/evenements-medicaux/',
  '/prestations/evenements-entreprise/',
  '/equipe/',
  '/15-ans/',
  '/referenzen/',
  '/contact/',
  '/mentions-legales/',
  '/confidentialite/',
];

export const GET: APIRoute = () => {
  const urls = locales.flatMap((locale) =>
    paths.map((path) => `${site}/${locale}${path}`)
  );
  const urlList = urls
    .map(
      (url) =>
        `  <url>
    <loc>${url}</loc>
    <changefreq>monthly</changefreq>
  </url>`
    )
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlList}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
