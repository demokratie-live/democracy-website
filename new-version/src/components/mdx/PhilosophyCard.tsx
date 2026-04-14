import type { ReactNode } from "react";
import { resolveIcon } from "./icons";

interface PhilosophyCardProps {
  icon: string;
  title: string;
  children: ReactNode;
}

export function PhilosophyCard({ icon, title, children }: PhilosophyCardProps) {
  const Icon = resolveIcon(icon);

  return (
    <div className="text-center">
      <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-500">
        {Icon && <Icon className="h-8 w-8" />}
      </div>
      <h3 className="mb-1 text-sm font-bold uppercase tracking-wide">{title}</h3>
      <p className="text-sm text-muted-foreground">{children}</p>
    </div>
  );
}
