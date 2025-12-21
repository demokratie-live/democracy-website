/**
 * Features Section Block Component
 * 
 * Rendert die Features Sektion mit interaktivem Video-Wechsel
 */

'use client';

import React, { useState } from 'react';

interface Feature {
  title: string;
  description: string;
  icon: string;
  iconActive: string;
  video: string;
}

interface FeaturesBlockProps {
  title: string;
  features: Feature[];
}

export function FeaturesBlock({ title, features }: FeaturesBlockProps) {
  const [activeFeature, setActiveFeature] = useState(0);

  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section className="bg-white" style={{ marginTop: '-8vh' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Left - Features */}
          <div className="lg:w-7/12 order-1 pt-24">
            <h1 className="text-3xl lg:text-4xl font-bold mb-8">{title}</h1>
            
            {features.map((feature, index) => (
              <div
                key={`feature-${index}`}
                onClick={() => setActiveFeature(index)}
                className={`info-badge flex cursor-pointer min-h-[120px] mt-5 ${
                  activeFeature === index
                    ? 'bg-[rgb(68,148,211)] text-white'
                    : 'bg-[rgb(239,239,244)] hover:bg-[rgb(154,194,228)]'
                }`}
              >
                <div className="info-icon w-[60px] md:w-[125px] flex items-center justify-center p-4">
                  <img
                    src={activeFeature === index ? feature.iconActive : feature.icon}
                    alt={`${feature.title} Icon`}
                    className="h-10 md:h-20"
                  />
                </div>
                <div className="info-content flex items-center py-4 md:py-8 px-2 md:px-4 text-base md:text-xl leading-snug">
                  <p>
                    <b>{feature.title}</b> {feature.description}
                  </p>
                </div>
              </div>
            ))}
            <br /><br />
          </div>
          
          {/* Right - Phone Video */}
          <div className="lg:w-5/12 order-2">
            <div 
              className="device-container max-w-none lg:mt-24 lg:mx-auto lg:px-8" 
              id="device-explain"
            >
              <video
                key={features[activeFeature].video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-[350px] mx-auto"
              >
                <source src={features[activeFeature].video} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
