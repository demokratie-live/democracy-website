import Link from "next/link";

interface HeroWithPhoneProps {
  headline: string;
  version?: string;
  subline: string;
  phoneImage?: string;
  phoneAlt?: string;
  browserUrl?: string;
  apkUrl?: string;
  aabUrl?: string;
  apkLabel?: string;
}

export function HeroWithPhone({
  headline,
  version,
  subline,
  phoneImage = "/files/images/List.png",
  phoneAlt = "DEMOCRACY App Screenshot",
  browserUrl = "https://democracy-app.de",
  apkUrl = "/files/download/democracy-app.apk",
  aabUrl = "/files/download/democracy-app.aab",
  apkLabel = "APK (v1.5.10)",
}: HeroWithPhoneProps) {
  return (
    <section className="democracy-gradient relative overflow-hidden py-14 text-white lg:py-24">
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Phone mockup */}
        <div className="order-2 flex justify-center lg:order-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={phoneImage} alt={phoneAlt} className="max-h-[520px] w-auto drop-shadow-2xl" />
        </div>

        {/* Brand block */}
        <div className="order-1 text-center lg:order-2 lg:text-left">
          <h1 className="font-display text-5xl tracking-wide sm:text-6xl lg:text-7xl">
            {headline}
          </h1>
          {version && <p className="mt-2 font-display text-3xl sm:text-4xl">{version}</p>}
          <p className="mt-4 font-display text-2xl sm:text-3xl">{subline}</p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-center lg:justify-start">
            <a
              href="https://apps.apple.com/de/app/democracy/id1341311162"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=de.democracydeutschland.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.56.69.56 1.19s-.22.92-.56 1.19l-1.97 1.13-2.5-2.5 2.5-2.5 1.97 1.13v.36zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
              </svg>
              Google Play
            </a>
          </div>

          <div className="mt-4 space-y-1 text-sm text-white/90 lg:text-base">
            <p>
              <Link
                href={browserUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                zur Browserversion
              </Link>
            </p>
            <p>
              <a
                href={aabUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                AAB
              </a>
              {" / "}
              <a
                href={apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                {apkLabel}
              </a>{" "}
              laden
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
