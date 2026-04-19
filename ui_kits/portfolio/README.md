# Portfolio UI Kit — Naufal Zainul Arifin

Faithful recreation of the portfolio at https://naufalzainula21.github.io/.

## Pages
- `index.html` — single-page app that routes between three surfaces:
  - **Home** — hero + bento about + experience + certificates + contact
  - **Portfolio** — feed-shell (left sidebar / project cards / right filter rail)
  - **Articles** — same feed-shell, filtered by project type

## Components
- `Nav.jsx` — fixed translucent top nav with scroll-darkening, dark-mode toggle, `n.` wordmark, accent underline under active item.
- `Hero.jsx` — hero-bg.jpg overlay, circular avatar, typewriter of roles, animated stat counters, Get Resume / More About Me CTAs.
- `Sections.jsx` — `BentoGrid` about section, `ExperienceList`, `CertificateList`, `ContactSection` with social pills.
- `FeedShell.jsx` — `Sidebar` (column 1) with n. logo + icon nav + dark toggle, `RightRail` (column 3) with search + mini profile card + tech-stack chips + project-type chips.
- `ProjectFeed.jsx` — the center column: project cards with gradient emoji cover, eyebrow (category · date · read time), title, excerpt, tag chips, Like / Save / Open row. Hover lifts & shadows.

## Interactive behaviors
- Top-nav links scroll-jump (Home page) and switch routes (Portfolio/Articles pages).
- Dark mode toggle persisted into `data-theme="dark"` on `documentElement`.
- Filter chips (tech-stack and project-type) combine with the search input to filter the project list live.
- Typewriter cycles five role titles.
- Stat counters ease from 0 → target on mount.

## Fidelity notes
- Design tokens live in `../../colors_and_type.css`. Everything is driven by `--bg`, `--bg-card`, `--text`, `--accent`, `--gradient`, etc.
- Component implementations here are cosmetic — no real routing, no real search index, no external links.
- Icons are inline SVGs matching the Feather/Lucide 2px-stroke family used in the original site.
