# Codzee — Animations.md

**Version 1.0**
**Status: Locked**
**Purpose: This document extends UX.md's motion principles with precise, buildable values — exact timing, easing, thresholds, and distances. It does not restate UX.md's philosophy; it converts that philosophy into numbers an AI can implement without guessing. It covers general, sitewide motion only. Section-specific signature motion unique to one page (e.g. a component that only exists on one page) is documented in that page's own file, but must be built using the timing/easing system defined here.**

---

## How To Use This Document

UX.md defines *why* motion behaves the way it does on this site (felt not seen, never performs, nothing on a timer, mobile touch-first). This document defines *exactly how* — the numbers. Every animation built anywhere on the site, on any page, must use the values defined here unless a page file explicitly documents a justified exception.

---

## Section 1 — Governing Rule

Any section on any page is permitted to define its own signature motion (a unique visual moment specific to that section's content — e.g. a progress spine, a fill effect). This is expected and encouraged, consistent with Design.md's "never look like a template" principle applied to motion. But signature motion must still be built from the timing and easing values defined in this document — it may combine or sequence them differently, but it may not invent new duration or easing values outside this system. Consistency comes from a shared motion vocabulary, not from every section doing the same thing.

---

## Section 2 — Smooth Scroll

Non-negotiable, sitewide, no exceptions. Native browser scroll is replaced with a smooth-scroll implementation on every page. This directly serves UX.md's "nothing breaks the spell" principle — default browser scroll on some platforms feels abrupt and inconsistent across devices; smooth scroll makes the experience feel considered and controlled everywhere.

---

## Section 3 — Scroll-Triggered Reveal (Text & Elements)

The core reveal system used across the entire site — headings, paragraphs, cards, images, any content-bearing element below the fold.

### 3.1 — Trigger Mechanism

**Viewport-triggered, not scroll-progress-tied.** Each element fires its own reveal exactly once, the moment it individually crosses into the viewport by the threshold below — never before, never gated behind a scroll-speed dependency. A fast scroller simply triggers several reveals in quick succession; the animation never blocks or delays the visitor's ability to keep scrolling or reading.

- `threshold: 0.35` — an element must be at least 35% visible before it fires. (Corrects the previous `0.15` value, which caused elements to appear to animate before they were meaningfully in view.)
- `rootMargin: '0px 0px -10% 0px'` — trims the bottom trigger zone slightly, so elements don't fire while only brushing the very bottom edge of the viewport.
- **Fires once. Never repeats.** Scrolling back up past an already-revealed element does not re-trigger it. This matches UX.md's "animation never repeats" rule directly — re-animating on scroll-back breaks the feeling that the reveal happened specifically for this visitor at this moment.

### 3.2 — Motion Values

Two roles, differentiated by weight — headings carry more visual weight in the type system, so they carry more weight in motion too, reinforcing hierarchy through timing the same way the type scale reinforces it through size.

| Property | Body / supporting text | Headings |
|---|---|---|
| Transform | `translateY(24px) → translateY(0)` | `translateY(32px) → translateY(0)` |
| Opacity | `0 → 1` | `0 → 1` |
| Duration | `700ms` | `850ms` |
| Easing | `cubic-bezier(0.22, 1, 0.36, 1)` | `cubic-bezier(0.22, 1, 0.36, 1)` |

**Easing note:** this replaces the previous, more aggressive `cubic-bezier(0.16, 1, 0.3, 1)` curve, which front-loaded most of the visible motion into the first ~150–200ms of the animation, making even a 700–800ms duration read as noticeably faster and snappier than intended. The corrected curve distributes motion more evenly across the full duration, producing a more deliberate, considered feeling — consistent with "premium" as defined in Design.md (looking considered, not looking fast).

### 3.3 — Stagger (Heading → Supporting Content)

Within a section, the heading fires first; supporting content (paragraph, cards, secondary elements) follows with a `120ms` delay after the heading begins. This is the entrance-sequencing principle from UX.md ("primary element first, supporting elements follow with slight delay") applied consistently, with an exact number, everywhere it recurs.

---

## Section 4 — Page-Level Entrance (On Load)

Applies to the very first moment any page is loaded or arrived at.

- **Sequence, per UX.md's locked entrance order:**
  1. Space — approximately half a second of near-emptiness before anything appears.
  2. Navigation — settles into view (see Section 5 for nav's specific entrance behavior).
  3. Primary heading — arrives.
  4. Supporting text — follows, per the `120ms` stagger defined in Section 3.3.
  5. Any CTA — arrives last, since it is the least important element on first arrival.
- Uses the same motion values as Section 3.2 — page-load entrance is not a separate animation system, it is the same reveal system, simply triggered by page-load instead of scroll-into-view.

---

## Section 5 — Navigation Motion

Desktop only. Mobile and tablet nav is a structurally different, already-shrunk component (persistent black notch bar) with no scroll-based shape change, and therefore no scroll-transition animation to define.

### 5.1 — Entrance (Desktop)

On page load, the nav appears in its full, expanded, resting-state shape and settles in from the top — it does not load already shrunk, and it does not load mid-transition. This is the nav's contribution to the page-level entrance sequence (Section 4, step 2).

### 5.2 — Scroll-State Transition (Desktop)

As the visitor scrolls past the trigger point (`scrollY > 40px`, per the existing reference value), the nav transitions directly from its expanded resting state to its final shrunk, black, top-anchored state.

**Hard rule:** this transition must be a single, direct interpolation between the two defined end-states. It must never pass through or visually resemble an intermediate third shape — specifically, it must not appear to become a rounded floating pill mid-transition before settling into the shrunk notch shape. Only two states exist: expanded (resting) and shrunk (scrolled). The transition between them must read as one continuous motion, not a sequence of distinct shape changes.

### 5.3 — Hover States (Desktop)

Existing hover behavior (sliding highlight beneath the hovered nav link) is retained conceptually — this is a correction of positioning/alignment in the current implementation, not a new interaction concept. Uses the fast tier from Section 7 (`300ms`).

---

## Section 6 — Micro-Interactions / Response Layer

Governs hover, click, and focus states on smaller interactive elements (buttons, links, tags) sitewide.

- **"Felt, not seen"** — every response should be subtle enough that the visitor feels it without consciously registering that an animation occurred. No response should call attention to itself.
- **Nothing performs** — no physics-based motion, no magnetic cursor effects, no bounce, no overshoot. Motion serves function (indicating something is interactive, confirming a click registered), never decoration.
- **Consistency** — every interactive element sitewide uses the same timing tier (Section 7) for the same category of interaction, so the pattern becomes predictable and the visitor's brain relaxes into it rather than re-learning behavior per element.
- **Touch-first parity** — every interactive element must have a defined, equally satisfying touch/tap response; hover is treated as a desktop enhancement layered on top of a working touch interaction, never as the only interaction a component has.

---

## Section 7 — Timing & Easing System (Authoritative)

This table supersedes any conflicting value found elsewhere (including UX.md's earlier stated 300/600/800ms, which this section reconciles into their actual applied use, and the original reference file's raw CSS values, which are superseded by the corrected values in Section 3.2 where they differ).

| Tier | Duration | Use case |
|---|---|---|
| Fast | `300ms` | Hover states, small interactive feedback, nav highlight movement |
| Base | `600ms` | Standard interactive transitions — nav scroll-state shift (Section 5.2), general UI state changes |
| Reveal — body | `700ms` | Scroll-triggered reveal, body/supporting content (Section 3.2) |
| Reveal — heading | `850ms` | Scroll-triggered reveal, headings (Section 3.2) |

**Easing, sitewide default:** `cubic-bezier(0.22, 1, 0.36, 1)` for all entrance/reveal motion. Fast-tier micro-interactions may use a simpler standard ease (`ease-out`) where the more deliberate reveal curve would feel unnecessarily heavy for a small, quick response (e.g. a hover highlight sliding into position).

These values are non-negotiable defaults. A page-specific signature motion (per Section 1) may combine or sequence these tiers creatively, but may not introduce new duration or easing values outside this table without being explicitly justified and documented in that page's own file.

---

## Section 8 — Page Transitions (Between Pages)

- **No hard reloads.** Every navigation between pages is a soft transition — the page never white-flashes or visibly reloads.
- **Nav persists** across the transition, never flickering, reloading, or jumping — it is the one constant element the visitor holds onto as content changes around it.
- **Transitions are directional, not decorative.** Motion communicates "you are moving to a new page," using the Base tier (`600ms`) — it does not perform or draw attention to itself beyond that basic function.

---

## Section 9 — Known Signature Motion (Cross-Reference Only)

The following are section-specific signature animations, governed by this file's timing/easing system but fully documented in their respective page files, not here:

- **Process spine (Home.md, Section 6):** as the visitor scrolls through the Process section, a vertical spine (mobile) / horizontal rail (desktop) fills progressively. Each stage card becomes visible only once the fill reaches its position — the fill's progress is the reveal trigger for each card; there is no separate, competing reveal animation layered on top. This is a variation of the Section 3 reveal system, sequenced by scroll-linked fill position rather than independent per-element viewport entry — an intentional, documented exception to the "viewport-triggered, not scroll-progress-tied" default in Section 3.1, justified because the sequential, connected nature of Process is the entire point of that section (see Design.md 3.6).
- **Capabilities hover-isolation (to be fully specified in Home.md's animation companion pass):** on hover, non-hovered items in the viewport dim toward gray, isolating the hovered item as the sole full-contrast element. Desktop only, since it is inherently a hover-dependent concept — mobile/tablet interaction behavior for this section remains an open item, flagged for resolution before Home.md is considered fully buildable.

---

*This document extends UX.md's motion principles into buildable specification. It does not define layout, structure, or color — see Design.md and the relevant page file for those. Section-specific signature motion is documented in each page's own file, using only the timing/easing system defined here.*
