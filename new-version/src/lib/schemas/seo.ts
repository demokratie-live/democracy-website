import { z } from "zod";

export const seoSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

export type SEO = z.infer<typeof seoSchema>;

export const openGraphSchema = z.object({
  siteName: z.string().min(1),
  type: z.string().default("website"),
  image: z.string().min(1),
  imageWidth: z.number().default(1200),
  imageHeight: z.number().default(630),
  imageAlt: z.string().min(1),
});

export const globalSeoSchema = seoSchema.extend({
  siteUrl: z.string().url(),
  locale: z.string().default("de_DE"),
  openGraph: openGraphSchema,
});

export type GlobalSEO = z.infer<typeof globalSeoSchema>;
