import { getPressEntries } from "@/lib/content";
import type { SerializedPressEntry } from "@/lib/schemas";
import { MediaGridClient } from "./MediaGridClient";

export async function MediaGrid() {
  const entries = await getPressEntries();

  // Serialize Date objects to ISO strings before crossing the Server/Client Component boundary
  const serialized: SerializedPressEntry[] = entries.map((entry) => ({
    ...entry,
    date: entry.date ? entry.date.toISOString() : undefined,
  }));

  return <MediaGridClient entries={serialized} />;
}
