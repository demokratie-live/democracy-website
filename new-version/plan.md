# Umsetzungsplan: DEMOCRACY Website — Content as Code

## Übersicht

Dieser Plan beschreibt die schrittweise Umsetzung der neuen DEMOCRACY-Website
auf Basis von Next.js + TypeScript + MDX + YAML + Zod mit statischem Export.

beachte [./konzept.md](./konzept.md) für die zugrundeliegenden Design- und Architekturentscheidungen.

### Gesamtablauf

```mermaid
gantt
    title Umsetzungsplan — Phasen
    dateFormat  YYYY-MM-DD
    axisFormat  %d.%m

    section Phase 1 — Fundament
    Projekt-Setup & Toolchain       :p1a, 2026-04-14, 2d
    Content-Loader & Zod-Schemas    :p1b, after p1a, 2d
    Basis-Layout & Tailwind         :p1c, after p1a, 2d

    section Phase 2 — Statische Seiten
    Rechtliche Seiten (3)           :p2a, after p1b, 1d
    Info-Seiten (4)                 :p2b, after p2a, 2d
    Startseite                      :p2c, after p2b, 2d

    section Phase 3 — Dynamische Seiten
    FAQ-Seite                       :p3a, after p2c, 1d
    Spendenseite                    :p3b, after p2c, 1d
    Engineering/Roadmap             :p3c, after p2c, 1d
    Kontaktformular                 :p3d, after p2c, 1d

    section Phase 4 — Blog & Presse
    Blog-System                     :p4a, after p3a, 2d
    Pressseite                      :p4b, after p4a, 1d
    WordPress-Migration             :p4c, after p4a, 2d

    section Phase 5 — Feinschliff
    SEO & Meta-Tags                 :p5a, after p4b, 1d
    Old-URL-Redirects               :p5b, after p5a, 1d
    Performance & A11y              :p5c, after p5a, 1d

    section Phase 6 — Deployment
    CI/CD Pipeline                  :p6a, after p5b, 1d
    Statischer Export               :p6b, after p6a, 1d
    Go-Live                         :p6c, after p6b, 1d
```

---

## Phase 1 — Fundament

### 1.1 Projekt-Setup & Toolchain

**Ziel:** Lauffähiges Next.js-Projekt mit allen nötigen Tools.

**Schritte:**

1. Neues Next.js 15 Projekt erstellen (App Router, TypeScript, Tailwind CSS)
2. Verzeichnisstruktur anlegen:
   ```
   content/
     pages/
     blog/
     faq/
     team/
     press/
     roadmap/
     donate/
     site/
   src/
     app/
     components/
     lib/
       content/
       schemas/
     styles/
   public/
   tests/
   ```
3. Dependencies installieren (aktuelle versionen mindestens 3 tage alt):
   - `next`, `react`, `react-dom`
   - `typescript`, `@types/react`, `@types/node`
   - `tailwindcss`, `@tailwindcss/typography`
   - `zod`
   - `gray-matter` (Frontmatter-Parser)
   - `yaml` (YAML-Parser)
   - `next-mdx-remote` (MDX-Rendering)
   - `lucide-react` (Icons, ersetzt Font Awesome)
4. `next.config.ts` konfigurieren:
   - `output: 'export'` (statischer Export)
   - Bild-Optimierung für statischen Export
5. ESLint + Prettier + knip.dev konfigurieren
6. `.gitignore` aktualisieren

**Ergebnis:** `pnpm dev` startet, leere Seite rendert.

---

### 1.2 Content-Loader & Zod-Schemas

**Ziel:** Typsicheres Laden von MDX- und YAML-Dateien.

**Schritte:**

