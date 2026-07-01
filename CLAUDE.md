# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This repo is a **design/content brief** for a marketing website for **YLS Rare Earth** (a Chinese NdFeB permanent-magnet manufacturer), plus a **Next.js app being built from it** in the `web/` subfolder.

The root holds the source material — `design.md` (design language), `company.md` (content), and `assets/` (imagery). The actual application lives in **`web/`** (see "The web app" below). The app is in a subfolder rather than the root because the root folder name contains capitals and a dot, which npm rejects as a package name, and the root already held non-scaffoldable brief files.

## Version control

- **Single git repo at the root** (remote `github.com/JaytheCoder-py/YLS-21stdev-Opus4.8`, default branch `main`). `web/` is tracked as part of this repo — it is **not** a submodule or a separate repo, so edit and commit it like any other folder here.
- **`company.md` is gitignored on purpose** — it holds sensitive, unpublished company information. Keep it untracked: never `git add`/commit it, and don't paste its contents into tracked files, commits, PRs, or logs. Anyone who clones the repo won't receive it, so anything the site genuinely needs from it must be moved into tracked source **deliberately** — knowing it becomes public in the repo at that point.

## The web app (`web/`)

Stack: **Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui**. All commands run **from inside `web/`**:

- `npm run dev` — dev server
- `npm run build` — production build (also runs `tsc` type-checking)
- `npm run start` — serve the production build
- `npm run lint` — ESLint
- `npx shadcn@latest add <component>` — add a shadcn primitive (lands in `components/ui/`)

Key conventions:
- **Read `web/AGENTS.md` first** — it warns that this Next.js version has breaking changes and to consult the bundled docs at `web/node_modules/next/dist/docs/` before writing app code.
- Path alias `@/*` → `web/` root; UI components live in `web/components/ui/` (the shadcn default, set in `web/components.json`).
- Components using hooks / browser APIs (`useEffect`, `window`, etc.) need `'use client'` at the top — App Router files are Server Components by default.
- React 19: ref-callback arrows must not return a value (use a block body `ref={(el) => { ... }}`), or `tsc` fails during build.
- The first integrated component is `web/components/ui/halide-landing.tsx`, rendered by `web/app/page.tsx`. Its "Halide" dark/silver/orange aesthetic is **not** the BMW-M-derived design language in `design.md` — reconcile before treating it as the YLS site's real design.

## The three inputs and how they relate

Building the site means combining these three sources — each answers a different question:

- **`design.md` — how it should look.** A complete design-system specification written as YAML frontmatter (tokens: `colors`, `typography`, `rounded`, `spacing`, `components`) followed by prose documentation. **Note the mismatch to reconcile:** the spec documents *BMW M's* brand system (it is literally titled `BMW M-design-analysis`). It is the borrowed **visual design language** to apply to YLS's content — near-black canvas, white UPPERCASE display headlines, sparing use of the M-tricolor stripe, full-bleed photography, 0px corners. When implementing, keep the *structure and rules* (weights, spacing, radius, layout) but substitute YLS's own imagery and brand marks for BMW's automotive photography and M badging. Do not ship literal BMW branding.
- **`company.md` — what it should say.** The single source of truth for all copy and facts (company profile, stats, products, grades, coatings, applications, trade terms, glossary). Do not invent figures, customers, certifications, or specs — pull them from here. **Note it is gitignored and sensitive** (see "Version control") — reference it freely while working locally, but don't commit it or copy its raw contents into tracked files without intent.
- **`assets/` — the imagery.** `company logo.png`, `assets/products/*.jpg` (~85 product photos), `assets/technical/*.jpg` (~44 process/equipment photos). These replace the automotive photography that carries the design language's visual weight.

## Design token conventions (from design.md)

The token system is pervasive and must be honored when implementing:

- **Reference syntax, not literals.** Throughout `design.md`, values like `"{colors.canvas}"`, `"{typography.button}"`, `"{rounded.none}"` are references into the frontmatter token maps. Resolve them to real values (e.g. CSS custom properties) at build time — **never inline raw hex** in components; wire everything to the tokens.
- **Component variants** (e.g. `category-tab` vs `category-tab-active`) are separate keys under `components:`. Only default and active/pressed states are specified; hover and transition timings are intentionally out of scope (see design.md "Known Gaps").

Non-negotiable brand rules the implementation must not violate (see design.md "Do's and Don'ts" and "Iteration Guide"):

- Border radius is `{rounded.none}` (0px) by default; `{rounded.full}` only for circular icon buttons. No in-between rounding.
- Display headlines: UPPERCASE, weight 700. Body: sentence-case, weight 300 (Light). Never blur this weight contrast; never bold body text.
- The M tricolor (`m-blue-light` → `m-blue-dark` → `m-red`) is a brand-identity accent only — used as the 4px `m-stripe-divider` and badge accents, **never** as a button fill or background.
- No drop shadows; depth comes from photography and the black-canvas / `surface-card` contrast.
- `{spacing.section}` (96px) between major bands; don't place two text-only bands consecutively.
- If BMW Type Next Latin is unavailable, substitute **Inter** at 700/300 with display tracking adjusted to −0.5px.

## Content caveat before publishing

`company.md` §7 flags that the export-compliance wording ("no cadmium or lead exceedance", "no patent risk") is confirmed accurate but the **public-facing phrasing still needs YLS quality/legal sign-off before publication**. Treat regulatory, patent, and certification claims as needing review rather than free-form paraphrasing.

## Working with the assets

Product and technical image filenames are **numbered non-contiguously with large gaps** (products jump 0–29 then 115–200; technical 9–78, both sparse). Never assume `N.jpg` exists for an arbitrary N — glob the directory to get the real file list before referencing images.
