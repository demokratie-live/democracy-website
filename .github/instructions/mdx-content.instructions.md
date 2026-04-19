---
description: "Guidelines for editing MDX content files in the DEMOCRACY website. Covers frontmatter, component usage, and common pitfalls with German text."
applyTo: "new-version/content/**/*.mdx"
---

# MDX Content Editing Guide

## File Structure

Every MDX page file requires YAML frontmatter:

```yaml
---
title: "Page Title"
slug: "/url-path"
seo:
  title: "SEO Title"
  description: "Meta description for search engines"
---
```

All fields in `seo` are required. To render a hero, use the `<Hero />` or `<HeroWithPhone />` component in the MDX body.

## Available Components

Use these components directly in MDX — no imports needed:

### Layout
- `<Section bg="white|muted|primary-light|none" centered>` — Page section wrapper (default `bg="none"`)
- `<Grid cols={2|3}>` — Responsive column grid
- `<CTA bg="primary-light">` — Call-to-action block

### Content
- `<Hero headline="..." subline="..." />` — Hero banner
- `<FeatureCard icon="icon-name" title="...">description</FeatureCard>`
- `<InfoCard icon="icon-name" title="..." subtitle="..." link="/path">text</InfoCard>`
- `<Quote author="Name">quote text</Quote>`
- `<PhilosophyCard icon="icon-name" title="...">description</PhilosophyCard>`
- `<VideoPlayer url="https://youtube.com/embed/..." title="..." />`
- `<AppBadges />` — App store download buttons

### Data Tables
- `<ComparisonTable leftLabel="A" rightLabel="B">` with `<ComparisonRow>` children
- `<ValueTable>` with `<ValueRow>` children

### Press
- `<PressBar>` with `<PressLink name="..." url="..." />` children

### Team
- `<TeamSection />` — Automatically loads team data from YAML

## Icons

Pass icon names as strings. Available icons (see `src/components/mdx/icons.ts`):
`list`, `file-text`, `vote`, `bar-chart`, `pie-chart`, `users`, `landmark`,
`search`, `shield`, `heart`, `arrow-right`, `play`, `external-link`, `mail`,
`check`, `x`, `chevron-down`, `server`, `code`, `share-2`, `smartphone`,
`tech-typescript`, `tech-react`, `tech-node`

Example: `<FeatureCard icon="vote" title="Vote">...</FeatureCard>`

## ⚠️ Common Pitfalls

### German Quotation Marks
German uses `„` (opening, U+201E) and `“` (closing, U+201C). Inside JSX attribute values,
do **not** use an ASCII double quote (`"`, U+0022) as the closing mark — it terminates the attribute.

```mdx
<!-- ❌ WRONG — ASCII double quote " (U+0022) breaks the JSX attribute -->
<ValueRow democracy="Gemeinschaft „Bürger"" />

<!-- ✅ CORRECT — Unicode closing quote “ (U+201C) is part of the text value -->
<ValueRow democracy="Gemeinschaft „Bürger“" />
```

### No JavaScript Expressions with Optional Chaining
```mdx
<!-- ❌ BREAKS the MDX parser -->
{data?.title}

<!-- ✅ Use component props instead -->
<Hero headline="Title" />
```

### No Direct Imports
MDX files cannot use `import` statements. All components are pre-registered and available globally.

### Headings
Use standard Markdown headings (`##`, `###`). They work inside `<Section>` wrappers:
```mdx
<Section bg="white" centered>
## This is a Section Heading

Regular paragraph text here.
</Section>
```

### Special Characters
- `e.V.` — works fine in headings and text
- `&` — use the literal character, not `&amp;`
- Umlauts (ä, ö, ü, ß) — use directly, no escaping needed
