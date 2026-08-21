import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('1818 Team'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const shop = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    image: z.string(),
    category: z.enum(['templates', 'ui-kits', 'icons', 'fonts', 'mockups', 'other']),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    downloadLink: z.string().optional(),
    previewLink: z.string().optional(),
  }),
});

const resources = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    category: z.enum(['tutorials', 'design-packs', 'templates', 'guides', 'tools', 'other']),
    tags: z.array(z.string()).default([]),
    downloadLink: z.string(),
    featured: z.boolean().default(false),
    fileSize: z.string().optional(),
    fileType: z.string().optional(),
  }),
});

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    secondaryImage: z.string().optional(),
    tertiaryImage: z.string().optional(),
    quaternaryImage: z.string().optional(),
    category: z.enum(['web-development', 'mobile-app', 'ui-ux-design', 'branding', 'photography', 'marketing', 'other']),
    client: z.string().optional(),
    year: z.number(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    projectUrl: z.string().optional(),
    testimonial: z.string().optional(),
  }),
});

export const collections = {
  blog,
  shop,
  resources,
  work,
};
