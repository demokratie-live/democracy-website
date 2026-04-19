import { z } from "zod";

// Note: `goal` is intentionally NOT part of the schema. It is derived from
// the sum of `categories[].amount` in the query layer. YAML files MUST NOT
// set `progress.goal`; `.strict()` makes such attempts fail loudly.
export const donateProgressSchema = z
  .object({
    current: z.number().min(0),
    unit: z.string().default("€/Monat"),
    patrons: z.number().min(0).optional(),
    patronsGoal: z.number().min(1).optional(),
  })
  .strict();

export const donateCategorySchema = z.object({
  label: z.string().min(1),
  amount: z.number().positive(),
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
  categories: z.array(donateCategorySchema).nonempty(),
  callToAction: z.object({
    paypal: z.string().url().optional(),
    donorbox: z.string().url().optional(),
    bankTransfer: z.boolean().default(true),
    minAmount: z.number().min(1).default(5),
  }),
});

export type DonateConfig = z.infer<typeof donateConfigSchema>;
