import { getCollection, getEntry, render } from 'astro:content';
import site from '../content/settings/site.json';

export { site };

export async function getPage(name: string) {
  const entry = await getEntry('pages', name);
  if (!entry) throw new Error(`Chybí stránka ${name}`);
  const { Content } = await render(entry);
  return { data: entry.data, Content };
}

export async function getObjects() {
  const all = await getCollection('objects');
  const out = await Promise.all(
    all.map(async (e) => ({ slug: e.id, data: e.data, Content: (await render(e)).Content })),
  );
  return out.sort((a, b) => a.data.order - b.data.order);
}

export const LEGAL = ['obchodni-podminky', 'ochrana-osobnich-udaju', 'cookies', 'dekujeme'] as const;
