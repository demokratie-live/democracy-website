/**
 * Homepage Client Component
 * 
 * Rendert die dynamischen Sektionen der Startseite
 */

'use client';

import React from 'react';
import {
  HeroBlock,
  VideoBlock,
  FeaturesBlock,
  TargetAudienceBlock,
  PressLogosBlock,
  CustomContentBlock,
} from '@/components/blocks';
import type { HomepageSection } from './page';

interface HomepageClientProps {
  sections: HomepageSection[];
}

export function HomepageClient({ sections }: HomepageClientProps) {
  return (
    <div>
      {sections.map((section, index) => {
        switch (section.blockType) {
          case 'hero':
            return (
              <HeroBlock
                key={`section-${index}`}
                title={section.title}
                version={section.version}
                subtitle={section.subtitle}
                heroImage={section.heroImage}
                backgroundImage={section.backgroundImage}
                appStoreUrl={section.appStoreUrl}
                playStoreUrl={section.playStoreUrl}
                browserVersionUrl={section.browserVersionUrl}
                aabDownloadUrl={section.aabDownloadUrl}
                apkDownloadUrl={section.apkDownloadUrl}
                apkVersion={section.apkVersion}
              />
            );
          
          case 'video':
            return (
              <VideoBlock
                key={`section-${index}`}
                title={section.title}
                titleBold={section.titleBold}
                duration={section.duration}
                videoUrl={section.videoUrl}
                moreInfoLink={section.moreInfoLink}
                moreInfoText={section.moreInfoText}
              />
            );
          
          case 'features':
            return (
              <FeaturesBlock
                key={`section-${index}`}
                title={section.title}
                features={section.features}
              />
            );
          
          case 'targetAudience':
            return (
              <TargetAudienceBlock
                key={`section-${index}`}
                title={section.title}
                audiences={section.audiences}
              />
            );
          
          case 'pressLogos':
            return (
              <PressLogosBlock
                key={`section-${index}`}
                title={section.title}
                logos={section.logos}
              />
            );
          
          case 'customContent':
            return (
              <CustomContentBlock
                key={`section-${index}`}
                title={section.title}
                content={section.content}
                backgroundColor={section.backgroundColor}
              />
            );
          
          default:
            console.warn('Unknown section type:', (section as { blockType: string }).blockType);
            return null;
        }
      })}
    </div>
  );
}
