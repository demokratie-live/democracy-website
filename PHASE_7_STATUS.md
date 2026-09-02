# Phase 7: Public Pages Migration - Status

## Status: ⚠️ NOT YET IMPLEMENTED

Phase 7 wurde in der PR-Beschreibung als "abgeschlossen" markiert, aber **KEINE Code-Dateien wurden tatsächlich committed**. Der letzte Commit war Phase 6 Verifikation (cecac5a).

## Was fehlt noch

### 1. Root Layout (KRITISCH)
**Datei**: `nextjs-app/src/app/layout.tsx`
- Muss aktualisiert werden mit Header + Footer Integration
- Metadata konfigurieren
- Google Fonts laden
- Root HTML-Struktur

### 2. Hauptseiten (10 Seiten - PRIORITÄT HOCH)

#### a) Homepage `/`
**Datei**: `nextjs-app/src/app/page.tsx`
- Hero Section mit App-Download-Badges
- Video-Sektion (YouTube Embed)
- 5 interaktive Feature-Badges
- Zielgruppen-Sektionen
- Presse-Logos

#### b) About Page `/about`
**Datei**: `nextjs-app/src/app/(public)/about/page.tsx`
- Projekt-Information
- CMS Content aus Pages Collection
- Team-Sektion

#### c) Bürger Page `/buerger`
**Datei**: `nextjs-app/src/app/(public)/buerger/page.tsx`
- Vorteile für Bürger
- Anleitung zur Nutzung
- CMS Content

#### d) Politiker Page `/politiker`
**Datei**: `nextjs-app/src/app/(public)/politiker/page.tsx`
- Information für Politiker
- Use Cases
- CMS Content

#### e) Engineering Page `/engineering`
**Datei**: `nextjs-app/src/app/(public)/engineering/page.tsx`
- Technische Details
- Open Source Info
- GitHub Links

#### f) Spenden Page `/spenden`
**Datei**: `nextjs-app/src/app/(public)/spenden/page.tsx`
- DonationWidget Component integrieren
- Team-Mitglieder aus CMS
- Ausgaben-Breakdown
- Volunteer-Profile

#### g) FAQ Page `/faq`
**Datei**: `nextjs-app/src/app/(public)/faq/page.tsx`
- Dynamische FAQs aus CMS
- Accordion UI
- Suchfunktion
- Kategorien

#### h) Blog Page `/blog`
**Datei**: `nextjs-app/src/app/(public)/blog/page.tsx`
- Blog-Post-Listing
- Pagination
- Featured Posts
- CMS Integration

#### i) Presse Page `/presse`
**Datei**: `nextjs-app/src/app/(public)/presse/page.tsx`
- Medienberichte-Listing
- Press Kit Downloads
- Kontakt für Medien
- CMS Integration

#### j) Kontakt Page `/kontakt`
**Datei**: `nextjs-app/src/app/(public)/kontakt/page.tsx`
- ContactForm Component integrieren
- Kontakt-Typen (contact/bug/volunteer)
- Büro-Information
- Karte (optional)

### 3. Zusätzliche Seiten (5 Seiten - STANDARD PRIORITÄT)

#### k) Datenschutz Page `/datenschutz`
**Datei**: `nextjs-app/src/app/(public)/datenschutz/page.tsx`
- Datenschutzerklärung
- CMS Content oder statisch
- Rechtliche Informationen

#### l) Impressum Page `/impressum`
**Datei**: `nextjs-app/src/app/(public)/impressum/page.tsx`
- Impressum / Legal Notice
- Kontaktdaten
- Verantwortliche Personen

#### m) Nutzungsbedingungen Page `/nutzungsbedingungen`
**Datei**: `nextjs-app/src/app/(public)/nutzungsbedingungen/page.tsx`
- Terms of Service
- Nutzungsregeln
- Rechtliche Bedingungen

#### n) Beta Page `/beta`
**Datei**: `nextjs-app/src/app/(public)/beta/page.tsx`
- BetaForm Component integrieren
- Erklärung des Beta-Programms
- Plattform-Auswahl (iOS/Android)

#### o) Abmelden Page `/abmelden`
**Datei**: `nextjs-app/src/app/(public)/abmelden/page.tsx`
- Newsletter-Abmeldung
- Unsubscribe-Bestätigung
- Query-Parameter-Handling

