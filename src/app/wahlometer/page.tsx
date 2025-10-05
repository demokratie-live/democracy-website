export default function Wahlometer() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Wahl-O-Meter</h1>
          <h2 className="text-3xl mb-8">Dein faktenbasierter Wahlhelfer</h2>
          
          <p className="text-xl mb-12">
            Das Wahl-O-Meter ist eine Funktion der DEMOCRACY App, die dir hilft, 
            die richtige Wahlentscheidung zu treffen - basierend auf echten Abstimmungen im Bundestag.
          </p>
          
          <div className="mb-12">
            <img 
              src="/images/WahlOMeter.png" 
              alt="Wahl-O-Meter Screenshot" 
              className="mx-auto max-w-sm"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
            <div>
              <h3 className="text-2xl font-bold mb-3">1. Wählen</h3>
              <p>
                Wähle Themen aus, die dir wichtig sind, oder nutze vorgefertigte Themenpakete.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">2. Abstimmen</h3>
              <p>
                Stimme über echte Bundestagsvorgänge ab - genau wie die Abgeordneten es tun.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">3. Vergleichen</h3>
              <p>
                Erhalte eine Übereinstimmungsanalyse mit Parteien und Kandidaten basierend auf Fakten.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center mb-12">
            <a 
              href="https://apps.apple.com/de/app/democracy-deutschland/id1341311158"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg"
            >
              App Store
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=de.democracy"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg"
            >
              Google Play
            </a>
          </div>
          
          <h2 className="text-3xl font-bold mb-6">Warum Wahl-O-Meter?</h2>
          <div className="text-left space-y-4">
            <p>
              <strong>Faktenbasiert:</strong> Basierend auf echten Abstimmungen, nicht auf Wahlversprechen.
            </p>
            <p>
              <strong>Transparent:</strong> Du siehst genau, wie Parteien und Kandidaten abgestimmt haben.
            </p>
            <p>
              <strong>Individuell:</strong> Du wählst selbst aus, welche Themen dir wichtig sind.
            </p>
            <p>
              <strong>Unabhängig:</strong> Gemeinnützig und ohne kommerzielle Interessen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
