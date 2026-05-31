# Nest Portfolio — UI Kit

A hi-fi clickable mock of the Nest studio's portfolio website. One scrollable home page with sections, and a click-through to a project detail view.

## Files
- `index.html` — the entry point. Loads all JSX, hosts the app.
- `app.jsx` — top-level `<App>`, view switching (home ↔ project detail), and the `useInView` hook for scroll reveals.
- `Header.jsx` — fixed transparent header with scroll-state.
- `Hero.jsx` — full-bleed villa render, arched mask, dot-bloom motif.
- `ProjectIndex.jsx` — filterable project grid.
- `ProjectCard.jsx` — single card with arched-image hover.
- `StudioIntro.jsx` — about/values block.
- `Journal.jsx` — three blog teasers in a stagger.
- `ContactCTA.jsx` — final call to action with form.
- `Footer.jsx` — marquee of project names + sitemap.
- `ProjectDetail.jsx` — full case study (Olipram).
- `DotScatter.jsx` — animated red-dot motif (renders the signature pattern).

## Interactions

- **Header** — fades to a tinted backdrop after scrolling past 80px.
- **Hero** — image curtain-reveals on load; dot scatter animates in 30ms per dot; subtle parallax on scroll.
- **Project grid** — cards lift on hover; clicking *Olipram* enters the project detail view.
- **Filter chips** — toggle visible projects with crossfade.
- **Journal cards** — stagger-fade in on first viewport entry.
- **Footer marquee** — slow horizontal scroll, 60s loop.
- **Project detail** — back button returns to home, scroll position preserved.

## Coverage

This kit covers the marketing-site surfaces only (Home + Project Detail). Other surfaces — admin, client portal, RFP intake — were not in the brief and would need their own component pass.
