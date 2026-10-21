# Prüfbericht Dentosofee-Vorschau

Stand 21.10.2026, Astro 7.4.2, lokal gebaut. Nichts hochgeladen, nichts gepusht.

## Technische Prüfung

| Prüfung | Ergebnis |
|---|---|
| `npm run build` | fehlerfrei, 10 Seiten (9 Seiten + 404) |
| Screenshots 1440 und 390, ganzseitig | 21 Bilder in `pruefbilder/` (dazu das geöffnete Handy-Menü), alle selbst angesehen |
| Horizontales Scrollen bei 390 | auf keiner Seite (scrollWidth = clientWidth) |
| Eine `h1` je Seite | ja, alle 10 |
| Aktiver Navigationspunkt | Start, Dentosophie, Leistungen, Preise, Über mich, Wissen, Kontakt jeweils markiert (`aria-current="page"`) |
| Burger-Menü bei 390 | öffnet (`aria-expanded="true"`, Menü sichtbar), schließt per Klick und Escape |
| Fehlgeschlagene Anfragen, Basis `/` | keine |
| Fehlgeschlagene Anfragen, `BASE_PATH=/dentosofee-vorschau/` | keine; Links, Bilder (webp), Schriften (woff2), Favicons, Sitemap tragen den Unterpfad |
| Interne Links (alle Seiten, beide Basen) | alle 10 Ziele antworten mit 200 |
| Externe Links | nur Calendall, alle mit `target="_blank" rel="noopener"` und Hinweis „öffnet sich in neuem Fenster“ |
| Schriften | Lora und Poppins selbst gehostet (@fontsource, nur latin), keine Anfrage an fremde Server |
| Skripte | nur das kleine Burger-Skript, kein Tracking, keine Cookies |

### Lighthouse 13.5 (lokal, headless Chrome)

| Seite | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Start, mobil | 98 | 96 | 100 | 69 |
| Start, Desktop | 100 | 100 | 100 | 69 |
| Preise, mobil | 99 | 96 | 100 | 69 |
| Preise, Desktop | 100 | 100 | 100 | 69 |

