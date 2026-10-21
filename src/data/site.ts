// Zentrale Inhalte der Dentosofee-Vorschau.
// Grundlage: Spezifikation Phase 1 (§5–§8) und TEXTE-GEGENUEBERSTELLUNG.md (Nr. 1–44, ohne Nr. 27 und 41).
// Preise, Fakten und HWG-Formulierungen nur nach Spezifikation ändern.

export const BUCHUNG_URL =
  'https://app.calendall.net/public/booking?id=22ef761f-a5fe-4d81-ab8d-d461f322d4b5';

export const praxis = {
  name: 'Dentosofee',
  inhaberin: 'Hilda Miryam Loewenstein',
  beruf: 'ZMP (Zahnmedizinische Prophylaxe-Assistentin)',
  berufLang: 'ZMP (Zahnmedizinische Prophylaxe-Assistentin) mit über 30 Jahren Erfahrung',
  untertitel: 'Praxis für ganzheitliche Zahngesundheit',
  strasse: 'Heinz-Herbert-Karry-Str. 4b',
  plz: '60389',
  ort: 'Frankfurt am Main',
  // TODO: E-Mail-Adresse noch nicht bestätigt (Spezifikation §5.4: einzurichten, bis dahin nur als Text, nicht verlinken).
  email: 'kontakt@dentosofee.de',
  telefon: 'nach Vereinbarung',
  disclaimer:
    'Meine Angebote ersetzen keine zahnärztliche oder ärztliche Behandlung. Ich stelle keine Diagnosen.',
};

// Navigation (Gegenüberstellung Nr. 37). Pfade ohne führenden Schrägstrich, Basis kommt über url().
export const navigation = [
  { label: 'Start', pfad: '' },
  { label: 'Dentosophie', pfad: 'dentosophie/' },
  { label: 'Leistungen', pfad: 'leistungen/' },
  { label: 'Preise', pfad: 'preise/' },
  { label: 'Über mich', pfad: 'ueber-mich/' },
  { label: 'Wissen', pfad: 'wissen/' },
  { label: 'Kontakt', pfad: 'kontakt/' },
];

// Einladungsblock am Seitenende (Nr. 39)
export const cta = {
  titel: 'Lass uns in Ruhe sprechen.',
  text: 'Im kostenfreien Vorgespräch schauen wir gemeinsam, ob meine Begleitung zu dir passt. In Ruhe und unverbindlich.',
  button: 'Kostenfreies Vorgespräch buchen',
  hinweis: 'Die Online-Buchung öffnet sich in einem neuen Fenster.',
};

// Startseite (§5.1, Nr. 1–9)
export const start = {
  h1a: 'Ganzheitliche Zahngesundheit.',
  h1b: 'Den Menschen im Blick.',
  untertitel: 'Dentosophie · Ganzheitliche Zahnpflege · Praxis in Frankfurt',
  absaetze: [
    'Schön, dass du hier bist. In meiner Praxis in Frankfurt begleite ich dich dabei, die Zusammenhänge rund um Mund, Kiefer und Atmung zu verstehen und wieder in dein Gleichgewicht zu finden.',
    'Seit über 30 Jahren arbeite ich in der Zahngesundheit. Je länger ich das tue, desto klarer sehe ich: Zähne lassen sich nicht losgelöst vom übrigen Körper betrachten.',
    'Bei mir geht es nicht um eine schnelle Behandlung nach Schema. Ich nehme mir Zeit, schaue genau hin und begleite dich so, wie es zu dir passt.',
  ],
  kernEinleitung: 'Was du bei mir vor allem spüren sollst:',
  kern: 'Hier werde ich gesehen. Hier nimmt sich jemand Zeit für mich.',
  vertrauen: [
    { marke: '30+', text: 'Jahre Erfahrung' },
    { marke: 'ZMP', text: 'Zahnmedizinische Prophylaxe-Assistentin' },
    { marke: '1:1', text: 'Individuelle Begleitung' },
    { marke: 'FFM', text: 'Praxis in Frankfurt' },
  ],
  wegeTitel: 'Wo möchtest du anfangen?',
  // Originalsatz aus Miryams Flyer (VORBEREITUNG.md §1)
  wegeText:
    'Mund, Kiefer und Zähne sind nicht isoliert. Sie stehen in Verbindung mit Atmung, Haltung, Nervensystem und innerer Anspannung.',
  wege: [
    {
      titel: 'Dentosophie',
      text: 'Kauen, Schlucken und Atmen Schritt für Schritt neu einüben und den Biss harmonisieren. Mein Herzensthema.',
      link: 'Mehr über Dentosophie',
      pfad: 'dentosophie/',
    },
    {
      titel: 'Ganzheitliche Zahnpflege',
      text: 'Sanfte Prophylaxe und Pflege, abgestimmt auf dich und deine Zähne.',
      link: 'Zur Zahnpflege',
      pfad: 'leistungen/#zahnpflege',
    },
    {
      titel: 'Über mich',
      text: 'Über 30 Jahre Erfahrung und ein achtsamer Blick auf den ganzen Menschen.',
      link: 'Mehr über mich',
      pfad: 'ueber-mich/',
    },
  ],
};

