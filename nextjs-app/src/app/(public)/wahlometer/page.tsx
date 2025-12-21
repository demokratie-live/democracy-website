/**
 * Wahlometer Page - Dynamic Page with Payload CMS
 * 
 * Die Wahl-O-Meter Seite wird vollständig über Payload CMS gepflegt.
 * Sektionen können im Admin-Bereich hinzugefügt, bearbeitet und per Drag & Drop neu angeordnet werden.
 */

import { getPayload } from 'payload';
import config from '@/payload.config';
import { WahlometerClient } from './WahlometerClient';
import type { Metadata } from 'next';

// Types für die Wahlometer-Sektionen
interface WahlometerHeroSection {
  blockType: 'wahlometerHero';
  title: string;
  subtitle: string;
  heroImage: string;
  backgroundImage: string;
  gradientStart: string;
  gradientEnd: string;
  appStoreUrl: string;
  playStoreUrl: string;
  browserVersionUrl: string;
  aabDownloadUrl: string;
  apkDownloadUrl: string;
  apkVersion: string;
  enabled: boolean;
}

interface Feature {
  icon: string;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

interface FeatureCardsSection {
  blockType: 'featureCards';
  features: Feature[];
  enabled: boolean;
}

interface VideoSection {
  blockType: 'video';
  title: string;
  titleBold: string;
  duration: string;
  videoUrl: string;
  ctaLink: string;
  ctaText: string;
  enabled: boolean;
}

interface PressLogo {
  name: string;
  logo: string;
  url: string;
  alt: string;
  scale?: number;
}

interface PressLogosSection {
  blockType: 'pressLogos';
  title: string;
  logos: PressLogo[];
  enabled: boolean;
}

interface ComparisonRow {
  leftTitle: string;
  leftContent: string;
  rightTitle: string;
  rightContent: string;
}

interface ComparisonSection {
  blockType: 'comparison';
  title: string;
  leftHeader: string;
  leftHeaderColor: string;
  rightHeader: string;
  rightHeaderColor: string;
  rows: ComparisonRow[];
  enabled: boolean;
}

interface MissionQuoteSection {
  blockType: 'missionQuote';
  title: string;
  linkText: string;
  linkUrl: string;
  quoteTitle: string;
  quoteSubtitle: string;
  quoteText: string;
  authorName: string;
  authorRole: string;
  enabled: boolean;
}

interface CampaignCtaSection {
  blockType: 'campaignCta';
  title: string;
  appName: string;
  version: string;
  tagline: string;
  appStoreUrl: string;
  playStoreUrl: string;
  campaignImage: string;
  enabled: boolean;
}

export type WahlometerSection = 
  | WahlometerHeroSection 
  | FeatureCardsSection 
  | VideoSection 
  | PressLogosSection
  | ComparisonSection
  | MissionQuoteSection
  | CampaignCtaSection;

interface WahlometerData {
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
  sections: WahlometerSection[];
}

// Default-Daten falls CMS nicht verfügbar
const defaultWahlometerData: WahlometerData = {
  seo: {
    metaTitle: 'Wahl-O-Meter - Dein faktenbasierter Wahlhelfer | DEMOCRACY',
    metaDescription: 'Der Wahl-O-Meter von DEMOCRACY vergleicht Dein Abstimmungsverhalten mit den Entscheidungen der Parteien und Politiker im Bundestag.',
  },
  sections: [
    {
      blockType: 'wahlometerHero',
      title: 'Wahl-O-Meter',
      subtitle: 'Dein faktenbasierter Wahlhelfer',
      heroImage: '/files/images/WahlOMeter.png',
      backgroundImage: '/files/images/Logo-Landingpage.png',
      gradientStart: 'rgb(95, 147, 207)',
      gradientEnd: 'rgb(70, 108, 171)',
      appStoreUrl: 'https://itunes.apple.com/de/app/democracy/id1341311162',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=de.democracydeutschland.app',
      browserVersionUrl: 'https://democracy-app.de',
      aabDownloadUrl: '/files/download/democracy-app.aab',
      apkDownloadUrl: '/files/download/democracy-app.apk',
      apkVersion: 'v1.5.9',
      enabled: true,
    },
    {
      blockType: 'featureCards',
      features: [
        {
          icon: '/files/images/crosshair.svg',
          title: 'faktenbasierter\nWahlhelfer',
          description: 'Der Wahl-O-Meter von DEMOCRACY gleicht Deine Stellungnahmen zu Gesetzen & Anträgen des Bundestages mit den Entscheidungen der Fraktionen und Politiker ab und ermittelt Eure Übereinstimmung.',
        },
        {
          icon: '/files/images/edit.svg',
          title: 'schnell &\nindividuell',
          description: 'App herunterladen, Themen anklicken, die dich interessieren, Abstimmen und direkt Dein Ergebnis erhalten – in weniger als 5 Minuten.',
        },
        {
          icon: '/files/images/fingerprint.svg',
          title: 'kostenlos &\ngemeinnützig',
          description: 'DEMOCRACY ist kostenlos – die Entwicklung der App open source und spendenfinanziert. Als gemeinnütziger Verein wollen wir Politik transparenter machen.',
          link: '/about',
          linkText: 'Mehr erfahren',
        },
      ],
      enabled: true,
    },
    {
      blockType: 'video',
      title: 'Wie funktioniert der',
      titleBold: 'Wahl-O-Meter',
      duration: '1:00',
      videoUrl: 'https://www.youtube.com/embed/uWwQquy_MD0',
      ctaLink: '#wom-campaign-container',
      ctaText: 'DEMOCRACY App herunterladen',
      enabled: true,
    },
    {
      blockType: 'pressLogos',
      title: 'bekannt aus',
      logos: [
        {
          name: 'Tagesschau',
          logo: '/files/images/tagesschau_logo.png',
          url: 'https://www.youtube.com/watch?v=B1N2ySUYXBY?autoplay=0',
          alt: 'Logo der Tagesschau',
        },
        {
          name: 'BR',
          logo: '/files/images/br_logo.png',
          url: 'https://www.br.de/nachrichten/netzwelt/bundestagswahl-alternativen-zum-wahl-o-mat',
          alt: 'Logo des Bayerischen Rundfunks',
        },
        {
          name: 'Golem',
          logo: '/files/images/golem_logo.png',
          url: 'https://www.golem.de/news/democracy-der-verbesserte-wahl-o-mat-in-einer-app-1906-141599.html',
          alt: 'Logo der IT-News-Seite Golem',
        },
        {
          name: 'Focus',
          logo: '/files/images/focus_logo.png',
          url: 'https://www.focus.de/digital/bundestagswahl-2021-mit-dieser-app-koennen-sie-abstimmungen-im-bundestag-mit-ihren-ansichten-vergleichen_id_24262915.html',
          alt: 'Logo der Zeitschrift FOCUS',
          scale: 0.9,
        },
      ],
      enabled: true,
    },
    {
      blockType: 'comparison',
      title: 'Was ist der Unterschied zum Wahl-O-Mat?',
      leftHeader: 'Wahl-O-Mat',
      leftHeaderColor: '#f5a623',
      rightHeader: 'Wahl-O-Meter',
      rightHeaderColor: '#4494d3',
      rows: [
        {
          leftTitle: 'basiert auf Versprechen',
          leftContent: 'Der Wahl-O-Mat ermöglicht den Vergleich eigener Stellungnahmen zu bestimmten Statements mit den autorisierten Antworten der Parteien.',
          rightTitle: 'basiert auf Handlungen',
          rightContent: 'Der Wahl-O-Meter vergleicht rückblickend das tatsächliche Abstimmungsverhalten der Parteien und Politiker.',
        },
      ],
      enabled: true,
    },
    {
      blockType: 'missionQuote',
      title: 'Warum gibt es uns?',
      linkText: 'Zur Vision von DEMOCRACY',
      linkUrl: '/about',
      quoteTitle: 'Wir wollen',
      quoteSubtitle: 'Menschen einfachen\nZugang zur Politik bieten',
      quoteText: 'Mit DEMOCRACY geben wir Menschen die Möglichkeit, sich über die Abstimmungen im Bundestag zu informieren.',
      authorName: 'Marius Krüger',
      authorRole: 'Gründer',
      enabled: true,
    },
    {
      blockType: 'campaignCta',
      title: 'Finde die Partei, die Dich wirklich vertritt',
      appName: 'DEMOCRACY',
      version: '1.5',
      tagline: 'Dein faktenbasierter Wahlhelfer',
      appStoreUrl: 'https://itunes.apple.com/de/app/democracy/id1341311162',
      playStoreUrl: 'https://play.google.com/store/apps/details?id=de.democracydeutschland.app',
      campaignImage: '/files/images/campaigncorner@3x.png',
      enabled: true,
    },
  ],
};

async function getWahlometerData(): Promise<WahlometerData> {
  try {
    const payload = await getPayload({ config });
    const wahlometer = await payload.findGlobal({
      slug: 'wahlometer',
    });
    
    // Prüfen ob Daten vorhanden sind
    if (wahlometer && wahlometer.sections && Array.isArray(wahlometer.sections) && wahlometer.sections.length > 0) {
      return {
        seo: {
          metaTitle: wahlometer.seo?.metaTitle || defaultWahlometerData.seo.metaTitle,
          metaDescription: wahlometer.seo?.metaDescription || defaultWahlometerData.seo.metaDescription,
        },
        sections: wahlometer.sections as WahlometerSection[],
      };
    }
    
    return defaultWahlometerData;
  } catch (error) {
    console.error('Error fetching wahlometer data from Payload:', error);
    return defaultWahlometerData;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getWahlometerData();
  return {
    title: data.seo.metaTitle,
    description: data.seo.metaDescription,
  };
}

export default async function WahlometerPage() {
  const wahlometerData = await getWahlometerData();
  
  // Filtere nur aktive Sektionen
  const activeSections = wahlometerData.sections.filter(
    (section) => section.enabled !== false
  );
  
  return <WahlometerClient sections={activeSections} />;
}
