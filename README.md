# Nest — The Happy Place

A design system for **Nest**, the personal portfolio of a single home in Olipram, Kerala — designed for the Sayooj family by **VAS Associates** (Engineers · Interiors · Contract). *Nest* is the home's nickname; *"the happy place"* is its tagline.

This system supports a portfolio website that celebrates this one home — its renders, walkthrough video, floor plan, story. It is *not* a studio site with many projects. The visual language is rooted in the building itself: warm stucco walls, terracotta pitched roofs, arched windows, lush tropical landscaping, and a signature red-dot wall motif.

Communication is warm, unhurried, and grounded; never corporate.

---

## Source materials

Provided by the user (May 2026):

| Source | What it contains | Stored at |
|---|---|---|
| `WhatsApp Image 2026-05-24 at 21.58.14.jpeg` | Daytime hero render — front 3/4 view | `assets/villa-day-front.jpeg` |
| `WhatsApp Image 2026-05-24 at 21.58.15.jpeg` | Daytime side elevation under tree canopy | `assets/villa-day-side.jpeg` |
| `WhatsApp Image 2026-05-24 at 21.58.15 (1).jpeg` | Dusk render with warm interior light | `assets/villa-dusk.jpeg` |
| `WhatsApp Image 2026-05-24 at 21.58.16.jpeg` | Detail — red-dot pattern wall + arched windows | `assets/villa-detail-dots.jpeg` |
| `can_you_also_create_a_video_wh.mp4` | Video walkthrough of the home | `assets/walkthrough.mp4` |
| `Create_a_video_with_these_imag.mp4` | Image-montage video | `assets/montage.mp4` |
| `SAYOOJ  - PLAN.pdf` | Floor plans (Ground + First) for "PROPOSED RESIDENCE @OLIPRAM", Client Mr Sayooj Ullanam — by VAS Associates | `assets/sayooj-plan.pdf` |

> **Attribution.** All architecture work is by **VAS Associates** — credited in the site footer.

---

## Index

| File | What it covers |
|---|---|
| `README.md` | This file. Brand context, content fundamentals, visual foundations, iconography. |
| `SKILL.md` | Agent skill manifest — load this to brief any agent. |
| `colors_and_type.css` | All CSS tokens (colors, type scale, spacing, radii, shadows, motion). |
| `preview/` | Design-system cards rendered for the review pane. |
| `assets/` | Logos, hero photography, brand SVGs. |
| `ui_kits/portfolio/` | Hi-fi clickable mock of the **Nest home portfolio site** (single-page, with videos). |

---

## CONTENT FUNDAMENTALS

### Voice

Nest writes like a thoughtful architect over coffee — *not* like a contractor's pitch deck and *not* like a luxury real-estate brochure. The voice is:

- **Warm, second-person.** Address the reader as *you*. Refer to the studio as *we*. Never *the firm*, never *the customer*.
- **Calm, declarative.** Short sentences. Verbs do the work. *"Light first. Then walls."*
- **Specific over abstract.** Name the material, the room, the time of day. *"A terracotta roof that holds the rain in monsoon"* — not *"premium roofing solutions."*
- **Joyful, not jokey.** The tagline is *The Happy Place* — lean into delight, but never into emoji or exclamation marks.
- **Unhurried.** Take the long pause. White space is part of the writing.

### Casing & punctuation

- **Sentence case** for everything — headings, buttons, nav. Title Case feels formal and salesy.
- Project names get **Capitals** (e.g. *Residence at Olipram*).
- Em-dashes — generously. They mirror the slow cadence of the speech.
- No exclamation marks. The tone carries warmth without them.
- Ampersands are fine in headings (*Engineers & Interiors*) — never in body copy.

### Word list

| Use | Avoid |
|---|---|
| Home | Property, unit |
| You / your home | The client, the customer |
| We design and build | We deliver, we provide solutions |
| Light, shade, breeze, courtyard | Premium, luxury, world-class |
| A place that feels like yours | Bespoke living experience |
| Studio | Firm, company |

### Example copy

**Hero, allowed:**
> *"We design homes that feel like a long exhale. Stucco, terracotta, deep verandahs — and a courtyard where the light moves all day."*

**Project caption, allowed:**
> *"Residence at Olipram. 2,710 sq.ft. across two floors, a sky-lit stair court, and a wall of two hundred small red dots — because the client's daughter said the wall looked lonely."*

