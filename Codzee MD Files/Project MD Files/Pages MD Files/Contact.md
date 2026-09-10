# Codzee — Contact.md

**Version 1.0**
**Status: Draft — complete pass**
**Purpose: The complete structural specification for the Contact page (`/contact`), mobile and desktop, at the same depth as the site's other page files. This page was explicitly flagged during Home.md's original pass as needing its own dedicated session, not a scale-down of Home's Contact section — this file is that session. This file does not contain final copy or form-field microcopy — those are written in a future dedicated session.**

---

## How To Use This Document

Nav and Footer are universal (Design.md 3.1, 3.4) — not repeated here. Copywriting.md is explicit that this visitor "has already decided" — the page's job is to not undo that decision, not to convince. No agreement headline, no clarity headline in the persuasive sense — the page should get to the form as fast as honestly possible.

**Resolved: no asymmetry exception is needed.** Earlier discussion proposed treating Contact like Terms/Privacy (a documented exemption from Design.md Rule 7) on the theory that a functional form shouldn't be forced into artificial offset. That's no longer necessary — the confirmed layout (heading/supporting text in one column, the form itself in a second column) already satisfies Rule 7 at the page-composition level, the same way Home's Studio section pairs a label column against a content column. The exception is withdrawn; Contact follows the sitewide asymmetry rule normally, just expressed as a label/content split rather than a heading/body split.

---

## Section 0 — Hero / Opening

**Classification:** Container.

**Desktop**
- Minimal — no separate full-height hero block. This page's entire job is to get to the form fast (per Copywriting.md: "the shortest path to the form is the correct path"); a dedicated hero section would itself be the kind of friction this page exists to avoid.
- A short opening line (Archivo `18px`, max-width `480px`) sits directly above the two-column section below, functioning as a lead-in rather than a standalone hero moment. No large declarative headline treatment — warm, direct, brief, per Copywriting.md's direction for this page specifically.
- Top padding: `96px` (desktop), consistent with nav-clearance logic used sitewide, but without a separate `min-height` block reserved for it — it flows directly into Section 1.

**Mobile (375px)**
- `padding-top: 96px`, standard nav-clearance value.
- Opening line within `32px` side padding, full width.

**Motion:** Standard reveal, single element, no stagger needed (nothing to sequence against).

---

## Section 1 — Contact Body (Two-Column: Context + Form)

**Classification:** Identity. The label-column-vs-content-column relationship is the page's actual asymmetry expression (Design.md Rule 7) — collapsing this to a plain stack on desktop would remove the one place this page satisfies that rule.

**Desktop**
- Two-column split: **left column (`0.8fr`)** — heading (Plus Jakarta Sans, `clamp(1.75rem, 3vw, 2.75rem)`, e.g. framing that reaching out is easy/safe, actual wording deferred to copy) + supporting text below it (Archivo `16px`, max-width `380px`) covering "what happens next" reassurance: a human reads every message, response timing, first call is just a conversation. **Right column (`1.2fr`)** — the black notch-card containing the step-by-step form.
- Column gap: `64px`.
- Left column content is vertically top-aligned; right column (the card) determines the section's actual height, since it's the denser, functional element.

**Mobile (375px) — native composition**
- Single column. Left-column content (heading + supporting text) appears first, full width, standard Indent-Asymmetry Pattern (`24px` offset) between heading and supporting text — same mechanism used sitewide for heading/body pairings.
- Notch-card (form) follows directly below, full width, `48px` gap above it.

**Motion:** Standard reveal — heading fires first, supporting text follows at `120ms` stagger; the notch-card fires as its own group once it individually crosses the viewport threshold (Animations.md 3.1's per-element trigger — it's a separate scroll moment from the left column's text, not bound to the same trigger just because they're visually adjacent on desktop).

---

## Section 2 — The Notch-Card Form (Detail Specification)

**Design decision — notch/corner selection:** this is the component's third sitewide appearance (Home teaser: top-left; Capabilities Tech Stack: top-right) — per Design.md 3.3's anti-repetition rule, this instance uses **bottom-left**, the next unused variant in rotation, keeping no two notch-card moments in one visitor's plausible path identical.

**Design decision — the notch tab's role, repurposed correctly:** on every prior use, the notch tab held a small static label ("Built With," etc.). Here, it holds the **step indicator** ("Step 1 of 4," updating live as the visitor progresses) — a legitimate extension of the component's existing job (a small label riding the cut-corner tab), not an invented new behavior, since the tab has always been "a small piece of metadata about what's inside the card."

**Card structure, desktop:**
- Module radius `24px` (Design.md 2.5), black surface, `64px` internal padding.
- Notch tab: bottom-left, holding the live step indicator, Archivo `14px` uppercase.
- Internal content area swaps per step (single card, four internal states, no page navigation, no scroll — this is a contained micro-flow within one card instance):

