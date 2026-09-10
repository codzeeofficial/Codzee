# Codzee — Case-Study-Template.md

**Version 1.0**
**Status: Draft — complete pass**
**Purpose: This file is the reusable design/layout toolkit that Pennify.md, Orvari.md, and Zhabyart.md each draw from — it is not a fixed page skeleton and does not assume a section count, section order beyond the required directional flow below, or image count. It exists because the three real case studies are fundamentally different projects (a SaaS app + marketing site, a multi-surface commerce OS, a single atmospheric website) and forcing them into one identical structure would either break under Orvari's complexity or feel artificially padded for Zhabyart's simplicity. This file defines the available compositional patterns, the rules that govern which pattern fits which content, and the one thing that is NOT optional: the directional sequencing Copywriting.md already locks in. Each individual project file selects and sequences from this toolkit and states its reasoning per choice, the same way Services.md's five layouts are selected and justified per service.**

---

## How To Use This Document

Nav and Footer are universal (Design.md 3.1, 3.4) — not repeated here. Design.md 3.9 / 4.6 already flags case studies as the one acknowledged structural exception to the homepage-inherits-everything rule — this file is that exception, formalized. Every pattern below still obeys Design.md's token system (Section 2) in full; nothing here introduces new spacing, type, color, or radius values outside that system. What's different from every other page file is that this document does not commit to a fixed desktop/mobile spec per section — it commits to a *menu* of specs, and the three project files do the committing.

**This file does not contain final copy for any project.** Real content — problem specifics, screenshot counts, whether a project has a genuine standout stat — is written in each project's own dedicated session, per Copywriting.md's explicit instruction that case study copy is written "in dedicated sessions, one per project."

---

## Section 1 — The Non-Negotiable Sequencing Rules

These are not part of the toolkit — they are the fixed constraint the toolkit operates inside. Every project file, regardless of which patterns it selects below, must obey all five, pulled directly from Copywriting.md's case-study-specific rules:

1. **Problem before solution, always.** The specific, real problem must be fully established before any mention of what was built.
2. **Thinking before output.** The reasoning — why this approach, what alternatives were considered and rejected — comes before feature/build description. The thinking is the proof of capability; the output is the confirmation.
3. **No feature without context.** Every feature or build element shown is introduced as the answer to a specific, already-stated problem — never as a bare list.
4. **The Proof Rule applies at case-study level.** Specific, verifiable, honest. No inflated claims. Real numbers and live links where they exist.
5. **The Warehouse Rule applies at case-study level.** Each case study proves Codzee's *thinking*, never Codzee's *category*. The implication is always "we understood this problem completely," never "we build things like this."

**What this means structurally:** whatever sections a project file assembles from the toolkit below, they must resolve, in order, into: **Problem → Thinking/Approach → What Was Built → Result.** A project file may add sections before, between, or after this spine (an opening atmosphere beat for Zhabyart, a multi-part build breakdown for Orvari), but it may never reorder the spine itself. This is the one place "toolkit not skeleton" does not mean "anything goes."

---

## Section 2 — Text-Heavy Section Patterns

Case studies are the one page type on the site where Copywriting.md explicitly relaxes the standard paragraph-length discipline ("paragraph length follows the complexity of what is being explained... do not pad, do not rush"). That makes visual pacing more important here than anywhere else on the site — long, unbroken prose needs compositional relief that a standard `1.25fr/1fr` head-and-body split can't always provide alone.

### 2.1 — Standard Head Pattern (default)

