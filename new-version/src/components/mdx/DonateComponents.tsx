import { renderIcon } from "./icons";

interface ProgressBarProps {
  current: number;
  goal: number;
  unit?: string;
  patrons?: number;
  patronsGoal?: number;
}

export function ProgressBar({
  current,
  goal,
  unit = "€/Monat",
  patrons,
  patronsGoal,
}: ProgressBarProps) {
  const percentage = goal > 0 ? Math.min(Math.round((current / goal) * 100), 100) : 0;
  const patronsPct =
    patrons !== undefined && patronsGoal && patronsGoal > 0
      ? Math.min(Math.round((patrons / patronsGoal) * 100), 100)
      : undefined;

  return (
    <div className="rounded-xl border border-border bg-white p-6 shadow-sm space-y-6">
      {patronsGoal && patrons !== undefined && (
        <div>
          <div className="mb-2 flex items-end justify-between text-sm">
            <span className="font-semibold text-[var(--color-important)]">
              {patronsPct}% erreicht
            </span>
            <span className="text-muted-foreground">
              {patrons.toLocaleString("de-DE")} von {patronsGoal.toLocaleString("de-DE")}{" "}
              Patenschaften
            </span>
          </div>
          <div className="h-4 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-[var(--color-important)] transition-all duration-500"
              style={{ width: `${patronsPct}%` }}
            />
          </div>
        </div>
      )}

      <div>
        <div className="mb-2 flex items-end justify-between text-sm">
          <span className="font-semibold text-[var(--color-important)]">
            {percentage}% erreicht
          </span>
          <span className="text-muted-foreground">
            {current.toLocaleString("de-DE")} von {goal.toLocaleString("de-DE")} {unit}
          </span>
        </div>
        <div className="h-4 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-[var(--color-important)] transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}

interface BankTransferInfoProps {
  holder: string;
  iban: string;
  bic: string;
  bank: string;
}

export function BankTransferInfo({ holder, iban, bic, bank }: BankTransferInfoProps) {
  return (
    <div className="rounded-xl border border-border bg-muted/50 p-6">
      <h3 className="mb-4 text-lg font-semibold">Spendenkonto</h3>
      <table className="w-full text-sm">
        <tbody>
          <tr>
            <td className="pr-4 py-1 font-medium text-muted-foreground">Kontoinhaber</td>
            <td className="py-1">{holder}</td>
          </tr>
          <tr>
            <td className="pr-4 py-1 font-medium text-muted-foreground">IBAN</td>
            <td className="py-1 font-mono">{iban}</td>
          </tr>
          <tr>
            <td className="pr-4 py-1 font-medium text-muted-foreground">BIC</td>
            <td className="py-1 font-mono">{bic}</td>
          </tr>
          <tr>
            <td className="pr-4 py-1 font-medium text-muted-foreground">Bank</td>
            <td className="py-1">{bank}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

interface DonateCategoryItem {
  label: string;
  amount: number;
  icon: string;
}

interface DonateCategoriesProps {
  categories: DonateCategoryItem[];
  goal: number;
}

export function DonateCategories({ categories, goal }: DonateCategoriesProps) {
  return (
    <div className="rounded-xl border border-border bg-white p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Wofür wir Spenden brauchen</h3>
      <p className="mb-4 text-sm text-muted-foreground">
        Monatliches Finanzierungsziel: {goal.toLocaleString("de-DE")} €
      </p>
      <div className="space-y-3">
        {categories.map((cat) => {
          const barWidth =
            goal > 0 ? Math.min(Math.round((cat.amount / goal) * 100), 100) : 0;
          return (
            <div key={cat.label}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  {renderIcon(cat.icon, "h-4 w-4 text-primary-500")}
                  {cat.label}
                </span>
                <span className="font-medium">{cat.amount.toLocaleString("de-DE")} €</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary-300"
                  style={{ width: `${barWidth}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