### 4. Unterstützende Dateien

#### Shared Layouts
**Datei**: `nextjs-app/src/app/(public)/layout.tsx`
```typescript
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
```

#### Not Found Page
**Datei**: `nextjs-app/src/app/not-found.tsx`
- 404 Fehlerseite
- Navigation zurück zur Homepage

#### Error Page
**Datei**: `nextjs-app/src/app/error.tsx`
- Error Boundary
- Fehlerbehandlung

## CMS Daten-Fetching Pattern

Jede Seite sollte Daten aus Payload CMS holen:

```typescript
import { getPayloadClient } from '@/lib/payload';

async function getPageData(slug: string) {
  const payload = await getPayloadClient();
  
  const pages = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: slug },
      published: { equals: true }
    },
    limit: 1,
  });
  
  return pages.docs[0];
}
```

## SEO Pattern

Jede Seite braucht Metadata:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Seitentitel | DEMOCRACY Deutschland e.V.',
  description: 'Seiten beschreibung für SEO',
  openGraph: {
    title: 'Seitentitel',
    description: 'Beschreibung',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seitentitel',
    description: 'Beschreibung',
  },
};
```

## Geschätzte Größe

- **15 Seiten** à ~200-400 Zeilen = **3,000-6,000 Zeilen Code**
- **Layout-Dateien**: ~200 Zeilen
- **Error-Handling**: ~100 Zeilen
- **Dokumentation**: ~500 Zeilen

**Gesamt**: ~3,800-6,800 Zeilen Code

## Zeitaufwand

- Root Layout + Error Handling: 1 Stunde
- 10 Hauptseiten: 8-12 Stunden
- 5 Zusätzliche Seiten: 2-3 Stunden
- Testing & Bugfixing: 2-3 Stunden
- Dokumentation: 1 Stunde

**Gesamt**: 14-20 Stunden Entwicklungszeit

## Nächste Schritte

1. **Root Layout aktualisieren** mit Header + Footer
2. **Homepage erstellen** (höchste Priorität)
3. **Spenden-Seite erstellen** (DonationWidget testen)
4. **FAQ-Seite erstellen** (CMS Integration testen)
5. **Restliche Hauptseiten** der Reihe nach
6. **Zusätzliche Seiten** als Stubs oder vollständig
7. **Testing** aller Seiten
8. **Dokumentation** in PHASE_7_COMPLETE.md

## Wichtige Hinweise

- **1:1 Design-Match**: Jede Seite muss genau wie die PHP-Version aussehen
- **CMS Integration**: Alle Inhalte sollten aus Payload CMS kommen wo möglich
- **Responsive Design**: Mobile-First Ansatz
- **SEO**: Vollständige Metadata für jede Seite
- **Performance**: Server-Side Rendering nutzen
- **Accessibility**: WCAG 2.1 Standards einhalten
- **German Language**: Alle Texte auf Deutsch

## Verfügbare Komponenten (aus Phase 6)

- ✅ Header (responsive mit Mobile-Menü)
- ✅ Footer (mit Newsletter)
- ✅ Hero (für Landing Pages)
- ✅ DonationWidget (für Spenden-Seite)
- ✅ ContactForm (für Kontakt-Seite)
- ✅ NewsletterForm (für Footer)
- ✅ BetaForm (für Beta-Seite)
- ✅ Button, Input, Card, Alert, Modal (UI Components)

## API Endpoints verfügbar (aus Phase 5)

- ✅ POST /api/contact
- ✅ POST /api/subscribe
- ✅ POST /api/beta
- ✅ POST /api/upload
- ✅ GET /api/donation-status
- ✅ POST /api/unsubscribe

## CMS Collections verfügbar (aus Phase 4)

- ✅ Pages (dynamische Seiten)
- ✅ FAQs (Fragen & Antworten)
- ✅ Blog Posts (Blog-Artikel)
- ✅ Media Coverage (Presse-Berichte)
- ✅ Team Members (Team-Profile)
- ✅ Roadmap (Projekt-Status)
- ✅ Media (Bilder & Dateien)
- ✅ Admin Users (Authentifizierung)
