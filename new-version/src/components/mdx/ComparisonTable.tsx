"use client";

import { useState, Children, isValidElement, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface ComparisonRowProps {
  left: string;
  leftDescription: string;
  right: string;
  rightDescription: string;
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
  children: ReactNode;
}

export function ComparisonTable({
  leftLabel,
  rightLabel,
  leftColor = "bg-amber-500",
  rightColor = "bg-primary-500",
  children,
}: ComparisonTableProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const rows = extractComparisonRows(children);

  return (
    <section className="py-12">
      <div className="mb-4 grid grid-cols-2 gap-2">
        <div className={`rounded-lg ${leftColor} px-4 py-2 text-center font-semibold text-white`}>
          {leftLabel}
        </div>
        <div className={`rounded-lg ${rightColor} px-4 py-2 text-center font-semibold text-white`}>
          {rightLabel}
        </div>
      </div>
      <div className="space-y-3">
        {rows.map((row, index) => (
          <div key={index} className="overflow-hidden rounded-lg ring-1 ring-border">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/50"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
            >
              <div className="grid flex-1 grid-cols-2 gap-4">
                <span className="text-sm font-medium">{row.left}</span>
                <span className="text-sm font-medium">{row.right}</span>
              </div>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="border-t border-border bg-muted/30 px-5 py-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <p className="text-sm text-muted-foreground">{row.leftDescription}</p>
                  <p className="text-sm text-muted-foreground">{row.rightDescription}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