**Forbidden:**
> *~~Premium luxury villas with world-class amenities! Contact us today!~~*

### Emoji

Never in marketing copy. Acceptable in admin UI only (e.g. ✓ check on a form). When in doubt, use a glyph or icon instead.

---

## VISUAL FOUNDATIONS

### Color

A small, earthy palette pulled directly from the villa renders. **Cream stucco** is always the page; **terracotta** is the single brand accent; **wood** and **foliage** are supporting; **ink** is text.

- `--bg-page` is **cream stucco** (`#FAF6EE`) — never pure white.
- `--bg-accent` is **terracotta** (`#B6432A`) — used sparingly: one CTA per screen, the dot motif, hovered state on key links.
- Dark sections use `--bg-inverse` (`#1F1A14`) — a warm near-black, never `#000`.
- Foliage green is for tags/badges related to landscape projects only.

**Rules:** never two accent colors competing on one screen. Never blue (the sky in renders is environment, not brand). Never gradients between brand colors — only soft warm vignettes on photography.

### Type

Two families, with a third for ornamental signature use:

- **Cormorant Garamond** (display serif) — used for all titles, project names, big numbers. Drawn-letters quality, italics used liberally for emphasis.
- **Manrope** (sans body) — UI labels, paragraphs, captions. Geometric but humane.
- **Caveat** (handwritten script) — *only* for the *"the happy place"* signature under the logo and the occasional margin note. Never longer than three words.

Display type is set **light/regular (400)** with **tight letter-spacing**, never bold-bold-bold. Body sits at 16px, line-height 1.7 — generous breathing room.

### Spacing & rhythm

8px base unit. Sections breathe at **96px / 128px** vertical rhythm on desktop. Cards never crowd — 32-48px internal padding.

### Backgrounds & surfaces

- **Full-bleed photography** is the dominant background motif. Hero images bleed edge-to-edge.
- **Cream paper** is the secondary surface — solid, untextured, with subtle warm shadow.
- **The dot motif** — a 6-column scatter of small terracotta circles, fading from dense to sparse — appears as a quiet decoration in section corners. It is the brand's distinctive mark; use it once per page, never twice.
- No SVG patterns of palm leaves, no decorative dividers, no gradient meshes. The renders do the heavy visual lifting.

### Backdrop / imagery vibe

Renders and photography are **warm, sun-soaked, slightly dusty**. Greens lean olive, never neon. Skies sit at the edges, never centered. Dusk shots are welcome and add emotional range. Black-and-white is acceptable for floor-plan diagrams only.

### Animation & motion

Motion is **slow, soft, and curtain-like**. Easing curves favor `cubic-bezier(0.22, 1, 0.36, 1)` (out-soft). Durations:

- Micro: 180ms (button hover, link underline)
- Standard: 360ms (card hover lift)
- Slow / showpiece: 720–1200ms (image reveals on scroll, parallax)

**Patterns we use:**

- **Image curtains** — hero images reveal with a vertical wipe from bottom, paired with a slight scale-in (1.05 → 1.0).
- **Stagger fades** — list items rise + fade with 60ms stagger.
- **Parallax drift** — hero images shift up 8–12% on scroll. Never more.
- **Dot bloom** — the red-dot motif animates one-by-one on first paint, 30ms per dot, total <1.5s.
- **Marquee** — slow horizontal scroll of project names, ~60s loop, used in the footer.

**Patterns we avoid:** bounce, spring overshoot, rotation, confetti, particle systems.

### Hover & press states

- **Link hover** — opacity 0.65, no color change.
- **Button hover** — background darkens one step (`--terracotta-500` → `--terracotta-600`), no scale change.
- **Card hover** — lift via `--shadow-lg`, image inside scales to 1.03 over 720ms.
- **Press** — subtle `scale(0.985)`, 90ms. Never a color change.

### Borders, dividers, shadows

- Borders are **rare**. When used: `1px solid var(--border-soft)` (8% ink). Never thick.
- **Hairline dividers** between content sections — 1px, `--border-soft`, full-bleed minus 24px gutter.
- Shadows are **warm-toned, not gray** — they're tinted with `rgba(74, 52, 31, ...)` so they sit in the cream palette without going cold.
- The signature **arched-window radius** (`999px 999px 8px 8px`) is used for hero image masks and for project-card thumbnails. This is the system's most recognizable shape.

