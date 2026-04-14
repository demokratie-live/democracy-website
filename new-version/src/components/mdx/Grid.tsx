import type { ReactNode } from "react";

interface GridProps {
  cols?: 2 | 3;
  children: ReactNode;
  className?: string;
}

export function Grid({ cols = 2, children, className = "" }: GridProps) {
  const gridCols = cols === 2 ? "md:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return <div className={`grid gap-8 ${gridCols} ${className}`}>{children}</div>;
}
