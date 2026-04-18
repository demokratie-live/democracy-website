import { getDonateConfig } from "@/lib/content";
import { ProgressBar, BankTransferInfo, DonateCategories } from "./DonateComponents";

export async function DonateSection() {
  const config = await getDonateConfig();

  return (
    <div className="space-y-8">
      <ProgressBar
        current={config.progress.current}
        goal={config.progress.goal}
        unit={config.progress.unit}
        patrons={config.progress.patrons}
        patronsGoal={config.progress.patronsGoal}
      />

      {/* Prominent donation CTAs */}
      <div className="flex flex-wrap justify-center gap-4">
        {config.callToAction.donorbox && (
          <a
            href={config.callToAction.donorbox}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-important)] px-8 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-[var(--color-important-hover)]"
          >
            Jetzt über Donorbox spenden
          </a>
        )}
        {config.callToAction.paypal && (
          <a
            href={config.callToAction.paypal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#0070ba] px-8 py-3 text-base font-semibold text-white shadow transition-colors hover:bg-[#005a96]"
          >
            Über PayPal spenden
          </a>
        )}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <DonateCategories categories={config.categories} goal={config.progress.goal} />
        <BankTransferInfo
          holder={config.bankAccount.holder}
          iban={config.bankAccount.iban}
          bic={config.bankAccount.bic}
          bank={config.bankAccount.bank}
        />
      </div>
    </div>
  );
}