### Layout rules

- Asymmetric grids are encouraged. A 12-column grid with deliberate empty cells (e.g. text in col 2-5, image in col 7-12) reads more architectural than full-width slabs.
- The header is **fixed**, transparent over hero, with a thin cream protection-gradient (not a solid bar) after scroll.
- Footer is **dark inverse** with a slow marquee of project names.
- No sidebars in marketing. The portfolio is a vertical column.

### Transparency & blur

Used sparingly. The fixed header uses `backdrop-filter: blur(12px)` over a 70% cream background when scrolled. Modals dim the page to 55% warm-overlay. **No frosted glass on cards.**

### Corner radii

- Tight UI elements (buttons, chips): **6px**
- Cards: **12px**
- Hero image masks: **20px** or the **arched-window radius**
- Pills (tags): **999px**
- The arched window is the signature shape — use it once per screen on the most important image.

### Cards

- Background `--bg-card` (slightly lighter than the page) or transparent.
- 12px radius, no border, `--shadow-sm` at rest, `--shadow-lg` on hover.
- Internal padding **32px** minimum.
- Project cards have an arched-radius image at the top, sentence-case title in serif, single-line caption in sans.

---

## ICONOGRAPHY

Nest is an **architecture studio**, not a SaaS product — iconography is minimal, almost incidental. The brand expresses itself through photography, type, and the dot motif, not through icon vocabulary.

### Approach

- **No icon font is shipped with the brand.** When UI icons are needed (nav arrows, form-field affordances, social links), we use **Lucide** via CDN (`https://unpkg.com/lucide@latest`) at **stroke 1.5**, **size 20px** by default. Lucide's thin, geometric line style sits well alongside Cormorant + Manrope.
- **Substitution flag:** Lucide is a substitute — the source materials provided no icon set. If Nest commissions a custom icon family, swap the CDN import.
- **Filled glyphs are forbidden** except for the signature red-dot motif. Always outline icons.

### Distinctive marks

These are *brand* glyphs, not UI icons. Use them by hand, not from an icon library.

| Mark | Purpose | Usage |
|---|---|---|
| **The red dot scatter** | Brand signature (from the villa wall) | Appears once per page as ornament. ~200 dots, 6px–14px, scattered. |
| **The arched window** | Brand shape | Used as a clip-path on the hero image of every project. |
| **The Nest wordmark** | Logo | Cormorant Garamond, 400 weight, with *"the happy place"* in Caveat below. |

### Emoji & unicode

- Emoji: **never** in user-facing marketing.
- Unicode glyphs (·, ·, →, ↘, —) are welcome and preferred for separators and arrows.
- Numerals are set in the display serif for project stats (square footage, room counts) — these are featured, not buried.

### Asset inventory (`assets/`)

| Asset | Format | Notes |
|---|---|---|
| `villa-day-front.jpeg` | JPEG | Hero — day, front 3/4 |
| `villa-day-side.jpeg` | JPEG | Side elevation |
| `villa-dusk.jpeg` | JPEG | Dusk, lights on |
| `villa-detail-dots.jpeg` | JPEG | Red-dot wall detail |
| `nest-logo.svg` | SVG | Wordmark + tagline lockup |
| `dot-scatter.svg` | SVG | Red-dot motif (decorative) |
| `arch-mask.svg` | SVG | Arched window clip-path reference |
| `sayooj-plan.pdf` | PDF | Floor plans (raw reference) |

---

## Open questions / flags for the user

1. **Logo file** — we drew a Cormorant + Caveat wordmark from scratch. If you have a real Nest logo, share it and we'll swap.
2. **Font licensing** — Cormorant Garamond, Manrope, and Caveat are all loaded from Google Fonts (open-source). Fine for production.
3. **Family name** — the story section uses *"Sayooj & family"* as the signature. Replace with the exact family/owner name if different.
4. **Domain & contact** — `hello@olipram.house` in the footer is a placeholder. Provide a real address and we'll swap.
5. **More photography** — once the home is built and photographed, swap the renders for real photos. The warm-dusty grade in *Visual Foundations* should be matched.
6. **The walkthrough & montage videos** — we use them as ambient, muted, loop-on-scroll. If you have higher-quality versions or want audio, let us know.
