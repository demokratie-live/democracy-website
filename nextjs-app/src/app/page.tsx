'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import Link from 'next/link';

const features = [
  {
    id: 'choose',
    title: 'Wähle',
    description: 'einen aktuellen, vergangenen oder populären Vorgang des Deutschen Bundestages',
    icon: '/images/group6@3x.png',
    iconActive: '/images/group6@3x.t.png',
    video: '/videos/DDW-List_croped.mp4',
  },
  {
    id: 'inform',
    title: 'Informiere',
    description: 'Dich über den Vorgang mithilfe der offiziellen Parlamentsdokumente',
    icon: '/images/group3@3x.png',
    iconActive: '/images/group3@3x.t.png',
    video: '/videos/DDW-info_croped.mp4',
  },
  {
    id: 'vote',
    title: 'Stimme',
    description: 'selbst über den Vorgang ab, als wärst Du Bundestagsabgeordneter',
    icon: '/images/group5@3x.png',
    iconActive: '/images/group5@3x.t.png',
    video: '/videos/DDW-vote_croped.mp4',
  },
  {
    id: 'compare',
    title: 'Vergleiche',
    description: 'Dein Abstimmungsverhalten mit der Community und dem Bundestag',
    icon: '/images/group2@3x.png',
    iconActive: '/images/group2@3x.t.png',
    video: '/videos/DDW-compare_croped.mp4',
  },
  {
    id: 'analyze',
    title: 'Analysiere',
    description: 'Deine Übereinstimmung mit dem Bundestag, den Parteien und Kandidaten',
    icon: '/images/group9@3x.png',
    iconActive: '/images/group9@3x.t.png',
    video: '/videos/DDW-analyse_croped.mp4',
  },
];

const pressLogos = [
  {
    name: 'hr-iNFO',
    logo: '/images/hrinfo_logo.png',
    url: 'https://www.hr-inforadio.de/podcast/jung-macht-politik/jung-macht-politik-marius-krueger--per-app-zum-virtuellen-bundestagsabgeordneten,podcast-episode-76718.html',
    alt: 'Logo des hessischen Radiosenders hr-iNFO',
  },
  {
    name: 'MDR',
    logo: '/images/mdr_logo.png',
    url: 'https://www.youtube.com/watch?v=5sbPOUL-5Fs',
    alt: 'Logo des Mitteldeutschen Rundfunks',
  },
  {
    name: 'Deutsche Welle',
    logo: '/images/dw_logo.png',
    url: 'https://www.youtube.com/watch?v=RkSq_rBpVlA',
    alt: 'Logo der Nachrichtenorganisation Deutsche Welle',
  },
  {
    name: 'WIRED',
    logo: '/images/wired_logo.png',
    url: 'https://www.gq-magazin.de/auto-technik/article/die-bundesregierung-sollte-wort-halten-und-unserer-demokratie-ein-update-fuer-mehr-beteiligung-verpassen',
    alt: 'Logo des Magazins WIRED',
  },
];

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div>
      {/* Hero Section with Enhanced Design */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url(/files/images/Logo-Landingpage.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} />
        </div>
        
        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                DEMOCRACY
              </h1>
              <p className="text-3xl md:text-4xl font-semibold mb-2">
                1<span className="text-white/80">.</span>5
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Weil deine Stimme zählt!
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                <a
                  href="https://apps.apple.com/de/app/democracy-deutschland/id1341311370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/images/app-store-badge.svg"
                    alt="Download on the App Store"
                    className="h-14"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=de.democracy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/images/google-play-badge.png"
                    alt="Get it on Google Play"
                    className="h-14"
                  />
                </a>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 text-sm justify-center lg:justify-start">
                <a
                  href="https://app.democracy-deutschland.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-200 transition-colors underline"
                >
                  zur Browserversion
                </a>
                <div className="text-white/80">
                  <a
                    href="/files/download/democracy-app.aab"
                    target="_blank"
                    className="text-white hover:text-blue-200 transition-colors underline"
                    title="Android App Bundle"
                  >
                    AAB
                  </a>
                  <span className="mx-2">/</span>
                  <a
                    href="/files/download/democracy-app.apk"
                    target="_blank"
                    className="text-white hover:text-blue-200 transition-colors underline"
                    title="Android Package"
                  >
                    APK (v1.5.10)
                  </a>
                  <span className="ml-1">laden</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 md:w-80">
                <img
                  src="/files/images/List.png"
                  alt="DEMOCRACY App Screenshot"
                  className="w-full drop-shadow-2xl rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <a href="#video" className="text-white/60 hover:text-white transition-colors">
            <svg className="w-10 h-10 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:mb-0">
                Worum geht es bei <span className="text-blue-600">DEMOCRACY</span> (2:30)?
              </h2>
              <Link
                href="/faq"
                className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
              >
                Mehr Informationen zu diesem Film →
              </Link>
            </div>
            
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
                src="https://www.youtube.com/embed/DFXcnRdXA7k"
                title="DEMOCRACY Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center lg:text-left">
              Alle Funktionen von DEMOCRACY
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(index)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      activeFeature === index
                        ? 'bg-blue-100 border-2 border-blue-600 shadow-lg'
                        : 'bg-white border-2 border-transparent hover:border-gray-300 hover:shadow'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12">
                        <img
                          src={activeFeature === index ? feature.iconActive : feature.icon}
                          alt={`${feature.title} Icon`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-lg">
                          <span className="font-bold">{feature.title}</span> {feature.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="relative w-full max-w-md mx-auto lg:mx-0">
                <div className="relative w-64 md:w-80 mx-auto">
                  <video
                    key={features[activeFeature].video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-3xl shadow-2xl"
                  >
                    <source src={features[activeFeature].video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Für wen ist DEMOCRACY?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-blue-600">
                    Für Bürger,
                  </h3>
                  <p className="text-lg mb-4 text-gray-700">
                    die sich mehr Transparenz<br />& Teilhabe wünschen
                  </p>
                  <p className="text-gray-600 mb-6">
                    Ob jung oder alt, ob bereits Experte oder bislang uninformiert. DEMOCRACY ist ein politisches
                    Werkzeug für alle, die sich mehr Transparenz und Teilhabe wünschen.
                  </p>
                  <Link
                    href="/buerger"
                    className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
                  >
                    Mehr erfahren →
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2 text-blue-600">
                    Für Politiker,
                  </h3>
                  <p className="text-lg mb-4 text-gray-700">
                    die erklären wollen, warum<br />sie wie entscheiden
                  </p>
                  <p className="text-gray-600 mb-6">
                    Ob parlamentarischer Neuling oder abgeklärter Abgeordneter. DEMOCRACY bietet Dir die Möglichkeit,
                    Deinen wichtigsten Stakeholdern Gehör zu schenken: den Bürgern.
                  </p>
                  <Link
                    href="/politiker"
                    className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-centers"
                  >
                    Mehr erfahren →
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Press Logos */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-8 text-gray-800">
                bekannt aus
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                {pressLogos.map((press) => (
                  <a
                    key={press.name}
                    href={press.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <img
                      src={press.logo}
                      alt={press.alt}
                      className="h-12 md:h-16 object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
