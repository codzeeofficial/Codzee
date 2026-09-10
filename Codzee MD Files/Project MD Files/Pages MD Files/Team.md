# Codzee — Team.md

**Version 1.0**
**Status: Draft — complete pass**
**Purpose: The complete structural specification for the Team page (`/team`), mobile and desktop, section by section, at the same depth as the site's other page files. Reached via a dedicated button on About (Design.md 3.2, Tier 3), not primary navigation. This file does not contain final copy — names, roles, and individual descriptions are written in a future dedicated session.**

---

## How To Use This Document

Nav and Footer are universal (Design.md 3.1, 3.4) — not repeated here. Like About, this page skips the agreement-headline mechanism (Copywriting.md Type 1) — a visitor arriving here has already read About and clicked through specifically to see faces and names; they're already open. This page's hero is narrower in scope than About's — About's job is "build trust in the studio," Team's job is "give each person a real identity," so the hero here should be brief, not a second attempt at the same trust-building move About already made.

---

## Section 0 — Hero

**Classification:** Container.

**Desktop**
- Min-height `40vh`, content vertically centered — shorter than About's `55vh`. This page's actual content (the team grid) is the point; the hero exists only to frame it, not to carry its own weight the way About's hero does.
- Direct statement (Plus Jakarta Sans, `clamp(2rem, 3.5vw, 3rem)`, max-width `680px`) — framing along the lines of "the people, not just the studio" (actual wording deferred to copy). No supporting line by default, same single-strong-line default established for About's hero.

**Mobile (375px)**
- `padding-top: 96px`, standard nav-clearance value.
- Statement within `32px` side padding, full width.

**Motion:** Standard reveal, page-load entrance sequence on first arrival.

---

## Section 1 — Team Grid

**Design decision, confirmed:** four cards (extensible to more without redesign), **uniform size, no asymmetric offset between them.** This is a deliberate, reasoned exception to Design.md Rule 7's general asymmetry requirement — that rule governs relationships between a heading and its supporting content, or between elements of genuinely unequal weight/importance (which is why Home's Work section uses deliberate size/offset inequality — Pennify, Orvari, and Zhabyart are ordered by story strength, per File-Structure.md's own stated rationale). Team members carry equal importance by explicit decision — there is no strength-ordering to express visually, so uniform treatment is the accurate choice, not a rule violation. The precedent for "uniform repetition across genuinely parallel items" is Capabilities' four accordion rows, which already use identical row treatment for the same underlying reason.

**Classification:** Container. Each card is a self-contained unit (photo + name + role + description); no spatial relationship between cards carries meaning beyond "these are peers," which a uniform grid communicates directly and correctly — nothing is lost by treating this as a straightforward container.

**Desktop**
- Grid: `grid-template-columns: repeat(4, 1fr)` at full team size (four members); the grid is defined as `repeat(auto-fit, minmax(260px, 1fr))` in practice, so a fifth or sixth member added later simply extends the grid without requiring a layout change — this is the actual mechanism that satisfies the "add a member without disturbing existing ones" requirement.
- Column gap: `32px`. Row gap (if the grid wraps to a second row at higher member counts): `64px`.
- **Per card:**
  - Photo: consistent white-background photo, real color (no monochrome treatment — same logic as Home's Work-section screenshots; the sitewide monochrome rule governs generated site surfaces, not photographic subject matter). Aspect ratio `4:5` (portrait, consistent across all cards regardless of the source photo's native crop, cropped to fit). Radius: `16px` (Card tier, Design.md 2.5) — same soft-corner treatment already used on Home's Work-section images, reused because it's the same content type (a photographic image needing a touch of softness), not a new invented device.
  - Name: directly below the photo, Plus Jakarta Sans `21px`, weight 700, margin-top `20px` — treated as a real heading, not a label inside a tab or notch.
  - Role: directly below name, Archivo `14px`, uppercase, letter-spacing `0.04em`, margin-top `4px` — small label tier, functionally similar to how "Currently Building" reads as a label elsewhere in the doc set.
  - Description: directly below role, Archivo `16px`, line-height `1.5`, margin-top `12px` — one honest line to a short sentence, per File-Structure.md's "honest individual descriptions, no resumes" scope.
