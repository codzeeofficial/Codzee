# Codzee — Design.md

**Version 1.0**
**Status: Locked**
**Purpose: This document defines the visual system of the Codzee website — the rules, tokens, and reusable patterns that every page must obey. It does not contain page layouts. Homepage layout lives in Home.md, and every future page file (About.md, Services.md, etc.) inherits from this document the same way Home.md does. This file answers "what are we allowed to build with and by what rules" — not "what does this specific page look like."**

---

## How To Use This Document

This document is read before any page file is written. It is the constitution every page file — starting with Home.md — must obey. If a page file contradicts this document, the page file is wrong, not this document. If this document is later found to contradict UX.md or codzee-strategy.md, the conflict is flagged and resolved deliberately, not silently defaulted either way.

This document does not contain literal `global.css` code. It defines the *rules* that produce `global.css` — the actual token file is a build artifact, generated from the logic below.

---

## Section 1 — Design Philosophy

These are the rules every layout, component, and page decision must pass. If a decision fails any rule below, the decision is wrong regardless of how good it looks in isolation.

**1. Calm, premium, professional — in that order.**
Inherited directly from UX.md and codzee-strategy.md. Every visual decision is checked against this order. A decision that looks premium but is not calm is wrong. A decision that is calm but not premium is wrong. All three, every time.

**2. Never look like a template.**
No section repeats the structural pattern of the section before it. No page reuses another page's layout wholesale. A visitor's brain pattern-matches structure in milliseconds — the moment it recognizes "another agency site," it disengages. Every section must earn its own structural identity.

**3. Consistency comes from shared rules, not repeated layouts.**
The site holds together not because every section looks alike, but because every section is built from the same disciplined token system (type scale, spacing scale, palette, radii) and obeys the same philosophy. Two sections can look completely different and still be unmistakably the same site, because the underlying discipline — the type pairing, the restraint, the deliberate asymmetry — is constant even when the layout is not.

**4. Every value is deliberate, not arbitrary — but not forced into false uniformity either.**
Different sections are allowed different specific values (a heading can be 22px in one section and 26px in another) because each section is solving its own problem and deserves its own scale. What is not allowed is an accidental, unrounded, un-reasoned number. Every value used must be a clean number pulled from the system's ranges (Section 2), and its purpose should be nameable. Consistency is "every value is deliberate," not "every value is identical."

**5. Mobile-first, desktop is the enhanced destination.**
Every layout is designed starting from the smallest realistic screen and built upward — not designed on desktop and shrunk down. The one exception in method (not outcome): the current homepage reference was originally produced desktop-first through iterative design work, and is being treated as the validated *identity* to preserve — but its mobile expression must be genuinely redesigned to mobile-first principles, not mechanically scaled down. All pages built after Home.md follow mobile-first process from the start.

**6. Identity vs. Container — the core scaling test.**
Before any section is adapted across breakpoints, ask: does the desktop layout carry meaning (sequence, hierarchy, deliberate inequality), or is it just a container holding content?
- **Container** → scaling down is safe. Simplify freely, spacing and proportions adjust, structure does not need reinvention.
- **Meaning** → scaling down naively destroys the point. The section needs a mobile-native composition that expresses the same underlying idea through different mechanics (e.g., horizontal offset becomes vertical indent; a horizontal connecting rail becomes a vertical spine).

**7. Asymmetry is mandatory on desktop, symmetric stacking is mandatory on mobile and tablet.**
Headings and their supporting text, or any two related elements, are never perfectly centered or evenly aligned with one another **at desktop width (1024px and above)**. On desktop this shows up as side-by-side asymmetric columns. **Below 1024px, every section stacks plain, single-column, and symmetric — no indent, no offset, no alignment break.** This is a locked amendment, confirmed after real-device testing showed the site's two-color, typography-only palette has no visual field (no third color, no texture) to make a small-viewport offset read as deliberate — at mobile width it reads as misalignment, not intent. The mechanism that makes asymmetry legible requires canvas space that mobile and tablet do not have.

**8. Whitespace is universal, with one clear exception.**
Every page carries the same generous-whitespace discipline as the homepage. The only exceptions are content-dense utility pages — Terms of Service, Privacy Policy — which are single-column, minimally designed, and prioritize readability over visual expression, since no visitor arrives at those pages for a designed experience.

**9. Homepage is the mother document.**
Every other page inherits its component definitions, token usage, and structural discipline from Home.md. No future page invents its own button system, type roles, or color logic. The individual Case Study pages are the one structural exception — they are text-and-image-heavy, editorial-style pages with their own pacing needs, covered separately when they are built.

**10. 320px is a floor, not a target.**
375px is the real design baseline — the honest floor of the current smartphone market. 320px must never break, overlap, or become unusable, but it is not optimized for; it is allowed to feel tighter than 375px as an accepted, deliberate trade-off.

