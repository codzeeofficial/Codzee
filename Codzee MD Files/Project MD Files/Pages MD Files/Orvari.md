# Codzee — Orvari.md (Case Study)

**Version 1.0**
**Status: Draft — complete pass**
**Purpose: The complete structural specification for the Orvari case study page (`/work/orvari`), mobile and desktop, section by section. This file applies Case-Study-Template.md's toolkit — it does not redefine any shared pattern, it selects from and sequences the toolkit, justifying each choice, per that file's own Section 8 assembly rule. This is the file that settles Case-Study-Template.md Section 4's multi-deliverable pattern at full intensity — four genuinely distinct deliverables (backend admin panel, mobile admin app, customer storefront, waybill/courier system), the situation that pattern was originally built for. This file does not contain final copy — problem specifics, testimonial text, and exact image selection are written in a dedicated copy session.**

---

## How To Use This Document

Case-Study-Template.md governs everything reused here without restating it. Section 0's stripped-nav/Visit-Live-Site chrome is fully specified in Zhabyart.md Section 0, inherited identically. What makes Orvari structurally different from both prior case studies: it is the strongest problem/solution story in the portfolio (File-Structure.md), it has a genuine named list of failure points (five, already specified in codzee-strategy.md and File-Structure.md), and its build is four real, separate deliverables rather than one cohesive product — which is why, unlike Zhabyart (Thinking+Build combined) and Pennify (Thinking+Build combined with a light two-block Build), Orvari's complexity earns Thinking and Build **separate** sections, per the reasoning already flagged when Case-Study-Template.md Section 4 was first written.

---

## Section 0 — Stripped Nav & Visit-Live-Site Action

Identical to Zhabyart.md Section 0 — inherited without modification.

---

## Section 1 — Hero

**Classification:** Container.

**Desktop**
- Project name, `clamp(3rem, 6vw, 6rem)`, same hero-equivalent treatment as the other two case studies.
- Small detail line at `120ms` stagger, category/live-since framing.
- Min-height `60vh`, vertically centered.

**Mobile (375px)**
- `padding-top: 96px`, standard side padding, same stagger.

**Motion:** Standard reveal, heading-tier then body-tier, page-load entrance sequence on first arrival.

---

## Section 2 — Lead Render (Render Tier)

**Classification:** Container.

**Toolkit application:** Case-Study-Template.md Section 3.0's Render tier. Given Orvari's four-surface build, this render should represent the **operational system as a whole** — likely a composed scene suggesting the connected nature of the platform (admin panel and mobile device together, or a scene implying the storefront-to-fulfillment pipeline) rather than any single surface, consistent with how Pennify's render represents "the product" rather than favoring one of its two surfaces. This is the one render across all three case studies with the most surfaces to represent honestly, worth extra care when it's actually produced.

**Desktop/Mobile:** identical spec to Zhabyart Section 2 and Pennify Section 2 — `5vw` margin, near-full-viewport primary height desktop, ~75vw mobile, `16px` radius.

**Motion:** Same as prior two case studies.

---

## Section 3 — Details: Problem

**Classification:** Container, using the **Named List Pattern** (Case-Study-Template.md 2.4) rather than the Standard Head Pattern used in Zhabyart's and Pennify's Problem sections — the first genuine use of this pattern across the three case studies, and exactly the situation it was written for: this is a real, itemized list (five specific failure points), not a single continuous claim.

**Content direction (structural only):** per codzee-strategy.md and File-Structure.md — five specific failure points of COD e-commerce that Shopify's fulfilment assumptions don't solve: fake orders, RTO management, cash reconciliation, inventory drift, staff accountability. Named directly, not ordered by importance (per 2.4's rule — no numbering unless the sequence itself is meaningful, and these five aren't sequential).