The same asymmetric head ratio used sitewide for "claim, then explanation" moments (Home Solution/Studio, Services Section 2, Capabilities Sections 1/4/5, Process's What We Never Do): heading `1.25fr` / body `1fr`, `80px` gap desktop, Indent-Asymmetry Pattern (`24px` offset) on mobile. This is the default for any Problem, Thinking, or Result section that doesn't need a heavier device — reused deliberately, not out of convenience, since it is functionally the same "claim then explanation" moment that recurs across the entire site, and case studies are not exempt from that recurring relationship just because they're a different page type.

### 2.2 — Escalating Paragraph Pattern

For a Problem or Thinking section whose reasoning genuinely can't resolve in one paragraph (per Copywriting.md's case-study exception to the paragraph-length rule) — sequential paragraphs, each one clearly a new complete thought, separated by `24px` gaps (wider than the sitewide `16px` paragraph gap, since case-study paragraphs are allowed more individual weight and need more visual air between them to avoid reading as one dense block). No column split — full reading-width column, `640px` max-width, left-aligned. This pattern exists specifically so "give the content room" (Copywriting.md's case-study instruction) doesn't default into a wall of text; the extra gap is the room.

### 2.3 — Isolated-Point Pattern

Borrowed conceptually (not literally reused — a genuinely distinct visual execution, per Design.md 3.7's reuse test) from Process.md's Variant E: for a single sentence or fragment inside a longer explanation that deserves to stand alone — a specific named failure point, a specific consequence — that fragment breaks out of the paragraph flow entirely, set on its own line, larger scale (Plus Jakarta Sans, `clamp(1.5rem, 2.5vw, 2.25rem)` — notably smaller than Process's isolated-detail scale, since this is a sentence fragment doing emphasis work inside a paragraph flow, not a standalone numeric callout), flanked by standard-scale paragraph text above and below it. Use sparingly — once per section maximum, consistent with Copywriting.md's "emphasis once per paragraph" discipline applied at the section level.

### 2.4 — Named List Pattern

For content that is genuinely a list of distinct, parallel items rather than a continuous argument — Orvari's "five specific failure points" is the clearest real example already named in File-Structure.md. Each item: a short bolded label + one to two sentences, stacked with `16px` gaps, no bullet marks, no numbering unless the sequence itself is meaningful (Orvari's five failure points aren't ordered by importance, so no numbers; a genuinely sequential list would use numbers the way Process's stages do). This pattern must only be used when the content is actually a list — never manufactured to add visual variety where the content is really one continuous thought (this would violate Copywriting.md's "no three-part list that exists for rhythm rather than because there are exactly three real things to say").

### 2.5 — Details Section Height Discipline & Page Rhythm

**Locked governing principle: case study pages are image-heavy, not content-heavy.** Their core job is to let the work speak; text sections exist to orient, not to carry the page. This is a deliberate, sitewide constraint on every Details-type section (Problem, Thinking/Build, Result), independent of which text pattern from 2.1–2.4 is used inside it.

- **Height cap:** every Details section is capped at roughly **two-thirds the vertical height of a primary-tier image row** (Section 3.3) on that same page. This is a height constraint, not a width or word-count constraint — a Details section may still hold one paragraph or three, per Copywriting.md's case-study paragraph-length exception ("do not pad, do not rush"), but whatever it holds resolves within that capped height rather than stretching to fill a full section's worth of vertical space. The reference unit is the *primary row height itself*, not a flat viewport fraction — this keeps the ratio self-consistent even if a project's primary-row height target shifts slightly, rather than having two independently-set numbers that could drift apart.
- **Page rhythm:** the sitewide default section order alternates **Detail → Gallery → Detail → Gallery**, continuing for as many Detail/Gallery pairs as a project's real content requires. This is not a borrowed or copied structure from any specific outside reference — it's a recognized, working convention (the same category as an asymmetric split or a pill button, both already reused deliberately elsewhere in this doc set) applied here because it directly serves the locked principle above: it keeps the page from settling into a long text stretch or a long image stretch, holding the image-forward pace consistent throughout.

---

## Section 3 — Image Display System

Case studies are the only page type on the site with real, substantial image volume, and Design.md's component system (built around white/black surfaces and typography) doesn't define how photographic/proof content at this scale gets handled. This section closes that gap in full — it replaced an earlier draft of this section that assumed fixed gallery sizes (3–5 / 6+); this version is entirely dynamic and does not assume any image count anywhere, consistent with how Team.md's `auto-fit` grid and Process.md's stage-variant cycling already handle unknown counts elsewhere in this doc set.

### 3.0 — The Three Image Tiers (governing distinction)

Every image on a case study page belongs to exactly one of three tiers. This distinction exists because a single uniform treatment across hero shots, functional detail shots, and everything in between would either overstate cheap content or understate expensive content — the tiers exist to keep visual weight honest relative to what's actually being shown.

1. **Render tier** — bespoke, full-color, full-scene environmental renders (device-in-context, real lighting, real composition). Reserved for the lead/hero proof moment per project. Full color always — the sitewide monochrome rule (Design.md 2.2) governs generated site *chrome*, not photographic/rendered *content*, per the precedent already set in Team.md 3.1 ("no monochrome treatment... the sitewide monochrome rule governs generated site surfaces, not photographic subject matter"). Never grayscale, never desaturated to match the site palette.
2. **Framed Capture tier** — real screenshots, composed deliberately (full spec in 3.1 below). This is the default tier for every proof image that isn't the hero render.
3. **Nothing plainer than Framed Capture ever appears on the site.** A raw, unedited screenshot pasted flush into a layout is not a valid tier — every image on a case study page is either a render or a Framed Capture, with no lower-effort default in between.

### 3.1 — Framed Capture (the standard proof-image treatment)

- Real screenshot, never placed edge-to-edge or raw. Sits inside a thin single-line frame (`1px`, hairline-weight, colored to match the screenshot's own dominant tone rather than a fixed site color — a dark-UI screenshot gets a barely-visible dark-toned frame edge, a light one gets a light-toned edge), with `24–32px` internal breathing room before the image content starts.
- Not a device mockup (no laptop bezel, no browser chrome, no fake OS window) and not a raw paste (never flush against the page edge or crammed against neighboring images without gap).
- Radius: `16px` (Card tier, Design.md 2.5) — same treatment already used for Home's Work-section screenshots and Team's photos, reused because it's the same content type.
- Caption beneath every Framed Capture: Archivo `14px`, typeset as a small documentation line (not a floating pill/tag) — naming what's being shown. At real image volume, an uncaptioned gallery stops reading as proof and starts reading as generic filler, which undermines the Proof Rule this entire system exists to serve.
- Crop discipline: every Framed Capture within one project shares a consistent aspect-ratio family (not forced identical across different projects, since Orvari's dashboard and Zhabyart's site have different natural shapes) — this is what makes a gallery of them read as composed rather than "whatever screenshots happened to be grabbed."

### 3.2 — Width-Pattern Library (row shapes)

A small, cycling library of row layouts — not a single grid formula repeated identically down the page. A gallery section cycles through these patterns in sequence as it places images, so no two rows in the same gallery (and ideally no two consecutive galleries on the page) repeat the same shape, consistent with Design.md Rule 2's adjacency logic applied at the image-row level.

- **Pattern A** — one image, full row.
- **Pattern B** — two images, 60/40 split.
- **Pattern C** — three images, 25/50/25 split.
- **Pattern D** — two images, 75/25 split.

Splits divide the row's own container width — see 3.3 for what governs that container's height, which is a separate axis from these width ratios.

### 3.3 — Height/Density Tiers (primary vs. compact slots)

Row **height** is governed independently from row **width** (3.2). Every image row is placed into one of two density tiers:

- **Primary slot** — near-full-viewport height. Reserved for the images doing the real proof-of-craft work — a dashboard's main view, a storefront homepage, the render itself. This is the sitewide default target for case-study image rows, universally, per the locked decision that "work speaks for itself" and that visitors should never be able to casually scroll past proof at speed (codzee-strategy.md: "time on site is trust"). This applies across all three case studies without exception, including function-heavy projects like Orvari — a technical visitor scrutinizing a dashboard benefits from a large, unhurried view of it, not a cramped one.
- **Compact slot** — a denser, grouped row: up to three images sharing roughly one viewport-height band, still using a Section 3.2 width pattern (never uniform 1:1:1), but scaled down as a group. Reserved for supporting/secondary images (minor states, modals, secondary views) that don't carry primary proof weight.

**What this file does not define:** which specific images are "important" enough for a primary slot versus which are "supporting" enough for a compact slot. That is a content decision, made per project once real images exist — this file only defines that the slot types exist and where they sit in a gallery's sequence (3.4), not which image fills which slot.

### 3.4 — Slot Sequencing

A gallery section is defined as an ordered sequence of primary and compact slots — e.g. primary → compact-group-of-3 → primary, or compact-group-of-2 → primary → compact-group-of-2 — decided per gallery, per project, so that consecutive galleries on the same page don't share an identical sequence (same adjacency discipline as everywhere else in this doc set). A gallery's sequence, combined with 3.2's width-pattern cycling within each slot, works for any real image count without needing a fixed number anywhere — 3 images or 14 images both simply populate the defined sequence until they run out.

### 3.5 — Comparison Pairing (optional, content-gated)

For any project with a genuine before/after or "old way vs. new way" moment (e.g. Orvari's Shopify-assumption-vs-reality framing, if real copy ends up structured that way — not assumed here, only made available). Two images, or one image plus one text block, side by side, `48px` gap, both anchored to a shared baseline, sized per whichever density tier (3.3) the surrounding gallery is using. **Optional and content-gated**, same rule as Process's Variant E — never forced into a project without a genuine comparison to show.

**Mobile:** stacks vertically, `24px` gap, order preserves whichever side represents "before"/"problem" first, consistent with the sitewide problem-before-solution sequencing rule.

### 3.6 — Mobile Behavior (all image patterns)

Single column at every breakpoint, per Design.md's mobile-first baseline — width-pattern splits (3.2) do not survive at 375px and are not attempted; each image in a row becomes its own full-width stacked moment instead. Image width targets roughly **75% of viewport width** (not 100%, not the render tier's desktop full-bleed-with-padding treatment) — enough margin on either side that images still read as deliberately placed rather than edge-to-edge cropped, consistent with the "premium via considered space" logic already applied to Section 1's hero padding. Primary/compact density-tier distinction (3.3) relaxes on mobile — since mobile visitors scroll at a fundamentally faster, more linear pace than desktop (a known, accepted behavioral difference, not a site failure to correct for), the near-full-viewport-height discipline that matters on desktop is not enforced identically at 375px; page length on mobile is not treated as a problem to solve the way it deliberately isn't solved on desktop either, but the *mechanism* differs — desktop earns long scroll through large, deliberate imagery, mobile simply accepts fast linear scroll as the natural mode for that device.

---

## Section 4 — The Multi-Deliverable Build Pattern

Built specifically for Orvari's situation — a backend admin panel, a private mobile app, a customer-facing storefront, and a waybill/courier system are four genuinely distinct deliverables, not four features of one product. Treating them as a single "what we built" block (the way Zhabyart's cohesive single build would be shown) would flatten a real structural difference in the underlying work.

**Desktop**
- Each deliverable gets its own labeled sub-section within the larger "What Was Built" spine position — not four separate top-level page sections, but four distinct blocks inside one section, so the page doesn't lose the sense that these are one connected system.
- Each block: small label (Archivo `14px` uppercase, e.g. "Admin Panel," "Mobile App") + short problem-context line (per Section 1's "no feature without context" rule — even inside this pattern, each deliverable restates *why* it exists before showing it) + relevant images drawn from Section 3's image system (a deliverable with few screens uses a short slot sequence with one primary slot; a deliverable with many uses a longer sequence mixing primary and compact slots per 3.3–3.4).
- Blocks stack vertically with generous separation (`80px` gap) — enough that each deliverable reads as its own complete moment, not a cramped subdivision.

**Mobile (375px)**
- Same stacked-block structure, same label/context/image pattern per block, `48px` gap between blocks (reduced from desktop's `80px`, consistent with the sitewide mobile spacing step-down pattern).

**Usage rule:** this pattern is reserved for projects with genuinely separate deliverables. Pennify (SaaS app + marketing site) may use a lighter two-block version of this same pattern rather than the single-deliverable treatment — it has more than one surface but not Orvari's four. Zhabyart does not use this pattern at all; its build is one cohesive thing and forcing it into sub-blocks would manufacture complexity that isn't real, which is exactly the kind of difference-for-its-own-sake Design.md warns against.

---

## Section 5 — Motion (Case-Study-Specific Notes)

Standard sitewide reveal system (Animations.md 3.1–3.3) applies as the baseline — nothing in this section replaces it. What follows are the notes specific to this page type's unusual image volume and near-full-viewport row heights, since a page built from many large, sequential rows is a real load-bearing case for Animations.md's timing system in a way no other page type currently is.

- **Per-element trigger, not scroll-linked fill.** Each image row fires its own reveal independently the moment it crosses the standard `0.35` threshold (Animations.md 3.1) — never gated behind a connected fill mechanism like Process's spine. Case-study images are parallel proof points, not a connected sequence, so Process's fill logic does not apply here even though both pages are image/motion-heavy.
- **Primary-slot rows** use the heading-tier duration (`850ms`) despite containing no literal heading — justified because a primary image, at this scale and visual weight, functionally carries the same "primary announcement" role a heading does elsewhere, consistent with how Process's Variant E already applies heading-tier timing to a non-heading element carrying equivalent visual weight.
- **Compact-slot groups** reveal as one group at body-tier timing (`700ms`), not staggered image-by-image within the group — they're parallel/supporting, not sequential, same logic already applied to Services' Layout 4 sub-columns and About's belief-blocks.
- **Repetition risk is real at this row count and must be actively managed**, not just tolerated: across 10+ full-viewport rows on a single page, identical reveal motion repeated at identical timing on every single row risks feeling mechanical rather than considered — the opposite of "felt, not seen." The width-pattern cycling (3.2) and slot sequencing (3.4) already vary the *visual* rhythm; this section's requirement is that the *motion* rhythm should feel equally varied, achieved entirely through Animations.md's existing tier system (alternating which rows get heading-tier vs. body-tier timing per their primary/compact classification) — no new duration or easing values are introduced to solve this, per Animations.md Section 1's rule that signature motion must be built from the existing system, not new values invented outside it.

---

## Section 6 — Proof/Verification Display

Every case study ends its Result section with a live, verifiable reference (pennify.app, zhabyart.com, Orvari's live business) — this is the Proof Rule made visual, and it deserves one consistent, deliberate treatment rather than being left as plain inline text each time.

**Pattern:** the live URL is set apart from surrounding body text — not styled as a generic hyperlink, not buried mid-paragraph. Archivo `18px`, underlined, accompanied by a small arrow glyph (visually related to Tier 3 accent-pill buttons' arrow badge, Design.md 3.2, but not the pill itself — this is a link, not a button/navigation action, so it must not borrow the pill's full visual weight or imply a commitment-tier action it isn't).

**Desktop:** sits on its own line directly beneath the Result section's closing statement, not inline within a paragraph — giving it enough visual isolation that it reads as a deliberate proof point, not an incidental citation.
**Mobile:** same treatment, same isolation, full width within standard side padding.

---

## Section 7 — Case Study Container & Base Typography

Establishing this once here, so all three project files inherit it rather than re-deriving it.

- **Container width:** unlike Terms/Privacy's narrow `720px` reading column, case studies use a wider measure — `960px` desktop max-width for text sections specifically (image patterns in Section 3 may exceed this per-pattern, as noted). This sits between the sitewide `1600px/88vw` container (too wide for sustained reading) and Terms/Privacy's `720px` (too narrow for a page meant to also showcase visual work) — a deliberate middle measure justified by this page type's dual job of being read and being looked at.
- **Body type:** Archivo `18px` as the case-study default (one step up from the sitewide `16px` default used elsewhere), consistent with Copywriting.md's direction that this visitor has self-selected to go deep and the content is allowed more room — a slightly larger base size supports comfortable extended reading, not just brevity-optimized scanning.
- **Section padding:** `128px 64px` desktop / `80px 24px` mobile, matching the sitewide heavy-section default (Services, Capabilities) — case studies don't need a lighter padding step since every section here is substantial, unlike those pages' transitional invitation sections.

---

## Section 8 — Section Assembly Rule (Per Project File)

Each of Pennify.md, Orvari.md, Zhabyart.md must, at minimum:

1. State its Problem → Thinking/Build → Result spine explicitly, confirming Section 1's sequencing is intact, and follow the locked Detail → Gallery → Detail → Gallery page rhythm (Section 2.5) as the default section order.
2. For each Details position, select and justify which Section 2 text pattern is used; for each Gallery position, define its slot sequence (Section 3.4) and width-pattern cycling (Section 3.2) — the same way Services.md justifies each layout choice per service, not a silent selection.
3. Specify one lead image in the Render tier (Section 3.0) for the hero position; every other proof image uses the Framed Capture tier (Section 3.1) — no project uses a plainer treatment than Framed Capture anywhere.
4. Confirm whether Section 4's multi-deliverable pattern applies, and at what intensity (Orvari: full four-block use; Pennify: lighter two-block use; Zhabyart: unused).
5. Include the Section 6 proof/verification treatment in its Result section, without exception — this is the one pattern every project file must use, since every project has a real live reference.
6. Check its own section sequence against Design.md Rule 2 (no two consecutive sections repeating the same structural pattern) — the toolkit provides variety, but each project file is responsible for actually varying its own selections, not just having options available.

---

## Open Items Carried Forward

1. **Whether any project has a genuine before/after moment** for Section 3.5's Comparison Pairing — content-gated, decided per project once real copy exists.
2. **Whether Pennify's two-surface situation (SaaS app + marketing site) needs its own named variant of Section 4**, distinct from a simple "lighter two-block version" — flagged as a likely refinement once Pennify.md is actually drafted, not resolved here.
3. **Real image counts per project** — no longer assumed by tier (the earlier fixed 3–5 / 6+ split is retired as of this version); Section 3's slot-sequencing system works for any real count, confirmed when each project file is built.
4. **Which specific images qualify as primary vs. compact per project** — explicitly left undefined by design (Section 3.3); a content decision made when real images exist, not a structural gap.
5. **Render-tier execution consistency across all three projects** — flagged in prior discussion as a real risk (uneven render quality between projects would read worse than no renders at all); not a structural question this file can resolve, worth confirming operationally before Orvari/Pennify's render work begins.

---

*This document governs the shared toolkit only. It does not contain final copy, section order, or image counts for any specific project — those are defined in Pennify.md, Orvari.md, and Zhabyart.md respectively, each of which inherits this file's patterns without restating them. Sitewide rules this file inherits without restating: Design.md (tokens, container logic, component reuse discipline, Rule 7's asymmetry logic and its Team.md-established exception for parallel/equal-weight content), Animations.md (standard reveal system, tier values — case-study-specific motion notes in Section 5 above build on this system without introducing new values), Copywriting.md (case-study sequencing rules, Proof Rule, Warehouse Rule, paragraph-length exception for this page type), File-Structure.md (per-project content scope).*
