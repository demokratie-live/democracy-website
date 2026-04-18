import { z } from "zod";

export const navItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
  icon: z.string().optional(),
  highlight: z.boolean().default(false),
  external: z.boolean().default(false),
});

export const navigationSchema = z.object({
  main: z.array(navItemSchema),
  legal: z.array(navItemSchema).default([]),
  social: z.array(navItemSchema).default([]),
});

export type NavItem = z.infer<typeof navItemSchema>;
export type Navigation = z.infer<typeof navigationSchema>;
