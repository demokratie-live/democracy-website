import { z } from "zod";

export const faqEntrySchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
  category: z.string().min(1),
});

export const faqListSchema = z.array(faqEntrySchema);

export type FAQEntry = z.infer<typeof faqEntrySchema>;
