# Codzee — Zhabyart.md (Case Study)

**Version 1.0**
**Status: Draft — complete pass**
**Purpose: The complete structural specification for the Zhabyart case study page (`/work/zhabyart`), mobile and desktop, section by section. This file applies Case-Study-Template.md's toolkit — it does not redefine any shared pattern, it selects from and sequences the toolkit, justifying each choice, per that file's own Section 8 assembly rule. This file does not contain final copy — problem specifics, testimonial text, and exact image selection are written in a dedicated copy session.**

---

## How To Use This Document

Case-Study-Template.md governs everything reused here without restating it: the Framed Capture treatment, the width-pattern library, primary/compact slot tiers, the Details height cap, the Detail→Gallery rhythm, motion notes, container/type defaults. This file's job is narrower — apply those tools to Zhabyart specifically, and account for what makes Zhabyart's situation different from Orvari's or Pennify's: a single, cohesive atmospheric website build, no multi-surface complexity, real client (Zhabyr Abenov) and a real testimonial.

**Global chrome exception, confirmed in discussion, formalized fully in the future Site-Exceptions.md file:** this page does not use the standard sitewide nav (Design.md 3.1). It uses a stripped nav bar — Codzee logo only, no links, no Contact button. A "Visit Live Site" action sits fixed at bottom-center of the viewport and fades out as the footer enters view. This is a deliberate departure from UX.md's "nav is always visible, always identical" rule, justified here because case studies are meant to be an immersive, full-bleed showcase of the work itself — standard nav chrome competing for attention against the client's own visual craft would undercut the entire point of this page type. This exception applies to all three case study pages identically, not just Zhabyart.

---

## Section 0 — Stripped Nav & Visit-Live-Site Action

**Classification:** Container — this is chrome, not content, but it needs its own spec since it deviates from Design.md 3.1.

