'use client';

import Link from 'next/link';
import { useSetHeaderTheme } from '@/contexts/HeaderContext';

// Donation data - in production this would come from an API/database
const donationData = {
  percentage: 19,
  paten: 387,
  patenGoal: 2000,
  value: 1759,
  valueGoal: 9300,
  date: '16.12.2025',
};

// Expense breakdown data
const expenseCategories = [
  {
    type: 'head',
    text_description: 'INFRASTRUKTUR',
  },
  {
    type: 'data',
    text_cost: 'Live-Betrieb',
    max: 300,
    value: 300,
    text_description: 'Serverkosten',
    text_description_subtext: 'inkl 19% MwSt.',
    text_date: '01.01.2024',
  },
  {
    type: 'data',
    text_cost: 'Live-Betrieb',
    max: 300,
    value: 300,
    text_description: 'SMS-Versandkosten',
    text_description_subtext: '4.000 SMS á 7,8 ct (kalkuliert)',
    text_date: '01.01.2024',
  },
  {
    type: 'head',
    text_description: '',
  },
  {
    type: 'data',
    text_cost: 'Developer',
    max: 3000,
    value: 0,
    text_description: 'AG-Brutto-Gehaltskosten',
    text_description_subtext: '(1.750€ netto)',
    text_date: 'ab sofort',
  },
  {
    type: 'data',
    text_cost: 'Manuel Ruck',
    max: 650,
    value: 650,
    text_description: 'AG-Minijob-Kosten',
    text_description_subtext: '(520€ netto)',
    text_date: '01.07.2024',
  },
  {
    type: 'head',
    text_description: 'PRODUKTDESIGN & VERWALTUNG',
  },
  {
    type: 'data',
    text_cost: 'Operative Projektleitung',
    max: 3000,
    value: 0,
    text_description: 'AG-Brutto-Gehaltskosten',
    text_description_subtext: '(1.750€ netto)',
    text_date: 'ab sofort',
  },
  {
    type: 'data',
    text_cost: 'Marius Krüger',
    max: 650,
    value: 650,
    text_description: 'AG-Minijob-Kosten',
    text_description_subtext: '(520€ netto)',
    text_date: '01.03.2024',
  },
  {
    type: 'data',
    text_cost: 'Administration',
    max: 650,
    value: 0,
    text_description: 'AG-Minijob-Kosten',
    text_description_subtext: '(520€ netto)',
    text_date: 'ab sofort',
  },
  {
    type: 'data',
    text_cost: 'UX-Design',
    max: 650,
    value: 0,
    text_description: 'AG-Minijob-Kosten',
    text_description_subtext: '(520€ netto)',
    text_date: 'ab sofort',
  },
  {
    type: 'data',
    text_cost: 'Lohn',
    max: 100,
    value: 100,
    text_description: 'Lohnabrechnung',
    text_description_subtext: 'inkl 19% MwSt.',
    text_date: '01.01.2024',
  },
];

// Progress bar component
function DonationProgress({
  percentage,
  valueGoal,
}: {
  percentage: number;
  valueGoal: string;
}) {
  return (
    <div className="relative w-full h-10 bg-[#f6f6f6]">
      <div
        className="absolute h-full"
        style={{
          width: `${percentage}%`,
          backgroundImage:
            'repeating-linear-gradient(45deg, #3D87C1, #3D87C1 10px, #4494D3 10px, #4494D3 20px)',
        }}
      />
      <span className="absolute inset-0 flex items-center pl-4 text-sm font-bold">
        {percentage}% von {valueGoal}€ GESCHAFFT!
      </span>
    </div>
  );
}

