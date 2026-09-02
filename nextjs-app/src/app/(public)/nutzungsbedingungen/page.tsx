'use client';

import Link from 'next/link';
import { useSetHeaderTheme } from '@/contexts/HeaderContext';

export default function NutzungsbedingungenPage() {
  useSetHeaderTheme('light');

  return (
    <div className="bg-white pt-16">
      <div className="container mx-auto px-4 py-8" style={{ textAlign: 'left' }}>
        <h2 className="text-2xl font-bold mb-4">
          <strong>Nutzungsbedingungen</strong>
        </h2>

        <p className="mb-4">
          Wir, der DEMOCRACY Deutschland e.V., Am Klausberge 12, 37075 Göttingen, Deutschland (im
          Folgenden auch &bdquo;wir&ldquo;/&bdquo;uns&ldquo;), haben die Applikation DEMOCRACY
          (nachfolgend &bdquo;DEMOCRACY&ldquo; oder &bdquo;App&ldquo;) entwickelt, die unter
          www.democracy-deutschland.de und weiteren Domains heruntergeladen oder online genutzt
          werden kann.
        </p>

        <p className="mb-8">
          Die App DEMOCRACY ermöglicht den Nutzern, vergangene, aktuelle und zukünftige Abstimmungen
          des Deutschen Bundestages zu beobachten und sich anhand der offiziellen
          Parlamentsinformationen über Anträge und Gesetzgebungsverfahren einschließlich der
          Abstimmungsergebnisse zu informieren. Registrierte Nutzer können zusätzlich als virtuelle
          Bundestagsabgeordnete selbst über die Vorgänge abstimmen. Mit der Funktion Wahl-⦻-Meter
          kann der registrierte Nutzer sein individuelles Abstimmungsverhalten mit den offiziellen
          Resultaten des Bundestages vergleichen.
        </p>

        <h4 className="text-lg font-bold mb-4">
          <strong>1. Geltungsbereich</strong>
        </h4>
        <ol className="list-[lower-alpha] pl-8 mb-8 space-y-4">
          <li>
            Diese allgemeinen Nutzungsbedingungen gelten für die Nutzung der Funktionen, die in der
            App registrierten Nutzern zur Verfügung stehen; darin inbegriffen sind insbesondere die
            Abstimmungsfunktion und die Funktion Wahl-⦻-Meter.
          </li>
          <li>
            Für bestimmte Features oder Nutzungsmöglichkeiten innerhalb von DEMOCRACY können
            zusätzliche Nutzungsbedingungen vereinbart werden. Werden Leistungen oder Dienste von
            Kooperationspartnern oder Dritten erbracht, können zusätzlich Allgemeine
            Geschäftsbedingungen der Partner/Dritten gelten. Die Nutzer werden vor Inanspruchnahme
            solcher gesondert Leistungen darauf hingewiesen.
          </li>
          <li>
            Abweichende allgemeine Geschäftsbedingungen werden nicht anerkannt, es sei denn, wir
            stimmen ihrer Geltung ausdrücklich schriftlich zu.
          </li>
        </ol>

        <h4 className="text-lg font-bold mb-4">
          <strong>2. Vertragsgegenstand</strong>
        </h4>
        <ol className="list-[lower-alpha] pl-8 mb-8 space-y-4">
          <li>
            Gegenstand des Vertrages ist die Bereitstellung der DEMOCRACY Applikation. Wir bieten
            mit DEMOCRACY eine Applikation, welche auf Grundlage der offiziellen
            Parlamentsinformationen das selbstständige und qualitative Beobachten des Deutschen
            Bundestags ermöglicht. Dafür stellen wir die technischen Voraussetzungen in Form der
            Applikationen sowie der dazugehörigen Serverinfrastruktur bereit. Dadurch hat jeder
            Nutzer die Möglichkeit, vergangene, aktuelle und zukünftige Abstimmungen des Deutschen
            Bundestages zu beobachten und sich über Anträge und Gesetzgebungsverfahren
            einschließlich der Abstimmungsergebnisse zu informieren.
          </li>
          <li>
            Jeder nach Ziff. 3 verifizierte Nutzer kann darüber hinaus als virtueller
            Bundestagsabgeordneter anonym Gesetzgebungs- und Antragsverfahren des Deutschen
            Bundestages bewerten, mit den drei Antwortmöglichkeiten &bdquo;stimme zu&ldquo;,
            &bdquo;enthalte mich&ldquo; oder &bdquo;lehne ab&ldquo;.
            <br />
            Die App-Funktion &bdquo;Wahl-⦻-Meter&ldquo; stellt eine lokale Auswertungsmöglichkeit
            zur Verfügung, die dem Nutzer für den parlamentarischen Echtbetrieb zeigt, mit welcher
            (Bundestags-) Partei er wie stark übereinstimmt.
            <br />
            Für die Teilnahme an Abstimmungen und die Nutzung des Wahl-⦻-Meters muss der Nutzer die
            Speicherung einer lokalen Kopie seiner Abstimmungsergebnisse zulassen, da wir diese
            Daten entsprechend unserer Datenschutzbestimmung (vgl. 10.) serverseitig nicht
            vorhalten.
          </li>
          <li>Die Bereitstellung der Dienste erfolgt unentgeltlich.</li>
        </ol>

        <h4 className="text-lg font-bold mb-4">
          <strong>3. Vertragsschluss/Registrierung</strong>
        </h4>
        <ol className="list-[lower-alpha] pl-8 mb-8 space-y-4">
          <li>Nutzer von DEMOCRACY müssen das 7. Lebensjahr vollendet haben.</li>
          <li>
            Beim ersten erfolgreichen Login legt DEMOCRACY basierend auf der verschlüsselten
            Handy-Identifikationsnummer (Geräte-ID) eine Nutzeridentität an. Diese wird in einem
            Token verschlüsselt auf dem Mobiltelefon hinterlegt.
          </li>
          <li>
            DEMOCRACY kann als mobile App für unterschiedliche Endgeräte in verschiedenen App-Stores
            heruntergeladen werden. Für die Teilnahme an Abstimmungen und die Nutzung des
            Wahl-⦻-Meters ist eine Registrierung notwendig.
          </li>
          <li>
            Nach Installation der App kann jeder Nutzer eine Anfrage auf Registrierung stellen.
            Durch diese Anfrage auf Registrierung gibt der Nutzer ein Angebot auf Abschluss des
            Nutzungsvertrages ab.
          </li>
          <li>
            Die Registrierung erfolgt in der App unter Angabe der notwendigen persönlichen Daten).
            Diese Registrierung erfordert die Angabe einer deutschen Handynummer. DEMOCRACY
            Deutschland e.V. übermittelt diese Handynummer zusammen mit einem generierten
            Verifikationsschlüssel daraufhin an den SMS-Service-Provider SMSFlatrate
            (smsflatrate.net, Kloppe Media, Ansbacher Str. 85, 91541 Rothenburg), der den Nutzer per
            SMS über seinen Verifikationsschlüssel unterrichtet. Die Handynummer und die Device ID
            werden verschlüsselt in einer Datenbank des Vereins abgelegt; eine weitere Verwendung
            der Handynummer und Device ID ist insofern ausgeschlossen.
          </li>
          <li>
            Das Angebot des Nutzers wird durch eine erfolgreiche &quot;Registrierung&quot;
            angenommen.
          </li>
          <li>
            Es ist technisch für uns nicht möglich, die angegebene Identität eines registrierten
            Nutzers auf ihre Richtigkeit zu überprüfen. Wir übernehmen aus diesem Grund keine
            Gewährleistung für die korrekte Identität jedes einzelnen Nutzers.
          </li>
        </ol>

        <h4 className="text-lg font-bold mb-4">
          <strong>4. Pflichten der Nutzer</strong>
        </h4>
        <ol className="list-[lower-alpha] pl-8 mb-8 space-y-4">
          <li>
            Der Nutzer hat den Verein unverzüglich über vermuteten Missbrauch seiner Anmeldedaten
            per E-Mail unter der E-Mail-Adresse contact@democracy-deutschland.de zu informieren.
          </li>
          <li>
            Angriffe auf die Funktionsfähigkeit von DEMOCRACY sind verboten. Hierzu zählen
            beispielsweise Hacking-Versuche, Brute-Force-Attacken und die Verwendung von
            Spionage-Software, Viren und Würmern. Bei Angriffen eines Nutzers auf den stabilen
            Betrieb von DEMOCRACY kann der Verein den Nutzer verwarnen, vorübergehend sperren oder
            in besonders schweren Fällen vollständig von der Nutzung von DEMOCRACY ausschließen.
          </li>
          <li>
            Zur Einpflege technischer Verbesserungen, Beseitigung von Fehlern und Störungen etc.
            kann eine vorübergehende Sperrung der DEMOCRACY-Dienste notwendig werden.
          </li>
        </ol>

        <h4 className="text-lg font-bold mb-4">
          <strong>5. Pflichten von DEMOCRACY e.V.</strong>
        </h4>
        <p className="mb-8">
          Wir bemühen uns um eine durchgehende Verfügbarkeit und fehlerfreie Funktionalität der
          DEMOCRACY-Dienste. Der Nutzer erkennt jedoch an, dass die Verfügbarkeit durch äußere
          Einflüsse (etwa Störungen der Fernmeldenetze, Verfügbarkeit der Originaldokumente des
          Bundestags) beeinträchtigt werden kann, sodass kein Anspruch auf ständige
          Zugriffsmöglichkeit besteht. Darüber hinaus behalten wir uns eine zeitliche und/oder
          umfängliche Zugriffsbeschränkung vor. Insbesondere die Einpflege technischer
          Verbesserungen, Beseitigung von Fehlern und Störungen können eine vorübergehende Sperrung
          der DEMOCRACY-Dienste erfordern.
        </p>

        <h4 className="text-lg font-bold mb-4">
          <strong>6. Haftungsbeschränkung</strong>
        </h4>
        <ol className="list-[lower-alpha] pl-8 mb-8 space-y-4">
          <li>
            Der Verein haftet unbeschränkt nach den gesetzlichen Bestimmungen: für Schäden, die aus
            der Verletzung von Leben, Körper oder Gesundheit entstehen; bei Vorsatz; bei grober
            Fahrlässigkeit; und gemäß dem Produkthaftungsgesetz.
          </li>
          <li>
            Darüber hinaus haftet er für leichte Fahrlässigkeit nur im Falle der Verletzung einer
            sich aus dieser Vereinbarung ergebenden wesentlichen Pflicht. Dies sind Pflichten, die
            für die Erfüllung der Vereinbarung erforderlich sind und deren Verletzung den Zweck der
            Vereinbarung gefährden würde. In diesen Fällen ist die Haftung auf typische und
            vorhersehbare Schäden beschränkt; in anderen Fällen besteht keine Haftung für leichte
            Fahrlässigkeit.
          </li>
          <li>
            Der Verein haftet nicht für einen Datenverlust des Nutzers. Auch haften wir nicht dafür,
            wenn Angaben und Informationen, welche der Nutzer selbst Dritten zugänglich gemacht hat,
            von diesen missbräuchlich genutzt werden.
          </li>
          <li>
            Außerhalb seines Herrschaftsbereichs trägt der Verein nicht die Gefahr des
            Datenverlustes auf dem Übertragungsweg. Der Gefahrenübergang erfolgt mit Bereitstellung
            der Daten zum Abruf auf dem Server. Zudem übernimmt er außerhalb seines
            Herrschaftsbereichs keine Haftung für die Datensicherheit.
          </li>
        </ol>

        <h4 className="text-lg font-bold mb-4">
          <strong>7. Haftungsfreistellung</strong>
        </h4>
        <ol className="list-[lower-alpha] pl-8 mb-8 space-y-4">
          <li>
            Der Nutzer stellt den Verein von sämtlichen Ansprüchen Dritter, die gegen den Verein
            aufgrund einer Rechtsverletzung durch den Nutzer erhoben werden sollten, frei. Hierzu
            gehören auch Ansprüche von Behörden.
          </li>
          <li>
            Die Freistellung beinhaltet auch die Rechtsverfolgung/-verteidigung durch den Verein
            bzw. umfasst den Ersatz der dem Verein durch die notwendige
            Rechtsverfolgung/-verteidigung entstehenden bzw. entstandenen Kosten, soweit diese nicht
            von Dritten zu erstatten sind. Alle weitergehenden Rechte sowie Schadenersatzansprüche
            des Vereins bleiben hiervon unberührt.
          </li>
        </ol>

        <h4 className="text-lg font-bold mb-4">
          <strong>8. Laufzeit und Ende des Vertrags</strong>
        </h4>
        <ol className="list-[lower-alpha] pl-8 mb-8 space-y-4">
          <li>Der Nutzungsvertrag wird auf unbestimmte Zeit geschlossen.</li>
          <li>
            Der Nutzer kann den Vertrag jederzeit ohne Einhaltung einer Frist kündigen, indem er
            eine E-Mail mit dem Hinweis &bdquo;Delete my Account&ldquo; an die Adresse{' '}
            <a
              href="mailto:contact@democracy-deutschland.de"
              className="text-[#4494d3] hover:underline"
            >
              contact@democracy-deutschland.de
            </a>{' '}
            sendet und dadurch den Auftrag zur Löschung seines Accounts gibt.
          </li>
          <li>
            Der Verein kann den Nutzungsvertrag mit einer Frist von zwei 2 Wochen schriftlich
            (E-Mail ist ausreichend) kündigen.
          </li>
          <li>
            Nach der Kündigung werden alle personenbezogenen Daten, mit Ausnahme der nicht
            zurückverfolgbaren anonymisierten Abstimmungsdaten, von unserem Server gelöscht.
          </li>
        </ol>

        <h4 className="text-lg font-bold mb-4">
          <strong>9. Datenschutz</strong>
        </h4>
        <p className="mb-8">
          Wir beachten die gesetzlichen Datenschutzbestimmungen. Daten der Nutzer werden
          vertraulich behandelt. Eine Weitergabe an Dritte erfolgt nur, soweit dies die gesetzlichen
          Datenschutzbestimmungen gestatten oder der Nutzer hierin einwilligt. Es gilt die folgende
          Datenschutzerklärung (
          <Link href="/datenschutz" className="text-[#4494d3] hover:underline">
            https://www.democracy-deutschland.de/#!datenschutz
          </Link>
          ).
        </p>

        <h4 className="text-lg font-bold mb-4">
          <strong>10. Schlussbestimmungen und Änderungen der Nutzungsbedingungen</strong>
        </h4>
        <ol className="list-[lower-alpha] pl-8 mb-8 space-y-4">
          <li>
            Es gilt das Recht der Bundesrepublik Deutschland. Diese Rechtswahl gilt gegenüber
            Verbrauchern jedoch nur insoweit, als dass damit nicht der gewährte Schutz durch
            zwingende Bestimmungen des Rechts des Staates, in dem der Verbraucher seinen
            gewöhnlichen Aufenthalt hat, entzogen wird. Für den Vertragsschluss steht ausschließlich
            die deutsche Sprache zur Verfügung.
          </li>
          <li>
            Hat der Nutzer keinen allgemeinen Gerichtsstand in Deutschland oder in einem anderen
            EU-Mitgliedsstaat, hat sich nach Wirksamwerden dieser Nutzungsbedingungen sein Wohnsitz
            ins Ausland außerhalb der EU verlegt oder ist sein gewöhnlicher Aufenthaltsort zum
            Zeitpunkt der Klageerhebung nicht bekannt, so ist ausschließlicher Gerichtsstand für
            sämtliche Streitigkeiten aus diesem Vertrag der Sitz des Vereins (Göttingen).
          </li>
          <li>
            Sollten einzelne Bestimmungen dieser Nutzungsbedingungen unwirksam oder nichtig sein
            oder werden, so wird hierdurch die Wirksamkeit der Nutzungsbedingungen im Übrigen nicht
            berührt.
          </li>
          <li>
            Änderungen, Ergänzungen und die Aufhebung dieses Vertrags bedürfen zu ihrer Wirksamkeit
            der Schriftform. Dies gilt auch für die Änderung dieser Schriftformklausel selbst. Das
            vorstehende Schriftformerfordernis findet keine Anwendung bei Abreden, die nach
            Vertragsschluss unmittelbar zwischen den Parteien mündlich getroffen werden.
          </li>
          <li>
            Der Verein behält sich vor, diese Nutzungsbedingungen mit Auslieferung einer neuen
            Version der App für die Zukunft zu ändern. Änderungen werden dem Nutzer spätestens einen
            Monat vor dem vorgeschlagenen Zeitpunkt ihres Wirksamwerdens in elektronischer Form
            angeboten. Der Nutzer kann der Geltung der neuen Nutzungsbedingungen bis zum Zeitpunkt
            ihres vorgeschlagenen Inkrafttretens widersprechen. Andernfalls gelten die neuen
            Nutzungsbedingungen als akzeptiert. Der Verein weist den Nutzer auf die Bedeutung der
            Monatsfrist und des Widerspruchsrechts sowie die Rechtsfolgen des Schweigens gesondert
            in geeigneter Form hin.
            <br />
            <br />
            Dieser Änderungsmechanismus gilt nicht für etwaige Änderungen der vertraglichen
            Hauptleistungspflichten der Parteien.
            <br />
            <br />
            Die jeweils aktuelle Version der Nutzungsbedingungen kann über
            contact@democracy-deutschland.de angefordert oder auf{' '}
            <a
              href="http://democracy-deutschland.de/#!nutzungsbedinungen"
              className="text-[#4494d3] hover:underline"
            >
              democracy-deutschland.de/#!nutzungsbedinungen
            </a>{' '}
            abgerufen werden.
          </li>
          <li>
            Das Nichtberufen des Vereins auf eine Bestimmung der Nutzungsbedingungen stellt keinen
            Verzicht auf die jeweilige Bestimmung dar.
          </li>
        </ol>

        <h4 className="text-lg font-bold mb-4">
          <strong>11. Informationen zur Online-Streitbeilegung</strong>
        </h4>
        <p className="mb-8">
          Gemäß der Richtlinie 2013/11/EU richtet die EU-Kommission eine Internetplattform zur
          Online-Beilegung von Streitigkeiten (&bdquo;OS-Plattform&ldquo;) zwischen Unternehmern und
          Verbrauchern ein. Diese ist unter folgendem Link erreichbar:{' '}
          <a
            href="http://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4494d3] hover:underline"
          >
            http://ec.europa.eu/consumers/odr
          </a>
        </p>
      </div>
    </div>
  );
}
