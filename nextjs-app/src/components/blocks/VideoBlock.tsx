/**
 * Video Section Block Component
 * 
 * Rendert die Video Sektion mit YouTube Embed
 */

import React from 'react';
import Link from 'next/link';

interface VideoBlockProps {
  title: string;
  titleBold: string;
  duration: string;
  videoUrl: string;
  moreInfoLink: string;
  moreInfoText: string;
}

export function VideoBlock({
  title,
  titleBold,
  duration,
  videoUrl,
  moreInfoLink,
  moreInfoText,
}: VideoBlockProps) {
  return (
    <section id="video-box" className="bg-white py-16 relative z-10">
      <div 
        className="container mx-auto px-4" 
        style={{ minHeight: 'unset', paddingBottom: '10vh' }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div className="lg:w-7/12">
            <h1 className="text-3xl lg:text-4xl inline">{title} </h1>
            <h1 className="text-3xl lg:text-4xl font-bold inline">{titleBold} </h1>
            <h1 className="text-3xl lg:text-4xl inline">({duration})?</h1>
          </div>
          <div className="lg:w-5/12 text-right pt-5">
            <Link 
              href={moreInfoLink} 
              className="text-[rgb(74,74,74)] text-xl hover:underline"
            >
              {moreInfoText}
            </Link>
          </div>
        </div>
        
        <div className="relative w-full pt-8" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={videoUrl}
            title="DEMOCRACY Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
