import { z } from "zod";

export const donateProgressSchema = z.object({
  current: z.number().min(0),
  goal: z.number().min(1),
  unit: z.string().default("€/Monat"),
  patrons: z.number().min(0).optional(),
});

export const donateCategorySchema = z.object({
  label: z.string().min(1),
  amount: z.number().min(0),
  icon: z.string().min(1),
});

export const donateConfigSchema = z.object({
  headline: z.string().min(1),
  subline: z.string().optional(),
  bankAccount: z.object({
    holder: z.string().min(1),
    iban: z.string().min(1),
    bic: z.string().min(1),
    bank: z.string().min(1),
  }),
  progress: donateProgressSchema,
  categories: z.array(donateCategorySchema),
  callToAction: z.object({
    paypal: z.string().url().optional(),
    donorbox: z.string().url().optional(),
    bankTransfer: z.boolean().default(true),
    minAmount: z.number().min(1).default(5),
  }),
});

export type DonateConfig = z.infer<typeof donateConfigSchema>;