// Dentosophie (§5.2, Nr. 10–19)
export const dentosophie = {
  einleitung: [
    'Im Mundraum laufen drei Funktionen ganz unbewusst ab: Kauen, Schlucken und Atmen. Mit einem individuell angepassten, weichen Silikonkissen, dem Balancer, übst du diese Funktionen Schritt für Schritt wieder physiologisch ein, also so, wie dein Körper es vorgesehen hat. So finden sie wieder harmonisch zusammen.',
    'So lassen sich Disharmonien im Mundraum ausgleichen. Viele Menschen erleben mit der Zeit einen satteren Biss, gelöstere Verspannungen und eine aufrechtere Haltung. Über den geübten Mundschluss stellt sich häufig ganz von selbst die Nasenatmung ein. Viele spüren dann mehr Energie und ein Wohlbefinden, das Körper, Geist und Seele erreicht.',
  ],
  balancerTitel: 'Der Balancer, dein tägliches Übungsgerät',
  balancerText:
    'Nach einer Aufbauphase von rund zwei Wochen trägst du ihn täglich: etwa eine Stunde tagsüber, dazu eine kurze 5-Minuten-Übung und über Nacht.',
  kommenTitel: 'Womit Menschen zu mir kommen',
  kommen: [
    'Zahn- & Kieferfehlstellungen',
    'Ungleichgewicht im Kiefer',
    'Knirschen & Pressen (auch bei Kindern)',
    'Kieferknacken',
    'Schnarchen',
    'Mundatmung',
    'muskuläre Verspannungen',
  ],
  hinweis:
    'Dentosophie ist eine funktionelle, begleitende Methode. Sie ersetzt keine zahnärztliche oder ärztliche Behandlung, und ich stelle keine Diagnosen.',
  ablaufTitel: 'Ablauf',
  ablauf: [
    {
      titel: 'Die erste Sitzung',
      text: 'Die erste Sitzung ist die ausführlichste. Mit posturologischen Tests, also kleinen Tests deiner Körperhaltung, findet dein Körper seinen passenden Balancer. Den nimmst du gleich mit. Bei Bedarf nehmen wir Abdrücke, dazu kommen Fotos und deine ersten Übungen.',
    },
    {
      titel: 'Üben im Alltag',
      text: 'Nach rund zwei Wochen Aufbauphase trägst du den Balancer täglich: etwa eine Stunde tagsüber, dazu eine kurze 5-Minuten-Übung und über Nacht.',
    },
    {
      titel: 'Gemeinsam weiter',
      text: 'Danach sehen wir uns etwa alle 4–8 Wochen zur Verlaufskontrolle. Ab dem 3. Termin geht das auch per Videocall, dafür schickst du mir vorher ein paar Fotos. Am liebsten sehe ich dich aber persönlich.',
    },
  ],
  dauerTitel: 'Dauer',
  dauer: [
    { wer: 'Erwachsene', text: 'in der Regel ca. 6 Monate (4–5 Termine).' },
    {
      wer: 'Kinder',
      text: 'ca. 12 Monate (6–8 Termine), möglichst persönlich. Gerade bei Kindern sind regelmäßige Termine wichtig.',
    },
  ],
  faqTitel: 'Was Menschen mich oft fragen',
};

