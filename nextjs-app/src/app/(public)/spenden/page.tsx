import Link from 'next/link';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { HeaderThemeSetter, DonateButton, DonateModal } from './SpendenClientComponents';

// Types for donation data
interface DonationItem {
  id: number;
  title: string;
  description: string | null;
  type: 'head' | 'data';
  value: number;
  maxValue: number;
  order: number;
  active: boolean;
}

interface DonationSettings {
  currentValue: number;
  goalValue: number;
  patrons: number;
  patronsGoal: number;
}

// Fetch donation data from Payload CMS
async function getDonationData() {
  const payload = await getPayload({ config: configPromise });

  // Get donation settings
  const settingsResult = await payload.find({
    collection: 'donation-settings',
    limit: 1,
    sort: '-createdAt',
  });

  const settings: DonationSettings = settingsResult.docs[0] || {
    currentValue: 0,
    goalValue: 10000,
    patrons: 0,
    patronsGoal: 500,
  };

  // Get all active donation items, sorted by order
  const itemsResult = await payload.find({
    collection: 'donation-items',
    where: { active: { equals: true } },
    sort: 'order',
    limit: 100,
  });

  const items: DonationItem[] = itemsResult.docs as DonationItem[];

  // Calculate percentage
  const percentage =
    settings.goalValue > 0
      ? Math.round((settings.currentValue / settings.goalValue) * 100)
      : 0;

  // Get current date formatted in German
  const currentDate = new Date().toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return {
    settings,
    items,
    percentage,
    currentDate,
  };
}

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
          width: `${Math.min(percentage, 100)}%`,
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
function DonationBox({
  settings,
  percentage,
  currentDate,
}: {
  settings: DonationSettings;
  percentage: number;
  currentDate: string;
}) {
  const valueGoalFormatted = settings.goalValue.toLocaleString('de-DE');
  const valueFormatted = settings.currentValue.toLocaleString('de-DE');
  const patenGoalFormatted = settings.patronsGoal.toLocaleString('de-DE');

  return (
    <div className="w-full">
      <DonationProgress percentage={percentage} valueGoal={valueGoalFormatted} />
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
            {settings.patrons} VON {patenGoalFormatted}
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
          Stand: {currentDate}
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

// Donation details table with items from CMS
function DonationDetails({
  settings,
  items,
  percentage,
}: {
  settings: DonationSettings;
  items: DonationItem[];
  percentage: number;
}) {
  const valueGoalFormatted = settings.goalValue.toLocaleString('de-DE');
  const valueFormatted = settings.currentValue.toLocaleString('de-DE');

  return (
    <div className="w-full">
      <DonationProgress percentage={percentage} valueGoal={valueGoalFormatted} />
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

      {/* Expense table - now using items from Payload CMS */}
      <table className="w-full mt-12 border-collapse text-left">
        <tbody>
          {items.map((item) => {
            if (item.type === 'head') {
              return (
                <tr
                  key={item.id}
                  className="border-b border-gray-300"
                  style={{ backgroundColor: 'rgb(239,239,244)' }}
                >
                  <th
                    colSpan={3}
                    className="py-2 px-4 text-gray-500 text-xs font-normal tracking-wider"
                  >
                    {item.title}
                  </th>
                </tr>
              );
            }

            const itemPercentage =
              item.maxValue > 0
                ? Math.round((item.value / item.maxValue) * 100)
                : 0;

            return (
              <tr
                key={item.id}
                className="relative"
                style={{ backgroundColor: 'rgb(246,246,246)' }}
              >
                <td className="py-2 px-4 relative">
                  <div
                    className="absolute left-0 top-0 h-full"
                    style={{
                      width: `${itemPercentage}%`,
                      backgroundColor: 'rgba(68,148,211,0.25)',
                    }}
                  />
                  <div className="relative z-10">
                    <div className="text-sm">{item.title}</div>
                    <div className="font-bold text-xl">
                      {item.maxValue.toLocaleString('de-DE')}€
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4">
                  <div className="text-lg">{item.description || ''}</div>
                  <div className="text-base text-gray-500">
                    {item.value > 0
                      ? `${item.value.toLocaleString('de-DE')}€ erreicht`
                      : ''}
                  </div>
                </td>
                <td className="py-2 px-4 text-sm text-right">
                  {itemPercentage}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Donate button - using client component for interactivity */}
      <DonateButton />
    </div>
  );
}

export default async function SpendenPage() {
  const { settings, items, percentage, currentDate } = await getDonationData();

  return (
    <>
      <HeaderThemeSetter />
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
              <DonationBox
                settings={settings}
                percentage={percentage}
                currentDate={currentDate}
              />
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
              <DonationDetails
                settings={settings}
                items={items}
                percentage={percentage}
              />
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
    </>
  );
}

// Revalidate every 5 minutes
export const revalidate = 300;
