import type { Metadata } from "next";
import { getPage } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";
import { ComparisonCards } from "@/components/blocks/ComparisonCards";
import { VideoPlayer } from "@/components/blocks/VideoPlayer";
import { AppBadges } from "@/components/blocks/AppBadges";

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPage("wahlometer");
  return {
    title: frontmatter.seo.title,
    description: frontmatter.seo.description,
  };
}

const comparisonRows = [
  {
    left: "basiert auf Versprechen",
    leftDescription:
      "Der Wahl-O-Mat basiert auf Wahlversprechen der Parteien. Wie sich diese Versprechen dann tatsächlich auf die Gesetzgebung auswirken, wird nicht abgebildet.",
    right: "basiert auf Fakten",
    rightDescription:
      "Der Wahl-O-Meter basiert auf den tatsächlichen Abstimmungsergebnissen im Bundestag und gleicht diese mit den Positionen der Nutzer ab.",
  },
  {
    left: "Parteien haben Finger im Spiel",
    leftDescription:
      "Beim Wahl-O-Mat geben die Parteien ihre theoretischen Positionen zu vorgefertigten Statements über die Zukunft ab.",
    right: "Parteien wird auf Finger geschaut",
    rightDescription:
      "Der Wahl-O-Meter braucht keine Eigenangaben der Parteien, er zieht Parteien und Abgeordnete für ihre Arbeit in der letzten Legislaturperiode zur Rechenschaft.",
  },
  {
    left: "macht Wahlkampf einfacher",
    leftDescription:
      "Der Wahl-O-Mat hilft dabei, die Wahlversprechen der Parteien auf einige verständliche Thesen zu komprimieren.",
    right: "macht Politik transparent",
    rightDescription:
      "Der Wahl-O-Meter stellt die Abstimmungen der Parteien und Politiker im Bundestag in den Fokus und bietet so einen Einblick in den politischen Prozess.",
  },
  {
    left: "ausgesuchte Themen",
    leftDescription:
      "Der Wahl-O-Mat behandelt nur die Themen, welche von einer Redaktion für die Statements ausgesucht werden.",
    right: "alle Themen",
    rightDescription:
      "Der Wahl-O-Meter verarbeitet alle Gesetze und Anträge der vergangenen Legislaturperiode des Bundestags und ist damit nur dadurch begrenzt, wie viel Zeit du den Abstimmungen widmen möchtest.",
  },
  {
    left: "von der Regierung",
    leftDescription:
      "Der Wahl-O-Mat wird von der Bundeszentrale für politische Bildung betrieben, welche von der Bundesregierung finanziert wird.",
    right: "independent",
    rightDescription:
      "Die DEMOCRACY App und damit auch der Wahl-O-Meter sind unabhängig, gemeinnützig und spendenfinanziert – von Bürgern für Bürger.",
  },
];

const pressLogos = [
  {
    name: "Tagesschau",
    url: "https://www.youtube.com/watch?v=B1N2ySUYXBY",
  },
  {
    name: "Bayerischer Rundfunk",
    url: "https://www.br.de/nachrichten/netzwelt/bundestagswahl-alternativen-zum-wahl-o-mat",
  },
  {
    name: "Golem",
    url: "https://www.golem.de/news/democracy-der-verbesserte-wahl-o-mat-in-einer-app-1906-141599.html",
  },
  {
    name: "FOCUS",
    url: "https://www.focus.de/digital/bundestagswahl-2021-mit-dieser-app-koennen-sie-abstimmungen-im-bundestag-mit-ihren-ansichten-vergleichen_id_24262915.html",
  },
];

export default async function WahlometerPage() {
  const { frontmatter, content } = await getPage("wahlometer");

  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {frontmatter.hero?.headline ?? frontmatter.title}
        </h1>
        {frontmatter.hero?.subline && (
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {frontmatter.hero.subline}
          </p>
        )}
        <div className="mt-8">
          <AppBadges className="justify-center" />
        </div>
      </div>

      {/* MDX content */}
      <div className="prose prose-lg mx-auto mb-16 max-w-3xl prose-a:text-primary-500">
        <MDXRemote source={content} components={mdxComponents} />
      </div>

      {/* How it works video */}
      <div className="mb-16">
        <VideoPlayer
          url="https://www.youtube.com/embed/uWwQquy_MD0"
          title="Wie funktioniert der Wahl-O-Meter? (1:00)"
        />
      </div>

      {/* Press mentions */}
      <section className="mb-16 text-center">
        <h2 className="mb-8 text-xl font-semibold text-muted-foreground">
          Bekannt aus
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {pressLogos.map((press) => (
            <a
              key={press.name}
              href={press.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              {press.name}
            </a>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <ComparisonCards
        title="Was ist der Unterschied zum Wahl-O-Mat?"
        leftLabel="Wahl-O-Mat"
        rightLabel="Wahl-O-Meter"
        rows={comparisonRows}
      />

      {/* Founder quote */}
      <section className="py-12 text-center">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
          Warum gibt es uns?
        </h2>
        <blockquote className="mx-auto max-w-3xl rounded-xl bg-muted/50 p-6 text-sm leading-relaxed italic sm:p-8 sm:text-base">
          Mit DEMOCRACY geben wir Menschen die Möglichkeit, sich über die
          Abstimmungen im Bundestag zu informieren und ihre Meinung mit den der
          Parteien und Abgeordneten abzugleichen.
          <footer className="mt-4 text-sm font-semibold not-italic">
            — Marius Krüger, Gründer
          </footer>
        </blockquote>
      </section>

      {/* Final CTA */}
      <div className="text-center">
        <h2 className="mb-6 text-2xl font-bold">
          Finde die Partei, die Dich wirklich vertritt
        </h2>
        <AppBadges className="justify-center" />
      </div>
    </article>
  );
}
