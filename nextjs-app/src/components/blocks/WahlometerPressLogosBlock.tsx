/**
 * Wahlometer Press Logos Section Block Component
 */

import React from 'react';

interface PressLogo {
  name: string;
  logo: string;
  url: string;
  alt: string;
  scale?: number;
}

interface WahlometerPressLogosBlockProps {
  title: string;
  logos: PressLogo[];
}

export function WahlometerPressLogosBlock({ title, logos }: WahlometerPressLogosBlockProps) {
  if (!logos || logos.length === 0) {
    return null;
  }

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4" style={{ minHeight: 'unset' }}>
        <h1 className="text-center text-2xl font-normal mt-0 pt-12 mb-8">{title}</h1>
        <div
          className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 pb-16"
          id="press-logos"
        >
          {logos.map((press, index) => (
            <a
              key={`press-${index}`}
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
