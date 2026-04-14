# Cursor-Prompt: KI-Kickstart-Seite in SoMICE-Projekt integrieren

## Kontext

Im GitHub-Repo `peerendees/somice` liegt ein Astro-Projekt, das auf Vercel deployed wird (Projekt-ID: `prj_tzkMVUVBrJHgdAmL2bd5y7Gj5aWZ`, Team: `team_7heOLH7j2P5oyd3XONZF5I2s`). Das Projekt hat aktuell kein Custom Domain – nur die Standard-Vercel-URLs.

Ich möchte eine statische HTML-Seite (`somice-ki-kickstart.html`, liegt im Repo-Root oder wird bereitgestellt) unter der Route `/ki-kickstart` erreichbar machen.

## Aufgabe

### Schritt 1: Framework prüfen

Prüfe die Astro-Konfiguration (`astro.config.mjs`, `package.json`) und kläre:
- Welche Astro-Version ist im Einsatz?
- Ist `output` auf `static` oder `server`/`hybrid` gesetzt?
- Gibt es bereits ein `public/`-Verzeichnis mit statischen Dateien?

### Schritt 2: Statische HTML-Datei integrieren

**Variante A (bevorzugt):** Wenn Astro im Static-Modus läuft, lege die HTML-Datei als `public/ki-kickstart/index.html` ab. Astro kopiert Dateien aus `public/` unverändert in den Build-Output. Die Seite wäre dann unter `/ki-kickstart` bzw. `/ki-kickstart/index.html` erreichbar.

**Variante B (falls Variante A nicht funktioniert):** Falls Astro die Route abfängt oder Probleme mit der statischen Datei entstehen, erstelle stattdessen eine Astro-Seite `src/pages/ki-kickstart.astro`, die die HTML-Datei 1:1 rendert (kein Astro-Layout, kein zusätzliches Wrapping – der gesamte HTML-Inhalt wird als Raw-Output ausgegeben).

### Schritt 3: DSGVO-konforme Fonts

Die HTML-Datei lädt aktuell Google Fonts über CDN:
```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lora:wght@300;400;600&family=JetBrains+Mono:wght@300;400;700&display=swap" rel="stylesheet">
```

Das ist in Produktion nicht DSGVO-konform (IP-Übertragung an US-Server). Ersetze das durch lokal gehostete Fonts:

1. Lade die WOFF2-Dateien für Bebas Neue (Regular), Lora (300, 400, 600) und JetBrains Mono (300, 400, 700) herunter
2. Lege sie unter `public/fonts/` ab
3. Ersetze den Google-Fonts-Link durch `@font-face`-Deklarationen im `<style>`-Block der HTML-Datei

### Schritt 4: Deployment testen

1. Führe `npm run build` (bzw. den Astro-Build-Befehl) aus
2. Prüfe, ob die Datei im Build-Output unter `dist/ki-kickstart/index.html` liegt
3. Starte den Preview-Server und teste, ob `/ki-kickstart` korrekt gerendert wird
4. Falls Probleme: Fehler dokumentieren und Variante B versuchen

### Schritt 5: Push und Vercel-Deployment

Nach erfolgreichem lokalen Test:
1. Committe und pushe auf `main`
2. Warte auf das Vercel-Deployment
3. Prüfe die URL: `https://somice-peerendees-projects.vercel.app/ki-kickstart`

## Wichtig

- Die HTML-Datei darf NICHT durch Astro-Layouts oder -Komponenten verändert werden. Sie muss 1:1 ausgeliefert werden.
- Kein Rewrite, kein Redirect – die Route `/ki-kickstart` soll direkt die HTML-Datei liefern.
- Falls der `public/`-Ansatz Probleme macht (z.B. 404, falsche MIME-Types, Astro-Routing-Konflikte), wechsle zu Variante B und dokumentiere warum.

## Subdomain (separater Schritt, NICHT durch Cursor)

Die Subdomain `somice.berent.ai` wird separat über Vercel Dashboard + Cloudflare eingerichtet. Dafür ist kein Code-Änderung nötig. Die finale URL wird: `https://somice.berent.ai/ki-kickstart`
