# Codzee — Pennify.md (Case Study)

**Version 1.0**
**Status: Draft — complete pass**
**Purpose: The complete structural specification for the Pennify case study page (`/work/pennify`), mobile and desktop, section by section. This file applies Case-Study-Template.md's toolkit — it does not redefine any shared pattern, it selects from and sequences the toolkit, justifying each choice, per that file's own Section 8 assembly rule. This file does not contain final copy — problem specifics, testimonial text, and exact image selection are written in a dedicated copy session.**

---

## How To Use This Document

Case-Study-Template.md governs everything reused here without restating it: the Framed Capture treatment, the width-pattern library, primary/compact slot tiers, the Details height cap, the Detail→Gallery rhythm, motion notes, container/type defaults, and Section 0's stripped-nav/Visit-Live-Site chrome (fully specified once in Zhabyart.md, inherited identically here, not repeated in full below). What makes Pennify structurally different from Zhabyart is the two-surface build — a marketing site and a SaaS product (web app + Android) — which invokes Case-Study-Template.md Section 4's multi-deliverable pattern at its **lighter, two-block intensity**, per that section's own stated usage rule.

---

## Section 0 — Stripped Nav & Visit-Live-Site Action

Identical to Zhabyart.md Section 0 — Codzee logo only, no links, no Contact button; Visit Live Site action fixed bottom-center, fades at Footer entry (Base tier, `600ms`). Not repeated in full here; inherited without modification, per the confirmed sitewide rule that this exception applies identically across all three case study pages.

---

## Section 1 — Hero

**Classification:** Container.

**Desktop**
- Project name, large scale: Plus Jakarta Sans, `clamp(3rem, 6vw, 6rem)`, same hero-equivalent treatment as Zhabyart's.
- Small detail line at `120ms` stagger: Archivo `16px`, small-label weight — category/live-since framing.
- Min-height `60vh`, vertically centered — same reasoning as Zhabyart: this visitor already clicked in from Work.md, no recognition work left to do.

**Mobile (375px)**
- `padding-top: 96px`. Project name within `32px` side padding, detail line follows.

**Motion:** Standard reveal, heading-tier then body-tier at `120ms` stagger, page-load entrance sequence on first arrival.

---

## Section 2 — Lead Render (Render Tier)

**Classification:** Container.

**Toolkit application:** Case-Study-Template.md Section 3.0's Render tier — the single bespoke, full-color environmental render for this project. Given Pennify's two-surface nature, this render should represent the product as a whole rather than favoring either surface — likely a composed scene showing the web dashboard and mobile app together (device-in-context, both surfaces visible), rather than picking one to lead with, since neither the marketing site nor the app alone represents "what Pennify is" as completely as both together.

**Desktop**
- Same spec as Zhabyart Section 2: `5vw` side margin (not full edge-to-edge), near-full-viewport primary height, `16px` radius.

**Mobile (375px)**
- Same as Zhabyart: ~75vw width, no forced height target, same radius.

**Motion:** Same as Zhabyart Section 2 — entrance sequence if visible on load, otherwise heading-tier scroll reveal.

---

## Section 3 — Details: Problem

**Classification:** Container.

**Toolkit application:** Standard Head Pattern (Case-Study-Template.md 2.1).

**Content direction (structural only):** per File-Structure.md — why existing expense trackers failed for a specific type of user; specific, honest, human framing of the gap Codzee identified.

**Desktop**
- Heading (`1.25fr`) / body (`1fr`), `80px` gap. Height capped at two-thirds of Section 2's primary render row, per Case-Study-Template.md 2.5.

**Mobile (375px)**
- Indent-Asymmetry Pattern, `24px` offset.

**Motion:** Standard reveal, heading then body at `120ms` stagger.

---

## Section 4 — Gallery One (Marketing Site)

**Classification:** Identity.

**Toolkit application:**
- **Slot sequence:** Primary → Compact (group of 2).
- **Width patterns:** primary slot uses Pattern A (full row); compact group uses Pattern B (60/40 split).
- **Tier:** Framed Capture throughout — real marketing-site screenshots (e.g. the homepage, a pricing/feature section if one exists, the site's own hero).

**Desktop/Mobile:** follows Case-Study-Template.md 3.1 and 3.6 exactly — hairline frame, caption per image, `16px` radius, ~75vw mobile width.

**Motion:** Primary slot at heading-tier timing; compact group reveals as one unit at body-tier timing.

---

## Section 5 — Details: Thinking + Build (Two-Block Pattern)

**Classification:** Container, with an internal two-block structure — the lighter intensity of Case-Study-Template.md Section 4's multi-deliverable pattern, distinct from Zhabyart's single combined block and short of Orvari's presumed full four-block treatment.

**Toolkit application:** Escalating Paragraph Pattern (Case-Study-Template.md 2.2) for the shared Thinking portion (how Codzee approached the split between a marketing presence and a real product), followed by two labeled sub-blocks for Build — matching Case-Study-Template.md Section 4's block structure (small label + short problem-context line + note on which gallery covers that block's proof):