**Step 1 — Name & Email**
- Two fields: Name (single line), Email (single line). Stacked vertically, `24px` gap between fields. Field labels: Archivo `14px`, white at full opacity (no dimming — same full-contrast reasoning already applied to number/label elements elsewhere in the doc set, e.g. Capabilities' notch-card intro label). Input style: bottom-border only (`1px`, white at reduced weight — this is the one legitimate case for an opacity-based white variant, since it's functional UI chroming, not a decorative tint, and stays within black/white, no third hue), no filled input background, no rounded box — consistent with the sitewide "no card-as-container" discipline (Design.md 3.7) extended here to form inputs specifically.
- Primary action: "Continue" — Tier 1 solid-white-on-black variant (inverted from the sitewide black-on-white Tier 1 pill, since this button sits on the card's black surface — same tier, same commitment level, inverted only for contrast legibility).

**Step 2 — Company / Brand**
- Single field: company or brand name + what they do (one field, or two short fields — final field count confirmed in copy session, structurally this step reserves room for up to two fields using the same stacked `24px`-gap pattern as Step 1).
- Same input styling, same Continue action. A "Back" text-link (Archivo `14px`, white, no button treatment — lowest-commitment navigation action) sits beside Continue, letting the visitor revise Step 1 without losing progress.

**Step 3 — The Problem**
- Single field: multi-line text area, "tell us about your idea or problem." Same bottom-border-only styling, expands vertically as the visitor types rather than scrolling internally, min-height `120px`.
- Same Continue / Back pairing.

**Step 4 — Review & Submit**
- Read-only summary of Steps 1–3's entered values, each with a small inline "Edit" text-link (Archivo `14px`, underlined) that jumps back to that specific step rather than requiring a full linear Back — this is what makes Step 4 genuinely a review step rather than just "one more page of the same flow."
- Primary action: "Submit" — same Tier 1 inverted-pill treatment as Continue, visually distinct only by label, not by a different tier (submitting is the same commitment level as continuing, not a bigger action requiring different visual weight).
- On submit: card transitions to a confirmation state within the same card (not a new page, not a redirect) — a short confirmation line ("we've received this — a human will review it") replacing the form fields entirely. **Response-timing language here is the simple, honest default** (per File-Structure.md's original baseline: a human reads every message, response happens within 24 hours) — the smarter, calculated time-window system discussed earlier is explicitly deferred, not built now (see Open Items).

**Card structure, mobile (375px):**
- Same four-state internal flow, same field order and styling, `32px` internal padding (reduced from desktop's `64px`, consistent with every other page's mobile padding step-down pattern).
- Notch tab position: bottom-left, preserved — the component's mobile precedent (Home teaser, Capabilities Tech Stack) already keeps notch position consistent between breakpoints, so no deviation here either.
- Continue/Back/Submit buttons: full-width on mobile (touch-target sizing, per UX.md's "touch is the primary interaction" rule), stacked if both appear on the same step (Back above or beside Continue, whichever reads clearer — final call in build, not a structural decision).

**Motion:**
- Step transitions (Step 1→2→3→4) use the **Base tier (`600ms`, Animations.md Section 7)** — this is a standard interactive state change, not a scroll-triggered reveal, so it draws from the interaction-timing table, not the reveal system.
- The step-indicator label update (in the notch tab) is instant, no transition — it's metadata, not content, consistent with how tab labels function elsewhere (static, not animated).
- Confirmation-state transition (Step 4 → confirmation) also uses Base tier (`600ms`), same reasoning — a state change, not a reveal.
- Initial card entrance (Section 1's motion note) still uses the standard scroll-triggered reveal system — only the *internal* step transitions use the interaction tier, not the entrance itself.

---

## Section 3 — Closing

**Design decision:** none. File-Structure.md is explicit — Contact "leads to: nowhere — this is the final destination." No secondary CTA, no "explore more" invitation, no Work link. Adding one would contradict the page's own defined job and dilute the one action (submit the form) this page exists to get right.

---

## Section 4 — Spacing, Type & Motion Reference

- Spacing values trace to Design.md's base-4 family (2.4): `24, 32, 48, 64, 96, 120` all appear and are clean members of that scale.
- Card radius: `24px` (Module tier, Design.md 2.5) — correct tier, consistent with every other notch-card instance sitewide.
- Notch-card corner: bottom-left — third rotation position, per Design.md 3.3's anti-repetition rule (Home teaser: top-left; Capabilities: top-right; this: bottom-left).
- Step-transition motion: Base tier (`600ms`) — the one deliberate departure from the reveal-system defaults used elsewhere, justified because this is interactive state-change, not scroll-triggered content reveal (Animations.md Section 7's tier table governs this distinction directly).
- Input styling (bottom-border-only, reduced-opacity white line) is the one place in the doc set an opacity-based white variant is used deliberately — justified as functional UI chrome (an input's resting-state boundary) rather than a decorative tint, and it stays strictly within the black/white palette, introducing no third hue.

---

## Open Items Carried Forward

1. **The smart response-window calculation system** (Mon–Fri business-hours check, Pakistan-night-hours floor, rounded/bucketed time windows) — fully reasoned out in prior discussion, but explicitly **not built now**. Deferred until organic/Google-driven traffic justifies the added engineering scope; cold-outreach-driven early clients don't need it. When revisited, it replaces only the confirmation-state copy in Step 4 above — no structural change to the rest of this file.
2. **Exact field count for Step 2** (one combined field vs. two separate fields for company name + what they do) — structurally reserved for either, final call in the copy session.
3. **Actual heading/supporting-text wording for the left column, and all form-field microcopy** — content, not structure, deferred per the standard pattern across every page file.
4. **Back/Continue button arrangement on mobile Step 2/3** (stacked vs. side-by-side) — noted as a build-time call, not a structural decision requiring resolution here.

---

*This document governs structure only. Sitewide rules inherited without restating: Design.md (tokens, nav, footer, button tiers, notch-card system), Animations.md (reveal system for entrance, interaction tiers for step transitions), Copywriting.md (no-pricing/no-corporate-timeline rules, "shortest path" direction — applies once copy is written), File-Structure.md (page scope, terminal-destination status).*