1. **Zod-Schemas definieren** (`src/lib/schemas/`):

   ```
   src/lib/schemas/
   ├── seo.ts          # SEO-Metadaten (title, description)
   ├── page.ts         # Seiten-Frontmatter (title, slug, seo, hero)
   ├── blog.ts         # Blog-Frontmatter (title, date, author, tags, excerpt)
   ├── faq.ts          # FAQ-Einträge (question, answer, category)
   ├── team.ts         # Team-Mitglieder (name, role, image, links)
   ├── navigation.ts   # Navigation (label, href, icon?)
   ├── donate.ts       # Spenden-Config (progress, categories, bankAccount)
   ├── roadmap.ts      # Roadmap-Ziele (title, phase, status, github?)
   ├── press.ts        # Presse/Media (title, type, url, date)
   └── index.ts        # Re-export aller Schemas
   ```

2. **Content-Loader implementieren** (`src/lib/content/`):

   ```
   src/lib/content/
   ├── load-mdx.ts     # MDX-Dateien lesen, Frontmatter extrahieren, validieren
   ├── load-yaml.ts    # YAML-Dateien lesen, parsen, validieren
   ├── queries.ts      # Abfrage-Funktionen (getAllBlogPosts, getPage, etc.)
   └── index.ts        # Re-exports
   ```

3. **Validierungs-Script** für CI:
   ```
   scripts/validate-content.ts
   ```
   → Prüft alle Content-Dateien gegen ihre Schemas.

**Ergebnis:** `loadPage("pages/test.mdx", pageSchema)` gibt typsichere Daten zurück. Ungültige Dateien werfen Build-Fehler.

---

### 1.3 Basis-Layout & Tailwind

**Ziel:** Grundlayout mit Navbar, Footer und Tailwind-Styling.

**Schritte:**

1. **Root-Layout** (`src/app/layout.tsx`):
   - HTML-Grundstruktur (lang="de")
   - Meta-Tags (Favicon, Manifest, OG-Defaults)
   - Navbar + Footer
   - Custom Fonts laden (Inter oder ähnlich)

2. **Navbar-Komponente** (`src/components/layout/Navbar.tsx`):
   - Navigation aus `content/site/navigation.yaml` laden
   - Responsive Mobile-Menü
   - Logo + Hauptnavigation + CTA-Button (Spenden)

3. **Footer-Komponente** (`src/components/layout/Footer.tsx`):
   - Footer aus `content/site/footer.yaml` laden
   - Links, Social Icons, Copyright

4. **Tailwind konfigurieren**:
   - Custom Colors (DEMOCRACY-Brandfarben)
   - Typography-Plugin für MDX-Prosa
   - Responsive Breakpoints

5. **Content-Dateien anlegen**:
   ```yaml
   # content/site/navigation.yaml
   # content/site/footer.yaml
   # content/site/seo.yaml
   ```

**Ergebnis:** Jede Seite hat automatisch Navbar + Footer. Navigation kommt aus YAML.

---

## Phase 2 — Statische Seiten

### 2.1 Rechtliche Seiten

**Ziel:** Die drei juristisch notwendigen Seiten migrieren.

**Seiten:**

| Seite               | Route                  | Content-Quelle                          |
| ------------------- | ---------------------- | --------------------------------------- |
| Impressum           | `/impressum`           | `content/pages/impressum.mdx`           |
| Datenschutz         | `/datenschutz`         | `content/pages/datenschutz.mdx`         |
| Nutzungsbedingungen | `/nutzungsbedingungen` | `content/pages/nutzungsbedingungen.mdx` |

**Schritte:**

1. MDX-Komponenten-Provider einrichten (`src/components/mdx/MDXComponents.tsx`)
2. Generische Seitenkomponente erstellen, die MDX-Inhalt rendert
3. Bestehende Inhalte aus PHP-Templates in MDX-Dateien übertragen
4. Seiten-Routen im App Router anlegen

**Ergebnis:** Drei vollständige rechtliche Seiten mit korrektem Inhalt.

---

### 2.2 Info-Seiten

**Ziel:** Informationsseiten migrieren.

**Seiten:**