---

## Section 2 — Foundations

This section defines the *rules that generate* the token system — not a literal `global.css` file, but the logic any implementation must follow.

### 2.1 — Units

All type and spacing values use **rem**, not px, as the authored unit. This respects user browser font-size settings (accessibility) and means the entire scale can shift proportionally from one root value if ever needed. Radii and border widths may remain in px, since they are not meant to scale with user font preferences.

### 2.2 — Color Palette

Strictly monochrome. No third color, no off-white, no tinted background.

- **Black:** `#010202` — near-true black, used for all primary text and all dark/inverted modules.
- **White:** `#ffffff` — used identically for both page background and surface/card background. There is no distinction between "page white" and "surface white." This is a deliberate choice: pure white next to pure near-black produces a harsher, higher-contrast feeling than the industry-standard softened off-white — and that harshness is correct here. It matches the brand's "controlled sharpness" principle rather than softening toward a safer, more generic default.
- **Supporting neutrals (not a third color — tints of black/white, used only for secondary/muted text and hairline dividers):**
  - `#f4f4f4` — soft fill, used sparingly (image placeholders, subtle recessed backgrounds)
  - `#e6e6e6` — border/divider hairlines
  - `#8c8c90` — muted text on dark surfaces (secondary footer links)
  - `#74747a` — most-muted text on dark surfaces (footer labels, timestamps)

**Rule:** if a new page ever seems to need a color beyond this list, that is a signal to solve the problem with typography, spacing, or contrast — not a signal to introduce a new hue.

### 2.3 — Typography

Three typefaces, each with one exclusive job. Never mixed within a role. This exclusivity is itself a rule, not a convenience — it means any future page always knows exactly which typeface to reach for.

| Typeface | Role | Notes |
|---|---|---|
| **Plus Jakarta Sans** | All headings, every level, on every page | The structural voice of the site. |
| **Archivo** (regular weights) | All body copy, navigation, buttons, tags, labels, system text | The workhorse. Used everywhere text is functional rather than declarative. |
| **Archivo Black** | Reserved exclusively for one maximum-impact geometric moment per use — currently the homepage hero ("HATE" / "PROBLEMS") | Its power depends on rarity. It must never become a general heading weight. |
| **Playfair Display (italic)** | Rare human/soft counterpoint only | Currently used only in the homepage hero, paired against Archivo Black for contrast. Must stay rare sitewide — if it appears too often it stops being a counterpoint and becomes decoration. |

**Type scale logic:** sizes are not read off one universal table copied identically onto every page. Each section is entitled to its own specific size within a shared, disciplined **1.333 ratio system** anchored at a 16px body base. This ratio produces a natural family of clean reference points (roughly: 12 → 16 → 21 → 28 → 38 → 50 → 67 → 90, rounding to the nearest clean number in practice) that any section can pull from. Two sections may legitimately use two different sizes from this family for what looks like a similar role (e.g., a lead paragraph at 22px in one section, 26px in another) — this is intentional per Philosophy Rule 4, not inconsistency to be merged away.

**Exception — Hero-scale type:** the largest type on the site (hero primary and hero secondary lines) is authored with fluid `clamp()` values rather than fixed ratio steps, since a single static size cannot work correctly across the full range from 320px to large desktop. This is consistent with how the validated reference already behaves.

### 2.4 — Spacing

A **base-4 rem scale**: every spacing value is a multiple of 4px (0.25rem), producing a clean, related family — 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128 (px-equivalents). Every margin, padding, and gap value used anywhere on the site must be a value from this family. No arbitrary in-between numbers.

### 2.5 — Radii

Four named sizes, each with a defined job — not a full scale, since roundness is a smaller decision space than spacing or type:

- **Small (8px)** — small UI elements: tags, small badges
- **Card (16px)** — standard bordered surfaces (where they exist — see Section 4 on why "card" is not a universal component)
- **Module (24px)** — large dark modules: the notch-card system, the footer
- **Pill (999px)** — full pill shape, reserved for buttons and the nav shape only

### 2.6 — Breakpoints

- **Mobile baseline: 375px.** This is the real design target — the honest floor of the current smartphone market (320px devices are effectively obsolete hardware and are treated as a graceful-degradation floor, not a design target — see Philosophy Rule 10).
- **Tablet: 768px and above.** Industry-standard tablet floor. Tablet is not simply "mobile stretched wider" — where a component's design genuinely benefits from more room (e.g., the navigation overlay), tablet gets its own intentional composition, not an automatic scale-up of the mobile version.
- **Desktop breakpoint: `1024px`.** Sourced as `--breakpoint-desktop` in `global.css`. This is the point at which asymmetric layout (2.8) and Team's grid multi-column behavior activate. Below this value, every layout treats the viewport as mobile/tablet regardless of tablet's own 768px threshold for padding purposes.
- **Desktop: above tablet range**, governed by the container rule below.

