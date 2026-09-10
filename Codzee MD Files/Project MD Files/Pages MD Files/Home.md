# Codzee — Home.md

**Version 1.0**
**Status: Draft — first pass**
**Purpose: The complete visual specification of the homepage, mobile and desktop, section by section. This is the first applied instance of Design.md's rules and the reference implementation every future page file inherits from. Nothing in this file introduces a new rule — every decision here traces back to Design.md. Where a decision was directional rather than numeric in discussion, it has been converted to a real value from Design.md's token ranges and flagged with a note so it can be corrected if it doesn't match intent.**

---

## How To Use This Document

Each section below is specified twice — Mobile (375px baseline, holds through tablet unless a tablet-specific note says otherwise) and Desktop. Desktop values are pulled directly from the validated reference file (`style.css`/`index.html`) since that design is treated as tested and locked, not re-derived. Mobile values are new, built mobile-first per Design.md Philosophy Rule 5, using the Identity vs. Container test (Rule 6) on every section before deciding whether to scale down or reinvent.

---

## Navigation

Fully specified in Design.md Section 3.1. Referenced here, not repeated. Applies identically on Home as on every other page.

---

## Section 1 — Hero

**Classification:** Container (Philosophy Rule 6) — no spatial trick to lose, it is already a vertical stack of type lines on desktop.

- **Locked copy (per Copywriting.md Section 3/6):** "You don't want PROBLEMS just like us." — one sentence, not two lines of contrasting statements as in the prior draft. Type-role split: "You don't want" (Playfair italic) → "PROBLEMS" (Archivo Black, uppercase, fluid `clamp(4.5rem, 11.2vw, 10.5rem)`) → "just like us" (Playfair italic).

### Desktop
- Structure preserved: opening Playfair clause (left-aligned) → `PROBLEMS` (Archivo Black, uppercase, fluid `clamp(4.5rem, 11.2vw, 10.5rem)`) → closing Playfair clause ("just like us," right-aligned via `align-self: flex-end`) → outlined pill CTA ("Discover Work").
- Min-height: 75vh. Content vertically centered.
- The right-alignment of the closing Playfair clause against the left-aligned opening clause is itself an asymmetry expression (Rule 7) — kept as-is, now carrying "just like us" instead of the prior closing line.

### Mobile (375px)
- Same vertical stack, same type role assignment, no structural change — Hero passes the Container test cleanly.
- Fluid `clamp()` values already scale correctly toward the mobile floor; no new values needed.
- Right-alignment of the closing line preserved — this is the asymmetry expression at mobile width, requires no reinvention since it was never a horizontal-space-dependent trick.
- CTA (Tier 2 outline pill) stays centered below the type block, consistent with desktop.
- Top padding reduced from desktop's generous allowance to account for the persistent black notch nav now sitting above it — `padding-top: 96px` (from spacing scale), enough clearance below the notch bar without excessive dead space.

---

## Section 2 — Solution

**Classification:** Heading/text pairing — Identity element (asymmetry is the point, per Rule 7); the three-panel row itself is Container (sequence reads fine stacked).

**Locked copy (per Copywriting.md Section 6):** Heading — "The system was never the problem. A decision was." This replaced an earlier diagnostic framing (Symptom → Root Cause → System Fix) that only worked for repair-case visitors. The three panels now state situations, not diagnostic steps — **Broken** (something exists and stopped working), **Missing** (nothing exists yet, and it needs to), **Built wrong** (something exists, but the wrong tool or the wrong call built it) — chosen because this set holds for the repair case, the greenfield case, and the wrong-fit case simultaneously, per the positioning work in this project's build history. No panel implies a persona or an industry.