- No border, no background fill, no card-shell shape beyond the photo's own rounded corners — the "card" here is really just a consistent stack of image + typography, not a bordered container (Design.md 3.7 keeps bordered-card treatment out of the shared component system; this unit avoids that entirely by never introducing a shell in the first place).

**Mobile (375px) — native composition**
- Single column, one member per row, full width within `32px` side padding.
- Photo aspect ratio held at `4:5`, same radius (`16px`).
- Name/role/description stack identically to desktop, same margin values (`20px / 4px / 12px`), since none of these values were viewport-dependent to begin with.
- Vertical gap between team members: `48px` — generous enough that each person reads as a distinct, fully-formed unit rather than a scrolling list.
- **Uniform treatment holds at mobile too** — no alternating indent or offset between members (unlike Work's mobile treatment, which alternates indent direction specifically because Work's items are unequal). Team's single-column mobile view is simply the grid's natural collapse, not a reinvented composition, since there was no asymmetry to preserve or translate in the first place (Identity vs. Container test, Design.md Rule 6 — this section is Container, so scaling down freely is correct and requires no native mobile reinvention).

**Motion:** Standard reveal. Cards reveal as a group at body-tier timing (`700ms`) as the grid crosses the viewport threshold — not staggered member-by-member, since they're parallel/equal (same logic as Services' Layout 4 three-column row and About's three belief-blocks: parallel content reveals together, sequential content staggers).

---

## Section 2 — Closing

**Design decision:** File-Structure.md sends Team to `/work` and `/contact`. Same weighting logic as About's close — Contact primary, Work secondary — since a visitor who has now seen both the studio's story (About) and its people (Team) is in a comparably warm state to finishing About itself; Team doesn't reset that warmth, it adds to it.

**Classification:** Container.

**Desktop**
- Primary: single line (Archivo `22px`, max-width `560px`) + Tier 1 solid-black-pill CTA (Design.md 3.2), same terminal-action treatment used at the end of About, Services, and Capabilities.
- Secondary: plain text link with arrow ("See the Work"), Archivo `16px`, positioned beneath or beside the primary CTA — same secondary-link pattern reused from About's close and Home's Studio CTA row.
- Not full-height, sized to content, padding `96px 64px`.

**Mobile (375px)**
- Stacked: line, then Tier 1 pill, then the smaller secondary link, `16px` gaps. Padding `64px 24px`.

**Motion:** Standard reveal, single trigger — line, pill, and secondary link fire together at `120ms` stagger.

---

## Section 3 — Spacing & Motion Reference

- All spacing values trace to Design.md's base-4 family (2.4): `4, 12, 16, 20, 32, 48, 64, 96` all appear and are all clean members of that scale.
- Type sizes trace to the `1.333` ratio family (Design.md 2.3).
- Photo radius: `16px` (Card tier, Design.md 2.5) — confirmed correct tier, reused from Home's Work-section image treatment.
- Motion throughout: standard sitewide reveal system (Animations.md 3.1–3.3), grid reveals as one group rather than staggered per-card (reasoning stated in Section 1 above). No signature motion, no page-specific exemption.

---

## Open Items Carried Forward

1. **Actual names, roles, and individual descriptions** — content, not structure; deferred to a dedicated copy session, same category as every other page's real content gaps.
2. **Exact hero framing line** — placeholder direction only ("the people, not just the studio"), real wording deferred to copy.
3. **Behavior beyond four members** — the `auto-fit`/`minmax` grid mechanism handles this structurally (confirmed in Section 1), but if the team grows significantly (e.g. past 6–8), row-count and whether the grid should ever paginate/scroll internally is not addressed here, since it's outside the current four-person scope.

---

*This document governs structure only. Sitewide rules inherited without restating: Design.md (tokens, nav, footer, button tiers, Card radius), Animations.md (standard reveal system, tier values), Copywriting.md (no-agreement-headline rule for this page, "honest individual descriptions, no resumes" content scope — applies once copy is written), File-Structure.md (page scope, outbound links, About→Team access-path rule).*
