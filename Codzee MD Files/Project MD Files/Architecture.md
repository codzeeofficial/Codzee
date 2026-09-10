# Codzee — Architecture.md

**Version 1.0**
**Status: Locked**
**Purpose: This file defines what the Codzee codebase is actually made of — tech stack, exact versions, data architecture, backend behavior, dependency policy, hosting, and scope boundaries. Rules.md defines the discipline under which code is written; this file defines the material it's written with. Where Rules.md says "never hardcode a value, always trace to a source of truth," this file names what those sources of truth actually are. Nothing here is inferred from training data without verification — every version and behavior claim below was checked against current information, not assumed, because this stack was released after standard model training cutoffs and old patterns will silently produce broken or outdated code if assumed instead of verified.**

---

## How To Use This Document

If Rules.md and this file ever appear to conflict, they don't — Rules.md governs *how* code is written (no comments, no `any`, strict typing, component hygiene); this file governs *what exists* (versions, folders, services). Any AI session building Codzee reads Rules.md and Architecture.md together before writing a single file. If a version or API behavior described here is ever suspected to be stale by the time it's actually used, the correct action is to verify current behavior before writing code against it — never to silently assume the description below is still accurate if enough time has passed since this file was last confirmed.

---

## Section 1 — Tech Stack & Versions

### 1.1 — Core Framework

- **Next.js `16.2.12`** — locked exact version, latest stable (Active LTS), not canary/beta. Uses the App Router exclusively; Pages Router is never used anywhere in this project.
- **React `19.2.x`** — ships bundled with Next.js 16, not independently versioned by this project.
- **TypeScript** — minimum `5.1.0` per Next.js 16's own requirement; project uses the latest stable TypeScript release compatible with that floor.
- **Node.js `20.9.0` minimum** — Next.js 16's hard requirement. Node 18 is not supported by this stack and must never be assumed as a target.
- **Package manager: npm** — lockfile (`package-lock.json`) is the actual source of truth for exact resolved versions at any point in time; this file states policy and floor versions, not a live mirror of the lockfile.

### 1.2 — Critical Behavior Changes From Next.js 16 (Read Before Writing Any Route/Page Code)

These are real, verified breaking changes from the Next.js 15 → 16 transition. Any code written against older training-data patterns will be wrong, not just stylistically outdated:

- **`params` and `searchParams` are always asynchronous, with no synchronous fallback.** Every page, layout, and route handler must `await` them. There is no version of this stack where synchronous destructuring of `params` is valid.
- **Turbopack is the default bundler** for both `next dev` and `next build`, with no flag required. A custom Webpack config is not assumed anywhere in this project; if one is ever needed, it must be explicitly flagged before use, since Turbopack ignores custom Webpack config by default.
- **`middleware.ts` is renamed to `proxy.ts`.** If this project ever needs request-intercepting logic, it is written as `proxy.ts`, not `middleware.ts` — the old filename still technically works but is deprecated and should never be the name used in new code. Proxy logic runs on the Node.js runtime only; Edge runtime is not available for this purpose in this version.
- **React 19.2 features are available** (View Transitions via `next/link`'s `transitionTypes` prop, `useEffectEvent()`, `<Activity/>`) — these may be used where they genuinely solve a problem (e.g. `transitionTypes` is directly relevant to Animations.md Section 8's page-transition requirements), never used gratuitously to demonstrate the feature exists.
- **`npx next typegen`** generates typed `PageProps`, `LayoutProps`, and `RouteContext` helpers automatically. This is the correct, non-`any` way to type async params/searchParams per Rules.md 2.1 and 2.2 — it is used rather than hand-rolling equivalent types, since the generated helpers stay correct as routes change.
- **Explicit caching via `"use cache"`** is Next.js 16's caching model — this project does not rely on implicit route-level caching assumptions from older versions; any caching behavior needed is stated explicitly using this directive.

### 1.3 — Styling

**No CSS framework. No Tailwind. Raw CSS only, via CSS Modules (`.module.css` per component), with a single shared `global.css` as the sole source of design tokens.** This is a deliberate choice for full customization control, confirmed directly — not a default, not a placeholder for a framework to be added later.

- Every token a component needs (color, spacing, radius, type, motion) is referenced from `global.css` via CSS custom properties — never a hardcoded literal in a `.module.css` file, per Rules.md 1.6 and 2.5.
- If a value is needed that doesn't yet exist as a token, it is added to `global.css` properly — never bypassed locally as a one-off, even under deadline pressure.

### 1.4 — Fluid Type Formula (resolves Design.md's per-section bespoke `clamp()` values)

