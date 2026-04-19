import { z } from "zod";
import { seoSchema } from "./seo";

export const pageFrontmatterSchema = z.object({
  title: z.string().min(1),
  slug: z.string().startsWith("/"),
  seo: seoSchema,
});

export type PageFrontmatter = z.infer<typeof pageFrontmatterSchema>;
