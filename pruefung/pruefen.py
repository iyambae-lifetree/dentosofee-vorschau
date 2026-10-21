"""Prüft die gebaute Seite: Screenshots 1440/390, fehlerhafte Requests, interne Links, horizontales Scrollen, Burger-Menü.
Aufruf: .venv/bin/python pruefen.py <basis-url> [<ordner-fuer-bilder>]
"""
import sys, json, urllib.request, urllib.parse
from pathlib import Path
from playwright.sync_api import sync_playwright

BASIS = sys.argv[1].rstrip('/') + '/'
BILDER = Path(sys.argv[2]) if len(sys.argv) > 2 else None
SEITEN = ['', 'dentosophie/', 'leistungen/', 'preise/', 'ueber-mich/', 'wissen/', 'kontakt/', 'impressum/', 'datenschutz/', '404.html']
NAMEN = {'': 'start', '404.html': '404'}
fehler, links, ergebnis = [], set(), {}

def status(u):
    try:
        with urllib.request.urlopen(u) as r: return r.status
    except urllib.error.HTTPError as e: return e.code

with sync_playwright() as p:
    b = p.chromium.launch()
    for breite, hoehe in [(1440, 900), (390, 844)]:
        ctx = b.new_context(viewport={'width': breite, 'height': hoehe}, device_scale_factor=1)
        for s in SEITEN:
            pg = ctx.new_page()
            schlecht = []
            pg.on('response', lambda r, sl=schlecht: sl.append((r.status, r.url)) if r.status >= 400 else None)
            pg.on('requestfailed', lambda r, sl=schlecht: sl.append(('failed', r.url)))
            pg.goto(BASIS + s, wait_until='networkidle')
            pg.evaluate('document.fonts.ready')
            pg.evaluate('''async()=>{for(let y=0;y<document.body.scrollHeight;y+=500){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,60));}window.scrollTo(0,0);}''')
            pg.wait_for_load_state('networkidle'); pg.wait_for_timeout(300)
            name = NAMEN.get(s, s.strip('/'))
            info = pg.evaluate('''() => ({
              ueberlauf: document.documentElement.scrollWidth - document.documentElement.clientWidth,
              h1: [...document.querySelectorAll('h1')].length,
              aktiv: [...document.querySelectorAll('nav [aria-current=page]')].map(a=>a.textContent.trim()),
              fonts: [...document.fonts].filter(f=>f.status==='loaded').map(f=>f.family+' '+f.weight+' '+f.style),
              hrefs: [...document.querySelectorAll('a[href]')].map(a=>a.href),
              breiter: [...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return r.right>document.documentElement.clientWidth+1 && getComputedStyle(e).position!=='absolute'}).slice(0,5).map(e=>e.tagName+'.'+e.className)
            })''')
            for h in info.pop('hrefs'):
                if h.startswith(BASIS.split('/', 3)[0] + '//' + BASIS.split('/', 3)[2]): links.add(h.split('#')[0])
                elif not h.startswith('https://app.calendall.net/'): fehler.append(('extern?', h, s))
            if breite == 390:
                knopf = pg.query_selector('.burger')
                if knopf:
                    knopf.click(); pg.wait_for_timeout(100)
                    info['burger'] = pg.evaluate("[document.querySelector('.burger').getAttribute('aria-expanded'), getComputedStyle(document.getElementById('hauptnav')).display]")
                    if BILDER and s == '': pg.screenshot(path=str(BILDER / f'{name}-390-menue.png'))
                    knopf.click()
            if BILDER:
                pg.screenshot(path=str(BILDER / f'{name}-{breite}.png'), full_page=True)
            for x in schlecht:
                if not (False): fehler.append((x, s, breite))
            ergebnis[f'{name}-{breite}'] = info
            pg.close()
        ctx.close()
    b.close()

for l in sorted(links):
    st = status(l)
    if st != 200: fehler.append(('link', st, l))
print(json.dumps(ergebnis, ensure_ascii=False, indent=1))
print('INTERNE LINKS geprüft:', len(links))
print('FEHLER:', json.dumps(fehler, ensure_ascii=False, indent=1))
