'use client';

import { useState } from 'react';
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
      {/* Hero Section - Original Style */}
      <section className="header-home relative min-h-screen" style={{ background: 'linear-gradient(to bottom, rgb(121, 198, 235), rgb(68, 148, 211))' }}>
        {/* Background Logo */}
        <div className="background-logo hidden lg:block overflow-hidden absolute w-full h-screen left-0">
          <img src="/files/images/Logo-Landingpage.png" alt="" className="h-[80vh] absolute right-[-30vh] top-[20vh]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Left Side - Phone */}
            <div className="lg:w-5/12 order-2 lg:order-1 flex justify-center items-end lg:items-start">
              <div className="device-container max-w-[350px] mb-12 lg:mb-0 lg:mt-[150px]">
                <img 
                  src="/files/images/List.png" 
                  alt="DEMOCRACY App Screenshot"
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="lg:w-1/12 order-3 lg:order-2"></div>
            
            {/* Right Side - Content */}
            <div className="lg:w-6/12 order-1 lg:order-3 flex items-center">
              <div className="header-content text-center lg:text-left pt-32 lg:pt-0 w-full">
                <div className="header-content-inner text-white">
                  <h1 className="text-5xl lg:text-[50px] font-bold mb-1 italic" style={{ fontFamily: 'helvetica, sans-serif' }}>DEMOCRACY</h1>
                  <div className="mb-1 flex items-baseline justify-center lg:justify-start">
                    <span className="text-[80px] font-black leading-none" style={{ 
                      background: 'linear-gradient(0.5turn, #4494d3, #336daf)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}>1</span>
                    <span className="text-[90px] font-black leading-none" style={{ 
                      background: 'linear-gradient(0.5turn, #4494d3, #336daf)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      marginLeft: '-6px'
                    }}>.</span>
                    <span className="text-[80px] font-black leading-none" style={{ 
                      background: 'linear-gradient(0.5turn, #4494d3, #336daf)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      marginLeft: '-5px'
                    }}>5</span>
                  </div>
                  <h1 className="text-3xl lg:text-[40px] mb-6 italic">Weil deine Stimme zählt!</h1>
                  
                  {/* App Store Badges */}
                  <div className="flex flex-col lg:flex-row gap-4 mb-4 justify-center lg:justify-start">
                    <div>
                      <a 
                        href="https://itunes.apple.com/de/app/democracy/id1341311162"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="badge-link text-white text-[70px] leading-[70px] inline-block no-underline hover:opacity-80"
                      >
                        <i className="icon-app-store-outline"></i>
                      </a>
                    </div>
                    <div className="lg:pl-6">
                      <a 
                        href="https://play.google.com/store/apps/details?id=de.democracydeutschland.app"
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
                        href="https://democracy-app.de"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:opacity-80 underline"
                      >
                        zur Browserversion
                      </a>
                    </div>
                    <div>
                      <a 
                        href="/files/download/democracy-app.aab"
                        target="_blank"
                        className="text-white hover:opacity-80 underline"
                        title="Android App Bundle"
                      >
                        AAB
                      </a>
                      <span className="text-xl inline"> / </span>
                      <a 
                        href="/files/download/democracy-app.apk"
                        target="_blank"
                        className="text-white hover:opacity-80 underline"
                        title="Android Package"
                      >
                        APK (v1.5.10)
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
          <a href="#video-box" className="text-white/20 hover:text-white/40 text-3xl">
            <i className="fa fa-chevron-circle-down"></i>
          </a>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-box" className="bg-white py-16 relative z-10">
        <div className="container mx-auto px-4" style={{ minHeight: 'unset', paddingBottom: '10vh' }}>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div className="lg:w-7/12">
              <h1 className="text-3xl lg:text-4xl inline">Worum geht es bei </h1>
              <h1 className="text-3xl lg:text-4xl font-bold inline">DEMOCRACY </h1>
              <h1 className="text-3xl lg:text-4xl inline">(2:30)?</h1>
            </div>
            <div className="lg:w-5/12 text-right pt-5">
              <Link href="/faq" className="text-[rgb(74,74,74)] text-xl hover:underline">
                Mehr Informationen zu diesem Film
              </Link>
            </div>
          </div>
          
          <div className="relative w-full pt-8" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/DFXcnRdXA7k"
              title="DEMOCRACY Video"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white" style={{ marginTop: '-8vh' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Left - Features */}
            <div className="lg:w-7/12 order-1 pt-24">
              <h1 className="text-3xl lg:text-4xl font-bold mb-8">Alle Funktionen von DEMOCRACY</h1>
              
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={`info-badge flex cursor-pointer min-h-[120px] mt-5 ${
                    activeFeature === index
                      ? 'bg-[rgb(68,148,211)] text-white'
                      : 'bg-[rgb(239,239,244)] hover:bg-[rgb(154,194,228)]'
                  }`}
                >
                  <div className="info-icon w-[60px] md:w-[125px] flex items-center justify-center p-4">
                    <img
                      src={activeFeature === index ? feature.iconActive : feature.icon}
                      alt={`${feature.title} Icon`}
                      className="h-10 md:h-20"
                    />
                  </div>
                  <div className="info-content flex items-center py-4 md:py-8 px-2 md:px-4 text-base md:text-xl leading-snug">
                    <p>
                      <b>{feature.title}</b> {feature.description}
                    </p>
                  </div>
                </div>
              ))}
              <br /><br />
            </div>
            
            {/* Right - Phone Video */}
            <div className="lg:w-5/12 order-2">
              <div className="device-container max-w-none lg:mt-24 lg:mx-auto lg:px-8" id="device-explain">
                <video
                  key={features[activeFeature].video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full max-w-[350px] mx-auto"
                >
                  <source src={features[activeFeature].video} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl lg:text-4xl font-bold py-8 pt-12">Für wen ist DEMOCRACY?</h1>
          
          <div className="flex flex-wrap">
            {/* For Citizens */}
            <div className="w-full lg:w-1/2">
              <div className="rectangleinfo text-left pt-16 pr-3">
                <div className="ri-title">
                  <h3 className="inline-block py-4 px-4 text-white bg-[rgb(68,148,211)] text-2xl font-bold relative z-10">
                    Für Bürger,
                  </h3>
                </div>
                <div className="ri-subtitle ml-4 -mt-4 relative z-0">
                  <p className="inline-block py-5 px-6 bg-[rgb(239,239,244)] text-xl font-bold" style={{ transform: 'rotate(-1.5deg)' }}>
                    die sich mehr Transparenz <br />& Teilhabe wünschen
                  </p>
                </div>
              </div>
              <div className="ri-content mt-8 text-xl pl-7 max-w-[400px]">
                <p>Ob jung oder alt, ob bereits Experte oder bislang uninformiert. DEMOCRACY ist ein politisches Werkzeug für alle, die sich mehr Transparenz und Teilhabe wünschen.</p>
                <Link href="/citizen" className="block text-right pt-4 text-xl hover:underline">
                  Mehr erfahren
                </Link>
              </div>
            </div>
            
            {/* For Politicians */}
            <div className="w-full lg:w-1/2 lg:float-right">
              <div className="rectangleinfo text-left pt-16 pr-3">
                <div className="ri-title">
                  <h3 className="inline-block py-4 px-4 text-white bg-[rgb(68,148,211)] text-2xl font-bold relative z-10">
                    Für Politiker,
                  </h3>
                </div>
                <div className="ri-subtitle ml-4 -mt-4 relative z-0">
                  <p className="inline-block py-5 px-6 bg-[rgb(239,239,244)] text-xl font-bold" style={{ transform: 'rotate(-1.5deg)' }}>
                    die erklären wollen, warum <br />sie wie entscheiden
                  </p>
                </div>
              </div>
              <div className="ri-content mt-8 text-xl pl-7 max-w-[400px]">
                <p>Ob parlamentarischer Neuling oder abgeklärter Abgeordneter. DEMOCRACY bietet Dir die Möglichkeit, Deinen wichtigsten Stakeholdern Gehör zu schenken: den Bürgern.</p>
                <Link href="/politicians" className="block text-right pt-4 text-xl hover:underline">
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </div>

          {/* Press Logos */}
          <h1 className="text-center text-2xl font-normal mt-32 mb-16">bekannt aus</h1>
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 mb-16 lg:mb-24 px-4">
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
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
