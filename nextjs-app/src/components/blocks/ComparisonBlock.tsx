/**
 * Comparison Section Block Component
 * 
 * Zeigt einen Vergleich zwischen Wahl-O-Mat und Wahl-O-Meter
 */

'use client';

import React from 'react';
import { ComparisonAccordion, ComparisonRow } from '@/components/ui/ComparisonAccordion';

interface ComparisonRowData {
  leftTitle: string;
  leftContent: string;
  rightTitle: string;
  rightContent: string;
}

interface ComparisonBlockProps {
  title: string;
  leftHeader: string;
  leftHeaderColor: string;
  rightHeader: string;
  rightHeaderColor: string;
  rows: ComparisonRowData[];
}

export function ComparisonBlock({
  title,
  leftHeader,
  leftHeaderColor,
  rightHeader,
  rightHeaderColor,
  rows,
}: ComparisonBlockProps) {
  if (!rows || rows.length === 0) {
    return null;
  }

  // Transform rows to ComparisonRow format
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
    <section className="bg-white py-16">
      <div className="container mx-auto px-4" style={{ minHeight: 'unset' }}>
        <h1 className="text-3xl lg:text-4xl pb-8">{title}</h1>

        <ComparisonAccordion
          rows={comparisonRows}
          leftHeader={leftHeader}
          rightHeader={rightHeader}
          leftHeaderColor={leftHeaderColor}
          rightHeaderColor={rightHeaderColor}
        />

        <div className="pb-24"></div>
      </div>
    </section>
  );
}
