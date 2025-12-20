'use client';

import { useSetHeaderTheme } from '@/contexts/HeaderContext';

export default function ImpressumPage() {
  useSetHeaderTheme('light');

  return (
    <div className="bg-white pt-16">
      <div className="container mx-auto px-4 py-8" style={{ textAlign: 'left' }}>
        <h1 className="text-4xl italic mb-8">Impressum</h1>

        <h4 className="text-xl font-bold mb-2">Angaben gemäß § 5 TMG</h4>
        <p className="mb-1">DEMOCRACY Deutschland e.V.</p>
        <p className="mb-1">Am Klausberge 12</p>
        <p className="mb-6">37075 Göttingen</p>

        <h4 className="text-xl font-bold mb-2">Vertreten durch</h4>
        <p className="mb-1">Marius Krüger</p>
        <p className="mb-6">Andreas Krüger</p>

        <h4 className="text-xl font-bold mb-2">Kontakt</h4>
        <p className="mb-1">Telefon: +49 176 470 40 213</p>
        <p className="mb-6">
          E-Mail:{' '}
          <a
            href="mailto:contact@democracy-deutschland.de"
            className="text-[#4494d3] hover:underline"
          >
            contact@democracy-deutschland.de
          </a>
        </p>

        <h4 className="text-xl font-bold mb-2">Registereintrag</h4>
        <p className="mb-1">Eintragung im Vereinsregister</p>
        <p className="mb-1">Registergericht: Amtsgericht Göttingen</p>
        <p className="mb-6">Registernummer: VR 201924</p>

        <h4 className="text-xl font-bold mb-2">Umsatzsteuer</h4>
        <p className="mb-6">
          Der gemeinnützige Verein DEMOCRACY Deutschland e.V. macht in seinem wirtschaftlichen
          Geschäftsbetrieb von der Kleinunternehmerregelung nach § 19 UStG Gebrauch und weist
          insofern die Umsatzsteuer nicht aus, weil er auch nicht zu deren Abführung verpflichtet
          ist.
        </p>

        <h4 className="text-xl font-bold mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h4>
        <p className="mb-1">Marius Krüger</p>
        <p className="mb-1">Am Klausberge 12</p>
        <p className="mb-6">37075 Göttingen</p>

        <h4 className="text-xl font-bold mb-2">Streitschlichtung</h4>
        <p className="mb-6">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h4 className="text-xl font-bold mb-2">Haftung für Inhalte</h4>
        <p className="mb-4">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach
          den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
          jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p className="mb-6">
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
          allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst
          ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
        </p>

        <h4 className="text-xl font-bold mb-2">Haftung für Links</h4>
        <p className="mb-4">
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
          mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
          Verlinkung nicht erkennbar.
        </p>
        <p className="mb-6">
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
          Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
          Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>

        <h4 className="text-xl font-bold mb-2">Urheberrecht</h4>
        <p className="mb-4">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
          der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
          Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
          nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p className="mb-6">
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
          Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
          gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
          bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
      </div>
    </div>
  );
}
