import Link from "next/link";
import type { FooterData } from "@/lib/schemas";
import { socialIconMap } from "./SocialIcons";

interface FooterProps {
  footer: FooterData;
}

export function Footer({ footer }: FooterProps) {
  const year = new Date().getFullYear();
  const copyrightText = footer.copyright.replace("{year}", String(year));

  return (
    <footer className="bg-[var(--color-surface-dark)] text-white/80" aria-label="Fußbereich">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand + Newsletter */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-baseline gap-1">
              <span className="font-display text-2xl text-white">DEMOCRACY</span>
              <span className="font-script text-2xl leading-none text-white">App</span>
            </Link>
            {footer.newsletter && (
              <a
                href={footer.newsletter.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--color-primary-500)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-600)]"
              >
                {footer.newsletter.label}
              </a>
            )}
          </div>

          {/* Link columns */}
          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-surface-dark-heading)]">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2" role="list">
                {column.links.map((link) => {
                  const external = link.external || link.href.startsWith("http");
                  const className = "text-sm text-white/75 transition-colors hover:text-white";
                  return (
                    <li key={link.href + link.label}>
                      {external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={className}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className={className}>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-surface-dark-heading)]">
              SOCIAL MEDIA
            </h3>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {footer.social.map((item) => {
                const Icon = item.icon ? socialIconMap[item.icon] : undefined;
                const isMail = item.href.startsWith("mailto:");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target={isMail ? undefined : "_blank"}
                    rel={isMail ? undefined : "noopener noreferrer"}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-[var(--color-primary-500)] hover:text-white"
                    aria-label={item.label}
                  >
                    {Icon ? (
                      <Icon className="h-4 w-4" />
                    ) : (
                      <span className="text-xs">{item.label.slice(0, 2)}</span>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <p>{copyrightText}</p>
          <nav className="flex flex-wrap gap-4" aria-label="Rechtliche Links">
            {footer.legal.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
