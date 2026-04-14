import type { ReactNode } from "react";

interface CTAProps {
  bg?: "white" | "muted" | "primary-light";
  children: ReactNode;
  className?: string;
}

const bgClasses: Record<string, string> = {
  white: "bg-white",
  muted: "bg-muted/50",
  "primary-light": "bg-primary-50",
};

export function CTA({ bg = "primary-light", children, className = "" }: CTAProps) {
  return (
    <section className={`py-16 text-center ${bgClasses[bg] ?? ""} ${className}`}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
