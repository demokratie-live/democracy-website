"use client";

import { useState } from "react";
import type { SerializedPressEntry } from "@/lib/schemas";
import { PressCardItem } from "./PressCard";

const TYPE_LABELS: Record<string, string> = {
  all: "Alle",
  article: "Presse",
  publication: "Publikationen",
  video: "Videos",
  document: "Downloads",
  logo: "Logos",
  screenshot: "Screenshots",
};

const TAB_ORDER = [
  "all",
  "article",
  "publication",
  "video",
  "document",
  "logo",
  "screenshot",
] as const;

interface MediaGridClientProps {
  entries: SerializedPressEntry[];
}

export function MediaGridClient({ entries }: MediaGridClientProps) {
  const [activeTab, setActiveTab] = useState("all");

  const availableTabs = TAB_ORDER.filter(
    (tab) => tab === "all" || entries.some((e) => e.type === tab),
  );

  const filtered = activeTab === "all" ? entries : entries.filter((e) => e.type === activeTab);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {availableTabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-primary-600 text-white"
                : "bg-muted text-muted-foreground hover:bg-primary-50 hover:text-primary-600"
            }`}
          >
            {TYPE_LABELS[tab] ?? tab}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-muted-foreground">Keine Einträge in dieser Kategorie.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((entry, i) => (
            <PressCardItem key={`${entry.title}-${i}`} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
}
