# Codzee — Process.md

**Version 1.0**
**Status: Draft — complete pass**
**Purpose: The complete structural specification for the Process page (`/process`), mobile and desktop, section by section, at the same depth as Home.md, Services.md, and Capabilities.md. This file does not contain final copy — the real stage count, stage names, and stage content depend on Operation.md, which does not exist yet. What this file defines instead is the reusable stage-layout system Process draws from, exactly the way Services.md defines 5 reusable layouts without knowing the real service list. This file is content-agnostic by necessity, not by convenience.**

---

## How To Use This Document

Nav and Footer are universal (Design.md 3.1, 3.4) — not repeated here. This page uses Copywriting.md's most functional register on the site — no philosophy, no vision, real specific answers to real specific anxieties. The homepage's compressed Process *snapshot* (Home.md Section 6 — horizontal rail / vertical spine, one line per step, Stage 03 as a dominant hub) was built around dummy placeholder copy (a generic "discovery call → diagnosis → proposal → build → launch" shape) and is not treated as binding precedent here. This file deliberately does not reuse the rail/spine device or assume 5 stages — both were structural decisions baked around content that isn't real yet. The one thing carried forward from Home.md's version, because it is independent of stage count or naming, is that whichever stage represents the actual build phase is the heaviest, most central stage and gets the notch-card treatment.

**Explicit dependency:** this file cannot be populated with real content until Operation.md defines the actual stage count and confirms which stage (if any) is dominant. What this file *can* do now — and does — is define the reusable stage-layout system itself, so that whenever Operation.md lands, populating Process.md is a selection-and-sequencing exercise, not a fresh design problem.

---

## Section 0 — Hero

**Classification:** Container — same vertical-stack treatment as every other page's hero.

**Desktop**
- Min-height `50vh` — matching Capabilities' lean hero, not Home's `75vh`. Per Copywriting.md, this visitor's curiosity has already converted to interest by the time they reach Process; there is no "is this for me" question left to earn, so the hero doesn't need room to build recognition the way Home's does.
- Clarity headline (Copywriting.md Type 2), but with Process's specific instruction layered on top: it must **name the anxiety directly**, not describe the page ("What happens after I reach out" territory, not "Our Process"). Plus Jakarta Sans, `clamp(2.25rem, 4vw, 3.5rem)`, max-width `720px`.
- Supporting line directly below at `120ms` stagger, Archivo `18px`, max-width `560px` — reinforcing that this page gives real, specific answers, not reassurance-as-vibe.
- No CTA in the hero — first CTA opportunity is the closing section, consistent with every other page's redundancy rule (Design.md 3.2) against the persistent nav Contact button.

**Mobile (375px)**
- `padding-top: 96px`, standard nav-clearance value used sitewide.
- Headline within `32px` side padding, full width. Supporting line follows at the same stagger.

**Motion:** Standard reveal, heading then supporting line at `120ms` stagger (Animations.md 3.3), page-load entrance sequence (Animations.md Section 4) on first arrival.

---

## Section 1 — The Stages Group

**Classification:** Identity, collectively. Each individual stage inside the group is Container at the layout level (a heading/body relationship with no page-specific spatial trick to protect) — but the *group's* sequencing, and the deliberate non-repetition between consecutive stages, is where the section's actual meaning lives (Design.md Rule 2).

**No shared group heading.** Confirmed decision: each stage is a standalone section carrying its own heading, number, and body — a group-level intro heading directly under the Hero would be redundant, since the Hero already does the "name the anxiety" job on this page. Stages begin immediately after the Hero with no intermediate framing block.

### 1.1 — Variant System (5 reusable stage layouts)

Five variants exist so that whatever the real stage count ends up being (Operation.md may land on 4, 6, 7 — the number is not fixed here, deliberately, per the same logic Services.md uses for its service count), no two *consecutive* stages repeat the same layout, and repeats that do occur land with enough gap between them that they don't register as the same shape twice (per the earlier discussion: brain doesn't pattern-match a repeat across a long enough gap — this is why 5 variants is sufficient even past 5 or 6 real stages, not a hard ceiling).