SEO 69 kommt allein von `noindex` und `robots.txt: Disallow` (gewollt für die Vorschau). Ohne diese Sperre fällt der Abzug weg.
Accessibility 96 mobil: Lighthouse bemängelt den Kontrast der Wortmarke „Dentosofee“ (#4E8F3A auf #F6F1E7, 3,5:1). Das ist der vorgegebene Logo-Farbton; Logos und Wortmarken sind von WCAG 1.4.3 ausgenommen. Der Link selbst trägt das Label „Dentosofee, zur Startseite“.

### Wortprüfung über `dist/`

| Begriff | Fund |
|---|---|
| Tinnitus, Migräne, Parodontitis, Heilpraktiker, Indikation, Patient, Therapie, antibakteriell | keiner |
| 680 | keiner |
| Zahnfee | keiner (auch nicht im HTML-Kommentar) |
| Karies | einmal, auf `/leistungen` in der Dentcoat-Voraussetzung „zahnärztliche Untersuchung inklusive Röntgen, um Karies auszuschließen“ (wörtlich Spezifikation §7.1, kein Wirkversprechen) |
| „—“ (Geviertstrich) | keiner |
| „–“ als Satzzeichen | keiner; nur in Spannen (4–5, 6–8, 4–8) |
| 780 € | Preise-Seite und Q&A 6 |

## Akzeptanzkriterien Spezifikation §10

| Kriterium | Stand | Beleg |
|---|---|---|
| Alle Seiten aus §4 vorhanden, Texte aus §5–7, Du-Form, rein deutsch | erfüllt | `/`, `/dentosophie`, `/leistungen`, `/preise`, `/ueber-mich`, `/wissen`, `/kontakt`, `/impressum`, `/datenschutz`, 404; Texte zentral in `src/data/site.ts`, Fassung der Gegenüberstellung Nr. 1–44 ohne 27 und 41 |
| Preise exakt wie §7.2; Erstsitzung 780 €; keine erfundenen Zahlen | erfüllt | `preise` in `src/data/site.ts`; Fußmassage ohne Zahl, sichtbar „Preis folgt“; Dentcoat-Aktion 500 € als Nebenhinweis; Infrarot „vsl. 20 €“, „bald verfügbar“ |
| Q&A als Akkordeon und als FAQPage-JSON-LD | erfüllt | `/dentosophie#fragen`, 10 `<details>`; JSON-LD `FAQPage` mit 10 Fragen, gültiges JSON |
| Buchungs-CTA überall, auf Calendall verlinkt | erfüllt | Kopf (Knopf, im Handy-Menü zusätzlich), Einladungsblock am Ende jeder Seite, Start, Dentosophie, Kontakt |
| Design folgt Tokens; natürlich, warm, hochwertig; Gingko dezent | erfüllt | Tokens aus dem Mockup in `global.css`; Startseite entspricht dem Mockup; Gingko-SVG im Einladungsblock, Fuß, Trenner, Bild-Platzhaltern; Logo-Blatt |
| `/impressum` und `/datenschutz` als Gerüst mit markierten TODO | erfüllt | sichtbare gestrichelte TODO-Kästen plus HTML-Kommentare |
| HWG-Leitplanken §8.1; Disclaimer sichtbar | erfüllt | Disclaimer im Fuß jeder Seite und auf `/leistungen`, `/dentosophie`, `/ueber-mich`; Beruf nur „ZMP (Zahnmedizinische Prophylaxe-Assistentin)“; Dentcoat nur erlebbare Eigenschaften; „Begleitung“ und „Sitzung“ statt „Behandlung“; anwaltliche Prüfung vor Go-Live bleibt offen |
| Vorschau-URL deployt; Preview `noindex`; Lighthouse-Ziele | teilweise | `noindex` erfüllt; Lighthouse Performance ≥ 95, Accessibility ≥ 90, Best Practices ≥ 95 erfüllt, SEO bewusst durch noindex gedrückt; **Deploy offen** (laut Auftrag nicht hochgeladen, Workflow liegt bereit) |
| Logo- und Bild-Slots als Platzhalter markiert, leicht austauschbar | erfüllt | `BildSlot` mit sichtbarem „Foto folgt“, `data-bildslot`-Namen und TODO-Kommentar; Logo-Blatt als Datei in `src/assets/` mit TODO für Vektordatei |
| `README.md`: starten, Inhalte pflegen, was offen ist | erfüllt | `README.md` mit TODO-Liste |

## Abweichungen von Spezifikation und Mockup

- **Tailwind und Content Collections** (§1) nicht verwendet: reines CSS mit den Mockup-Tokens und eine Datendatei `src/data/site.ts`. Der Auftrag hat beides freigestellt.
- **Farbwerte**: Mockup-Tokens statt §3 (teal #25776A statt #2E8C7B, gold #D9B45E, muted #56655F, dazu gold-text #8A6A1F), weil nur so weißer und kleiner Text AA erreicht. So war es vorgegeben.
- **Logo**: statt Platzhalter-Wortmarke in Serife (§2) das freigestellte Blatt plus Poppins-Wortmarke wie im Mockup, mit TODO für die Vektordatei.
- **Startseite**: Die Zeile über der Überschrift im Mockup („Praxis für ganzheitliche Zahngesundheit · Frankfurt“) entfällt (Julians Regel: keine Etiketten über Überschriften). Dafür steht der Untertitel aus §5.1 direkt unter der Überschrift. Der Satz „Seit über 30 Jahren … betrachten.“ (§5.1, Nr. 3), der im Mockup fehlte, ist wieder drin, ebenso „Was du bei mir vor allem spüren sollst:“ vor dem Kernsatz.
- **Vertrauenszeile**: wie im Mockup (30+, ZMP, 1:1, FFM), aber „Praxis in Frankfurt“ statt „Seckbach / Bornheim“, weil der Stadtteil nicht in der Spezifikation steht.
- **Über-mich-Abschnitt Startseite**: „mit Herzblut … spezialisiert“ nach Spezifikation §5.3 statt „Expertin für …“ aus dem Mockup.
- **Leitsatz und Flyer-Satz** („Wenn die Funktionen im Mundraum …“, „Mund, Kiefer und Zähne sind nicht isoliert …“) stehen nicht in der Spezifikation, sondern sind Miryams Originalsätze aus dem Flyer (VORBEREITUNG.md), im Mockup bereits gezeigt.
- **Bowen und Fußmassage**: Übergangstexte aus §7.1 plus sichtbarer Hinweis „Eine ausführlichere Beschreibung folgt.“ (Gegenüberstellung wollte nur „Beschreibung folgt“, der Auftrag die Übergangstexte; beides kombiniert).
- **Bilder**: webp in mehreren Breiten über `astro:assets`; avif nicht zusätzlich erzeugt.
