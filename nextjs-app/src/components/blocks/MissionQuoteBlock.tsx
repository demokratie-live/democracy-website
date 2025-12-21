/**
 * Mission Quote Section Block Component
 */

import React from 'react';
import Link from 'next/link';

interface MissionQuoteBlockProps {
  title: string;
  linkText: string;
  linkUrl: string;
  quoteTitle: string;
  quoteSubtitle: string;
  quoteText: string;
  authorName: string;
  authorRole: string;
}

export function MissionQuoteBlock({
  title,
  linkText,
  linkUrl,
  quoteTitle,
  quoteSubtitle,
  quoteText,
  authorName,
  authorRole,
}: MissionQuoteBlockProps) {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16" style={{ minHeight: 'unset' }}>
        <div className="flex justify-between items-start">
          <h1 className="text-3xl lg:text-4xl">{title}</h1>
          <Link
            href={linkUrl}
            className="text-[rgb(74,74,74)] text-xl hover:underline hidden lg:block"
          >
            {linkText}
          </Link>
        </div>

        {/* Quote Block */}
        <div className="flex flex-col lg:flex-row mt-16 ml-4">
          <div className="lg:w-1/2">
            <div className="rectangleinfo text-left">
              <div className="ri-title">
                <h3 className="inline-block py-4 px-4 text-white bg-[rgb(68,148,211)] text-2xl font-bold relative z-10">
                  {quoteTitle}
                </h3>
              </div>
              <div className="ri-subtitle ml-4 -mt-4 relative z-0">
                <p
                  className="inline-block py-5 px-6 bg-[rgb(239,239,244)] text-xl font-bold whitespace-pre-line"
                  style={{ transform: 'rotate(-1.5deg)', fontFamily: 'helvetica, sans-serif' }}
                >
                  {quoteSubtitle}
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-12 pt-4">
            <p className="text-xl">{quoteText}</p>
            <p className="mt-4 text-[#4a90e2]">
              <span className="font-bold">{authorName}, </span>{authorRole}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
