# Dentosofee: Vorschau-Website (Phase 1)

Statische Astro-Seite für die Praxis Dentosofee von Hilda Miryam Loewenstein, Frankfurt.
Grundlage: `Ideaverse/Vorhaben/Aktiv/Dentosofee – Website-Spezifikation Phase 1.md` und `../TEXTE-GEGENUEBERSTELLUNG.md` (Nr. 1–44, ohne Nr. 27 und 41).
Die gesamte Vorschau steht auf `noindex, nofollow` (Meta-Tag auf jeder Seite und `robots.txt`).

## Starten

```bash
npm install
npm run dev        # Entwicklung auf http://localhost:4321
npm run build      # baut nach dist/
npm run preview    # zeigt dist/ lokal an
```

Node 22.12 oder neuer.

### Unter einem Unterpfad bauen (GitHub Pages)

```bash
BASE_PATH=/dentosofee-vorschau/ SITE_URL=https://iyambae-lifetree.github.io npm run build
```

`BASE_PATH` ist standardmäßig `/`, `SITE_URL` standardmäßig `https://iyambae-lifetree.github.io`.
Alle internen Links laufen über `url()` aus `src/lib/url.ts`, Bilder und Schriften über Astro, darum funktioniert jeder Basispfad.

## Veröffentlichen auf GitHub Pages

1. Repo `iyambae-lifetree/dentosofee-vorschau` anlegen und den Inhalt dieses Ordners `site/` hineinlegen (ohne `node_modules`, `dist`, `pruefbilder`).
2. In den Repo-Einstellungen unter Pages „Source: GitHub Actions“ wählen.
3. Auf `main` pushen. `.github/workflows/deploy.yml` baut mit `BASE_PATH=/dentosofee-vorschau/` und veröffentlicht.

Hinweis: Auf einer Projektseite unter `github.io/dentosofee-vorschau/` liegt `robots.txt` nicht an der Wurzel der Domain und wird von Suchmaschinen dort nicht gelesen. Der `noindex`-Meta-Tag auf jeder Seite greift trotzdem.

**Für den Go-Live (Phase 2) auf dentosofee.de:** `noindex` in `src/layouts/Basis.astro` entfernen, `public/robots.txt` auf `Allow: /` mit Sitemap-Verweis ändern, `SITE_URL=https://dentosofee.de` und `BASE_PATH=/` setzen.

## Wo was geändert wird

| Was | Datei |
|---|---|
| Alle Texte, Fragen und Antworten, Leistungen, Preise, Meta-Titel | `src/data/site.ts` |
| Buchungslink (Calendall) | `BUCHUNG_URL` in `src/data/site.ts` |
| E-Mail, Telefon, Anschrift, Disclaimer | `praxis` in `src/data/site.ts` |
| Farben, Schriftgrößen, Abstände | `src/styles/global.css` (Tokens oben in `:root`) |
| Logo-Blatt, Fotos | `src/assets/` (Datei gleichen Namens ersetzen, Astro optimiert automatisch) |
| Favicons, Vorschaubild für Teilen | `public/favicon-32.png`, `public/apple-touch-icon.png`, `public/og-blatt.png` |
| Kopf, Fuß, Einladungsblock | `src/components/Header.astro`, `Footer.astro`, `CtaVorgespraech.astro` |
| Strukturierte Daten (JSON-LD) | `src/layouts/Basis.astro` (Praxis, Brotkrumen), `src/pages/dentosophie.astro` (FAQPage) |
| Seiten | `src/pages/*.astro` |

Bild-Platzhalter sind Komponenten `<BildSlot name="…" beschreibung="…" />`. Für ein echtes Foto das Bild nach `src/assets/` legen und den BildSlot durch `<Image src={…} alt="…" />` ersetzen.

Preise bitte nur nach Spezifikation §7.2 ändern. Die Preise auf `/leistungen` werden aus derselben Tabelle gelesen. Die drei Preiszeilen im Kasten auf der Startseite stehen direkt in `src/pages/index.astro`.

## Prüfen

```bash
npm run build && python3 -m http.server 4321 -d dist
../.venv/bin/python pruefung/pruefen.py http://127.0.0.1:4321/ pruefbilder
```

Das Skript macht ganzseitige Screenshots in 1440 und 390 Pixel Breite, meldet fehlgeschlagene Anfragen, prüft alle internen Links, horizontales Scrollen, den aktiven Navigationspunkt und das Burger-Menü. Ergebnis der letzten Prüfung: `PRUEFBERICHT.md`.

## Offene Platzhalter (TODO)

| Platzhalter | Wo | Von wem |
|---|---|---|
| Logo als Vektordatei (Gingko und Fee). Bis dahin freigestelltes Blatt von der Visitenkarte | `src/components/Header.astro`, `src/assets/logo-blatt.png` | Miryam |
| E-Mail-Adresse bestätigen (`kontakt@dentosofee.de` steht nur als Text, nicht verlinkt) | `src/data/site.ts`, Kontakt, Footer, Impressum | Miryam / Phase 2 |
| Preis Psychosomatische Energie-Fußmassage (sichtbar „Preis folgt“) | `src/data/site.ts` (Leistung und Preistabelle) | Miryam |
| Endgültige Texte Bowtech/Bowen und Fußmassage (sichtbar „Eine ausführlichere Beschreibung folgt.“) | `src/data/site.ts` | Miryam |
| Fotos: Balancer, Praxisraum, Miryam bei der Arbeit, Balancer in der Hand, Praxis außen | BildSlots auf `/dentosophie`, `/ueber-mich`, `/kontakt` | Fotoshooting |
| Impressum: Anschrift bestätigen, Rechtsform, Verantwortliche, weitere Pflichtangaben | `src/pages/impressum.astro` | Miryam, Anwalt |
| Datenschutz: Verantwortliche, Hosting, Calendall, Betroffenenrechte | `src/pages/datenschutz.astro` | Miryam, Anwalt |
| Öffnungszeiten und Telefon im JSON-LD | `src/layouts/Basis.astro` | Miryam |
| Wissen: Beiträge | `src/pages/wissen.astro` | später |
| KI-Assistent (Phase 2, nur Stub) | `src/components/KiAssistent.astro` | Phase 2 |
| HWG-Prüfung durch Anwalt vor dem Livegang | alle Texte | vor Phase 2 |
