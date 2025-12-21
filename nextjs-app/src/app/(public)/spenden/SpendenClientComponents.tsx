'use client';

import { useSetHeaderTheme } from '@/contexts/HeaderContext';

// Header theme setter component
export function HeaderThemeSetter() {
  useSetHeaderTheme('light');
  return null;
}

// Donate button component
export function DonateButton() {
  return (
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
  );
}

// Donate Modal component
export function DonateModal() {
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
