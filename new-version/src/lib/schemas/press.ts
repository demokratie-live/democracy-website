import { z } from "zod";

export const pressEntrySchema = z.object({
  title: z.string().min(1),
  type: z.enum(["article", "logo", "screenshot", "document", "video", "publication"]),
  url: z.string().min(1),
  date: z.coerce.date().optional(),
  source: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
});

export const pressListSchema = z.array(pressEntrySchema);

export type PressEntry = z.infer<typeof pressEntrySchema>;

/**
 * Client-safe, fully serializable press entry (ISO-string date).
 * Use this across Server → Client Component boundaries where plain JSON is required.
 */
export type SerializedPressEntry = Omit<PressEntry, "date"> & { date?: string };