**Desktop**
- Nav bar: Codzee logo only, left-aligned, same scroll-state black-transition behavior as the sitewide nav (Design.md 3.1 / Animations.md 5.2) — the *shrink-on-scroll* mechanic is retained since it's a page-transition-consistency device, not a navigation device; only the links and Contact button are removed.
- **Visit Live Site action:** fixed position, bottom-center, Tier 2 outline-pill styling (Design.md 3.2 — lowest-commitment, in-page action, consistent with how the tier is used for Home's "Discover Work"), pinned above the viewport floor throughout the scroll.
- **Fade behavior:** opacity transitions to `0` as the Footer section (Design.md 3.4) enters the viewport — using the Base tier (`600ms`, Animations.md Section 7), since this is a standard interactive/state-change transition tied to scroll position, not a content reveal. Once faded, it does not reappear if the visitor scrolls back up past the footer threshold — consistent with Animations.md 3.1's "fires once" philosophy applied here to a disappearance rather than an appearance.

**Mobile (375px)**
- Nav: same persistent black notch bar structurally (Design.md 3.1), logo only, hamburger removed entirely — there is nothing to open, since there are no nav links or footer link-list-via-overlay on this page type.
- Visit Live Site action: same fixed bottom-center position, full-width-adjacent sizing appropriate for touch (matching the touch-target sizing rule used for Contact's mobile buttons), same fade-at-footer behavior.

---

## Section 1 — Hero

**Classification:** Container.

**Desktop**
- Project name, large scale: Plus Jakarta Sans, `clamp(3rem, 6vw, 6rem)` — this is the project's actual name treated with hero-equivalent weight (consistent with Design.md 2.3's hero-scale `clamp()` exception), since the case study's entire opening job is announcing what this is before anything else loads.
- Small detail line directly below at `120ms` stagger: Archivo `16px`, uppercase-adjacent small-label weight — category/year/one-line framing (e.g. project type, live-since date), same treatment tier as Team's role label or Capabilities' "Currently Building" label.
- Min-height `60vh`, content vertically centered — leaner than Home's `75vh` since this visitor already chose to click into this specific case study from Work.md; there's no "is this for me" recognition work left to do, only "here's what you're about to see."

**Mobile (375px)**
- `padding-top: 96px` for nav clearance (stripped nav still needs the same clearance value, since it occupies the same vertical space as the standard notch bar).
- Project name within `32px` side padding, `clamp()` already scales toward the mobile floor. Detail line follows.

**Motion:** Standard reveal, page-load entrance sequence (Animations.md Section 4) on first arrival — project name uses heading-tier timing (`850ms`), detail line follows at `120ms` stagger using body-tier timing.

---

## Section 2 — Lead Render (Render Tier)

**Classification:** Container.

**Toolkit application:** Case-Study-Template.md Section 3.0's Render tier — the one bespoke, full-color, full-scene environmental render per project, reserved for this exact position.

**Desktop**
- Full-bleed within the viewport width, but with deliberate left/right margin (not true edge-to-edge) — per the explicit instruction that this should carry a premium feel through restraint rather than maximal width. Margin: `5vw` each side (a proportional value consistent with the sitewide `88vw` container logic, Design.md 2.7, rather than a new arbitrary number).
- Height: near-full-viewport, consistent with Case-Study-Template.md 3.3's primary-slot default — this is the page's single most important image, so it gets the largest reference height any image on the page uses.
- Radius: `16px` (Card tier), same as every other image on the page — the render tier gets full-color treatment and privileged position, not a different corner radius; visual consistency of the frame itself stays constant even though what's inside it varies by tier.

**Mobile (375px)**
- Width steps down to Case-Study-Template.md 3.6's mobile default (~75vw), centered, same `16px` radius.
- Height: no forced near-full-viewport target on mobile, consistent with 3.6's mobile density relaxation — image scales naturally to its aspect ratio at the reduced width.

**Motion:** Fires as part of the page-load entrance sequence if positioned high enough to be visible on load, otherwise standard scroll-triggered reveal at heading-tier timing (`850ms`, per Case-Study-Template.md Section 5's rule that primary-tier images use heading-tier duration).

---

## Section 3 — Details: Problem

**Classification:** Container.

**Toolkit application:** Case-Study-Template.md Section 2.1 (Standard Head Pattern) — the default "claim, then explanation" ratio, appropriate here since the Problem statement is a direct claim (what was broken/missing before Codzee) followed by explanation, not a list or an isolated point.

**Content direction (structural only, no final copy):** per File-Structure.md, this section establishes that Zhabyart's extraordinary work existed but the digital presence did not communicate its quality — the specific gap between craft and presentation.

**Desktop**
- Heading (`1.25fr`) / body (`1fr`), `80px` gap, Plus Jakarta Sans `clamp(2rem, 3.5vw, 3rem)` heading, Archivo `18px` body.
- **Height cap applied:** per Case-Study-Template.md 2.5, this section is capped at roughly two-thirds the height of Section 2's primary render row — it orients the visitor quickly and hands off to the next gallery, it does not become a long-form essay.

**Mobile (375px)**
- Indent-Asymmetry Pattern (`24px` offset), same height-discipline principle applied proportionally (no fixed section height needed at mobile width, since mobile doesn't use the primary-row height reference the same way — content naturally stays brief because the desktop version was already kept brief).

**Motion:** Standard reveal, heading then body at `120ms` stagger.

---

## Section 4 — Gallery One

**Classification:** Identity — the specific slot sequence and width-pattern cycling is this gallery's own compositional decision, per Case-Study-Template.md Section 8, Rule 2.

**Toolkit application:**
- **Slot sequence:** Primary → Compact (group of 2) → Primary.
- **Width patterns used per row:** Primary rows use Pattern A (single image, full row) for both primary slots in this sequence; the compact group uses Pattern D (75/25 split) scaled to the compact tier.
- **Tier:** all images in this gallery are Framed Capture (Case-Study-Template.md 3.1) — screenshots of zhabyart.com itself (e.g. the portfolio grid view, the "Three Surfaces" section, a study detail page), never the client's own product renders, per the earlier confirmed distinction that Codzee's proof is the website build, not the photography inside it.

**Desktop**
- Follows Case-Study-Template.md 3.1's Framed Capture spec exactly: hairline frame matched to each screenshot's dominant tone, `24–32px` internal padding, `16px` radius, caption beneath each image (Archivo `14px`).
- Row heights: primary slots at near-full-viewport (3.3), compact group scaled down as one grouped band.

**Mobile (375px)**
- Single column per Case-Study-Template.md 3.6, ~75vw image width, same caption treatment, primary/compact height distinction relaxed as specified.

**Motion:** Per-element trigger per row (Case-Study-Template.md Section 5) — primary rows at heading-tier timing, the compact group reveals as one unit at body-tier timing.

---

## Section 5 — Details: Thinking + Build (Combined)

**Classification:** Container.

**Toolkit application:** Case-Study-Template.md Section 2.2 (Escalating Paragraph Pattern) — selected over the Standard Head Pattern here specifically because Thinking and Build are combined into one section (per the earlier confirmed call that Zhabyart's cohesive build doesn't need Thinking and Build split into two separate beats the way Orvari's will). A combined section carrying two ideas — the approach, then what that approach became — benefits from the Escalating Paragraph Pattern's sequential-paragraph structure more than a single heading/body split would, since there are genuinely two connected thoughts to move through, not one claim to explain.

**Content direction (structural only):** per File-Structure.md, covers how Codzee thought about atmosphere and psychology before building, then what was actually built — an editorial digital experience where every word and pixel was a decision.

**Desktop**
- Full reading-width column, `640px` max-width, sequential paragraphs at `24px` gaps (per 2.2's spec).
- **Height cap still applies** (Case-Study-Template.md 2.5) — even with two combined ideas, this section resolves within two-thirds of a primary-row height; if the real content genuinely cannot fit both Thinking and Build within that cap, that is a signal to reconsider the combined-section decision when real copy is written, not a reason to quietly let this section grow past the sitewide discipline.
- **Optional device:** Section 2.3's Isolated-Point Pattern is available here, once per section maximum, if a specific line about Zhabyart's approach deserves to stand alone (e.g. a specific atmospheric decision) — not committed to in this structural pass, flagged as available.

**Mobile (375px)**
- Same sequential-paragraph structure, full width within `32px` side padding, `24px` gaps preserved.

**Motion:** Standard reveal, paragraphs fire in sequence as they individually cross the viewport threshold (Animations.md 3.1's per-element trigger — not a combined single reveal for the whole block, since these are genuinely sequential paragraphs, not parallel content).

---

## Section 6 — Gallery Two

**Classification:** Identity — deliberately different slot sequence and width-pattern selection from Gallery One (Section 4), per Design.md Rule 2's adjacency discipline.

**Toolkit application:**
- **Slot sequence:** Compact (group of 3) → Primary — the inverse emphasis-order from Gallery One's Primary-first structure, so the two galleries don't share a rhythm even though both use primary and compact slots.
- **Width patterns used per row:** the compact group uses Pattern C (25/50/25 split); the closing primary slot uses Pattern A (single image, full row) — same width pattern as Gallery One's primary slots, but that repetition is acceptable since Gallery One and Gallery Two are not consecutive at the row level (Section 5's Details sits between them, breaking direct adjacency, same logic already established in About.md for its Section 1/Section 3 head-ratio repetition).
- **Tier:** Framed Capture throughout, real zhabyart.com screenshots (e.g. the "What We Offer" section, the process/gestures section, the contact section).

**Desktop / Mobile:** same Framed Capture and slot-sizing rules as Gallery One, applied to this gallery's own sequence.

**Motion:** Compact group reveals as one unit first (body-tier timing), primary slot follows as its own independent trigger at heading-tier timing.

---

## Section 7 — Result

**Classification:** Container.

**Toolkit application:** Case-Study-Template.md Section 2.1 (Standard Head Pattern), short — this is a closing statement, not a place for extended reasoning; the Escalating Paragraph Pattern used in Section 5 would be wrong here since Result is meant to land quickly, not build sequentially.

**Content direction (structural only):** per File-Structure.md — live site, verifiable at zhabyart.com; what this proves about Codzee stays implicit, never stated directly, per the Warehouse Rule.

**Desktop**
- Heading (`1.25fr`) / short closing statement (`1fr`), `80px` gap, same height-cap discipline as every other Details section (Case-Study-Template.md 2.5).
- **Proof/verification display (Case-Study-Template.md Section 6), mandatory, included here without exception:** the zhabyart.com live link, set apart on its own line beneath the closing statement — Archivo `18px`, underlined, small arrow glyph, not styled as the Tier 3 accent pill.

**Mobile (375px)**
- Indent-Asymmetry Pattern, proof link treatment identical, full width within standard side padding.

**Motion:** Standard reveal, heading then statement at `120ms` stagger; proof link fires with the statement, not as a separate trigger (it's part of the same closing thought, not an independent content moment).

---

## Section 8 — Testimonial

**Classification:** Container.

**Confirmed real, not a placeholder slot:** per this conversation, the Zhabyart testimonial is a real quote from a real person (Zhabyr Abenov or a relevant stakeholder), consistent with codzee-strategy.md's absolute rule against fake social proof — "we never fake social proof... no stock testimonials."

**Desktop**
- Client photo: real, consistent treatment with Team.md's photo spec (`4:5` aspect ratio, `16px` radius, full color) — same content-type logic as everywhere else photographic material appears on the site.
- Quote: set at a deliberately calm, editorial scale — Plus Jakarta Sans or Playfair italic is *not* used here (Playfair stays exclusive to Home's hero per Design.md 2.3's rarity rule) — Archivo at an elevated size, `clamp(1.5rem, 2.5vw, 2rem)`, distinct from standard body copy but not competing with the page's actual headings.
- Attribution line beneath the quote: name + role, Archivo `16px`, muted weight.
- Layout: photo and quote block placed asymmetrically (per Design.md Rule 7 — this is a genuinely unequal-weight pairing, quote is primary, photo is supporting, unlike Team's uniform-cards exception), photo smaller, offset to one side, quote taking the dominant width.

**Mobile (375px)**
- Stacks: photo above (smaller, centered or offset per the Indent-Asymmetry logic), quote below, attribution last. `24px` gaps.

**Motion:** Standard reveal, photo and quote fire together as one group at body-tier timing (`700ms`) — this is one cohesive moment, not a sequence needing internal stagger.

---

## Section 9 — Next Projects Preview

**Classification:** Container.

**Content direction:** per File-Structure.md, Zhabyart leads to `/work/pennify`, `/work/orvari`, `/contact` — this section surfaces the other two case studies as a natural next step, consistent with Work.md's own project-card treatment (kept consistent across pages so a visitor recognizes the same project-card language they saw on `/work`).

**Desktop**
- Two project cards (Pennify, Orvari), same visual treatment as Work.md's cards (image + title + one-sentence problem statement — reused deliberately since this is the same component doing the same job in a different context, not a new invented card style).
- Positioned side by side, asymmetric per Design.md Rule 7 (not evenly split — one card slightly larger/offset, consistent with Work's own asymmetric precedent rather than defaulting to a neutral 50/50 grid here).

**Mobile (375px)**
- Stacked, single column, same alternating-indent logic Work.md's mobile treatment already established for exactly this situation (unequal projects, indent direction alternating between them).

**Motion:** Standard reveal, cards fire together as parallel content (body-tier timing) — not staggered, since they're two equal next-step options, not a sequence.

---

## Section 10 — Contact (Closing)

**Classification:** Container.

**Design decision:** consistent with every other page's closing precedent — not a reuse of Home's full-height "Let's Talk" moment. Temperature: this visitor has just finished a full case study read, comparably warm to Team's or About's closing state — warmer than Services/Capabilities, not as warm as Process's fully-addressed-anxiety close.

**Desktop**
- Single line (Archivo `22px`, max-width `560px`) + Tier 1 solid-black-pill CTA (Design.md 3.2), same terminal-action treatment used at every other page's close.
- Not full-height, padding `96px 64px`.

**Mobile (375px)**
- Stacked: line, then pill, `16px` gap. Padding `64px 24px`.

**Motion:** Standard reveal, single trigger.

**Note on stripped nav/footer interaction:** the Visit Live Site action (Section 0) fades out as this page's Footer (which follows immediately after this Contact-closing section, per the sitewide Footer placement) enters view — confirmed behavior, not repeated in full here since it's fully specified in Section 0.

---

## Section 11 — Full Section Order (Summary)

1. Stripped Nav + Visit Live Site action (persistent chrome, not a scroll section)
2. Hero
3. Lead Render (Render tier)
4. Details — Problem
5. Gallery One
6. Details — Thinking + Build (combined)
7. Gallery Two
8. Result (+ mandatory proof/verification link)
9. Testimonial
10. Next Projects Preview
11. Contact (closing)
12. Footer

Confirms the locked spine (Problem → Thinking/Build → Result, Sections 4/6/8) is intact, confirms the alternating Detail/Gallery rhythm (Sections 4–7) is followed as the default, and confirms every Case-Study-Template.md Section 8 assembly requirement is satisfied: spine stated, patterns justified per section, one Render-tier lead image specified, multi-deliverable pattern explicitly confirmed unused (Section 12 below), proof/verification included, adjacency checked (Section 6's width-pattern repetition of Section 4 justified by non-adjacency, same precedent as About.md).

---

## Section 12 — Multi-Deliverable Pattern: Confirmed Unused

Per Case-Study-Template.md Section 4's usage rule — Zhabyart's build is one cohesive website, not multiple distinct deliverables. This page does not use the multi-deliverable block pattern anywhere; "What Was Built" content lives inside Section 5's combined Thinking + Build section instead, exactly as Case-Study-Template.md anticipated for this project specifically.

---

## Open Items Carried Forward

1. **Real problem/thinking/build/result copy** — content, not structure, deferred to a dedicated copy session per Copywriting.md's own instruction for case studies.
2. **Exact images selected per gallery, and which are classified primary vs. compact** — a content decision per Case-Study-Template.md 3.3, made once real Zhabyart website screenshots are captured.
3. **Lead render production** — the Section 2 render itself doesn't exist yet; this file assumes its eventual dimensions/orientation fit the near-full-viewport primary treatment but the actual render will confirm or adjust that.
4. **Real testimonial text and attribution** — confirmed as genuine and available, but not transcribed here; content session item.
5. **Isolated-Point Pattern usage in Section 5** — flagged as available, not committed to; confirmed only once real Thinking/Build copy exists and a genuine standout line is identified.

---

*This document governs structure only. It inherits every shared pattern from Case-Study-Template.md without restating them in full — Framed Capture spec, width-pattern library, slot tiers, height discipline, motion notes. Sitewide rules inherited without restating: Design.md (tokens, button tiers, notch-card system where applicable, Rule 7 asymmetry logic), Animations.md (standard reveal system, tier values), Copywriting.md (case-study voice rules — Codzee's own voice describing Zhabyart's atmosphere, not imitating it, per the distinction confirmed in discussion), File-Structure.md (page scope, outbound links). The stripped-nav/Visit-Live-Site chrome exception (Section 0) will be formalized alongside its Contact-page counterpart in the future Site-Exceptions.md file.*
