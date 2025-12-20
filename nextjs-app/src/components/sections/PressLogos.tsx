'use client';

import * as React from 'react';

export interface PressLogo {
  name: string;
  logo: string;
  url: string;
  alt: string;
  scale?: number;
}

interface PressLogosProps {
  logos: PressLogo[];
  title?: string;
  className?: string;
}

export function PressLogos({ logos, title = 'bekannt aus', className = '' }: PressLogosProps) {
  return (
    <section className={`bg-white ${className}`}>
      <div className="container mx-auto px-4" style={{ minHeight: 'unset' }}>
        {title && (
          <h1 className="text-center text-2xl font-normal mt-0 pt-12 mb-8">{title}</h1>
        )}
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 pb-16">
          {logos.map((press) => (
            <a
              key={press.name}
              href={press.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src={press.logo}
                alt={press.alt}
                className="h-12 lg:h-16 w-auto object-contain"
                style={press.scale ? { transform: `scale(${press.scale})` } : undefined}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
