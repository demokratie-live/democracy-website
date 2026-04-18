import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { renderIcon } from "./icons";

interface InfoCardProps {
  icon?: string;
  title: string;
  subtitle?: string;
  link?: string;
  variant?: "icon" | "pill";
  children: ReactNode;
}

export function InfoCard({ icon, title, subtitle, link, variant, children }: InfoCardProps) {
  const resolvedVariant = variant ?? (icon ? "icon" : "pill");

  if (resolvedVariant === "pill") {
    return (
      <div className="py-2">
        <span className="inline-block rounded-md bg-primary-500 px-4 py-2 text-base font-semibold text-white shadow-sm">
          {title}
        </span>
        {subtitle && <p className="mt-4 text-base font-bold text-foreground">{subtitle}</p>}
        <div className="mt-4 text-sm leading-relaxed text-muted-foreground">{children}</div>
        {link && (
          <Link
            href={link}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600"
          >
            Mehr erfahren
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    );
  }

  const iconNode = icon ? renderIcon(icon, "h-8 w-8") : null;

  return (
    <div className="rounded-xl p-6 ring-1 ring-border">
      {iconNode && (
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-500">
          {iconNode}
        </div>
      )}
      <h3 className="text-xl font-bold text-primary-600">{title}</h3>
      {subtitle && <p className="mb-3 text-sm font-medium text-muted-foreground">{subtitle}</p>}
      <div className="mb-4 text-sm text-muted-foreground">{children}</div>
      {link && (
        <Link
          href={link}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600"
        >
          Mehr erfahren
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
