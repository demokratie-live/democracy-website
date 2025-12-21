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

interface BuergerData {
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
    videoThumbnail?: string;
    videoUrl?: string;
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
const defaultData: BuergerData = {
  seo: {
    metaTitle: 'DEMOCRACY als Informations- und Beteiligungsplattform für Bürger',
    metaDescription: 'DEMOCRACY ist speziell dafür entwickelt, Bürgerlobbyismus und Politikcontrolling zu fördern. Nutze deine Stimme!',
  },
  hero: {
    title: 'DEMOCRACY als Informations- und',
    titleLine2: 'Beteiligungsplattform für Bürger',
    heroImage: '/files/images/Fur_Burger.png',
    hotspots: [
      { number: '1', tooltip: 'Im Parlament wird ein Gesetzgebungsverfahren initiiert', active: false },
      { number: '2', tooltip: 'DEMOCRACY informiert Dich über das neue Papier', active: true },
      { number: '3', tooltip: 'Als virtueller Bundestags-abgeordneter kannst Du noch vor der offiziellen Entscheidung selbst über den Antrag abstimmen', active: true },
      { number: '4', tooltip: 'Sobald die Entscheidung im Bundestag vorliegt, kannst Du Dein und das Abstimmungsverhalten der Community mit dem der Politiker und Fraktionen vergleichen', active: false },
    ],
    enabled: true,
  },
  featuresSection: {
    title: 'GEMACHT FÜR BÜRGER',
    subtitle: 'DEMOCRACY ist speziell dafür entwickelt, Bürgerlobbyismus und Politikcontrolling zu fördern',
    features: [],
    enabled: true,
  },
  ctaSection: {
    videoThumbnail: '/files/images/juli.png',
    videoUrl: 'https://www.youtube.com/watch?v=ouzgAqvJUA8',
    title: 'Werde ein Teil von DEMOCRACY',
    description: 'Ob jung oder alt, ob (bereits) Politikexperte oder (bislang) uninformiert – DEMOCRACY wird Dir eine breit gefächerte Auswahl an Möglichkeiten bieten, politisch aktiv zu werden, und dabei fast automatisch Dein Wissen, Deinen Einblick in pol. Prozesse sowie Dein Potential, auf die Politik Einfluss zu nehmen, vergrößern. Sei Teil der Veränderung und nutze Deine Stimme.',
    buttons: [
      { text: 'Jetzt Pate werden', url: '/spenden#donate', variant: 'dark' },
      { text: 'DEMOCRACY testen', url: '/', variant: 'default' },
      { text: 'Spenden', url: '/spenden#donate', variant: 'light' },
    ],
    enabled: true,
  },
  contactSection: {
    title: 'Noch nicht ganz verstanden? Wir sind für Dich da!',
    buttonText: 'KONTAKTFORMULAR',
    buttonUrl: '/contact',
    enabled: true,
  },
};

// Default features (hardcoded with HTML for bold text since CMS may not have data)
const defaultFeatures = [
  {
    iconUrl: '/files/images/expand1@3x.png',
    title: 'PARLAMENT ÖFFNEN',
    descriptionHtml: 'Wer zieht im Bundestag welche Fäden? Hast du den (politischen) Überblick? DEMOCRACY listet Dir <strong>aktuelle, vergangene und zukünftige Gesetzesvorlagen und Anträge</strong> übersichtlich, politisch neutral und ungefiltert auf, und ermöglicht Dir einfachen Einblick in die Arbeit <strong>des Gesetzgebers Bundestag</strong>. Auf diese Weise bleibst Du immer über die aktuellen und relevanten politischen Themen informiert und kannst deren Entwicklung(en) beobachten.',
  },
  {
    iconUrl: '/files/images/password@3x.png',
    title: 'SELBSTINFORMATION FÖRDERN',
    descriptionHtml: 'Bei jedem Gesetz, das Du Dir ansiehst, bekommst du <strong>Einsichten in</strong> dessen konkrete <strong>Inhalte sowie</strong> in den dazugehörigen <strong>parlamentarischen Prozess</strong>. DEMOCRACY stellt Dir dafür alle <strong>offiziellen Informationen aus dem Parlamentsdokumentationssystem DIP21</strong> zu jedem Vorgang in anschaulicher Form zur Verfügung. So kannst Du beispielsweise von einem Sachgebiet bis herunter zu einem konkreten Thema navigieren und Dich qualitativ informieren und politisch bilden.',
  },
  {
    iconUrl: '/files/images/speechBubble17@3x.png',
    title: 'THEMEN ANVISIEREN',
    descriptionHtml: 'Mit DEMOCRACY vollzieht sich ein <strong>Wandel</strong> von einer von personen- bzw. durch politische Farben dominierten und mit Versprechen und Emotionen geführten Politik hin <strong>zu einer an konkreten Entscheidungen erfahrbaren Politik für die Bürger</strong>. Insofern stehen bei DEMOCRACY die konkret vertretenen Inhalte und der Dialog um die sachlich-beste Antwort unserer Zeit auf das einer Gesetzesinitiative zugrundeliegende Problem im Vordergrund.',
  },
  {
    iconUrl: '/files/images/stickMan2@3x.png',
    title: 'BÜRGERLOBBYISMUS INITIIEREN',
    descriptionHtml: 'Eine Meinung zu wichtigen Gesetzesinitiativen zu haben ist gut; <strong>das Mandat eines virtuellen Bundestagsabgeordneten</strong> auszuüben ist besser. Deshalb kannst du mit DEMOCRACY nicht nur Gesetzesinitiativen upvoten (für wichtig befinden) sondern auch <strong>selbst über die Vorgänge abstimmen</strong> – und zwar noch vor der offiziellen Bundestagsentscheidung. Deine anoyme Stimme wird daraufhin mit allen anderen abgegeben Vota zu einem Community-Stimmungsbild kumuliert und Vertretungssymbol Eurer Interessengemeinschaft.',
  },
  {
    iconUrl: '/files/images/pieChart@3x.png',
    title: 'POLITIKCONTROLLING ÜBEN',
    descriptionHtml: 'Nach der Nutzung Deiner Stimme kannst Du <strong>Dein individuelles Abstimmungsverhalten</strong> nicht nur mit dem der Community <strong>vergleichen</strong> und damit den Grat der Bestätigung bzw. Ablehnung Deiner Positionen in der Nutzerschaft ermitteln, sondern, sobald die Entscheidung im Bundestag vorliegt, auch <strong>mit dem der Politiker und Fraktionen</strong>. Wurden Deine Erwartungen von deiner (favorisierten) Lieblingspartei erfüllt? Wie hat Dein Direktkandidat zu diesem Vorgang abgestimmt? DEMOCRACY ermöglicht Dir insofern Deine Vertretung im Bundestag an echten Entscheidungen zu messen.',
  },
  {
    iconUrl: '/files/images/pieChart2@3x.png',
    title: 'WAHL-O-METER ERLEBEN',
    descriptionHtml: 'Je öfter du abstimmst, desto genauer wird das Ergebnis deines Wahl-O-Meters. Der Wahl-O-Meter vergleicht Deine Abstimmungsergebnisse mit denen der Parteien bzw. Abgeordneten und <strong>berechnet</strong> in Echtzeit auf Deinem Handy <strong>die</strong> jeweiligen <strong>Übereinstimmungen</strong>. Bei der nächsten Bundestagswahl stützt Du Deine Wahlentscheidung somit nicht mehr auf schwammige Wahlversprechen, sondern auf das tatsächliche Abstimmungsverhalten der Politiker und Fraktionen. Der Wahl-O-Meter machts möglich. Willkommen im 21. Jahrhundert.',
  },
];

async function getBuergerData(): Promise<BuergerData> {
  try {
    const payload = await getPayload({ config });
    const data = await payload.findGlobal({
      slug: 'buerger',
    });
    return data as BuergerData;
  } catch (error) {
    console.error('Error fetching Bürger data from CMS:', error);
    return defaultData;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getBuergerData();
  return {
    title: data.seo?.metaTitle || defaultData.seo!.metaTitle,
    description: data.seo?.metaDescription || defaultData.seo!.metaDescription,
  };
}

// Hotspot positions matching the original CSS
const hotspotPositions = [
  { top: '10.5%', left: '53.8%' }, // hotspot1
  { top: '10.5%', left: '29.8%' }, // hotspot2
  { top: '63.6%', left: '29.8%' }, // hotspot4 (was 3 in original, now numbered 3)
  { top: '63.6%', left: '73.2%' }, // hotspot5 (was 4 in original, now numbered 4)
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

export default async function BuergerPage() {
  const data = await getBuergerData();

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
                  src={hero.heroImage || '/files/images/Fur_Burger.png'}
                  alt="DEMOCRACY für Bürger"
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

      {/* Features Section - "Gemacht für Bürger" */}
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
            
            {/* Features Grid */}
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

      {/* CTA Section - "Werde ein Teil von DEMOCRACY" */}
      {ctaSection.enabled !== false && (
        <section className="bg-white py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Video Thumbnail */}
              <div className="flex justify-center lg:justify-end">
                <a 
                  href={ctaSection.videoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full max-w-md lg:max-w-none lg:w-[65%] transition-transform hover:scale-105"
                >
                  <Image
                    src={ctaSection.videoThumbnail || '/files/images/juli.png'}
                    alt="Video: Werde ein Teil von DEMOCRACY"
                    width={500}
                    height={300}
                    className="w-full h-auto rounded"
                  />
                </a>
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
