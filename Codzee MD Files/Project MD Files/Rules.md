# Codzee — Rules.md

**Version 1.0**
**Status: Locked**
**Purpose: This is the boundary file for how code gets written on this project. Every other `.md` file defines what to build — this file defines the discipline under which it is built. An AI writing code for Codzee is a translator, converting already-locked decisions (Design.md, Home.md, future page files, Copywriting.md, SEO.md, Animations.md) into working Next.js/React/TypeScript code — never an inventor filling gaps with convenient shortcuts. This document exists because AI-written code defaults toward shortcuts, unnecessary comments, and unoptimized patterns unless explicitly forbidden. Nothing here is a suggestion.**

---

## How To Use This Document

If any instruction elsewhere — a task, a prompt, a request — conflicts with a rule in this file, this file wins, unless the person explicitly overrides it in that moment with a stated reason. Silence is not permission to take a shortcut. If a rule here seems to block a reasonable path forward, that is a signal to stop and ask, not a signal to quietly work around it.

---

## Part 1 — General Engineering Discipline (Framework-Agnostic)

These rules apply regardless of language or framework. They are about discipline, not syntax.

### 1.1 — No Comments. Full Stop.

No line comments, no block comments, no JSDoc-style annotations, anywhere in the codebase. File and folder naming, function naming, and variable naming must carry all necessary meaning on their own. If a name doesn't make a piece of code's purpose obvious, the fix is a better name — never a comment explaining an unclear name. This is a deliberate, permanent decision, not an oversight to be corrected later.

### 1.2 — No Dead Code

- No commented-out code blocks left "just in case."
- No unused imports, variables, functions, or files left in the codebase after they stop being referenced.
- No feature flags or conditional branches left in place for a feature that was never finished or was abandoned — if it's not being used, it's removed, not hidden.

### 1.3 — No Placeholder Content Shipped as Final

- No "Lorem ipsum" or filler text in any file that could plausibly be mistaken for finished work.
- No unresolved `TODO` markers left in delivered code — a `TODO` means a task isn't done; it does not belong in code presented as complete.
- No fake or mock data dressed up to look real, left in place after real data or content should have replaced it.

### 1.4 — Naming Carries Meaning

Every file, function, component, and variable is named for exactly what it is or does. Never `data2`, `newComponent`, `temp`, `handleClick2`, `Component1`, or any name that requires the reader to open the file to understand its purpose. A well-named codebase should be navigable from file names and folder structure alone.

### 1.5 — No Duplicated Logic

If the same logic, calculation, or markup pattern appears more than once, it is extracted into a single shared source and referenced — never copy-pasted with minor variations. This is the code-level enforcement of the same principle behind Design.md's token system: one source of truth, referenced everywhere, never repeated with drift.

### 1.6 — Every Value Traces to a Source of Truth

No hardcoded "magic numbers" anywhere in the codebase — no arbitrary pixel values, colors, spacing, or timing values typed directly into a component. Every visual value must reference a token defined per Design.md; every timing/easing value must reference Animations.md's system. If a value is needed that doesn't yet exist as a token, the correct action is to add it to the appropriate source file — never to hardcode it locally as a one-off.

### 1.7 — No Silent Failure

Errors are handled explicitly and visibly during development — never swallowed in an empty catch block, never ignored, never allowed to fail without a clear, traceable signal of what went wrong and where.

### 1.8 — Optimization Is Not Optional

Code is written to perform well by default — not optimized later as an afterthought. This includes avoiding unnecessary computation, unnecessary re-renders, and unnecessarily large bundles, from the first version written, not fixed in a later cleanup pass.

---

## Part 2 — Next.js / React / TypeScript Specific

### 2.1 — `any` Is Banned

No use of TypeScript's `any` type, under any circumstance, for any reason. `any` compiles cleanly while silently disabling the entire purpose of using TypeScript — it is the single most common way an AI takes a shortcut that looks correct and isn't. Proper types, interfaces, generics, or `unknown` with explicit narrowing are used instead, in every case, without exception.

### 2.2 — Strict TypeScript Configuration

- `strict: true` in `tsconfig.json`, non-negotiable.
- No implicit `any`.
- No non-null assertion operator (`!`) used to silence a real null/undefined possibility — the underlying null case is handled properly instead of suppressed.

### 2.3 — Component Structure

- One component per file.
- A component's file lives alongside only what belongs specifically to it — no bundling unrelated components into a shared file for convenience.
- Data is kept separate from markup/presentation — component files render; data/content lives in its own dedicated location, not inlined as a wall of hardcoded content inside JSX (exact folder convention for this belongs in Files.md, but the separation principle itself is a coding-discipline rule, defined here).

### 2.4 — Server vs. Client Components, Used Deliberately

Next.js App Router defaults to Server Components. `"use client"` is added only when a component genuinely requires it — interactivity, browser-only APIs, React hooks that require client execution. It is never added by default out of habit or to avoid thinking about the boundary. Every use of `"use client"` should be justifiable by a specific, real requirement in that component.

### 2.5 — No Arbitrary Styling Values

No inline styles. No arbitrary bypass values (e.g. Tailwind's `mt-[37px]`-style arbitrary bracket values, or any equivalent freehand value in whatever styling approach is used) that sidestep the token system defined in Design.md. If the styling system's configuration doesn't yet expose a token that's needed, the token is added to the configuration properly — never bypassed locally.

### 2.6 — Images

All images use Next.js's built-in `<Image>` component — never a raw `<img>` tag — for automatic optimization, sizing, and performance. This also directly supports SEO.md's image-description requirement, since `<Image>` enforces deliberate handling of alt text at the point of use.

### 2.7 — No Lazy `useEffect` Patterns

`useEffect` is not used as a default catch-all for data flow, derived state, or side effects that have a more correct, direct solution (proper data fetching patterns, derived values computed during render, event handlers doing the actual work directly). Reaching for `useEffect` reflexively is treated as a shortcut, not a neutral tool choice, and is checked against whether a more direct pattern actually solves the problem first.

### 2.8 — Accessibility Is Not Separate From Correctness

Semantic HTML elements are used for their actual purpose (a `<button>` is a button, not a styled `<div>` with a click handler; a link is an `<a>`, not a fake navigational `<div>`). This is treated as a baseline correctness requirement, not an optional accessibility pass added at the end.

---

## Part 3 — What "Done" Means

A piece of work is not complete if it:
- Contains any comment of any kind (1.1)
- Contains dead code, unused imports, or leftover placeholder content (1.2, 1.3)
- Contains a hardcoded value that should have come from a token source (1.6)
- Uses `any` anywhere (2.1)
- Uses `"use client"` without a specific justification (2.4)
- Uses a raw `<img>` instead of `<Image>` (2.6)
- Has not been checked against every relevant `.md` file governing that piece of work (Design.md for visual values, Animations.md for motion, Copywriting.md for text, SEO.md for markup/metadata)

If any of the above is true, the work is not finished — it is a draft, and should not be presented as complete.

---

*This document governs code discipline only. What to build is defined by Design.md, Home.md and future page files, Copywriting.md, Animations.md, and SEO.md. Where things live in the project is defined by Files.md. This file defines how all of it gets written.*
