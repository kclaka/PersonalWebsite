import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.date(),
		updatedDate: z.date().optional(),
		heroImage: z.string().optional(),
		draft: z.boolean().default(false),
		tags: z.array(z.string()).default([]),
		author: z.string().default('Kenny Igbechi')
	})
});

export const collections = { blog };
