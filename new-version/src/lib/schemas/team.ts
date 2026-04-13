import { z } from "zod";

export const teamMemberSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  image: z.string().optional(),
  links: z
    .object({
      email: z.string().email().optional(),
      github: z.string().url().optional(),
      linkedin: z.string().url().optional(),
      twitter: z.string().url().optional(),
    })
    .optional(),
});

export const teamDataSchema = z.object({
  core: z.array(teamMemberSchema),
  volunteers: z.array(teamMemberSchema).default([]),
});

export type TeamMember = z.infer<typeof teamMemberSchema>;
export type TeamData = z.infer<typeof teamDataSchema>;