// Fragen & Antworten (§6, Nr. 20–25)
export const faq = [
  {
    frage: 'Was ist Dentosophie eigentlich?',
    antwort:
      'Dentosophie ist eine ganzheitliche Begleitung, bei der die Funktionen Atmung, Schlucken und Kauen harmonisiert werden. Mit einem individuell angepassten Silikonkissen (Balancer) übst du diese unbewusst ablaufenden Funktionen Schritt für Schritt neu ein. Die Schritte bauen aufeinander auf und entfalten sich über mehrere Monate.',
  },
  {
    frage: 'Was ist der Balancer und wie trage ich ihn?',
    antwort:
      'Der Balancer ist dein zentrales Übungsgerät. Nach rund zwei Wochen Aufbauphase trägst du ihn täglich etwa eine Stunde tagsüber, machst eine kurze 5-Minuten-Übung und trägst ihn über Nacht.',
  },
  {
    frage: 'Wie läuft die erste Sitzung ab?',
    antwort:
      'Die erste Sitzung ist die ausführlichste. Mit posturologischen Tests, also kleinen Tests deiner Körperhaltung, findet dein Körper seinen passenden Balancer. Den nimmst du gleich mit. Bei Bedarf nehmen wir Abdrücke, dazu kommen Fotos und deine ersten Übungen.',
  },
  {
    frage: 'Wie lange dauert die Begleitung?',
    antwort:
      'Erwachsene in der Regel ca. 6 Monate (4–5 Termine), Kinder ca. 12 Monate (6–8 Termine). Gerade bei Kindern sind regelmäßige Termine besonders wichtig.',
  },
  {
    frage: 'Kann ich Termine auch online wahrnehmen?',
    antwort:
      'Ja, ab dem 3. Termin geht die Verlaufskontrolle auch per Videocall. Dafür schickst du mir vorher ein paar Fotos. Am liebsten sehe ich dich aber persönlich.',
  },
  {
    frage: 'Was kostet die Dentosophie?',
    antwort:
      'Erwachsene: Gesamtbegleitung 1.000\u00a0€. Kinder: ca. 1.500\u00a0€. Die erste Sitzung hat einen Wert von 780\u00a0€ (Balancer inklusive). Zahlung als Gesamtbetrag oder in Raten.',
  },
  {
    frage: 'Übernimmt die Krankenkasse die Kosten?',
    antwort:
      'Nein. Dentosophie ist keine Kassenleistung, die Kosten werden in der Regel nicht übernommen.',
  },
  {
    frage: 'Kann ich auch nur eine einzelne Sitzung buchen?',
    antwort:
      'Dentosophie ist als Begleitung gedacht, nicht als einzelne Sitzung. Der Gesamtbetrag bezieht sich auf die gesamte Begleitung.',
  },
  {
    frage: 'Für wen ist Dentosophie geeignet?',
    antwort:
      'Für Kinder und Erwachsene, die sich aktiv mit ihrer Mundgesundheit auseinandersetzen möchten (z. B. bei Zahn-/Kieferfehlstellungen, Knirschen/Pressen, Schnarchen, Mundatmung, muskulären Verspannungen).',
  },
  {
    frage: 'Muss ich vorab etwas unterschreiben?',
    antwort:
      'Vor dem Start liest du eine kurze Einverständniserklärung und bestätigst, dass du Ablauf, Preisstruktur und Zahlungsbedingungen verstanden hast.',
  },
];

// Leistungen (§7.1, Nr. 30–33). Reihenfolge wie Spezifikation, Häusliche Zahnpflege nachrangig am Ende.
export type Leistung = {
  id: string;
  titel: string;
  kurz: string; // Kurzfassung für die Startseite
  text: string[];
  zusatz?: string[];
  bald?: boolean;
  folgt?: string; // sichtbarer Hinweis, dass die endgültige Beschreibung noch kommt
  preisFolgt?: boolean;
  link?: { label: string; pfad: string };
};

