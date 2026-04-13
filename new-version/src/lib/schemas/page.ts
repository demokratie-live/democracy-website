import { z } from "zod";
import { seoSchema } from "./seo";

export const pageFrontmatterSchema = z.object({
  title: z.string().min(1),
  slug: z.string().startsWith("/"),
  seo: seoSchema,
  hero: z
    .object({
      headline: z.string().min(1),
      subline: z.string().optional(),
      image: z.string().optional(),
    })
    .optional(),
});

export type PageFrontmatter = z.infer<typeof pageFrontmatterSchema>;
