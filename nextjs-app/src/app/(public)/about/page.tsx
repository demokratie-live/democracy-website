/**
 * About Page - Dynamic Page with Payload CMS
 * 
 * Die Über-Uns Seite wird vollständig über Payload CMS gepflegt.
 * Sektionen können im Admin-Bereich hinzugefügt, bearbeitet und per Drag & Drop neu angeordnet werden.
 */

import { getPayload } from 'payload';
import config from '@/payload.config';
import { AboutClient } from './AboutClient';
import type { Metadata } from 'next';

// Types für die About-Sektionen
interface StatementSection {
  blockType: 'statement';
  title: string;
  subtitle?: string;
  additionalText?: string;
  enabled: boolean;
}

interface AboutVideoSection {
  blockType: 'aboutVideo';
  title: string;
  duration?: string;
  videoUrl: string;
  ctaText?: string;
  ctaLink?: string;
  enabled: boolean;
}

interface ComparisonRowData {
  leftTitle: string;
  leftContent: string;
  rightTitle: string;
  rightContent: string;
}

interface DemocraticUnderstandingSection {
  blockType: 'democraticUnderstanding';
  title: string;
  leftHeader: string;
  leftHeaderColor: string;
  rightHeader: string;
  rightHeaderColor: string;
  rows: ComparisonRowData[];
  enabled: boolean;
}

interface TeamLink {
  icon: string;
  url: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  links?: TeamLink[];
}

interface TeamSection {
  blockType: 'team';
  decoratorImage?: string;
  title: string;
  subtitle?: string;
  members: TeamMember[];
  showDiscord?: boolean;
  discordServerId?: string;
  enabled: boolean;
}

interface Value {
  icon: string;
  title: string;
  subtitle?: string;
}

interface PhilosophySection {
  blockType: 'philosophy';
  decoratorImage?: string;
  title: string;
  subtitle?: string;
  values: Value[];
  enabled: boolean;
}

interface FounderQuoteSection {
  blockType: 'founderQuote';
  quoteIcon?: string;
  quoteText: string;
  authorName: string;
  authorRole?: string;
  enabled: boolean;
}

export type AboutSection = 
  | StatementSection 
  | AboutVideoSection 
  | DemocraticUnderstandingSection
  | TeamSection
  | PhilosophySection
  | FounderQuoteSection;

interface AboutData {
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  sections: AboutSection[];
}

// Default-Daten falls CMS nicht verfügbar
const defaultAboutData: AboutData = {
  seo: {
    metaTitle: 'Über Uns - DEMOCRACY Deutschland e.V.',
    metaDescription: 'DEMOCRACY Deutschland e.V. - Ein gemeinnütziger Verein, der sich für Demokratie als politische Selbstbestimmung einsetzt.',
  },
  sections: [
    {
      blockType: 'statement',
      title: 'DEMOCRACY Deutschland e.V.',
      subtitle: 'Wir sind ein gemeinnütziger Verein, der sich für Demokratie als politische Selbstbestimmung einsetzt.',
      additionalText: 'Unsere Arbeit ist unabhängig, überparteilich, allgemeinnützig und nichtkommerziell – von Menschen für Menschen',
      enabled: true,
    },
    {
      blockType: 'aboutVideo',
      title: 'Initiativenleitbild / Mission Statement',
      duration: '10:46',
      videoUrl: 'https://www.youtube.com/embed/E3KvgGrGQO4',
      ctaText: 'DEMOCRACY Spenden',
      ctaLink: '/spenden',
      enabled: true,
    },
    {
      blockType: 'democraticUnderstanding',
      title: 'Unser demokratisches Verständnis',
      leftHeader: 'Das unterstützen wir',
      leftHeaderColor: '#4494d3',
      rightHeader: 'Das unterstützen wir nicht',
      rightHeaderColor: '#e67c89',
      rows: [
        {
          leftTitle: 'Demokratie als aufklärerische Idee',
          leftContent: 'Demokratie, in seiner aufklärerischen Idee verstanden als Regierung durch die Bevölkerung mit dem Prinzip ein Mensch – eine Stimme',
          rightTitle: 'Nicht-demokratische Regierungsformen',
          rightContent: 'Diktatur (Regierung der Befehlenden), Oligarchie (Regierung der Vermögenden), Epistokratie (Regierung der Expert:innen)',
        },
      ],
      enabled: true,
    },
    {
      blockType: 'team',
      decoratorImage: '/files/images/democracy-bar.png',
      title: 'Mitarbeiter',
      subtitle: 'an DEMOCRACY arbeiten',
      members: [
        {
          name: 'Marius Krüger',
          role: 'Gründer<br>Organisation & Produkt',
          image: '/files/wir/Marius1.png',
          links: [
            { icon: 'email', url: 'mailto:m.krueger@democracy-deutschland.de' },
          ],
        },
      ],
      showDiscord: true,
      discordServerId: '372403545086885888',
      enabled: true,
    },
    {
      blockType: 'philosophy',
      decoratorImage: '/files/images/democracy-bar.png',
      title: 'Unsere Philosophie',
      subtitle: 'Unsere Arbeit ist unabhängig, überparteilich, allgemeinnützig und nichtkommerziell',
      values: [
        {
          icon: '/files/images/magnify@3x.png',
          title: 'TRANSPARENT',
          subtitle: 'Open Source & Open Book',
        },
      ],
      enabled: true,
    },
    {
      blockType: 'founderQuote',
      quoteIcon: '/files/images/quotes@3x.png',
      quoteText: 'Mit DEMOCRACY wollen wir der Zivilgesellschaft eine Infrastruktur zur Verfügung stellen, die das Funktionieren von tatsächlicher Demokratie begünstigt.',
      authorName: 'Marius Krüger',
      authorRole: 'Gründer',
      enabled: true,
    },
  ],
};

async function getAboutData(): Promise<AboutData> {
  try {
    const payload = await getPayload({ config });
    const about = await payload.findGlobal({
      slug: 'about',
    });
    
    // Prüfen ob Daten vorhanden sind
    if (about && about.sections && Array.isArray(about.sections) && about.sections.length > 0) {
      return {
        seo: {
          metaTitle: about.seo?.metaTitle || defaultAboutData.seo.metaTitle,
          metaDescription: about.seo?.metaDescription || defaultAboutData.seo.metaDescription,
        },
        sections: about.sections as AboutSection[],
      };
    }
    
    return defaultAboutData;
  } catch (error) {
    console.error('Error fetching about data from Payload:', error);
    return defaultAboutData;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getAboutData();
  return {
    title: data.seo.metaTitle,
    description: data.seo.metaDescription,
  };
}

export default async function AboutPage() {
  const aboutData = await getAboutData();
  
  // Filtere nur aktive Sektionen
  const activeSections = aboutData.sections.filter(
    (section) => section.enabled !== false
  );
  
  return <AboutClient sections={activeSections} />;
}
