# SoMICE.ch – Relaunch-Konzept

## 1. Ziele

- **Qualität:** Fehler bereinigen (Copyright, „caddie“-Text, einheitliche Fakten), professioneller Auftritt.
- **SEO/GEO:** Saubere Mehrsprachigkeit mit hreflang, einzigartigen Meta-Titeln/Beschreibungen, semantischem HTML.
- **Moderne Basis:** Aktuelle Technik, schnell, mobil-first, einfach wartbar.
- **Deployment:** GitHub + Vercel für einfaches Deployment und Preview-Umgebungen.

---

## 2. Technologie-Entscheidung

| Option | Vorteile | Nachteile |
|--------|----------|-----------|
| **Next.js (React)** | SEO via SSR/SSG, Vercel-Native, Komponenten, i18n-Routing | Mehr Komplexität, größeres Bundle |
| **Astro** | Sehr schnell, wenig JS, SSG + optional Islands, gute i18n | Weniger Ökosystem als Next |
| **Eleventy / 11ty** | Statisch, einfach, Nunjucks/Markdown | Weniger „App-Feeling“, manuelles Routing |

**Empfehlung:** **Astro** – statische Event-Agentur-Seite braucht kaum Interaktivität; Astro liefert maximale Performance, klare Mehrsprachigkeit und passt sehr gut zu Vercel. Alternative: **Next.js** mit App Router, wenn du später mehr dynamische Features (Formulare, CMS-Anbindung) planst.

---

## 3. Sprachen & URL-Struktur (GEO)

- **Sprachen:** FR (Standard), DE, EN. IT optional später.
- **URLs:**  
  - `somice.ch/` → Weiterleitung auf `/fr/` (oder Sprachauswahl)  
  - `somice.ch/fr/`, `somice.ch/de/`, `somice.ch/en/`  
  - Pro Sprache gleiche Seiten-Pfade: `/fr/`, `/fr/prestations/`, `/fr/contact/`, etc.
- **Technik:** `hreflang` für alle Sprachversionen + `x-default` (z. B. FR), eindeutige Canonical-URLs.

---

## 4. Seitenstruktur (pro Sprache)

| Seite | Pfad (Beispiel FR) | Inhalt |
|-------|---------------------|--------|
| Start | `/fr/` | Hero, Ziel, Stärken, Teaser Medizin/Unternehmen, Team-Kurzinfo, CTA |
| Prestations | `/fr/prestations/` | Überblick Leistungen |
| Événements médicaux | `/fr/prestations/evenements-medicaux/` | Medizin-Events |
| Événements d'entreprise | `/fr/prestations/evenements-entreprise/` | Firmen-Events |
| Qui sommes-nous | `/fr/equipe/` | Team, Geschichte, Werte |
| 15 ans (optional) | `/fr/15-ans/` | Jubiläum |
| Références / Témoignages | `/fr/referenzen/` | Kundenstimmen |
| Contact | `/fr/contact/` | Adresse, Telefon, E-Mail, Kontaktformular |
| Rechtliches | `/fr/mentions-legales/`, `/fr/confidentialite/` | Impressum, Datenschutz |

Navigation und Footer analog zu aktueller Site, aber bereinigt und einheitlich.

---

## 5. Content & Redaktion

- **Eine verbindliche Quelle für Fakten:** z. B. „21 Mitarbeitende“ (oder aktuelle Zahl) – überall gleich (FR, DE, EN).
- **Copyright:** Dynamisch (z. B. aktuelles Jahr) oder „© 2010–2025 SoMICE Sàrl“.
- **Keine Template-Texte:** Kein „Produkt im Warenkorb“ o. Ä.; Texte nur redaktionell.
- **Bilder:** Bestehende Bilder von somice.ch nutzen (rechtlich prüfen), Platzhalter für fehlende Assets; einheitliche Bildgrößen/Formate.

---

## 6. Design-Richtung

- **Referenz:** Aktuelle Site als inhaltliche Basis, optisch modernisieren.
- **Stil:** Klar, vertrauenswürdig, „Swiss“ (Luft, Typografie, ruhige Farben).
- **Mobile-first:** Navigation (Hamburger auf kleinen Screens), lesbare Schriftgrößen, klickbare Buttons/Links.
- **Barrierefreiheit:** Kontraste, Fokus-States, semantisches HTML, sinnvolle Alt-Texte.

Farben/Logo: von bestehender Seite übernehmen, sofern vorhanden; sonst minimales Farbschema definieren.

---

## 7. SEO-Checkliste

- Eindeutiger `<title>` pro Seite (inkl. Sprachversion), ~50–60 Zeichen.
- Meta-Description pro Seite, ~150–155 Zeichen.
- `hreflang` im `<head>` (fr, de, en, x-default).
- Canonical pro Seite auf die eigene URL.
- Semantische Überschriften (eine H1 pro Seite), saubere Hierarchie.
- Sinnvolle Alt-Texte für alle inhaltlichen Bilder.
- Sitemap(s) pro Sprache bzw. eine Sitemap mit allen URLs.
- Optional: strukturierte Daten (Organization, LocalBusiness) für bessere Snippets.

---

## 8. Ablauf (Schritte mit Bestätigung)

1. **Konzept besprechen** – Du prüfst dieses Dokument; wir passen Technologie, Seiten und Prioritäten an.
2. **Projekt anlegen** – Repo-Struktur, gewählter Stack (z. B. Astro), Basis-Routing und i18n.
3. **Seiten & Layout bauen** – Startseite, Navigation, Footer, dann Unterseiten (Content zunächst mit Platzhaltern/Übernahmen).
4. **Content einpflegen** – Texte FR/DE/EN vereinheitlichen, Meta-Texte, Rechtstexte.
5. **SEO umsetzen** – Title/Meta, hreflang, Canonical, Sitemap.
6. **Lokal testen** – Build, Links, Sprachwechsel, Mobil-Ansicht.
7. **GitHub** – Repo erstellen, push (du bestätigst vor dem ersten Push).
8. **Vercel** – Projekt mit GitHub verbinden, Domain somice.ch konfigurieren (du bestätigst vor Go-Live).

---

## 9. Offene Punkte für die Diskussion

- **Technologie:** Astro vs. Next.js vs. anderes?
- **Sprachen:** Nur FR/DE/EN oder IT von Anfang an mit einplanen?
- **Formular:** Kontaktformular nur Frontend (E-Mail-Link) oder mit Backend/Service (z. B. Vercel Serverless, Formspree, etc.)?
- **CMS:** Später Redakteure ohne Code – dann schon Headless CMS (z. B. Sanity, Contentful) mit einplanen oder erstmal statisch?
- **Domain:** Relaunch unter somice.ch sofort oder erst unter Subdomain/anderer Domain testen?

Sobald wir diese Punkte geklärt haben, geht es mit Schritt 2 (Projekt anlegen) weiter.
