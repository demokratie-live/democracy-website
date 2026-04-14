import Link from "next/link";
import { Home, Search, HelpCircle, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-7xl font-bold text-primary-500">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-foreground">Seite nicht gefunden</h2>
      <p className="mt-3 max-w-md text-muted-foreground">
        Die angeforderte Seite existiert nicht oder wurde verschoben. Vielleicht findest du hier,
        was du suchst:
      </p>

      <nav className="mt-8 grid gap-3 sm:grid-cols-2" aria-label="Hilfreiche Links">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary-500"
        >
          <Home className="h-4 w-4" />
          Startseite
        </Link>
        <Link
          href="/ueber-uns"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary-500"
        >
          <Search className="h-4 w-4" />
          Über Uns
        </Link>
        <Link
          href="/faq"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary-500"
        >
          <HelpCircle className="h-4 w-4" />
          FAQ
        </Link>
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary-500"
        >
          <Mail className="h-4 w-4" />
          Kontakt
        </Link>
      </nav>
    </div>
  );
}
