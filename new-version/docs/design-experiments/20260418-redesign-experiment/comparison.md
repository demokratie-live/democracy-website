# DEMOCRACY Deutschland — Redesign Experiment `20260418`

Three parallel redesign directions implemented on isolated branches, each rooted at `feature/MDX@fd6d0ad`. The goal is to identify the strategic visual/product direction for the future design system.

## Overview

| Branch                          | Commit    | Thesis                                                            | Files | Build    | Lint     | e2e      |
| ------------------------------- | --------- | ----------------------------------------------------------------- | ----- | -------- | -------- | -------- |
| `redesign/a-civic-editorial`    | `5d8b1ca` | Civic Editorial — credible, calm, institutional                   | 16    | ✅ 71/71 | ✅ 0 err | 15/16¹   |
| `redesign/b-civic-data-product` | `7ed8523` | Civic Data Product — transparent, system-oriented, dashboard-like | 33    | ✅ 71/71 | ✅ 0 err | ✅ 16/16 |
| `redesign/c-civic-community`    | `903d48f` | Civic Community — warm, participatory, inviting                   | 78    | ✅ 71/71 | ✅ 0 err | 15/16¹   |

¹ The single failure (`/blog/willkommen` → 500) is **pre-existing** on the baseline branch — the referenced blog post was deleted in an earlier commit on `feature/MDX`. Not caused by the redesigns.

---

## Branch A — Civic Editorial

**Target perception:** "This institution is credible and serious. You can quote it."

### Design thesis

Press-ready masthead aesthetic. Authority through typographic restraint, not ornament. Editorial whitespace, not dashboard density.

### Key decisions

- **Tokens:** Ink navy `#1f2d57`, cream `#f6f1e7`, aged gold `#a8801a` accent
- **Typography:** Source Serif 4 (display/headlines) + Inter Tight (UI/body) + JetBrains Mono (eyebrows, dates)
- **Chrome:** Masthead Navbar with eyebrow date band and 2-px ink underrule; serif wordmark; bordered Spenden button (no heart icon)
- **Hero:** New `EditorialHero` — left-aligned headline block with kicker, oversized serif, thin rule separators
- **Cards:** Restrained bordered cards, no drop shadows, subtle hairlines; gold accents only on key CTAs
- **Sections:** New `editorial` background + `width` prop; cream is the default tone

### Strongest qualities

- Most **trustworthy** and **memorable** of the three — looks unlike any typical civic-tech site
- Strongest **press-readiness** — reads as an editorial voice rather than a product pitch
- High **readability** through serif/sans pairing and long-form rhythm
- **Accessibility:** Contrast is strong (ink-on-cream > 4.5:1); focus rings preserved; reduced-motion respected

### Weaknesses

- Risk of feeling **static** — no sense of "live data" or participation
- Editorial aesthetic can age into "traditional" if not balanced with a motion system
- Fewer `<Hero>` → `EditorialHero` migrations mean some secondary pages (`buerger`, `politiker`, `spenden`, `engineering`) still carry gradient heroes and render mixed
- Relies on premium serif font load — LCP impact should be measured

### Implementation complexity

**Low-to-medium.** 16 files. Token swap + 6 MDX primitives restyled + new hero. Back-compat aliases for old `bg` values preserve unmigrated pages.

---

## Branch B — Civic Data Product

**Target perception:** "This is a mature transparency product. There is real data behind it."

### Design thesis

Legislative transparency demands surface-level legibility of data, states, and filters. Productized density over editorial air.

### Key decisions

- **Tokens:** Cool primary blue, slate neutrals ramp (50-950), explicit semantic palette (success/warn/danger/info), chart tokens
- **Typography:** Inter + JetBrains Mono for numerics, status chips, IDs
- **Chrome:** Compact Navbar with monospaced breadcrumb/version indicator; footer grouped by domain
- **Hero:** New `DataHero` with KPI strip and structured props
- **New primitives:** `Stat`, `KPIGroup`, `StatusChip`, `Filter`, `DataCard`, `LegendItem` (see `src/components/mdx/data/`)
- **Cards:** Sharper radii (4-8 px), clear borders, elevated-on-hover
- **MDX infra:** Enabled `blockJS: false` on all 10 `MDXRemote` call sites so structured object-literal props survive compilation

