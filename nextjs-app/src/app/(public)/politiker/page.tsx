import { Metadata } from 'next';
import { getPayload } from 'payload';
import config from '@/payload.config';
import Image from 'next/image';
import Link from 'next/link';

// Types for CMS data
interface Hotspot {
  number: string;
  tooltip: string;
  active: boolean;
}

interface Feature {
  iconUrl: string;
  title: string;
  description: unknown; // Rich text from Payload
}

interface CtaButton {
  text: string;
  url: string;
  variant: 'default' | 'dark' | 'light';
}

interface PolitikerData {
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
  hero?: {
    title?: string;
    titleLine2?: string;
    heroImage?: string;
    hotspots?: Hotspot[];
    enabled?: boolean;
  };
  featuresSection?: {
    title?: string;
    subtitle?: string;
    features?: Feature[];
    enabled?: boolean;
  };
  ctaSection?: {
    image?: string;
    title?: string;
    description?: string;
    buttons?: CtaButton[];
    enabled?: boolean;
  };
  contactSection?: {
    title?: string;
    buttonText?: string;
    buttonUrl?: string;
    enabled?: boolean;
  };
}

// Default data as fallback (matches original PHP content)
const defaultData: PolitikerData = {
  seo: {
    metaTitle: 'DEMOCRACY als Stimmungsmesser für Politiker',
    metaDescription: 'DEMOCRACY bietet Politikern ein Stimmungsbild der Bevölkerung zu Bundestagsentscheidungen - addressiert an Abgeordnete.',
  },
  hero: {
    title: 'DEMOCRACY als Stimmungs-',
    titleLine2: 'messer für Politiker',
    heroImage: '/files/images/FurPoli.png',
    hotspots: [
      { 
        number: '1', 
        tooltip: 'Als Politiker erhälst Du vor der offiziellen Entscheidung neben den Fraktionsinformationen ein Stimmungsbild zu jedem Vorgang aus der gesamtdeutschen Nutzerschaft', 
        active: false 
      },
      { 
        number: '2', 
        tooltip: 'Das DEMOCRACY Wahlkreisergebnis liefert Dir zusätzlich die Ergebnisse aus Deinem Repräsentationsgebiet; hiermit kannst Du prüfen, wie die Bürger in Deinem Wahlkreis zu den Vorhaben stehen', 
        active: false 
      },
      { 
        number: '3', 
        tooltip: 'Die dauerhafte Rückkopplung hilft Dir als Abgeordneter, Dich besser positionieren zu können und lädt Dich ein, Deine Entscheidungen der Bevölkerung transparent zu erklären und Vertrauen aufzubauen', 
        active: true 
      },
    ],
    enabled: true,
  },
  featuresSection: {
    title: 'ADDRESSIERT AN POLITIKER',
    subtitle: 'Um eine Veränderung über die real-existierenden politischen Entscheidungswege zu ermöglichen',
    features: [],
    enabled: true,
  },
  ctaSection: {
    image: '/files/images/group8@3x.png',
    title: 'Stärke vertrauen mit DEMOCRACY',
    description: 'Ob parlamentarischer Neuling oder abgeklärter Abgeordneter, ob (bereits) Experte im Crowdsourcing oder (bislang) Uneingeweihter – DEMOCRACY wird Dir eine breit gefächerte Auswahl an Möglichkeiten bieten, Deinen wichtigsten Stakeholdern Gehör zu schenken: den Bürgern. Sei Teil einer Demokratie des 21. Jahrhunderts und repräsentiere würdig.',
    buttons: [
      { text: 'AppGeordneter werden', url: '/contact', variant: 'dark' },
      { text: 'DEMOCRACY testen', url: '/', variant: 'default' },
      { text: 'Spenden', url: '/spenden#donate', variant: 'light' },
    ],
    enabled: true,
  },
  contactSection: {
    title: 'Interesse? Wir sind für Dich da!',
    buttonText: 'KONTAKTFORMULAR',
    buttonUrl: '/contact',
    enabled: true,
  },
};

