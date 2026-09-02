/**
 * Homepage - Dynamic Page with Payload CMS
 * 
 * Die Startseite wird vollständig über Payload CMS gepflegt.
 * Sektionen können im Admin-Bereich hinzugefügt, bearbeitet und per Drag & Drop neu angeordnet werden.
 */

import { getPayload } from 'payload';
import config from '@/payload.config';
import { HomepageClient } from './HomepageClient';
import type { Metadata } from 'next';

// Types für die Homepage-Sektionen
interface HeroSection {
  blockType: 'hero';
  title: string;
  version: string;
  subtitle: string;
  heroImage: string;
  backgroundImage: string;
  appStoreUrl: string;
  playStoreUrl: string;
  browserVersionUrl: string;
  aabDownloadUrl: string;
  apkDownloadUrl: string;
  apkVersion: string;
  enabled: boolean;
}

interface VideoSection {
  blockType: 'video';
  title: string;
  titleBold: string;
  duration: string;
  videoUrl: string;
  moreInfoLink: string;
  moreInfoText: string;
  enabled: boolean;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
  iconActive: string;
  video: string;
}

interface FeaturesSection {
  blockType: 'features';
  title: string;
  features: Feature[];
  enabled: boolean;
}

interface Audience {
  title: string;
  subtitle: string;
  description: string;
  link: string;
  linkText: string;
}

interface TargetAudienceSection {
  blockType: 'targetAudience';
  title: string;
  audiences: Audience[];
  enabled: boolean;
}

interface PressLogo {
  name: string;
  logo: string;
  url: string;
  alt: string;
}

interface PressLogosSection {
  blockType: 'pressLogos';
  title: string;
  logos: PressLogo[];
  enabled: boolean;
}

interface CustomContentSection {
  blockType: 'customContent';
  title?: string;
  content: unknown;
  backgroundColor: string;
  enabled: boolean;
}

export type HomepageSection = 
  | HeroSection 
  | VideoSection 
  | FeaturesSection 
  | TargetAudienceSection 
  | PressLogosSection
  | CustomContentSection;

interface HomepageData {
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  sections: HomepageSection[];
}

