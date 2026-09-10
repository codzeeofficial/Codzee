# Codzee — Services.md

**Version 1.1**
**Status: Draft — complete pass**
**Purpose: The complete structural specification for the Services page (`/services`), mobile and desktop, section by section, at the same depth as Home.md. Every value below traces to Design.md's token system. This file does not contain final copy — content is written in a future dedicated session.**

---

## How To Use This Document

Nav and Footer are universal (Design.md 3.1, 3.4) — not repeated here. Standard sitewide reveal system (Animations.md 3.1–3.3) applies throughout; this visitor is still forming a first impression, so no exemption like Terms/Privacy applies. Copywriting.md's Type 1 (agreement) headline governs the hero; the five service sections and everything after use direct, declarative statements rather than agreement mechanics, since by the time a visitor is reading service #2 they are already past the "is this for me" question.

---

## Section 0 — Hero

**Classification:** Container — same as Home's hero, a vertical stack with no spatial trick to lose.

**Desktop**
- Min-height: `60vh`, content vertically centered. Deliberately shorter than Home's `75vh` — five dense `100vh` sections follow immediately after, and a full-height hero here would delay the actual content this visitor came for (Copywriting.md: this visitor already has a specific question — "what do they actually build" — and wants it answered efficiently, not slowly built up to).
- Structure: agreement headline (Copywriting.md Type 1), max-width `760px`, followed by supporting text at `120ms` stagger, max-width `600px`, carrying File-Structure.md's "opening statement" line (we solve problems, output depends on the problem).
- No CTA in the hero itself — first CTA opportunity is the closing section; a mid-hero CTA here would be redundant against the persistent nav Contact button in the same viewport (Design.md 3.2's redundancy rule).

**Mobile (375px)**
- `padding-top: 96px` for nav clearance — same value as Home's hero and every other page's hero-equivalent, for the same structural reason (fixed notch nav clearance).
- Headline max-width: `100%` within the `32px` side padding. Supporting text follows directly below at the same stagger timing.

**Motion:** Standard reveal, heading then supporting text at `120ms` stagger (Animations.md 3.3), page-load entrance sequence (Animations.md Section 4) on first arrival at this page specifically.

---

## Section 1 — Service Sections (Governing System)

Five sections, each `100vh` desktop / `100dvh` mobile, full-bleed white. A sixth service, if ever added, reuses Layout 1 — the five layouts form a fixed, cycling pattern, not a bespoke-per-service system, keeping the vocabulary finite.

**Desktop container per section:** `max-width: 1280px` inner content, centered; `padding: 128px 64px` (top/bottom, left/right) — both clean base-4 values (Design.md 2.4).
**Mobile/tablet container per section:** `padding: 80px 24px` — also clean base-4 values.

**Sitewide rules across all five:**
- **Section number:** Plus Jakarta Sans, `clamp(2.5rem, 5vw, 4.5rem)`, full black (`#010202`), no opacity reduction. Positioned left or right per layout (stated per layout below) — this alternation gives the five-section sequence its own rhythm rather than pinning the number to one side throughout.
- **No soft-fill backgrounds, no card devices, no pill tags, no buttons inside individual sections** — all confirmed removed per Design.md 2.2 (no unauthorized tint) and 3.7 (card stays out of the shared component system). Grouping and emphasis are carried entirely by type weight, size, and spacing.
- **Content order, non-negotiable:** every section states the problem first, Codzee's response second — per File-Structure.md's scope line, regardless of which layout is used.

### Layout 1 — Two-column asymmetric, number left

**Classification:** Identity — the bottom-anchored right column against a top-anchored left column is a deliberate spatial relationship; a naive stack loses the "arrives late" feeling entirely.

**Desktop**
- Grid: `0.45fr / 0.55fr`.
- Left column, top-aligned: number (left) → heading (`clamp(2.5rem, 4.5vw, 4rem)`, Plus Jakarta Sans 800, line-height `0.95`, margin-bottom `24px`) → supporting line (Archivo, `20px`, line-height `1.5`).
- Right column, content anchored to viewport bottom (`margin-top: auto` on the block): problem-first paragraph, Archivo `16px`, line-height `1.6`, max-width `540px`.

**Mobile (375px) — native composition**
- Single column, order: number → heading (`32px`) → supporting line → paragraph.
- Bottom-anchoring doesn't survive at mobile width (no vertical canvas to anchor within without leaving dead space) — rebuilt, not shrunk: paragraph follows the supporting line directly, offset via the standard `24px` Indent-Asymmetry Pattern (Design.md 3.5), which becomes this layout's mobile-native expression of the desktop version's spatial asymmetry.
- Vertical gap between all stacked elements: `24px`.

**Motion:** Standard reveal — heading fires first, supporting line + paragraph follow at `120ms` stagger. No signature motion; the bottom-anchor is a static layout property.

---

### Layout 2 — Right-offset stack, number left

**Classification:** Identity — the extreme right-offset of the narrative block against a left-aligned header is the entire point; collapsing it to a plain stack erases the Rule 7 asymmetry this layout exists to express.

**Desktop**
- Header block (number + heading), left-aligned, max-width `600px`, margin-bottom `32px`.
- Narrative paragraph, pushed right via `margin-left: auto`, max-width `640px`, Archivo `18px`, line-height `1.6`.
- Optional component list (if a service needs to enumerate specific parts): plain two-column text (Archivo `16px`), no fill/border/pill, inside the same right-offset block, `16px` gap between items.

**Mobile (375px) — native composition**
- Single column: number → heading → paragraph.
- Right-offset cannot survive at 375px (no "right" to push toward without breaking line length) — rebuilt as: paragraph offset via the standard `24px` Indent-Asymmetry Pattern. Visually distinct from Layout 1's mobile version despite sharing the indent technique, because this layout's heading block has no bottom-anchored sibling above it.
- Optional component list, if present: single column, full-width, `16px` gap.

**Motion:** Standard reveal — heading fires first; paragraph and optional list follow together at `120ms` stagger.

---

### Layout 3 — Split hero-block, number right

**Classification:** Identity — the number's right position (flipping the left-default of Layouts 1–2) is a deliberate rhythm device across the sequence; it only registers if the paragraph/heading-block relationship is spatially real.

**Desktop**
- Two columns, `45% / 50%`. Left: problem-first paragraph, Archivo `18px`, line-height `1.6`, max-width `480px`. Right: heading + number, number right-aligned within its own block.
- No stat/metric device. If a service genuinely has a real, verifiable metric when copy is written, it appears as a plain inline text figure inside the paragraph — never an isolated large-scale element.

**Mobile (375px) — decided, not deferred**
- Order: **paragraph first, then heading block** — the deliberate exception to every other layout's heading-first mobile order, preserving this layout's specific desktop identity ("paragraph reads before the heading side") rather than defaulting to the sitewide pattern.
- Number sits right-aligned within the heading block, trailing the heading on the same line or immediately below it, right-justified — preserving its right-position identity even in single column.
- Paragraph: full-width, no indent offset — it precedes the heading block rather than following it, so no asymmetry offset applies against something that comes after it.

**Motion:** Standard reveal — on mobile, paragraph fires first (matching its visual position), heading block follows at `120ms`. Motion order follows visual order per Animations.md 3.1's per-element viewport trigger, not desktop's DOM order.

---

### Layout 4 — Top-heavy, number left, plain sub-columns

**Classification:** Container for the top block (number/heading/paragraph — no spatial trick). Identity for the bottom three-item row specifically — its meaning ("these are parallel, equal-weight sub-parts") survives a plain vertical list, but varying widths naively would break it.

**Desktop**
- Top: number + heading + narrative paragraph (max-width `620px`, Archivo `18px`), stacked, left-aligned, margin-bottom `64px` before the row below.
- Bottom: three plain text columns, `grid-template-columns: repeat(3, 1fr)`, gap `20px`. Each: small numbered sub-label (Plus Jakarta Sans `20px`, weight 700, margin-bottom `12px`) + one-line title + one-line description. Single hairline `#e6e6e6` divider between columns (not around them).

**Mobile (375px)**
- Top block: number → heading → paragraph, standard stack, `24px` vertical gaps.
- Bottom three items: vertical list, full-width, `24px` gap between items. Hairline divider rotates to horizontal, sitting between stacked items rather than between columns — same device, same purpose ("these are separated, parallel parts"), rotated for single-column context.

**Motion:** Standard reveal for the top block. Three sub-items fire as one group at body-reveal timing (`700ms`) when they cross the viewport threshold — no internal stagger between them, since they're parallel, not sequential (unlike Process's stage cards, which stagger because they're ordered).

---

### Layout 5 — Diagonal focal, number left, plain split

**Classification:** Container — a heading block followed by a two-column text split, both of which degrade cleanly without losing meaning.

**Desktop**
- Top-left: number + heading + short supporting line, max-width `500px`, margin-bottom `80px`.
- Bottom: full-width two-column text split (title left, descriptive paragraph right), generous gap (`64px`), single optional hairline `#e6e6e6` divider between them.

**Mobile (375px)**
- Top block: number → heading → supporting line, standard stack, `24px` gaps.
- Bottom split: stacks to single column, title then paragraph directly below, offset via the standard `24px` Indent-Asymmetry Pattern — the one place in this layout needing the indent technique, since title/paragraph is a heading/body pairing subject to Rule 7 same as everywhere else.

**Motion:** Standard reveal — top block fires first; bottom split's title and paragraph fire together at `120ms` stagger once that block enters the viewport, as its own separate scroll-trigger moment from the top block (Animations.md 3.1's per-element trigger, not one combined animation for the whole `100vh` section).

