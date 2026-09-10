# Codzee — Tasks-Process.md

**Version 1.0**
**Status: Active build plan**
**Purpose: The sequenced, dependency-ordered task list for building the `/process` page. Written the same way Tasks-Terms-Privacy.md and Tasks-About.md were — each task is small, checkable, and traces to a locked source. Unlike Terms/Privacy, this page is NOT exempt from Design.md's asymmetry, notch-card, or reveal-animation systems — it uses all three, per Process.md's own structural spec.**

---

## How To Use This Document

Work top to bottom. Each task has a **Done when** condition. Source files are named per task.

**Current status recap:**
- Content is fully drafted and locked: `process.ts`, matching `ProcessContent`.
- Structural spec is locked: `Process.md` (five-variant toolkit, notch-card treatment for the dominant stage, "What We Never Do" section, motion behavior).
- Type shape is decided (`ProcessStage`, `ProcessNeverItem`, `ProcessNeverContent`, `ProcessHeroContent`, `ProcessClosingContent`, `ProcessContent`).

---

## Task 1 — Paste the Process types into `page.types.ts`

**Source:** the type block already drafted for this page.

**Action:** paste into `data/types/page.types.ts`, alongside the existing content interfaces. **One change from the original draft:** `headline` on `ProcessStage` is now optional, since Variant E stages (03 and 07) never populate it — omit the field entirely on those two stage objects rather than shipping an always-empty string.

```typescript
export type ProcessStageVariant = 'A' | 'B' | 'C' | 'D' | 'E' | 'dominant'

export interface ProcessStage {
  id: string
  number: string
  variant: ProcessStageVariant
  headline?: string
  body: string
  statLabel?: string
  stat?: string
}

export interface ProcessNeverItem {
  lead: string
  detail: string
}

export interface ProcessNeverContent {
  heading: string
  items: ProcessNeverItem[]
}

export interface ProcessHeroContent {
  headline: string
  supportingLine: string
}

export interface ProcessClosingContent {
  line: string
  cta: CTALink
}

export interface ProcessContent {
  slug: string
  title: string
  metaDescription: string
  hero: ProcessHeroContent
  stages: ProcessStage[]
  never: ProcessNeverContent
  closing: ProcessClosingContent
}
```

**Done when:** `page.types.ts` exports `ProcessContent` and the project compiles with no errors from this addition.

---

## Task 2 — Place the data file

**Source:** Files.md Section 4 — `data/pages/process.ts`.

**Action:** drop the finalized `process.ts` into `data/pages/`.

**Done when:** the file exists, is typed as `ProcessContent`, and compiles clean against Task 1's types.

---

## Task 3 — Confirm or build `StageVariant.tsx`

**Source:** Files.md Section 3 — `components/process/StageVariant.tsx`, already spec'd there as one component with a `variant` prop (`A` through `E`) rather than five files, per Design.md's "family, not five components" pattern already used for `NotchCard` and `PillButton`.

**Action:** confirm this component exists and renders each of the five real layouts (Stacked-Index, Number-as-Margin-Note, Question-Then-Answer, Two-Column-Reversed-Weight, Bracketed-Stat) per Process.md 1.1's structural specs — desktop AND the "rebuilt, not scaled" mobile behavior noted for Variant B and Variant D specifically.

**Important distinction to get right:** `StageVariant` only ever receives `'A' | 'B' | 'C' | 'D' | 'E'` — the `'dominant'` value on `ProcessStage.variant` is never passed to it. Routing logic (Task 5) decides which component a stage renders through before `StageVariant` is ever called.

**Done when:** `StageVariant` renders correctly for all five variants against real stage data, with mobile behavior matching Process.md's per-variant rebuild rules — not just scaled-down desktop CSS.

---

## Task 4 — Confirm the dominant stage renders through `NotchCard`, not `StageVariant`

**Source:** Files.md's `NotchCard.tsx` (`corner` prop) + Process.md 1.2 (Build stage's distinct treatment — larger padding, black surface, no variant layout applies).

