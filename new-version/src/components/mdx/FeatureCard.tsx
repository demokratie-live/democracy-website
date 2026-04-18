import type { ReactNode } from "react";
import { renderIcon } from "./icons";

interface FeatureCardProps {
  icon: string;
  title: string;
  highlight?: boolean;
  children: ReactNode;
}

export function FeatureCard({ icon, title, highlight = false, children }: FeatureCardProps) {
  if (highlight) {
    return (
      <div className="flex items-start gap-4 rounded-xl bg-primary-500 p-5 text-white shadow-sm">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/20 text-white">
          {renderIcon(icon, "h-6 w-6")}
        </div>
        <div>
          <h3 className="font-bold">{title}</h3>
          <div className="text-sm text-white/90">{children}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-border">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-500">
        {renderIcon(icon, "h-6 w-6")}
      </div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <div className="text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}
