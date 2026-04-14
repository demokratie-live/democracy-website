import { getRoadmap } from "@/lib/content";
import { RoadmapTimeline } from "./RoadmapTimeline";

export async function RoadmapSection() {
  const goals = await getRoadmap();
  return <RoadmapTimeline goals={goals} />;
}