Design.md 2.3 explicitly and correctly permits different sections to use different heading sizes, each expressed as its own `clamp()`. Left unresolved, this produces dozens of freehand `clamp()` values typed by feel across `.module.css` files — a direct violation of Rules.md 1.6 the moment it happens in code, even though the underlying design decision is legitimate. This section resolves that gap.

**The formula:** every fluid heading size in this codebase is expressed as a function of exactly two real inputs — a minimum size (`rem`, at the mobile floor) and a maximum size (`rem`, at the desktop container ceiling) — resolved against two fixed, shared reference viewports already locked elsewhere in this doc set: `375px` (Design.md's mobile baseline) and `1600px` (Design.md 2.7's desktop container max). These two reference viewports are defined once as tokens in `global.css` (`--fluid-min-vw`, `--fluid-max-vw`) and never redefined per component.

**The pattern every `.module.css` file follows, with `MIN_REM` and `MAX_REM` as the only two numbers a developer or AI session ever chooses:**

```css
font-size: clamp(
  MIN_REMrem,
  calc(MIN_REMrem + (MAX_REM - MIN_REM) * ((100vw - var(--fluid-min-vw)) / (var(--fluid-max-vw) - var(--fluid-min-vw)))),
  MAX_REMrem
);
```

This means an existing spec like `clamp(2rem, 3.5vw, 3rem)` from Services.md is re-expressed as `MIN_REM: 2, MAX_REM: 3` run through the shared formula above — the actual sizing decision already locked in every page file does not change, only the *mechanism* producing the middle value changes, from a freehand guess to a calculated, sourced value. No existing page file's heading sizes need to be redesigned; they need to be re-expressed through this formula when implemented.

**Hero-scale exception (Design.md 2.3's own stated exception) still applies** — Home's hero primary/secondary lines already use genuinely bespoke `clamp()` ranges not derived from a section-level min/max pairing, and continue to do so; this formula governs section-level heading variety, not the one intentionally unique hero moment.

---

## Section 2 — Data & Content Architecture

**All content lives under `/data`, separate from components and pages, per Rules.md 2.3's "data kept separate from markup" requirement.** Components and pages import from `/data`; they never contain hardcoded copy, project details, or team information inline.

### 2.1 — Standard Page Content

Each core page's copy (Home, About, Services, Capabilities, Process, Contact, Team) lives in its own typed data file — a single exported object per page, typed against an interface matching that page's `.md` file's actual section structure, so the data shape and the structural spec stay honest reflections of each other.

### 2.2 — Case Study Data (Structural Enforcement, Not Just Content Storage)

This is the one place content architecture and Case-Study-Template.md's toolkit genuinely intersect, and it's treated deliberately, not left as plain prose storage.

Every case study's image galleries are represented as **typed data**, not freehand markup per page — because Case-Study-Template.md's system (primary/compact slot tiers, the A/B/C/D width-pattern library, slot sequencing) is a real, enforceable structure, and expressing it as a type means the rules are enforced by the compiler, not just followed by convention.

Approximate shape (exact interface finalized in Files.md/actual implementation, this section states the principle, not final code):

```ts
type GallerySlotTier = 'primary' | 'compact'
type WidthPattern = 'A' | 'B' | 'C' | 'D'

interface GallerySlot {
  tier: GallerySlotTier
  pattern: WidthPattern
  images: FramedCaptureImage[]
}

interface CaseStudyGallery {
  slots: GallerySlot[]
}
```

A shared `<CaseStudyGallery>` component reads this data and renders the correct layout per Case-Study-Template.md Section 3 — an AI session cannot accidentally build a gallery outside the defined tier/pattern system, because the type itself only allows valid values. This is the concrete implementation of Rules.md 1.6's "every value traces to a source of truth" principle applied to structural decisions, not just visual tokens.

Render-tier hero images (Case-Study-Template.md 3.0) are stored as a distinct, single field per case study — never mixed into the gallery-slot array, since they're structurally a different tier with different rules (one per project, full-bleed, never captioned the way Framed Capture images are).

### 2.3 — Team Data

A static, typed array under `/data`, matching Team.md's `auto-fit`/`minmax` grid logic — adding a team member means appending to this array; no layout code changes are required, consistent with Team.md's own stated mechanism for handling growth beyond four members.

---

## Section 3 — Contact Form Backend

**Nodemailer**, confirmed and locked — native, no third-party email-service dependency, no added attack surface or monthly cost for a low-volume site.

- On submission: two emails send. One structured notification to Codzee's own inbox (arrives instantly, contains the visitor's submitted Step 1–3 data in a clearly formatted, readable layout — not a raw JSON dump). One automatic confirmation email to the visitor, consistent with Contact.md's confirmation-state copy direction ("we've received this — a human will review it").
- **No spam/bot protection (CAPTCHA, honeypot, rate limiting) is implemented at launch.** This is a deliberate decision, not an oversight: confirmed expected traffic is 300–500 visitors/month, the site's premium positioning naturally filters against casual spam traffic, and UX.md's "nothing breaks the spell" principle weighs against adding friction (a CAPTCHA) to solve a problem that doesn't yet exist at this volume. This is a launch-scope decision, not a permanent one — if real spam volume emerges post-launch, protection is added then, against real evidence rather than a hypothetical.

