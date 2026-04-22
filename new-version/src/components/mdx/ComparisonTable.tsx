"use client";

import { useState, Children, isValidElement, type ReactNode } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface ComparisonRowProps {
  left: string;
  leftDescription: string;
  right: string;
  rightDescription: string;
  leftLink?: string;
  rightLink?: string;
  linkLabel?: string;
}

export function ComparisonRow(props: ComparisonRowProps) {
  void props;
  // Rendered by ComparisonTable, not directly
  return null;
}
ComparisonRow.displayName = "ComparisonRow";

type ComparisonRowCandidate = Partial<ComparisonRowProps> & {
  children?: ReactNode;
};

function isComparisonRowProps(candidate: ComparisonRowCandidate): candidate is ComparisonRowProps {
  return (
    typeof candidate.left === "string" &&
    typeof candidate.leftDescription === "string" &&
    typeof candidate.right === "string" &&
    typeof candidate.rightDescription === "string"
  );
}

export function extractComparisonRows(children: ReactNode): ComparisonRowProps[] {
  const rows: ComparisonRowProps[] = [];

  Children.forEach(children, (child) => {
    if (!isValidElement<ComparisonRowCandidate>(child)) {
      return;
    }

    if (isComparisonRowProps(child.props)) {
      rows.push({
        left: child.props.left,
        leftDescription: child.props.leftDescription,
        right: child.props.right,
        rightDescription: child.props.rightDescription,
        leftLink: child.props.leftLink,
        rightLink: child.props.rightLink,
        linkLabel: child.props.linkLabel,
      });
      return;
    }

    if (child.props.children) {
      rows.push(...extractComparisonRows(child.props.children));
    }
  });

  return rows;
}

interface ComparisonTableProps {
  leftLabel: string;
  rightLabel: string;
  leftColor?: string;
  rightColor?: string;
  variant?: "accordion" | "static";
  children: ReactNode;
}

interface ColumnItem {
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
}

interface ComparisonColumnProps {
  label: string;
  labelColor: string;
  items: ColumnItem[];
  expandable: boolean;
  openIndex: number | null;
  onToggle: (index: number) => void;
}

function ComparisonColumn({
  label,
  labelColor,
  items,
  expandable,
  openIndex,
  onToggle,
}: ComparisonColumnProps) {
  return (
    <div className="flex flex-col">
      <div
        className={`relative z-10 -mb-2 inline-block self-start rounded-md ${labelColor} px-5 py-2 text-base font-semibold text-white shadow-sm`}
      >
        {label}
      </div>
      <div className="flex flex-col gap-3">
        {items.map((item, index) => {
          const isOpen = !expandable || openIndex === index;
          const linkLabel = item.linkLabel ?? "Mehr erfahren";
          return (
            <div key={index} className="flex flex-col">
              {expandable ? (
                <button
                  type="button"
                  onClick={() => onToggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 rounded-md bg-muted/70 px-5 py-4 text-left shadow-sm transition-colors hover:bg-muted"
                >
                  <span className="text-base font-bold">{item.title}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <div className="rounded-md bg-muted/70 px-5 py-4 shadow-sm">
                  <span className="text-base font-bold">{item.title}</span>
                </div>
              )}
              {isOpen && (
                <div className="px-5 pb-2 pt-4">
                  <p className="text-base leading-relaxed text-foreground">{item.description}</p>
                  {item.link && (
                    <div className="mt-3 text-right">
                      <Link
                        href={item.link}
                        className="text-base font-medium text-primary-500 hover:underline"
                      >
                        {linkLabel}
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function ComparisonTable({
  leftLabel,
  rightLabel,
  leftColor = "bg-amber-500",
  rightColor = "bg-primary-500",
  variant = "accordion",
  children,
}: ComparisonTableProps) {
  const rows = extractComparisonRows(children);
  const leftItems: ColumnItem[] = rows.map((r) => ({
    title: r.left,
    description: r.leftDescription,
    link: r.leftLink,
    linkLabel: r.linkLabel,
  }));
  const rightItems: ColumnItem[] = rows.map((r) => ({
    title: r.right,
    description: r.rightDescription,
    link: r.rightLink,
    linkLabel: r.linkLabel,
  }));
  const expandable = variant === "accordion";
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const handleToggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
        <ComparisonColumn
          label={leftLabel}
          labelColor={leftColor}
          items={leftItems}
          expandable={expandable}
          openIndex={openIndex}
          onToggle={handleToggle}
        />
        <ComparisonColumn
          label={rightLabel}
          labelColor={rightColor}
          items={rightItems}
          expandable={expandable}
          openIndex={openIndex}
          onToggle={handleToggle}
        />
      </div>
    </section>
  );
}
