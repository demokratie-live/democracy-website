import { getPressEntries } from "@/lib/content";
import { MediaGridClient } from "./MediaGridClient";

export async function MediaGrid() {
  const entries = await getPressEntries();

  return <MediaGridClient entries={entries} />;
}
