import { CheckCircle, Clock, Circle } from "lucide-react";
import type { RoadmapGoal } from "@/lib/schemas";

interface RoadmapTimelineProps {
  goals: RoadmapGoal[];
}

const phaseConfig = {
  beta: {
    label: "Beta",
    color: "bg-accent-500",
    textColor: "text-accent-700",
    bgLight: "bg-accent-50",
  },
  mvp: {
    label: "MVP",
    color: "bg-primary-500",
    textColor: "text-primary-700",
    bgLight: "bg-primary-50",
  },
  dream: {
    label: "Dream",
    color: "bg-purple-500",
    textColor: "text-purple-700",
    bgLight: "bg-purple-50",
  },
};

function StatusIcon({ status }: { status: RoadmapGoal["status"] }) {
  switch (status) {
    case "done":
      return <CheckCircle className="h-5 w-5 text-accent-500" />;
    case "in-progress":
      return <Clock className="h-5 w-5 text-primary-500" />;
    case "planned":
      return <Circle className="h-5 w-5 text-muted-foreground" />;
  }
}

const statusLabels: Record<RoadmapGoal["status"], string> = {
  done: "Erledigt",
  "in-progress": "In Arbeit",
  planned: "Geplant",
};

export function RoadmapTimeline({ goals }: RoadmapTimelineProps) {
  const phases = (["beta", "mvp", "dream"] as const).map((phase) => ({
    ...phaseConfig[phase],
    phase,
    goals: goals.filter((g) => g.phase === phase),
  }));

  return (
    <div className="space-y-12">
      {/* Legend */}
      <div className="flex flex-wrap gap-6 text-sm">
        <span className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-accent-500" /> Erledigt
        </span>
        <span className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary-500" /> In Arbeit
        </span>
        <span className="flex items-center gap-2">
          <Circle className="h-4 w-4 text-muted-foreground" /> Geplant
        </span>
      </div>

      {phases.map(({ phase, label, color, textColor, bgLight, goals: phaseGoals }) => (
        <div key={phase}>
          {/* Phase header */}
          <div className="mb-4 flex items-center gap-3">
            <div className={`h-3 w-3 rounded-full ${color}`} />
            <h3 className={`text-xl font-bold ${textColor}`}>{label}</h3>
            <span className="text-sm text-muted-foreground">
              ({phaseGoals.filter((g) => g.status === "done").length}/{phaseGoals.length} erledigt)
            </span>
          </div>

          {/* Goals */}
          <div className="ml-1.5 border-l-2 border-border pl-6">
            <div className="space-y-4">
              {phaseGoals.map((goal) => (
                <div
                  key={goal.title}
                  className={`flex items-start gap-3 rounded-lg p-3 ${bgLight}`}
                >
                  <div className="mt-0.5 flex-shrink-0">
                    <StatusIcon status={goal.status} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{goal.title}</span>
                      <span className="rounded-full bg-white/80 px-2 py-0.5 text-xs text-muted-foreground">
                        {statusLabels[goal.status]}
                      </span>
                    </div>
                    {goal.description && (
                      <p className="mt-1 text-sm text-muted-foreground">{goal.description}</p>
                    )}
                    {goal.github && (
                      <a
                        href={goal.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block text-xs text-primary-500 hover:underline"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
