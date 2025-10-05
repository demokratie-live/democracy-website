export default function Donate() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Unterstütze DEMOCRACY</h1>
          
          <div className="text-center mb-12">
            <p className="text-xl mb-6">
              DEMOCRACY ist ein gemeinnütziges Projekt. Wir finanzieren uns ausschließlich 
              durch Spenden und arbeiten alle ehrenamtlich.
            </p>
            <p className="text-lg text-gray-600">
              Mit deiner Spende hilfst du uns, die App weiterzuentwickeln und mehr Menschen 
              Zugang zu politischer Teilhabe zu geben.
            </p>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Bankverbindung</h2>
            <div className="space-y-3 text-center">
              <p><strong>Kontoinhaber:</strong> DEMOCRACY Deutschland e.V.</p>
              <p><strong>IBAN:</strong> DE98 1001 0010 0847 2931 01</p>
              <p><strong>BIC:</strong> PBNKDEFF</p>
              <p><strong>Bank:</strong> Postbank</p>
            </div>
            
            <div className="mt-8 p-6 bg-white rounded-lg">
              <p className="text-center text-sm text-gray-600">
                DEMOCRACY Deutschland e.V. ist als gemeinnützig anerkannt. 
                Spenden sind steuerlich absetzbar. Eine Spendenbescheinigung wird 
                automatisch zum Jahresende verschickt.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 border rounded-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Einmalig spenden</h3>
              <p>Unterstütze uns mit einer einmaligen Spende in beliebiger Höhe.</p>
            </div>
            
            <div className="text-center p-6 border rounded-lg">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-3">Dauerspende</h3>
              <p>Werde Fördermitglied mit einem monatlichen Beitrag.</p>
            </div>
            
            <div className="text-center p-6 border rounded-lg">
              <div className="text-4xl mb-4">👨‍💻</div>
              <h3 className="text-xl font-bold mb-3">Mithilfe</h3>
              <p>Hilf uns bei der Entwicklung oder im Marketing.</p>
            </div>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Wofür werden die Spenden verwendet?</h2>
            <ul className="space-y-3">
              <li>✓ Entwicklung und Wartung der App</li>
              <li>✓ Server- und Infrastrukturkosten</li>
              <li>✓ Datenaufbereitung und -aktualisierung</li>
              <li>✓ Öffentlichkeitsarbeit und Marketing</li>
              <li>✓ Rechtliche Absicherung</li>
            </ul>
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Transparenz</h2>
            <p className="mb-6">
              Wir veröffentlichen regelmäßig unsere Jahresabschlüsse und Tätigkeitsberichte.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/download/JA_2023_DEMOCRACY.pdf" target="_blank" className="text-blue-600 hover:underline">
                Jahresabschluss 2023
              </a>
              <a href="/download/JA_2022_DEMOCRACY.pdf" target="_blank" className="text-blue-600 hover:underline">
                Jahresabschluss 2022
              </a>
              <a href="/download/JA_2021_DEMOCRACY.pdf" target="_blank" className="text-blue-600 hover:underline">
                Jahresabschluss 2021
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
