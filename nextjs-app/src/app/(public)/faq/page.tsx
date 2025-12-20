'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSetHeaderTheme } from '@/contexts/HeaderContext';

// FAQ data from legacy system
const faqData = [
  {
    id: 1,
    order: 0,
    question: 'Gebt ihr meine Daten an Dritte weiter?',
    answer: `Die Betreiber der App DEMOCRACY nehmen den Schutz Deiner persönlichen Daten sehr ernst.<br> Unserer Meinung nach sind Nutzerdaten gerade keine handelbaren Wirtschaftsgüter, sondern im Sinne des Grundgesetzes zu schützen. Deshalb behandeln wir Deine personenbezogenen wie Abstimmungs-Daten vertraulich entsprechend den gesetzlichen Datenschutzrichtlinien und geben sie selbstverständlich nicht an Dritte weiter.<br> Damit Du Dich bei der Nutzung unserer App sicher fühlst, informieren wir Dich <a href="/datenschutz">hier</a> zusätzlich zu den gesetzlichen Bestimmungen darüber, welche Daten wir warum erheben und wie wir diese verarbeiten und nutzen.<br> Unser Konzept zur Aufrechterhaltung des Abstimmungs- bzw. Wahlgeheimnis innerhalb der App DEMOCRACY kannst du hier nachlesen: <a href="https://github.com/demokratie-live/democracy-development/wiki/Stimmanonymität" target="_blank" rel="noopener noreferrer">https://github.com/demokratie-live/democracy-development/wiki/Stimmanonymität</a>.`,
    categories: 'datenschutz',
  },
  {
    id: 2,
    order: 1,
    question: 'Wie stellt ihr meine Stimmanonymität sicher?',
    answer: `Wahlgeheimnis bedeutet, dass während und nach einer Wahl keine Information bekannt werden darf, die darauf schließen lässt, was ein Wähler gewählt hat. Im Konkreten geht es also um die Trennung von Person und Stimme in Urnenbuch und Auszählung. Die Aufrechterhaltung dieses Abstimmungs- bzw. Wahlgeheimnis ist zentraler Bestandteil der DNA der DEMOCRACY App.<br><br> Unser Konzept sieht dafür vor, jede Deiner Abstimmungsentscheidungen (Ja, Enthaltung, Nein als Stimme) von Deinen personenbezogenen Identifikationsdaten ( – dem Urnenbuch) zu trennen. Technisch lösen wir das ganze durch eine sogenannte serverseitige Profiling-Daten-Vermeidung. Praktisch wird dabei eine Quittung Deiner Abstimmungsentscheidung lediglich lokal auf Deinem Handy gespeichert, während Ihre Stimme serverseitig von Anfang an nur akkumuliert gespeichert wird.<br><br> Deine Stimmnonymität stellen wir also sicher, indem<ul><li>wir Deine Stimme serverseitig nur akkumuliert speichern (für Dich besteht dennoch die Möglichkeit eine Quittung über Deine Stimme auf Deinem Handy unakkumuliert zu speichern)</li><li>wir keinen Servertraffic loggen</li><li>und wir kein Datum zu Deiner Stimmabgabe speichern.</li></ul>Dieses Verfahren führt, und das sei der Vollständigkeit halber gesagt, in Grenzfällen zu Deanonymisierung, nämlich wenn<br><ul><li>nur Du abgestimmt hast</li><li>wenige Nutzer inklusive Dir abgestimmt haben und die Stimme der anderen bekannt ist, so dass Deine Stimme ermittelt werden kann</li><li>Der Netzwerkverkehr überwacht wird und das SSL Zertifikat gebrochen wird.</li></ul>Das vollständige Konzept zur Stimmanonymisierung kannst du hier <a href="https://github.com/demokratie-live/democracy-development/wiki/Stimmanonymität" target="_blank" rel="noopener noreferrer">https://github.com/demokratie-live/democracy-development/wiki/Stimmanonymität</a> nachlesen.`,
    categories: 'datenschutz',
  },
  {
    id: 3,
    order: 2,
    question: 'Sensible Daten und Open Source – geht das?',
    answer: `Open Source bedeutet, dass der Quellcode frei und offen ist. Die Daten der Nutzer sind kein Bestandteil des Quellcodes, sondern der entsprechenden Installation des freien Programms auf einem Server. Insofern ist der unberechtigte Zugriff auf Nutzerdaten durch Dritte durch unsere Open-Source-Eigenschaft nicht angetastet. Überdies wird jede Änderung im Code, bevor sie in den Betrieb übergeht, von uns geprüft. Somit wird der hohe Anspruch an guter Programmierung gewahrt und auch verhindert, dass dubioser Code einfließen kann.`,
    categories: 'datenschutz',
  },
  {
    id: 4,
    order: 3,
    question: 'Auf welchen Plattformen kann ich teilnehmen?',
    answer: `An der Beta teilnehmen kannst Du via Smartphone mit<br> iOS- oder Android-Betriebssystem`,
    categories: 'beta',
  },
  {
    id: 5,
    order: 4,
    question: 'Wie kann ich die Beta installieren?',
    answer: `Wir verwenden während des Prototyping die Store-eigenen Testkanäle des App- sowie Google PlayStore.<br> Über dieses <a href="/invite/02C67F34">Bewerbungsformular</a> kannst Du uns Deine Apple-ID bzw. Google-Play-Store-Email-Adresse sowie die Informationen, welche Plattform (iOS/Android) Du benutzt mitteilen, sodass wir Dich auf die jeweilige Test-Liste setzen können.<br><br> Nach entsprechender Freischaltung bekommst Du von uns einen Zugangscode sowie Deine Plattform-spezifische Installationsanleitung per Mail übersendet.`,
    categories: 'beta',
  },
  {
    id: 6,
    order: 5,
    question: 'Welche Funktionen sind in der BETA enthalten?',
    answer: `DEMOCRACY bedeutet 1. Live Daten aus dem Bundestag, 2. eigene AppStimmung durch Dich als Nutzer und 3. eine crowdmodierte Diskussion zu den Anträgen. Im Prototyp realisiert sind davon die Live-Anbindung an die Bundestagsdaten sowie die Nutzerabstimmung. Die vollständige <a href="/engineering">Funktionsübersicht</a> kannst Du dieser Tabelle entnehmen.`,
    categories: 'beta',
  },
  {
    id: 7,
    order: 6,
    question: 'Wann kommt der Public MVP?',
    answer: `Wir möchten so schnell wie möglich mit DEMOCRACY online gehen – wenn es nach uns geht, noch diesen Herbst. Bis zu diesem Zeitpunkt müssen allerdings noch einige Meilensteine erreicht werden. Dafür brauchen wir Deine Hilfe – Gestalte DEMOCRACY mit Deiner Spende oder Deinen Fähigkeiten. Fragen zum Stand der Entwicklung kannst Du gerne an <a href="mailto:prototyping@democracy-deutschland.de">prototyping@democracy-deutschland.de</a> adressieren. Bis zum Public MVP werden Dir Erweiterungen regelmäßig als Beta-Updates präsentiert.`,
    categories: 'mvp',
  },
  {
    id: 8,
    order: 7,
    question: 'Wie wird DEMOCRACY finanziert?',
    answer: `DEMOCRACY ist eine gemeinnützige App, das heißt von Menschen, für Menschen, um unsere Politik transparenter und bürgernaher zu machen. Da wir DEMOCRACY als eine werbefreie Plattform ohne Datenverkauf realisieren wollen, kann unser Joker nur die gemeinschaftliche Finanzierung sein. Insofern wird DEMOCRACY, um die laufenden Kosten zu decken, auch nach dem initialen Crowdfunding durch Spenden finanziert.`,
    categories: 'finanzen',
  },
  {
    id: 9,
    order: 8,
    question: 'Warum braucht ihr Geld?',
    answer: `Während die Konzeption der Plattform bislang hauptsächlich von freiwilliger Arbeit gestemmt wurde, hat der Crowdfundingerfolg DEMOCRACY Deutschland e.V. das Privileg verschafft, 3 Vollzeitangestellte für 6 Monate beschäftigen zu können, die ihre gesamte Zeit und Energie dem Projekt widmen – das hat die Entwicklung von DEMOCRACY extrem vorangebracht.<br><br> Wenn es nach uns geht, möchten wir so schnell wie möglich mit dem DEMOCRACY MVP an den Start gehen, allerdings müssen bis dahin noch einige Meilensteine in der Entwicklung erreicht werden. Und dafür brauchen wir Deine finanzielle Unterstützung, um das Nötige zum Leben zu erhalten.`,
    categories: 'finanzen',
  },
  {
    id: 10,
    order: 9,
    question: 'Wie ist Bankverbindung von DEMOCRACY Deutschland e.V.?',
    answer: `Kontoinhaber: DEMOCRACY Deutschland e.V.<br> IBAN: DE33 5003 1000 1049 7560 00<br> BIC: TRODDEF1`,
    categories: 'finanzen',
  },
];

