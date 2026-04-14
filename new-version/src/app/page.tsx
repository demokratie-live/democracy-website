import type { Metadata } from "next";
import Link from "next/link";
import { getPage } from "@/lib/content";
import { Hero } from "@/components/blocks/Hero";
import { VideoPlayer } from "@/components/blocks/VideoPlayer";
import { AppBadges } from "@/components/blocks/AppBadges";
import {
  List,
  FileText,
  Vote,
  BarChart3,
  PieChart,
  Users,
  Landmark,
  ArrowRight,
} from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPage("home");
  return {
    title: frontmatter.seo.title,
    description: frontmatter.seo.description,
  };
}

const features = [
  {
    icon: <List className="h-6 w-6" />,
    title: "Wähle",
    description:
      "einen aktuellen, vergangenen oder populären Vorgang des Deutschen Bundestages",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Informiere",
    description:
      "Dich über den Vorgang mithilfe der offiziellen Parlamentsdokumente",
  },
  {
    icon: <Vote className="h-6 w-6" />,
    title: "Stimme",
    description:
      "selbst über den Vorgang ab, als wärst Du Bundestagsabgeordneter",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Vergleiche",
    description:
      "Dein Abstimmungsverhalten mit der Community und dem Bundestag",
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: "Analysiere",
    description:
      "Deine Übereinstimmung mit dem Bundestag, den Parteien und Kandidaten",
  },
];

const targetAudiences = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Für Bürger,",
    subtitle: "die sich mehr Transparenz & Teilhabe wünschen",
    description:
      "Ob jung oder alt, ob bereits Experte oder bislang uninformiert. DEMOCRACY ist ein politisches Werkzeug für alle, die sich mehr Transparenz und Teilhabe wünschen.",
    link: "/buerger",
  },
  {
    icon: <Landmark className="h-8 w-8" />,
    title: "Für Politiker,",
    subtitle: "die erklären wollen, warum sie wie entscheiden",
    description:
      "Ob parlamentarischer Neuling oder abgeklärter Abgeordneter. DEMOCRACY bietet Dir die Möglichkeit, Deinen wichtigsten Stakeholdern Gehör zu schenken: den Bürgern.",
    link: "/politiker",
  },
];

const pressLinks = [
  {
    name: "hr-iNFO",
    url: "https://www.hr-inforadio.de/podcast/jung-macht-politik/jung-macht-politik-marius-krueger--per-app-zum-virtuellen-bundestagsabgeordneten,podcast-episode-76718.html",
  },
  {
    name: "Tagesschau",
    url: "https://www.youtube.com/watch?v=B1N2ySUYXBY",
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

export default async function Home() {
  const { frontmatter } = await getPage("home");

  return (
    <>
      {/* Hero */}
      <Hero
        headline={frontmatter.hero?.headline ?? frontmatter.title}
        subline={frontmatter.hero?.subline ?? ""}
        version="1.5"
      />

      {/* Video section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-center text-2xl font-bold sm:text-3xl">
            Worum geht es bei DEMOCRACY?
          </h2>
          <p className="mb-8 text-center text-muted-foreground">(2:30)</p>
          <VideoPlayer
            url="https://www.youtube.com/embed/DFXcnRdXA7k"
            title="Worum geht es bei DEMOCRACY? (2:30)"
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-bold sm:text-3xl">
            Alle Funktionen von DEMOCRACY
          </h2>
          <div className="space-y-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-border"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-500">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target audiences */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-bold sm:text-3xl">
            Für wen ist DEMOCRACY?
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {targetAudiences.map((audience) => (
              <div
                key={audience.title}
                className="rounded-xl p-6 ring-1 ring-border"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-500">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-bold text-primary-600">
                  {audience.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-muted-foreground">
                  {audience.subtitle}
                </p>
                <p className="mb-4 text-sm text-muted-foreground">
                  {audience.description}
                </p>
                <Link
                  href={audience.link}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600"
                >
                  Mehr erfahren
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-16 text-center">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-xl font-semibold text-muted-foreground">
            Bekannt aus
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {pressLinks.map((press) => (
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
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary-50 py-16 text-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            Jetzt DEMOCRACY herunterladen
          </h2>
          <p className="mb-8 text-muted-foreground">
            Kostenlos, gemeinnützig und open source – von Bürgern für Bürger.
          </p>
          <AppBadges className="justify-center" />
        </div>
      </section>
    </>
  );
}
