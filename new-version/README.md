# DEMOCRACY Deutschland – Website

Static website for [DEMOCRACY Deutschland e.V.](https://www.democracy-deutschland.de),
built with Next.js 16 App Router and exported as static HTML.

> **Looking for project conventions, architecture and content guidelines?**
> See [`AGENTS.md`](./AGENTS.md) — it is the single source of truth for how this
> codebase is organized.

## Tech stack

- **Next.js 16** (App Router, `output: "export"`)
- **React 19**, **TypeScript** (strict)
- **Tailwind CSS v4**
- **MDX + YAML** for content, validated with **Zod v4**
- **pnpm** (v10+) for dependency management

## Prerequisites

- Node.js 20+
- [pnpm](https://pnpm.io/) 10+

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Common commands

All commands are run from this directory (`new-version/`).

| Command                 | What it does                                        |
| ----------------------- | --------------------------------------------------- |
| `pnpm dev`              | Start the dev server with Turbopack                 |
| `pnpm build`            | Build the static site to `out/`                     |
| `pnpm validate-content` | Validate all MDX/YAML content against Zod schemas   |
| `pnpm lint`             | Run ESLint                                          |
| `pnpm format`           | Format all files with Prettier                      |
| `pnpm format:check`     | Check formatting without writing                    |
| `pnpm test:e2e`         | Run Playwright smoke tests (requires a build first) |
| `npx serve out`         | Preview the built static site locally               |

> ⚠️ `pnpm start` does **not** work — this project uses static export.
> Use `npx serve out` after `pnpm build` to preview the production output.

## Content

All content lives under [`content/`](./content) as MDX (pages, blog posts) and
YAML (site-wide data, FAQs, team, donate, navigation, footer, …). Run
`pnpm validate-content` after every content change.

After editing any MDX file, also run `pnpm build` — MDX compile errors only
surface during the build, not during schema validation.

## Project documentation

- [`AGENTS.md`](./AGENTS.md) — architecture, content system, conventions, gotchas
- [`CLAUDE.md`](./CLAUDE.md) — guidance for AI coding assistants