| Seite      | Route         | Besonderheiten                    |
| ---------- | ------------- | --------------------------------- |
| Über uns   | `/ueber-uns`  | TeamGrid-Komponente, ValueCards   |
| Bürger     | `/buerger`    | Reine MDX-Seite                   |
| Politiker  | `/politiker`  | Reine MDX-Seite                   |
| Wahlometer | `/wahlometer` | App-Screenshots, Video-Einbettung |

**Schritte:**

1. **Team-Daten** erstellen (`content/team/members.yaml`)
2. **TeamGrid-Komponente** bauen (liest Team aus YAML)
3. **ValueCards-Komponente** bauen (6 Werte-Karten)
4. **AppBadges-Komponente** (App Store + Play Store Links)
5. **VideoPlayer-Komponente** (für Tutorial-Videos)
6. MDX-Inhalte aus PHP-Templates übertragen
7. Seiten-Routen anlegen

**Ergebnis:** Alle Info-Seiten mit korrektem Inhalt und interaktiven Komponenten.

---

### 2.3 Startseite

**Ziel:** Landing Page migrieren.

**Schritte:**

1. **Hero-Komponente** mit Headline, Subline, CTA
2. **App-Download-Section** mit Badges
3. **Feature-Sections** (Wahlometer, Abstimmungen, Vergleich)
4. **Video-Section** mit Tutorial-Videos
5. **Call-to-Action-Section** (Spenden, Mitmachen)
6. Content aus `content/pages/home.mdx`

**Ergebnis:** Vollständige Startseite mit allen Sektionen.

---

## Phase 3 — Dynamische Seiten

### Übersicht der Komponenten

```mermaid
graph TD
    subgraph "YAML-Datenquellen"
        FAQ_DATA["content/faq/allgemein.yaml"]
        DONATE_DATA["content/donate/config.yaml"]
        ROADMAP_DATA["content/roadmap/goals.yaml"]
    end

    subgraph "Zod-Validierung"
        FAQ_SCHEMA["faqSchema"]
        DONATE_SCHEMA["donateConfigSchema"]
        ROADMAP_SCHEMA["roadmapSchema"]
    end

    subgraph "React-Komponenten"
        FAQ_COMP["FAQAccordion"]
        DONATE_COMP["DonateBox + ProgressBar"]
        ROADMAP_COMP["RoadmapTimeline"]
        CONTACT_COMP["ContactForm"]
    end

    FAQ_DATA --> FAQ_SCHEMA --> FAQ_COMP
    DONATE_DATA --> DONATE_SCHEMA --> DONATE_COMP
    ROADMAP_DATA --> ROADMAP_SCHEMA --> ROADMAP_COMP

   style FAQ_DATA fill:#fff8e155
   style DONATE_DATA fill:#fff8e155
   style ROADMAP_DATA fill:#fff8e155
```

---

### 3.1 FAQ-Seite

**Schritte:**

1. FAQ-Daten in `content/faq/allgemein.yaml` übertragen (aus DB/SAI)
2. `FAQAccordion`-Komponente bauen (Aufklapp-Verhalten, Kategorien)
3. Seite `/faq` anlegen — lädt YAML, rendert Accordion
4. Optional: Kategorie-Filter

---

### 3.2 Spendenseite

**Schritte:**

1. Spenden-Config in `content/donate/config.yaml`
   - Fortschrittsbalken-Werte (`progress.current`, `progress.goal`)
   - Bankverbindung
   - Kategorien (Server, Entwicklung, etc.)
   - PayPal-Link
2. Komponenten bauen:
   - `DonateBox` (Fortschrittsbalken + Zahlen)
   - `DonateCategories` (Aufschlüsselung)
   - `BankTransferInfo` (IBAN, BIC)
3. Seite `/spenden` anlegen

**Update-Workflow für Fortschrittsbalken:**

```yaml
# Einfach in content/donate/config.yaml ändern:
progress:
  current: 3200 # ← Wert aktualisieren
  goal: 5000
```

→ PR öffnen → Merge → automatisch deployed.

---

### 3.3 Engineering/Roadmap

**Schritte:**

