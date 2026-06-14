# DEMOCRACY Deutschland – Website (Next.js)

## Project Overview

This is the official website for [DEMOCRACY Deutschland e.V.](https://www.democracy-deutschland.de/), a German civic-tech nonprofit building transparency tools for parliamentary democracy. The app lets citizens follow and vote on proceedings of the German Bundestag.

**Tech Stack:** Next.js 16, React 19, TypeScript (strict), Tailwind CSS v4, Zod v4, pnpm

## Commands

```bash
pnpm dev              # Start dev server (Turbopack)
pnpm build            # Production build (static export)
pnpm lint             # ESLint
pnpm validate-content # Validate all content files against Zod schemas
pnpm format           # Auto-format all files (Prettier)
pnpm format:check     # Check formatting without changes
pnpm test:e2e         # Run Playwright smoke tests (build first!)
```

## Commit Workflow

- Commit finished, self-contained fixes and features promptly instead of leaving them uncommitted.
- Use concise English commit subjects.
- Keep each commit scoped to the files that belong to the same change; do not bundle unrelated workspace files.

## Architecture

```
new-version/
├── content/              # ALL content lives here (MDX, YAML)
│   ├── pages/            # Page content as MDX (home, wahlometer, ueber-uns, etc.)
│   ├── blog/             # Blog posts as MDX
│   ├── site/             # Site-wide config YAML (navigation, footer, seo)
│   ├── team/             # Team member YAML files
│   ├── faq/              # FAQ entries YAML
│   ├── donate/           # Donation page data YAML
│   ├── press/            # Press references YAML
│   └── roadmap/          # Roadmap entries YAML
├── src/
│   ├── app/              # Next.js App Router pages (thin shells)
│   ├── components/
│   │   ├── blocks/       # Page-level components (Hero, VideoPlayer, AppBadges)
│   │   ├── mdx/          # MDX-specific components (Section, Grid, CTA, etc.)
│   │   ├── layout/       # Layout components (Navbar, Footer)
│   │   └── ui/           # Shared UI primitives
│   └── lib/
│       ├── content/      # Content loading utilities (loadMdx, loadYaml, queries)
│       └── schemas/      # Zod validation schemas for all content types
├── scripts/
│   └── validate-content.ts  # Content validation script
└── public/               # Static assets
```

## Content System

### Core Principle

**Page components (`page.tsx`) are thin shells.** All content and structure lives in MDX files. The page only loads MDX and renders it with `<MDXRemote>`.

### Content Loading

- **MDX**: `loadMdx(path)` / `loadAllMdx(dir)` in `src/lib/content/load-mdx.ts` — uses `gray-matter` for frontmatter + Zod validation
- **YAML**: `loadYaml(path)` in `src/lib/content/load-yaml.ts`
- **Queries**: `src/lib/content/queries.ts` — `getPage()`, `getAllBlogPosts()`, `getNavigation()`, `getTeam()`, etc.

### Frontmatter Schema

Pages use `pageFrontmatterSchema` from `src/lib/schemas/page.ts`:

```yaml
---
title: "Page Title"
slug: "/path"
seo:
  title: "SEO Title"
  description: "SEO description"
hero:
  headline: "Hero Headline"
  subline: "Optional subline"
---
```

### Content Validation

Run `pnpm validate-content` to validate ALL content files against their Zod schemas. This catches frontmatter errors, missing required fields, and type mismatches.

## MDX Component System

### How It Works

All MDX components are registered in `src/components/mdx/MDXComponents.tsx` as the `mdxComponents` export. Pages render MDX via:

```tsx
<MDXRemote source={content} components={mdxComponents} />
```

### Available MDX Components

| Component                               | Purpose                                                                                        | Location                   |
| --------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------- |
| `<Section>`                             | Layout wrapper with `bg` and `centered` props                                                  | `mdx/Section.tsx`          |
| `<Grid>`                                | Responsive grid (`cols={2\|3}`)                                                                | `mdx/Grid.tsx`             |
| `<CTA>`                                 | Call-to-action section                                                                         | `mdx/CTA.tsx`              |
| `<FeatureCard>`                         | Feature card with icon string                                                                  | `mdx/FeatureCard.tsx`      |
| `<InfoCard>`                            | Info card with icon, subtitle, link                                                            | `mdx/InfoCard.tsx`         |
| `<PressBar>` / `<PressLink>`            | Press mentions bar                                                                             | `mdx/PressBar.tsx`         |
| `<Quote>`                               | Blockquote with author                                                                         | `mdx/Quote.tsx`            |
| `<PhilosophyCard>`                      | Philosophy pillar card                                                                         | `mdx/PhilosophyCard.tsx`   |
| `<TeamSection>`                         | Team listing (async, loads YAML)                                                               | `mdx/TeamSection.tsx`      |
| `<ComparisonTable>` / `<ComparisonRow>` | Comparison table (client component)                                                            | `mdx/ComparisonTable.tsx`  |
| `<ValueTable>` / `<ValueRow>`           | Values table (client component)                                                                | `mdx/ValueTable.tsx`       |
| `<Hero>`                                | Page hero section                                                                              | `blocks/Hero.tsx`          |
| `<VideoPlayer>`                         | YouTube embed                                                                                  | `blocks/VideoPlayer.tsx`   |
| `<AppBadges>`                           | App store download badges                                                                      | `blocks/AppBadges.tsx`     |
| `<FeaturesShowcase>`                    | Interactive features section with video swap (client component, no props, 5 hardcoded entries) | `mdx/FeaturesShowcase.tsx` |

### Icon Handling in MDX

MDX cannot import React components directly. Icons are passed as **strings** and resolved via `src/components/mdx/icons.ts`:

```mdx
<FeatureCard icon="list" title="Choose">
  ...
</FeatureCard>
```

The `resolveIcon()` function maps strings like `"list"`, `"file-text"`, `"vote"` to lucide-react icon components.

### Adding New MDX Components

1. Create the component in `src/components/mdx/` (or `src/components/blocks/`)
2. Register it in `src/components/mdx/MDXComponents.tsx`
3. Use it in any `.mdx` file — no imports needed in MDX

## ⚠️ Important MDX Gotchas

### 1. No Optional Chaining in MDX

```mdx
{/* ❌ BREAKS: */}
{frontmatter?.hero?.headline}

{/* ✅ OK: Pass data as props from page.tsx instead */}
```

### 2. German Quotation Marks in JSX Attributes

German uses `„` (U+201E) and `“` (U+201C). Inside JSX attribute values, the **closing** quote must be the Unicode character `“` (U+201C), not an ASCII double quote `"` (U+0022):

```mdx
{/* ❌ BREAKS — ASCII " (U+0022) inside the value terminates the JSX attribute: */}

<ValueRow democracy="Gemeinschaft „Bürger"" />

{/* ✅ OK — Unicode closing quote “ (U+201C) inside the value: */}

<ValueRow democracy="Gemeinschaft „Bürger“" />
```

### 3. Frontmatter Not Available in MDX Body

The `frontmatter` object is only available in `page.tsx`. Pass any needed data as component props.

### 4. Client Components in MDX

Components with `"use client"` (like `ComparisonTable`, `ValueTable`) work fine when registered in `mdxComponents`. They use `Children.forEach` + `isValidElement` to extract props from declarative child components.

### 5. Brand Icons Removed

`lucide-react` v1.8+ removed brand icons (Github, Twitter, Instagram). Use inline SVG components for social media icons.

## Page Patterns

### Content-Heavy Pages (Home, Wahlometer, Über uns)

```tsx
// page.tsx — thin shell
const { frontmatter, content } = await getPage("home");
return <MDXRemote source={content} components={mdxComponents} />;
```

All structure and content lives in `content/pages/{slug}.mdx`.

### Simple Content Pages (Bürger, Politiker, Impressum, etc.)

Use the `<ContentPage>` wrapper component with MDX content.

## Conventions

- **Language**: All UI content is in **German**. Code, comments, and variable names are in **English**.
- **Schemas**: Every content type has a Zod schema in `src/lib/schemas/`. Always validate.
- **Static Export**: The site uses `output: "export"` — no server-side features (no API routes, no middleware, no dynamic routes without `generateStaticParams`).
- **Tailwind v4**: Uses PostCSS plugin (`@tailwindcss/postcss`), not the older config-based setup. Theme values in `globals.css` with `@theme`.
- **pnpm**: Use pnpm (not npm or yarn). Version 10+.
- **Images**: Unoptimized (`images: { unoptimized: true }`) for static export compatibility.
- **Feature videos**: The `<FeaturesShowcase>` component loads feature videos from `public/videos/DDW-*.mp4` with matching PNG posters (`public/videos/DDW-*.png`) — one pair per feature (Wähle, Informiere, Stimme, Vergleiche, Analysiere).

## Formatting

- **Prettier** is configured with MDX support (`.prettierrc`).
- Run `pnpm format` to auto-format all files.
- Run `pnpm format:check` to verify formatting without changing files.
- MDX files use the `mdx` parser with `proseWrap: "preserve"`.
- `.editorconfig` enforces 2-space indentation, UTF-8, LF line endings.
- Always run `pnpm format` after creating or editing files.
- A pre-commit hook runs `pnpm lint` from `new-version/`; keep lint passing before committing.

## Testing

### Playwright E2E Smoke Tests

- **Config**: `playwright.config.ts` — Chromium, baseURL `http://localhost:3000`
- **Tests**: `tests/e2e/smoke.spec.ts` — visits all page routes, checks for HTTP 200, no `console.error`, content renders
- Run: `pnpm test:e2e`
- The web server is started automatically by Playwright (`pnpm start` on port 3000).
- Build first: `pnpm build && pnpm test:e2e`

### Test Coverage

All 9 routes are smoke-tested:
`/`, `/buerger`, `/politiker`, `/wahlometer`, `/ueber-uns`, `/impressum`, `/datenschutz`, `/nutzungsbedingungen`, plus a 404 test.

## Auto-Update Convention for Context Files

When working on this project, AI agents and developers should **update the Copilot context files** whenever new patterns, rules, or gotchas are discovered:

1. **`AGENTS.md`** (this file) — Update when:
   - New build commands or scripts are added
   - New components are created (add to the MDX Components table)
   - New content types or schemas are introduced
   - New gotchas or breaking patterns are found
   - Architectural patterns change

2. **`.github/instructions/democracy-project.instructions.md`** — Update when:
   - Coding conventions change
   - New project-wide patterns are established

3. **`.github/instructions/mdx-content.instructions.md`** — Update when:
   - New MDX components are available
   - New MDX editing gotchas are discovered
   - Content structure conventions change

4. **`.github/copilot-instructions.md`** — Update when:
   - Repository structure fundamentally changes
   - Tech stack changes

**Rule:** After completing any significant feature or fix, review whether the context files need updating. This keeps future AI sessions informed and productive.

<!-- BEGIN:nextjs-agent-rules -->

# Next.js Version Notice

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->
