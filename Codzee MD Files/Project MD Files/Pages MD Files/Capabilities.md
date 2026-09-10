# Codzee — Capabilities.md

**Version 1.1**
**Status: Draft — complete pass**
**Purpose: The complete structural specification for the Capabilities page (`/capabilities`), mobile and desktop, section by section, at the same depth as Home.md. This version corrects two issues found in the previous pass: (1) the black notch-card section was originally placed directly after the hero, which would visually collide with the desktop nav's own black scroll-transition happening at the same scroll position — it is now placed later in the page, after white sections have created breathing room; (2) the Complexity Map section previously borrowed Process's spine mechanism with the fill animation removed, which was flagged correctly as convenience-reuse rather than genuine reinvention — it now uses a distinct, typography-driven device with no visual relationship to Process's spine. This file does not contain final copy.**

---

## How To Use This Document

Nav and Footer are universal (Design.md 3.1, 3.4) — not repeated here. This page uses Copywriting.md's **clarity headline** type throughout — this visitor has already decided to investigate and wants direct, specific information, not recognition-before-claim.

---

## Section 0 — Hero

**Classification:** Container.

**Desktop**
- Min-height `50vh`, content vertically centered — leaner than both Home's `75vh` and Services' `60vh`, since this visitor explicitly wants to reach specifics fast (a due-diligence visit, not a browsing one).
- Clarity headline (Copywriting.md Type 2), max-width `760px`, Plus Jakarta Sans, `clamp(2.25rem, 4vw, 3.5rem)`.
- Supporting line directly below at `120ms` stagger, Archivo `18px`, max-width `580px`, framing the page as a direct answer rather than a pitch.

**Mobile (375px)**
- `padding-top: 96px`, same nav-clearance value used sitewide.
- Headline within `32px` side padding, full width. Supporting line follows.

**Motion:** Standard reveal, heading then supporting line at `120ms` stagger; page-load entrance sequence on first arrival.

---

## Section 1 — Complexity Map

**Design decision — new device, replacing the earlier spine-derived approach entirely:** this section uses **ascending type-scale** as its structural device — each complexity tier is rendered in a progressively larger heading size, using the same `1.333` ratio family already defined in Design.md 2.3, so the visual sense of "growing complexity" is produced purely by typography escalating in size, with no connecting line, no markers, no graphic device of any kind. This has no structural or visual relationship to Process's spine (a line-and-marker component) — it is a typography-only mechanism, consistent with Design.md 2.3's framing of type as "the primary design tool given the absence of color," and it is a genuinely different visual idea, not a stripped-down version of an existing one.

**Classification:** Identity — the ascending-size relationship between tiers *is* the meaning (this is a range, read low to high); if every tier used the same type size, the section would read as an arbitrary list instead of a scale, which defeats the point entirely.

**Desktop**
- Head: two-column asymmetric split, heading (`1.25fr`) / supporting paragraph (`1fr`), `80px` gap — Plus Jakarta Sans `clamp(2rem, 3.5vw, 3rem)` heading, Archivo `18px` paragraph. Same head ratio used sitewide for "claim, then explanation" sections (Home's Solution/Process, Services' Section 2) — reused because it is functionally that same kind of moment, not for convenience.
- Below the head: 3–4 complexity tiers stacked vertically, left-aligned, each tier's label rendered at a **larger size than the one above it**, stepping up the `1.333` ratio family per tier (e.g., tier 1 at `21px`, tier 2 at `28px`, tier 3 at `38px`, tier 4 at `50px` — clean steps from Design.md 2.3's stated family, not new numbers). Each tier: label (ascending size, Plus Jakarta Sans 700) + one-line description directly beneath it at a fixed `16px` Archivo, regardless of the label's size — the description never scales, so the escalation is legible as belonging to the label only.
- Vertical gap between tiers: `32px`, tightening slightly relative to other sections' `48px`+ gaps, since the ascending size itself is what carries the visual rhythm — excess gap would fight the escalation effect rather than support it.
- Left edge of every tier aligns to the same vertical line regardless of label size (labels grow rightward/downward in visual weight, not outward in position) — this keeps the scale reading as one coherent column, not a scattered arrangement.

**Mobile (375px) — native composition**
- Head: standard Indent-Asymmetry Pattern (`24px` offset), consistent with every other page.
- Tiers: same ascending-size logic, same left-alignment, sizes stepped down proportionally within the mobile-appropriate range of the same `1.333` family (e.g., `16px → 21px → 28px → 32px`) so the escalation is still perceptible without any tier overwhelming the 375px width.
- Vertical gap between tiers: `24px`.

**Motion:** Standard reveal. Tiers reveal individually as they cross the viewport threshold (Animations.md 3.1), in ascending order top to bottom — no scroll-linked fill or connecting animation of any kind, since there is no line or marker to animate; the escalation is a static typographic property, not a motion effect. This is the explicit, intentional difference from Process's spine.

