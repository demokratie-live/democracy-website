"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const categoryLabels: Record<string, string> = {
  allgemein: "Allgemein",
  datenschutz: "Datenschutz",
  finanzen: "Finanzen",
  beta: "Beta",
  mvp: "MVP",
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("alle");

  const categories = ["alle", ...Array.from(new Set(items.map((i) => i.category)))];

  const filtered =
    activeCategory === "alle" ? items : items.filter((i) => i.category === activeCategory);

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      {/* Category filter */}
      <nav
        className="flex flex-row flex-wrap gap-2 lg:w-48 lg:flex-shrink-0 lg:flex-col"
        aria-label="FAQ-Kategorien"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setActiveCategory(cat);
              setOpenIndex(null);
            }}
            className={`rounded-lg px-4 py-2 text-left text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-primary-600 text-white"
                : "bg-muted text-foreground hover:bg-primary-100"
            }`}
          >
            {categoryLabels[cat] ?? cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </nav>

      {/* Accordion */}
      <div className="flex-1 divide-y divide-border">
        {filtered.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={`${item.category}-${index}`} className="py-1">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-lg font-semibold">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="pb-4 text-muted-foreground leading-relaxed">{item.answer}</div>
              )}
            </div>
          );
        })}
        {filtered.length === 0 && (
          <p className="py-8 text-center text-muted-foreground">
            Keine Fragen in dieser Kategorie.
          </p>
        )}
      </div>
    </div>
  );
}
