'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

export interface ComparisonRow {
  id: number;
  left: {
    title: string;
    content: string;
  };
  right: {
    title: string;
    content: string;
  };
}

export interface ComparisonAccordionProps {
  rows: ComparisonRow[];
  leftHeader: string;
  rightHeader: string;
  leftHeaderColor?: string;
  rightHeaderColor?: string;
  className?: string;
}

export function ComparisonAccordion({
  rows,
  leftHeader,
  rightHeader,
  leftHeaderColor = '#4494d3',
  rightHeaderColor = '#e67c89',
  className,
}: ComparisonAccordionProps) {
  const [activeRow, setActiveRow] = useState(1);

  return (
    <div className={cn('px-0 lg:px-12', className)}>
      {/* Header Row - Always visible */}
      <div className="pt-5 lg:pt-8 relative">
        <div className="flex">
          <div className="w-1/2 pr-1 lg:pr-2">
            <h3
              className="inline-block py-2 lg:py-3 px-3 lg:px-4 text-white text-sm md:text-base lg:text-2xl font-semibold lg:font-bold"
              style={{ backgroundColor: leftHeaderColor, fontFamily: 'helvetica, sans-serif' }}
            >
              {leftHeader}
            </h3>
          </div>
          <div className="w-1/2 pl-1 lg:pl-2">
            <h3
              className="inline-block py-2 lg:py-3 px-3 lg:px-4 text-white text-sm md:text-base lg:text-2xl font-semibold lg:font-bold"
              style={{ backgroundColor: rightHeaderColor, fontFamily: 'helvetica, sans-serif' }}
            >
              {rightHeader}
            </h3>
          </div>
        </div>
      </div>

      {/* Comparison Rows */}
      {rows.map((row) => (
        <div key={row.id} className="mt-4 lg:mt-6">
          {/* Clickable headers */}
          <div className="flex cursor-pointer" onClick={() => setActiveRow(row.id)}>
            <div className="w-1/2 pr-1 lg:pr-2">
              <div
                className="bg-[#efeff4] p-2 lg:p-4 relative"
                style={{ transform: 'rotate(-1deg)' }}
              >
                <p
                  className="font-medium lg:font-bold text-sm md:text-base lg:text-xl m-0 pr-6"
                  style={{ fontFamily: 'helvetica, sans-serif' }}
                >
                  {row.left.title}
                </p>
                {activeRow !== row.id && (
                  <span className="absolute right-2 lg:right-3 top-1/2 transform -translate-y-1/2 text-lg lg:text-xl font-bold">
                    ⌄
                  </span>
                )}
              </div>
            </div>
            <div className="w-1/2 pl-1 lg:pl-2">
              <div
                className="bg-[#efeff4] p-2 lg:p-4 relative"
                style={{ transform: 'rotate(-1deg)' }}
              >
                <p
                  className="font-medium lg:font-bold text-sm md:text-base lg:text-xl m-0 pr-6"
                  style={{ fontFamily: 'helvetica, sans-serif' }}
                >
                  {row.right.title}
                </p>
                {activeRow !== row.id && (
                  <span className="absolute right-2 lg:right-3 top-1/2 transform -translate-y-1/2 text-lg lg:text-xl font-bold">
                    ⌄
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Expandable content */}
          {activeRow === row.id && (
            <div className="flex mt-1 mb-4 lg:mb-8">
              <div className="w-1/2 pr-1 lg:pr-2">
                <div className="p-3 lg:p-6 text-sm lg:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
                  {row.left.content}
                </div>
              </div>
              <div className="w-1/2 pl-1 lg:pl-2">
                <div className="p-3 lg:p-6 text-sm lg:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
                  {row.right.content}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
