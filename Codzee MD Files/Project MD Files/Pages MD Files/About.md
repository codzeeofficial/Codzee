# Codzee — About.md

**Version 1.0**
**Status: Draft — complete pass**
**Purpose: The complete structural specification for the About page (`/about`), mobile and desktop, section by section, at the same depth as Home.md, Services.md, and Capabilities.md. This file does not contain final copy — content (studio story, founder specifics, belief statements) is written in a future dedicated session. The Yosento-signal section originally scoped by File-Structure.md is deliberately dropped here — confirmed redundant against Capabilities.md's fuller treatment of the same claim, and vague enough in its original "just enough to signal" framing that cutting it is not a content loss.**

---

## How To Use This Document

Nav and Footer are universal (Design.md 3.1, 3.4) — not repeated here. Copywriting.md is explicit that About **skips the agreement-headline mechanism** entirely (Type 1, used on Home/Services heroes) — this visitor has already spent time on the site and arrives asking "who am I actually dealing with," not "is this for me." The opening statement here is controlled sharpness — something specific and direct no agency would say about itself — not recognition-of-visitor-situation.

---

## Section 0 — Hero

**Classification:** Container — vertical stack, no spatial trick to lose, consistent with every other page's hero treatment.

**Desktop**
- Min-height `55vh`, content vertically centered — shorter than Home's `75vh` (no agreement mechanism needing room to land), close to Capabilities' `50vh` but slightly taller since About's opening statement carries more weight per sentence than Capabilities' functional clarity headline.
- Opening statement: Plus Jakarta Sans, `clamp(2.25rem, 4vw, 3.5rem)`, max-width `760px`, line-height `1.05`. No Playfair italic, no Archivo Black — those stay exclusive to Home's hero (Design.md 2.3).
- No supporting line beneath it by default — Copywriting.md's direction for this specific opening is that it should land as one direct statement, not be immediately softened or explained by a second line trailing it. If the actual copy genuinely needs a second sentence, it follows at the same `120ms` stagger as every other hero, but the default here is a single strong line.

**Mobile (375px)**
- `padding-top: 96px`, same nav-clearance value used sitewide.
- Statement within `32px` side padding, full width, same size-step-down logic as every other hero (`clamp` already handles this).

**Motion:** Standard reveal, page-load entrance sequence (Animations.md Section 4) on first arrival. No stagger needed if the hero is a single element; if a second line exists, standard `120ms` stagger applies.

---

## Section 1 — Studio Story

**Classification:** Container — a declarative narrative block, no spatial idea being protected.

