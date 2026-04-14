import type { Metadata } from "next";
import { getPage, getTeam } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";
import { TeamGrid } from "@/components/blocks/TeamGrid";
import { ValueCards } from "@/components/blocks/ValueCards";
import { VideoPlayer } from "@/components/blocks/VideoPlayer";
import { Search, Shield, Heart } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const { frontmatter } = await getPage("ueber-uns");
  return {
    title: frontmatter.seo.title,
    description: frontmatter.seo.description,
  };
}

const philosophyPillars = [
  {
    icon: <Search className="h-8 w-8" />,
    title: "TRANSPARENT",
    description: "Open Source & Open Book",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "NICHT PROFITORIENTIERT",
    description: "kein Datenverkauf, keine Werbung",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "DATENSPARSAM",
    description: "geringstmögliche Datensammlung",
  },
];

export default async function UeberUnsPage() {
  const { frontmatter, content } = await getPage("ueber-uns");
  const team = await getTeam();

  return (
    <article className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero */}
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {frontmatter.hero?.headline ?? frontmatter.title}
        </h1>
        {frontmatter.hero?.subline && (
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {frontmatter.hero.subline}
          </p>
        )}
      </div>

      {/* Intro text from MDX */}
      <div className="prose prose-lg mx-auto mb-16 max-w-3xl text-center prose-a:text-primary-500">
        <MDXRemote source={content} components={mdxComponents} />
      </div>

      {/* Mission video */}
      <div className="mb-16">
        <VideoPlayer
          url="https://www.youtube.com/embed/E3KvgGrGQO4"
          title="Initiativenleitbild / Mission Statement"
        />
      </div>

      {/* Value cards */}
      <ValueCards />

      {/* Team */}
      <TeamGrid team={team} />

      {/* Philosophy */}
      <section className="py-12">
        <h2 className="mb-4 text-center text-2xl font-bold sm:text-3xl">
          Unsere Philosophie
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
          Unsere Arbeit ist unabhängig, überparteilich, allgemeinnützig und
          nichtkommerziell – von Menschen für Menschen
        </p>
        <div className="grid gap-8 sm:grid-cols-3">
          {philosophyPillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-500">
                {pillar.icon}
              </div>
              <h3 className="mb-1 text-sm font-bold uppercase tracking-wide">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Founder quote */}
        <blockquote className="mx-auto mt-12 max-w-3xl rounded-xl bg-muted/50 p-6 text-sm leading-relaxed italic sm:p-8 sm:text-base">
          Mit DEMOCRACY wollen wir der Zivilgesellschaft eine Infrastruktur zur
          Verfügung stellen, die das Funktionieren von tatsächlicher Demokratie
          begünstigt. Der Weisheit letzter Schluss liegt für uns in der
          solidarischen Kooperation zum Vorteil aller. Für uns ist es
          selbstverständlich, unseren Source-Code und unsere Bücher offen zu
          legen (Transparenz). Und weil Profitinteressen die Idee nur
          korrumpieren würden, haben wir uns auch äußerlich eine Rechtsform
          gegeben, die eine Verfremdung oder Bereicherungsabsicht per Satzung
          für immer ausschließt. DEMOCRACY ist und bleibt spendenfinanziert.
          Daten, die bei der Nutzung der App entstehen, sind für uns keine
          handelbaren Wirtschaftsgüter, sondern im Sinne der informationellen
          Selbstbestimmung zu vermeiden bzw. zu schützen.
          <footer className="mt-4 text-sm font-semibold not-italic">
            — Marius Krüger, Gründer
          </footer>
        </blockquote>
      </section>
    </article>
  );
}