export const leistungenEinleitung =
  'Dentosophie steht bei mir im Mittelpunkt. Die übrigen Angebote ergänzen sie, jedes auf seine Weise.';

export const leistungen: Leistung[] = [
  {
    id: 'dentosophie',
    titel: 'Dentosophie',
    kurz: 'Kauen, Schlucken und Atmen Schritt für Schritt neu einüben und den Biss harmonisieren.',
    text: [
      'Mit einem individuell angepassten, weichen Silikonkissen, dem Balancer, übst du Kauen, Schlucken und Atmen Schritt für Schritt wieder physiologisch ein. Mein Herzensthema.',
    ],
    link: { label: 'Mehr über Dentosophie', pfad: 'dentosophie/' },
  },
  {
    id: 'zahnpflege',
    titel: 'Ganzheitliche Zahnpflege',
    kurz: 'Sanfte Prophylaxe und Pflege, abgestimmt auf dich und deine Zähne.',
    text: [
      'Sanfte, individuelle Begleitung deiner Zahnpflege nach dem Solo-Konzept. Gründlich, achtsam und auf dich abgestimmt.',
    ],
  },
  {
    id: 'dentcoat',
    titel: 'Dentcoat',
    kurz: 'Eine glatte, glänzende Schutzschicht für deine Zähne.',
    text: [
      'Dentcoat (Siliziumdioxid) ist eine glatte, glänzende Schutzschicht für die Zähne. Ablagerungen und Verfärbungen finden weniger Halt.',
    ],
    zusatz: [
      'Voraussetzung ist vorab eine zahnärztliche Untersuchung inklusive Röntgen, um Karies auszuschließen, und eine professionelle Zahnreinigung.',
      'Es gibt zwei Basisbehandlungen innerhalb von höchstens 2 Monaten. Nach 6 Monaten folgt eine Auffrischung, danach etwa jährlich.',
    ],
  },
  {
    id: 'bowen',
    titel: 'Bowtech / Bowen',
    kurz: 'Sanfte Impulse, die deinen Körper einladen, in seine Balance zu finden.',
    // Übergangstext aus Spezifikation §7.1. TODO: endgültige Kurzbeschreibung von Miryam einsetzen.
    text: [
      'Sanfte körperliche Impulse, die den Körper einladen, in seine Balance zu finden. Als Kur in einer 5er-Reihe am wirkungsvollsten.',
    ],
    folgt: 'Eine ausführlichere Beschreibung folgt.',
  },
  {
    id: 'fussmassage',
    titel: 'Psychosomatische Energie-Fußmassage',
    kurz: 'Regulierend und ganzheitlich unterstützend.',
    // Übergangstext aus Spezifikation §7.1. TODO: endgültige Kurzbeschreibung von Miryam einsetzen.
    text: ['Regulierend und ganzheitlich unterstützend.'],
    folgt: 'Eine ausführlichere Beschreibung folgt.',
    // TODO: Preis fehlt in der Spezifikation, von Miryam erfragen. Bis dahin nur „Preis folgt“.
    preisFolgt: true,
  },
  {
    id: 'infrarot',
    titel: 'Infrarot-Anwendung',
    kurz: '',
    text: [],
    bald: true,
  },
  {
    id: 'vortraege',
    titel: 'Informationsabende & Vorträge',
    kurz: 'Für Eltern, Schulen und interessierte Erwachsene.',
    text: ['Für Eltern, Schulen und interessierte Erwachsene.'],
  },
  {
    id: 'hausbesuche',
    titel: 'Häusliche Zahnpflege',
    kurz: 'Hausbesuche für Menschen mit eingeschränkter Mobilität.',
    text: ['Hausbesuche für Menschen mit eingeschränkter Mobilität.'],
  },
];

// Preise (§7.2) – exakt so verwenden.
export type PreisZeile = { leistung: string; umfang: string; preis: string; anker?: string; folgt?: boolean };
export type PreisGruppe = { titel: string; zeilen: PreisZeile[] };

