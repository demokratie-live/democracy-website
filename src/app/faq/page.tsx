export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Häufig gestellte Fragen (FAQ)</h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">Was ist DEMOCRACY?</h2>
            <p>
              DEMOCRACY ist eine gemeinnützige App, die es dir ermöglicht, dich über politische Vorgänge 
              im Bundestag zu informieren und selbst darüber abzustimmen - als wärst du Bundestagsabgeordneter.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-3">Ist DEMOCRACY kostenlos?</h2>
            <p>
              Ja, DEMOCRACY ist vollständig kostenlos und wird von einem gemeinnützigen Verein betrieben.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-3">Wie funktioniert die App?</h2>
            <p>
              1. Du wählst einen Vorgang aus dem Bundestag<br />
              2. Du informierst dich über die Details<br />
              3. Du stimmst selbst ab<br />
              4. Du vergleichst dein Ergebnis mit dem Bundestag und der Community
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-3">Woher kommen die Daten?</h2>
            <p>
              Alle Daten stammen aus offiziellen Quellen des Deutschen Bundestages und werden 
              regelmäßig aktualisiert.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-3">Ist meine Abstimmung geheim?</h2>
            <p>
              Ja, alle Abstimmungen sind anonym. Niemand kann nachvollziehen, wie du abgestimmt hast.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-3">Kann ich DEMOCRACY auch am Computer nutzen?</h2>
            <p>
              Ja, es gibt eine Browserversion der App unter{' '}
              <a href="https://app.democracy-deutschland.de" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:underline">
                app.democracy-deutschland.de
              </a>
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-3">Wie kann ich DEMOCRACY unterstützen?</h2>
            <p>
              Du kannst uns durch Spenden unterstützen, in der Community aktiv werden oder 
              bei der Entwicklung mithelfen. Mehr Infos findest du unter{' '}
              <a href="/donate" className="text-blue-600 hover:underline">Spenden</a> und{' '}
              <a href="/engineering" className="text-blue-600 hover:underline">Programmieren</a>.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-3">Weitere Fragen?</h2>
            <p>
              Kontaktiere uns gerne unter{' '}
              <a href="mailto:contact@democracy-deutschland.de" className="text-blue-600 hover:underline">
                contact@democracy-deutschland.de
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
