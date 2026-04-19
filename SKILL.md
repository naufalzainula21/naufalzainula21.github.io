---
name: naufal-portfolio-design
description: Use this skill to generate well-branded interfaces and assets for the Naufal Zainul Arifin portfolio, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quickstart pointers

- **Tokens:** `colors_and_type.css` — Inter font, light/dark palettes, indigo→violet `--gradient`, semantic vars (`--bg`, `--text`, `--accent`, `--accent-light`, `--border`, `--bg-card`). Toggle dark mode via `data-theme="dark"` on `<html>`.
- **UI kit:** `ui_kits/portfolio/` — pixel-matched recreation of the live site with Nav, Hero (typewriter + stat counters), BentoGrid, FeedShell (3-col app shell), ProjectFeed. See `ui_kits/portfolio/README.md`.
- **Assets:** `assets/` — logo via the `n.` wordmark (with gradient dot), `favicon.svg`, `hero-bg.jpg` (geospatial texture), `profile.jpg`, CV PDF.
- **Icons:** inline 2px-stroke SVGs (Feather/Lucide family). For new icons pull from Lucide CDN to match.
- **Voice:** first-person, professional, short sentences, no emoji in running prose (emoji are used purely as project-card thumbnails). See the CONTENT FUNDAMENTALS section of README.md.
- **Motion:** subtle — 0.2-0.3s transitions, `translateY(-1px)` hover lifts, typewriter cycling role titles, counters easing from 0.

## Preview cards

`preview/*.html` are small specimens registered in the project's Design System tab. They document what exists — read them before inventing new patterns.
