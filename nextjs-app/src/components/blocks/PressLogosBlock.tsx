/**
 * Press Logos Section Block Component
 * 
 * Rendert die "bekannt aus" Presse-Logos Sektion
 */

import React from 'react';

interface PressLogo {
  name: string;
  logo: string;
  url: string;
  alt: string;
}

interface PressLogosBlockProps {
  title: string;
  logos: PressLogo[];
}

export function PressLogosBlock({ title, logos }: PressLogosBlockProps) {
  if (!logos || logos.length === 0) {
    return null;
  }

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-2xl font-normal mt-32 mb-16">{title}</h1>
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 mb-16 lg:mb-24 px-4">
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
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
