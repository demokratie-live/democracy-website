import { Card, CardContent } from '@/components/ui/Card';
import { Metadata } from 'next';
import { getPayload } from 'payload';
import config from '@/payload.config';

// Types for CMS data
interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface Paragraph {
  text: string;
}

interface BuergerData {
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
  hero?: {
    title?: string;
    subtitle?: string;
    appStoreUrl?: string;
    appStoreButtonText?: string;
    playStoreUrl?: string;
    playStoreButtonText?: string;
    enabled?: boolean;
  };
  featuresSection?: {
    title?: string;
    features?: Feature[];
    enabled?: boolean;
  };
  stepsSection?: {
    title?: string;
    steps?: Step[];
    enabled?: boolean;
  };
  benefitsSection?: {
    title?: string;
    benefits?: Benefit[];
    enabled?: boolean;
  };
  exampleSection?: {
    title?: string;
    paragraphs?: Paragraph[];
    enabled?: boolean;
  };
  ctaSection?: {
    title?: string;
    subtitle?: string;
    appStoreUrl?: string;
    appStoreButtonText?: string;
    playStoreUrl?: string;
    playStoreButtonText?: string;
    enabled?: boolean;
  };
}

// Default data as fallback
const defaultData: BuergerData = {
  seo: {
    metaTitle: 'DEMOCRACY für Bürger - Deine Stimme zählt',
    metaDescription: 'Nutze DEMOCRACY als Bürger und stimme über Bundestagsabstimmungen ab. Vergleiche deine Meinung mit deinen Abgeordneten.',
  },
  hero: {
    title: 'DEMOCRACY für Bürger',
    subtitle: 'Deine Stimme zählt! Mit DEMOCRACY kannst du über alle Bundestagsabstimmungen abstimmen und deine Meinung mit deinen Abgeordneten vergleichen.',
    appStoreUrl: 'https://apps.apple.com/de/app/democracy-deutschland/id1356447024',
    appStoreButtonText: '📱 iOS App',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=de.democracy',
    playStoreButtonText: '🤖 Android App',
    enabled: true,
  },
  featuresSection: {
    title: 'Was DEMOCRACY dir bietet',
    features: [
      { icon: '🗳️', title: 'Über alles abstimmen', description: 'Stimme über alle Bundestagsabstimmungen ab - einfach, schnell und direkt in der App.' },
      { icon: '📄', title: 'Informiert entscheiden', description: 'Lies die offiziellen Dokumente, Begründungen und Argumente zu jeder Abstimmung.' },
      { icon: '📊', title: 'Ergebnisse vergleichen', description: 'Vergleiche deine Abstimmungen mit denen deiner Abgeordneten und der Community.' },
      { icon: '🔔', title: 'Benachrichtigungen', description: 'Erhalte Push-Benachrichtigungen zu wichtigen Abstimmungen, die dich interessieren.' },
      { icon: '🔒', title: 'Deine Privatsphäre', description: 'Deine Daten gehören dir. Wir verkaufen keine Daten und zeigen keine Werbung.' },
      { icon: '⚡', title: 'Einfach & schnell', description: 'In wenigen Sekunden abstimmen - wann und wo du willst.' },
    ],
    enabled: true,
  },
  stepsSection: {
    title: 'So funktioniert\'s',
    steps: [
      { number: '1', title: 'App herunterladen', description: 'Lade DEMOCRACY kostenlos aus dem App Store oder Google Play Store herunter.' },
      { number: '2', title: 'Abstimmung wählen', description: 'Wähle eine aktuelle oder vergangene Bundestagsabstimmung aus der Liste.' },
      { number: '3', title: 'Informieren', description: 'Lies die Informationen zur Abstimmung und bilde dir deine Meinung.' },
      { number: '4', title: 'Abstimmen', description: 'Stimme mit Ja, Nein oder Enthaltung ab - so wie im Bundestag.' },
      { number: '5', title: 'Vergleichen', description: 'Sieh, wie deine Abgeordneten abgestimmt haben und vergleiche deine Übereinstimmung.' },
    ],
    enabled: true,
  },
  benefitsSection: {
    title: 'Deine Vorteile',
    benefits: [
      { title: 'Mehr Transparenz', description: 'Erfahre, wie deine Abgeordneten abstimmen und ob sie deine Interessen vertreten.' },
      { title: 'Mehr Kontrolle', description: 'Behalte den Überblick über alle Bundestagsabstimmungen und politische Entwicklungen.' },
      { title: 'Mehr Beteiligung', description: 'Werde aktiver Teil der Demokratie und bringe deine Meinung ein.' },
      { title: 'Mehr Verständnis', description: 'Verstehe politische Entscheidungen besser durch Zugang zu allen relevanten Dokumenten.' },
    ],
    enabled: true,
  },
  exampleSection: {
    title: 'Ein Beispiel',
    paragraphs: [
      { text: 'Der Bundestag stimmt über ein neues Klimaschutzgesetz ab. Du öffnest die DEMOCRACY App und findest die Abstimmung in deiner Liste. Du liest die Zusammenfassung, schaust dir die offiziellen Dokumente an und bildest dir deine Meinung.' },
      { text: 'Du stimmst mit "Ja" ab, weil du den Klimaschutz wichtig findest. Sofort siehst du, wie die anderen Nutzer abgestimmt haben und wie deine Abgeordneten aus deinem Wahlkreis im Bundestag gestimmt haben.' },
      { text: 'Du stellst fest: Deine Abgeordnete hat anders abgestimmt als du. Das ist spannend! Du kannst jetzt ihre Begründung lesen und vielleicht bei der nächsten Wahl jemanden wählen, der besser zu deinen Ansichten passt.' },
    ],
    enabled: true,
  },
  ctaSection: {
    title: 'Bereit loszulegen?',
    subtitle: 'Lade DEMOCRACY jetzt herunter und werde Teil einer neuen Form der Bürgerbeteiligung!',
    appStoreUrl: 'https://apps.apple.com/de/app/democracy-deutschland/id1356447024',
    appStoreButtonText: '📱 Jetzt für iOS herunterladen',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=de.democracy',
    playStoreButtonText: '🤖 Jetzt für Android herunterladen',
    enabled: true,
  },
};

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

