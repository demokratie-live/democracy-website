import type { ReactNode } from "react";
import { resolveIcon } from "./icons";

interface FeatureCardProps {
  icon: string;
  title: string;
  children: ReactNode;
}

export function FeatureCard({ icon, title, children }: FeatureCardProps) {
  const Icon = resolveIcon(icon);

  return (
    <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-border">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-500">
        {Icon && <Icon className="h-6 w-6" />}
      </div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <div className="text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}
