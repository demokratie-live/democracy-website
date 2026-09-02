'use client';

import Link from 'next/link';

interface AboutVideoBlockProps {
  title: string;
  duration?: string;
  videoUrl: string;
  ctaText?: string;
  ctaLink?: string;
  enabled?: boolean;
}

export function AboutVideoBlock({ title, duration, videoUrl, ctaText, ctaLink }: AboutVideoBlockProps) {
  const displayTitle = duration ? `${title} (${duration})` : title;
  
  return (
    <div className="container mx-auto px-4 pb-16">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          {displayTitle}
        </h1>
        {ctaText && ctaLink && (
          <Link
            href={ctaLink}
            className="text-gray-700 text-lg hover:text-[#4494d3] transition-colors mt-4 lg:mt-0"
          >
            {ctaText}
          </Link>
        )}
      </div>
      <div className="aspect-video w-full">
        <iframe
          width="100%"
          height="100%"
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      </div>
    </div>
  );
}
