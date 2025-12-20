import { Card, CardContent } from '@/components/ui/Card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DEMOCRACY für Politiker - Direktes Feedback von Bürgern',
  description: 'Nutze DEMOCRACY als Politiker und erhalte direktes Feedback von deinen Wählern zu Bundestagsabstimmungen.',
};

const benefits = [
  { icon: '💬', title: 'Direktes Feedback', description: 'Erfahre in Echtzeit, wie deine Wähler zu politischen Entscheidungen stehen.' },
  { icon: '📊', title: 'Mehr Transparenz', description: 'Zeige deinen Wählern, wie du abstimmst und warum - schaffe Vertrauen durch Offenheit.' },
  { icon: '🤝', title: 'Höhere Beteiligung', description: 'Motiviere mehr Bürger zur politischen Teilhabe und stärke die Demokratie.' },
  { icon: '📱', title: 'Größere Reichweite', description: 'Erreiche auch jüngere und technikaffine Wähler über die App.' },
  { icon: '📈', title: 'Datengestützte Einblicke', description: 'Nutze aggregierte Daten, um Meinungstrends in deinem Wahlkreis zu verstehen.' },
  { icon: '✅', title: 'Mehr Legitimität', description: 'Unterstreiche die Legitimität deiner Entscheidungen durch sichtbare Bürgerbeteiligung.' },
];

const useCases = [
  { title: 'Wahlkreisarbeit', description: 'Verstehe besser, welche Themen deinen Wählern wichtig sind und passe deine Arbeit entsprechend an.' },
  { title: 'Kommunikation', description: 'Nutze DEMOCRACY als zusätzlichen Kanal, um mit deinen Wählern in Dialog zu treten.' },
  { title: 'Entscheidungsfindung', description: 'Beziehe die Meinung deiner Wähler in deine Entscheidungsfindung ein und begründe deine Abstimmungen.' },
];

const stats = [
  { number: '50.000+', label: 'Aktive Nutzer' },
  { number: '2 Mio+', label: 'Abgegebene Stimmen' },
  { number: '1.000+', label: 'Verfahren erfasst' },
];

const faqs = [
  { q: 'Wie funktioniert DEMOCRACY?', a: 'DEMOCRACY ist eine App, in der Bürger über alle Bundestagsabstimmungen abstimmen können. Die Ergebnisse werden mit den tatsächlichen Abstimmungen der Abgeordneten verglichen.' },
  { q: 'Sind meine Daten sicher?', a: 'Ja, wir nehmen Datenschutz sehr ernst. Abstimmungen sind anonym, wir verkaufen keine Daten und zeigen keine Werbung.' },
  { q: 'Ist die Community repräsentativ?', a: 'Die Community wächst stetig und wird immer vielfältiger. Wir arbeiten daran, alle Bevölkerungsgruppen zu erreichen.' },
  { q: 'Wie authentisch sind die Abstimmungen?', a: 'Jeder kann abstimmen, aber wir haben Mechanismen zur Verhinderung von Missbrauch. Die Ergebnisse zeigen echte Meinungstendenzen.' },
  { q: 'Kostet die Nutzung etwas?', a: 'Nein, DEMOCRACY ist für alle Nutzer komplett kostenlos. Wir finanzieren uns durch Spenden und sind gemeinnützig.' },
];

export default function PolitikerPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">DEMOCRACY für Politiker</h1>
            <p className="text-xl mb-8 text-blue-100">Erhalte direktes Feedback von deinen Wählern und stärke die Verbindung zu deinen Bürgern.</p>
            <a href="/kontakt" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Jetzt mehr erfahren</a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Deine Vorteile mit DEMOCRACY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Anwendungsfälle</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">DEMOCRACY in Zahlen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Häufige Fragen</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Interessiert?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Kontaktiere uns für weitere Informationen oder ein persönliches Gespräch über DEMOCRACY.</p>
          <a href="/kontakt" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Jetzt Kontakt aufnehmen</a>
        </div>
      </section>
    </div>
  );
}