**Action:** the Build stage (`variant: 'dominant'`) renders through the existing `NotchCard` component, not a sixth `StageVariant` layout. Confirm which `corner` value Process.md specifies for this page, consistent with the sitewide corner-rotation bookkeeping already established (Home's teaser, Capabilities, Contact each use a different corner).

**Done when:** the Build stage visually matches Process.md 1.2's dominant-stage spec, and no `StageVariant` code path is reused for it.

---

## Task 5 — Build the page-level rendering/routing logic

**Source:** Process.md Section 1.3 (sequencing/adjacency rule) + `process.ts`'s actual `stages` array order.

**Action:** the component that maps over `content.stages` decides per-stage whether to render `NotchCard` (`variant === 'dominant'`) or `StageVariant` (everything else, passing the specific `A`–`E` value through). Confirm the locked sequence — A → C → E(03) → D → B → dominant → E(07) — satisfies Process.md's adjacency rule (no two consecutive stages repeat a variant; this was checked once already during content drafting, worth re-confirming against the actual component output, not just the data order).

**Done when:** all seven stages render in order, each through the correct component, with no adjacent-variant violation visible in the built page.

---

## Task 6 — Build the Hero section

**Source:** Process.md's Hero section spec (layout/type/spacing) + `content.hero`.

**Action:** new component if one doesn't already exist for this page's hero (check whether Process.md expects a dedicated `ProcessHero` or reuses a shared hero pattern from elsewhere in `components/`) — render `headline` and `supportingLine` from data, no hardcoded copy.

**Done when:** hero renders both fields correctly, structural values traced to Process.md, not invented.

---

## Task 7 — Build the "Never" section

**Source:** Process.md's spec for this section (not yet confirmed against the actual file's layout details for this specific block — check Process.md directly for column/spacing treatment of this section before building, since it wasn't part of the variant toolkit itself and may have its own bespoke layout rule).

**Action:** new component rendering `content.never.heading` followed by `content.never.items` (three items: lead + detail each). Confirm against Process.md whether this section uses a reveal/stagger treatment consistent with the rest of the page, or its own specified motion behavior.

**Done when:** all three items render correctly, heading renders above them, and layout matches whatever Process.md actually specifies for this section (verify this before marking done — it wasn't the primary focus of this file's content-drafting pass).

---

## Task 8 — Build the Closing section

**Source:** `content.closing` + Copywriting.md Section 5 (warmest-temperature CTA on the site).

**Action:** confirm whether this reuses the existing `ContactSection`-style component (as About.md's closing does) or needs its own — Process's closing has a full custom line plus a single button, which may not match `ContactSection`'s existing shape exactly. Render `closing.line` and a `PillButton` (accent tier, per Design.md 3.2) using `closing.cta.label` / `closing.cta.href`.

**Done when:** closing renders correctly, button uses the existing `PillButton` component (not a new one-off), and copy is pulled from data, not hardcoded.

---

## Task 9 — Motion

**Source:** Animations.md Section 3 (standard reveal system) — **this page is NOT exempt**, unlike Terms/Privacy.

**Action:** confirm the standard viewport-reveal and heading→body stagger hooks (`useScrollReveal`, `useStagger` from `components/animations/`) are applied per-section, consistent with how every other standard page uses them. Confirm Process.md doesn't specify any bespoke exception for this page (Terms/Privacy's exemption was explicitly documented in its own file — check whether Process.md documents anything similar before assuming standard behavior applies everywhere on this page).

**Done when:** reveal/stagger behavior is confirmed present and correctly scoped, with any page-specific exceptions Process.md actually states (if any) implemented as documented, not assumed away.

---

## Task 10 — Route file

**Source:** Files.md Section 2 — `(site)/process/page.tsx`.

**Action:** route imports `processContent` from `data/pages/process.ts` and renders the composed page (Hero → seven stages → Never → Closing). Confirm this page sits in `(site)`, not `(immersive)` — it uses the standard sitewide nav/footer, unlike the case studies and Contact.

**Done when:** `/process` renders end to end with no hardcoded copy in the route file itself (Rules.md 2.3).

---

## Task 11 — Metadata

**Source:** SEO.md (not currently loaded in this session — **the `title`/`metaDescription` values in `process.ts` are a reasonable draft, not yet verified against SEO.md's actual character-limit and title-tag-suffix rules**).

**Action:** wire `content.title` / `content.metaDescription` into Next.js's metadata export. Before treating this as final, re-check both values against SEO.md directly — this was flagged as unverified when drafted.

**Done when:** metadata renders correctly, and the two field values have been checked against SEO.md's actual rules at least once.

---

## Task 12 — Final check against Rules.md Part 3

- No comments anywhere in any new component or module CSS (1.1)
- No unused imports, no dead conditional branches (1.2)
- No hardcoded visual values — every spacing/type/color value traces to a token (1.6)
- No `any` used anywhere (2.1)
- `"use client"` only added where genuinely justified — the reveal/stagger hooks (Task 9) likely require it on whichever component actually calls them; confirm it's not added reflexively to components that don't need it (2.4)
- Semantic HTML used correctly throughout (2.8)

**Done when:** every line above is checked and true, not assumed.

---

## Task 13 — Open items carried forward, resolved or explicitly re-confirmed

1. **Hero headline repetition risk** — flagged during drafting: Home's locked Process teaser is "What happens after you reach out." and this page's hero ("Here's what happens, in order, once you say yes.") sits close in structure/meaning. This was knowingly accepted, not missed — no action needed unless you want to revisit it after seeing both live.
2. **"Never" section layout** — flagged in Task 7 as not fully confirmed against Process.md's actual spec for that block during this session. Check before calling Task 7 done.
3. **SEO field verification** — flagged in Task 11, needs an actual pass against SEO.md once it's available.

**Done when:** all three are either resolved or consciously re-confirmed as acceptable — not silently carried forward a second time.

---

*This task file governs Process page build sequencing only. Structural values are governed by Process.md. Copy is governed by Copywriting.md and locked in `process.ts`. Code discipline is governed by Rules.md.*