### 2.7 — Grid & Container

- **Desktop container max-width:** `min(1600px, 88vw)`. This is inherited directly from the validated reference file, not reinvented — it is load-bearing to the site's expansive, non-boxed feeling (it is part of what makes the Work gallery and Process rail feel spacious rather than like a constrained SaaS template). Content never touches the raw viewport edge past 1600px, and scales proportionally below that via the `88vw` clause.
- **Mobile side padding:** `32px` fixed.
- **Tablet side padding:** `40px` fixed.
- **Desktop side padding:** handled entirely by the container rule above — no separate fixed padding value is needed, since the `88vw` clause already prevents edge-to-edge content at any desktop width.

### 2.8 — The Asymmetry Rule (applied at layout level)

Asymmetry activates at desktop width only (**1024px and above**, see 2.6). Below that, every section uses plain, symmetric, single-column stacking — this includes what was previously called the Indent-Asymmetry Pattern (3.5); that pattern is retired below 1024px and its mobile/tablet role is now simply "no offset, stack plainly."

- **Desktop (1024px+):** expressed as side-by-side asymmetric columns (unequal widths, offset vertical position), or as a deliberate right-offset via `margin-left: auto` where a section's content calls for it (e.g. About's Founder Story).
- **Mobile / Tablet (below 1024px):** plain stacked, symmetric, no indent, no offset, no alignment break of any kind — this is a rule, not a fallback.

---

## Section 3 — Component Patterns

Reusable elements that will appear across more than one page. Each is defined once here so future page files reference it rather than reinventing it. If a candidate element does not clearly pass this test — "does reusing this serve the never-look-like-a-template philosophy, or does it quietly reintroduce repetition because it's convenient?" — it is *not* made a shared component; it stays page-specific.

### 3.1 — Navigation

A single nav system used identically across the whole site, mobile through desktop, with one deliberate exception at tablet width.

**Desktop:**
- Floating pill-shaped bar, transparent/light at rest, transitions to a solid black, top-anchored, rounded-bottom module on scroll (this exact shift is a known open item — flagged for reconciliation between Design.md's static states and Animations.md's transition logic, not resolved here since it is motion, not layout).
- Links: **Work, Services, About** (3 primary nav links only).
- **Contact** is a visually distinct button, not a nav link — positioned separately from the link group.
- Team, Capabilities, and Process are intentionally *not* in primary nav. They are reached through contextual links (About page → dedicated button to Team; footer → secondary links) rather than crowding primary nav. This keeps nav minimal per UX.md's original locked structure ("Logo — Work — Services — About — Contact").