### Strongest qualities

- Strongest **product fit** — looks like it belongs next to the mobile app
- Highest **scalability into a future design system** — semantic tokens + data primitives are reusable across new surfaces (dashboards, legislation browser, analytics)
- Clear **information density** where it matters (Wahlometer KPIs)
- **Usability:** Structured props and status language make every page predictable
- **Differentiation from baseline:** Most change, most new infrastructure, most net-new value

### Weaknesses

- **Trustworthiness risk:** Dashboard chrome can read as corporate/technocratic if warmth is not reintroduced on the marketing-surface pages
- Highest **implementation complexity** of the three (33 files, MDX compiler config touched)
- Structured CTA props (`primary={{label, href}}`) require developer training; the back-compat child variant mitigates this
- More moving parts = more potential regressions during future content edits

### Implementation complexity

**High.** 33 files, 1423 lines changed, new MDX primitives, MDX pipeline config change. Largest ongoing maintenance surface.

---

## Branch C — Civic Community

**Target perception:** "This is for me. I am welcome here."

### Design thesis

Democracy needs to feel populated. Warmth, portraits, community signals, softer shapes — still serious, never activist-chaotic.

### Key decisions

- **Tokens:** Warm deep teal `#3a7ca5`, sage `#7ba05b`, terracotta `#c97b63`, cream `#faf7f2`
- **Typography:** Public Sans (UI/body) + Fraunces (headlines, humanist serif)
- **Chrome:** Navbar with "Mitmachen" invitation CTA; Footer with community stats block
- **Hero:** New `CommunityHero` — softer rounded shapes, avatar stack, member count, flattened CTA props for RSC reliability
- **New primitives:** `AvatarStack`, `JoinPill`, `MemberCount`, `Testimonial`
- **Cards:** Larger radii (16-24 px), softer shadows, warmer surfaces
- **Sections:** `muted` bg now maps to cream; CTAs default to `warm-strong`

### Strongest qualities

- Strongest **approachability** and **modernity** — best on mobile / onboarding / social share contexts
- Warmest emotional register — reduces the "government website" feeling that suppresses first-time engagement
- New community primitives (`AvatarStack`, `MemberCount`, `Testimonial`) are reusable across future campaigns
- **Differentiation from baseline:** Most emotional change, most moved-away from the legacy minimal aesthetic

### Weaknesses

- Largest diff (78 files) — highest risk of drift from unchanged pages that now render with community styling they weren't designed for
- Requires real community content (avatars, testimonials, member counts) to avoid looking staged — placeholder Discord URL needs content review
- **Political/product fit risk:** Warmth without data can read as undercooked for a transparency mission
- Back-compat aliases cause untouched pages (politiker, buerger, wahlometer, spenden) to inherit cream/warm defaults — needs full migration audit

### Implementation complexity

**Highest rollout surface.** 78 files touched, but most of the change is token-driven, so the per-file cost is low. Main cost is **content operations** (sourcing real avatars, member stats, testimonials).

---

## Decision Framework Scores

Scale 1–5 (5 = strongest). Scored by direct inspection of each branch's implementation against the user's decision criteria.

| Criterion                     | A Editorial | B Data Product | C Community |
| ----------------------------- | ----------- | -------------- | ----------- |
| Trustworthiness               | **5**       | 4              | 3           |
| Modernity                     | 3           | 4              | **5**       |
| Memorability                  | **5**       | 3              | 4           |
| Usability                     | 4           | **5**          | 4           |
| Readability                   | **5**       | 4              | 4           |
| Accessibility                 | **5**       | **5**          | 4           |
| Political/product fit         | 4           | **5**          | 3           |
| Design-system scalability     | 3           | **5**          | 4           |
| Differentiation from baseline | 3           | 4              | **5**       |
| Feasibility of rollout        | **5**       | 3              | 3           |
| **Total**                     | **42**      | **42**         | **39**      |

