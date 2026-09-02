/**
 * About Page seed data
 * 
 * Seeds the initial Über-Uns page configuration with all sections
 */

import type { Payload } from 'payload';

/**
 * Seeds the About global with default content
 */
export async function seedAbout(payload: Payload) {
  // Check if about already has sections
  const about = await payload.findGlobal({
    slug: 'about',
  });

  // Only seed if no sections exist
  if (about.sections && about.sections.length > 0) {
    payload.logger.info('About already has sections, skipping seed');
    return;
  }

  payload.logger.info('Seeding About configuration...');

  await payload.updateGlobal({
    slug: 'about',
    data: {
      seo: {
        metaTitle: 'Über Uns - DEMOCRACY Deutschland e.V.',
        metaDescription: 'DEMOCRACY Deutschland e.V. - Ein gemeinnütziger Verein, der sich für Demokratie als politische Selbstbestimmung einsetzt. Unabhängig, überparteilich und nichtkommerziell.',
      },
      sections: [
        // Statement Sektion
        {
          blockType: 'statement',
          title: 'DEMOCRACY Deutschland e.V.',
          subtitle: 'Wir sind ein gemeinnütziger Verein, der sich für Demokratie als politische Selbstbestimmung einsetzt.',
          additionalText: 'Unsere Arbeit ist unabhängig, überparteilich, allgemeinnützig und nichtkommerziell – von Menschen für Menschen',
          enabled: true,
        },
        // Video Sektion
        {
          blockType: 'aboutVideo',
          title: 'Initiativenleitbild / Mission Statement',
          duration: '10:46',
          videoUrl: 'https://www.youtube.com/embed/E3KvgGrGQO4',
          ctaText: 'DEMOCRACY Spenden',
          ctaLink: '/spenden',
          enabled: true,
        },
        // Demokratisches Verständnis Sektion
        {
          blockType: 'democraticUnderstanding',
          title: 'Unser demokratisches Verständnis',
          leftHeader: 'Das unterstützen wir',
          leftHeaderColor: '#4494d3',
          rightHeader: 'Das unterstützen wir nicht',
          rightHeaderColor: '#e67c89',
          rows: [
            {
              leftTitle: 'Demokratie als aufklärerische Idee',
              leftContent: 'Demokratie, in seiner aufklärerischen Idee verstanden als Regierung durch die Bevölkerung mit dem Prinzip ein Mensch – eine Stimme',
              rightTitle: 'Nicht-demokratische Regierungsformen',
              rightContent: 'Diktatur (Regierung der Befehlenden), Oligarchie (Regierung der Vermögenden), Epistokratie (Regierung der Expert:innen)',
            },
            {
              leftTitle: 'Souveränität des Einzelnen',
              leftContent: 'Die Selbstbestimmung des Individuums und seine Fähigkeit, eigenständig vernünftige Entscheidungen zu treffen sowie den verfassungsmäßigen Schutz dieser Würde',
              rightTitle: 'Fremdbestimmung des Einzelnen',
              rightContent: 'Haltungen, die die universelle Befähigung des Menschen, eigenständig vernünftige Entscheidungen zu treffen, aberkennen und/oder Bewegungen, die Freiheits- und Mitbestimmungsrechte des Einzelnen abbauen (wollen)',
            },
            {
              leftTitle: 'Meinungsfreiheit & breite Debatten',
              leftContent: 'Meinungsfreiheit, verstanden in der Idee Rosa Luxemburgs, als die Freiheit der Andersdenkenden (bzw. Voltaires "Ich mag verdammen, was du sagst, aber ich werde mein Leben dafür einsetzen, dass du es sagen darfst.")',
              rightTitle: 'Verengung des Meinungskorridors',
              rightContent: '(staatliche) Beschneidung oder Kontrolle von Informationen und homogene Berichterstattung',
            },
            {
              leftTitle: 'Direkte Beteiligung',
              leftContent: 'umfassende Mitbestimmungsmöglichkeiten im politischen Prozess während der Legislaturperiode und eine politisch aktive Bevölkerung',
              rightTitle: 'Zuschauer-Demokratie',
              rightContent: 'einen Zustand, in dem Wirtschaftslobbyisten täglich politische Entscheidungen beeinflussen, während Bürger:innen zwischen Wahlen passiv zuschauen müssen',
            },
            {
              leftTitle: 'Transparenz & Informationssouveränität',
              leftContent: 'größtmögliche Transparenz im politischen Prozess und einen freien und benutzerfreundlichen Zugang zu allen Informationen, sodass Bürger:innen ihre Repräsentanten und deren Arbeit verfolgen können',
              rightTitle: 'Hinterzimmer-Politik',
              rightContent: 'intransparente Entscheidungsfindungen, bei denen Bürger:innen wenig Einblick haben, was passiert und auch nicht überprüfen können, warum und wie Entscheidungen zustande kommen und wer auf sie Einfluss genommen hat',
            },
            {
              leftTitle: 'rückkoppelnde Politiker,',
              leftContent: 'die Erwartungen und Wünsche aus der Bevölkerung einbeziehen (wollen), sich in ständigem Austausch mit der Bevölkerung als Vertreter dieser verstehen und falls nötig vom Kurs ihrer Partei abweichen und nach ihrem Gewissen entscheiden.',
              rightTitle: 'entkoppelte Politiker,',
              rightContent: 'die eigene Interessen verfolgen, während der Legislaturperiode kein Interesse an der Bevölkerung haben und sich im undurchsichtigen parlamentarischen Betrieb ihrer Rechenschaftspflicht entziehen',
            },
          ],
          enabled: true,
        },
        // Team Sektion
        {
          blockType: 'team',
          decoratorImage: '/files/images/democracy-bar.png',
          title: 'Mitarbeiter',
          subtitle: 'an DEMOCRACY arbeiten',
          members: [
            {
              name: 'Marius Krüger',
              role: 'Gründer<br>Organisation & Produkt',
              image: '/files/wir/Marius1.png',
              links: [
                { icon: 'email', url: 'mailto:m.krueger@democracy-deutschland.de' },
                { icon: 'phone', url: 'tel:+4917647040213' },
                { icon: 'facebook', url: 'https://www.facebook.com/kruegermarius' },
              ],
            },
            {
              name: 'Manuel Ruck',
              role: 'Softwareentwickler<br>Programmierer des Projektes',
              image: '/files/wir/Manu1.png',
              links: [
                { icon: 'email', url: 'mailto:m.ruck@democracy-deutschland.de' },
                { icon: 'xing', url: 'https://www.xing.com/profile/Manuel_Ruck' },
              ],
            },
            {
              name: 'Elisa Menne',
              role: 'Administration<br>Kommunikation & Buchhaltung',
              image: '/files/wir/Elisa.jpg',
              links: [
                { icon: 'email', url: 'mailto:e.menne@democracy-deutschland.de' },
              ],
            },
          ],
          showDiscord: true,
          discordServerId: '372403545086885888',
          enabled: true,
        },
        // Philosophy Sektion
        {
          blockType: 'philosophy',
          decoratorImage: '/files/images/democracy-bar.png',
          title: 'Unsere Philosophie',
          subtitle: 'Unsere Arbeit ist unabhängig, überparteilich, allgemeinnützig und nichtkommerziell –\nvon Menschen für Menschen',
          values: [
            {
              icon: '/files/images/magnify@3x.png',
              title: 'TRANSPARENT',
              subtitle: 'Open Source & Open Book',
            },
            {
              icon: '/files/images/shield@3x.png',
              title: 'NICHT PROFITORIENTIERT',
              subtitle: 'kein Datenverkauf, keine Werbung',
            },
            {
              icon: '/files/images/heart2@3x.png',
              title: 'DATENSPARSAM',
              subtitle: 'geringstmögliche Datensammlung',
            },
          ],
          enabled: true,
        },
        // Quote Sektion
        {
          blockType: 'founderQuote',
          quoteIcon: '/files/images/quotes@3x.png',
          quoteText: 'Mit DEMOCRACY wollen wir der Zivilgesellschaft eine Infrastruktur zur Verfügung stellen, die das Funktionieren von tatsächlicher Demokratie begünstigt. Der Weisheit letzter Schluss liegt für uns in der solidarischen Kooperation zum Vorteil aller. Für uns ist es selbstverständlich, unseren Source-Code und unsere Bücher offen zu legen (Transparenz). Und weil Profitinteressen die Idee nur korrumpieren würden, haben wir uns auch äußerlich eine Rechtsform gegeben, die eine Verfremdung oder Bereicherungsabsicht per Satzung für immer ausschließt. DEMOCRACY ist und bleibt spendenfinanziert. Daten, die bei der Nutzung der App entstehen, sind für uns keine handelbaren Wirtschaftsgüter, sondern im Sinne der informationellen Selbstbestimmung zu vermeiden bzw. zu schützen.',
          authorName: 'Marius Krüger',
          authorRole: 'Gründer',
          enabled: true,
        },
      ],
    },
  });

  payload.logger.info('About seeded successfully!');
}
