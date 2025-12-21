/**
 * Target Audience Section Block Component
 * 
 * Rendert die Zielgruppen Sektion (Bürger & Politiker)
 */

import React from 'react';
import Link from 'next/link';

interface Audience {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  linkText: string;
}

interface TargetAudienceBlockProps {
  title: string;
  audiences: Audience[];
}

export function TargetAudienceBlock({ title, audiences }: TargetAudienceBlockProps) {
  if (!audiences || audiences.length === 0) {
    return null;
  }

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl lg:text-4xl font-bold py-8 pt-12">{title}</h1>
        
        <div className="flex flex-wrap">
          {audiences.map((audience, index) => (
            <div 
              key={`audience-${index}`} 
              className={`w-full lg:w-1/2 ${index === 1 ? 'lg:float-right' : ''}`}
            >
              <div className="rectangleinfo text-left pt-16 pr-3">
                <div className="ri-title">
                  <h3 className="inline-block py-4 px-4 text-white bg-[rgb(68,148,211)] text-2xl font-bold relative z-10">
                    {audience.title}
                  </h3>
                </div>
                <div className="ri-subtitle ml-4 -mt-4 relative z-0">
                  <p 
                    className="inline-block py-5 px-6 bg-[rgb(239,239,244)] text-xl font-bold whitespace-pre-line" 
                    style={{ transform: 'rotate(-1.5deg)' }}
                  >
                    {audience.subtitle}
                  </p>
                </div>
              </div>
              <div className="ri-content mt-8 text-xl pl-7 max-w-[400px]">
                <p>{audience.description}</p>
                <Link 
                  href={audience.link} 
                  className="block text-right pt-4 text-xl hover:underline"
                >
                  {audience.linkText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