### Desktop
- Two-column head: heading (left, `~1.25fr`) / supporting paragraph (right, `~1fr`), 80px gap — asymmetric column split, unequal widths per Rule 7.
- Below: three-panel row (`Broken → Missing → Built wrong`), equal-width grid, connected by a horizontal rail that fills left-to-right (rail fill is motion — Animations.md; rail's static presence and dotted-tick styling belongs here).
- Panels: white surface, `--gray-line` border, 16px (Card) radius.

### Mobile (375px)
- Head: heading on top, supporting paragraph below — **not side by side** (confirmed earlier in discussion, this was a wording clarification, not a layout change). Asymmetry expressed via the Indent-Asymmetry Pattern (Design.md 3.5): paragraph offset with left padding rather than flush beneath the heading. Indent value: `24px` (from spacing scale).
- Three panels: single column, full-width, stacked top to bottom in original order (Broken → Missing → Built wrong). No horizontal rail at this width — sequence is carried by vertical order alone, which is sufficient here since the desktop rail's meaning ("these are related situations") is already communicated by stacking order, unlike Process's rail which additionally needed to signal "cannot be skipped/must complete in order," justifying its dedicated spine treatment there but not here.
- Panel-to-panel gap: `24px`.

---

## Section 3 — Work

**Classification: Identity (Category B, confirmed early in discussion)** — desktop's spatial offset communicates deliberate inequality between projects; a naive stack destroys that meaning entirely.

### Desktop
- Structure preserved exactly as validated:
  - Row 1: Pennify, centered, 80% width, 16:9 image ratio.
  - Row 2 (asymmetric pair): Orvari — 90% width, left-inset 10%, standard top offset. Zhabyart — 90% width, right-inset 10%, `margin-top: 160px` (the deliberate drop).
- Each project: image box (16px radius) → title (Plus Jakarta Sans) → one-sentence problem statement (Archivo).

### Mobile (375px) — native mobile composition, not a scale-down
- Single column, all three projects in original strength order (Pennify → Orvari → Zhabyart, per File-Structure.md's locked ordering rationale).
- Pennify: full width, no inset — dominant, matches its desktop role as the strongest/centered project.
- Orvari: right-side padding only (`padding-right: 40px`, content pushed left) — asymmetric indent, opposite direction from Zhabyart below it.
- Zhabyart: left-side padding only (`padding-left: 40px`, content pushed right) — mirrors Orvari's indent in the opposite direction, so the two together still read as deliberately uneven rather than identical repeated cards.
- This alternating-indent treatment is the direct mobile-native translation of desktop's horizontal offset — inequality preserved through indent direction and Pennify's full-bleed dominance, without requiring horizontal canvas space that doesn't exist at 375px.
- Vertical gap between projects: `64px` — generous, since Work is a section meant to be lingered on, not skimmed quickly.

---

## Section 4 — Studio / About (intro)

**Classification:** Container with an asymmetry expression at the label level — text block itself scales down cleanly; the "who are we" label needs deliberate offset treatment.

**Locked direction (per Copywriting.md's Positioning section):** no separate heading — the "Who are we?" label plus the lead paragraph carry the entire section. The lead paragraph is a real introductory paragraph (2–3 sentences, matching the H3-range size below), not a headline-weight one-liner substituted in. It never states team size, headcount, or the word "small" — Codzee's scale is never named in visitor-facing copy, per the Positioning-not-Persona principle.

### Desktop
- Grid: label column (`0.85fr`, "Who are we?" small label with dot marker) / copy column (`2.4fr`, lead paragraph + CTA row).
- Lead paragraph uses the larger end of the H3 range (desktop ~48px per the validated `.studio-lead` clamp).
- CTA row: Tier 3 accent pill ("About Codzee") + plain text link with arrow ("Meet the Team") — this text link now routes to the dedicated Team page per the locked page-structure decision.

### Mobile (375px)
- Indent-Asymmetry Pattern applied (Design.md 3.5): "Who are we?" label sits first, small, with its dot marker, minimal top padding. Lead paragraph text follows below, offset with left padding (`24px`) rather than flush against the label — this preserves the asymmetric relationship described in discussion (label small and left, paragraph indented, large but not full hero-scale).
- Lead paragraph size steps down from desktop's ~48px to a size appropriate for the mobile H3 range (~32px) — still substantially larger than body text, preserving its declarative weight, per the original direction that this text should "shrink down as the screen gets smaller" while staying visually significant.
- CTA row stacks: Tier 3 accent pill first, "Meet the Team" text link below it, `16px` gap.

---

## Section 5 — Capabilities

**Classification:** Split — accordion body is Container (already vertical, preserves cleanly); intro header is Identity-adjacent and required reinvention (3-column grid has no mobile equivalent).

### Desktop
- Full black notch-card module (24px radius), notch variant: **top-left** (first use on the site — subsequent notch-card instances elsewhere on the site select a different corner, per Design.md 3.3).
- Intro grid: 3 columns (`0.7fr / 1.5fr / 1fr`) — empty spacer / heading / description+CTA.
- Below: two-column asymmetric layout — accordion list (`1.4fr`) of four capability items (hover-to-expand — interaction detail, Animations.md) / empty right column (`0.6fr`), intentional negative space.
- Former "Talk to Us" CTA inside this section is **removed** (confirmed in discussion — redundant against persistent nav CTA in the same viewport neighborhood, Design.md 3.2).

### Mobile (375px)
- Same notch-card module, same top-left notch variant, same black surface and 24px radius — preserved per instruction to keep this section as close to "as-is" as possible.
- Intro header **restructured**, not scaled: 3-column grid collapses into the Indent-Asymmetry Pattern (Design.md 3.5) — heading on top, supporting description below it offset with left padding (`24px`), consistent with how Solution and Process handle the same problem. No CTA button here (removed per above), so the description simply closes the intro block.
- Accordion list: single column, full width — the empty right column is dropped entirely rather than collapsed, since it was intentional negative space that only makes sense at desktop width.
- Accordion items: interaction (hover vs. tap) is out of scope here — flagged for Animations.md, since mobile has no hover state and needs a defined tap/expand behavior to avoid the dead-end noted earlier in our discussion.

---

## Section 6 — Process

**Classification: Identity (Category B, confirmed)** — the horizontal rail's meaning (connected, sequential, directional) must survive; a plain stack would flatten it into a generic step list.

### Desktop
- Structure preserved exactly as validated: horizontal track — start node → connector → Stage 01 (First Call) → connector (emphasized) → Stage 02 (Problem Map) → connector (emphasized) → Stage 03 hub card (Scoped Build, visually larger, black surface, branch tags: Design/Engineering/QA) → connector (emphasized) → Stage 04 (Handoff) → connector (emphasized) → end node (Shipped).
- Head: two-column asymmetric split (heading `1.25fr` / supporting paragraph `1fr`, 80px gap) — same pattern as Solution's head.

### Mobile (375px) — native mobile composition
- Head: same Indent-Asymmetry Pattern as Solution (heading top, paragraph indented below, `24px` offset) — consistent method, per instruction that Process should share Solution's heading/text treatment.
- Below: **vertical spine** (Design.md 3.6) — a single line running along the left edge of the stacked stage cards, from start node through Stage 01 → 02 → 03 (hub) → 04 → end node, in original top-to-bottom order.
- Step markers (dot / numbers / check) sit directly on the spine at the left edge; stage cards sit to the right of the spine.
- Stage 03 (hub/Scoped Build) keeps its distinct black surface and larger footprint even in the stacked mobile version — its visual dominance is part of what signals "this is the main phase" and should not be normalized to match the other three cards.
- Spine-fill scroll animation (spine turns black as user scrolls past each stage) is **not specified here** — static presence and position only; the fill behavior is defined in Animations.md per the scope boundary established in discussion.
- Vertical gap between stage cards along the spine: `48px`.

---

## Section 7 — Contact

**Classification:** Container — already a single centered element at any width, per earlier discussion Contact is treated as a deliberate exception to the general asymmetry rule (Design.md Philosophy Rule 7 exception logic will be finalized in Contact's own future page file, since Contact was flagged as needing its own dedicated session).

### Desktop
- Single giant centered link ("Shall we talk?"), fluid type `clamp(3.2rem, 11vw, 8.5rem)`, vertically centered in a fixed-height section (65vh). Nothing else in the section — no supporting text, no secondary elements. Locked as a question, not a command, per Copywriting.md's CTA rule that the door is open, not pushed open.

### Mobile (375px)
- Same treatment, same centered single-element composition, fluid clamp already scales appropriately toward the mobile floor. No structural change — this section was confirmed as needing no rework.
- *(Note: Contact as a standalone page will receive its own full spec in a future Contact.md session, per earlier discussion that Contact is "more different" than a simple scale-down case.)*

---

## Section 8 — Footer

**Classification:** Container, consistent across every page — footer's own bespoke module design (Design.md 3.4) rather than the notch-card variant system.

### Desktop
- Full black module (24px radius), signature bottom/middle rounded-rectangle cutout (bespoke, not part of the four-corner notch-card variant pool — used once, unvaried, since footer is not repeated within a single visitor path the way notch-cards are).
- Structure preserved as validated: back-to-top link (top-right) → two-column main block (statement text left / link columns right) → giant wordmark ("CODZEE") centered → bottom bar (copyright / tagline).

### Mobile (375px)
- Single column throughout, per Design.md Philosophy Rule 9 (whitespace/structure universal, footer collapses to one column at this width as already anticipated in Design.md).
- Order preserved top to bottom: back-to-top → statement text → link columns (stacked, not side by side) → wordmark (scales down via fluid clamp, already present in reference) → bottom bar (stacks if needed to avoid crowding).
- Bespoke bottom cutout shape preserved at reduced scale — footer's unique identity does not need reinvention at mobile width, it is a Container-classification element structurally, only its internal content needs restacking.

---

## Open Items Carried Forward (not resolved in this pass)

1. **Nav's desktop scroll-state transition** (pill → black notch) — static end-states only are usable from Design.md; the transition itself is Animations.md territory.
2. **Capabilities accordion mobile interaction** (tap-to-expand replacement for desktop hover) — needs definition in Animations.md before this section is fully buildable.
3. **Process spine scroll-fill behavior** — static spine only specified here; fill animation belongs in Animations.md.
4. **Tablet-specific behavior for Work, Studio, Capabilities, Process** — this pass defines Mobile (375px) and Desktop only, per what was actually discussed. Tablet (768px+) has only been explicitly designed for Navigation so far; other sections currently inherit the mobile composition through the tablet range unless a future pass gives them their own tablet-specific treatment.
5. **Contact as a standalone page** — flagged during Foundations discussion as needing its own dedicated file/session; only the homepage Contact *section* is specified here.

---

*This document is the reference implementation for every page file that follows. Motion and interaction behavior referenced but not specified here belong in Animations.md. Visual system rules governing every value in this file are defined in Design.md.*
