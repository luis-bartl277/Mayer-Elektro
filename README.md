# Mayer Elektro – Website

Statische, mobile-first Website für den Elektro-Meisterbetrieb **Mayer Elektro**.
Kein Build-Step, keine Abhängigkeiten – läuft direkt im Browser und ist für
**GitHub Pages** vorbereitet (alle Pfade relativ).

## Dateien
| Datei | Zweck |
|-------|-------|
| `index.html` | Startseite mit allen Abschnitten (Hero, Leistungen, Über uns, Referenzen, Bewertungen, Ablauf, Kontakt, Footer) |
| `impressum.html` | Impressum (Pflicht nach § 5 DDG) |
| `datenschutz.html` | Datenschutzerklärung (DSGVO) |
| `styles.css` | Design-System (CSS-Variablen) + komplettes Styling |
| `script.js` | Mobiles Menü, Footer-Jahr, Formular-Schutz |

## Platzhalter ausfüllen
Alle noch einzutragenden Inhalte sind mit **`[SO]`** bzw. `[ORT]`, `[NAME]`,
`[NUMMER]` usw. markiert (gelb hervorgehoben). Einfach im Text suchen und ersetzen.

Wichtigste Stellen:
- **Kontaktdaten**: Telefon (`tel:`), WhatsApp (`wa.me/…`), E-Mail (`mailto:`), Adresse – in `index.html` und Footer.
- **SEO**: `<title>`, Meta-Description, JSON-LD (`Electrician`) im `<head>` von `index.html` – inkl. Geokoordinaten.
- **Kontaktformular**: In `<form>` das `action`-Attribut auf ein echtes
  [Formspree](https://formspree.io)- oder Netlify-Ziel setzen **und**
  `data-form="placeholder"` entfernen. Erst dann werden Anfragen versendet.
- **Google Maps**: Im Abschnitt Kontakt den auskommentierten `<iframe>`-Einbettungscode einsetzen.
- **Bewertungen**: Zitate manuell ersetzen oder ein Google-Reviews-Widget/API einbinden (Hinweis im Code).
- **Rechtstexte**: `impressum.html` und `datenschutz.html` vollständig ausfüllen (keine Rechtsberatung).

## Farben ändern
Zentral in `styles.css` unter `:root` – z. B. `--color-primary` (Blau) und
`--color-accent` (warmer Akzent). Eine Änderung wirkt sofort auf die ganze Seite.

## Veröffentlichen (GitHub Pages)
1. Repo-Einstellungen → **Pages**
2. Quelle: Branch (z. B. `main`) / Ordner `/root`
3. `index.html` liegt im Wurzelverzeichnis und wird direkt ausgeliefert.

## Lokal ansehen
Einfach `index.html` im Browser öffnen – kein Server nötig.
