import { z } from "zod";

export const roadmapGoalSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  phase: z.enum(["beta", "mvp", "dream"]),
  status: z.enum(["done", "in-progress", "planned"]),
  github: z.string().url().optional(),
});

export const roadmapListSchema = z.array(roadmapGoalSchema);

export type RoadmapGoal = z.infer<typeof roadmapGoalSchema>;
