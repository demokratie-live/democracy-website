'use client';

import * as React from 'react';
import Link from 'next/link';

interface RectangleInfoProps {
  title: string;
  subtitle: React.ReactNode;
  children?: React.ReactNode;
  linkText?: string;
  linkHref?: string;
  className?: string;
}

export function RectangleInfo({
  title,
  subtitle,
  children,
  linkText,
  linkHref,
  className = '',
}: RectangleInfoProps) {
  return (
    <div className={className}>
      <div className="rectangleinfo text-left pt-16 pr-3">
        <div className="ri-title">
          <h3 className="inline-block py-4 px-4 text-white bg-[rgb(68,148,211)] text-2xl font-bold relative z-10">
            {title}
          </h3>
        </div>
        <div className="ri-subtitle ml-4 -mt-4 relative z-0">
          <p
            className="inline-block py-5 px-6 bg-[rgb(239,239,244)] text-xl font-bold"
            style={{ transform: 'rotate(-1.5deg)', fontFamily: 'helvetica, sans-serif' }}
          >
            {subtitle}
          </p>
        </div>
      </div>
      {children && (
        <div className="ri-content mt-8 text-xl pl-7 max-w-[400px]">
          {children}
          {linkText && linkHref && (
            <Link href={linkHref} className="block text-right pt-4 text-xl hover:underline">
              {linkText}
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
