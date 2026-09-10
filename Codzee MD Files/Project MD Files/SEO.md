# Codzee — SEO.md

**Version 1.0**
**Status: Locked**
**Purpose: This document defines how the Codzee site stays legible to search engines and AI systems — not through keyword competition, but through structural and semantic clarity. It does not duplicate Copywriting.md (voice, banned phrases, headline rules), Design.md (visual hierarchy), or File-Structure.md (page inventory, URLs). It governs the layer between them: how content that has already been written and designed gets tagged, structured, and described so a machine can parse it correctly.**

---

## Section 0 — The Actual Goal

Codzee will not compete for generic search rankings against content sites, directories, and award-mill blogs — that is a losing game for a four-person studio with no local-market angle and no content volume, and pretending otherwise would mean building the site around keyword targets instead of around the visitor.

SEO here means the literal definition: **search engine optimization as removing ambiguity, not as chasing rank.** The job is to make sure that when a search engine or an AI assistant parses this site, there is no confusion about what Codzee is, what it does, what problems it solves, and what it has built. This matters more now than it used to, not less — a growing share of the people who matter to Codzee are not typing keywords into a search box at all, they are describing a problem to an AI assistant, and that assistant is choosing which sites to surface based on how clearly a site describes itself, not on keyword density.

Nothing in this document should ever conflict with Copywriting.md. If a technical SEO requirement and a copywriting rule appear to conflict, Copywriting.md wins — clarity for machines is never achieved by writing worse for humans.

---

## Section 1 — Semantic Heading Structure

Separate from *visual* heading hierarchy (governed by Design.md's type scale — how large something looks). This section governs *semantic* tagging — which text is actually marked as an `h1`, `h2`, `h3`, etc., regardless of its visual size.

- **Exactly one `h1` per page.** The single most important statement on that page, matching that page's one job as defined in UX.md / File-Structure.md.
- **No skipped levels.** An `h3` must sit under an `h2`, never directly under an `h1` with no `h2` in between, and never used purely because it happens to match a desired visual size.
- **Heading tags are never chosen for their visual size.** If a piece of text needs to look like a heading but is not semantically the heading of its section, it is styled to match a heading's visual treatment without being tagged as one. Visual weight and semantic role are decided independently — Design.md governs the former, this section governs the latter.
- **Every page's heading map is derived from that page's already-defined content**, not invented separately — the `h1` is whatever that page's locked hero/opening statement already is, per Copywriting.md's page-by-page direction.

---

## Section 2 — Structured Data (Machine Self-Description)

Every page includes structured data (schema.org, implemented as JSON-LD) matching what that page actually is. This is a requirement stated here; the literal implementation location belongs in Files.md.

| Page type | Schema type | Notes |
|---|---|---|
| Home | `Organization` (or `ProfessionalService` if more precise once finalized) | Core identity: name, description, what Codzee does, contact point. |
| About | `Organization` (extended) / `AboutPage` | Reinforces identity with founder/team detail. |
| Team | `Person` entries, nested under the organization | Each team member marked up individually — name, role. |
| Services | `Service` | What Codzee builds, described in the terms already locked in Copywriting.md, not new copy. |
| Case Studies (Pennify, Orvari, Zhabyart) | `CreativeWork` or `Project` (final type confirmed when Case Study pages are built) | Each case study marked up as a distinct, real, verifiable work — reinforces the Proof Rule from Copywriting.md at the machine-readable level. |
| Contact | `ContactPage` | Straightforward. |

**Rule:** structured data must never assert anything the visible copy does not already say. It is a machine-readable mirror of the human-facing content, not a separate channel for claims that wouldn't pass Copywriting.md's Claims-Without-Proof test.

---

## Section 3 — Per-Page Metadata Pattern

A consistent, predictable template for title tags and meta descriptions — not the final written copy itself, which is written per-page when that page is built, using Copywriting.md's voice rules.

- **Title tag pattern:** `[Page's core statement] — Codzee`, kept under ~60 characters where possible to avoid truncation in search results.
- **Meta description pattern:** one to two sentences, written in Codzee's actual voice (per Copywriting.md — no generic SEO-meta-description tone, no "learn more about," no keyword stuffing), under ~155 characters.
- Every page must have a unique title and description — no two pages share one, including the individual case study pages.

---

## Section 4 — Vocabulary Alignment

A short check, not a keyword research project. Copywriting.md's language is written in Codzee's own considered, specific voice — which is correct and non-negotiable. Separately, before a page is finalized, its core problem-statements should be checked against how a real person in that exact situation would actually phrase their problem out loud or type it to an AI assistant (e.g., "my Shopify store can't handle COD returns properly" rather than only internal studio language like "fulfilment model mismatch"). This is not about inserting keywords — it's making sure intent-matching (a machine connecting a real person's stated problem to Codzee's description of who it solves problems for) isn't accidentally blocked by language that's clear to Codzee but unfamiliar to the visitor describing their own situation. Where a real tension exists between natural visitor phrasing and Codzee's locked voice, Copywriting.md's voice always wins — this is a light final check, not a rule that overrides it.

---

## Section 5 — Image Description Requirement

Every meaningful image on the site requires a specific, real alt description — never decorative filler, never left blank on a content-bearing image, never a generic label like "project screenshot." This serves both machine legibility and accessibility simultaneously, and directly supports the Proof Rule from Copywriting.md at the image level (a specific alt description of a real project screenshot is itself a small piece of verifiable specificity).

---

## Section 6 — Technical Baseline

One-line requirements, not implementation detail (implementation belongs in Files.md):

- An auto-generated, always-current sitemap exists and is submitted.
- No page that should be indexable is accidentally blocked via `robots.txt` or a stray `noindex`.
- Canonical URLs are set correctly on every page, preventing duplicate-content ambiguity.

---

*This document governs machine-legibility and structural clarity only. Voice, language, and what is said belong to Copywriting.md. Visual hierarchy belongs to Design.md. Page inventory and URLs belong to File-Structure.md. Literal implementation (where schema/meta code lives in the Next.js project) belongs to Files.md.*
