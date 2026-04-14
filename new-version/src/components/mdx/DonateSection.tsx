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
      />

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
