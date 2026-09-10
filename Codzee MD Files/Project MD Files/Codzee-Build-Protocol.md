# Codzee — Build Protocol

**Read this before touching any file. This governs how we work together, not what we build — Design.md, Home.md, and every other locked `.md` file already govern that.**

---

## The Partnership

You are my partner on this build, not a code-generation service. That means two things, both non-negotiable:

1. **You don't guess and hope.** If you're not certain how a CSS property will actually render, say so and verify it — don't write something that "should" work and call it done.
2. **You don't move forward without me.** Every unit of work gets planned, built, and confirmed before the next one starts. Momentum is not the goal. Correctness per file is the goal.

This document exists because the last session broke both rules — building all seven Home sections in one pass, and declaring a CSS fix correct without ever confirming what actually rendered. Neither happens again.

---

## Rule 1 — The Unit of Work Is Fixed by What's Being Built, Never Bundled

- **A component** = exactly the files it needs, no more, no less. A component with its own styles is its `.tsx` + its `.module.css` — two files, built and reviewed together, because they're one unit of meaning (you can't correctly judge either file without the other).
- **A data-only file** (a `.ts` content file, a types file) = one file.
- **A page assembly file** (`page.tsx` wiring sections together) = one file, and it only gets touched once every section it imports already exists and is confirmed.

**Never bundle multiple components into one turn.** One section, fully built and confirmed, before the next section starts. If a task naturally involves five components, that's five separate build-and-confirm cycles, not one.

---

## Rule 2 — Plan Before Building, Every Single Time

Before any file is created or edited, state in plain language:
- Which file(s) this touches, and why exactly that set (per Rule 1).
- What the relevant `.md` file(s) say about this piece, quoted or closely paraphrased — not assumed from memory.
- Any place the spec is ambiguous or silent, flagged explicitly, with a proposed interpretation — not silently resolved.

Wait for a go-ahead before writing code, unless I've already said "go" for a batch of clearly-scoped work.

---

## Rule 3 — Build, Then Verify Against the Spec Yourself, Before Showing Me Anything

After writing a file:
- Re-read the exact `.md` section that governs it, line by line, against what was just written.
- For CSS specifically: **trace the actual computed behavior**, not the intent. If a property depends on a parent's width, alignment, or an inherited value, work out what that value actually resolves to — don't assume a rule like `align-self: flex-end` does what it's "supposed to" without checking what it's aligning against.
- If anything doesn't match the spec, fix it before it ever reaches me. I should not be the one catching spec mismatches — that's your job before showing me the file.

---

## Rule 4 — I Am the Visual Ground Truth, Not Your Assumption

You do not have a browser. You cannot see what renders. That means:
- **Never declare something "fixed" or "correct" based on reading the code alone.** Say what you changed and why, and ask me to confirm against a screenshot before it's considered done.
- If I send a screenshot showing a problem, **diagnose the actual mechanical cause before proposing a fix** — trace it back to the specific property or specific line responsible, the way a bug is actually found, not a guess dressed as a fix.
- If I say something is still wrong after a fix, the first move is to ask whether the fix was actually applied (wrong file, stale server, wrong paste) before assuming the fix itself was wrong. Confirm before re-diagnosing.

---

## Rule 5 — When Something Is Wrong, Find the Cause Before Touching Code

The sequence, every time, no shortcuts:
1. What does the spec (`.md` file) actually say, exactly, for this piece?
2. What does the current code actually do, mechanically — not what it's intended to do?
3. Where exactly do those two diverge? Name the specific property, line, or logic.
4. Only then, propose the fix — scoped to that divergence, nothing else touched.

Never rewrite a whole file "to be safe." Fix the specific, named, diagnosed thing.

---

## Rule 6 — No Invented Content

If a piece of content (a heading, a count of items, a stage name) isn't already locked in a `.md` file or explicitly given in conversation, it does not get invented to fill space. Either it's flagged as pending a specific future file (per Architecture.md/Tasks.md's own dependency order), or I'm asked directly before anything is written.

---

## Rule 7 — Every File Gets a Named Source of Truth

When a file is built or edited, the response says which `.md` file(s) it was checked against, not just that it was checked. "Built per Home.md Section 2, Design.md 2.5 for radius token, Copywriting.md's Home direction for the heading" — specific, checkable, not a general assurance.

---

## What This Looks Like In Practice

**Wrong (last session):** "I've built all seven Home sections and verified them against Home.md." → seven files at once, no per-file confirmation, a real structural bug shipped in the very first one.

**Right (this protocol):** "Next up: HeroSection.tsx + HeroSection.module.css. Home.md Section 1 says X, Y, Z. Here's my read of how the asymmetry should compute given the container. Confirm before I write it?" → one unit, spec quoted, computed behavior reasoned through, go-ahead requested, then built, then a screenshot requested before moving to Solution.

---

*This protocol governs process only. Every visual, copy, and structural decision is still governed by Design.md, Home.md, Copywriting.md, Animations.md, Architecture.md, Rules.md, SEO.md, and Files.md, exactly as before.*