**Desktop**
- Short intro line above the list (why Shopify's fulfilment model doesn't match COD reality) — Plus Jakarta Sans, `clamp(2rem, 3.5vw, 3rem)`, functioning as this section's heading.
- Five list items below, each a short bolded label (the failure point name) + one to two sentences, `16px` gaps, per 2.4's exact spec. No column split — full reading-width column, consistent with how a list reads best as one continuous column rather than split against a paired heading.
- **Height cap relaxed here, deliberately, with reasoning stated:** Case-Study-Template.md 2.5's two-thirds-of-primary-row cap is written for single-claim Details sections; a genuine five-item list is structurally different content, not padding, and forcing five real failure points into a compressed height would either cut real content or cramp it illegibly. This section is allowed to exceed the standard cap — the height-discipline principle (page stays image-forward, text stays quiet) is preserved instead by keeping every item to its stated one-to-two-sentence limit strictly, so the section is only as tall as five genuinely brief items require, not by forcing an artificial ceiling on top of real content Codzee's own strategy document already named as five specific things.
- **Comparison Pairing available here (Case-Study-Template.md 3.5), content-gated:** if the real copy ends up explicitly contrasting "Shopify's assumption" against "COD reality" for one or more of the five points, that specific point may use the Comparison Pairing device inline rather than plain list-item text. Not committed to in this structural pass — flagged as available, matching the same content-gated caution applied to this pattern in the template itself.

**Mobile (375px)**
- Same intro line, same five-item list, full width within `32px` side padding, same `16px` gaps.

**Motion:** Intro line fires first (heading-tier), the five list items reveal as one group at body-tier timing — they're parallel, not sequential, same logic as every other named-list/belief-block treatment across the site (About's beliefs, Services' Layout 4 sub-columns).

---

## Section 4 — Gallery One (System Overview)

**Classification:** Identity.

**Toolkit application:**
- **Slot sequence:** Primary → Compact (group of 3) — an overview gallery positioned here, before the deeper per-deliverable galleries embedded in Section 6's Build blocks, giving the visitor a sense of the whole system before it's broken into parts.
- **Width patterns:** primary slot uses Pattern A (full row); compact group uses Pattern C (25/50/25).
- **Tier:** Framed Capture — a general admin-panel overview shot, a storefront overview, a mobile-app overview, presented together as "here's the system," ahead of the deliverable-by-deliverable depth that follows in Section 6.

**Desktop/Mobile:** standard Framed Capture and mobile rules apply, per Case-Study-Template.md 3.1 and 3.6.

**Motion:** Primary slot at heading-tier timing, compact group at body-tier.

---

## Section 5 — Details: Thinking

**Classification:** Container, kept **separate from Build** — the deliberate structural difference from both Zhabyart and Pennify, justified by Orvari's complexity giving Build genuine independent weight (per the reasoning flagged when Case-Study-Template.md Section 4 was first written, now actually applied).

**Toolkit application:** Escalating Paragraph Pattern (Case-Study-Template.md 2.2) — appropriate here since the reasoning behind a four-deliverable system (why a custom commerce OS instead of a Shopify workaround, why these four specific surfaces and not a simpler single-panel approach) genuinely needs sequential paragraphs to build the argument, not a single claim-then-explanation pairing.

**Content direction (structural only):** per File-Structure.md — how Codzee thought about the problem before proposing anything; the reasoning that led to a purpose-specific platform rather than a Shopify customization.