export const preise: PreisGruppe[] = [
  {
    titel: 'Dentosophie',
    zeilen: [
      { leistung: 'Dentosophie Erwachsene', umfang: 'ca. 6 Monate · 4–5 Termine', preis: '1.000\u00a0€' },
      { leistung: 'Dentosophie Kinder', umfang: 'ca. 12 Monate · 6–8 Termine', preis: '1.500\u00a0€' },
    ],
  },
  {
    titel: 'Ganzheitliche Zahnpflege',
    zeilen: [
      { leistung: 'Ganzheitliche Zahnpflege', umfang: '30 Minuten', preis: '50\u00a0€' },
      { leistung: 'Ganzheitliche Zahnpflege', umfang: '60 Minuten', preis: '100\u00a0€' },
    ],
  },
  {
    titel: 'Dentcoat',
    zeilen: [
      { leistung: 'Dentcoat Basisbehandlung', umfang: '2 Sitzungen inkl. Reinigung', preis: '650\u00a0€' },
      { leistung: 'Dentcoat Auffrischung', umfang: 'nach 6 Monaten', preis: '250\u00a0€' },
    ],
  },
  {
    titel: 'Weitere Angebote',
    zeilen: [
      { leistung: 'Bowtech / Bowen Einzel', umfang: 'eine Anwendung', preis: '60\u00a0€' },
      { leistung: 'Bowtech / Bowen Reihe', umfang: '1×/Woche über 5 Wochen (empfohlen)', preis: '300\u00a0€' },
      // TODO: Preis Fußmassage fehlt (nicht in Spezifikation §7.2). Keinen Preis erfinden.
      { leistung: 'Psychosomatische Energie-Fußmassage', umfang: '', preis: 'Preis folgt', folgt: true },
      { leistung: 'Infrarot-Anwendung', umfang: 'pro Anwendung (bald verfügbar)', preis: 'vsl. 20\u00a0€' },
    ],
  },
];

// Preisstruktur (Nr. 34–36)
export const preisEinleitung = 'Hier findest du alle Preise auf einen Blick. Klar und ohne Kleingedrucktes.';
export const preisStruktur = [
  'Die erste Dentosophie-Sitzung ist die ausführlichste. Sie hat einen Wert von <strong>780\u00a0€</strong>, der Balancer (80\u00a0€) ist darin enthalten.',
  'Du kannst den Gesamtbetrag auf einmal oder in Raten zahlen. Mit der ersten Zahlung ist dein Platz verbindlich für dich reserviert.',
  '<strong>Dentosophie ist keine Kassenleistung.</strong> Der Gesamtbetrag gilt für die ganze Begleitung, auch wenn du einzelne Termine nicht wahrnimmst.',
];
export const preisNebenhinweis = 'Auf Messen und bei Aktionen gibt es die Dentcoat-Basisbehandlung für 500\u00a0€.';

// Über mich (§5.3, Nr. 26; Nr. 27 bewusst weggelassen)
export const ueberMich = {
  titel: 'Mein Name ist Hilda Miryam Loewenstein.',
  absaetze: [
    'Seit über 30 Jahren arbeite ich im Bereich der zahnmedizinischen Prophylaxe und begleite heute Kinder, Jugendliche und Erwachsene ganzheitlich rund um Mund, Kiefer und Nervensystem.',
    'Ich bin zweifache Mutter und seit mehreren Jahren mit Herzblut auf die funktionellen Zusammenhänge im Mundraum spezialisiert. In meiner selbstständigen Arbeit sehe ich den ganzen Menschen. Meine Begleitung ist funktionell und achtsam. Sie versteht sich ausdrücklich nicht als medizinische Behandlung, und ich stelle keine Diagnosen.',
    'Was mich bis heute begeistert: Menschen nicht einfach zu behandeln, sondern sie dabei zu begleiten, ihre eigenen Funktionen und Gewohnheiten wahrzunehmen und Schritt für Schritt zu verändern.',
  ],
  // Originalsatz aus Miryams Flyer
  leitsatz: 'Wenn die Funktionen im Mundraum harmonisch ablaufen, entsteht Raum und natürliche Entspannung.',
  kurzprofil: [
    'ZMP (Zahnmedizinische Prophylaxe-Assistentin)',
    '30+ Jahre Erfahrung',
    'Dentosophie & ganzheitliche Zahnpflege',
    'Praxis in Frankfurt',
    'zweifache Mutter',
  ],
};

