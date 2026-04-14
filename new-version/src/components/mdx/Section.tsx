import type { ReactNode } from "react";

interface SectionProps {
  bg?: "white" | "muted" | "primary-light" | "none";
  centered?: boolean;
  children: ReactNode;
  className?: string;
}

const bgClasses: Record<string, string> = {
  white: "bg-white",
  muted: "bg-muted/50",
  "primary-light": "bg-primary-50",
  none: "",
};

export function Section({ bg = "none", centered = false, children, className = "" }: SectionProps) {
  return (
    <section className={`py-16 ${bgClasses[bg] ?? ""} ${className}`}>
      <div className={`mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 ${centered ? "text-center" : ""}`}>
        {children}
      </div>
    </section>
  );
}
