import { Card, CardContent } from '@/components/ui/Card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Über DEMOCRACY - Wer wir sind',
  description: 'Erfahre mehr über DEMOCRACY Deutschland e.V., unser Team und unsere Vision für mehr direkte Demokratie.',
  openGraph: {
    title: 'Über DEMOCRACY - Wer wir sind',
    description: 'Erfahre mehr über DEMOCRACY Deutschland e.V., unser Team und unsere Vision für mehr direkte Demokratie.',
  },
};

const team = [
  {
    name: 'Marius Krüger',
    role: 'Gründer',
    description: 'Organisation & Produkt',
    image: '/files/wir/Marius1.png',
    links: [
      { icon: '✉️', url: 'mailto:m.krueger@democracy-deutschland.de', label: 'Email' },
      { icon: '📞', url: 'tel:+4917647040213', label: 'Telefon' },
      { icon: '👥', url: 'https://www.facebook.com/kruegermarius', label: 'Facebook' },
    ],
  },
  {
    name: 'Manuel Ruck',
    role: 'Softwareentwickler',
    description: 'Programmierer des Projektes',
    image: '/files/wir/Manu1.png',
    links: [
      { icon: '✉️', url: 'mailto:m.ruck@democracy-deutschland.de', label: 'Email' },
      { icon: '💼', url: 'https://www.xing.com/profile/Manuel_Ruck', label: 'XING' },
    ],
  },
  {
    name: 'Elisa Menne',
    role: 'Administration',
    description: 'Kommunikation & Buchhaltung',
    image: '/files/wir/Elisa.jpg',
    links: [
      { icon: '✉️', url: 'mailto:e.menne@democracy-deutschland.de', label: 'Email' },
    ],
  },
];

const volunteers = [
  { name: 'Timo Sieg', role: 'Redaktion', description: 'Newsletter & Blog', image: '/files/wir/Timo.jpg', links: [{ icon: '✉️', url: 'mailto:t.sieg@democracy-deutschland.de' }] },
  { name: 'Jasper Bennink', role: 'Redaktion', description: 'Blog', image: '/files/wir/Jasper.jpg', links: [{ icon: '✉️', url: 'mailto:j.bennink@democracy-deutschland.de' }] },
  { name: 'Jascha Fabian', role: 'Markenstratege', description: 'Kampagnenplanung', image: '/files/wir/Jascha.jpg', links: [{ icon: '✉️', url: 'mailto:j.fabian@democracy-deutschland.de' }] },
  { name: 'Robert Schäfer', role: 'Softwareentwickler', description: 'Bundestagsdatenschnittstelle', image: '/files/wir/Robert.png', links: [{ icon: '✉️', url: 'mailto:r.schaefer@democracy-deutschland.de' }] },
  { name: 'Lukas Gabriel', role: 'Softwareentwickler', description: 'Website & Blog', image: '/files/wir/Lukas.png', links: [{ icon: '✉️', url: 'mailto:l.gabriel@democracy-deutschland.de' }, { icon: '💼', url: 'https://www.xing.com/profile/Lukas_Gabriel25/' }, { icon: '🔗', url: 'https://www.linkedin.com/in/lukas-gabriel/' }] },
  { name: 'Leyla Niederberger', role: 'Botschaft', description: 'Social Media Marketing', image: '/files/wir/Leyla.png', links: [{ icon: '✉️', url: 'mailto:l.niederberger@democracy-deutschland.de' }, { icon: '🔗', url: 'https://www.linkedin.com/in/leyla-niederberger/' }] },
];

const values = [
  { icon: '🔍', title: 'TRANSPARENT', subtitle: 'Open Source & Open Book' },
  { icon: '🛡️', title: 'NICHT PROFITORIENTIERT', subtitle: 'kein Datenverkauf, keine Werbung' },
  { icon: '❤️', title: 'DATENSPARSAM', subtitle: 'geringstmögliche Datensammlung' },
];

function TeamMember({ member }: { member: typeof team[0] | typeof volunteers[0] }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-32 h-32 mb-4 relative rounded-full overflow-hidden bg-gray-200">
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
          <p className="text-blue-600 font-medium mb-1">{member.role}</p>
          <p className="text-gray-600 text-sm mb-4" dangerouslySetInnerHTML={{ __html: member.description }} />
          <div className="flex gap-3">
            {member.links.map((link, idx) => (
              <a key={idx} href={link.url} className="text-2xl hover:opacity-70 transition-opacity" target={link.url.startsWith('http') ? '_blank' : undefined} rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Über DEMOCRACY</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-blue-100">Wir sind DEMOCRACY Deutschland e.V. - ein gemeinnütziger Verein, der sich für mehr direkte Demokratie einsetzt.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Unsere Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">DEMOCRACY ist eine unabhängige Demokratie-App zur direkten Abstimmung über Bundestagsabstimmungen. Wir wollen mehr Menschen für Politik begeistern und ihnen eine Stimme geben.</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">Unser Ziel ist es, die Kluft zwischen Bürgern und Politik zu überbrücken und eine neue Form der Bürgerbeteiligung zu schaffen. Mit DEMOCRACY können Nutzer über alle Bundestagsabstimmungen abstimmen und ihre Meinung mit den Abgeordneten vergleichen.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Unsere Werte</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Unser Kernteam</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, idx) => <TeamMember key={idx} member={member} />)}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Unsere Ehrenamtlichen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {volunteers.map((member, idx) => <TeamMember key={idx} member={member} />)}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Werde Teil der Bewegung</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Du möchtest bei DEMOCRACY mitmachen? Wir suchen immer engagierte Menschen, die unsere Vision teilen.</p>
          <a href="/kontakt" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">Kontaktiere uns</a>
        </div>
      </section>
    </div>
  );
}
