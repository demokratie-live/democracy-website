'use client';

import Link from 'next/link';
import { ComparisonAccordion, ComparisonRow } from '@/components/ui/ComparisonAccordion';

const team = [
  {
    name: 'Marius Krüger',
    text: 'Gründer<br>Organisation &amp; Produkt',
    img: '/files/wir/Marius1.png',
    links: [
      { icon: 'fa-envelope', url: 'mailto:m.krueger@democracy-deutschland.de' },
      { icon: 'fa-phone', url: 'tel:+4917647040213' },
      { icon: 'fa-facebook', url: 'https://www.facebook.com/kruegermarius' },
    ],
  },
  {
    name: 'Manuel Ruck',
    text: 'Softwareentwickler<br>Programmierer des Projektes',
    img: '/files/wir/Manu1.png',
    links: [
      { icon: 'fa-envelope', url: 'mailto:m.ruck@democracy-deutschland.de' },
      { icon: 'fa-xing', url: 'https://www.xing.com/profile/Manuel_Ruck' },
    ],
  },
  {
    name: 'Elisa Menne',
    text: 'Administration<br>Kommunikation &amp; Buchhaltung',
    img: '/files/wir/Elisa.jpg',
    links: [
      { icon: 'fa-envelope', url: 'mailto:e.menne@democracy-deutschland.de' },
    ],
  },
];

const democracyRows: ComparisonRow[] = [
  {
    id: 1,
    left: {
      title: 'Demokratie als aufklärerische Idee',
      content: 'Demokratie, in seiner aufklärerischen Idee verstanden als Regierung durch die Bevölkerung mit dem Prinzip ein Mensch – eine Stimme',
    },
    right: {
      title: 'Nicht-demokratische Regierungsformen',
      content: 'Diktatur (Regierung der Befehlenden), Oligarchie (Regierung der Vermögenden), Epistokratie (Regierung der Expert:innen)',
    },
  },
  {
    id: 2,
    left: {
      title: 'Souveränität des Einzelnen',
      content: 'Die Selbstbestimmung des Individuums und seine Fähigkeit, eigenständig vernünftige Entscheidungen zu treffen sowie den verfassungsmäßigen Schutz dieser Würde',
    },
    right: {
      title: 'Fremdbestimmung des Einzelnen',
      content: 'Haltungen, die die universelle Befähigung des Menschen, eigenständig vernünftige Entscheidungen zu treffen, aberkennen und/oder Bewegungen, die Freiheits- und Mitbestimmungsrechte des Einzelnen abbauen (wollen)',
    },
  },
  {
    id: 3,
    left: {
      title: 'Meinungsfreiheit & breite Debatten',
      content: 'Meinungsfreiheit, verstanden in der Idee Rosa Luxemburgs, als die Freiheit der Andersdenkenden (bzw. Voltaires "Ich mag verdammen, was du sagst, aber ich werde mein Leben dafür einsetzen, dass du es sagen darfst.")',
    },
    right: {
      title: 'Verengung des Meinungskorridors',
      content: '(staatliche) Beschneidung oder Kontrolle von Informationen und homogene Berichterstattung',
    },
  },
  {
    id: 4,
    left: {
      title: 'Direkte Beteiligung',
      content: 'umfassende Mitbestimmungsmöglichkeiten im politischen Prozess während der Legislaturperiode und eine politisch aktive Bevölkerung',
    },
    right: {
      title: 'Zuschauer-Demokratie',
      content: 'einen Zustand, in dem Wirtschaftslobbyisten täglich politische Entscheidungen beeinflussen, während Bürger:innen zwischen Wahlen passiv zuschauen müssen',
    },
  },
  {
    id: 5,
    left: {
      title: 'Transparenz & Informationssouveränität',
      content: 'größtmögliche Transparenz im politischen Prozess und einen freien und benutzerfreundlichen Zugang zu allen Informationen, sodass Bürger:innen ihre Repräsentanten und deren Arbeit verfolgen können',
    },
    right: {
      title: 'Hinterzimmer-Politik',
      content: 'intransparente Entscheidungsfindungen, bei denen Bürger:innen wenig Einblick haben, was passiert und auch nicht überprüfen können, warum und wie Entscheidungen zustande kommen und wer auf sie Einfluss genommen hat',
    },
  },
  {
    id: 6,
    left: {
      title: 'rückkoppelnde Politiker,',
      content: 'die Erwartungen und Wünsche aus der Bevölkerung einbeziehen (wollen), sich in ständigem Austausch mit der Bevölkerung als Vertreter dieser verstehen und falls nötig vom Kurs ihrer Partei abweichen und nach ihrem Gewissen entscheiden.',
    },
    right: {
      title: 'entkoppelte Politiker,',
      content: 'die eigene Interessen verfolgen, während der Legislaturperiode kein Interesse an der Bevölkerung haben und sich im undurchsichtigen parlamentarischen Betrieb ihrer Rechenschaftspflicht entziehen',
    },
  },
];

const icons = [
  { icon: 'magnify', text: 'TRANSPARENT', subtext: 'Open Source & Open Book' },
  { icon: 'shield', text: 'NICHT PROFITORIENTIERT', subtext: 'kein Datenverkauf, keine Werbung' },
  { icon: 'heart2', text: 'DATENSPARSAM', subtext: 'geringstmögliche Datensammlung' },
];

