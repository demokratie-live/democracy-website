import type { ReactNode } from "react";

interface PressBarProps {
  children: ReactNode;
}

export function PressBar({ children }: PressBarProps) {
  return <div className="flex flex-wrap items-center justify-center gap-8">{children}</div>;
}

interface PressLinkProps {
  name: string;
  url: string;
}

export function PressLink({ name, url }: PressLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg font-semibold text-muted-foreground transition-colors hover:text-foreground"
    >
      {name}
    </a>
  );
}
