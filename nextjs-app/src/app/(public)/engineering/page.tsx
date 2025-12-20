import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Roadmap - DEMOCRACY Deutschland',
  description: 'Unsere Entwicklung ist Open Source, der Quellcode frei und offen. DEMOCRACY ist und bleibt kostenlos.',
};

// Roadmap data from the legacy database
const roadmapData = [
  { id: 1, goal: 'Identifikation: Token-Einladung', issue: null, beta: 1, mvp: 0, dream: 0 },
  { id: 2, goal: 'Identifikation: SMS-Verifikation', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 3, goal: '<b>Liste Bundestagsgesetzgebungen</b>', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 4, goal: '&nbsp;&nbsp;&nbsp;aktuelle Abstimmungen', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 5, goal: '&nbsp;&nbsp;&nbsp;vergangene Abstimmungen', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 6, goal: '&nbsp;&nbsp;&nbsp;Abstimmungen in Vorbereitung', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 7, goal: "&nbsp;&nbsp;&nbsp;What's hot?", issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 8, goal: 'Details zu jeder Bundestagsgesetzgebung', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 9, goal: '&nbsp;&nbsp;&nbsp;Vorgangs-ID gem. DIP21', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 10, goal: '&nbsp;&nbsp;&nbsp;Schlagwörter gem. DIP21', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 11, goal: '&nbsp;&nbsp;&nbsp;Sachgebiet gem. DIP21', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 12, goal: '&nbsp;&nbsp;&nbsp;Aktueller Stand gem. DIP21', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 13, goal: '&nbsp;&nbsp;&nbsp;Inhaltsangabe gem. DIP21', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 14, goal: '&nbsp;&nbsp;&nbsp;alle einschlägigen Bundesdrucksachen', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 15, goal: '&nbsp;&nbsp;&nbsp;Abstimmungszeitpunkt gem. TOP', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 16, goal: '&nbsp;&nbsp;&nbsp;PDF-Reader einbinden', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 17, goal: '&nbsp;&nbsp;&nbsp;eigene Schlagwörter hinzufügen', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 18, goal: '&nbsp;&nbsp;&nbsp;Schlagwörter upvoten', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 19, goal: '&nbsp;&nbsp;&nbsp;Gesetzes-Meilenstein-Karte', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 20, goal: 'Nutzerabstimmung', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 21, goal: '&nbsp;&nbsp;&nbsp;Auswahlbestätigung/Schon gewusst?', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 22, goal: '&nbsp;&nbsp;&nbsp;Ergebnisdarstellung (Pie Chart) gesamt', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 23, goal: '&nbsp;&nbsp;&nbsp;Ergebnis vor/nach BT-Abstimmung', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 24, goal: 'offizielles Bundestagsergebnis', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 25, goal: '&nbsp;&nbsp;&nbsp;Gesamtergebnis (Pie Chart)', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 26, goal: '&nbsp;&nbsp;&nbsp;Fraktionsergebnisse (Bar Chart)', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 27, goal: '&nbsp;&nbsp;&nbsp;Abgeordnetenergebnisse nach Wahlkreis', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 28, goal: '&nbsp;&nbsp;&nbsp;vorläufige Ergebnisse (Beschlussempf. Bei Anträgen)', issue: null, beta: 0, mvp: 0, dream: 1 },
  { id: 29, goal: 'Push-Benachrichtigung(en)', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 30, goal: '&nbsp;&nbsp;&nbsp;Jetzt Abstimmen', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 31, goal: '&nbsp;&nbsp;&nbsp;Neues Papier', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 32, goal: '&nbsp;&nbsp;&nbsp;Update (Glocke)', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 33, goal: '&nbsp;&nbsp;&nbsp;Vor der Sitzungswoche', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 34, goal: '&nbsp;&nbsp;&nbsp;relevantes Papier', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 35, goal: '&nbsp;&nbsp;&nbsp;Bundestagsergebnis verfügbar', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 36, goal: '&nbsp;&nbsp;&nbsp;Neue(s) Version/Feature verfügbar', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 37, goal: 'Profil', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 38, goal: '&nbsp;&nbsp;&nbsp;persönliche History', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 39, goal: '&nbsp;&nbsp;&nbsp;Wahl-O-Meter (Wahl-O-Mat für immer)', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 40, goal: '&nbsp;&nbsp;&nbsp;Spielstand', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 41, goal: '&nbsp;&nbsp;&nbsp;persönliche Invite-Codes', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 42, goal: 'Gesetz suchen', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 43, goal: '&nbsp;&nbsp;&nbsp;Suche optimieren', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 44, goal: 'Tutorial', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 45, goal: '&nbsp;&nbsp;&nbsp;zzgl. In-App-Tutorial', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 46, goal: 'Abstimmung teilen (Social Media)', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 47, goal: 'Filter Ressort/Sachgebiet', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 48, goal: 'Abo Ressort/Sachgebiet', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 49, goal: 'Sicherheit einstellen', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 50, goal: '&nbsp;&nbsp;&nbsp;quittungsfreie Abstimmung', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 51, goal: '&nbsp;&nbsp;&nbsp;lokale Speicherung', issue: null, beta: 1, mvp: 2, dream: 2 },
  { id: 52, goal: '&nbsp;&nbsp;&nbsp;Übertragbarkeit auf neues Handy', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 53, goal: 'Forum', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 54, goal: '&nbsp;&nbsp;&nbsp;Information/Argument einbringen', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 55, goal: '&nbsp;&nbsp;&nbsp;Information/Argument lesen', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 56, goal: '&nbsp;&nbsp;&nbsp;Information/Argument liken', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 57, goal: '&nbsp;&nbsp;&nbsp;Information/Argument melden', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 58, goal: '&nbsp;&nbsp;&nbsp;Redaktionsbereich', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 59, goal: 'Desktop-Version', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 60, goal: '&nbsp;&nbsp;&nbsp;Liste Bundestagsvorgänge', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 61, goal: '&nbsp;&nbsp;&nbsp;Details', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 62, goal: '&nbsp;&nbsp;&nbsp;Dokumente', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 63, goal: '&nbsp;&nbsp;&nbsp;Darstellung der verg. Ergebnisse', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 64, goal: '&nbsp;&nbsp;&nbsp;Social-Media-Kompatibilität', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 65, goal: '&nbsp;&nbsp;&nbsp;Forum', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 66, goal: '&nbsp;&nbsp;&nbsp;Abstimmung via Handy-Bestätigung', issue: null, beta: 0, mvp: 1, dream: 2 },
  { id: 67, goal: 'kryptographisches Wahlverfahren', issue: null, beta: 0, mvp: 0, dream: 1 },
  { id: 68, goal: 'eigene Abstimmungslisten', issue: null, beta: 0, mvp: 0, dream: 1 },
];

