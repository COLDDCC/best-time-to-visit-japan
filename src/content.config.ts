import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    quickAnswer: z.string().optional(),
    cityTable: z.boolean().optional(),
    climateTable: z.enum(["rain", "comparison", "station"]).optional(),
    station: z.enum(["Tokyo", "Kyoto"]).optional(),
    seoTitle: z.string().max(55).optional(),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