1. Roadmap-Daten in `content/roadmap/goals.yaml` übertragen
2. `RoadmapTimeline`-Komponente bauen:
   - 3 Phasen: Beta, MVP, Dream
   - Status-Icons (erledigt, in Arbeit, geplant)
   - Optional: GitHub-Issue-Links
3. Seite `/engineering` anlegen

---

### 3.4 Kontaktformular

**Schritte:**

1. Externen Formular-Service einrichten (Formspree oder Web3Forms)
2. `ContactForm`-Komponente bauen:
   - Felder: Vorname, Nachname, E-Mail, Nachricht
   - Client-seitige Validierung (Zod)
   - Absende-Logik (fetch an externen Service)
   - Erfolgs-/Fehler-Meldung
3. Seite `/kontakt` anlegen

---

## Phase 4 — Blog & Presse

### 4.1 Blog-System

**Architektur:**

```mermaid
flowchart TD
    subgraph "Content"
        B1["content/blog/<br/>2026-04-10-post.mdx"]
        B2["content/blog/<br/>2025-12-01-post.mdx"]
        B3["content/blog/<br/>...weitere"]
    end

    subgraph "Build-Time"
        QUERY["getAllBlogPosts()<br/>sortiert nach Datum"]
        STATIC["generateStaticParams()<br/>Slug-Liste"]
    end

    subgraph "Seiten"
        INDEX["/blog<br/>Übersichtsseite"]
        DETAIL["/blog/[slug]<br/>Einzelseite"]
    end

    B1 --> QUERY
    B2 --> QUERY
    B3 --> QUERY
    QUERY --> INDEX
    QUERY --> STATIC --> DETAIL

   style INDEX fill:#e3f2fd55
   style DETAIL fill:#e3f2fd55
```

**Schritte:**

1. Blog-Abfragefunktionen implementieren:
   - `getAllBlogPosts()` — alle Artikel sortiert nach Datum
   - `getBlogPost(slug)` — einzelnen Artikel laden
   - `getBlogPostsByTag(tag)` — nach Tag filtern
2. Blog-Index (`/blog/page.tsx`):
   - Artikelliste mit Titel, Datum, Excerpt, Bild
   - Pagination (statisch generiert)
3. Blog-Einzelseite (`/blog/[slug]/page.tsx`):
   - `generateStaticParams()` für alle Slugs
   - MDX-Rendering mit Komponenteen
4. Blog-Listing-Komponente (`BlogCard`, `BlogList`)

---

### 4.2 Pressseite

**Schritte:**

1. Presse-Daten in `content/press/media.yaml`:
   - Kategorien: Presse, Publikationen, Downloads
   - Je Eintrag: Titel, Link, Datum, Typ, Bild
2. `MediaGrid`-Komponente mit Kategorie-Tabs
3. Blog-Teaser auf Pressseite (letzte 3 Artikel)
4. Seite `/presse` anlegen

---

### 4.3 WordPress-Migration

**Schritte:**

1. Bestehende WordPress-Posts exportieren (WP-Export oder SQL)
2. Posts in MDX-Dateien konvertieren:
   - Frontmatter generieren (title, date, author, tags)
   - HTML → Markdown konvertieren
   - Bilder in `/public/images/blog/` kopieren
3. Script schreiben: `scripts/migrate-wordpress.ts`
4. Qualitätsprüfung der migrierten Artikel

---

## Phase 5 — Feinschliff

### 5.1 SEO & Meta-Tags

**Schritte:**

1. Globale SEO-Defaults aus `content/site/seo.yaml`
2. Per-Page SEO aus MDX-Frontmatter
3. `generateMetadata()` in jeder Seite
4. Open Graph Tags (og:title, og:description, og:image)
5. `sitemap.xml` generieren (via `next-sitemap` oder manuell)
6. `robots.txt` erstellen

---

### 5.2 Old-URL-Redirects

**Ziel:** Alte Hash-URLs auf neue Pfade umleiten.

**Schritte:**