**Desktop**
- Two-column asymmetric: heading (`1.25fr`, Plus Jakarta Sans, `clamp(2rem, 3.5vw, 3rem)`, e.g. framing "why Codzee exists") / body copy (`1fr`, Archivo `18px`, line-height `1.6`, max-width `480px`) — `80px` gap. Same head ratio used sitewide for "claim, then explanation" sections (Home's Solution/Process, Services' Section 2, Capabilities' Sections 1/4/5) — reused because this is functionally that same kind of moment, not for convenience.
- Body copy may run two to three paragraphs per Copywriting.md's standard-page paragraph rule (one complete thought per paragraph, break where the idea breaks) — vertical gap between paragraphs `16px`, consistent with Copywriting.md Section 4's spacing intent applied structurally.
- Section padding: `128px 64px` desktop.

**Mobile (375px)**
- Indent-Asymmetry Pattern (Design.md 3.5), `24px` offset, heading above, body below.
- Section padding: `80px 24px`.

**Motion:** Standard reveal, heading then body at `120ms` stagger (Animations.md 3.3).

---

## Section 2 — Founder Story

**Design decision:** this is the heaviest, most human section on the page and carries the most visual weight accordingly — Copywriting.md flags this as the section where specific real detail (the gaming PC at 14, the pattern of trying/failing/learning) does the actual trust-building work, so it earns more room than a standard statement section rather than being compressed to match Section 1 and 3's rhythm.

**Classification:** Identity. Unlike Section 1 and 3 (interchangeable statement blocks), this section's asymmetry should feel more deliberate and less templated — a plain repeat of the `1.25fr/1fr` head pattern three sections in a row (Section 1, this one, Section 3) would trip Design.md Rule 2's "no two consecutive sections repeat the same structural pattern," and this is the section that most needs its own identity given its content weight.

**Desktop**
- Distinct composition: a large pull-line or opening fragment (Plus Jakarta Sans, `clamp(2.5rem, 4.5vw, 4rem)`, max-width `680px`) sits alone at the top, left-aligned — functioning like a headline but drawn from the founder's own voice rather than a section label (e.g., a fragment of the actual story treated as the visual anchor, decided in copy).
- Below it, offset right via `margin-left: auto` (same right-offset technique Services' Layout 2 uses, reused because it's a genuinely different relationship — statement then elaboration pulled to the side — not a copy-paste of that layout's specific content): the full narrative body, Archivo `18px`, line-height `1.6`, max-width `620px`.
- This right-offset placement is what differentiates this section from Section 1/3's plain `1.25fr/1fr` split, satisfying the adjacency rule without inventing an arbitrary new grid for its own sake.
- Section padding: `128px 64px`, but with additional `32px` top padding beyond the standard, giving this section slightly more entrance room proportional to its weight.

**Mobile (375px) — native composition**
- Pull-line first, full-width, no offset (it's the anchor, not paired against anything above it).
- Narrative body follows, offset via the standard `24px` Indent-Asymmetry Pattern — the right-offset desktop technique doesn't survive at 375px width (same reasoning as every other right-offset layout in this doc set), rebuilt as the sitewide indent pattern instead.
- Vertical gap between pull-line and body: `32px`, slightly more than the sitewide `24px` default, preserving some of the extra weight this section carries even at mobile width.

**Motion:** Standard reveal, pull-line fires first (as this section's heading-equivalent, using the heading-tier timing `850ms`), body follows at `120ms` stagger using the body-tier timing (`700ms`) — same mechanism as every other heading/body pairing, just applied to this section's specific pull-line/body structure instead of a literal `<h2>`.

---

## Section 3 — What We Believe

**Classification:** Container.

**Desktop**
- Two-column asymmetric: heading (`1.25fr`) / body (`1fr`), `80px` gap — same ratio as Section 1. This repetition is acceptable specifically because Section 2 sits between them with a genuinely different composition (the right-offset pull-line structure) — Design.md Rule 2 governs *consecutive* sections, and Section 2's distinct identity breaks the adjacency, so Section 1 and Section 3 sharing a ratio non-consecutively is not a violation.
- Body copy carries the "problem first, custom always, no shortcuts" philosophy — likely structured as three short declarative statements rather than one flowing paragraph, given the content is naturally three distinct beliefs. If so: three short blocks stacked with `16px` gaps, each led by a short bolded lead-in phrase (Copywriting.md's "emphasis once per paragraph, maximum" rule — one bolded phrase per block, not the whole sentence).
- Section padding: `128px 64px`.

**Mobile (375px)**
- Indent-Asymmetry Pattern, `24px` offset. Three belief-blocks (if structured that way) stack with `16px` gaps beneath the body's indent position.
- Section padding: `80px 24px`.

**Motion:** Standard reveal, heading then body at `120ms` stagger. If three belief-blocks exist, they reveal as one group at body-tier timing (`700ms`) — not individually staggered, since they're parallel statements, not a sequence (same logic Services' Layout 4 applies to its three sub-columns).

---

## Section 4 — Meet the Team (Invitation)

**Classification:** Container.

**Design decision:** File-Structure.md is explicit — Team is reached via a dedicated button on About, not by About containing team content itself. This section is the entire content-boundary answer between the two pages: About tells the studio's story, this section is the *only* place About acknowledges Team exists, and it does so as a pure invitation, not a preview.

**Desktop**
- Short line (Archivo `18px`, max-width `440px`) — framing along the lines of "the studio has a story; the people have their own" (actual wording decided in copy) — + Tier 3 accent pill (Design.md 3.2), same tier and visual treatment as Home's Studio section's existing "Meet the Team" text-link precedent, but promoted here to the full accent-pill treatment since About's version of this link is a whole section, not a single line inside a denser block.
- Padding `96px 64px` — one step below the `128px` used by heavier content sections, matching the reduced-weight treatment given to every other invitation section across the doc set (Services Section 3, Capabilities Section 6).

**Mobile (375px)**
- Stacked: line above, pill below, `16px` gap. Padding `64px 24px`.

**Motion:** Standard reveal, single trigger (line + pill fire together at `120ms` stagger) — consistent with every other invitation section in the site's doc set.

---

## Section 5 — Closing

**Design decision:** File-Structure.md lists About's outbound links as `/work`, `/contact`, `/team`. Team is already fully handled by Section 4. Between Work and Contact, Contact takes primary weight here — by the time a visitor finishes About, per UX.md's Journey Map, they've moved from "who am I dealing with" to "I trust them," which is a warmer state than Services or Capabilities' visitor, closer to (though not equal to) Process's fully-warm closing state. Work is offered as a secondary, lower-commitment option, not equal weight — a visitor who wants to see proof before reaching out shouldn't be blocked, but the section shouldn't present both options as if they're the same size decision.

**Classification:** Container.

**Desktop**
- Primary: single line (Archivo `22px`, max-width `560px`) + Tier 1 solid-black-pill CTA (Design.md 3.2 — same button as persistent nav Contact, highest-commitment tier, correctly used here as this page's terminal action).
- Secondary: plain text link with arrow ("See the Work") positioned beneath or beside the primary CTA at a visibly smaller scale (Archivo `16px`) — same secondary-link treatment Home's Studio section uses for its own text-link CTA, reused because it's functionally the same "lower-commitment alternative sitting next to a primary action" pattern.
- Not full-height, sized to content, padding `96px 64px` — consistent with every other page's closing-section treatment (not a reuse of Home's giant centered Contact moment, per the same reasoning already locked for Services and Capabilities).

**Mobile (375px)**
- Stacked: line, then Tier 1 pill, then the smaller secondary text link below it, `16px` gaps between each. Padding `64px 24px`.

**Motion:** Standard reveal, single trigger for the whole block (line, pill, and secondary link fire together at `120ms` stagger — no internal sequencing needed, since this is a small, low-complexity closing moment, not a multi-part section).

---

## Section 6 — Spacing & Motion Reference

- All spacing values above trace to Design.md's base-4 family (2.4): `16, 24, 32, 64, 80, 96, 128` all appear and are all clean members of that scale.
- Type sizes trace to the `1.333` ratio family (Design.md 2.3) — no new numbers introduced beyond the family's existing clean steps.
- Section 2 (Founder Story) is the only section on this page using a non-default grid technique (right-offset via `margin-left: auto`) — deliberately, to satisfy Design.md Rule 2's adjacency requirement against Sections 1 and 3, which otherwise share an identical ratio.
- Motion throughout: standard sitewide reveal system (Animations.md 3.1–3.3). No signature motion, no page-specific exemption — this page carries the same reveal weight as Services and Capabilities, since the visitor is still building trust, not doing due diligence on dry content (unlike Terms/Privacy) or reading a connected sequence (unlike Process).

---

## Open Items Carried Forward

1. **Founder story specifics** (the actual pull-line, the actual narrative) — content, not structure; explicitly deferred to a dedicated copy session per Copywriting.md's own note that this is "Shahzaib's decision, made in the session where About page copy is written."
2. **Whether "What We Believe" is structured as three distinct belief-blocks or one flowing paragraph** — this file assumes three blocks based on the content naturally having three named beliefs (problem first, custom always, no shortcuts), but the final structure depends on how the actual copy is written.
3. **Section 4's exact framing line** — placeholder direction only ("the studio has a story, the people have their own"), real wording deferred to copy.

---

*This document governs structure only. Sitewide rules inherited without restating: Design.md (tokens, nav, footer, button tiers), Animations.md (standard reveal system, tier values), Copywriting.md (no-agreement-headline rule for this page specifically, founder-story specificity requirement, emphasis-once-per-paragraph rule, banned list — all apply once copy is written), File-Structure.md (page scope and outbound links, Team-boundary rule).*
