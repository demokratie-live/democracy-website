import { Card, CardContent } from '@/components/ui/Card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DEMOCRACY Engineering - Open Source & Technologie',
  description: 'Erfahre mehr über die Technologie hinter DEMOCRACY. Open Source, moderne Tech-Stack und Community-driven Development.',
};

const techStack = [
  { name: 'React Native', description: 'Cross-platform mobile development for iOS and Android', icon: '📱' },
  { name: 'Node.js', description: 'Backend API and server infrastructure', icon: '🟢' },
  { name: 'GraphQL', description: 'Efficient and flexible API queries', icon: '🔷' },
  { name: 'PostgreSQL', description: 'Reliable and scalable database', icon: '🐘' },
  { name: 'AWS', description: 'Cloud infrastructure and hosting', icon: '☁️' },
  { name: 'TypeScript', description: 'Type-safe development', icon: '🔷' },
];

const openSourcePrinciples = [
  { title: 'Transparent', description: 'Unser gesamter Code ist öffentlich einsehbar auf GitHub.' },
  { title: 'Community-driven', description: 'Jeder kann beitragen, Issues erstellen und Features vorschlagen.' },
  { title: 'Sicher', description: 'Durch öffentlichen Code können Sicherheitsprobleme schneller gefunden werden.' },
  { title: 'Lernplattform', description: 'Nutze unseren Code zum Lernen und für eigene Projekte.' },
];

const roadmapItems = [
  { title: 'Benachrichtigungen', status: 'completed', description: 'Push-Benachrichtigungen für neue Abstimmungen' },
  { title: 'Biometrische Authentifizierung', status: 'completed', description: 'Face ID und Fingerprint Login' },
  { title: 'Abstimmungsanalyse', status: 'in-progress', description: 'Detaillierte Analyse deines Abstimmungsverhaltens' },
  { title: 'Abgeordneten-Matching', status: 'in-progress', description: 'Finde Abgeordnete, die ähnlich abstimmen wie du' },
  { title: 'Europaparlament', status: 'planned', description: 'Abstimmungen im EU-Parlament' },
  { title: 'Landtage', status: 'planned', description: 'Abstimmungen in den Bundesländern' },
];

export default function EngineeringPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">DEMOCRACY Engineering</h1>
            <p className="text-xl mb-8 text-blue-100">Open Source, moderne Technologie und Community-driven Development. Erfahre mehr über die Technik hinter DEMOCRACY.</p>
            <a href="https://github.com/demokratie-live" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              🔗 GitHub Repository
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Unser Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {techStack.map((tech, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{tech.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Open Source Prinzipien</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {openSourcePrinciples.map((principle, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Roadmap</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {roadmapItems.map((item, idx) => (
              <Card key={idx} className={`border-l-4 ${item.status === 'completed' ? 'border-green-500' : item.status === 'in-progress' ? 'border-blue-500' : 'border-gray-300'}`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${item.status === 'completed' ? 'bg-green-100 text-green-800' : item.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                          {item.status === 'completed' ? '✅ Fertig' : item.status === 'in-progress' ? '🔨 In Arbeit' : '📋 Geplant'}
                        </span>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Für Entwickler</h2>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Beitragen zu DEMOCRACY</h3>
                <p className="text-gray-700 mb-4">Wir freuen uns über jeden Beitrag! Ob Bug-Fixes, neue Features oder Verbesserungen an der Dokumentation - jede Hilfe ist willkommen.</p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>📦 Repository:</strong> <a href="https://github.com/demokratie-live" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">github.com/demokratie-live</a></p>
                  <p><strong>📝 Issues:</strong> Melde Bugs oder schlage Features vor</p>
                  <p><strong>🔧 Pull Requests:</strong> Reiche deine Änderungen ein</p>
                  <p><strong>📖 Dokumentation:</strong> Hilf uns, die Docs zu verbessern</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Werde Teil des Teams</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Du bist Entwickler und möchtest DEMOCRACY voranbringen? Wir suchen immer nach talentierten Menschen!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/demokratie-live" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">GitHub besuchen</a>
            <a href="/kontakt" className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">Kontakt aufnehmen</a>
          </div>
        </div>
      </section>
    </div>
  );
}