**Desktop**
- Full reading-width column, `640px` max-width, sequential paragraphs at `24px` gaps.
- Standard height cap applies here (unlike Section 3's relaxed cap) — this is genuinely a "claim/reasoning" section, not a real itemized list, so Case-Study-Template.md 2.5's two-thirds cap governs normally.

**Mobile (375px)**
- Same sequential structure, `32px` side padding.

**Motion:** Standard reveal, paragraphs fire in sequence via per-element trigger.

---

## Section 6 — Build (Four-Block Pattern, Full Intensity)

**Classification:** Identity — this section is Case-Study-Template.md Section 4's multi-deliverable pattern used exactly as originally specified, at full four-block intensity, the situation the pattern was built for.

**Toolkit application, per block, following Case-Study-Template.md Section 4 exactly:**

- **Block One — Admin Panel (CMS, multi-role RBAC, audit logs, inventory tracking).** Label, short problem-context line (why a real admin panel was needed over Shopify's default backend), inline image slot sequence: Primary → Compact (2), Framed Capture tier, Pattern A then Pattern B.
- **Block Two — Courier & Waybill Management (courier management, waybill generation, blacklist system).** Label, context line (the fulfilment-specific failure points this directly answers — RTO management, fake-order defense), inline sequence: Compact (3) → Primary, Pattern C then Pattern A.
- **Block Three — Customer Storefront.** Label, context line (what the customer-facing side needed to support behind the operational complexity), inline sequence: Primary → Compact (2), Pattern D then Pattern B.
- **Block Four — Mobile Admin App.** Label, context line (why staff needed a mobile-native tool, not just a responsive web panel — ties to the staff-accountability failure point from Section 3), inline sequence: Primary → Compact (2), Pattern B then Pattern C — deliberately not repeating Block One's exact pattern pairing despite both opening with a Primary slot, since the compact-group pattern differs (B here vs. B in Block One as well — **flagged as a genuine adjacency conflict requiring resolution before final build**, see note below).

**Adjacency note, stated directly rather than silently left inconsistent:** Block One and Block Four both use a Primary→Compact(2) sequence with Pattern B in the compact slot — since they are not adjacent to each other (Blocks Two and Three sit between them), this repetition is acceptable under Design.md Rule 2's adjacency-specific wording, same precedent already used in Pennify's Gallery One/Two width-pattern repetition and About's Section 1/3 head-ratio repetition. Stated explicitly here so it reads as a deliberate, checked decision rather than an oversight.

**Desktop**
- Four blocks stack vertically, `80px` gap between them — Case-Study-Template.md Section 4's full desktop spacing value (not Pennify's lighter `48px`), since this is the full-intensity version the value was originally set for.
- Each block: small label (Archivo `14px` uppercase) + context line + inline image sequence, exactly per the template's spec.

**Mobile (375px)**
- Same four-block stack, `48px` gap between blocks (Case-Study-Template.md Section 4's stated mobile value).

**Motion:** Standard reveal per block — label/context fire together, inline images follow their own per-element/tier-based reveal rules (primary at heading-tier, compact groups at body-tier), consistent with every other gallery on the site. Blocks themselves do not stagger against each other as a sequence (they're four parallel deliverables of one system, not an ordered sequence) — each block reveals independently as it crosses the viewport threshold.

---

## Section 7 — Result

**Classification:** Container.

**Toolkit application:** Standard Head Pattern (Case-Study-Template.md 2.1), short.

**Content direction (structural only):** per File-Structure.md — live business running on this platform, verifiable. What this proves about Codzee stays implicit, per the Warehouse Rule — this section proves Codzee mapped and solved a real operational problem, never that Codzee "specializes in COD e-commerce," per codzee-strategy.md's explicit caution about exactly this project.

**Desktop**
- Heading (`1.25fr`) / closing statement (`1fr`), `80px` gap, height-capped per 2.5.
- **Proof/verification display (mandatory, Case-Study-Template.md Section 6):** the live business reference, isolated on its own line.

**Mobile (375px)**
- Indent-Asymmetry Pattern, same proof treatment.

**Motion:** Standard reveal, heading then statement at `120ms` stagger; proof link fires with the statement.

---

## Section 8 — Testimonial

**Classification:** Container.

**Confirmed real or dropped, same conditional rule as Pennify.md Section 9:** used only if a genuine testimonial exists for Orvari's client, per codzee-strategy.md's absolute no-fake-social-proof rule. If real, identical spec to Zhabyart.md Section 8. If not currently available, this section is dropped from the page entirely rather than filled with placeholder content.

---

## Section 9 — Next Projects Preview

**Classification:** Container.

**Content direction:** per File-Structure.md, Orvari leads to `/work/pennify`, `/work/zhabyart`, `/contact` — identical two-card treatment to the other two case studies.

**Desktop/Mobile/Motion:** identical spec to Zhabyart.md Section 9 and Pennify.md Section 10.

---

## Section 10 — Contact (Closing)

**Classification:** Container.

**Desktop:** single line (Archivo `22px`) + Tier 1 solid-black-pill CTA, padding `96px 64px`.
**Mobile:** stacked, `16px` gap, padding `64px 24px`.
**Motion:** Standard reveal, single trigger.

---

## Section 11 — Full Section Order (Summary)

1. Stripped Nav + Visit Live Site (persistent chrome)
2. Hero
3. Lead Render (Render tier)
4. Details — Problem (Named List Pattern, five failure points)
5. Gallery One — System Overview
6. Details — Thinking (kept separate from Build)
7. Build — four-block pattern, full intensity (Admin Panel / Courier & Waybill / Storefront / Mobile Admin App, each with inline image sequence)
8. Result (+ mandatory proof/verification link)
9. Testimonial (real, or dropped if unavailable)
10. Next Projects Preview
11. Contact (closing)
12. Footer

**Deviation from the default Detail→Gallery→Detail→Gallery rhythm, stated directly:** Orvari's sequence is Detail(Problem)→Gallery(Overview)→Detail(Thinking)→Build(with four embedded image sequences)→Result — the strict alternation breaks once Build begins, since Build's four blocks each carry their own inline imagery rather than sitting behind a separate top-level Gallery section. This mirrors the same reasoning already used for Pennify's Gallery Two/Three adjacency: the images are structurally part of the Build content itself, not a separate rhythm beat, so forcing a redundant standalone gallery after Thinking would either duplicate Build's own imagery or introduce content with nothing new to prove.

Confirms the locked spine (Problem → Thinking → Build → Result, Sections 4/6/7/8) is intact and — unlike the other two case studies — genuinely uses all four spine positions as fully separate sections, consistent with Orvari being the complexity case the spine's four-part structure was designed to accommodate in the first place.

---

## Section 12 — Multi-Deliverable Pattern: Confirmed Used (Full Intensity)

Per Case-Study-Template.md Section 4's usage rule — Orvari is the project that pattern was originally written for. Full four-block treatment, `80px` desktop block spacing (the template's stated full-intensity value, not Pennify's lighter `48px`), each block carrying its own labeled context and inline image sequence. This is the last of the three open "which intensity does each project use" questions to resolve — Zhabyart: unused, Pennify: light two-block, Orvari: full four-block — all three now settled across the three project files.

---

## Open Items Carried Forward

1. **Real problem/thinking/build/result copy** — content, not structure, deferred to a dedicated copy session.
2. **Exact images selected per block, and primary vs. compact classification** — content decision, made once real Orvari screenshots exist.
3. **Lead render production** — same standing note as the other two case studies; this file assumes a composed "system as a whole" direction, to be confirmed or adjusted once the actual render exists.
4. **Whether a real Orvari testimonial currently exists** — Section 8 handles both outcomes, same conditional approach as Pennify.
5. **Comparison Pairing usage in Section 3** — flagged as available for one or more of the five failure points if real copy ends up explicitly framing a Shopify-assumption-vs-reality contrast; not committed to in this structural pass.
6. **Section 3's relaxed height cap** — this file argues the two-thirds cap shouldn't mechanically apply to a genuine five-item list; worth confirming this reasoning holds once real copy shows how long the five items actually run.

---

*This document governs structure only. It inherits every shared pattern from Case-Study-Template.md without restating them in full. Sitewide rules inherited without restating: Design.md (tokens, button tiers, Rule 7 asymmetry logic, Rule 2 adjacency logic), Animations.md (standard reveal system, tier values), Copywriting.md (case-study voice and sequencing rules, Proof Rule, Warehouse Rule — with particular caution flagged for this project given codzee-strategy.md's explicit warning against sounding like "the studio that specializes in COD e-commerce"), File-Structure.md (page scope, five-failure-point content requirement, outbound links). Stripped-nav/Visit-Live-Site chrome fully specified in Zhabyart.md Section 0, inherited identically here.*
