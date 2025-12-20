'use client';

import Link from 'next/link';
import { ComparisonAccordion, ComparisonRow } from '@/components/ui/ComparisonAccordion';

const comparisonRows: ComparisonRow[] = [
  {
    id: 1,
    left: {
      title: 'basiert auf Versprechen',
      content:
        'Der Wahl-O-Mat ermöglicht den Vergleich eigener Stellungnahmen zu bestimmten Statements mit den autorisierten Antworten der Parteien. Er kreuzt insofern die Wahlversprechen der Parteien mit den eigenen Erwartungen für die Zukunft.',
    },
    right: {
      title: 'basiert auf Handlungen',
      content:
        'Der Wahl-O-Meter (meter = messen) vergleicht rückblickend das tatsächliche Abstimmungsverhalten der Parteien und Politiker mit den eigenen Stellungnahmen bei konkreten Gesetzen/Anträgen des Bundestag.',
    },
  },
  {
    id: 2,
    left: {
      title: 'Parteien haben Finger im Spiel',
      content:
        'Beim Wahl-O-Mat geben die Parteien ihre theoretischen Positionen zu vorgefertigten Statements über die Zukunft ab.',
    },
    right: {
      title: 'Parteien wird auf Finger geschaut',
      content:
        'Der Wahl-O-Meter braucht keine Eigenangaben der Parteien, er zieht Parteien und Abgeordnete für ihre Arbeit in der letzten Legislaturperiode zur Rechenschaft.',
    },
  },
  {
    id: 3,
    left: {
      title: 'macht Wahlkampf einfacher',
      content:
        'Der Wahl-O-Mat hilft dabei, die Wahlversprechen der Parteien auf einige verständliche Thesen zu komprimieren.',
    },
    right: {
      title: 'macht Politik transparent',
      content:
        'Der Wahl-O-Meter stellt die Abstimmungen der Parteien und Politiker im Bundestag in den Fokus und bietet so einen Einblick in den politischen Prozess.',
    },
  },
  {
    id: 4,
    left: {
      title: 'ausgesuchte Themen',
      content:
        'Der Wahl-O-Mat behandelt nur die Themen, welche von einer Redaktion für die Statements ausgesucht werden.',
    },
    right: {
      title: 'alle Themen',
      content:
        'Der Wahl-O-Meter verarbeitet alle Gesetze und Anträge der vergangenen Legislaturperiode des Bundestags und ist damit nur dadurch begrenzt, wie viel Zeit du den Abstimmungen widmen möchtest.\n\nFalls du trotzdem eine redaktionell ausgewählte Orientierungshilfe möchtest, gibt es bis zur Bundestagswahl 2021 den Reiter \'Empfohlen\'.',
    },
  },
  {
    id: 5,
    left: {
      title: 'von der Regierung',
      content:
        'Der Wahl-O-Mat wird von der Bundeszentrale für politische Bildung betrieben, welche von der Bundesregierung finanziert wird.',
    },
    right: {
      title: 'independent',
      content:
        'Die DEMOCRACY App und damit auch der Wahl-O-Meter sind unabhängig, gemeinnützig und spendenfinanziert - von Bürgern für Bürger.',
    },
  },
];

const pressLogos = [
  {
    name: 'Tagesschau',
    logo: '/files/images/tagesschau_logo.png',
    url: 'https://www.youtube.com/watch?v=B1N2ySUYXBY?autoplay=0',
    alt: 'Logo der Tagesschau',
  },
  {
    name: 'BR',
    logo: '/files/images/br_logo.png',
    url: 'https://www.br.de/nachrichten/netzwelt/bundestagswahl-alternativen-zum-wahl-o-mat',
    alt: 'Logo des Bayerischen Rundfunks',
  },
  {
    name: 'Golem',
    logo: '/files/images/golem_logo.png',
    url: 'https://www.golem.de/news/democracy-der-verbesserte-wahl-o-mat-in-einer-app-1906-141599.html',
    alt: 'Logo der IT-News-Seite Golem',
  },
  {
    name: 'Focus',
    logo: '/files/images/focus_logo.png',
    url: 'https://www.focus.de/digital/bundestagswahl-2021-mit-dieser-app-koennen-sie-abstimmungen-im-bundestag-mit-ihren-ansichten-vergleichen_id_24262915.html',
    alt: 'Logo der Zeitschrift FOCUS',
    scale: 0.9,
  },
];