---

## Section 4 — Dependency Policy

### 4.1 — Animation System: Custom-Built, No Third-Party Library

**Confirmed decision, with reasoning:** Animations.md's system is a small, closed set of specific values — smooth scroll, viewport-threshold reveals, a defined timing/easing table (Section 7), and a handful of named signature motions (Process spine, Capabilities hover-isolation). A general-purpose animation library (Framer Motion, GSAP) ships with far more capability than this site's actual motion vocabulary needs, at real bundle-size cost, and licenses a level of animation freedom Animations.md deliberately does not want available (Section 7: "non-negotiable defaults... may not introduce new duration or easing values outside this table").

Instead: a small, internally-built set of shared animation utilities/hooks lives under `/components/animations` — roughly eight reusable pieces, each mapping directly to a named system already locked in Animations.md (a viewport-reveal hook per Section 3.1's trigger mechanism, a stagger utility per Section 3.3, the nav scroll-transition per Section 5.2, etc.), rather than one utility per literal animation instance across the site. This keeps the codebase's animation surface exactly as large as Animations.md's actual specification, no larger — an AI session building a new page's motion reaches for one of these eight, it does not import a third-party library or invent a ninth without explicit approval.

### 4.2 — General Dependency Approval

No new dependency (beyond the locked stack: Next.js, React, TypeScript, Nodemailer) is installed without explicit approval before use. This follows directly from Rules.md's "translator, not inventor" philosophy — an AI session that decides a new package would help still asks first, states why, and waits for confirmation rather than adding it and explaining afterward.

---

## Section 5 — Hosting & Deployment

**Vercel**, confirmed. This is the native deployment target for Next.js and is assumed throughout — image optimization via Vercel's CDN (supporting Rules.md 2.6's `<Image>` requirement without extra configuration), and no Edge-runtime assumptions beyond what Section 1.2 already notes about `proxy.ts`'s Node.js-only execution in this version.

---

## Section 6 — Scope Boundary (v1 Launch)

Restated here from File-Structure.md so this file is a complete standalone reference, not requiring a cross-reference for a decision already made:

**Not built at launch, per File-Structure.md's own "Phase Two Additions" section:** Articles Index and individual Articles, Resources Index and the four planned tools (AI Diagnosis Tool, Decision Framework, Cost Calculator, Template), Case Study — Yosento, the hidden Easter egg game, newsletter archive. These remain explicitly out of scope for every task derived from this doc set until Phase Two is opened — an AI session should never scaffold routes, data files, or components for any of these without a direct, explicit instruction to begin Phase Two work.

**Built at launch:** the 13 pages already locked in File-Structure.md's Full Page Inventory (Home, About, Team, Services, Capabilities, Work, the three Case Studies, Process, Contact, Terms, Privacy).

---

## Open Items Carried Forward

1. **Exact case-study gallery data interface** — Section 2.2 states the principle and approximate shape; final TypeScript interfaces are written when Files.md and actual implementation begin, not fully finalized here.
2. **The eight specific animation utilities** — Section 4.1 commits to roughly eight, mapped to Animations.md's named systems, but the exact enumeration (which eight, exactly) is a task for Files.md/Tasks.md, not this file.
3. **Section 6's confirmation** — this file assumes File-Structure.md's Phase Two boundary is still accurate as of this pass; if that boundary has changed since File-Structure.md was last touched, this section needs to be reconciled against the current version, not silently trusted.

---

*This document governs tech stack, versions, data architecture, backend behavior, dependencies, hosting, and scope only. Code discipline (how it's written) is governed by Rules.md. What to build is governed by Design.md, Home.md and every other page file, Copywriting.md, Animations.md, SEO.md, and Case-Study-Template.md. Where files physically live in the project is governed by Files.md. Build sequencing is governed by Tasks.md.*
