# Codzee — Terms-and-Privacy.md

**Version 1.0**
**Status: Draft — first pass**
**Purpose: The complete structural specification for the Terms of Service (`/terms`) and Privacy Policy (`/privacy`) pages. These are two separate routes and two separate documents on the live site — this single file exists because both pages share one identical structure, so defining that structure once here (rather than twice, redundantly) is more honest to how similar they are than forcing an artificial separation. This file does not contain legal copy. Legal text is written in its own future session, the same way Home.md's actual homepage copy was written separately from its structural spec.**

---

## How To Use This Document

This file follows the same format as Home.md — Mobile (375px baseline) and Desktop specified separately, every value traced back to Design.md. The difference is scope: Design.md Section 4, point 7 explicitly exempts these two pages from the whitespace/asymmetry expression rules that govern every other page. That exemption is the entire reason this file is short. Nothing here should try to make Terms/Privacy "interesting" — doing so would be solving a problem that doesn't exist and contradicting the exemption Design.md already granted.

---

## Navigation & Footer

Identical to every other page. Fully specified in Design.md Section 3.1 (Nav) and 3.4 (Footer). Referenced here, not repeated.

---

## Section 1 — Page Identity

- Two routes, two documents: `/terms` and `/privacy`. Each has its own `h1`, its own title tag and meta description (per SEO.md Section 1 and Section 3), and its own unique content. This file describing them together is a documentation convenience only — it has no effect on how they exist as separate, independently indexable pages.
- No hero. No agreement headline, no clarity headline in the Copywriting.md sense — the `h1` is simply the page's own name ("Terms of Service" / "Privacy Policy"). This is a deliberate exception to Copywriting.md's "no label headlines" rule: that rule exists to stop headlines that fail to deliver value on pages where the visitor needs to be told what they're about to get. A visitor arriving at `/terms` already knows exactly why they're there — a label is correct, not lazy, in this one case.

---

## Section 2 — Layout Container

**Classification:** Container, trivially — there is no spatial idea to preserve or lose here, unlike every other page's sections.

- **Single column, at every breakpoint.** No side-by-side split at desktop. This is the explicit exception carved out by Design.md Section 4, point 7 — the asymmetry rule (Philosophy Rule 7, Foundations 2.8) does not apply here.
- **Reading-width column, not the sitewide 1600px/88vw container.** Design.md's standard container (Section 2.7) exists to serve expansive, gallery-like sections like Work and Process — full-width legal text at that measure would produce line lengths well past comfortable reading width (100+ characters per line on a large desktop screen), which directly works against "readability over visual expression," the stated priority for these two pages.
  - **Desktop max-width: `720px`**, centered in the viewport. This sits inside standard reading-width conventions (~65–75 characters per line at typical body size) without inventing a new arbitrary number — it is simply a narrower reading measure than the sitewide container, chosen because these pages have a different job than every other page.
- **Mobile (375px) side padding: `32px` fixed** — same as every other page (Design.md 2.7). No reason to deviate; the narrow-column logic is a desktop-only concern since mobile is already effectively single-column and narrow.
- **Tablet (768px+) side padding: `40px` fixed**, same as sitewide, up until the 720px max-width takes over as the constraining factor rather than the padding.

---

## Section 3 — Typography

Still pulls from Design.md's sitewide type roles (Section 2.3) — this exemption is about layout and motion, not about inventing a new type system.

| Role | Typeface | Size (desktop) | Size (mobile) |
|---|---|---|---|
| `h1` (page title) | Plus Jakarta Sans | 38px | 28px |
| `h2` (section headings within the legal text, e.g. "Data We Collect," "Cookies") | Plus Jakarta Sans | 21px | 21px |
| Body text | Archivo | 16px | 16px |
| Last-updated / meta line (small label beneath h1) | Archivo | 14px (nearest clean step below 16px in the ratio family) | 14px |

- Sizes are pulled directly from the 1.333 ratio family already defined in Design.md 2.3 — no new numbers invented.
- `h2` does not scale down on mobile. Unlike hero-scale or declarative type elsewhere on the site, legal sub-headings are functional navigation aids within a document, not a hierarchy-through-size expression — there's no compositional reason for them to shrink, and keeping one fixed size removes a decision that doesn't need to be made twice.
- No `h3`+ is anticipated, but if a legal section genuinely needs a third level, it follows SEO.md Section 1's no-skipped-levels rule same as any other page.

---

## Section 4 — Spacing

