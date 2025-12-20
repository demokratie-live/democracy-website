'use client';

import * as React from 'react';
import Link from 'next/link';

interface VideoSectionProps {
  title: React.ReactNode;
  duration?: string;
  linkText?: string;
  linkHref?: string;
  videoUrl: string;
  videoTitle?: string;
  className?: string;
}

export function VideoSection({
  title,
  duration,
  linkText,
  linkHref,
  videoUrl,
  videoTitle = 'Video',
  className = '',
}: VideoSectionProps) {
  return (
    <section className={`bg-white py-16 ${className}`}>
      <div className="container mx-auto px-4" style={{ minHeight: 'unset', paddingBottom: '10vh' }}>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div className="lg:w-7/12">
            <h1 className="text-3xl lg:text-4xl inline">
              {title}
              {duration && <span> ({duration})</span>}
            </h1>
          </div>
          {linkText && linkHref && (
            <div className="lg:w-5/12 text-right pt-5">
              {linkHref.startsWith('/') ? (
                <Link href={linkHref} className="text-[rgb(74,74,74)] text-xl hover:underline">
                  {linkText}
                </Link>
              ) : (
                <a href={linkHref} className="text-[rgb(74,74,74)] text-xl hover:underline">
                  {linkText}
                </a>
              )}
            </div>
          )}
        </div>

        <div className="relative w-full pt-8" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={videoUrl}
            title={videoTitle}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
