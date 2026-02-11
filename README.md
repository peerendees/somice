# SoMICE Sàrl – Website Relaunch

Statische Mehrsprachen-Website (FR, DE, EN) mit Astro. Kontakt per E-Mail-Link, Deployment auf Vercel.

## Voraussetzungen

- Node.js 18+
- npm

## Lokal starten

```bash
npm install
npm run dev
```

Öffne [http://localhost:4321](http://localhost:4321). Root `/` leitet auf `/fr/` weiter.

## Build

```bash
npm run build
```

Ausgabe in `dist/`.

## Projektstruktur

- `src/pages/` – Seiten pro Sprache: `fr/`, `de/`, `en/`
- `src/layouts/BaseLayout.astro` – gemeinsames Layout, Navigation, Footer, SEO (Title, Meta, hreflang, Canonical)
- `src/i18n/translations.ts` – Navigation & Footer-Texte
- `public/robots.txt` – Verweis auf Sitemap
- `src/pages/sitemap.xml.ts` – generierte Sitemap

## Nächste Schritte

1. **Lokal testen:** `npm install` → `npm run dev` → prüfen
2. **GitHub:** Repo anlegen, Code pushen
3. **Vercel:** Projekt mit GitHub verbinden, Test-Deployment
