/**
 * Wahlometer Video Section Block Component
 */

import React from 'react';

interface WahlometerVideoBlockProps {
  title: string;
  titleBold: string;
  duration: string;
  videoUrl: string;
  ctaLink: string;
  ctaText: string;
}

export function WahlometerVideoBlock({
  title,
  titleBold,
  duration,
  videoUrl,
  ctaLink,
  ctaText,
}: WahlometerVideoBlockProps) {
  return (
    <section className="bg-white pb-16">
      <div 
        className="container mx-auto px-4" 
        style={{ minHeight: 'unset', paddingBottom: '10vh' }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 pt-20">
          <div className="lg:w-7/12">
            <h1 className="text-3xl lg:text-4xl inline">{title} </h1>
            <h1 className="text-3xl lg:text-4xl font-bold inline">{titleBold} </h1>
            <h1 className="text-3xl lg:text-4xl inline">({duration})?</h1>
          </div>
          <div className="lg:w-5/12 text-right pt-5">
            <a
              href={ctaLink}
              className="text-[rgb(74,74,74)] text-xl hover:underline"
            >
              {ctaText}
            </a>
          </div>
        </div>

        <div className="relative w-full pt-8" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={videoUrl}
            title="Wahl-O-Meter Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
