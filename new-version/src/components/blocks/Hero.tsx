import { AppBadges } from "./AppBadges";

interface HeroProps {
  headline: string;
  subline: string;
  version?: string;
}

export function Hero({ headline, subline, version }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 py-20 text-white sm:py-28 lg:py-36">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djJoLTR2LTJoNHptMC0zMHYyaC00VjRoNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {headline}
          {version && (
            <span className="mt-2 block text-2xl font-light opacity-80 sm:text-3xl">{version}</span>
          )}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90 sm:text-xl">{subline}</p>
        <div className="mt-10">
          <AppBadges className="justify-center" />
        </div>
      </div>
    </section>
  );
}
