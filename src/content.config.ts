import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Obrázky leží v src/assets/uploads a při sestavení se zmenšují a převádějí do WebP.
// V souborech je cesta relativně k souboru: ../../assets/uploads/fotka.jpg

// Ubytování: src/content/objects/<slug>.md
const objects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/objects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      order: z.number().default(1),
      capacity: z.string(),
      beds: z.string().optional(),
      features: z.array(z.string()).default([]),
      prices: z.array(z.object({ item: z.string(), price: z.string() })).default([]),
      price_note: z.string().optional(),
      photo: image(),
      photo_alt: z.string().default(''),
    }),
});

// Stránky: úvod (home) a právní stránky
const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/pages' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      hero_title: z.string().optional(),
      hero_lead: z.string().optional(),
      hero_image: image().optional(),
      hero_alt: z.string().default(''),
      accommodation_title: z.string().optional(),
      gallery_title: z.string().optional(),
      gallery: z.array(z.object({ image: image(), alt: z.string().default('') })).default([]),
      trips_title: z.string().optional(),
      trips_intro: z.string().optional(),
      trips: z
        .array(z.object({ title: z.string(), distance: z.string().optional(), text: z.string(), link: z.string().optional() }))
        .default([]),
      reviews_title: z.string().optional(),
      reviews: z
        .array(z.object({ name: z.string(), date: z.string().optional(), stay: z.string().optional(), text: z.string() }))
        .default([]),
      contact_title: z.string().optional(),
      contact_intro: z.string().optional(),
    }),
});

export const collections = { objects, pages };