These are deliberately **not** a re-skin of Services.md's five layouts (asymmetric split / right-offset stack / split-reverse / top-heavy+subcolumns / diagonal focal) — reusing those directly would violate Design.md Rule 2 at the cross-page level, the same repetition problem the rule exists to prevent within a single page. Process's variants instead explore relationships Services never used: no-column stacking, margin-note numbering, a size-drop from heading to body, weight-reversed columns, and an isolated callout — see rationale per variant below.

---

#### Variant A — Stacked-Index

**Relationship:** No column split. Everything reads top to bottom in one column, even on desktop — the opposite of Services' every-layout-has-two-columns default.

**Desktop**
- Stage number: oversized, Plus Jakarta Sans, `clamp(3rem, 6vw, 5.5rem)` — larger than any number used in Services.md, since Process has fewer, denser sections and can afford more weight per number without the page feeling crowded.
- Heading directly below the number, tight `12px` gap, Plus Jakarta Sans `clamp(1.75rem, 3vw, 2.5rem)`.
- Body directly below heading, `16px` gap, Archivo `18px`, max-width `640px`, left-aligned under the same left edge as the number and heading — nothing offset, nothing split.
- Section max-width constrained to `720px` inside the page's standard container, left-aligned within it (not centered) — this keeps the "no column split" decision from reading as accidentally centered/generic; it's a deliberate narrow left-aligned column, consistent with Design.md's "never plain centered stacking" rule even in a single-column layout.

**Mobile (375px)**
- Identical relationship — this variant is Container-classified, so it scales down directly with no rebuild needed. Number, heading, body stack with the same gaps, full width within `32px` side padding.

**Motion:** Number and heading fire together (both are "the announcement"), body follows at `120ms` stagger.

---

#### Variant B — Number-as-Margin-Note

**Relationship:** Number is demoted to a small margin annotation, floated outside the main content column — inverting Services' treatment where the number is always a hero-scale element sitting inside the composition.

**Desktop**
- Number: small, Archivo `16px`, weight 700, positioned in a narrow `80px` left margin column, vertically aligned to the top of the heading beside it — reads like a footnote reference, not a visual anchor.
- Heading + body run as one continuous wide block in the remaining space (`1fr` after the margin column), heading Plus Jakarta Sans `clamp(1.75rem, 3vw, 2.5rem)` directly followed by body Archivo `18px` at `16px` gap, both sharing the same left edge (no indent between them — this variant's relationship is number-vs-content, not heading-vs-body, so the usual indent-asymmetry pairing doesn't apply inside the content block itself).
- Max-width of the content block: `620px`.

**Mobile (375px) — rebuilt, not scaled**
- The margin-column relationship doesn't survive at 375px (no spare horizontal space for an `80px` side column without crushing the content). Rebuilt as: number sits inline, small, directly above the heading with a tight `8px` gap — still visually minor relative to the heading, preserving the "number is a quiet annotation, not a hero element" identity even though the literal margin position is gone.
- Heading + body follow directly beneath, standard stack.

**Motion:** Number appears with no independent reveal weight of its own (it's metadata, not content — consistent with how the Contact notch-card's step-indicator tab is treated as instant/non-animated in Contact.md). Heading fires as the primary reveal, body follows at `120ms`.

---

#### Variant C — Question-Then-Answer

**Relationship:** A deliberate size *drop* from heading to body — heading is phrased and sized as the stage's actual question/anxiety (Copywriting.md's "name the anxiety directly" instruction, applied at the individual-stage level here, not just the page hero), body answers at a visibly calmer, smaller scale. Every other heading/body pairing on the site has the heading bigger and the body substantial-but-secondary; this variant pushes that contrast further specifically because the content here is anxiety-then-relief, and the visual drop in scale should feel like the tension resolving.

**Desktop**
- Heading: full near-paragraph scale, Plus Jakarta Sans `clamp(2rem, 3.5vw, 3rem)`, max-width `680px`, phrased as the direct question this stage answers.
- Body: Archivo `16px` (smaller than every other body-copy instance on the site, which typically sits at `18px` for this kind of section — deliberate, the calm-after-the-question feeling depends on the visible size drop, not just a content-level shift), max-width `560px`, `24px` gap below heading.
- Number: small, Archivo `14px` uppercase, positioned above the heading as a minimal label ("Stage 0X"), not a visual anchor — this variant's visual energy belongs entirely to the heading, not the number.

