import type { ReactNode } from "react";

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3;
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridCols = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-8 ${gridCols}`}>
      {features.map((feature, i) => (
        <div key={i} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-border">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-500">
            {feature.icon}
          </div>
          <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
