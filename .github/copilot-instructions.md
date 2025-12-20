# DEMOCRACY Deutschland Website - Copilot Instructions

## Project Overview

This is the **DEMOCRACY Deutschland** website, a civic tech project enabling citizens to participate in German Bundestag voting decisions. The project is undergoing a complete migration from legacy PHP to Next.js.

**Active work is in `nextjs-app/`** - this is the primary development focus.

## Architecture

```
nextjs-app/
├── src/app/              # Next.js 16 App Router (pages, API routes, Payload CMS)
├── src/components/       # React components (ui/, sections/, forms/, admin/)
├── src/lib/              # Utilities: prisma.ts, utils.ts, validation.ts, email.ts
├── prisma/               # Prisma schema and migrations
└── public/               # Static assets (images, files, videos)
```

**Dual-CMS Architecture:**
- **Prisma** (`prisma/schema.prisma`): Custom models like BetaCode, Contact, DonationSettings
- **Payload CMS** (`src/payload.config.ts`): Content collections (pages, blog-posts, faqs, team-members, media)

## Development Setup

```bash
cd nextjs-app
pnpm install                    # Use pnpm only (enforced via packageManager field)
docker-compose up -d            # Start PostgreSQL + MailHog
pnpm db:generate && pnpm db:push
pnpm dev                        # http://localhost:3000
```

**Key services:**
- PostgreSQL: `localhost:5432` (user: democracy, db: democracy_db)
- MailHog UI: `localhost:8025` (for testing emails)
- Payload Admin: `localhost:3000/admin`

## Code Patterns

### UI Components
Use `class-variance-authority` for variants. Always use `cn()` from `@/lib/utils` for className merging:
```tsx
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
```

### API Routes
Use Zod schemas from `@/lib/validation.ts` for request validation. Return consistent responses:
```tsx
import { contactFormSchema } from '@/lib/validation';
// Success: { success: true, data: ... }
// Error: { success: false, error: string }
```

### Prisma Client
Import the singleton from `@/lib/prisma` (prevents connection exhaustion in dev):
```tsx
import { prisma } from '@/lib/prisma';
```

### Path Aliases
Use `@/` for all imports within `src/`:
```tsx
import { Button } from '@/components/ui/Button';
import { prisma } from '@/lib/prisma';
```

## Styling Conventions

- **Tailwind CSS 4** with no config file (PostCSS-based)
- Brand color: `rgb(68, 148, 211)` / `#4494d3` - use inline styles or define as needed
- German locale: All user-facing text in German, use `de-DE` for dates/currency
- Responsive: Mobile-first with `lg:` breakpoint for desktop layouts

## Testing

```bash
pnpm test              # Playwright E2E tests
pnpm test:ui           # Interactive UI mode
pnpm test:headed       # Visible browser
```

Tests are in `tests/` directory. Tests run against dev server on port 3000.

## File Organization

| Directory | Purpose |
|-----------|---------|
| `src/components/ui/` | Reusable primitives (Button, Input, Card, Modal) |
| `src/components/sections/` | Page sections (Header, Footer, Hero, DonationWidget) |
| `src/components/forms/` | Form components |
| `src/app/api/` | API routes (contact, beta, donation-status, subscribe) |
| `src/app/(payload)/` | Payload CMS routes |

## Important Notes

- **Node 22.18.x required** (see `engines` in package.json)
- **Suppress deprecation warnings**: Commands use `NODE_OPTIONS='--no-deprecation'`
- **Legacy PHP files**: Root-level PHP files and `democracy/`, `blog/` folders are legacy - ignore them
- **Static assets path**: Use `/files/images/` or `/images/` prefixes for images in `public/`
