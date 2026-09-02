'use client';

import { ComparisonAccordion, ComparisonRow } from '@/components/ui/ComparisonAccordion';

interface ComparisonRowData {
  leftTitle: string;
  leftContent: string;
  rightTitle: string;
  rightContent: string;
}

interface DemocraticUnderstandingBlockProps {
  title: string;
  leftHeader: string;
  leftHeaderColor: string;
  rightHeader: string;
  rightHeaderColor: string;
  rows: ComparisonRowData[];
  enabled?: boolean;
}

export function DemocraticUnderstandingBlock({
  title,
  leftHeader,
  leftHeaderColor,
  rightHeader,
  rightHeaderColor,
  rows,
}: DemocraticUnderstandingBlockProps) {
  // Convert to ComparisonAccordion format
  const comparisonRows: ComparisonRow[] = rows.map((row, index) => ({
    id: index + 1,
    left: {
      title: row.leftTitle,
      content: row.leftContent,
    },
    right: {
      title: row.rightTitle,
      content: row.rightContent,
    },
  }));

  return (
    <div className="container mx-auto px-4 pb-16">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 pb-4 pt-4">
        {title}
      </h1>
      <ComparisonAccordion
        rows={comparisonRows}
        leftHeader={leftHeader}
        rightHeader={rightHeader}
        leftHeaderColor={leftHeaderColor}
        rightHeaderColor={rightHeaderColor}
      />
    </div>
  );
}