---

## Section 2 — What We're Currently Building (Yosento)

**Classification:** Container — a declarative statement, no spatial idea to protect.

**Desktop**
- Two-column asymmetric: label column (`0.85fr`, small label "Currently Building" + dot marker, Archivo `14px` uppercase) / copy column (`2.4fr`, lead statement, Plus Jakarta Sans, `clamp(1.75rem, 3vw, 2.75rem)`) — same ratio Home's Studio section uses, reused because this is functionally the same kind of moment (a declarative claim about present state).
- One to two sentences maximum, per File-Structure.md's direction that this is a signal, not a case study — no feature list, no CTA here (the page's CTAs live in Sections 6–7 only, avoiding the redundancy Design.md 3.2 warns against).

**Mobile (375px)**
- Indent-Asymmetry Pattern, `24px` offset — label above, lead statement below, statement size stepped down to mobile H3 range (`~32px`), same pattern as Home's Studio mobile treatment.

**Motion:** Standard reveal, label then statement at `120ms` stagger.

---

## Section 3 — Tech Stack (Black Notch-Card, Accordion)

**Design decision — repositioned from the earlier draft:** this section no longer sits directly after the hero. Placing it there caused a real problem: the desktop nav's own scroll-triggered transition to solid black fires almost immediately (`scrollY > 40px`, Design.md 3.1/Animations.md 5.2), and a black section arriving at nearly the same scroll position competes with that transition for the same visual moment — the nav's shrink is supposed to read as its own clean, isolated event (Animations.md 5.2's "must never resemble an intermediate shape" rule implies it needs uncluttered surroundings to read correctly). By placing this section third, two full white sections (Complexity Map, Yosento) have already passed by the time the black card appears, giving the nav transition clean white space to complete in on its own, well before this section enters view.

**Classification:** Identity — the accordion disclosure pattern and the notch-card surface are both established, recognizable components (Design.md 3.3) being deployed correctly, not a container that happens to be styled dark.

**Desktop**
- Full black notch-card module (Design.md 3.3, `24px` Module radius). **Notch variant: top-right** — Home.md's teaser used top-left; this instance, appearing later in the same visitor's likely path, selects a different corner per Design.md 3.3's anti-repetition rule.
- Intro row inside the card: small label ("Built With," Archivo `14px` uppercase, white at full opacity — no dimming, per the same full-contrast reasoning applied to Services' section numbers) + one-line framing (Archivo `16px`), left-aligned, `32px` padding from the card edge.
- Below: accordion list, hover-to-expand (same mechanism as the teaser), one row per stack category — four rows (Frontend, Backend, Mobile, Infrastructure), matching the teaser's four-item precedent for internal consistency. Row height: `72px` collapsed, Plus Jakarta Sans `21px` label. Hover reveals one line of expanded detail beneath the row.
- Card padding: `64px` all sides (desktop), consistent with the generous internal padding the teaser's card uses.

**Mobile (375px)**
- Same black card, same top-right notch variant, preserved per the "keep as close to as-is as possible" precedent Home.md set for this component at small width. Card padding: `32px`.
- **Interaction, confirmed:** no tap-to-expand-in-place behavior. Each row is a tap target that scrolls to a matching anchor further down this same page (this page already *is* the destination the Home teaser links out to, so a tap here means "jump to detail," not "navigate elsewhere") — avoiding the need to invent a mobile accordion pattern from scratch, consistent with how the teaser itself avoids that by using navigation instead of in-place disclosure.
- Rows: full-width, stacked, single column, `56px` row height.

**Motion:** Standard reveal on entry (card + intro fire together, rows follow at `120ms` stagger). Hover-expand transition uses the Fast tier (`300ms`, Animations.md Section 7) — same tier as nav hover, since it's the same category of interaction (small, felt-not-seen response).

---

## Section 4 — Scale We've Worked At

**Classification:** Container.

**Desktop**
- Two-column asymmetric: heading (`1.25fr`, Plus Jakarta Sans `clamp(2rem, 3.5vw, 3rem)`) / paragraph (`1fr`, Archivo `18px`), `80px` gap — same head pattern reused sitewide for plain statement sections.
- Kept deliberately brief per File-Structure.md's direction ("honest about where we are and where we are going") — no supporting visual device, no list, just the statement given room to breathe.

**Mobile (375px)**
- Indent-Asymmetry Pattern, `24px` offset.

**Motion:** Standard reveal, heading then paragraph at `120ms` stagger.

---

## Section 5 — What We Cannot Do

**Design decision, held from earlier discussion:** kept as its own full section, unlike Services' cut equivalent — this visitor has already decided to dig in and is explicitly asking a due-diligence question where honesty about limits is the correct, locked trust signal (File-Structure.md, Copywriting.md's Capabilities direction). Removing it here would remove the exact thing that makes this page trustworthy to the visitor it's built for.

**Classification:** Container.

**Desktop**
- Same two-column asymmetric head pattern as Section 4 — deliberately not given an artificially different layout, since both are short, honest, declarative sections doing the same job; forcing unnecessary variety here would be difference-for-its-own-sake, not genuine pattern-breaking.
- **Adjacency fix (Sections 4 and 5 are consecutive, per Design.md Rule 4):** Section 5's column order is flipped relative to Section 4 — heading now sits right (`1fr`), paragraph left (`1.25fr`) — a small, real structural difference, the same technique Services' Layout 3 uses when it flips its number position for an identical reason.

**Mobile (375px)**
- Indent-Asymmetry Pattern, `24px` offset — same as Section 4. The desktop-only left/right flip doesn't survive at single-column width (nothing to flip), which is acceptable: Rule 4's adjacency concern is primarily a desktop-scan concern; at mobile width the visitor reads linearly and won't pattern-match two stacked indent-blocks as suspiciously identical the way a desktop scanner would.

**Motion:** Standard reveal, heading then paragraph at `120ms` stagger.

---

## Section 6 — Explore Work (Invitation)

**Design decision:** File-Structure.md confirms Capabilities leads to `/work`, `/process`, `/contact`. Work is the natural "go see the proof" step after a page of complexity claims — more appropriate here than on Services, where Work was swapped for Process since that visitor hadn't yet asked a proof-driven question.

**Classification:** Container.

**Desktop**
- Short line (Archivo `18px`, max-width `440px`) + Tier 3 accent pill (Design.md 3.2), "go deeper to another page" commitment level, consistent with Services' equivalent invitation section.
- Padding `96px 64px` — one step below the `128px` used by heavier sections, signaling reduced weight for a transitional moment.

**Mobile (375px)**
- Stacked: line above, pill below, `16px` gap. Padding `64px 24px`.

**Motion:** Standard reveal, single trigger (line + pill fire together at `120ms` stagger).

---

## Section 7 — Contact (Closing)

**Classification:** Container.

**Design decision:** same reasoning as Services — not a reuse of Home's full-height "Let's Talk" moment (stays Home-exclusive). Capabilities' CTA sits at a similar cool-to-mid temperature as Services' (Copywriting.md Section 5) — this visitor is still doing research, not yet at Process's "decided, remove my last anxiety" stage.

**Desktop**
- Single line (Archivo `24px`, max-width `560px`) + Tier 1 solid-black-pill CTA (same button as persistent nav Contact — correctly the highest-commitment tier here as this page's terminal action).
- Not full-height. Padding `96px 64px`, sized to content.

**Mobile (375px)**
- Stacked: line above, pill below, `24px` gap. Padding `64px 24px`.

**Motion:** Standard reveal, single trigger.

---

## Section 8 — Spacing, Type & Motion Reference

- All spacing values above trace to Design.md's base-4 family (2.4): `16, 24, 32, 48, 56, 64, 72, 80, 96, 128` all appear and are all clean members of that scale.
- Section 1's tier sizes trace directly to Design.md 2.3's stated `1.333` ratio family (`~12 → 16 → 21 → 28 → 38 → 50 → 67 → 90`) — desktop tiers use `21/28/38/50`, mobile tiers use `16/21/28/32` (32 substituted for the nearest clean step at the mobile ceiling, consistent with Philosophy Rule 4's allowance for different sections to use different legitimate steps from the same family).
- Section 3's notch-card module: `24px` radius (Module tier, Design.md 2.5) — confirmed correct tier for this component type.
- Motion throughout: standard sitewide reveal system (Animations.md 3.1–3.3), with one explicit non-default: Section 3's hover-expand uses the Fast tier (`300ms`). Section 1 has no scroll-linked animation beyond standard per-element reveal — explicitly and deliberately different from Process's spine, reasoning stated inline in Section 1 above.

---

## Open Items Carried Forward

1. **Actual tech stack categories/items, complexity-tier labels, and scale specifics** — content, not structure; same category as Services' missing service list. Doesn't block this file, blocks writing real copy.
2. **Section 3's four stack-category count** — set at four to mirror the teaser's four-item precedent; should be confirmed against the real stack once decided, since the true category count might not be four.

---

*This document governs structure only. Sitewide rules inherited without restating: Design.md (tokens, nav, footer, button tiers, notch-card variant system), Animations.md (standard reveal system, tier values, nav scroll-transition timing), Copywriting.md (clarity headline type, honesty-over-inflation direction for this page specifically), File-Structure.md (page scope and outbound links).*