export default function WahlometerPage() {
  const appstoreLink = 'https://itunes.apple.com/de/app/democracy/id1341311162';
  const playstoreLink = 'https://play.google.com/store/apps/details?id=de.democracydeutschland.app';
  const browserVersionLink = 'https://democracy-app.de';

  return (
    <div>
      {/* Hero Section - Wahlometer Style */}
      <section
        className="header-wom relative min-h-screen"
        style={{
          background: 'linear-gradient(to bottom, rgb(95, 147, 207), rgb(70, 108, 171))',
        }}
      >
        {/* Background Logo */}
        <div className="background-logo hidden lg:block overflow-hidden absolute w-full h-screen left-0">
          <img
            src="/files/images/Logo-Landingpage.png"
            alt=""
            className="h-[80vh] absolute right-[-30vh] top-[20vh]"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Left Side - Phone */}
            <div className="lg:w-5/12 order-2 lg:order-1 flex justify-center items-end lg:items-start">
              <div className="device-container max-w-[350px] mb-12 lg:mb-0 lg:mt-[150px]">
                <img
                  src="/files/images/WahlOMeter.png"
                  alt="Wahl-O-Meter Screenshot"
                  className="w-full"
                />
              </div>
            </div>

            <div className="lg:w-1/12 order-3 lg:order-2"></div>

            {/* Right Side - Content */}
            <div className="lg:w-6/12 order-1 lg:order-3 flex items-center">
              <div className="header-content text-center lg:text-left pt-32 lg:pt-0 w-full">
                <div className="header-content-inner text-white">
                  <h1
                    className="text-[12vw] lg:text-[50px] font-bold mb-1"
                    style={{ fontFamily: 'helvetica, sans-serif' }}
                  >
                    Wahl-O-Meter
                  </h1>
                  <h1 className="text-[8vw] lg:text-[40px] mb-6">Dein faktenbasierter Wahlhelfer</h1>

                  {/* App Store Badges */}
                  <div className="flex flex-col lg:flex-row gap-4 mb-4 justify-center lg:justify-start">
                    <div>
                      <a
                        href={appstoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="badge-link text-white text-[70px] leading-[70px] inline-block no-underline hover:opacity-80"
                      >
                        <i className="icon-app-store-outline"></i>
                      </a>
                    </div>
                    <div className="lg:pl-6">
                      <a
                        href={playstoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="badge-link text-white text-[70px] leading-[70px] inline-block no-underline hover:opacity-80"
                      >
                        <i className="icon-google-play-outline"></i>
                      </a>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col lg:flex-row gap-4 text-white justify-center lg:justify-start">
                    <div>
                      <a
                        href={browserVersionLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:opacity-80"
                      >
                        zur Browserversion
                      </a>
                    </div>
                    <div>
                      <a
                        href="/files/download/democracy-app.aab"
                        target="_blank"
                        className="text-white hover:opacity-80"
                        title="Android App Bundle"
                      >
                        AAB
                      </a>
                      <span className="text-xl inline"> / </span>
                      <a
                        href="/files/download/democracy-app.apk"
                        target="_blank"
                        className="text-white hover:opacity-80"
                        title="Android Package"
                      >
                        APK (v1.5.9)
                      </a>
                      <span> laden</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Icon */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <a href="#si-panel" className="text-white/20 hover:text-white/40 text-3xl">
            <i className="fa fa-chevron-circle-down"></i>
          </a>
        </div>
      </section>

      {/* Symbol Info Panel */}
      <section id="si-panel" className="bg-white relative z-10 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Feature 1: Faktenbasierter Wahlhelfer */}
            <div className="flex-1">
              <div className="pt-16">
                <div className="relative">
                  <div className="w-[118px] h-[116px] rounded bg-[#efeff4] mb-2"></div>
                  <img
                    src="/files/images/crosshair.svg"
                    alt="Crosshair Icon"
                    onError={(e) => {
                      e.currentTarget.src = '/files/images/crosshair.png';
                    }}
                    className="w-[76px] h-[76px] object-contain absolute top-[-20px] left-[80px] z-10"
                  />
                </div>
                <p className="text-2xl font-bold mt-4" style={{ fontFamily: 'helvetica, sans-serif' }}>
                  faktenbasierter <br />
                  Wahlhelfer
                </p>
              </div>
              <div className="mt-4 text-xl leading-normal w-[85%]">
                <p>
                  Der Wahl-O-Meter von DEMOCRACY gleicht Deine Stellungnahmen zu Gesetzen & Anträgen
                  des Bundestages mit den Entscheidungen der Fraktionen und Politiker ab und
                  ermittelt Eure Übereinstimmung.
                </p>
              </div>
            </div>

            {/* Feature 2: schnell & individuell */}
            <div className="flex-1">
              <div className="pt-16">
                <div className="relative">
                  <div className="w-[118px] h-[116px] rounded bg-[#efeff4] mb-2"></div>
                  <img
                    src="/files/images/edit.svg"
                    alt="Edit Icon"
                    onError={(e) => {
                      e.currentTarget.src = '/files/images/edit.png';
                    }}
                    className="w-[76px] h-[76px] object-contain absolute top-[-20px] left-[80px] z-10"
                  />
                </div>
                <p className="text-2xl font-bold mt-4" style={{ fontFamily: 'helvetica, sans-serif' }}>
                  schnell & <br />
                  individuell
                </p>
              </div>
              <div className="mt-4 text-xl leading-normal w-[85%]">
                <p>
                  App herunterladen, Themen anklicken, die dich interessieren, Abstimmen und direkt
                  Dein Ergebnis erhalten – in weniger als 5 Minuten.
                </p>
              </div>
            </div>

            {/* Feature 3: kostenlos & gemeinnützig */}
            <div className="flex-1">
              <div className="pt-16">
                <div className="relative">
                  <div className="w-[118px] h-[116px] rounded bg-[#efeff4] mb-2"></div>
                  <img
                    src="/files/images/fingerprint.svg"
                    alt="Fingerprint Icon"
                    onError={(e) => {
                      e.currentTarget.src = '/files/images/fingerprint.png';
                    }}
                    className="w-[76px] h-[76px] object-contain absolute top-[-20px] left-[80px] z-10"
                  />
                </div>
                <p className="text-2xl font-bold mt-4" style={{ fontFamily: 'helvetica, sans-serif' }}>
                  kostenlos & <br />
                  gemeinnützig
                </p>
              </div>
              <div className="mt-4 text-xl leading-normal w-[85%]">
                <p>
                  DEMOCRACY ist kostenlos – die Entwicklung der App open source und
                  spendenfinanziert. Als gemeinnütziger Verein wollen wir Politik transparenter
                  machen.
                </p>
                <Link href="/about" className="text-xl text-[#4a90e2] hover:underline">
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-white pb-16">
        <div className="container mx-auto px-4" style={{ minHeight: 'unset', paddingBottom: '10vh' }}>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 pt-20">
            <div className="lg:w-7/12">
              <h1 className="text-3xl lg:text-4xl inline">Wie funktioniert der </h1>
              <h1 className="text-3xl lg:text-4xl font-bold inline">Wahl-O-Meter </h1>
              <h1 className="text-3xl lg:text-4xl inline">(1:00)?</h1>
            </div>
            <div className="lg:w-5/12 text-right pt-5">
              <a
                href="#wom-campaign-container"
                className="text-[rgb(74,74,74)] text-xl hover:underline"
              >
                DEMOCRACY App herunterladen
              </a>
            </div>
          </div>

          <div className="relative w-full pt-8" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/uWwQquy_MD0"
              title="Wahl-O-Meter Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Press Logos Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4" style={{ minHeight: 'unset' }}>
          <h1 className="text-center text-2xl font-normal mt-0 pt-12 mb-8">bekannt aus</h1>
          <div
            className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 pb-16"
            id="press-logos"
          >
            {pressLogos.map((press) => (
              <a
                key={press.name}
                href={press.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src={press.logo}
                  alt={press.alt}
                  className="h-12 lg:h-16 w-auto object-contain"
                  style={press.scale ? { transform: `scale(${press.scale})` } : undefined}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section - Wahl-O-Mat vs Wahl-O-Meter */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4" style={{ minHeight: 'unset' }}>
          <h1 className="text-3xl lg:text-4xl pb-8">Was ist der Unterschied zum Wahl-O-Mat?</h1>

          <ComparisonAccordion
            rows={comparisonRows}
            leftHeader="Wahl-O-Mat"
            rightHeader="Wahl-O-Meter"
            leftHeaderColor="#f5a623"
            rightHeaderColor="#4494d3"
          />

          <div className="pb-24"></div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16" style={{ minHeight: 'unset' }}>
          <div className="flex justify-between items-start">
            <h1 className="text-3xl lg:text-4xl">Warum gibt es uns?</h1>
            <Link
              href="/about"
              className="text-[rgb(74,74,74)] text-xl hover:underline hidden lg:block"
            >
              Zur Vision von DEMOCRACY
            </Link>
          </div>

          {/* Quote Block */}
          <div className="flex flex-col lg:flex-row mt-16 ml-4">
            <div className="lg:w-1/2">
              <div className="rectangleinfo text-left">
                <div className="ri-title">
                  <h3 className="inline-block py-4 px-4 text-white bg-[rgb(68,148,211)] text-2xl font-bold relative z-10">
                    Wir wollen
                  </h3>
                </div>
                <div className="ri-subtitle ml-4 -mt-4 relative z-0">
                  <p
                    className="inline-block py-5 px-6 bg-[rgb(239,239,244)] text-xl font-bold"
                    style={{ transform: 'rotate(-1.5deg)', fontFamily: 'helvetica, sans-serif' }}
                  >
                    Menschen einfachen <br />
                    Zugang zur Politik bieten
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-12 pt-4">
              <p className="text-xl">
                Mit DEMOCRACY geben wir Menschen die Möglichkeit, sich über die Abstimmungen im
                Bundestag zu informieren und ihre Meinung mit den der Parteien und Abgeordneten
                abzugleichen.
              </p>
              <p className="mt-4 text-[#4a90e2]">
                <span className="font-bold">Marius Krüger, </span>Gründer
              </p>
            </div>
          </div>

          {/* Campaign Container */}
          <div id="wom-campaign-container" className="mt-24 relative">
            <h1 className="text-3xl lg:text-4xl relative z-10">
              Finde die Partei, die Dich wirklich vertritt
            </h1>

            <div className="mt-8">
              <h1
                className="text-[40px] lg:text-[62px] font-bold inline"
                style={{ fontFamily: 'helvetica, sans-serif', color: '#000b30' }}
              >
                DEMOCRACY
              </h1>
              <span
                className="text-[62px] lg:text-[100px] font-black"
                style={{
                  background: 'linear-gradient(0.5turn, #4494d3, #336daf)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  marginLeft: '-6px',
                }}
              >
                1
              </span>
              <span
                className="text-[73px] lg:text-[112px] font-black"
                style={{
                  background: 'linear-gradient(0.5turn, #4494d3, #336daf)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  marginLeft: '-14px',
                  marginRight: '-5px',
                }}
              >
                .
              </span>
              <span
                className="text-[62px] lg:text-[100px] font-black"
                style={{
                  background: 'linear-gradient(0.5turn, #4494d3, #336daf)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                }}
              >
                5
              </span>

              <h1
                className="text-[25px] lg:text-[34px] -mt-5"
                style={{ color: 'black', width: 'max-content' }}
              >
                Dein faktenbasierter Wahlhelfer
              </h1>

              {/* App Store Badges */}
              <div className="flex flex-col lg:flex-row gap-4 mt-4 mb-16">
                <div>
                  <a
                    href={appstoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[70px] leading-[70px] inline-block no-underline hover:opacity-80"
                  >
                    <i className="icon-app-store-outline" style={{ color: '#454545' }}></i>
                  </a>
                </div>
                <div className="lg:pl-6">
                  <a
                    href={playstoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[70px] leading-[70px] inline-block no-underline hover:opacity-80"
                  >
                    <i className="icon-google-play-outline" style={{ color: '#454545' }}></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Campaign Corner Image */}
            <img
              src="/files/images/campaigncorner@3x.png"
              alt="Democracy 1.4 - finde die Taten hinter den Worten"
              className="fixed right-0 bottom-0 origin-bottom-right pointer-events-none"
              style={{
                transform: 'scale(0.25)',
                marginBottom: '-1px',
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