// Default-Daten falls CMS nicht verfügbar
const defaultHomepageData: HomepageData = {
  seo: {
    metaTitle: 'DEMOCRACY - Weil deine Stimme zählt!',
    metaDescription: 'DEMOCRACY Deutschland ermöglicht Bürgern, an Abstimmungen des Deutschen Bundestages teilzunehmen.',
  },
  sections: [
    {
      blockType: 'hero',
      title: 'DEMOCRACY',
      version: '1.5',
      subtitle: 'Weil deine Stimme zählt!',
      heroImage: '/files/images/List.png',
      backgroundImage: '/files/images/Logo-Landingpage.png',
      appStoreUrl: 'https://itunes.apple.com/de/app/democracy/id1341311162',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=de.democracydeutschland.app',
      browserVersionUrl: 'https://democracy-app.de',
      aabDownloadUrl: '/files/download/democracy-app.aab',
      apkDownloadUrl: '/files/download/democracy-app.apk',
      apkVersion: 'v1.5.10',
      enabled: true,
    },
    {
      blockType: 'video',
      title: 'Worum geht es bei',
      titleBold: 'DEMOCRACY',
      duration: '2:30',
      videoUrl: 'https://www.youtube.com/embed/DFXcnRdXA7k',
      moreInfoLink: '/faq',
      moreInfoText: 'Mehr Informationen zu diesem Film',
      enabled: true,
    },
    {
      blockType: 'features',
      title: 'Alle Funktionen von DEMOCRACY',
      features: [
        {
          title: 'Wähle',
          description: 'einen aktuellen, vergangenen oder populären Vorgang des Deutschen Bundestages',
          icon: '/images/group6@3x.png',
          iconActive: '/images/group6@3x.t.png',
          video: '/videos/DDW-List_croped.mp4',
        },
        {
          title: 'Informiere',
          description: 'Dich über den Vorgang mithilfe der offiziellen Parlamentsdokumente',
          icon: '/images/group3@3x.png',
          iconActive: '/images/group3@3x.t.png',
          video: '/videos/DDW-info_croped.mp4',
        },
        {
          title: 'Stimme',
          description: 'selbst über den Vorgang ab, als wärst Du Bundestagsabgeordneter',
          icon: '/images/group5@3x.png',
          iconActive: '/images/group5@3x.t.png',
          video: '/videos/DDW-vote_croped.mp4',
        },
        {
          title: 'Vergleiche',
          description: 'Dein Abstimmungsverhalten mit der Community und dem Bundestag',
          icon: '/images/group2@3x.png',
          iconActive: '/images/group2@3x.t.png',
          video: '/videos/DDW-compare_croped.mp4',
        },
        {
          title: 'Analysiere',
          description: 'Deine Übereinstimmung mit dem Bundestag, den Parteien und Kandidaten',
          icon: '/images/group9@3x.png',
          iconActive: '/images/group9@3x.t.png',
          video: '/videos/DDW-analyse_croped.mp4',
        },
      ],
      enabled: true,
    },
    {
      blockType: 'targetAudience',
      title: 'Für wen ist DEMOCRACY?',
      audiences: [
        {
          title: 'Für Bürger,',
          subtitle: 'die sich mehr Transparenz \n& Teilhabe wünschen',
          description: 'Ob jung oder alt, ob bereits Experte oder bislang uninformiert. DEMOCRACY ist ein politisches Werkzeug für alle, die sich mehr Transparenz und Teilhabe wünschen.',
          link: '/citizen',
          linkText: 'Mehr erfahren',
        },
        {
          title: 'Für Politiker,',
          subtitle: 'die erklären wollen, warum \nsie wie entscheiden',
          description: 'Ob parlamentarischer Neuling oder abgeklärter Abgeordneter. DEMOCRACY bietet Dir die Möglichkeit, Deinen wichtigsten Stakeholdern Gehör zu schenken: den Bürgern.',
          link: '/politicians',
          linkText: 'Mehr erfahren',
        },
      ],
      enabled: true,
    },
    {
      blockType: 'pressLogos',
      title: 'bekannt aus',
      logos: [
        {
          name: 'hr-iNFO',
          logo: '/images/hrinfo_logo.png',
          url: 'https://www.hr-inforadio.de/podcast/jung-macht-politik/jung-macht-politik-marius-krueger--per-app-zum-virtuellen-bundestagsabgeordneten,podcast-episode-76718.html',
          alt: 'Logo des hessischen Radiosenders hr-iNFO',
        },
        {
          name: 'MDR',
          logo: '/images/mdr_logo.png',
          url: 'https://www.youtube.com/watch?v=5sbPOUL-5Fs',
          alt: 'Logo des Mitteldeutschen Rundfunks',
        },
        {
          name: 'Deutsche Welle',
          logo: '/images/dw_logo.png',
          url: 'https://www.youtube.com/watch?v=RkSq_rBpVlA',
          alt: 'Logo der Nachrichtenorganisation Deutsche Welle',
        },
        {
          name: 'WIRED',
          logo: '/images/wired_logo.png',
          url: 'https://www.gq-magazin.de/auto-technik/article/die-bundesregierung-sollte-wort-halten-und-unserer-demokratie-ein-update-fuer-mehr-beteiligung-verpassen',
          alt: 'Logo des Magazins WIRED',
        },
      ],
      enabled: true,
    },
  ],
};

async function getHomepageData(): Promise<HomepageData> {
  try {
    const payload = await getPayload({ config });
    const homepage = await payload.findGlobal({
      slug: 'homepage',
    });
    
    // Prüfen ob Daten vorhanden sind
    if (homepage && homepage.sections && Array.isArray(homepage.sections) && homepage.sections.length > 0) {
      return {
        seo: {
          metaTitle: homepage.seo?.metaTitle || defaultHomepageData.seo.metaTitle,
          metaDescription: homepage.seo?.metaDescription || defaultHomepageData.seo.metaDescription,
        },
        sections: homepage.sections as HomepageSection[],
      };
    }
    
    return defaultHomepageData;
  } catch (error) {
    console.error('Error fetching homepage data from Payload:', error);
    return defaultHomepageData;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomepageData();
  return {
    title: data.seo.metaTitle,
    description: data.seo.metaDescription,
  };
}

export default async function Home() {
  const homepageData = await getHomepageData();
  
  // Filtere nur aktive Sektionen
  const activeSections = homepageData.sections.filter(
    (section) => section.enabled !== false
  );
  
  return <HomepageClient sections={activeSections} />;
}
