"use client";

import { useState } from "react";
import { ChevronDown, Check, X } from "lucide-react";

interface Value {
  support: string;
  supportDescription: string;
  oppose: string;
  opposeDescription: string;
}

const values: Value[] = [
  {
    support: "Demokratie als aufklärerische Idee",
    supportDescription:
      'Demokratie verstanden als Herrschaft durch die Bevölkerung mit dem Grundprinzip \u201Eeine Person \u2013 eine Stimme\u201C.',
    oppose: "Nicht-demokratische Regierungsformen",
    opposeDescription:
      "Diktatur, Oligarchie, Epistokratie und andere Regierungsformen, die die Mitbestimmung der Bevölkerung einschränken.",
  },
  {
    support: "Souveränität des Einzelnen",
    supportDescription:
      "Individuelle Selbstbestimmung und die Fähigkeit, autonome vernünftige Entscheidungen mit verfassungsmäßigem Schutz zu treffen.",
    oppose: "Fremdbestimmung des Einzelnen",
    opposeDescription:
      "Haltungen, die die universelle menschliche Fähigkeit zu unabhängigem Denken leugnen; Bewegungen, die Freiheit und Beteiligungsrechte einschränken.",
  },
  {
    support: "Meinungsfreiheit & breite Debatten",
    supportDescription:
      'Meinungsfreiheit im Sinne Rosa Luxemburgs: \u201EFreiheit ist immer die Freiheit der Andersdenkenden.\u201C',
    oppose: "Verengung des Meinungskorridors",
    opposeDescription:
      "Staatliche Unterdrückung oder Kontrolle von Information; gleichförmige Berichterstattung ohne Meinungsvielfalt.",
  },
  {
    support: "Direkte Beteiligung",
    supportDescription:
      "Umfassende Partizipationsmöglichkeiten im politischen Prozess während der Legislaturperiode; eine politisch aktive Bevölkerung.",
    oppose: "Zuschauer-Demokratie",
    opposeDescription:
      "Ein Staat, in dem Wirtschaftslobbyisten täglich Einfluss nehmen, während Bürger zwischen Wahlen passiv zusehen.",
  },
  {
    support: "Transparenz & Informationssouveränität",
    supportDescription:
      "Maximale Transparenz im politischen Prozess; freier, benutzerfreundlicher Zugang zu Informationen, damit Bürger die Arbeit ihrer Vertreter nachvollziehen können.",
    oppose: "Hinterzimmer-Politik",
    opposeDescription:
      "Intransparente Entscheidungsfindung, bei der Bürger begrenzten Einblick haben und Entscheidungen nicht überprüfen können.",
  },
  {
    support: "Rückkoppelnde Politiker",
    supportDescription:
      "Politiker, die die Erwartungen der Bevölkerung berücksichtigen; in stetigem Austausch stehen; bereit sind, von der Parteilinie abzuweichen und nach Gewissen zu entscheiden.",
    oppose: "Entkoppelte Politiker",
    opposeDescription:
      "Politiker, die eigene Interessen verfolgen; während der Legislaturperiode desinteressiert an der Bevölkerung sind; sich der Rechenschaft entziehen.",
  },
];

export function ValueCards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12">
      <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
        Unser Demokratieverständnis
      </h2>
      <div className="space-y-3">
        {values.map((value, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg ring-1 ring-border"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/50"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              aria-expanded={openIndex === index}
            >
              <div className="flex flex-1 items-center gap-3">
                <Check className="h-5 w-5 shrink-0 text-accent-500" />
                <span className="font-medium">{value.support}</span>
              </div>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="border-t border-border bg-muted/30 px-5 py-4">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-accent-600">
                      <Check className="h-4 w-4" />
                      {value.support}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {value.supportDescription}
                    </p>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-danger">
                      <X className="h-4 w-4" />
                      {value.oppose}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {value.opposeDescription}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