- **Block One — Marketing Site.** Label, one-line context (why a dedicated marketing presence mattered alongside the product itself), points to Gallery One (Section 4) as its visual proof, already shown above this section per the Detail→Gallery→Detail rhythm.
- **Block Two — Product (Web + Android).** Label, one-line context (the actual SaaS build — auth, billing tiers, dashboard, offline-first sync, Android app, per File-Structure.md's content scope), points forward to Galleries Two and Three (Sections 6–7) as its visual proof.

**Desktop**
- Thinking portion: full reading-width column, `640px` max-width, sequential paragraphs at `24px` gaps.
- Two blocks stack beneath it, `48px` gap between blocks (lighter separation than Case-Study-Template.md Section 4's desktop `80px` — appropriate for the two-block intensity, which is explicitly a lighter version of the pattern, not a scaled-down copy of Orvari's four-block spacing).
- **Height cap:** per Case-Study-Template.md 2.5, still capped at two-thirds of a primary-row height — same self-check as Zhabyart's combined section: if real content can't resolve within that cap even at the lighter two-block intensity, that's a signal to reconsider before default-inflating this section past the sitewide discipline.

**Mobile (375px)**
- Sequential paragraphs, then two blocks stacked with `32px` gap between them (base-4 step between desktop's `48px` and the sitewide mobile reduction pattern used elsewhere).

**Motion:** Thinking paragraphs fire in sequence (per-element trigger); the two blocks reveal as one group at body-tier timing, not staggered against each other — they're parallel deliverables being introduced together, not a sequence (same logic as Case-Study-Template.md Section 4's general block treatment).

---

## Section 6 — Gallery Two (Web App / Dashboard)

**Classification:** Identity — deliberately different sequence/pattern from Gallery One, per Design.md Rule 2.

**Toolkit application:**
- **Slot sequence:** Compact (group of 3) → Primary → Compact (group of 2) — a longer, denser sequence than Gallery One's, appropriate given "a lot of screens" to cover for the dashboard/web product specifically.
- **Width patterns:** first compact group uses Pattern C (25/50/25); primary slot uses Pattern A; closing compact group uses Pattern D (75/25) — three different patterns within one gallery, none repeating consecutively.
- **Tier:** Framed Capture — dashboard views, billing/tier screens, sync-state screens.

**Desktop/Mobile:** standard Framed Capture and mobile rules apply.

**Motion:** Per-element trigger per row; compact groups at body-tier, primary slot at heading-tier.

---

## Section 7 — Gallery Three (Android App)

**Classification:** Identity — distinct sequence from both Gallery One and Gallery Two.

**Toolkit application:**
- **Slot sequence:** Primary → Compact (group of 3) — inverse order from Gallery Two's compact-first structure, keeping the two consecutive galleries (Six and Seven sit back-to-back with no Details section between them, since Section 5's Build content already covers both) visually distinct despite being adjacent.
- **Width patterns:** primary slot uses Pattern B (60/40, since a single mobile screenshot doesn't need the full-bleed weight of Pattern A the way a dashboard view does — a narrower primary treatment suits a portrait-oriented mobile screen better); compact group uses Pattern C (25/50/25).
- **Tier:** Framed Capture — core app screens, an offline-sync state, a key mobile-specific interaction.

**Adjacency note:** Galleries Two and Three are the one place on this page where two image sections sit back-to-back without a Details section between them — a deliberate deviation from the sitewide Detail→Gallery→Detail rhythm, justified because both galleries are proof for the same Section 5 Build content (the "Product" block covers both web and Android), and splitting them with a redundant Details section would mean writing a second Build explanation with nothing new to say. The two galleries' differing slot sequences and width patterns (compact-first vs. primary-first, differing pattern choices) are what keep this adjacency from reading as one repeated module, consistent with Design.md Rule 2's actual requirement — no repeated *pattern*, not a hard rule that image sections can never be adjacent to each other.

**Motion:** Same per-element/tier-based rules as every other gallery.

---

## Section 8 — Result

**Classification:** Container.

**Toolkit application:** Standard Head Pattern (Case-Study-Template.md 2.1), short.

**Content direction (structural only):** per File-Structure.md — live product, real users, verifiable at pennify.app. File-Structure.md also flags Pennify specifically as needing a "technical depth" beat for the founder who wants to know how it was built — that content lives inside this Result section as an additional short paragraph (not a separate Details section of its own, since it's an extension of the result/outcome, not a new spine position) rather than inflating the page's total section count for a single founder-audience detail.

**Desktop**
- Heading (`1.25fr`) / closing statement + optional technical-depth line (`1fr`), `80px` gap, height-capped per 2.5.
- **Proof/verification display (mandatory, Case-Study-Template.md Section 6):** pennify.app live link, isolated on its own line beneath the statement.

**Mobile (375px)**
- Indent-Asymmetry Pattern, same proof link treatment.

**Motion:** Standard reveal, heading then statement at `120ms` stagger; proof link fires with the statement.

---

## Section 9 — Testimonial

**Classification:** Container.

**Confirmed real:** same standing rule as Zhabyart's — no fake social proof, per codzee-strategy.md. If a real Pennify testimonial exists, this section is used exactly as Zhabyart.md Section 8 specifies (photo + quote, asymmetric per Rule 7, `4:5` photo radius `16px`). If no real testimonial currently exists for this project, this section is dropped entirely rather than filled with a placeholder — consistent with the sitewide rule that a page's section count flexes around what's actually real, not the other way around.

**Desktop/Mobile/Motion:** identical spec to Zhabyart.md Section 8, not repeated here.

---

## Section 10 — Next Projects Preview

**Classification:** Container.

**Content direction:** per File-Structure.md, Pennify leads to `/work/orvari`, `/work/zhabyart`, `/contact` — same two-card treatment as Zhabyart's, reused deliberately as the same component doing the same job (consistent with Work.md's card language).

**Desktop/Mobile/Motion:** identical spec to Zhabyart.md Section 9.

---

## Section 11 — Contact (Closing)

**Classification:** Container.

**Desktop:** single line (Archivo `22px`) + Tier 1 solid-black-pill CTA, padding `96px 64px`.
**Mobile:** stacked, `16px` gap, padding `64px 24px`.
**Motion:** Standard reveal, single trigger.

---

## Section 12 — Full Section Order (Summary)

1. Stripped Nav + Visit Live Site (persistent chrome)
2. Hero
3. Lead Render (Render tier)
4. Details — Problem
5. Gallery One — Marketing Site
6. Details — Thinking + Build (two-block pattern)
7. Gallery Two — Web App / Dashboard
8. Gallery Three — Android App
9. Result (+ mandatory proof/verification link, technical-depth beat folded in)
10. Testimonial (real, or dropped if unavailable)
11. Next Projects Preview
12. Contact (closing)
13. Footer

Confirms the locked spine (Problem → Thinking/Build → Result, Sections 4/6/9) is intact. Confirms one deliberate rhythm deviation (Galleries Two and Three sit adjacent, justified in Section 7 above) against the otherwise-default Detail→Gallery alternation. Confirms Case-Study-Template.md Section 8's assembly requirements: spine stated, patterns justified per section, one Render-tier lead image specified, multi-deliverable pattern confirmed used at two-block intensity (Section 13 below), proof/verification included, adjacency checked throughout.

---

## Section 13 — Multi-Deliverable Pattern: Confirmed Used (Two-Block Intensity)

Per Case-Study-Template.md Section 4's usage rule — Pennify uses the lighter two-block version of the multi-deliverable pattern (Marketing Site / Product), housed inside Section 5, distinct from Zhabyart's unused case and short of Orvari's anticipated full four-block treatment. This resolves the open question carried forward from Case-Study-Template.md's own open items about what Pennify's version of this pattern should look like.

---

## Open Items Carried Forward

1. **Real problem/thinking/build/result copy** — content, not structure, deferred to a dedicated copy session.
2. **Exact images selected per gallery, and primary vs. compact classification** — content decision, made once real Pennify screenshots exist.
3. **Lead render production** — same standing note as Zhabyart's; this file assumes a combined web+mobile composition but the actual render will confirm or adjust that direction.
4. **Whether a real Pennify testimonial currently exists** — Section 9 is written to handle both outcomes (used if real, dropped if not) rather than assuming one.
5. **Technical-depth beat's actual length** — File-Structure.md flags this as real content Pennify specifically needs; this file folds it into Result rather than giving it a dedicated section, but if the real technical content turns out to be substantial, that decision may need revisiting once copy is drafted.

---

*This document governs structure only. It inherits every shared pattern from Case-Study-Template.md without restating them in full. Sitewide rules inherited without restating: Design.md (tokens, button tiers, Rule 7 asymmetry logic), Animations.md (standard reveal system, tier values), Copywriting.md (case-study voice and sequencing rules, Proof Rule, Warehouse Rule), File-Structure.md (page scope, technical-depth requirement specific to this project, outbound links). Stripped-nav/Visit-Live-Site chrome fully specified in Zhabyart.md Section 0, inherited identically here.*
