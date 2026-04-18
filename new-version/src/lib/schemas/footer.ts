import { z } from "zod";
import { navItemSchema } from "./navigation";

export const footerColumnSchema = z.object({
  title: z.string().min(1),
  links: z.array(navItemSchema),
});

export const footerSchema = z.object({
  newsletter: z
    .object({
      label: z.string().min(1),
      href: z.string().url(),
    })
    .optional(),
  columns: z.array(footerColumnSchema),
  legal: z.array(navItemSchema).default([]),
  social: z.array(navItemSchema).default([]),
  copyright: z.string().min(1),
});

export type FooterData = z.infer<typeof footerSchema>;
