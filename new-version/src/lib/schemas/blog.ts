import { z } from "zod";
import { seoSchema } from "./seo";

export const blogFrontmatterSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  date: z.coerce.date(),
  author: z.string().min(1),
  excerpt: z.string().min(1),
  image: z.string().optional(),
  tags: z.array(z.string()).default([]),
  seo: seoSchema.optional(),
});

export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;
