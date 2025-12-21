/**
 * Feature Cards Section Block Component
 */

import React from 'react';
import Link from 'next/link';

interface Feature {
  icon: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

interface FeatureCardsBlockProps {
  features: Feature[];
}

export function FeatureCardsBlock({ features }: FeatureCardsBlockProps) {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section id="si-panel" className="bg-white relative z-10 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {features.map((feature, index) => (
            <div key={`feature-${index}`} className="flex-1">
              <div className="pt-16">
                <div className="relative">
                  <div className="w-[118px] h-[116px] rounded bg-[#efeff4] mb-2"></div>
                  <img
                    src={feature.icon}
                    alt={`${feature.title} Icon`}
                    onError={(e) => {
                      // Fallback to PNG if SVG fails
                      const target = e.currentTarget;
                      if (target.src.endsWith('.svg')) {
                        target.src = target.src.replace('.svg', '.png');
                      }
                    }}
                    className="w-[76px] h-[76px] object-contain absolute top-[-20px] left-[80px] z-10"
                  />
                </div>
                <p 
                  className="text-2xl font-bold mt-4 whitespace-pre-line" 
                  style={{ fontFamily: 'helvetica, sans-serif' }}
                >
                  {feature.title}
                </p>
              </div>
              <div className="mt-4 text-xl leading-normal w-[85%]">
                <p>{feature.description}</p>
                {feature.link && (
                  <Link 
                    href={feature.link} 
                    className="text-xl text-[#4a90e2] hover:underline"
                  >
                    {feature.linkText || 'Mehr erfahren'}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