// Kontakt (§5.4, Nr. 28–29)
export const kontakt = {
  absaetze: [
    'Der schönste erste Schritt ist ein <strong>kostenfreies Vorgespräch</strong>. Darin schauen wir gemeinsam, ob und wie Dentosophie oder eine andere Begleitung zu dir passt. In Ruhe und unverbindlich. Deinen Termin buchst du am einfachsten direkt online.',
  ],
};

// Wissen (Nr. 40)
export const wissenLeer = 'Hier entstehen nach und nach Beiträge rund um Mund, Atmung und Gleichgewicht.';

// Meta-Angaben je Seite (§8.2)
export const meta: Record<string, { titel: string; beschreibung: string }> = {
  start: {
    titel: 'Dentosophie und ganzheitliche Zahnpflege in Frankfurt | Dentosofee',
    beschreibung:
      'Praxis für ganzheitliche Zahngesundheit in Frankfurt: Dentosophie mit dem Balancer, sanfte Zahnpflege und persönliche Begleitung. Kostenfreies Vorgespräch online buchen.',
  },
  dentosophie: {
    titel: 'Dentosophie in Frankfurt: Balancer, Ablauf und Fragen | Dentosofee',
    beschreibung:
      'Was ist Dentosophie? Wie Kauen, Schlucken und Atmen mit dem Balancer neu eingeübt werden, wie die Begleitung abläuft, wie lange sie dauert und was sie kostet.',
  },
  leistungen: {
    titel: 'Leistungen: Dentosophie, ganzheitliche Zahnpflege, Dentcoat | Dentosofee',
    beschreibung:
      'Dentosophie, ganzheitliche Zahnpflege nach dem Solo-Konzept, Dentcoat, Bowtech, Energie-Fußmassage und häusliche Zahnpflege mit Hausbesuchen in Frankfurt.',
  },
  preise: {
    titel: 'Preise für Dentosophie und Zahnpflege in Frankfurt | Dentosofee',
    beschreibung:
      'Alle Preise auf einen Blick: Dentosophie für Erwachsene und Kinder, ganzheitliche Zahnpflege, Dentcoat und Bowtech. Zahlung auf einmal oder in Raten.',
  },
  ueberMich: {
    titel: 'Über mich: Hilda Miryam Loewenstein, ZMP in Frankfurt | Dentosofee',
    beschreibung:
      'Hilda Miryam Loewenstein, Zahnmedizinische Prophylaxe-Assistentin (ZMP) mit über 30 Jahren Erfahrung, begleitet Kinder und Erwachsene rund um Mund, Kiefer und Atmung.',
  },
  wissen: {
    titel: 'Wissen rund um Mund, Atmung und Gleichgewicht | Dentosofee',
    beschreibung: 'Beiträge rund um Mund, Atmung, Dentosophie und ganzheitliche Zahnpflege aus der Praxis Dentosofee in Frankfurt.',
  },
  kontakt: {
    titel: 'Kontakt und kostenfreies Vorgespräch | Dentosofee Frankfurt',
    beschreibung:
      'Kostenfreies Vorgespräch zur Dentosophie oder ganzheitlichen Zahnpflege online buchen. Praxis Dentosofee, Heinz-Herbert-Karry-Str. 4b, Frankfurt am Main.',
  },
  impressum: { titel: 'Impressum | Dentosofee', beschreibung: 'Impressum der Praxis Dentosofee in Frankfurt am Main.' },
  datenschutz: {
    titel: 'Datenschutz | Dentosofee',
    beschreibung: 'Datenschutzerklärung der Praxis Dentosofee in Frankfurt am Main.',
  },
  fehler: { titel: 'Seite nicht gefunden | Dentosofee', beschreibung: 'Diese Seite gibt es nicht.' },
};