Base-4 scale (Design.md 2.4), same family as every other page.

- **Vertical gap between `h2` sections:** `48px` — enough separation that the eye clearly registers a new section has started when scanning, without the generous 64–96px gaps used on pages meant to be lingered on and experienced (Work, Process). This is a document meant to be scanned or read start-to-finish, not paced through.
- **Gap between an `h2` and its following paragraph:** `16px`.
- **Gap between paragraphs within the same section:** `16px`.
- **Gap between h1 and the last-updated meta line:** `8px`.
- **Gap between the meta line and the first `h2`:** `48px`, matching inter-section spacing so the meta line reads as a small preamble rather than part of the first section.
- **Top padding above h1:**
  - Desktop: `128px` (largest step in the base-4 family) — enough clearance below the standard nav, consistent with how other pages give the hero room to breathe without needing hero-specific choreography here.
  - Mobile: `96px` — same value Home.md's hero uses for clearance below the persistent black notch nav, reused here for the same reason (clearance below a fixed nav element), not coincidence.

---

## Section 5 — Color

No deviation from Design.md 2.2. Black text (`#010202`) on white background. `h2`s may use the same black as body text — no visual weight differentiation beyond size/typeface role, since Plus Jakarta Sans vs. Archivo already carries that distinction sitewide. No supporting neutral tints needed here; there's no muted/secondary text concept on this page — everything on a legal page is equally load-bearing.

---

## Section 6 — Motion (Cross-Reference to Animations.md)

**Decision: no scroll-triggered reveal on this page. Content loads static, fully present, immediately.**

This is a deliberate, documented exception to Animations.md Section 3's sitewide reveal system — consistent with how Animations.md Section 1 already permits documented exceptions elsewhere (e.g. Process's spine, Home.md Section 9), provided the exception is justified in the relevant page file rather than invented silently.

**Reasoning:**
- Animations.md Section 3's reveal system exists to serve arrival-as-recognition and hierarchy-through-timing (Section 3.3's heading-then-body stagger) — mechanisms that matter when a visitor is discovering content and forming a first impression. A visitor on Terms/Privacy is not discovering anything or forming an impression; they are doing due diligence on text they already expect to be dry.
- A legal page is unusually dense with consecutive headings and paragraphs. Firing the reveal animation on every single `h2` and paragraph while scrolling down a fine-print-heavy document would mean the animation triggers dozens of times in a short scroll distance — which stops reading as "felt, not seen" (UX.md's Response Layer principle) and starts reading as a distraction from a visitor who explicitly wants to just read.
- **What is retained:** smooth scroll (Animations.md Section 2, "non-negotiable, sitewide, no exceptions" — this stays, since it's a baseline scroll-feel decision, not a content-reveal decision). Nav's own scroll-state transition (Section 5.2) also stays, since that's a nav behavior independent of page content.
- **What is explicitly removed:** Section 3's viewport-triggered reveal, Section 3.3's heading→body stagger, and Section 4's page-load entrance sequence (space → nav → heading → text → CTA). This page loads its heading and body text immediately together — there is no CTA on this page at all, so step 5 of Section 4 doesn't apply regardless.
- Page transition *into* these pages (arriving from another page, e.g. footer link) still uses Animations.md Section 8's standard soft page transition — that governs the act of navigating, not this page's internal content behavior, and removing it would make Terms/Privacy the only page on the site with a jarring hard-cut entry, which is a worse inconsistency than the one this section is deliberately introducing.

---

## Section 7 — What This Page Does Not Have

Explicitly, for clarity when this file is used as a build reference:

- No notch-card module (Design.md 3.3)
- No Indent-Asymmetry Pattern (Design.md 3.5) — there is nothing to pair asymmetrically; body text simply flows under its own heading in one column
- No CTA of any kind, any tier (Design.md 3.2) — this is confirmed by File-Structure.md's page inventory, which lists these as terminal, non-funneling pages
- No scroll-triggered reveal animation (see Section 6)
- No hero, no agreement/clarity headline structure (see Section 1)

---

*This document governs structure only. Legal copy for both pages is written in a future dedicated session, the same way Home.md's structural spec preceded its actual copy. Sitewide rules this file inherits without restating: Design.md (tokens, nav, footer), Animations.md (smooth scroll, page transitions — reveal system explicitly excluded per Section 6 above), SEO.md (heading/metadata rules), Copywriting.md (voice — applies once copy is written, label-headline exception noted in Section 1).*
