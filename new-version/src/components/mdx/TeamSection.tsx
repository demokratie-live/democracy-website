import { getTeam } from "@/lib/content";
import { TeamGrid } from "@/components/blocks/TeamGrid";

export async function TeamSection() {
  const team = await getTeam();
  return <TeamGrid team={team} />;
}
