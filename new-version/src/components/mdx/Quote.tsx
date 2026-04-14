import type { ReactNode } from "react";

interface QuoteProps {
  author: string;
  children: ReactNode;
}

export function Quote({ author, children }: QuoteProps) {
  return (
    <blockquote className="mx-auto max-w-3xl rounded-xl bg-muted/50 p-6 text-sm leading-relaxed italic sm:p-8 sm:text-base">
      {children}
      <footer className="mt-4 text-sm font-semibold not-italic">— {author}</footer>
    </blockquote>
  );
}