// Default features (hardcoded with HTML for bold text matching original PHP)
const defaultFeatures = [
  {
    iconUrl: '/files/images/star@3x.png',
    title: 'INFORMIERTE BEVÖLKERUNG',
    descriptionHtml: 'Fast alle Bürger fordern sie, nicht alle Politiker stufen sie als unbedenklich ein – die Rede ist von mehr Partizipationsmöglichkeiten. Aber gerade, weil eine <strong>notwendige Bedingung für mehr Partizipation</strong> (mit vernünftigem Entscheidungsausgang) <strong>politsche Bildung</strong> ist, informiert DEMOCRACY die Bürger spielerisch in einem bisher nicht da gewesenen Maß über die aktuellen und relevanten politischen Themen und verringert damit das Risiko inklusiverer Entscheidungsmodelle.',
  },
  {
    iconUrl: '/files/images/pieChart3@3x.png',
    title: 'BASISSTIMMUNG',
    descriptionHtml: 'Mit DEMOCRACY wird eine virtuelle Möglichkeit (ohne juristische Bindung) geschaffen, die es jedem registrierten Bundesbürger ermöglicht, zu den aktuellen Entscheidungen des Parlaments ein Abstimmungsmandat auszuüben. Als Politiker erhälst Du dieses anonymisierte Stimmungsbild noch vor Deiner eigenen offiziellen Entscheidung und hast als Abgeordneter des Deutschen Bundestags (und gem. <a href="https://dejure.org/gesetze/GG/38.html" target="_blank" class="text-[rgb(68,148,211)] hover:underline">Art 38 I GG</a> als Vertreter des ganzen Volkes) insofern <strong>Einblick darein, was die Bevölkerung möchte</strong>.',
  },
  {
    iconUrl: '/files/images/menu@3x.png',
    title: 'WAHLKREISSTIMMUNG',
    descriptionHtml: 'Zusätzlich zum gesamtdeutschen Stimmungsbild liefert Dir DEMOCRACY auch noch ein <strong>qualifiziertes Wahlkreisstimmungsbild</strong>. Darin enthalten sind all diejenigen Stimmen, die zusätzlich zu einer deutschen Handynummer eine Postleitzahl Deines Wahlkreises angegeben haben. Wie stehen diese Bürger zum Vorhaben. Hat sie der Entwurf überzeugt oder lehnen Sie ihn eher ab? Das DEMOCRACY Wahlkreisergebnis zu scannen – ein Muss vor jeder Abstimmung.',
  },
  {
    iconUrl: '/files/images/stickMan2@3x.png',
    title: 'LEICHTERE VERTRETUNG',
    descriptionHtml: 'Die <strong>dauerhafte Rückkopplung</strong> der allgemeinen politischen Willensbildung mit den im Bundestag vertretenen Positionen, <strong>hilft Dir</strong> als Abgeordneter, <strong>Übereinstimmungen bzw. Differenzen</strong> zu Deinen eigenen und/oder Partei-Positionen <strong>zu erkennen, Dich in der Folge adäquater zu positionieren</strong> sowie die Erwartungen und Wünsche der Bürger besser sachbezogen einbeziehen zu können, kurzum: deine Vertretung zu erleichtern.',
  },
  {
    iconUrl: '/files/images/exchange@3x.png',
    title: 'MEHR DIALOG',
    descriptionHtml: 'Die dauerhafte Rückkopplung hilft Dir, Dich als Politiker besser positionieren zu können – ganz klar. Aber ab welcher Communitygröße bist Du bereit, Dich auf die App-Ergebnisse zu beziehen, heißt <strong>Deine Ablehnung oder Zustimmung zu den</strong> jeweiligen <strong>Gesetzesentwürfen transparent</strong> gegenüber der Bevölkerung zu <strong>begründen</strong>? DEMOCRACY bietet Dir als Politiker die Möglichkeit, diese Kommunikation (zwischen Dir und der Bevölkerung) aufzubauen.',
  },
  {
    iconUrl: '/files/images/heart@3x.png',
    title: 'STÄRKERES VERTRAUEN',
    descriptionHtml: 'Durch einen Kommunikationsprozess mit den Bürgern die Nachvollziehbarkeit Deiner politischen Entscheidungen erhöhen? Gegebenfalls bedeutet das auch, aus vernünftigen Gründen gegen das Stimmungsbild der Bevölkerung zu entscheiden (Beibehaltung des freien Mandats gem. <a href="https://dejure.org/gesetze/GG/38.html" target="_blank" class="text-[rgb(68,148,211)] hover:underline">Art 38 I GG</a>) – mit einer verständlichen und transparenten Erklärung Deines Entscheidungsverhaltens <strong>stärkst Du das Vertrauen der Bevölkerung in Dich nachhaltig</strong>.',
  },
];