// Simplified status display - replicating the actual legacy behavior
function StatusIcon({ status }: { status: number | null }) {
  if (status === null || status === 0) {
    return <span className="text-gray-300">—</span>;
  }
  
  if (status === 1) {
    // Blue check - completed in beta
    return <span className="text-[rgb(68,148,211)] text-xl">✓</span>;
  }
  
  if (status === 2) {
    // Grey check - already done before
    return <span className="text-[rgb(115,115,115)] text-xl">✓</span>;
  }
  
  return <span className="text-gray-300">—</span>;
}

export default function EngineeringPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Roadmap Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Roadmap</h1>
          <h4 className="text-lg pt-6">
            Unsere Entwicklung ist{' '}
            <a 
              href="https://github.com/demokratie-live/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[rgb(68,148,211)] hover:underline"
            >
              Open Source
            </a>
            , der Quellcode frei und offen.
          </h4>
          <h4 className="text-lg font-semibold mt-2">DEMOCRACY ist und bleibt kostenlos.</h4>
        </div>

        {/* Roadmap Table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 p-3 text-left text-xl font-bold align-top">Release</th>
                <th className="border border-gray-300 p-3 text-center">
                  <div>Master Beta</div>
                  <div className="text-[rgb(68,148,211)] text-sm">30.4.19</div>
                </th>
                <th className="border border-gray-300 p-3 text-center">
                  <div>Public MVP</div>
                  <div className="text-[rgb(38,183,39)] text-sm">01.10.18</div>
                </th>
                <th className="border border-gray-300 p-3 text-center">
                  <div>Post MVP</div>
                  <div className="text-gray-500 text-sm">&nbsp;</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {roadmapData.map((item, index) => (
                <tr 
                  key={item.id} 
                  className={`hover:bg-[#D0E4F4] ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                >
                  <td 
                    className="border border-gray-300 p-3 text-left"
                    dangerouslySetInnerHTML={{ 
                      __html: item.goal + (item.issue ? ` <a href="https://github.com/demokratie-live/democracy-client/issues/${item.issue}" target="_blank" class="text-[rgb(68,148,211)]">#${item.issue}</a>` : '') 
                    }}
                  />
                  <td className="border border-gray-300 p-3 text-center">
                    <StatusIcon status={item.beta} />
                  </td>
                  <td className="border border-gray-300 p-3 text-center">
                    <StatusIcon status={item.mvp} />
                  </td>
                  <td className="border border-gray-300 p-3 text-center">
                    <StatusIcon status={item.dream} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Divider */}
        <div className="py-12">
          <Image 
            src="/files/images/democracy-bar.png" 
            alt="Divider" 
            width={800} 
            height={20}
            className="mx-auto"
          />
        </div>

        {/* Technology Stack */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Technologie Stack</h1>
          <h5 className="text-lg pt-6 pb-12">
            Unsere Programmiersprachen und Frameworks, die Du als Entwickler benötigst,<br />
            um an DEMOCRACY mitzuwirken.
          </h5>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center">
              <Image 
                src="/files/images/ts-js.png" 
                alt="TypeScript/JavaScript" 
                width={200} 
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image 
                src="/files/images/react-native.png" 
                alt="React Native" 
                width={200} 
                height={100}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image 
                src="/files/images/nodejs.png" 
                alt="Node.js" 
                width={200} 
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Toolset */}
        <div className="mb-12 text-center pt-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Toolset</h1>
          <div className="flex justify-center pt-8">
            <a href="https://www.browserstack.com" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/files/images/browserstack.png" 
                alt="BrowserStack" 
                width={300} 
                height={100}
                className="object-contain"
              />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="py-12">
          <Image 
            src="/files/images/democracy-bar.png" 
            alt="Divider" 
            width={800} 
            height={20}
            className="mx-auto"
          />
        </div>

        {/* Developer Testing Section */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">DEMOCRACY Entwicklerversion testen</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
            <div className="flex justify-center lg:justify-end">
              <Image 
                src="/files/images/01FemaleMirror@3x.png" 
                alt="Developer testing" 
                width={350} 
                height={500}
                className="object-contain pt-12"
              />
            </div>
            <div className="flex flex-col items-center lg:items-start pt-12 px-4">
              <Image 
                src="/files/images/circle@3x.png" 
                alt="Circle" 
                width={75} 
                height={75}
                className="mb-4"
              />
              <div className="flex items-start mb-6">
                <Image 
                  src="/files/images/quotes@3x.png" 
                  alt="Quote" 
                  width={60} 
                  height={60}
                  className="mr-4"
                />
                <p className="text-left text-lg italic">
                  Prototyping ist der Prozess der Annäherung an ein Produkt
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <span className="block mb-2">Alpha</span>
                  <a 
                    href="/invite/C1B381E2" 
                    className="inline-block"
                    target="_blank"
                  >
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🍎</span>
                    </div>
                  </a>
                </div>
                <div className="text-center">
                  <span className="block mb-2">Alpha</span>
                  <a 
                    href="/invite/C1B381E2" 
                    className="inline-block"
                    target="_blank"
                  >
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🤖</span>
                    </div>
                  </a>
                </div>
              </div>
              <a 
                href="/invite/C1B381E2" 
                target="_blank"
                className="mt-6 inline-block px-6 py-3 border-2 border-[rgb(68,148,211)] text-[rgb(68,148,211)] hover:bg-[rgb(68,148,211)] hover:text-white transition-colors rounded"
              >
                Hier gehts zur Bewerbungsformular
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="py-12">
          <Image 
            src="/files/images/democracy-bar.png" 
            alt="Divider" 
            width={800} 
            height={20}
            className="mx-auto"
          />
        </div>

        {/* Bug Reports Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Bugreports</h1>
          <h5 className="text-center pt-6 mb-8">
            Du hast einen Fehler gefunden oder ein anderes Problem im MVP festgestellt? Hilf uns diese(n) zu beheben –<br />
            mit einem qualifizierten Feedback. Dazu füllst du am Besten das untenstehende Formular aus.
          </h5>
          <form className="max-w-4xl mx-auto space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Dein Name*" 
                className="w-full p-3 border border-gray-400 focus:border-[rgb(68,148,211)] focus:outline-none"
              />
              <input 
                type="email" 
                placeholder="E-Mail-Adresse für Rückfragen*" 
                className="w-full p-3 border border-gray-400 focus:border-[rgb(68,148,211)] focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
              <input 
                type="text" 
                placeholder="Betreff/Titel" 
                className="lg:col-span-3 w-full p-3 border border-gray-400 focus:border-[rgb(68,148,211)] focus:outline-none"
              />
              <input 
                type="text" 
                placeholder="Plattform (iOS/Android)*" 
                className="lg:col-span-2 w-full p-3 border border-gray-400 focus:border-[rgb(68,148,211)] focus:outline-none"
              />
              <input 
                type="text" 
                placeholder="Version*" 
                className="lg:col-span-1 w-full p-3 border border-gray-400 focus:border-[rgb(68,148,211)] focus:outline-none"
              />
            </div>
            <textarea 
              placeholder="Bitte beschreibe den Fehler möglichst genau in wenigen Sätzen; beziehe Dich dabei auf Screenshots und markiere die fehlerhaften Bereiche*"
              className="w-full p-3 border border-gray-400 focus:border-[rgb(68,148,211)] focus:outline-none min-h-[300px]"
            />
            <div className="border border-gray-400 border-t-0 p-3 text-left -mt-4">
              Dateien anhängen durch drag & drop oder <a href="#" className="text-[rgb(68,148,211)] hover:underline">auswählen</a>.
            </div>
            <div className="flex justify-end">
              <button 
                type="submit"
                className="px-6 py-3 border-2 border-[rgb(68,148,211)] text-[rgb(68,148,211)] hover:bg-[rgb(68,148,211)] hover:text-white transition-colors"
              >
                Bericht senden
              </button>
            </div>
          </form>
        </div>

        {/* Divider */}
        <div id="help" className="py-12">
          <Image 
            src="/files/images/democracy-bar.png" 
            alt="Divider" 
            width={800} 
            height={20}
            className="mx-auto"
          />
        </div>

        {/* Help/Volunteer Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Mithelfen</h1>
          <h5 className="text-center pt-6 mb-8">
            Du möchtest Demokratie mitgestalten?<br />
            Werde Teil des Teams.
          </h5>
          
          <div className="relative max-w-5xl mx-auto pt-8">
            {/* Laptop background - only visible on large screens */}
            <Image 
              src="/files/images/macbookSpaceGrey@3x.png" 
              alt="MacBook" 
              width={1200} 
              height={800}
              className="hidden lg:block absolute inset-0 w-full h-auto z-0"
            />
            
            <form className="relative z-10 bg-white lg:mx-[120px] lg:mt-[40px] lg:pb-[1%] lg:mb-[12.5%]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Dein Name*" 
                    className="w-full p-3 border border-gray-400 focus:border-[rgb(68,148,211)] focus:outline-none"
                  />
                  <input 
                    type="email" 
                    placeholder="Deine E-Mail-Adresse*" 
                    className="w-full p-3 border border-gray-400 focus:border-[rgb(68,148,211)] focus:outline-none"
                  />
                  
                  <div className="pt-4">
                    <h5 className="font-semibold mb-3">Ich möchte DEMOCRACY mitgestalten als</h5>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>UI/UX-Designer</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>Front-End-Developer</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>Back-End-Developer</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>Kryptograph</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>Marketingstratege</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>Redakteur</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4" />
                        <span>Botschafter</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <h5 className="font-semibold mb-3">Ich möchte ein App-Feature vorschlagen</h5>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span>Feature-Vorschlag</span>
                    </label>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <textarea 
                    placeholder="Erzähle uns über Deine Erfahrungen/Idee(n)*"
                    className="w-full p-3 border border-gray-400 focus:border-[rgb(68,148,211)] focus:outline-none min-h-[400px]"
                  />
                  <button 
                    type="submit"
                    className="w-full px-6 py-3 border-2 border-[rgb(68,148,211)] text-[rgb(68,148,211)] hover:bg-[rgb(68,148,211)] hover:text-white transition-colors"
                  >
                    Als Freiwillige/r melden
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