// Donation box component
function DonationBox() {
  const valueGoalFormatted = donationData.valueGoal.toLocaleString('de-DE');
  const valueFormatted = donationData.value.toLocaleString('de-DE');
  const patenGoalFormatted = donationData.patenGoal.toLocaleString('de-DE');

  return (
    <div className="w-full">
      <DonationProgress
        percentage={donationData.percentage}
        valueGoal={valueGoalFormatted}
      />
      <div
        className="text-center"
        style={{
          borderTop: 'solid 3px #4494D3',
          marginTop: '5px',
          backgroundColor: '#f6f6f6',
        }}
      >
        <span className="block font-bold pt-5">
          <span className="text-2xl text-gray-800">
            {donationData.paten} VON {patenGoalFormatted}
          </span>
        </span>
        <span className="block text-lg font-normal text-gray-500 pb-4">
          PATENSCHAFTEN ERREICHT!
        </span>
        <hr className="border-gray-300" />
        <span className="block font-bold pt-4">
          <span className="text-xl text-gray-800">
            {valueFormatted}€ von {valueGoalFormatted}€
          </span>
        </span>
        <span className="block text-base font-normal text-gray-500">
          (min. Finanzierungsziel/Monat)
        </span>
        <span className="block text-sm font-normal text-gray-500">
          Stand: {donationData.date}
        </span>
        <img
          src="/files/images/Bubble.png"
          alt="DEMOCRACY Logo"
          className="mx-auto py-8"
          style={{ height: '200px' }}
        />
      </div>
    </div>
  );
}

