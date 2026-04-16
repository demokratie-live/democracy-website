import type { ReactNode } from "react";
import { renderIcon } from "./icons";

interface PhilosophyCardProps {
  icon: string;
  title: string;
  children: ReactNode;
}

export function PhilosophyCard({ icon, title, children }: PhilosophyCardProps) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-500">
        {renderIcon(icon, "h-8 w-8")}
      </div>
      <h3 className="mb-1 text-sm font-bold uppercase tracking-wide">{title}</h3>
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}
