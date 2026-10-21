// Baut interne Links und Asset-Pfade so, dass sie mit jedem BASE_PATH funktionieren.
const BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : import.meta.env.BASE_URL + '/';

export function url(pfad = ''): string {
  return BASE + pfad.replace(/^\/+/, '');
}

// Vergleich für den aktiven Navigationspunkt
export function istAktiv(aktuell: string, pfad: string): boolean {
  const ziel = url(pfad);
  const a = aktuell.endsWith('/') ? aktuell : aktuell + '/';
  if (pfad === '') return a === ziel;
  return a.startsWith(ziel);
}
