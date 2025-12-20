'use client';

import Link from 'next/link';
import { useSetHeaderTheme } from '@/contexts/HeaderContext';

export default function DatenschutzPage() {
  useSetHeaderTheme('light');

  return (
    <div className="bg-white pt-16">
      <div className="container mx-auto px-4 py-8" style={{ textAlign: 'left' }}>
        <h1 className="text-3xl font-bold mb-6">
          <strong>DEMOCRACY App – Datenschutzerklärung</strong>
        </h1>

        <h2 className="text-2xl font-bold mb-4">
          <strong>1. Präambel – Vorwort</strong>
        </h2>
        <p className="mb-4">
          Der gemeinnützige Verein DEMOCRACY Deutschland e.V. treibt mit seiner gleichnamigen App
          DEMOCRACY die Entwicklung einer öffentlichen Beteiligungsinfrastruktur voran, die das
          Funktionieren einer lebendigen Demokratie begünstigen soll. Als Nutzer informiert Sie die
          App DEMOCRACY dafür über die aktuellen Bundestagsabstimmungen und ermöglicht Ihnen eine
          eigene direkte Abstimmung. Aus Sicht des DEMOCRACY Deutschland e.V. sind die dabei
          entstehenden Nutzerdaten keine handelbaren Wirtschaftsgüter, sondern im Sinne des
          Grundgesetzes zu schützen. Die Aufrechterhaltung des Abstimmungsgeheimnis ist insofern
          zentraler Bestandteil der DNA des DEMOCRACY Deutschland e.V. .Um mit DEMOCRACY die
          politische Einflussnahme der BürgerInnen dennoch nachhaltig zu verbessern, benötigen wir –
          der DEMOCRACY Deutschland e.V., Am Klausberge 12, 37075 Göttingen, Betreiber der App
          &quot;DEMOCRACY&quot; – einige Ihrer Daten. Diese Richtlinie erklärt Ihnen insofern,
          welche Informationen wir wie sammeln und verwenden, auch um den gesetzlichen Anforderungen
          nachzukommen.
        </p>
        <p className="mb-8">
          Wir vom DEMOCRACY Deutschland e.V. sind der Überzeugung, dass die Vermeidung (Konzept der
          Datenvermeidung) und der Schutz Ihrer Daten (Konzept des Datenschutzes) langfristig
          wichtig für Ihre Informationelle Selbstbestimmung sind – das heißt: Bei uns entscheidest
          Sie, welche Daten Sie preisgeben. Bitte nehmen Sie sich etwas Zeit für diese
          Datenschutzrichtlinie, bevor Sie unsere Webseite oder App benutzen.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          <strong>2. Verantwortlich im Sinne der Datenschutzgesetze ist der:</strong>
        </h2>
        <p className="mb-2">DEMOCRACY Deutschland e.V.</p>
        <p className="mb-2">Am Klausberge 12</p>
        <p className="mb-4">37075 Göttingen</p>
        <p className="mb-8">
          Sollten Sie Fragen oder Anregungen zum Datenschutz haben, können Sie sich gerne auch per
          E-Mail an uns wenden. Die entsprechende E-Mail Adresse finden Sie im Impressum.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          <strong>3. Gegenstand des Datenschutzes</strong>
        </h2>
        <p className="mb-4">
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Der
          Gegenstand des Datenschutzes sind personenbezogene Daten. Personenbezogene Daten sind
          Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person
          beziehen. Dazu können u.a. Name, Adresse, E-Mail-Adresse, Profil-Bilder, Telefonnummer,
          bestimmte Arten von Serverprotokollen von Browser, IP-Adresse gehören.
        </p>
        <p className="mb-4">
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich.
          Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder
          E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger
          Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation
          per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
          Zugriff durch Dritte ist nicht möglich.
        </p>
        <p className="mb-8">
          Mit der Nutzung der DEMOCRACY-Website sowie der DEMOCRACY App stimmen Sie der
          Datenschutzrichtlinie zu. Andernfalls ist die Nutzung der DEMOCRACY-Dienste und der
          angebotenen Leistungen nicht gestattet.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          <strong>4. Personenbezogene Daten</strong>
        </h2>
        <p className="mb-4">
          Wir empfangen und speichern jegliche Informationen, die Sie uns aktiv übermitteln. Um
          einige der von der Webseite und der App angebotenen Dienste anbieten zu können, müssen wir
          bestimmte personenbezogene Informationen erfassen. Personenbezogene Daten werden von uns
          grundsätzlich ausschließlich im Rahmen der gesetzlichen Erlaubnistatbestände der Art. 6
          Abs. 1 lit. b) bzw. lit c) und lit. f) Datenschutzgrundverordnung („DSGVO") verarbeitet.
          Soweit eine Verarbeitung nach den vorgenannten Erlaubnistatbeständen nicht zulässig wäre,
          DEMOCRACY die personenbezogenen Daten aber trotzdem verarbeiten möchte, so wird vor der
          Verarbeitung vom Betroffenen eine Einwilligung gemäß Art.6 Abs. 1 lit. a) iVm. Art. 7
          DSGVO bzgl. der Verarbeitung eingeholt.
        </p>

        <h4 className="text-lg font-bold mb-4">
          <strong>Speicherung</strong>
        </h4>
        <p className="mb-4">
          Personenbezogene Daten werden von uns nicht länger gespeichert, als für die Bereitstellung
          der Dienste auf der Website und/oder App notwendig. Soweit die Daten zur Erfüllung
          gesetzlicher Pflichten (z.B. gesetzliche Aufbewahrungspflichten nach § 147 AO) aufbewahrt
          werden müssen, bleiben die Daten bis zum Ende der Aufbewahrungspflicht gespeichert. Solche
          Daten werden gesperrt und werden für keine anderweitigen Zwecke genutzt.
        </p>

        <h4 className="text-lg font-bold mb-4">
          <strong>Eingegebene Daten</strong>
        </h4>
        <p className="mb-4">
          Ohne Anmeldung können Sie die DEMOCRACY App nur eingeschränkt nutzen. Für den
          Anmeldeprozess müssen Sie Ihre E-Mail-Adresse und/oder Mobilfunknummer bereitstellen.
          Diese Daten werden von uns abgefragt, damit DEMOCRACY adäquat (d.h. mit identifizierter
          Nutzerbasis) funktionieren kann. Wir benötigen diese und gegebenenfalls auch andere Daten,
          um auf Deine Wünsche, Fragen und Verbesserungsvorschläge reagieren zu können. Mitteilungen
          zu anstehenden Veränderungen oder Verbesserungen der DEMOCRACY-Dienste übermitteln wir
          Ihnen gegebenenfalls unter Verwendung Ihrer E-Mail Adresse oder via Push-Notifications.
        </p>

        <h4 className="text-lg font-bold mb-4">
          <strong>Kumulierte Speicherung der Abstimmungsdaten</strong>
        </h4>
        <p className="mb-4">
          Nach der Registrierung werden Ihre personenbezogenen Daten (Email, Mobilfunknummer, Hash
          der Device ID) in unserer Identitätsdatenbank i.S. eines Urnenbuchs gespeichert; Ihre
          konkreten Abstimmungsentscheidungen (Ja, Enthaltung, Nein) zu bestimmten Papieren werden
          von diesen personenbezogenen Identifikationsdaten strikt getrennt; eine Zusammenführung
          dieser Daten ist auch für uns nicht möglich. Praktisch bedeutet dies, dass eine Quittung
          ihrer Abstimmungsentscheidung lediglich lokal auf Ihrem Gerät verbleibt, während Ihre
          Stimme serverseitig nur akkumuliert gespeichert wird, indem in der prozedurspezifischen
          Voting-Tabelle (je nach Stimmverhalten) eine Stimme (in der Ja-Nein- bzw. Enthaltungsspalte)
          auf das vorherige Ergebnis addiert und in der prozedurspezifischen Voted-Tabelle ihre
          User-ID hinterlegt wird. Das vollständige Konzept zur Wahrung des Wahlgeheimnis können Sie
          hier einsehen:{' '}
          <a
            href="https://github.com/demokratie-live/democracy-development/wiki/Stimmanonymität"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4494d3] hover:underline"
          >
            https://github.com/demokratie-live/democracy-development/wiki/Stimmanonymität
          </a>
          .
        </p>
        <p className="mb-4">
          Sie können die DEMOCRACY App ferner off- wie online nutzen, wobei ein Großteil der
          Funktionalität nur im Online-Modus möglich ist.
        </p>

        <h4 className="text-lg font-bold mb-4">
          <strong>Qualitätssicherung und Weiterentwicklung</strong>
        </h4>
        <p className="mb-4">
          Zur Qualitätssicherung und anforderungsgerechten Weiterentwicklung der DEMOCRACY App
          werden anonymisierte und kumulierte statistische Daten zum Nutzerverhalten (Anzahl der
          Upvotes, Abstimmungen, Zustimmungen, Enthaltungen, Ablehnungen) erfasst und statistisch
          ausgewertet. Ein Rückschluss von diesen anonymen Daten auf natürliche Personen ist für uns
          nicht möglich.
        </p>

        <h4 className="text-lg font-bold mb-4">
          <strong>Server Log Files</strong>
        </h4>
        <p className="mb-4">
          Wenn Sie die DEMOCRACY-Website nutzen, speichert der Provider der Seite/n automatisch
          Informationen in so genannten Server-Log Files, die Ihr Browser automatisch an uns
          übermittelt. Dies sind:
        </p>
        <ul className="list-disc pl-8 mb-8 space-y-2">
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
        </ul>
        <p className="mb-8">
          Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten
          mit anderen Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten
          nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für eine rechtswidrige Nutzung
          bekannt werden.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          <strong>5. Newsletter</strong>
        </h2>
        <p className="mb-8">
          Nach Registrierung und Anmeldung bei DEMOCRACY können wir Ihnen von Zeit zu Zeit auch
          Informationen über unsere Dienstleistungen, u.a. auch &quot;klassisch&quot; per E-Mail
          senden. Dies werden wir jedoch nur tun, wenn Sie hierzu ausdrücklich zustimmen oder Sie
          ein registrierter Nutzer von DEMOCRACY sind und wir Sie über ähnliche Produkte,
          Dienstleistungen oder Services informieren, wie diejenigen, die Sie zuvor bei uns bezogen
          oder verwendet haben. In jedem Fall gilt jedoch, dass Sie E-Mails einfach über die
          &quot;Abbestellen-&quot; bzw. &quot;Unsubscribe-&quot; Funktion bzw. Button am Ende jeder
          E-Mail abbestellen können, wenn Sie keine E-Mails mehr von uns bekommen möchten.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          <strong>6. Kontakt-/ Mithelfen-Formular</strong>
        </h2>
        <p className="mb-8">
          Wenn Sie uns per Kontakt-/ Mithelfenformular Anfragen zukommen lassen, werden Ihre Angaben
          aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
          Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese
          Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          <strong>7. Einsatz von „Cookies"</strong>
        </h2>
        <p className="mb-4">
          Die DEMOCRACY-Dienste verwenden „Cookies", um die Benutzerfreundlichkeit (z.B. beim
          Anmelden) zu erhöhen. Cookies sind Textdateien, die vom Webserver an Ihren Browser oder
          die DEMOCRACY App gesandt und dort für einen späteren Abruf gespeichert werden, u.a. um
          ein erneutes Einloggen zu Vereinfachen. In unseren eigenen Cookies werden keinerlei
          personenbezogene Daten gespeichert. Sie können die Verwendung von „Cookies" generell
          verhindern, wenn Sie in Ihrem Browser die Speicherung von Cookies untersagen. Bitte
          beachten Sie, dass die Funktionsfähigkeit und der Umfang unseres Angebots dadurch
          eingeschränkt sein kann.
        </p>

        <h3 className="text-xl font-bold mb-4">
          <strong>Verwendung von Cookies</strong>
        </h3>
        <p className="mb-4">
          Sie können Cookies und Zähl-Pixel über Ihre Browser-Einstellungen und andere Werkzeuge
          beobachten. Wenn Sie die Benutzung unserer Services mit Ihrem Computer oder mobilen Gerät
          fortsetzt, stimmen Sie dadurch unserer Verwendung von Cookies und Zähl-Pixeln in
          Übereinstimmung mit dieser Datenschutzerklärung zu. Wir verwenden folgende Arten von
          Cookies:
        </p>
        <ul className="list-disc pl-8 mb-4 space-y-2">
          <li>Notwendige Cookies</li>
          <li>Analytische Cookies</li>
          <li>Funktionale Cookies</li>
        </ul>
        <p className="mb-4">
          Notwendige Cookies werden von uns benötigt, damit unsere Website oder App funktionieren
          kann. Das sind z.B. Cookies die notwendig sind, um Sie in sichere Bereiche unserer Website
          oder App einzuloggen.
        </p>
        <p className="mb-4">
          Analytische Cookies helfen uns dabei, zu analysieren wie viele Besucher unsere Website
          oder App hat und welche Seiten oder Bereiche von den Nutzern aufgerufen werden.
        </p>
        <p className="mb-8">
          Funktionale Cookies werden verwendet, um Sie bei ihrem nächsten Besuch auf der Website
          bzw. Nutzung der App wiederzuerkennen. Damit wird es uns ermöglicht, bestimmte
          Einstellungen (z.B. Spracheinstellungen) zu speichern.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          <strong>8. Nutzung von GoogleAnalytics</strong>
        </h2>
        <p className="mb-4">
          Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc.
          („Google"). Google Analytics verwendet sog. „Cookies", Textdateien, die auf deinem
          Computer oder Mobiltelefon gespeichert werden und die eine Analyse deiner Benutzung von
          DEMOCRACY ermöglichen. Die durch den Cookie erzeugten Informationen über deine Benutzung
          von DEMOCRACY (einschließlich deiner verkürzten IP-Adresse) werden in der Regel an einen
          Server von Google in den USA übertragen und dort gespeichert. Google wird diese
          Informationen benutzen, um deine Nutzung von DEMOCRACY auszuwerten, um Reports über die
          Aktivitäten zusammenzustellen und um weitere mit deiner Nutzung und deiner Internetnutzung
          verbundene Dienstleistungen zu erbringen.
        </p>
        <p className="mb-4">
          Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies
          gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten.
        </p>
        <p className="mb-4">
          Du kannst die Speicherung der Cookies durch eine entsprechende Einstellung deiner
          Browser-Software verhindern; wir weisen dich jedoch darauf hin, dass du in diesem Fall
          gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich wirst nutzen
          können.
        </p>
        <p className="mb-4">
          Du kannst darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung
          von DEMOCRACY bezogenen Daten (inkl. deiner IP-Adresse) an Google sowie die Verarbeitung
          dieser Daten durch Google verhindern, indem du das unter dem folgenden{' '}
          <a
            href="http://tools.google.com/dlpage/gaoptout?hl=de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4494d3] hover:underline"
          >
            Link
          </a>{' '}
          verfügbare Browser-Plugin herunterlädst und installierst.
        </p>
        <p className="mb-8">
          Durch die Nutzung von DEMOCRACY erklärst du dich mit der Verarbeitung der über dich
          erhobenen Daten durch Google in der zuvor beschriebenen Art und zu dem zuvor benannten
          Zweck einverstanden.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          <strong>9. SSL-Verschlüsselung</strong>
        </h2>
        <p className="mb-4">
          Die DEMOCRACY-Dienste nutzen aus Gründen der Sicherheit und zum Schutz der Übertragung
          vertraulicher Inhalte, wie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber
          senden, eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass
          die Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und
          an dem Schloss-Symbol in Ihrer Browserzeile.
        </p>
        <p className="mb-8">
          Wenn die SSL-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln,
          nur unter hohem Aufwand von Dritten mitgelesen werden.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          <strong>10. Recht auf Auskunft, Berichtigung, Löschung und Beschwerde</strong>
        </h2>
        <p className="mb-4">
          Wenn Sie Ihren Account löschen, werden alle personenbezogenen Daten, mit Ausnahme ihrer
          nicht zurückverfolgbaren anonymisierten Abstimmungsdaten, von unserem Server gelöscht.
          Soweit Daten aus gesetzlichen Gründen aufbewahrt werden müssen, werden diese gesperrt. Die
          Daten stehen weiteren Verwendungs-Schritten sogleich nicht mehr zur Verfügung.
        </p>
        <p className="mb-4">
          Sie sind berechtigt, der Verwendung Ihrer personenbezogenen Daten zu Werbezwecken
          jederzeit zu widersprechen. Wenn Sie sich entscheiden, Ihre Einwilligung in diese
          Datenschutzbestimmung zu widerrufen, so können Sie ein schriftliches Ansuchen an DEMOCRACY
          Deutschland e.V. richten. Die Anschrift finden sie im Impressum. Mit dem Widerruf sind wir
          allerdings nicht mehr in der Lage, Ihnen den Zugriff auf alle DEMOCRACY-Dienste zu
          ermöglichen.
        </p>
        <p className="mb-4">
          Sie können eine Kopie der personenbezogenen Daten, die bei uns über Sie gespeichert sind,
          verlangen und die Herkunft und etwaige Empfänger hiervon sowie den Zweck etwaiger
          erfolgter Datenbearbeitung von uns erfahren. Für weitere Informationen wenden Sie sich
          bitte an uns. Die Anschrift finden Sie im Impressum. Möglicherweise werden Sie
          aufgefordert, weitere Nachweise bezüglich Ihrer Identität vorzulegen (z. B. Kopie der
          letzten Mobilfunkrechnung), bevor Sie eine Antwort erhalten, damit Ihre Identität
          überprüft werden kann.
        </p>
        <p className="mb-4">
          Wenn Sie uns personenbezogene Daten überlassen haben, können Sie diese jederzeit
          berichtigen, sperren oder löschen lassen. Daten für etwaige Abrechnungs- und
          buchhalterische Zwecke sind von einer Kündigung beziehungsweise von einer Löschung nicht
          berührt. Wende Sie sich dazu bitte per E-Mail oder per Post an uns. Die Anschrift finden
          Sie im Impressum.
        </p>
        <p className="mb-4">
          Werden Ihre personenbezogenen Daten im Rahmen einer Interessenabwägung nach Art. 6 Abs. 1
          lit. f) DSGVO verarbeitet, so steht Ihnen ebenfalls ein Widerspruchsrecht gegen die
          Verarbeitung zu. In diesem Fall können wir Ihre personenbezogenen Daten trotz Ihres
          Widerspruchs in solchen Fällen weiterhin verarbeiten, wenn wir nachweisen können, dass die
          Verarbeitung der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen dient,
          oder wir zwingend schutzwürdige Gründe für die Verarbeitung anführen können, die Ihren
          Interessen, Rechten und Freiheiten überwiegen.
        </p>

        <h4 className="text-lg font-bold mb-4">
          <strong>Datenformat</strong>
        </h4>
        <p className="mb-4">
          Sie sind berechtigt, Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in
          einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten und Sie haben das
          Recht, diese Daten einem anderen Verantwortlichen zu übermitteln, sofern die Verarbeitung
          Ihrer personenbezogenen Daten auf einer Einwilligung gemäß der Art. 6 Abs. 1 lit. a) DSGVO
          oder auf einem Vertrag gem. Art. 6 Abs. 1 lit. b) DSGVO beruht.
        </p>
        <p className="mb-4">
          Auch können Sie verlangen, dass wir Ihre Daten bei uns an einen anderen Verantwortlichen
          übermitteln.
        </p>
        <p className="mb-4">
          Bitte wenden Sie sich diesbezüglich an die im Impressum angegebene Adresse:
        </p>

        <h4 className="text-lg font-bold mb-4">
          <strong>Beschwerde</strong>
        </h4>
        <p className="mb-8">
          Wenn Sie der Ansicht sein sollten, dass die Verarbeitung Ihrer personenbezogenen Daten
          durch uns gegen Datenschutzgesetze verstößt, können Sie sich mit Bedenken auch an die
          zuständige Datenschutzaufsichtsbehörde wenden.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          <strong>11. Änderung dieser Datenschutzerklärung</strong>
        </h2>
        <p className="mb-8">
          Wir behalten es uns vor, diese Datenschutzerklärung notwendigen Änderungen zu unterziehen.
          Die aktuelle Fassung der Datenschutzerklärung kannst Du stets unter{' '}
          <Link href="/datenschutz" className="text-[#4494d3] hover:underline">
            https://www.democracy-deutschland.de/#!datenschutz
          </Link>{' '}
          abrufen. Wir werden Sie hierüber informieren.
        </p>
      </div>
    </div>
  );
}
