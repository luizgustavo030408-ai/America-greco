import { cp, mkdir, rm } from 'node:fs/promises';

const staticEntries = [
  'index.html',
  'assets',
  'apple-touch-icon.png',
  'favicon-48x48.png',
  'favicon.ico',
  'favicon.png',
  'favicon.svg',
  'icon-192.png',
  'llms.txt',
  'og-america-greco.jpg',
  'robots.txt',
  'sitemap.xml',
  'site.webmanifest',
];

await rm('public', { recursive: true, force: true });
await mkdir('public', { recursive: true });
for (const entry of staticEntries) {
  await cp(entry, `public/${entry}`, { recursive: true });
}
console.log('Built static frontend in public');