**Mobile & Tablet (below and at 768px... mobile specifically under 375–767px, tablet 768px+):**
- Persistent black top notch bar: logo + hamburger (two-line) icon. No scroll-state change on mobile/tablet — this removes the shape-shifting inconsistency present on desktop's scroll behavior, since a static state is more reliable at small viewport, and re-confirms this is intentionally different from desktop, not an unfinished version of it.
- Hamburger opens a **full-screen overlay** containing, top to bottom: primary nav links → social icons → email → terms/privacy/sitemap links.
- **Mobile layout:** single column, all elements stacked in that order.
- **Tablet layout (768px+):** splits into two columns — column one holds email (top) and social icons + terms/privacy/sitemap links (bottom); column two holds primary nav links (top) and social icons below. *(Note: this column split logic should be re-confirmed against actual content volume when Home.md's nav overlay is built out in detail — the split described here is the agreed intent, exact column assignment may need a visual check once real content is placed.)*
- **Typographic hierarchy inside the overlay** (typography is the only design tool here, so hierarchy must be carried entirely by size): primary nav links are the largest text in the overlay → email is next, smaller than nav links but larger than everything below it → social icons at standard/industry-conventional icon size → terms/privacy/sitemap links at standard body-adjacent size, smallest tier.
- Contact remains a distinct button, not folded into the link list, consistent with desktop.

### 3.2 — Buttons (three-tier system, never used interchangeably)

- **Tier 1 — Solid black pill (`btn-pill-dark`):** highest-commitment action. Used for the persistent nav Contact button — the single site-wide "go talk to us" action.
- **Tier 2 — Outlined pill (`btn-pill-outline`):** lowest-commitment, in-page action. Used for the hero's "Discover Work" — a low-friction invitation to keep exploring, not a conversion action.
- **Tier 3 — Soft-fill pill with circular arrow badge (`btn-pill-accent`):** medium-commitment "go deeper" navigational action, used to move a visitor to another page (e.g. Studio section → About page; About page → dedicated Team page). Never used twice in the same viewport as another CTA — if a section already sits near the persistent nav CTA, a second CTA in that same view is a redundant, competing ask and is removed (this is why Capabilities' former "Talk to Us" button was cut — it duplicated the nav CTA within the same scroll neighborhood).

No fourth button type is introduced without being justified against this tiering.

### 3.3 — The Notch-Card Module (four-variant system)

A black, rounded module (24px radius) with a white cut-corner "notch" tab holding a small label — the site's signature dark-surface motif, currently proven on the homepage Capabilities section.

**The rule:** this is not one fixed component, but a family of **four corner variants** — notch top-left, top-right, bottom-left, bottom-right. Wherever this module type is used across the site, a variant not already seen earlier in that visitor's likely path is chosen. This is a deliberate anti-repetition constraint, not a decorative option — the goal is that no two notch-card moments in one visitor journey look identical, keeping visual interest active rather than pattern-matched-and-dismissed.

### 3.4 — Footer

A single, bespoke, site-wide black module — used identically on every page, never varied (unlike the notch-card, footer is not repeated elsewhere in a way that requires variation; it appears once per page, always in the same place, so it earns its own fixed, unique treatment).

Structural identity: large rounded module (24px radius) with a distinct cutout — a long rounded-rectangle notch at the bottom/middle of the card, corners softly rounded but not pill-shaped — separate from and not part of the four-corner notch-card variant system used elsewhere. This is a one-off signature shape specific to footer alone.

### 3.5 — The Indent-Asymmetry Pattern (desktop-only, 1024px+)

The desktop expression of Philosophy Rule 7 and Foundations 2.8 for sections needing a heading/label paired with supporting text in a single-column-feeling arrangement — used in Solution, Studio, Capabilities-intro, and Process. Heading (or label) sits at one edge; supporting content sits below, offset by a deliberate padding/indent, **at 1024px and above only**. Below 1024px, this pattern does not apply — both elements stack flush, symmetric, no offset, per 2.8.

### 3.6 — The Spine / Connector Pattern

Used in Process (and its mobile-native form, in place of desktop's horizontal rail). A vertical line runs along the left edge of a stack of step cards, with step markers (numbers/checks) sitting directly on the spine. This preserves the "connected, sequential" meaning of the desktop horizontal rail once the layout is forced into a single column — a direct application of the Identity vs. Container rule (Philosophy Rule 6): the rail's *meaning*, not its literal horizontal mechanic, is what had to survive.

*(Note: the scroll-triggered fill/completion animation of the spine is a motion behavior and belongs in Animations.md — only the spine's static presence and position are defined here.)*

### 3.7 — On "Card" — deliberately not a shared component

The white, bordered, rounded rectangle used in the homepage Solution and Process sections (`.panel`, `.pd-stage-card`) is **not** promoted to a reusable sitewide component. Making it one would mean every future page reaches for the same box out of convenience, directly reintroducing the template-repetition problem this whole system exists to prevent. It stays specific to the sections that were actually designed around it. Any future page needing a similar function must design its own distinct treatment, not reuse this one wholesale.

---

## Section 4 — Precedent Notes for Future Page Files

Every page file — starting with Home.md — is bound by the following, without exception:

1. **Every page file documents mobile (375px baseline) and desktop separately, section by section — never a single merged description covering both.**
2. **Before specifying any section's mobile layout, apply the Identity vs. Container test (Philosophy Rule 6).** Container → scale down freely. Meaning-carrying → design a native mobile-appropriate composition that preserves the underlying idea, do not force a stack.
3. **No page may hardcode a spacing, type, color, or radius value.** Every value must trace back to a token/rule defined in Section 2 of this document.
4. **No two consecutive sections — within a page, and ideally across a visitor's likely multi-page path — repeat the same structural pattern.** This includes reusable components: the notch-card must vary its corner variant each time it recurs within one visitor journey (Section 3.3).
5. **Before promoting any element to a shared, reusable component, apply the test in Section 3.7:** does reuse genuinely serve the never-look-like-a-template philosophy, or does it quietly reintroduce repetition because it is convenient? If the latter, the element stays page-specific.
6. **Homepage (Home.md) is the reference implementation.** Every later page file inherits its component definitions, type roles, button tiering, and token usage from Home.md and this document. Later pages do not redefine buttons, type roles, spacing logic, or color from scratch. The Case Study pages are the one acknowledged structural exception, covered separately due to their text-and-image-heavy editorial pacing.
7. **Terms of Service and Privacy Policy pages are exempt from the whitespace/asymmetry expression rules** (Philosophy Rule 8) — they are single-column, minimally designed, readability-first documents.

---

*This document governs the visual system only. Motion, timing, and interaction behavior are defined in Animations.md. Page-specific layouts are defined in individual page files, beginning with Home.md. Copy direction is governed by Copywriting.md. Site structure and page inventory are governed by File-Structure.md.*
