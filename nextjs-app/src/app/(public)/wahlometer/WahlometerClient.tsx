'use client';

import type { WahlometerSection } from './page';
import {
  WahlometerHeroBlock,
  FeatureCardsBlock,
  WahlometerVideoBlock,
  WahlometerPressLogosBlock,
  ComparisonBlock,
  MissionQuoteBlock,
  CampaignCtaBlock,
} from '@/components/blocks';

interface WahlometerClientProps {
  sections: WahlometerSection[];
}

export function WahlometerClient({ sections }: WahlometerClientProps) {
  return (
    <div>
      {sections.map((section, index) => {
        switch (section.blockType) {
          case 'wahlometerHero':
            return <WahlometerHeroBlock key={`hero-${index}`} {...section} />;
          case 'featureCards':
            return <FeatureCardsBlock key={`features-${index}`} {...section} />;
          case 'video':
            return <WahlometerVideoBlock key={`video-${index}`} {...section} />;
          case 'pressLogos':
            return <WahlometerPressLogosBlock key={`press-${index}`} {...section} />;
          case 'comparison':
            return <ComparisonBlock key={`comparison-${index}`} {...section} />;
          case 'missionQuote':
            return <MissionQuoteBlock key={`quote-${index}`} {...section} />;
          case 'campaignCta':
            return <CampaignCtaBlock key={`cta-${index}`} {...section} />;
          default:
            console.warn(`Unknown block type: ${(section as { blockType: string }).blockType}`);
            return null;
        }
      })}
    </div>
  );
}