1. Client-seitiges Redirect-Script für `/#!page`-URLs:
   ```typescript
   // src/app/layout.tsx oder separates Script
   if (window.location.hash.startsWith("#!")) {
     const page = window.location.hash.replace("#!", "");
     const redirectMap = {
       home: "/",
       about: "/ueber-uns",
       donate: "/spenden",
       // ...
     };
     if (redirectMap[page]) {
       window.location.replace(redirectMap[page]);
     }
   }
   ```
2. 404-Seite mit hilfreichen Links
3. WordPress-URL-Redirects (`/blog/year/month/slug` → `/blog/slug`)

---

### 5.3 Performance & Accessibility

**Schritte:**

1. Bilder optimieren (WebP-Format, responsive Größen)
2. Fonts optimieren (Subset, `font-display: swap`)
3. Lighthouse-Audit (Ziel: 95+ in allen Kategorien)
4. A11y-Prüfung:
   - Korrekte Überschriften-Hierarchie
   - Alt-Texte für alle Bilder
   - Tastatur-Navigation
   - Farbkontrast
5. Skip-to-content Link
6. ARIA-Labels wo nötig

---

## Phase 6 — Deployment

### 6.1 CI/CD Pipeline

```mermaid
flowchart TD
    subgraph "GitHub Actions"
        A["Push / PR"] --> B["Install (pnpm)"]
        B --> C["Lint (eslint + tsc)"]
        C --> D["Validate Content<br/>(Zod-Schemas)"]
        D --> E["Build<br/>(next build)"]
        E --> F{"Branch?"}
        F -->|"PR"| G["Preview Deploy"]
        F -->|"main"| H["Production Deploy"]
    end

    subgraph "Hosting"
        G --> I["Preview URL<br/>(Cloudflare Pages /<br/>GitHub Pages)"]
        H --> J["democracy-deutschland.de"]
    end

      style A fill:#e3f2fd55
      style J fill:#c8e6c955
```

**Schritte:**

1. GitHub Actions Workflow erstellen:
   ```yaml
   # .github/workflows/deploy.yml
   - pnpm install
   - pnpm lint
   - pnpm validate-content
   - pnpm build
   - Deploy to GitHub Pages / Cloudflare Pages
   ```
2. Branch-Protection: PR muss CI bestehen
3. Preview-Deployments für PRs

---

### 6.2 Statischer Export konfigurieren

**Schritte:**

1. `next.config.ts` — `output: 'export'`
2. Bilder: `unoptimized: true` (kein Image-Server)
3. Build testen: `pnpm build` → `/out/` Verzeichnis
4. Lokaler Test: `npx serve out/`

---

### 6.3 Go-Live

**Schritte:**

1. DNS konfigurieren (democracy-deutschland.de → Hosting)
2. SSL-Zertifikat (automatisch bei Cloudflare/GitHub Pages)
3. Finale Prüfung:
   - Alle Seiten erreichbar
   - Alle Redirects funktionieren
   - Kontaktformular funktioniert
   - SEO-Tags korrekt
   - Mobile-Ansicht korrekt
4. Altes PHP-System deaktivieren

---

## Redaktions-Workflow (nach Go-Live)

### Content ändern

```mermaid
sequenceDiagram
    participant R as Redakteur / Copilot
    participant G as GitHub (PR)
    participant CI as CI/CD
    participant S as Website (CDN)

    R->>G: Datei ändern + PR öffnen
    G->>CI: Build + Validierung
    CI-->>G: ✅ Erfolgreich / ❌ Fehler

    alt Validierung OK
        G->>G: Review + Merge
        G->>CI: Production Build
        CI->>S: Deploy
        S-->>R: Änderung live
    else Validierung fehlgeschlagen
        CI-->>R: Fehler anzeigen (z.B. fehlendes Feld)
        R->>G: Fix + erneuter Push
    end
```

### Typische Aufgaben

