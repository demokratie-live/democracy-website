import { z } from 'zod';

export const emailSchema = z.string().email();

export const contactFormSchema = z.object({
  type: z.enum(['contact', 'bugreport', 'volunteer']),
  email: emailSchema,
  vorname: z.string().optional(),
  nachname: z.string().optional(),
  name: z.string().optional(),
  message: z.string().min(1),
  files: z.any().optional(),
});

export const subscribeSchema = z.object({
  email: emailSchema,
});

export const betaRegistrationSchema = z.object({
  ios: z.boolean(),
  android: z.boolean(),
  email: emailSchema,
  code: z.string(),
  newsletter: z.boolean(),
});