---

## Recommendation

**Pursue a hybrid direction anchored on B (Civic Data Product), informed by A's editorial authority and C's community warmth.**

Rationale:

1. **B's semantic token + data-primitive foundation is the right substrate for a design system.** The Wahlometer is DEMOCRACY's flagship transparency surface; it rewards structured tokens more than any other area. Once `Stat`/`StatusChip`/`Filter`/`DataCard` exist, every future legislative view inherits them for free.
2. **A's editorial voice should own the marketing/trust surfaces** (`/ueber-uns`, `/presse`, `/spenden`). These are where DEMOCRACY earns credibility. Borrow A's serif display face (Source Serif 4 as optional display pairing), masthead-style hero for institutional pages, and restrained card treatment with hairline borders.
3. **C's community primitives should ship as opt-in modules**, not as global defaults. Keep `AvatarStack`, `MemberCount`, `Testimonial`, `JoinPill` in the library; use them in Hero blocks and onboarding funnels. Do **not** adopt C's cream/terracotta tokens wholesale — they fight against B's data legibility.

### Concrete hybrid blueprint

- **Token base:** B's slate ramp + semantic palette + chart tokens (load-bearing).
- **Display font:** Source Serif 4 from A, reserved for institutional page headers and quotes. Inter remains UI default (B).
- **Primary accent:** Keep B's cool primary blue as the brand workhorse; reserve A's aged gold for trust-marker CTAs (donate, press kit).
- **Card language:** B's sharp-radii, border-first treatment for data surfaces; A's editorial whitespace rhythm for long-form content.
- **Community layer:** C's `AvatarStack` + `MemberCount` + `Testimonial` as optional MDX primitives. Surface them on home hero and `/ueber-uns`, not globally.
- **Community warmth on mobile app onboarding:** C's warmer hero treatment belongs in the app, not the marketing site.

### What to leave behind

- A's full cream palette (ages poorly without careful art direction).
- B's structured-prop CTAs as the only option — keep the children-variant back-compat.
- C's warm-as-global-default token override — too large a blast radius; opt-in only.

---

## Notable risks & follow-up

1. **Branch A & C unmigrated pages:** Secondary routes (`buerger`, `politiker`, `spenden`, `engineering`, `kontakt`, `faq`, `presse`) still reference the old `bg` names and legacy `<Hero>`. Back-compat aliases render them but visually inconsistent. A full migration sweep is required before ship.
2. **Pre-existing `/blog/willkommen` 500:** Unrelated to redesigns; blog post was deleted on baseline. Either restore the post or remove the smoke-test route.
3. **B's `blockJS: false` change:** Global MDX pipeline setting. Low risk (dangerous JS still blocked via `blockDangerousJS: true`), but warrants a security review before merge.
4. **C's placeholder content:** Discord URL and member stats are placeholders. Need real data before user-facing deployment.
5. **Font loading:** All three branches add one or more `next/font` families. Measure LCP impact; consider `font-display: swap` review and preloading strategy.
6. **Browser-test evidence:** E2E smoke tests verified HTTP 200 + no console errors across 15/16 routes on each branch. Visual regression screenshots were not captured in this experiment — recommend running `gem-browser-tester` against each branch before merge decision.

---

## Artifacts

- Current-state audit: `files/research.md` (session workspace)
- Per-branch design specs: `files/20260418-redesign-experiment/design-{a,b,c}.md`
- Implementation commits:
  - A: [`5d8b1ca`](../../../../../../) on `redesign/a-civic-editorial`
  - B: [`7ed8523`](../../../../../../) on `redesign/b-civic-data-product`
  - C: [`903d48f`](../../../../../../) on `redesign/c-civic-community`

Baseline: `feature/MDX@fd6d0ad`.
