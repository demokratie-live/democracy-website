import { Card, CardContent } from '@/components/ui/Card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DEMOCRACY für Bürger - Deine Stimme zählt',
  description: 'Nutze DEMOCRACY als Bürger und stimme über Bundestagsabstimmungen ab. Vergleiche deine Meinung mit deinen Abgeordneten.',
};

const features = [
  { icon: '🗳️', title: 'Über alles abstimmen', description: 'Stimme über alle Bundestagsabstimmungen ab - einfach, schnell und direkt in der App.' },
  { icon: '📄', title: 'Informiert entscheiden', description: 'Lies die offiziellen Dokumente, Begründungen und Argumente zu jeder Abstimmung.' },
  { icon: '📊', title: 'Ergebnisse vergleichen', description: 'Vergleiche deine Abstimmungen mit denen deiner Abgeordneten und der Community.' },
  { icon: '🔔', title: 'Benachrichtigungen', description: 'Erhalte Push-Benachrichtigungen zu wichtigen Abstimmungen, die dich interessieren.' },
  { icon: '🔒', title: 'Deine Privatsphäre', description: 'Deine Daten gehören dir. Wir verkaufen keine Daten und zeigen keine Werbung.' },
  { icon: '⚡', title: 'Einfach & schnell', description: 'In wenigen Sekunden abstimmen - wann und wo du willst.' },
];

const steps = [
  { number: '1', title: 'App herunterladen', description: 'Lade DEMOCRACY kostenlos aus dem App Store oder Google Play Store herunter.' },
  { number: '2', title: 'Abstimmung wählen', description: 'Wähle eine aktuelle oder vergangene Bundestagsabstimmung aus der Liste.' },
  { number: '3', title: 'Informieren', description: 'Lies die Informationen zur Abstimmung und bilde dir deine Meinung.' },
  { number: '4', title: 'Abstimmen', description: 'Stimme mit Ja, Nein oder Enthaltung ab - so wie im Bundestag.' },
  { number: '5', title: 'Vergleichen', description: 'Sieh, wie deine Abgeordneten abgestimmt haben und vergleiche deine Übereinstimmung.' },
];

const benefits = [
  { title: 'Mehr Transparenz', description: 'Erfahre, wie deine Abgeordneten abstimmen und ob sie deine Interessen vertreten.' },
  { title: 'Mehr Kontrolle', description: 'Behalte den Überblick über alle Bundestagsabstimmungen und politische Entwicklungen.' },
  { title: 'Mehr Beteiligung', description: 'Werde aktiver Teil der Demokratie und bringe deine Meinung ein.' },
  { title: 'Mehr Verständnis', description: 'Verstehe politische Entscheidungen besser durch Zugang zu allen relevanten Dokumenten.' },
];

export default function BuergerPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">DEMOCRACY für Bürger</h1>
            <p className="text-xl mb-8 text-blue-100">Deine Stimme zählt! Mit DEMOCRACY kannst du über alle Bundestagsabstimmungen abstimmen und deine Meinung mit deinen Abgeordneten vergleichen.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://apps.apple.com/de/app/democracy-deutschland/id1356447024" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">📱 iOS App</a>
              <a href="https://play.google.com/store/apps/details?id=de.democracy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">🤖 Android App</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Was DEMOCRACY dir bietet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">So funktioniert's</h2>
          <div className="max-w-4xl mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 mb-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">{step.number}</div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Deine Vorteile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, idx) => (
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

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Ein Beispiel</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">Der Bundestag stimmt über ein neues Klimaschutzgesetz ab. Du öffnest die DEMOCRACY App und findest die Abstimmung in deiner Liste. Du liest die Zusammenfassung, schaust dir die offiziellen Dokumente an und bildest dir deine Meinung.</p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">Du stimmst mit "Ja" ab, weil du den Klimaschutz wichtig findest. Sofort siehst du, wie die anderen Nutzer abgestimmt haben und wie deine Abgeordneten aus deinem Wahlkreis im Bundestag gestimmt haben.</p>
                <p className="text-lg text-gray-700 leading-relaxed">Du stellst fest: Deine Abgeordnete hat anders abgestimmt als du. Das ist spannend! Du kannst jetzt ihre Begründung lesen und vielleicht bei der nächsten Wahl jemanden wählen, der besser zu deinen Ansichten passt.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bereit loszulegen?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Lade DEMOCRACY jetzt herunter und werde Teil einer neuen Form der Bürgerbeteiligung!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://apps.apple.com/de/app/democracy-deutschland/id1356447024" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">📱 Jetzt für iOS herunterladen</a>
            <a href="https://play.google.com/store/apps/details?id=de.democracy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">🤖 Jetzt für Android herunterladen</a>
          </div>
        </div>
      </section>
    </div>
  );
}
