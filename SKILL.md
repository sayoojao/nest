---
name: nest-design
description: Use this skill to generate well-branded interfaces and assets for Nest — The Happy Place, a single residential home in Olipram (Kerala) presented as a personal portfolio. Contains essential design guidelines, colors, type, fonts, the villa renders, video, floor plan, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out of `assets/` and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules in `README.md` + `colors_and_type.css` to become an expert in designing for this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design (a new section, a print piece, a social share card, a slide deck, an invitation, etc.), ask some clarifying questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick orientation

- **Subject:** A single home — *Nest, the happy place* — in Olipram, Kerala, designed for the Sayooj family by VAS Associates.
- **Look & feel:** Warm cream stucco, terracotta roof tile, jackfruit wood, lush tropical foliage. The signature motif is a scatter of small red dots on the tower wall.
- **Mood of copy:** Calm, unhurried, sentence-case, second person. Never corporate or salesy.
- **Type:** Cormorant Garamond (display) + Manrope (sans) + Caveat (script tagline only).
- **The reference UI:** `ui_kits/portfolio/index.html` — a working single-page React mock of the home's portfolio site.

## Files in this skill

| File | What it covers |
|---|---|
| `README.md` | Brand context, content + visual foundations, iconography. **Read first.** |
| `colors_and_type.css` | All tokens (color, type, spacing, radii, shadows, motion easing). |
| `assets/` | Villa renders (day, dusk, detail), walkthrough + montage video, floor-plan PDF, logo SVG, dot-scatter SVG. |
| `preview/` | 22 design-system cards (colors, type, spacing, components, brand). Useful as visual references. |
| `ui_kits/portfolio/` | Hi-fi React mock of the home portfolio — copy components from here for new layouts. |

## Conventions to honour

- Page background is never `#FFF` — use `var(--bg-page)` (`#FAF6EE`).
- Only one accent on screen — `--terracotta-500`. Don't introduce a second.
- The arched-window radius (`999px 999px 8px 8px`) is the brand's signature shape — use it once per layout on the hero image.
- The red-dot scatter is a once-per-page ornament; never duplicate.
- Motion is slow and soft — easing `cubic-bezier(0.22, 1, 0.36, 1)`, durations 180/360/720/1200ms.
- No emoji in marketing copy. Unicode separators (·, —, →) are welcome.

## When in doubt

Default to *less*. The renders, the type, and the dot motif do the visual heavy lifting. Empty space is part of the design.