function TeamMember({ member }: { member: typeof team[0] }) {
  return (
    <div className="w-full md:w-1/4 px-4" style={{ marginTop: '50px' }}>
      <div>
        <img
          src={member.img}
          alt={member.name}
          className="w-full max-w-[200px] mx-auto"
          style={{ borderRadius: '8px' }}
        />
      </div>
      <div className="team_info text-center mt-4">
        <h4 className="text-lg font-semibold">{member.name}</h4>
        <div className="team_links flex justify-center gap-3 my-2">
          {member.links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              className="text-gray-600 hover:text-[#4494d3] transition-colors"
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.icon === 'fa-envelope' && '✉️'}
              {link.icon === 'fa-phone' && '📞'}
              {link.icon === 'fa-facebook' && '📘'}
              {link.icon === 'fa-xing' && '💼'}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: member.text }} />
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Statement Section */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          DEMOCRACY Deutschland e.V.
        </h1>
        <h4 className="text-lg md:text-xl text-center text-gray-700 mt-8 max-w-4xl mx-auto">
          Wir sind ein gemeinnütziger Verein, der sich für Demokratie als politische
          Selbstbestimmung einsetzt.
        </h4>
        <h4 className="text-lg md:text-xl text-center text-gray-700 mt-4 max-w-4xl mx-auto leading-relaxed">
          Unsere Arbeit ist unabhängig, überparteilich, allgemeinnützig und nichtkommerziell – von
          Menschen für Menschen
        </h4>
      </div>

      {/* Video Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Initiativenleitbild / Mission Statement (10:46)
          </h1>
          <Link
            href="/spenden"
            className="text-gray-700 text-lg hover:text-[#4494d3] transition-colors mt-4 lg:mt-0"
          >
            DEMOCRACY Spenden
          </Link>
        </div>
        <div className="aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/E3KvgGrGQO4"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      {/* Democratic Understanding Section */}
      <div className="container mx-auto px-4 pb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 pb-4 pt-4">
          Unser demokratisches Verständnis
        </h1>

        <ComparisonAccordion
          rows={democracyRows}
          leftHeader="Das unterstützen wir"
          rightHeader="Das unterstützen wir nicht"
          leftHeaderColor="#4494d3"
          rightHeaderColor="#e67c89"
        />
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <img
            src="/files/images/democracy-bar.png"
            alt="Democracy Bar"
            className="w-full max-w-3xl"
            style={{ paddingTop: '50px' }}
          />
        </div>

        <div className="pt-12">
          <h1 className="text-2xl md:text-3xl font-bold text-center">Mitarbeiter</h1>
          <h4 className="text-lg text-center text-gray-700 mt-6">an DEMOCRACY arbeiten</h4>
        </div>

        <div className="flex flex-wrap justify-center">
          {team.map((member, idx) => (
            <TeamMember key={idx} member={member} />
          ))}
          <div className="w-full md:w-1/4 px-4" style={{ marginTop: '50px' }}>
            <iframe
              src="https://discordapp.com/widget?id=372403545086885888&theme=light"
              width="100%"
              height="100%"
              style={{ minHeight: '300px', paddingBottom: '15px' }}
              frameBorder={0}
            ></iframe>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="flex justify-center">
          <img
            src="/files/images/democracy-bar.png"
            alt="Democracy Bar"
            className="w-full max-w-3xl"
            style={{ paddingTop: '75px' }}
          />
        </div>

        <div className="pt-12 pb-12">
          <h1 className="text-2xl md:text-3xl font-bold text-center">Unsere Philosophie</h1>
          <h4 className="text-lg text-center text-gray-700 mt-6 leading-relaxed">
            Unsere Arbeit ist unabhängig, überparteilich, allgemeinnützig und nichtkommerziell –
            <br />
            von Menschen für Menschen
          </h4>
        </div>

        {/* Values Icons */}
        <div className="flex flex-wrap justify-center pb-8">
          {icons.map((icon, idx) => (
            <div key={idx} className="w-full md:w-1/3 text-center px-4 mb-8">
              <div className="flex justify-center mb-4">
                <img
                  src={`/files/images/${icon.icon}@3x.png`}
                  alt={icon.text}
                  style={{ width: '80px' }}
                />
              </div>
              <h4 className="font-bold text-lg">{icon.text}</h4>
              <h6 className="text-gray-600 mt-2">{icon.subtext}</h6>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="flex flex-wrap justify-center pb-24">
          <div className="hidden md:block md:w-1/6"></div>
          <div className="w-auto px-4">
            <img
              src="/files/images/quotes@3x.png"
              alt="Quotes"
              style={{ width: '60px', paddingTop: '25px' }}
            />
          </div>
          <div className="w-full md:w-7/12 px-4" style={{ paddingTop: '25px' }}>
            <span className="text-gray-700 leading-relaxed">
              Mit DEMOCRACY wollen wir der Zivilgesellschaft eine Infrastruktur zur Verfügung
              stellen, die das Funktionieren von tatsächlicher Demokratie begünstigt. Der Weisheit
              letzter Schluss liegt für uns in der solidarischen Kooperation zum Vorteil aller. Für
              uns ist es selbstverständlich, unseren Source-Code und unsere Bücher offen zu legen
              (Transparenz). Und weil Profitinteressen die Idee nur korrumpieren würden, haben wir
              uns auch äußerlich eine Rechtsform gegeben, die eine Verfremdung oder
              Bereicherungsabsicht per Satzung für immer ausschließt. DEMOCRACY ist und bleibt
              spendenfinanziert. Daten, die bei der Nutzung der App entstehen, sind für uns keine
              handelbaren Wirtschaftsgüter, sondern im Sinne der informationellen Selbstbestimmung
              zu vermeiden bzw. zu schützen.
            </span>
            <div className="mt-4">
              <span className="font-bold">Marius Krüger,</span>{' '}
              <span className="text-[#4494d3]">Gründer</span>
            </div>
          </div>
          <div className="hidden md:block md:w-1/6"></div>
        </div>
      </div>
    </div>
  );
}