| Aufgabe                    | Was tun         | Datei                                            |
| -------------------------- | --------------- | ------------------------------------------------ |
| FAQ hinzufügen             | Eintrag in YAML | `content/faq/allgemein.yaml`                     |
| Blogpost schreiben         | Neue MDX-Datei  | `content/blog/2026-xx-xx-titel.mdx`              |
| Team-Mitglied ändern       | YAML bearbeiten | `content/team/members.yaml`                      |
| Spendenstand aktualisieren | YAML bearbeiten | `content/donate/config.yaml`                     |
| Navigation ändern          | YAML bearbeiten | `content/site/navigation.yaml`                   |
| Seite inhaltlich ändern    | MDX bearbeiten  | `content/pages/seitenname.mdx`                   |
| Neue Seite erstellen       | MDX + Route     | `content/pages/neu.mdx` + `src/app/neu/page.tsx` |

---

## Datei-Checkliste

### Content-Dateien (zu erstellen)

- [ ] `content/pages/home.mdx`
- [ ] `content/pages/ueber-uns.mdx`
- [ ] `content/pages/wahlometer.mdx`
- [ ] `content/pages/buerger.mdx`
- [ ] `content/pages/politiker.mdx`
- [ ] `content/pages/engineering.mdx`
- [ ] `content/pages/spenden.mdx`
- [ ] `content/pages/kontakt.mdx`
- [ ] `content/pages/impressum.mdx`
- [ ] `content/pages/datenschutz.mdx`
- [ ] `content/pages/nutzungsbedingungen.mdx`
- [ ] `content/faq/allgemein.yaml`
- [ ] `content/team/members.yaml`
- [ ] `content/donate/config.yaml`
- [ ] `content/roadmap/goals.yaml`
- [ ] `content/press/media.yaml`
- [ ] `content/site/navigation.yaml`
- [ ] `content/site/footer.yaml`
- [ ] `content/site/seo.yaml`
- [ ] `content/blog/*.mdx` (WordPress-Migration)

### Zod-Schemas (zu implementieren)

- [ ] `src/lib/schemas/seo.ts`
- [ ] `src/lib/schemas/page.ts`
- [ ] `src/lib/schemas/blog.ts`
- [ ] `src/lib/schemas/faq.ts`
- [ ] `src/lib/schemas/team.ts`
- [ ] `src/lib/schemas/navigation.ts`
- [ ] `src/lib/schemas/donate.ts`
- [ ] `src/lib/schemas/roadmap.ts`
- [ ] `src/lib/schemas/press.ts`

### Komponenten (zu implementieren)

- [ ] `src/components/layout/Navbar.tsx`
- [ ] `src/components/layout/Footer.tsx`
- [ ] `src/components/blocks/Hero.tsx`
- [ ] `src/components/blocks/Callout.tsx`
- [ ] `src/components/blocks/TeamGrid.tsx`
- [ ] `src/components/blocks/FAQAccordion.tsx`
- [ ] `src/components/blocks/DonateBox.tsx`
- [ ] `src/components/blocks/ProgressBar.tsx`
- [ ] `src/components/blocks/MediaGrid.tsx`
- [ ] `src/components/blocks/BlogList.tsx`
- [ ] `src/components/blocks/BlogCard.tsx`
- [ ] `src/components/blocks/ContactForm.tsx`
- [ ] `src/components/blocks/AppBadges.tsx`
- [ ] `src/components/blocks/VideoPlayer.tsx`
- [ ] `src/components/blocks/RoadmapTimeline.tsx`
- [ ] `src/components/blocks/ValueCards.tsx`
- [ ] `src/components/blocks/BankTransferInfo.tsx`
- [ ] `src/components/mdx/MDXComponents.tsx`

### Seiten (App Router)

