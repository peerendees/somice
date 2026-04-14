# Cursor-Prompt: Anpassungen KI-Kickstart-Seite

## Kontext

Nach der Umbenennung liegen `somice-ki-kickstart.html` und der Deployment-Prompt `.cursor/cursor-prompt-somice-kickstart.md` im Projekt. (Historisch: `somice-ki-schnellstart.html` und `cursor-prompt-somice-schnellstart.md`.)

## Aufgabe 1: Umbenennung „Schnellstart" → „Kickstart"

Durchgehend in der gesamten Datei:

1. **Dateiname:** `somice-ki-schnellstart.html` → `somice-ki-kickstart.html`
2. **Alle Textvorkommnisse** im HTML (Titel, Hero, Footer, Meta-Tags, Kommentare): „Schnellstart" → „Kickstart", „KI-SCHNELLSTART" → „KI-KICKSTART"
3. **Im bestehenden Cursor-Prompt** (`.cursor/cursor-prompt-somice-schnellstart.md`):
   - Alle Verweise auf `schnellstart` in Routen, Dateinamen und Text durch `kickstart` ersetzen
   - Route wird `/ki-kickstart` statt `/ki-schnellstart`
   - Dateiname des Prompts selbst umbenennen zu `cursor-prompt-somice-kickstart.md`

## Aufgabe 2: Wort „aber" durch „allerdings" ersetzen

Durchsuche den gesamten Fliesstext der HTML-Datei nach dem Wort „aber" (nicht in Code, Attributen oder technischen Begriffen – nur im lesbaren Textinhalt).

**Wichtig:** Nicht blind ersetzen. „allerdings" ist kein 1:1-Ersatz für „aber", weil es im Deutschen eine andere Satzstellung erfordert:

- „aber" als Konjunktion: „Die Quick Wins funktionieren, aber sie ersetzen keine Strategie."
- „allerdings" als Adverb: „Die Quick Wins funktionieren. Sie ersetzen allerdings keine Strategie."

Bei jedem Vorkommen: Prüfe den Satz, ersetze „aber" durch „allerdings" und stelle den Satzbau korrekt um (Inversion oder Satzaufteilung, wenn nötig). Das Ergebnis muss flüssiges, natürliches Deutsch sein.

## Aufgabe 3: Hell-Dunkel-Umschalter (Dark/Light Toggle)

Baue einen Toggle-Button in die HTML-Seite ein. Die Implementierung orientiert sich exakt an der bestehenden Logik aus `blog.berent.ai` (Repo: `peerendees/blog`). Hier die Referenz:

### Button-HTML (in der `<nav>`, rechts neben dem Brand-Link)

```html
<button id="theme-toggle" class="theme-toggle" aria-label="Farbschema wechseln">
  <svg id="icon-moon" class="hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646Z"/>
  </svg>
  <svg id="icon-sun" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
  </svg>
</button>
```

### Button-CSS (exakt wie im Blog)

```css
.theme-toggle {
  background: none;
  border: 1px solid var(--border);
  border-radius: 6px;
  padding: 0.375rem;
  cursor: pointer;
  color: var(--muted2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s, color 0.2s;
  margin-left: auto;
}
.theme-toggle:hover {
  border-color: var(--copper);
  color: var(--copper);
}
.theme-toggle svg {
  width: 16px;
  height: 16px;
}
.hidden { display: none; }
```

### Light-Theme CSS-Variablen (exakt wie im Blog)

```css
[data-theme="light"] {
  --bg:      #F5F0E8;
  --card:    #EDE6DA;
  --border:  #D4C9B8;
  --copper:  #B5742A;
  --gold:    #E8C98A;
  --text:    #2A1A08;
  --muted:   #7A6A58;
  --muted2:  #9A8870;
}
```

### Zusätzliche Light-Theme-Anpassungen

Die Navigationsleiste muss im Light-Theme ihren Hintergrund anpassen:

```css
[data-theme="light"] nav {
  background: rgba(245,240,232,.92);
}
```

### JavaScript (am Ende des `<body>`, exakt wie im Blog)

```html
<script>
(function() {
  var saved = localStorage.getItem('theme');
  if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');

  function toggle() {
    var isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
    update();
  }

  function update() {
    var isLight = document.documentElement.getAttribute('data-theme') === 'light';
    var moon = document.getElementById('icon-moon');
    var sun = document.getElementById('icon-sun');
    if (moon && sun) {
      moon.classList.toggle('hidden', !isLight);
      sun.classList.toggle('hidden', isLight);
    }
  }

  document.getElementById('theme-toggle').addEventListener('click', toggle);
  update();
})();
</script>
```

### Hinweis: Flash-Vermeidung

Zusätzlich dieses Inline-Script im `<head>` VOR dem Stylesheet platzieren, damit beim Laden kein dunkler Flash erscheint, wenn der User zuvor Light gewählt hat:

```html
<script>
  (function() {
    var t = localStorage.getItem('theme');
    if (t === 'light') document.documentElement.setAttribute('data-theme', 'light');
  })();
</script>
```

## Reihenfolge

1. Aufgabe 1 (Umbenennung) zuerst – damit alle Dateinamen stimmen
2. Aufgabe 2 (aber → allerdings)
3. Aufgabe 3 (Toggle nach Blog-Vorbild)
4. Dann weiter mit dem Deployment-Prompt aus `.cursor/cursor-prompt-somice-kickstart.md` (nach Umbenennung aus `cursor-prompt-somice-schnellstart.md`).
