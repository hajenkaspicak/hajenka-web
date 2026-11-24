// Zkopíruje Sveltia CMS z node_modules do public/admin/cms, aby běželo z vlastní domény
// (bez CDN třetí strany, bez přenosu IP adres editorů).
import { cpSync, mkdirSync, rmSync, existsSync } from 'node:fs';
const from = new URL('../node_modules/@sveltia/cms/dist/', import.meta.url);
const to = new URL('../public/admin/cms/', import.meta.url);
if (!existsSync(from)) { console.error('Chybí @sveltia/cms, spusťte npm install.'); process.exit(1); }
rmSync(to, { recursive: true, force: true });
mkdirSync(to, { recursive: true });
cpSync(from, to, { recursive: true, filter: (src) => !src.endsWith('.map') });
console.log('Sveltia CMS zkopírováno do public/admin/cms');