export default async function BuergerPage() {
  const data = await getBuergerData();

  const hero = data.hero ?? defaultData.hero!;
  const featuresSection = data.featuresSection ?? defaultData.featuresSection!;
  const stepsSection = data.stepsSection ?? defaultData.stepsSection!;
  const benefitsSection = data.benefitsSection ?? defaultData.benefitsSection!;
  const exampleSection = data.exampleSection ?? defaultData.exampleSection!;
  const ctaSection = data.ctaSection ?? defaultData.ctaSection!;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {hero.enabled !== false && (
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{hero.title}</h1>
              <p className="text-xl mb-8 text-blue-100">{hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={hero.appStoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  {hero.appStoreButtonText}
                </a>
                <a 
                  href={hero.playStoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  {hero.playStoreButtonText}
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {featuresSection.enabled !== false && featuresSection.features && featuresSection.features.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{featuresSection.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {featuresSection.features.map((feature, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Steps Section */}
      {stepsSection.enabled !== false && stepsSection.steps && stepsSection.steps.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{stepsSection.title}</h2>
            <div className="max-w-4xl mx-auto">
              {stepsSection.steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 mb-8 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {benefitsSection.enabled !== false && benefitsSection.benefits && benefitsSection.benefits.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{benefitsSection.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefitsSection.benefits.map((benefit, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Example Section */}
      {exampleSection.enabled !== false && exampleSection.paragraphs && exampleSection.paragraphs.length > 0 && (
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">{exampleSection.title}</h2>
              <Card>
                <CardContent className="p-8">
                  {exampleSection.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className={`text-lg text-gray-700 leading-relaxed ${idx < exampleSection.paragraphs!.length - 1 ? 'mb-4' : ''}`}>
                      {paragraph.text}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {ctaSection.enabled !== false && (
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">{ctaSection.title}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">{ctaSection.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={ctaSection.appStoreUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {ctaSection.appStoreButtonText}
              </a>
              <a 
                href={ctaSection.playStoreUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {ctaSection.playStoreButtonText}
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