async function getPolitikerData(): Promise<PolitikerData> {
  try {
    const payload = await getPayload({ config });
    const data = await payload.findGlobal({
      slug: 'politiker',
    });
    return data as PolitikerData;
  } catch (error) {
    console.error('Error fetching Politiker data from CMS:', error);
    return defaultData;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPolitikerData();
  return {
    title: data.seo?.metaTitle || defaultData.seo!.metaTitle,
    description: data.seo?.metaDescription || defaultData.seo!.metaDescription,
  };
}

// Hotspot positions matching the original CSS for politicians page
const hotspotPositions = [
  { top: '10.5%', left: '53.8%' }, // hotspot1p
  { top: '10.5%', left: '29.8%' }, // hotspot2p
  { top: '63.6%', left: '41.5%' }, // hotspot3p (center bottom)
];

// Button variant classes
function getButtonClasses(variant: string): string {
  const baseClasses = 'inline-block px-6 py-3 rounded text-center font-medium transition-all duration-200 text-base';
  switch (variant) {
    case 'dark':
      return `${baseClasses} bg-gray-800 text-white hover:bg-gray-700`;
    case 'light':
      return `${baseClasses} bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-300`;
    default:
      return `${baseClasses} bg-[rgb(68,148,211)] text-white hover:bg-[rgb(58,138,201)]`;
  }
}

export default async function PolitikerPage() {
  const data = await getPolitikerData();

  const hero = { ...defaultData.hero!, ...data.hero };
  const featuresSection = { ...defaultData.featuresSection!, ...data.featuresSection };
  const ctaSection = { ...defaultData.ctaSection!, ...data.ctaSection };
  const contactSection = { ...defaultData.contactSection!, ...data.contactSection };

  // Use default hotspots if CMS doesn't have any
  const hotspots = hero.hotspots && hero.hotspots.length > 0 ? hero.hotspots : defaultData.hero!.hotspots!;
  
  // Use CMS buttons or defaults
  const buttons = ctaSection.buttons && ctaSection.buttons.length > 0 
    ? ctaSection.buttons 
    : defaultData.ctaSection!.buttons!;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {hero.enabled !== false && (
        <section className="bg-white py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {hero.title}<br />
                {hero.titleLine2}
              </h1>
              
              {/* Hotspot Image Container */}
              <div className="relative mt-8 max-w-4xl mx-auto">
                {/* Hotspots */}
                {hotspots.map((hotspot, idx) => (
                  <div
                    key={idx}
                    className={`absolute w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white text-sm md:text-lg font-medium z-10 cursor-pointer transition-shadow
                      ${hotspot.active ? 'bg-[rgb(68,148,211)]' : 'bg-[rgb(139,173,201)]'}
                      animate-pulse hover:animate-none`}
                    style={{
                      top: hotspotPositions[idx]?.top || '10%',
                      left: hotspotPositions[idx]?.left || '50%',
                    }}
                    title={hotspot.tooltip}
                  >
                    {hotspot.number}
                  </div>
                ))}
                
                {/* Hero Image */}
                <Image
                  src={hero.heroImage || '/files/images/FurPoli.png'}
                  alt="DEMOCRACY für Politiker"
                  width={900}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
              
              {/* Divider Bar */}
              <Image
                src="/files/images/democracy-bar.png"
                alt=""
                width={800}
                height={20}
                className="w-full max-w-4xl mx-auto mt-[-28px]"
              />
            </div>
          </div>
        </section>
      )}

      {/* Features Section - "Addressiert an Politiker" */}
      {featuresSection.enabled !== false && (
        <section className="bg-white py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 pt-8 lg:pt-12">
                {featuresSection.title}
              </h1>
              <h4 className="text-lg md:text-xl text-[rgb(68,148,211)] mt-4 pb-12 lg:pb-16">
                {featuresSection.subtitle}
              </h4>
            </div>
            
            {/* Features Grid - 3 columns on large screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {defaultFeatures.map((feature, idx) => (
                <div key={idx} className="text-center">
                  <div className="h-16 flex items-center justify-center mb-4">
                    <Image
                      src={feature.iconUrl}
                      alt={feature.title}
                      width={50}
                      height={50}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 pt-4 pb-8">
                    <strong>{feature.title}</strong>
                  </h4>
                  <div 
                    className="text-gray-700 text-center pb-8 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: feature.descriptionHtml }}
                  />
                </div>
              ))}
            </div>
            
            {/* Divider Bar */}
            <div className="pt-12">
              <Image
                src="/files/images/democracy-bar.png"
                alt=""
                width={800}
                height={20}
                className="w-full max-w-4xl mx-auto"
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section - "Stärke Vertrauen mit DEMOCRACY" */}
      {ctaSection.enabled !== false && (
        <section className="bg-white py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start pt-6">
              {/* Image */}
              <div className="flex justify-center lg:justify-end">
                <Image
                  src={ctaSection.image || '/files/images/group8@3x.png'}
                  alt="DEMOCRACY Community"
                  width={500}
                  height={400}
                  className="w-full max-w-md lg:max-w-none lg:w-[80%] h-auto"
                />
              </div>
              
              {/* Content */}
              <div className="text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 pt-8 lg:pt-12 pb-3">
                  {ctaSection.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {ctaSection.description}
                </p>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pb-16 lg:pb-24">
                  {buttons.map((button, idx) => (
                    <Link
                      key={idx}
                      href={button.url}
                      className={getButtonClasses(button.variant)}
                    >
                      {button.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Divider Bar */}
            <Image
              src="/files/images/democracy-bar.png"
              alt=""
              width={800}
              height={20}
              className="w-full max-w-4xl mx-auto"
            />
          </div>
        </section>
      )}

      {/* Contact CTA Section */}
      {contactSection.enabled !== false && (
        <section className="bg-white py-12 lg:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 pt-12 lg:pt-16">
              {contactSection.title}
            </h2>
            <div className="flex justify-center mt-12 pb-16 lg:pb-24">
              <Link
                href={contactSection.buttonUrl || '/contact'}
                className="inline-block bg-[rgb(68,148,211)] text-white px-8 py-3 rounded text-lg font-medium hover:bg-[rgb(58,138,201)] transition-colors w-64"
              >
                {contactSection.buttonText}
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
