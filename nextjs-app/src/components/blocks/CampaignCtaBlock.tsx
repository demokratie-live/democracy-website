/**
 * Campaign CTA Section Block Component
 */

import React from 'react';

interface CampaignCtaBlockProps {
  title: string;
  appName: string;
  version: string;
  tagline: string;
  appStoreUrl: string;
  playStoreUrl: string;
  campaignImage: string;
}

export function CampaignCtaBlock({
  title,
  appName,
  version,
  tagline,
  appStoreUrl,
  playStoreUrl,
  campaignImage,
}: CampaignCtaBlockProps) {
  // Parse version
  const versionParts = version.split('.');
  const majorVersion = versionParts[0] || '1';
  const minorVersion = versionParts[1] || '0';

  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16" style={{ minHeight: 'unset' }}>
        {/* Campaign Container */}
        <div id="wom-campaign-container" className="mt-8 relative">
          <h1 className="text-3xl lg:text-4xl relative z-10">{title}</h1>

          <div className="mt-8">
            <h1
              className="text-[40px] lg:text-[62px] font-bold inline"
              style={{ fontFamily: 'helvetica, sans-serif', color: '#000b30' }}
            >
              {appName}
            </h1>
            <span
              className="text-[62px] lg:text-[100px] font-black"
              style={{
                background: 'linear-gradient(0.5turn, #4494d3, #336daf)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                marginLeft: '-6px',
              }}
            >
              {majorVersion}
            </span>
            <span
              className="text-[73px] lg:text-[112px] font-black"
              style={{
                background: 'linear-gradient(0.5turn, #4494d3, #336daf)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                marginLeft: '-14px',
                marginRight: '-5px',
              }}
            >
              .
            </span>
            <span
              className="text-[62px] lg:text-[100px] font-black"
              style={{
                background: 'linear-gradient(0.5turn, #4494d3, #336daf)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              {minorVersion}
            </span>

            <h1
              className="text-[25px] lg:text-[34px] -mt-5"
              style={{ color: 'black', width: 'max-content' }}
            >
              {tagline}
            </h1>

            {/* App Store Badges */}
            <div className="flex flex-col lg:flex-row gap-4 mt-4 mb-16">
              <div>
                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[70px] leading-[70px] inline-block no-underline hover:opacity-80"
                >
                  <i className="icon-app-store-outline" style={{ color: '#454545' }}></i>
                </a>
              </div>
              <div className="lg:pl-6">
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[70px] leading-[70px] inline-block no-underline hover:opacity-80"
                >
                  <i className="icon-google-play-outline" style={{ color: '#454545' }}></i>
                </a>
              </div>
            </div>
          </div>

          {/* Campaign Corner Image */}
          {campaignImage && (
            <img
              src={campaignImage}
              alt="Democracy - finde die Taten hinter den Worten"
              className="fixed right-0 bottom-0 origin-bottom-right pointer-events-none"
              style={{
                transform: 'scale(0.25)',
                marginBottom: '-1px',
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
