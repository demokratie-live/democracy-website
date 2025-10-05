export default function About() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Über DEMOCRACY</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">Unsere Mission</h2>
            <p className="mb-6">
              DEMOCRACY Deutschland e.V. ist ein gemeinnütziger Verein, der sich für mehr 
              Transparenz und Teilhabe in der Politik einsetzt. Mit unserer App ermöglichen 
              wir es Bürgerinnen und Bürgern, sich über politische Vorgänge im Bundestag 
              zu informieren und ihre Meinung zu äußern.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Was wir machen</h2>
            <p className="mb-6">
              Die DEMOCRACY App macht Politik transparent und nachvollziehbar. Du kannst:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Über aktuelle Bundestagsvorgänge abstimmen</li>
              <li className="mb-2">Dein Abstimmungsverhalten mit dem Bundestag vergleichen</li>
              <li className="mb-2">Herausfinden, welche Partei deine Interessen am besten vertritt</li>
              <li className="mb-2">Politiker direkt kontaktieren</li>
              <li className="mb-2">Dich mit anderen Bürgern austauschen</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Unsere Werte</h2>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2"><strong>Transparenz:</strong> Alle Daten stammen aus offiziellen Quellen</li>
              <li className="mb-2"><strong>Unabhängigkeit:</strong> Wir sind gemeinnützig und werbefrei</li>
              <li className="mb-2"><strong>Datenschutz:</strong> Deine Abstimmungen sind anonym</li>
              <li className="mb-2"><strong>Open Source:</strong> Unser Code ist für alle einsehbar</li>
            </ul>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Das Team</h2>
            <p className="mb-6">
              DEMOCRACY wird von einem engagierten Team aus Entwicklern, Designern und 
              Politik-Enthusiasten betrieben. Wir alle arbeiten ehrenamtlich, weil wir 
              an eine bessere Demokratie glauben.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Unterstützer</h2>
            <p className="mb-6">
              DEMOCRACY wird unterstützt durch zahlreiche Spenden und die Arbeit vieler 
              ehrenamtlicher Helfer. Gemeinsam machen wir Politik zugänglicher.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Kontakt</h2>
            <p className="mb-6">
              Du möchtest mehr erfahren oder mitmachen?<br />
              Kontaktiere uns unter: <a href="mailto:contact@democracy-deutschland.de" className="text-blue-600 hover:underline">
                contact@democracy-deutschland.de
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