**Mobile (375px)**
- Same relationship, same scale drop preserved proportionally: heading steps down to mobile H3 range (~`32px`), body stays at `16px` (does not shrink further — `16px` is already the mobile body floor sitewide).
- Number label, heading, body stack directly, `24px`/`16px` gaps matching desktop's ratio.

**Motion:** Heading fires at heading-tier timing (`850ms`, Animations.md 3.2), body follows at `120ms` stagger — but body's own reveal motion uses the smaller `translateY(24px)` body-tier distance despite following a heading, consistent with its role as body-weight content regardless of the unusual size relationship.

---

#### Variant D — Two-Column Reversed Weight

**Relationship:** Two columns, but body copy gets the wider column and the heading gets the narrow one — the inverse of Services Layout 1's `0.45fr/0.55fr` split where the heading side is dominant. Justified here specifically: Process's job is answering, not asking, so the answer earns more visual room than the question that prompted it.

**Desktop**
- Grid: `0.4fr / 0.6fr` — heading column narrow-left, body column wide-right.
- Heading column: number + heading stacked, Plus Jakarta Sans `clamp(1.75rem, 3vw, 2.5rem)`, top-aligned.
- Body column: Archivo `18px`, max-width `560px`, top-aligned (no bottom-anchoring trick like Services Layout 1 — that device is Services-specific and reusing it here would be the same cross-page repetition problem the variant system exists to avoid).
- Column gap: `64px`.

**Mobile (375px) — rebuilt**
- Column split doesn't survive at 375px. Rebuilt using the standard Indent-Asymmetry Pattern (Design.md 3.5): heading (with number above it) on top, body offset below via `24px` left padding — same mechanism used sitewide for heading/body pairings, since the reversed-weight *relationship* was a desktop-only spatial idea to begin with (Identity vs. Container test, Design.md Rule 6 — the column-width ratio is the meaning; once forced single-column, the ratio has nothing left to express, so it defaults to the sitewide indent solution rather than inventing a new one).

**Motion:** Heading fires first, body follows at `120ms` stagger — standard sequencing despite the reversed spatial weighting, since motion order follows reading order (heading-then-body), not visual column-width dominance.

---

#### Variant E — Bracketed Stat/Detail

**Relationship:** For any stage that has one concrete, isolable detail worth pulling out on its own (e.g. a specific number, a specific structural fact) — that detail sits alone on its own line, oversized, bracketed by a short heading above it and a short explanatory body line below. The one variant in the system that uses an isolated numeric/detail callout — nothing else currently in the doc set does this at the individual-stage level, making it a genuinely distinct device, not a reuse.

