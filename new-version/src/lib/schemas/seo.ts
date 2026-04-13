import { z } from "zod";

export const seoSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

export type SEO = z.infer<typeof seoSchema>;