---

## Section 2 — How an Engagement Starts

**Classification:** Container — sequential in content but not spatially connected the way Process's rail is; this is a preview that starting is simple, not the mechanics themselves (Process owns that in full).

**Desktop**
- Two-column asymmetric head: heading (`1.25fr`, Plus Jakarta Sans, `clamp(2rem, 3.5vw, 3rem)`) / supporting paragraph (`1fr`, Archivo `18px`), `80px` gap — same ratio/gap Home's Solution and Process sections use for their heads, reused deliberately as a recognizable "claim, then explanation" rhythm rather than invented fresh, since this section is functionally that same kind of moment.
- Below the head: a single short line naming that every engagement starts with a discovery call — no brief, no quote, no assumption — rendered as body text, not a numbered step list (Process owns the step-by-step breakdown; duplicating that mechanic here would pre-empt Process's own job).
- Section padding: `128px 64px` desktop, consistent with the service sections above it.

**Mobile (375px)**
- Indent-Asymmetry Pattern (Design.md 3.5), `24px` offset, heading above, paragraph below.
- Section padding: `80px 24px`, consistent with mobile service-section padding.

**Motion:** Standard reveal, heading then paragraph at `120ms` stagger.

---

## Section 3 — Explore Process (Invitation)

**Classification:** Container.

**Desktop**
- Single centered-left block (not full-width centered — Rule 7 still applies even to a short invitation): short line (Archivo `18px`, max-width `440px`) + Tier 3 accent pill (Design.md 3.2 — "go deeper to another page" commitment level, matching how Home's Studio section routes to About via the same tier).
- Section min-height: not `100vh` — this is a brief transitional moment, not a destination. Padding `96px 64px` (base-4 value, one step below the `128px` used by heavier sections, signaling this section carries less weight).

**Mobile (375px)**
- Stacked: line above, pill below, `16px` gap — same pattern Home's Studio CTA row uses on mobile.
- Padding `64px 24px`.

**Motion:** Standard reveal, single trigger (line + pill fire together at `120ms` stagger, since there's no heading here to lead a longer sequence).

---

## Section 4 — Contact (Closing)

**Classification:** Container.

**Design decision, held from earlier discussion:** not a reuse of Home's full-height giant "Let's Talk" moment — that stays a Home-exclusive signature gesture (Design.md Rule 2 concern at a sitewide level). Services' CTA sits at a cooler-to-mid temperature than Process's closing CTA (Copywriting.md Section 5), since this visitor has read about capability, not yet had their reach-out anxiety addressed.

**Desktop**
- Single line (Archivo, `24px`, max-width `560px`) reflecting Services' specific temperature, followed by Tier 1 solid-black-pill CTA (Design.md 3.2 — same button as persistent nav Contact, correctly the highest-commitment tier here since it's this page's actual terminal action).
- Not full-height. Padding `96px 64px`, sized to content — no forced `65vh` block like Home's Contact section.

**Mobile (375px)**
- Stacked: line above, pill below, `24px` gap. Padding `64px 24px`.

**Motion:** Standard reveal, single trigger.

---

## Open Items Carried Forward

1. **Actual service names and count** — this file assumes 5 as the base cycling unit; the real list (what Codzee actually offers) is still undecided. Doesn't block this file structurally, blocks writing real copy.
2. **Whether any service legitimately has a real, verifiable metric** — if not, Layout 3 has no numeric element at all; the slot is never filled with a placeholder number.

---

*This document governs structure only. Sitewide rules inherited without restating: Design.md (tokens, nav, footer, button tiers), Animations.md (standard reveal system, tier values), Copywriting.md (agreement-headline hero, problem-first content order, banned list, CTA temperature — applies once copy is written), File-Structure.md (page scope and outbound links).*
