---
description: "DEMOCRACY Deutschland project conventions: content system, Zod schemas, component patterns, and coding standards."
applyTo: "new-version/src/**/*.{ts,tsx},new-version/content/**/*.{mdx,yaml,yml}"
---

# DEMOCRACY Deutschland – Project Conventions

## Content System

- All content lives in `new-version/content/` — never hard-code content in page components.
- Pages (`content/pages/*.mdx`) contain full page structure using MDX components.
- Site-wide data (navigation, footer, SEO defaults) lives in `content/site/*.yaml`.
- Each content type has a Zod schema in `src/lib/schemas/`. Always validate new content types.
- Run `pnpm validate-content` after any content changes.

## Page Pattern

Page components (`src/app/**/page.tsx`) should be **thin shells**:

```tsx
import { getPage } from "@/lib/content/queries";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx/MDXComponents";

export default async function Page() {
  const { frontmatter, content } = await getPage("slug");
  return <MDXRemote source={content} components={mdxComponents} />;
}
```

Content and layout structure belong in the `.mdx` file, not in `page.tsx`.

## MDX Components

- All MDX components are registered in `src/components/mdx/MDXComponents.tsx`.
- To add a new component: create it in `src/components/mdx/`, then register it in `MDXComponents.tsx`.
- Icons in MDX are passed as **strings** (e.g., `icon="list"`) and resolved via `src/components/mdx/icons.ts`.
- Client components (`"use client"`) work in MDX when registered in the component map.

## MDX Gotchas

- **No optional chaining** (`?.`) in MDX expressions — causes parse errors.
- **German quotation marks**: Closing `"` must be Unicode U+201C, not ASCII `"` (U+0022).
- **Frontmatter** is not accessible inside MDX body — pass data as component props from `page.tsx`.

## Zod Schemas

- Every content type must have a schema in `src/lib/schemas/`.
- Export all schemas from the barrel file `src/lib/schemas/index.ts`.
- Use `z.object()` with strict typing — prefer explicit fields over `z.record()`.
- Schema names follow pattern: `{type}Schema` (e.g., `pageFrontmatterSchema`, `teamMemberSchema`).

## Coding Standards

- **Language**: Content in German, code in English.
- **Static export**: No API routes, no middleware, no dynamic server features.
- **Images**: Use `unoptimized: true` — no `next/image` optimization.
- **lucide-react**: v1.8+ has no brand icons. Use inline SVGs for social media icons.
- **Tailwind v4**: Uses PostCSS plugin, theme values defined in `globals.css` with `@theme`.
- **pnpm**: Always use pnpm. Never use npm or yarn.

## Formatting

- Prettier is configured (`.prettierrc`) with MDX support.
- Always run `pnpm format` after creating or editing files.
- Run `pnpm format:check` in CI or before commits.
- EditorConfig (`.editorconfig`) ensures 2-space indentation across editors.

## Testing

- Playwright E2E smoke tests in `tests/e2e/smoke.spec.ts`.
- Run `pnpm build && pnpm test:e2e` to test all pages.
- Every page route must be covered by a smoke test (HTTP 200, no console errors).
- When adding a new page, add it to the `routes` array in `smoke.spec.ts`.

## Auto-Update Context Files

When introducing new patterns, components, or conventions:
1. Update `AGENTS.md` with new commands, components, or gotchas
2. Update relevant `.github/instructions/*.instructions.md` files
3. Update `.github/instructions/mdx-content.instructions.md` when adding MDX components

This keeps future Copilot sessions accurate and productive.
