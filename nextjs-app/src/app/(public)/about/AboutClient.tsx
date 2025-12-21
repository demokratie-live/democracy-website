'use client';

import type { AboutSection } from './page';
import { useSetHeaderTheme } from '@/contexts/HeaderContext';
import {
  StatementBlock,
  AboutVideoBlock,
  DemocraticUnderstandingBlock,
  TeamBlock,
  PhilosophyBlock,
  FounderQuoteBlock,
} from '@/components/blocks';

interface AboutClientProps {
  sections: AboutSection[];
}

export function AboutClient({ sections }: AboutClientProps) {
  useSetHeaderTheme('light');

  return (
    <div className="bg-white pt-16">
      {sections.map((section, index) => {
        switch (section.blockType) {
          case 'statement':
            return <StatementBlock key={`statement-${index}`} {...section} />;
          case 'aboutVideo':
            return <AboutVideoBlock key={`video-${index}`} {...section} />;
          case 'democraticUnderstanding':
            return <DemocraticUnderstandingBlock key={`understanding-${index}`} {...section} />;
          case 'team':
            return <TeamBlock key={`team-${index}`} {...section} />;
          case 'philosophy':
            return <PhilosophyBlock key={`philosophy-${index}`} {...section} />;
          case 'founderQuote':
            return <FounderQuoteBlock key={`quote-${index}`} {...section} />;
          default:
            console.warn(`Unknown block type: ${(section as { blockType: string }).blockType}`);
            return null;
        }
      })}
    </div>
  );
}
