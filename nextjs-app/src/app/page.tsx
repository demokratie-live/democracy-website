import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <div>
      <Hero
        title="DEMOCRACY"
        subtitle="Digitale Demokratie für Deutschland"
        description="Stimme über Abstimmungen im Bundestag direkt über die DEMOCRACY App ab."
        primaryCTA={{
          text: "App herunterladen",
          href: "#download",
        }}
        secondaryCTA={{
          text: "Mehr erfahren",
          href: "/about",
        }}
      />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            DEMOCRACY bringt Demokratie ins 21. Jahrhundert
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Mit der DEMOCRACY App kannst du über alle Abstimmungen im Bundestag
            direkt abstimmen. Deine Stimme wird gezählt und an deinen
            Bundestagsabgeordneten übermittelt.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            App herunterladen
          </h2>
          <div className="flex flex-wrap justify-center gap-4" id="download">
            <a
              href="https://apps.apple.com/de/app/democracy-deutschland/id1341311370"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="/images/app-store-badge.svg"
                alt="Download on the App Store"
                className="h-14"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=de.democracy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="/images/google-play-badge.png"
                alt="Get it on Google Play"
                className="h-14"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
