import './home.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="header-home">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center min-h-screen">
            <div className="background-logo">
              <img src="/images/Logo-Landingpage.png" alt="DEMOCRACY Logo" />
            </div>
            
            <div className="w-full lg:w-6/12 order-2 lg:order-1">
              <div className="header-content">
                <div className="header-content-inner">
                  <h1 id="index-title" className="slide-default">DEMOCRACY</h1>
                  <br id="index-title-year-break" />
                  <p id="index-title-year" className="slide-default">1</p>
                  <p id="index-title-year-period" className="slide-default">.</p>
                  <p id="index-title-year" className="slide-default">5</p>
                  <h1 id="index-headline" className="slide-default">Weil deine Stimme zählt!</h1>
                  
                  <div className="badges">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                      <div className="text-center lg:text-left">
                        <br />
                        <a 
                          className="badge-link icon-app-store-outline" 
                          href="https://apps.apple.com/de/app/democracy-deutschland/id1341311158"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Download on the App Store"
                        />
                      </div>
                      <div className="text-center lg:text-left" id="secondbadge">
                        <br />
                        <a 
                          className="badge-link icon-google-play-outline" 
                          href="https://play.google.com/store/apps/details?id=de.democracy"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Get it on Google Play"
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
                      <div className="text-center lg:text-left">
                        <br />
                        &nbsp;<a className="whitelink" href="https://app.democracy-deutschland.de" target="_blank" rel="noopener noreferrer">
                          zur Browserversion
                        </a>
                      </div>
                      <div className="text-center lg:text-left" id="secondbadge">
                        <br />
                        &nbsp;<a className="whitelink" href="/download/democracy-app.aab" target="_blank" title="Android App Bundle">
                          AAB
                        </a>
                        <p style={{fontSize: '20px', display: 'inline'}}> / </p>
                        <a className="whitelink" href="/download/democracy-app.apk" target="_blank" title="Android Package">
                          APK (v1.5.10)
                        </a> laden
                        <br />
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block lg:w-1/12 order-3"></div>
            
            <div className="w-full lg:w-5/12 order-1 lg:order-4">
              <div className="device-container">
                <img className="translateImg slide-default" src="/images/List.png" alt="DEMOCRACY App" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-icon-container hidden lg:block">
          <a href="#video-box" className="scroll-icon">
            ↓
          </a>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-white" style={{zIndex: 100, position: 'relative'}}>
        <div id="video-box" className="container mx-auto px-4" style={{minHeight: 'unset', paddingBottom: '10vh'}}>
          <div className="video-content">
            <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
              <div className="lg:w-7/12">
                <h1 id="video-title">Worum geht es bei </h1>
                <h1 id="video-title-emphasis">DEMOCRACY </h1>
                <h1 id="video-title">(2:30)?</h1>
              </div>
              <div className="lg:w-5/12 text-left lg:text-right pt-5">
                <a href="#faq" style={{color: 'rgb(74,74,74)', fontSize: '20px'}}>
                  Mehr Informationen zu diesem Film
                </a>
              </div>
            </div>
            <div className="w-full pt-8">
              <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full yt-hd-thumbnail"
                  src="https://www.youtube.com/embed/DFXcnRdXA7k" 
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="DEMOCRACY Erklärvideo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white">
        <div id="about" className="container mx-auto px-4" style={{marginTop: '-8vh'}}>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-7/12 order-1 about-content">
              <h1 className="text-4xl font-bold mb-8">Alle Funktionen von DEMOCRACY</h1>
              
              <div className="info-badge active" data-mp4="/videos/DDW-List_croped.mp4">
                <div className="info-icon">
                  <img className="info-icon-passive hidden" src="/images/group6@3x.png" alt="" />
                  <img className="info-icon-active" src="/images/group6@3x.t.png" alt="" />
                </div>
                <div className="info-content">
                  <b>Wähle</b> einen aktuellen, vergangenen oder populären Vorgang des Deutschen Bundestages
                </div>
              </div>
              
              <div className="info-badge" data-mp4="/videos/DDW-info_croped.mp4">
                <div className="info-icon">
                  <img className="info-icon-passive" src="/images/group3@3x.png" alt="" />
                  <img className="info-icon-active hidden" src="/images/group3@3x.t.png" alt="" />
                </div>
                <div className="info-content">
                  <b>Informiere</b> Dich über den Vorgang mithilfe der offiziellen Parlamentsdokumente
                </div>
              </div>
              
              <div className="info-badge" data-mp4="/videos/DDW-vote_croped.mp4">
                <div className="info-icon">
                  <img className="info-icon-passive" src="/images/group5@3x.png" alt="" />
                  <img className="info-icon-active hidden" src="/images/group5@3x.t.png" alt="" />
                </div>
                <div className="info-content">
                  <b>Stimme</b> selbst über den Vorgang ab, als wärst Du Bundestagsabgeordneter
                </div>
              </div>
              
              <div className="info-badge" data-mp4="/videos/DDW-compare_croped.mp4">
                <div className="info-icon">
                  <img className="info-icon-passive" src="/images/group2@3x.png" alt="" />
                  <img className="info-icon-active hidden" src="/images/group2@3x.t.png" alt="" />
                </div>
                <div className="info-content">
                  <b>Vergleiche</b> Dein Abstimmungsverhalten mit der Community und dem Bundestag
                </div>
              </div>
              
              <div className="info-badge" data-mp4="/videos/DDW-analyse_croped.mp4">
                <div className="info-icon">
                  <img className="info-icon-passive" src="/images/group9@3x.png" alt="" />
                  <img className="info-icon-active hidden" src="/images/group9@3x.t.png" alt="" />
                </div>
                <div className="info-content">
                  <b>Analysiere</b> Deine Übereinstimmung mit dem Bundestag, den Parteien und Kandidaten
                </div>
              </div>
              
              <br />
              <br />
            </div>
            
            <div className="w-full lg:w-5/12 order-2">
              <div className="device-container" id="device-explain">
                <video id="video" autoPlay loop muted playsInline>
                  <source src="/videos/DDW-List_croped.mp4" type="video/mp4" />
                  <source src="/videos/DDW-List_croped.webm" type="video/webm" />
                  Your browser does not support HTML5 video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Target Audience Section */}
      <div className="bg-white">
        <div id="about" className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12" style={{paddingTop: '3vh'}}>
            Für wen ist DEMOCRACY?
          </h1>
          
          <div className="ri-container" id="ri-container-1">
            <div className="rectangleinfo">
              <div className="ri-title">
                <h3 className="ri-title-heading">Für Bürger,</h3>
              </div>
              <div className="ri-subtitle">
                <p className="ri-subtitle-heading">
                  die sich mehr Transparenz <br />& Teilhabe wünschen
                </p>
              </div>
            </div>
            <div className="ri-content">
              <p>
                Ob jung oder alt, ob bereits Experte oder bislang uninformiert. DEMOCRACY ist ein politisches
                Werkzeug für alle, die sich mehr Transparenz und Teilhabe wünschen.
              </p>
              <a className="ri-link" href="#citizen"> Mehr erfahren</a>
            </div>
          </div>
          
          <div className="ri-container" id="ri-container-2">
            <div className="rectangleinfo">
              <div className="ri-title">
                <h3 className="ri-title-heading">Für Politiker,</h3>
              </div>
              <div className="ri-subtitle">
                <p className="ri-subtitle-heading">
                  die erklären wollen, warum <br />sie wie entscheiden
                </p>
              </div>
            </div>
            <div className="ri-content">
              <p>
                Ob parlamentarischer Neuling oder abgeklärter Abgeordneter. DEMOCRACY bietet Dir die Möglichkeit,
                Deinen wichtigsten Stakeholdern Gehör zu schenken: den Bürgern.
              </p>
              <a className="ri-link" href="#politicians"> Mehr erfahren</a>
            </div>
          </div>
          
          <h1 className="press-heading">bekannt aus</h1>
          <div id="press-logos">
            <a 
              href="https://www.hr-inforadio.de/podcast/jung-macht-politik/jung-macht-politik-marius-krueger--per-app-zum-virtuellen-bundestagsabgeordneten,podcast-episode-76718.html" 
              id="hrinfo-logo" 
              style={{paddingTop: '10px'}} 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/hrinfo_logo.png" alt="Logo des hessischen Radiosenders hr-iNFO" />
            </a>
            <a 
              href="https://www.youtube.com/watch?v=5sbPOUL-5Fs" 
              id="mdr-logo" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/mdr_logo.png" alt="Logo des Mitteldeutschen Rundfunks" />
            </a>
            <a 
              href="https://www.youtube.com/watch?v=RkSq_rBpVlA" 
              id="dw-logo" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/dw_logo.png" alt="Logo der Nachrichtenorganisation Deutsche Welle" />
            </a>
            <a 
              href="https://www.gq-magazin.de/auto-technik/article/die-bundesregierung-sollte-wort-halten-und-unserer-demokratie-ein-update-fuer-mehr-beteiligung-verpassen" 
              id="wired-logo" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/wired_logo.png" alt="Logo des Magazins WIRED" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
