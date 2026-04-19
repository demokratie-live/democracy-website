# DEMOCRACY Deutschland – Repository Overview

This repository contains the website for **DEMOCRACY Deutschland e.V.**, a German civic-tech nonprofit that builds transparency tools for parliamentary democracy.

## Repository Structure

The repository has two parts:
- **`new-version/`** — The active Next.js website (this is where all development happens)
- Root directory — Legacy PHP website (deprecated, do not modify)

## Getting Started

All work should be done inside `new-version/`. See `new-version/AGENTS.md` for comprehensive project documentation including:
- Architecture and file structure
- Content system (MDX + YAML + Zod validation)
- MDX component system and gotchas
- Build commands and conventions

## Key Facts

- **Tech Stack**: Next.js 16, React 19, TypeScript strict, Tailwind CSS v4, Zod v4
- **Package Manager**: pnpm (v10+)
- **Build**: Static export (`output: "export"`)
- **Content Language**: German
- **Code Language**: English (variable names, comments, code)
- **User Language**: German — the user communicates in German. Always respond in German unless explicitly asked otherwise. Code, variable names, and commit messages remain in English.
- **Reference Site**: [democracy-deutschland.de](https://www.democracy-deutschland.de) — the original live site is the visual reference for design decisions
- **Content**: All content in `new-version/content/` as MDX and YAML files
- **Validation**: `pnpm validate-content` checks all content against Zod schemas
- **Commits**: Commit sensible, self-contained changes promptly instead of leaving them uncommitted for long. After finishing a coherent fix or feature, create a commit right away with a concise English subject and do not bundle unrelated files.

## Commands (run from `new-version/`)

```bash
pnpm dev              # Dev server with Turbopack
pnpm build            # Production build
pnpm lint             # ESLint
pnpm validate-content # Content validation
pnpm test:e2e         # Playwright smoke tests (build first!)
pnpm format           # Format all files with Prettier (incl. MDX)
pnpm format:check     # Check formatting without writing
npx serve out         # Preview built site locally (equivalent to `pnpm start`)
```

## ⚠️ Critical Workflow Rules

### Build after every MDX change

After creating or modifying **any** MDX file, immediately run `pnpm build` to catch parse errors. MDX issues (Unicode quotes, optional chaining) only surface at build time — `pnpm validate-content` catches schema errors but **not** MDX compilation failures.

### Static export means NO server features

Do not create: API routes (`app/api/`), middleware, server actions, `getServerSideProps`, database connections, or CMS integrations. All data comes from local MDX/YAML files read at build time. Never suggest adding a CMS — the project deliberately uses file-based "content as code".

### Stale `.next` cache

If the dev server shows broken styling or CSS 404 errors, the `.next` cache is likely stale. Fix with: `rm -rf .next && pnpm dev`. This commonly occurs after killed dev servers or switching branches.

### Verify changes with tests

After completing page or component changes, run the full verification: `pnpm build && pnpm test:e2e`. When Playwright MCP browser is available, also visually inspect affected pages to catch rendering issues that automated tests miss.
