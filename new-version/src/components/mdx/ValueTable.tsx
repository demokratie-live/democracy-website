"use client";

import { useState, Children, isValidElement, type ReactNode, type ReactElement } from "react";
import { ChevronDown, Check, X } from "lucide-react";

interface ValueRowProps {
  support: string;
  supportDescription: string;
  oppose: string;
  opposeDescription: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ValueRow(_props: ValueRowProps) {
  // Rendered by ValueTable, not directly
  return null;
}
ValueRow.displayName = "ValueRow";

interface ValueTableProps {
  children: ReactNode;
}

export function ValueTable({ children }: ValueTableProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const values: ValueRowProps[] = [];
  Children.forEach(children, (child) => {
    if (
      isValidElement(child) &&
      (child.type === ValueRow ||
        (typeof child.type === "function" &&
          (child.type as { displayName?: string }).displayName === "ValueRow"))
    ) {
      values.push((child as ReactElement<ValueRowProps>).props);
    }
  });

  return (
    <div className="space-y-3">
      {values.map((value, index) => (
        <div key={index} className="overflow-hidden rounded-lg ring-1 ring-border">
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/50"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <div className="flex flex-1 items-center gap-3">
              <Check className="h-5 w-5 shrink-0 text-accent-500" />
              <span className="font-medium">{value.support}</span>
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
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent-600">
                    <Check className="h-4 w-4" />
                    {value.support}
                  </div>
                  <p className="text-sm text-muted-foreground">{value.supportDescription}</p>
                </div>
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-danger">
                    <X className="h-4 w-4" />
                    {value.oppose}
                  </div>
                  <p className="text-sm text-muted-foreground">{value.opposeDescription}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