// Donation details table
function DonationDetails() {
  const valueGoalFormatted = donationData.valueGoal.toLocaleString('de-DE');
  const valueFormatted = donationData.value.toLocaleString('de-DE');

  return (
    <div className="w-full">
      <DonationProgress
        percentage={donationData.percentage}
        valueGoal={valueGoalFormatted}
      />
      <div
        className="text-center py-4"
        style={{
          borderTop: 'solid 3px #4494D3',
          marginTop: '5px',
          backgroundColor: '#f6f6f6',
        }}
      >
        <span className="block font-bold">
          <span className="text-xl text-gray-800">
            {valueFormatted}€ von {valueGoalFormatted}€
          </span>
        </span>
        <span className="block text-base font-normal text-gray-500">
          (min. Finanzierungsziel/Monat)
        </span>
      </div>

      {/* Expense table */}
      <table className="w-full mt-12 border-collapse text-left">
        <tbody>
          {expenseCategories.map((item, idx) => {
            if (item.type === 'head') {
              return (
                <tr
                  key={idx}
                  className="border-b border-gray-300"
                  style={{ backgroundColor: 'rgb(239,239,244)' }}
                >
                  <th
                    colSpan={3}
                    className="py-2 px-4 text-gray-500 text-xs font-normal tracking-wider"
                  >
                    {item.text_description}
                  </th>
                </tr>
              );
            }

            const percentage = Math.round(((item.value || 0) / (item.max || 1)) * 100);
            return (
              <tr
                key={idx}
                className="relative"
                style={{ backgroundColor: 'rgb(246,246,246)' }}
              >
                <td className="py-2 px-4 relative">
                  <div
                    className="absolute left-0 top-0 h-full"
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: 'rgba(68,148,211,0.25)',
                    }}
                  />
                  <div className="relative z-10">
                    <div className="text-sm">{item.text_cost}</div>
                    <div className="font-bold text-xl">{item.max?.toLocaleString('de-DE')}€</div>
                  </div>
                </td>
                <td className="py-2 px-4">
                  <div className="text-lg">{item.text_description}</div>
                  <div className="text-base text-gray-500">{item.text_description_subtext}</div>
                </td>
                <td className="py-2 px-4 text-sm text-right">{item.text_date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Donate button */}
      <button
        onClick={() => {
          const modal = document.getElementById('donateModal');
          if (modal) modal.classList.remove('hidden');
        }}
        className="w-full mt-6 py-4 rounded cursor-pointer text-2xl font-bold"
        style={{ backgroundColor: '#f5a623', color: '#4a4a4a' }}
      >
        Spenden
      </button>
    </div>
  );
}

// Donate Modal
function DonateModal() {
  return (
    <div
      id="donateModal"
      className="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          e.currentTarget.classList.add('hidden');
        }
      }}
    >
      <div className="bg-white rounded-lg max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 text-left relative">
          <button
            onClick={() => document.getElementById('donateModal')?.classList.add('hidden')}
            className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800"
          >
            ×
          </button>

          <div className="flex flex-wrap items-baseline mb-4">
            <span className="text-4xl font-bold italic" style={{ fontFamily: 'helvetica, sans-serif' }}>
              DEMOCRACY
            </span>
            <span className="text-2xl font-bold ml-2">Patenschaft</span>
          </div>

          <p className="mb-6">
            Deine regelmäßige Unterstützung hilft uns, die laufenden Kosten zu decken und gibt uns
            Planungssicherheit für die Zukunft des Projekts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Damit deine{' '}
                <span className="text-[#6eacdc] font-bold">Spende zu 100 Prozent wirksam</span> wird
                und für dich jederzeit kontrollierbar ist, empfehlen wir Dir einen{' '}
                <span className="text-[#6eacdc] font-bold">Dauerauftrag á Konto</span> einzurichten.
              </p>

              <h6 className="font-bold mb-3">Dauerauftrag via Bankverbindung</h6>
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div className="font-bold">Kontoinhaber</div>
                <div className="col-span-2">DEMOCRACY Deutschland e.V.</div>
                <div className="font-bold">IBAN</div>
                <div className="col-span-2">DE33 5003 1000 1049 7560 00</div>
                <div className="font-bold">BIC</div>
                <div className="col-span-2">TRODDEF1</div>
              </div>
            </div>

            <div>
              <h6 className="font-bold mb-3">Dauerauftrag via PayPal</h6>
              <p className="text-sm mb-4">
                1,5% Deines Spendenbetrags + 0,35 EUR pro Transaktion verbleiben bei PayPal.
                <br />
                <br />
                Bitte bedenke, dass von einer monatlichen 1€-Spende insofern nur 0,63 EUR bei uns
                ankommen.
              </p>
              <a
                href="https://www.paypal.com/donate?hosted_button_id=PR4PJL4AY8RSL"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#4494d3] font-bold hover:underline mb-2"
              >
                Weiter zu PayPal →
              </a>
              <a
                href="https://donorbox.org/democracy-app"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#4494d3] font-bold hover:underline"
              >
                Weiter zu DonorBox →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SpendenPage() {
  useSetHeaderTheme('light');

  return (
    <div className="bg-white pt-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Spenden</h1>
          <h4 className="text-lg text-gray-700 pt-8 leading-relaxed max-w-3xl mx-auto">
            Unsere Arbeit ist unabhängig, überparteilich, allgemeinnützig und nichtkommerziell –
            <br />
            von Menschen für Menschen
          </h4>
        </div>

        {/* Donation Box and Description */}
        <div className="flex flex-col lg:flex-row gap-8 pt-12">
          <div className="lg:w-1/3">
            <DonationBox />
          </div>
          <div className="lg:w-2/3 text-left lg:pl-12">
            <p>
              DEMOCRACY Deutschland e.V. ist ein <b>gemeinnütziger Verein</b>, der sich mit seiner
              gleichnamigen App und Bildungsarbeit für Demokratie als politische Selbstbestimmung
              einsetzt.
            </p>
            <br />
            <p>
              Eine Gewinnerzielungabsicht haben wir bereits mit der Wahl unserer Rechtsform
              ausgeschlossen. Daten, die bei der Nutzung der App entstehen, sind für uns keine
              handelbaren Wirtschaftsgüter, sondern im Sinne der informationellen Selbstbestimmung
              und des Grundgesetzes zu schützen.
            </p>
            <br />
            <p>
              Unser Vorschlag für eine nachhaltige Veränderung ist die{' '}
              <b>gemeinschaftliche Finanzierung</b>.
            </p>
            <br />
            <p>
              Deine finanzielle Unterstützung hilft uns, seit der Prototypsfinanzierung durch das{' '}
              <a
                href="https://startnext.com/democracy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4494d3] hover:underline"
              >
                initiale Crowdfunding im Herbst 2017
              </a>
              , die laufenden Kosten zu decken und gibt uns Planungssicherheit für die Zukunft des
              Projekts. Pate kannst du schon ab 5 € monatlich werden. Deine Unterstützung lässt sich
              jederzeit beenden.
            </p>
            <br />
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#donate"
                className="inline-block px-6 py-3 text-white text-center font-semibold rounded"
                style={{ backgroundColor: '#4494d3' }}
              >
                Jetzt Pate werden
              </a>
              <a
                href="#donate"
                className="inline-block px-6 py-3 text-gray-700 text-center font-semibold rounded border-2 border-gray-300 hover:border-[#4494d3]"
              >
                Einmalig Spenden
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center pt-20">
          <img
            src="/files/images/democracy-bar.png"
            alt="Divider"
            className="w-full max-w-3xl"
          />
        </div>

        {/* Donation Details Section */}
        <div id="donate" className="flex flex-col lg:flex-row gap-8 pt-12 scroll-mt-24">
          <div className="lg:w-1/2 text-left">
            <h5 className="font-bold text-lg mb-4">
              SPENDENKONTO FÜR DAUERAUFTRAG ODER ÜBERWEISUNG
            </h5>
            <p className="mb-4">
              Unsere Bankverbindung für direkte Spenden, Überweisungen oder Daueraufträge lautet:
            </p>
            <table className="mb-6">
              <tbody>
                <tr>
                  <th className="text-left pr-4 py-1">Kontoinhaber</th>
                  <td>DEMOCRACY Deutschland e.V.</td>
                </tr>
                <tr>
                  <th className="text-left pr-4 py-1">IBAN</th>
                  <td>DE33 5003 1000 1049 7560 00</td>
                </tr>
                <tr>
                  <th className="text-left pr-4 py-1">BIC</th>
                  <td>TRODDEF1</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm mb-8">
              Der Verein DEMOCRACY Deutschland e.V. ist mit Bescheid des Finanzamts Göttingen vom
              10.11.2022 als gemeinnützig anerkannt (
              <a
                href="/files/download/Freistellungsbescheid.pdf"
                target="_blank"
                className="text-[#4494d3] hover:underline"
              >
                Nachweis der Gemeinnützigkeit
              </a>
              ;{' '}
              <a
                href="/files/download/Satzung_DEMOCRACY.pdf"
                target="_blank"
                className="text-[#4494d3] hover:underline"
              >
                Satzung
              </a>
              ). Deine Spenden sind daher steuerlich abzugsfähig. Für Spenden unter 200€ jährlich
              genügt der Zahlungsnachweis (z. B. Kontoauszug) zusammen mit unserem{' '}
              <a
                href="/files/download/Vereinfachter_Zuwendungsnachweis_2022.pdf"
                target="_blank"
                className="text-[#4494d3] hover:underline"
              >
                Vereinfachten Zuwendungsnachweis
              </a>
              . Wenn Du eine separate Zuwendungsbestätigung benötigst, schreib uns bitte eine E-Mail
              oder gib in Deiner Überweisung Deine Wohnadresse an.
            </p>

            <h5 className="font-bold text-lg mb-4">SPENDEN ÜBER DONORBOX</h5>
            <p className="text-sm mb-8">
              1.5% Deines Spendenbetrags verbleiben bei Donorbox und 2.9% Deines Spendenbetrags +
              0,30 EUR beim Zahlungsdienstleister Stripe.
            </p>

            <h5 className="font-bold text-lg mb-4">SPENDEN ÜBER PAYPAL</h5>
            <p className="text-sm mb-8">
              1,5% Deines Spendenbetrags + 0,35 EUR pro Transaktion verbleiben bei PayPal.
            </p>

            <h5 className="font-bold text-lg mb-4">ANDERE FORMEN DER UNTERSTÜTZUNG</h5>
            <p className="text-sm mb-8">
              Spenden und Daueraufträge sind nur eine Möglichkeit, um uns zu unterstützen. Wir
              suchen ständig motivierte Leute für die aktive Mitarbeit in unserem Projekt! Du hast
              Interesse Deine Fähigkeiten einzubringen – wir freuen uns über Anregungen, Fragen und
              Kritik.{' '}
              <Link href="/engineering#help" className="text-[#4494d3] hover:underline">
                Als Freiwilliger melden.
              </Link>
            </p>

            <h5 className="font-bold text-lg mb-4">JAHRESABSCHLÜSSE</h5>
            <div className="text-sm space-y-1">
              <a
                href="/files/download/JA_2017_DEMOCRACY.PDF"
                target="_blank"
                className="block text-[#4494d3] hover:underline"
              >
                Jahresabschluss 2017
              </a>
              <a
                href="/files/download/JA_2018_DEMOCRACY.PDF"
                target="_blank"
                className="block text-[#4494d3] hover:underline"
              >
                Jahresabschluss 2018
              </a>
              <a
                href="/files/download/JA_2019_DEMOCRACY.pdf"
                target="_blank"
                className="block text-[#4494d3] hover:underline"
              >
                Jahresabschluss 2019
              </a>
              <a
                href="/files/download/JA_2020_DEMOCRACY.pdf"
                target="_blank"
                className="block text-[#4494d3] hover:underline"
              >
                Jahresabschluss 2020
              </a>
              <a
                href="/files/download/JA_2021_DEMOCRACY.pdf"
                target="_blank"
                className="block text-[#4494d3] hover:underline"
              >
                Jahresabschluss 2021
              </a>
              <a
                href="/files/download/JA_2022_DEMOCRACY.pdf"
                target="_blank"
                className="block text-[#4494d3] hover:underline"
              >
                Jahresabschluss 2022
              </a>
              <a
                href="/files/download/JA_2023_DEMOCRACY.pdf"
                target="_blank"
                className="block text-[#4494d3] hover:underline"
              >
                Jahresabschluss 2023
              </a>
            </div>
          </div>

          <div className="lg:w-1/12"></div>

          <div className="lg:w-5/12">
            <DonationDetails />
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center pt-12">
          <img
            src="/files/images/democracy-bar.png"
            alt="Divider"
            className="w-full max-w-3xl"
          />
        </div>

        {/* HIK Section */}
        <div className="flex flex-col lg:flex-row gap-8 pt-12 pb-24">
          <div className="lg:w-12/12 text-center pb-8">
            <h2 className="text-2xl font-bold">DEMOCRACY X HIK</h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 pb-24 -mt-16">
          <div className="lg:w-5/12">
            <img
              src="/files/images/HES_INNOKO_LOGO_RGB.jpg"
              alt="Hertie Innovationskolleg Logo"
              className="w-full"
            />
          </div>
          <div className="lg:w-7/12 text-left">
            <p>
              Das Hertie-Innovationskolleg (HIK) ist ein Projekt der Gemeinnützigen Hertie-Stiftung,
              dass das Zusammenleben in Europa durch Vorhaben mit großer gesellschaftlicher Wirkung
              und Vorbildcharakter mitgestaltet. Es fördert Ideen von freien Denkern sowie
              zukunftsweisende, praxisorientierte Projekte unterschiedlicher Formate innerhalb der
              drei Themenbereiche Zukunft der Demokratie, Zukunft der Bildung sowie Zukunft des
              gesellschaftlichen Zusammenhalts. Marius Krüger war Kollegiat des HIK-Jahrgangs
              2018&nbsp;I.{' '}
              <a
                href="/files/download/MariusKrueger_DEMOCRACY_HIKAbschlussbericht.pdf"
                target="_blank"
                className="text-[#4494d3] hover:underline"
              >
                Abschlussbericht von Marius Krüger
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Donate Modal */}
      <DonateModal />
    </div>
  );
}