**Desktop**
- Short heading above, Plus Jakarta Sans `21px`, uppercase-adjacent small-label weight (not full heading scale — this variant's visual energy belongs to the isolated detail, not the heading).
- The detail itself: Archivo Black or Plus Jakarta Sans at extreme scale, `clamp(3rem, 6vw, 6rem)` — the single largest text element used in any stage variant, reserved for this one purpose (consistent with Design.md 2.3's rule that Archivo Black stays rare and reserved for one maximum-impact moment; if Archivo Black is already fully spent on Home's hero, this element uses Plus Jakarta Sans at the same extreme size instead, weight 800, so the rarity rule isn't violated by a second unauthorized use).
- Short explanatory line below, Archivo `16px`, max-width `480px`, `16px` gap.
- **This variant is not usable on every stage** — only where a genuine concrete detail exists (a real number, a real structural fact from Operation.md). It must never be filled with a manufactured or vague "detail" just to use this layout; if no stage in the real process has a qualifying detail, this variant goes unused, which is an acceptable, expected outcome of the toolkit approach, not a gap that needs to be forced.

**Mobile (375px)**
- Same relationship, same three-part stack, sizes step down proportionally: detail scales via its own `clamp()` toward the mobile floor, short heading and explanatory line hold their fixed sizes (they're already at the mobile-appropriate end of their respective ranges).

**Motion:** Heading label fires first (minimal, non-heading-tier weight, similar to Variant C's stage-number label), the large detail fires next as the primary reveal moment (heading-tier timing, `850ms`, since it functionally carries the same visual weight a heading would elsewhere), explanatory line follows at `120ms` stagger.

---

### 1.2 — The Dominant Stage (Notch-Card)

Whichever stage represents the actual build phase — once Operation.md confirms it — is treated as structurally heavier than the rest, consistent with the one piece of Home.md's original Process snapshot that survives independent of stage count or naming.

**Design decision — notch corner:** this is the component's fourth sitewide appearance (Home teaser: top-left; Capabilities Tech Stack: top-right; Contact form: bottom-left) — per Design.md 3.3's anti-repetition rule, this instance uses **bottom-right**, the last unused corner in rotation.

**Desktop**
- Full black notch-card module (Design.md 3.3, `24px` Module radius), sized visibly larger than the surrounding stage layouts — not a new component, the same module used elsewhere, just given more internal room (`80px` padding vs. the sitewide `64px` default) to signal weight through scale rather than through a new device.
- Internal content does **not** use one of the five Variant layouts above — those are built for white-surface stages; the dominant stage's internal composition is its own black-surface treatment, consistent with how Capabilities' Tech Stack notch-card has its own internal accordion logic rather than reusing a white-section layout inside a black card.
- Internal structure, to be finalized once real build-phase content exists: number/label in the notch tab (small, Archivo `14px` uppercase, white full-opacity — same full-contrast rule used on every other notch-card label sitewide), heading (Plus Jakarta Sans, white, sized at the larger end of the range used elsewhere in this section since the card itself signals importance), body (Archivo, white or reduced-opacity white depending on hierarchy needs once real content exists).

**Mobile (375px)**
- Same black card, same bottom-right notch variant, preserved per the sitewide "keep as close to as-is as possible at small width" precedent (Home.md, Capabilities.md, Contact.md all hold notch position across breakpoints). Padding reduced to `40px` (one step down from desktop's `80px`, consistent with the base-4 family).

**Motion:** Standard reveal on entry — card fires as one group (Animations.md 3.1's per-element viewport trigger), no internal stagger specified until real content confirms whether the internal structure needs one.

---

### 1.3 — Sequencing Rule

Two consecutive stages never use the same variant (Design.md Rule 2, applied at the stage-group level the same way Design.md 3.3 applies it to notch-card corners). The dominant/build stage's notch-card treatment counts as its own distinct "layout" for this purpose — the two stages immediately before and after it must not repeat each other's variant, and should ideally not repeat the variant used immediately before the notch-card either, so the card doesn't read as a repeat sandwiched between two similar white sections.

Beyond the immediate-adjacency rule, variants are free to repeat across the full stage count with sufficient gap (per the earlier discussion: the brain doesn't register a repeat across enough distance) — this is what makes 5 variants sufficient for a stage count that might exceed 5 or 6 once Operation.md is written.

---

## Section 2 — What We Never Do

**Classification:** Container.

**Design decision:** File-Structure.md lists this as its own explicit content beat, distinct from the stages themselves — kept as a standalone section rather than folded into the final stage, since it does specific work Copywriting.md requires: replacing the banned generic cliché ("no surprises, no ghosting, no scope creep") with something concrete and provable. Folding it into the last stage would bury that work inside a section already carrying its own job.

**Desktop**
- Two-column asymmetric head: heading (`1.25fr`, Plus Jakarta Sans, `clamp(2rem, 3.5vw, 3rem)`) / supporting content (`1fr`) — same ratio/gap Home's Solution and Process-snapshot sections use for "claim, then explanation" moments, reused deliberately here since this section is functionally that same kind of moment, and it is not adjacent to another section using the identical ratio (the stage variants immediately preceding it are Container/Identity layouts from Section 1.1, none of which use this exact `1.25fr/1fr` split — see Design.md Rule 2 adjacency check).
- Supporting content: not one paragraph — per Copywriting.md's instruction that any claim here must be specific and provable, this is structured as short individual statements (each a specific thing Codzee doesn't do, with the "how we actually prevent it" detail immediately adjacent, per the Proof Rule), stacked with `16px` gaps, each led by a short bolded lead-in phrase (Copywriting.md's "emphasis once per block" rule, same mechanism as About's belief-blocks).
- Section padding: `96px 64px` — one step below the `128px` used by the heavier stage sections, since this is a shorter, closing-adjacent beat, not a primary content section.

**Mobile (375px)**
- Indent-Asymmetry Pattern (Design.md 3.5), `24px` offset, heading above, statement blocks below with `16px` gaps between them.
- Section padding: `64px 24px`.

**Motion:** Standard reveal, heading then statement blocks at `120ms` stagger; blocks reveal as one group at body-tier timing (`700ms`) rather than individually staggered — they're parallel statements, not a sequence, same logic Services' Layout 4 and About's belief-blocks apply.

---

## Section 3 — Contact (Closing)

**Classification:** Container.

**Design decision:** per Copywriting.md Section 5, this is the **warmest** CTA on the site — "the visitor has read everything, their anxiety about reaching out has been directly addressed, the invitation can be more direct because the visitor is more ready." This is explicitly warmer in temperature than Services' or Capabilities' closing sections, though it is not a reuse of Home's full-height giant "Let's Talk" moment (that stays a Home-exclusive signature gesture, consistent with every other page's closing precedent).

**Desktop**
- Single line (Archivo, `26px` — one step larger than Services'/Capabilities'/About's/Team's `22–24px` closing lines, since this line is allowed to be more direct per the temperature rule), max-width `560px`, followed by Tier 1 solid-black-pill CTA (Design.md 3.2 — same button as persistent nav Contact, correctly the highest-commitment tier as this page's terminal action).
- Not full-height. Padding `96px 64px`, sized to content — consistent with every other page's closing-section treatment.

**Mobile (375px)**
- Stacked: line above, pill below, `24px` gap. Padding `64px 24px`.

**Motion:** Standard reveal, single trigger.

---

## Section 4 — Spacing, Type & Motion Reference

- All spacing values trace to Design.md's base-4 family (2.4): `8, 12, 16, 24, 32, 40, 64, 80, 96, 128` all appear and are all clean members of that scale.
- Type sizes trace to the `1.333` ratio family (Design.md 2.3), with the exception of Section 1.1 Variant E's `clamp(3rem, 6vw, 6rem)` isolated-detail element and Section 1.1 Variant A's `clamp(3rem, 6vw, 5.5rem)` stage number — both fluid, hero-adjacent scale values, consistent with Design.md 2.3's stated exception for hero-scale type that a single static ratio step cannot serve correctly across the full viewport range.
- Notch-card module: `24px` radius (Module tier, Design.md 2.5), bottom-right corner — fourth and final position in the sitewide rotation (Home: top-left, Capabilities: top-right, Contact: bottom-left, Process: bottom-right). Any future notch-card use on a page not yet built will need to restart the rotation logic, since all four corners are now spent.
- Motion throughout: standard sitewide reveal system (Animations.md 3.1–3.3), with variant-specific notes stated inline in Section 1.1 where a variant's relationship required a non-default sequencing choice (Variant B's non-animated number, Variant C's heading-tier-timed body, Variant E's label-then-detail-then-line sequence).

---

## Open Items Carried Forward

1. **Real stage count, stage names, and stage content** — fully blocked on Operation.md. This file cannot be populated with real copy or a final variant assignment per stage until that document exists.
2. **Which stage is the build phase / dominant stage** — assumed to exist based on Home.md's original precedent, but not confirmed as fact until Operation.md defines the real process. If the real process genuinely has no single dominant phase, Section 1.2 does not apply and every stage uses a Section 1.1 variant instead — flagged here so that possibility isn't silently lost.
3. **Whether any real stage has a genuine isolable detail/stat** — Variant E (Section 1.1) is only usable if Operation.md surfaces one; otherwise it stays unused, which is expected and acceptable per the toolkit's own logic.
4. **Final variant-to-stage assignment and adjacency check** — cannot be done until the real stage count and content exist; Section 1.3's sequencing rule governs how that assignment must be made once it's possible.

---

*This document governs structure only, and is explicitly incomplete at the content-assignment level pending Operation.md. Sitewide rules inherited without restating: Design.md (tokens, nav, footer, button tiers, notch-card variant system), Animations.md (standard reveal system, tier values), Copywriting.md (anxiety-naming headline direction, banned-phrase rule, Proof Rule, warmest-CTA temperature for this page specifically — all apply once real copy is written), File-Structure.md (page scope, "what we never do" content beat, outbound links).*
