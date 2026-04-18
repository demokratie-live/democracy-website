import type { ReactNode } from "react";

interface PressBarProps {
  children: ReactNode;
}

export function PressBar({ children }: PressBarProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">{children}</div>
  );
}

interface PressLinkProps {
  name: string;
  url: string;
  logo?: string;
}

export function PressLink({ name, url, logo }: PressLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={name}
      aria-label={name}
      className="inline-flex items-center justify-center opacity-70 transition-opacity hover:opacity-100"
    >
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo} alt={name} className="h-10 w-auto max-w-[160px] object-contain md:h-12" />
      ) : (
        <span className="text-lg font-semibold text-muted-foreground transition-colors hover:text-foreground">
          {name}
        </span>
      )}
    </a>
  );
}