- [ ] `src/app/layout.tsx`
- [ ] `src/app/page.tsx` (Home)
- [ ] `src/app/ueber-uns/page.tsx`
- [ ] `src/app/wahlometer/page.tsx`
- [ ] `src/app/buerger/page.tsx`
- [ ] `src/app/politiker/page.tsx`
- [ ] `src/app/engineering/page.tsx`
- [ ] `src/app/spenden/page.tsx`
- [ ] `src/app/faq/page.tsx`
- [ ] `src/app/presse/page.tsx`
- [ ] `src/app/blog/page.tsx`
- [ ] `src/app/blog/[slug]/page.tsx`
- [ ] `src/app/kontakt/page.tsx`
- [ ] `src/app/impressum/page.tsx`
- [ ] `src/app/datenschutz/page.tsx`
- [ ] `src/app/nutzungsbedingungen/page.tsx`
- [ ] `src/app/not-found.tsx`

### Infrastruktur

- [ ] `next.config.ts`
- [ ] `tailwind.config.ts`
- [ ] `tsconfig.json`
- [ ] `package.json`
- [ ] `.eslintrc.json`
- [ ] `.prettierrc`
- [ ] `.github/workflows/deploy.yml`
- [ ] `scripts/validate-content.ts`
- [ ] `scripts/migrate-wordpress.ts`

---

## Abhängigkeiten zwischen Phasen

```mermaid
graph TD
    P1A["1.1 Projekt-Setup"] --> P1B["1.2 Content-Loader"]
    P1A --> P1C["1.3 Basis-Layout"]
    P1B --> P2A["2.1 Rechtliche Seiten"]
    P1C --> P2A
    P2A --> P2B["2.2 Info-Seiten"]
    P2B --> P2C["2.3 Startseite"]
    P1B --> P3A["3.1 FAQ"]
    P1B --> P3B["3.2 Spenden"]
    P1B --> P3C["3.3 Roadmap"]
    P1C --> P3D["3.4 Kontakt"]
    P2A --> P4A["4.1 Blog-System"]
    P4A --> P4B["4.2 Pressseite"]
    P4A --> P4C["4.3 WP-Migration"]
    P2C --> P5A["5.1 SEO"]
    P5A --> P5B["5.2 Redirects"]
    P5A --> P5C["5.3 Performance"]
    P5B --> P6A["6.1 CI/CD"]
    P6A --> P6B["6.2 Static Export"]
    P6B --> P6C["6.3 Go-Live"]

   style P1A fill:#e3f2fd55
   style P6C fill:#c8e6c955

   classDef parallel fill:#fff8e155
    class P3A,P3B,P3C,P3D parallel
    class P5B,P5C parallel
```

**Parallele Arbeit möglich:**

- Phase 3 (FAQ, Spenden, Roadmap, Kontakt) kann parallel nach Phase 1 starten
- Phase 5.2 und 5.3 können parallel laufen
- WordPress-Migration (4.3) kann unabhängig vom Blog-System vorbereitet werden

---

## Technische Entscheidungen (Zusammenfassung)

| Entscheidung    | Wahl                            | Alternative              | Begründung                                    |
| --------------- | ------------------------------- | ------------------------ | --------------------------------------------- |
| Framework       | Next.js 15                      | Astro, Gatsby            | App Router, MDX-Support, großes Ecosystem     |
| Sprache         | TypeScript                      | JavaScript               | Typsicherheit, bessere DX, Zod-Integration    |
| Content-Format  | MDX + YAML                      | Nur MDX, Nur JSON        | Optimal: MDX für Text, YAML für Daten         |
| Validierung     | Zod                             | Yup, Joi                 | TypeScript-first, Build-time Fehler           |
| CSS             | Tailwind CSS                    | Bootstrap 5, CSS Modules | Modern, kein CSS-Overhead, Copilot-freundlich |
| Icons           | Lucide React                    | Font Awesome             | Treeshakable, SVG, kein Font-Laden            |
| Deployment      | Static Export                   | SSR, ISR                 | Kein Server nötig, schnell, günstig           |
| Hosting         | GitHub Pages / Cloudflare Pages | Vercel, Netlify          | Kostenlos, einfach, Git-Integration           |
| Formular        | Formspree / Web3Forms           | Eigener Server           | Statisch kompatibel, kein Backend nötig       |
| Package Manager | pnpm                            | npm, yarn                | Schneller, strenger, Workspace-Support        |