const categories = [
  { key: 'all', label: 'ALLE' },
  { key: 'beta', label: 'BETA' },
  { key: 'mvp', label: 'MVP' },
  { key: 'finanzen', label: 'FINANZEN' },
  { key: 'datenschutz', label: 'DATENSCHUTZ' },
];

export default function FAQPage() {
  useSetHeaderTheme('light');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number>(0);

  const filteredFaqs =
    activeCategory === 'all'
      ? faqData
      : faqData.filter((faq) => faq.categories === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-white pt-16">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Häufige Fragen (FAQ)
          </h1>
          <h5 className="text-base text-gray-600 pt-5 pb-12">
            Hier findet Ihr die wichtigsten Fragen &amp; Antworten zu DEMOCRACY.
            <br />
            Du hast auch eine Frage – stell Sie uns{' '}
            <Link href="/contact" className="text-[rgb(68,148,211)] hover:underline">
              hier
            </Link>
            .
          </h5>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-8 pb-24" style={{ textAlign: 'left' }}>
          {/* Category Menu */}
          <div className="lg:w-1/4">
            <ul
              className="rounded-lg overflow-hidden"
              style={{
                background: 'linear-gradient(to bottom, rgb(121,198,235), rgb(68,148,211))',
                padding: 0,
                margin: 0,
                listStyle: 'none',
              }}
            >
              {categories.map((cat) => (
                <li
                  key={cat.key}
                  className="transition-colors cursor-pointer"
                  style={{
                    height: '100px',
                    fontSize: '20px',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'rgb(121,198,235)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                  }}
                >
                  <button
                    onClick={() => {
                      setActiveCategory(cat.key);
                      setOpenIndex(0);
                    }}
                    className="w-full h-full text-left block"
                    style={{
                      paddingTop: '35px',
                      paddingLeft: '35px',
                      color: activeCategory === cat.key ? '#fff' : '#000',
                      textDecoration: 'none',
                      fontWeight: activeCategory === cat.key ? 'bold' : 'normal',
                    }}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ Items */}
          <div className="lg:w-3/4">
            {filteredFaqs.map((faq, index) => (
              <div key={faq.id} className="mb-6">
                {/* Panel Heading */}
                <div
                  className="flex items-center justify-between cursor-pointer"
                  style={{
                    backgroundColor: 'rgb(239,239,244)',
                  }}
                  onClick={() => toggleFaq(index)}
                >
                  <h5
                    className="flex-1 m-0"
                    style={{
                      fontSize: '16px',
                    }}
                  >
                    <span
                      className="block"
                      style={{
                        padding: '25px',
                        color: 'rgb(25,29,32)',
                        textDecoration: 'none',
                      }}
                    >
                      {faq.question}
                    </span>
                  </h5>
                  <div
                    className="flex items-center justify-center transition-transform duration-300"
                    style={{
                      marginRight: '15px',
                      color: 'rgb(199,199,204)',
                      fontSize: '40px',
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Panel Body */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div
                    className="mt-6"
                    style={{
                      backgroundColor: 'rgba(239,239,244,0.4)',
                      padding: '15px',
                    }}
                  >
                    <div
                      className="prose prose-sm max-w-none faq-content"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .faq-content a {
          color: rgb(68, 148, 211);
          text-decoration: none;
        }
        .faq-content a:hover {
          text-decoration: underline;
        }
        .faq-content ul {
          margin-left: 20px;
          margin-top: 10px;
          margin-bottom: 10px;
          list-style-type: disc;
        }
        .faq-content li {
          margin-bottom: 5px;
        }
        .faq-content br {
          display: block;
          content: '';
          margin-top: 8px;
        }
      `}</style>
    </div>
  );
}
