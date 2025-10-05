export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-4">DEMOCRACY</h1>
              <p className="text-2xl md:text-3xl mb-2">1.5</p>
              <h2 className="text-3xl md:text-4xl mb-8">Weil deine Stimme zählt!</h2>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a 
                    href="https://apps.apple.com/de/app/democracy-deutschland/id1341311158"
                    className="inline-block px-6 py-3 bg-black rounded-lg hover:bg-gray-800 transition"
                  >
                    App Store
                  </a>
                  <a 
                    href="https://play.google.com/store/apps/details?id=de.democracy"
                    className="inline-block px-6 py-3 bg-black rounded-lg hover:bg-gray-800 transition"
                  >
                    Google Play
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <a 
                    href="https://app.democracy-deutschland.de"
                    className="text-white hover:underline"
                  >
                    zur Browserversion
                  </a>
                  <span className="hidden sm:inline">•</span>
                  <a 
                    href="/download/democracy-app.apk"
                    className="text-white hover:underline"
                  >
                    APK (v1.5.10) laden
                  </a>
                </div>
              </div>
            </div>
            
            {/* Device Image */}
            <div className="flex justify-center">
              <div className="max-w-xs">
                <img 
                  src="/images/List.png" 
                  alt="DEMOCRACY App Screenshot"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <a href="#video" className="text-white opacity-20 hover:opacity-40 transition">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l7 7a1 1 0 01-1.414 1.414L10 5.414 3.707 11.707a1 1 0 01-1.414-1.414l7-7A1 1 0 0110 3z" clipRule="evenodd" transform="rotate(180 10 10)" />
            </svg>
          </a>
        </div>
      </div>

      {/* Video Section */}
      <div id="video" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-2">
              Worum geht es bei <span className="text-blue-600">DEMOCRACY</span> (2:30)?
            </h2>
            <div className="aspect-video mt-8">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/DFXcnRdXA7k" 
                title="DEMOCRACY Erklärvideo"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Alle Funktionen von DEMOCRACY</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img src="/images/group6@3x.t.png" alt="Wählen" className="w-12 h-12" />
                </div>
                <div>
                  <p><strong>Wähle</strong> einen aktuellen, vergangenen oder populären Vorgang des Deutschen Bundestages</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img src="/images/group3@3x.png" alt="Informieren" className="w-12 h-12" />
                </div>
                <div>
                  <p><strong>Informiere</strong> Dich über den Vorgang mithilfe der offiziellen Parlamentsdokumente</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img src="/images/group5@3x.png" alt="Abstimmen" className="w-12 h-12" />
                </div>
                <div>
                  <p><strong>Stimme</strong> selbst über den Vorgang ab, als wärst Du Bundestagsabgeordneter</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img src="/images/group2@3x.png" alt="Vergleichen" className="w-12 h-12" />
                </div>
                <div>
                  <p><strong>Vergleiche</strong> Dein Abstimmungsverhalten mit der Community und dem Bundestag</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img src="/images/group9@3x.png" alt="Analysieren" className="w-12 h-12" />
                </div>
                <div>
                  <p><strong>Analysiere</strong> Deine Übereinstimmung mit dem Bundestag, den Parteien und Kandidaten</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="max-w-xs w-full"
              >
                <source src="/videos/DDW-List_croped.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Target Audience Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Für wen ist DEMOCRACY?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Für Bürger,</h3>
              <p className="text-lg text-gray-600 mb-4">die sich mehr Transparenz & Teilhabe wünschen</p>
              <p className="mb-4">
                Ob jung oder alt, ob bereits Experte oder bislang uninformiert. 
                DEMOCRACY ist ein politisches Werkzeug für alle, die sich mehr 
                Transparenz und Teilhabe wünschen.
              </p>
              <a href="/citizen" className="text-blue-600 hover:underline">Mehr erfahren →</a>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Für Politiker,</h3>
              <p className="text-lg text-gray-600 mb-4">die erklären wollen, warum sie wie entscheiden</p>
              <p className="mb-4">
                Ob parlamentarischer Neuling oder abgeklärter Abgeordneter. 
                DEMOCRACY bietet Dir die Möglichkeit, Deinen wichtigsten 
                Stakeholdern Gehör zu schenken: den Bürgern.
              </p>
              <a href="/politicians" className="text-blue-600 hover:underline">Mehr erfahren →</a>
            </div>
          </div>
        </div>
      </div>

      {/* Press Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">bekannt aus</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a href="https://www.hr-inforadio.de/podcast/jung-macht-politik/jung-macht-politik-marius-krueger--per-app-zum-virtuellen-bundestagsabgeordneten,podcast-episode-76718.html" target="_blank" rel="noopener noreferrer">
              <img src="/images/hrinfo_logo.png" alt="hr-iNFO" className="h-12" />
            </a>
            <a href="https://www.youtube.com/watch?v=5sbPOUL-5Fs" target="_blank" rel="noopener noreferrer">
              <img src="/images/mdr_logo.png" alt="MDR" className="h-12" />
            </a>
            <a href="https://www.youtube.com/watch?v=RkSq_rBpVlA" target="_blank" rel="noopener noreferrer">
              <img src="/images/dw_logo.png" alt="Deutsche Welle" className="h-12" />
            </a>
            <a href="https://www.gq-magazin.de/auto-technik/article/die-bundesregierung-sollte-wort-halten-und-unserer-demokratie-ein-update-fuer-mehr-beteiligung-verpassen" target="_blank" rel="noopener noreferrer">
              <img src="/images/wired_logo.png" alt="WIRED" className="h-12" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
