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
- **Content**: All content in `new-version/content/` as MDX and YAML files
- **Validation**: `pnpm validate-content` checks all content against Zod schemas

## Commands (run from `new-version/`)

```bash
pnpm dev              # Dev server with Turbopack
pnpm build            # Production build
pnpm lint             # ESLint
pnpm validate-content # Content validation
```
