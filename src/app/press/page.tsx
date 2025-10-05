export default function Press() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Presse</h1>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Presse-Kit</h2>
            <p className="mb-6">
              Hier finden Sie Materialien für Ihre Berichterstattung über DEMOCRACY.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Logos</h3>
                <p className="mb-4">Download unserer Logos in verschiedenen Formaten</p>
                <a href="/download/DEMOCRACY_Logo.png" className="text-blue-600 hover:underline">
                  Logo herunterladen →
                </a>
              </div>
              
              <div className="border p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Screenshots</h3>
                <p className="mb-4">Screenshots der DEMOCRACY App</p>
                <p className="text-gray-600">Verfügbar auf Anfrage</p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">DEMOCRACY in den Medien</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold mb-2">hr-iNFO</h3>
                <p className="mb-2">Jung macht Politik: Marius Krüger - Per App zum virtuellen Bundestagsabgeordneten</p>
                <a 
                  href="https://www.hr-inforadio.de/podcast/jung-macht-politik/jung-macht-politik-marius-krueger--per-app-zum-virtuellen-bundestagsabgeordneten,podcast-episode-76718.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Zum Beitrag →
                </a>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold mb-2">MDR</h3>
                <p className="mb-2">DEMOCRACY App im MDR</p>
                <a 
                  href="https://www.youtube.com/watch?v=5sbPOUL-5Fs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Zum Beitrag →
                </a>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold mb-2">Deutsche Welle</h3>
                <p className="mb-2">DEMOCRACY App vorgestellt</p>
                <a 
                  href="https://www.youtube.com/watch?v=RkSq_rBpVlA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Zum Beitrag →
                </a>
              </div>
              
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold mb-2">WIRED / GQ</h3>
                <p className="mb-2">Die Bundesregierung sollte Wort halten und unserer Demokratie ein Update verpassen</p>
                <a 
                  href="https://www.gq-magazin.de/auto-technik/article/die-bundesregierung-sollte-wort-halten-und-unserer-demokratie-ein-update-fuer-mehr-beteiligung-verpassen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Zum Artikel →
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Pressekontakt</h2>
            <p className="mb-4">
              Für Presseanfragen wenden Sie sich bitte an:
            </p>
            <p>
              <strong>DEMOCRACY Deutschland e.V.</strong><br />
              E-Mail: <a href="mailto:contact@democracy-deutschland.de" className="text-blue-600 hover:underline">
                contact@democracy-deutschland.de
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
