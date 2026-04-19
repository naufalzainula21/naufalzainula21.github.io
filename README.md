# Naufal Portfolio Design System

A design system extracted from **Naufal Zainul Arifin's** personal portfolio website — a single‑person, single‑surface site for a GIS Analyst & Data Engineer based in Bandung, Indonesia.

> Live site: <https://naufalzainula21.github.io>
> Author: Naufal Zainul Arifin — GIS Analyst & Data Engineer

## Sources

This system was built from the following materials, all provided directly by the user:

| Source | What it is | How to access |
|---|---|---|
| `naufal_portfolio_website/` (local mount) | The working HTML/CSS/JS of the site (`index.html`, `portfolio.html`, `articles.html`, `favicon.svg`, `hero-bg.jpg`, `profile.jpg`, `CV_NAUFAL_ZAINUL_ARIFIN.pdf`, `README.md`) | Attached to this project — read‑only |
| `naufalzainula21/naufalzainula21.github.io` (GitHub) | Same codebase, public repo | `github_get_tree` / `github_read_file` |
| Resume PDF | `CV_NAUFAL_ZAINUL_ARIFIN.pdf` | Copied to `assets/` |

## What this system is

One **product**: a personal portfolio website. Three pages, sharing a single visual language:

- **`index.html`** — single‑page "about me" layout with a photo hero, bento "At a Glance" grid, experience/education/certificates lists, and a filterable project carousel.
- **`portfolio.html`** — a three‑column "feed" layout (left nav sidebar / project feed / right filter rail) inspired by social app feeds.
- **`articles.html`** — same three‑column shell as portfolio, but tuned for long‑form Medium articles.

The site is plain HTML + CSS + vanilla JS, no framework. Dark mode ships as a first‑class feature (toggle persisted to `localStorage`). Typography is **Inter**, loaded from Google Fonts.

---

## Index

| File / folder | Purpose |
|---|---|
| `README.md` | ← you are here |
| `colors_and_type.css` | CSS custom properties for colors, type, shadows, radii, spacing — plus semantic helper classes |
| `SKILL.md` | Agent Skill manifest (usable in Claude Code too) |
| `assets/` | `hero-bg.jpg` (textured white background), `profile.jpg` (portrait), `favicon.svg` (`n.` wordmark), `CV_NAUFAL_ZAINUL_ARIFIN.pdf` |
| `preview/` | Small HTML cards registered to the Design System tab — color/type/component specimens |
| `ui_kits/portfolio/` | Pixel‑level recreation of the website as reusable JSX components + click‑through demo. Components: `Nav`, `Hero` (typewriter + stat counters), `Sections` (bento/experience/certificates/contact), `FeedShell` (sidebar + right rail), `ProjectFeed` (center column). See `ui_kits/portfolio/README.md` |

---

## Brand essence at a glance

- **Voice:** first‑person, plain, understated. Short factual sentences. No marketing bravado.
- **Palette:** neutral slate foreground on near‑white, with a single vivid blue accent (`#3b82f6`) used sparingly. Dark mode is the same palette inverted.
- **Signature motif:** a **blue → cyan 135° gradient** used exactly three places — the logo dot, inline name highlight in the hero, and profile avatar. Nowhere else.
- **Rhythm:** a section on white (`--bg`) always alternates with a section on off‑white (`--bg-secondary`). Cards sit inside these sections with a 1px border and a 16px radius.
- **Iconography:** hand‑inlined `stroke="currentColor"`/`stroke-width="2"` SVGs (Feather‑style) plus emoji as category tokens inside project cards. No icon library.

---

## CONTENT FUNDAMENTALS

### Tone & voice
- **First person singular when talking about self** ("I'm Naufal…", "What I Do"). **Second person when addressing the reader** ("Get in touch", "Feel free to reach out"). Never royal "we".
- **Matter‑of‑fact.** No superlatives, no "cutting‑edge", no "passionate about unlocking". Closest to marketing language the site ever gets: *"with a passion for geospatial technology and data‑driven solutions"* — that's the ceiling.
- **Credentials‑forward.** Copy leads with what was done, where, and when; impact second. Example card body: *"Conducted daily drone, Total Station, and RTK data collection for mining operations. Managed inventory and stockpile tracking."*
- **Short sentences.** Card descriptions are usually 1–3 sentences, 25‑40 words total.
- **Proper nouns intact.** Tool names keep their real casing: *ArcGIS Pro*, *PostGIS*, *Power BI*, *Agisoft Metashape*, *Pix4D*.

### Casing
- **Title Case for section headings**: "At a Glance", "Latest Portfolio", "Get in touch" (note the lowercase "in" — sentence‑ish on the contact CTA).
- **Sentence case for card titles and body.**
- **UPPERCASE for micro labels only**: the bento eyebrow (`BASED IN`, `CURRENT ROLE`, `TECH STACK`), the stat labels (`YEARS EXP.`, `CERTIFICATES`), and the right‑rail section titles (`TECH STACK`, `PROJECT TYPE`). Always paired with `letter-spacing` 0.5px–0.08em.

### I vs you
| Context | Person |
|---|---|
| Hero intro, about, experience descriptions | **I / my** |
| CTAs, contact section, button copy | **you / your** |
| Stat labels & filter chips | **No pronoun** — noun phrases only |

### Emoji
Used intentionally, never decoratively. Three patterns:
- **Flag as location token**: `Bandung, Indonesia 🇮🇩` (only place a flag appears)
- **Single emoji as project category**: `🗃️` databases, `🏪` e‑commerce, `🕌` thesis, `🚲` mobility, `📊 ⚙️ 🏗️ ✈️` for various repos. Rendered at ~2.5–4.5rem inside a tinted card strip.
- **Toggle state**: 🌙 / ☀️ for the dark‑mode button on `index.html`.

No emoji in headlines, in body copy, or in CTAs.

### Vibe
Portfolio of a quietly competent analyst. The reader should feel: *"this person does the work, ships artifacts, and doesn't overclaim."* Reserved, credible, modern‑but‑not‑trendy.

### Copy examples (verbatim from the site)

> **Hero (animated):** "I'm **Naufal Zainul Arifin**" · "GIS Analyst with a passion for geospatial technology and data‑driven solutions."
>
> **Status badge:** "Open to work"
>
> **Bento eyebrow/title pair:** "BASED IN" / "Bandung, Indonesia 🇮🇩"
>
> **Experience card:** "Conducted daily drone, Total Station, and RTK data collection for mining operations. Managed inventory and stockpile tracking. Utilized ArcGIS, Surpac, Agisoft Metashape, and Pix4D for data processing and visualization."
>
> **Contact section:** "Get in touch" / "Feel free to reach out for collaborations or just a friendly hello"
>
> **Footer:** "© 2025 Naufal Zainul Arifin. All rights reserved."

---

## VISUAL FOUNDATIONS

### Colors
Two themes share the same semantic slots. See `colors_and_type.css` for every token.

- **Light mode** lives on slate‑tinted whites: page `#f8fafc`, cards `#ffffff`, borders `#e2e8f0`, body text `#0f172a`, muted `#64748b`.
- **Dark mode** is full slate: page `#0f172a`, cards `#1e293b`, borders `#334155`, body text `#f1f5f9`, muted `#94a3b8`.
- **Accent blue** is `#3b82f6` in light, lightens to `#60a5fa` in dark; its tint `--accent-light` is `#eff6ff` in light and `#1e3a5f` in dark (used for active chip backgrounds, hover halos, and the "open link" CTA tint).
- **Status green** (`#22c55e` / `#16a34a`) appears once — the "Open to work" pulsing badge. No red, yellow, or purple anywhere.
- **The gradient `linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)`** is the only non‑solid fill in the system. It appears clipped to text (`-webkit-background-clip: text`) for the logo dot and the name span, and as a flat fill for the right‑rail profile avatar. It's scarce on purpose.

### Typography
- **Inter** is the only family, weights **300 / 400 / 500 / 600 / 700 / 800**. Fallbacks: `-apple-system, BlinkMacSystemFont, sans-serif`.
- Hero `h1` is **3.2rem / 800 / line-height 1.1 / letter-spacing −0.02em**; section titles are **1.5rem / 700**; body is **1.0rem / 400 / line-height 1.6**.
- Micro labels are **0.72rem / 700 / uppercase / letter-spacing 0.5px–0.08em**.
- Numbers in hero stats are the only place **800** weight is used outside headlines.

### Spacing & layout
- Container pattern: `max-width: 1000px` (single‑column pages) or `1200px` (three‑column), centered, **`padding: 0 1.5rem`** side gutters.
- Sections: **`padding: 4rem 0`** top/bottom. Contact & hero use `5rem`+.
- Intra‑card gap is **`1rem`**; grid gaps between cards are **`1rem`**.
- Bento grid is a **3‑column CSS grid** with one `span 2` "large" card for the tech stack.
- The three‑column app shell is `220px / 1fr / 280px`, collapsing to 2 columns <1024px and 1 column <680px.

### Backgrounds
- **No full‑bleed photography** except the hero, which uses `hero-bg.jpg` (an abstract white woven/lattice texture) with a **75% white overlay** in light mode and an **88% slate overlay** in dark — the texture becomes a near‑subliminal wash.
- Blog image strips use the brand **gradient at 6% opacity** on top of `--accent-light` — emoji sits on top as the hero glyph.
- **No repeating patterns, no grain, no noise textures, no illustrations.** The system is otherwise flat color.

### Cards
- `background: var(--bg-card)` · `border: 1px solid var(--border)` · `border-radius: 16px` (14px on feed/article cards) · `padding: 1.25–1.5rem`.
- **Default cards carry no shadow.** Shadow shows up only on hover (`0 4px 20px rgba(0,0,0,0.05)`) and the hover also lifts the card `translateY(-2px)` and changes border to `--border-hover`.
- Certificate and project cards can additionally glow accent‑colored on hover: `box-shadow: 0 6px 25px rgba(59,130,246,0.12)`.

### Borders
- Borders are **always 1px, always `var(--border)`**. There is no thicker border in the system.
- Hover transitions border from `--border` → `--border-hover` or `--accent`.
- The only dashed border is the `.carousel-empty` placeholder.
- No inset borders, no double borders.

### Shadows
Only four shadows exist:
1. `--shadow-sm` `0 2px 8px rgba(0,0,0,.06)` — carousel buttons at rest
2. `--shadow-md` `0 4px 20px rgba(0,0,0,.05)` — card hover
3. `--shadow-lg` `0 8px 30px rgba(0,0,0,.08)` — blog card hover (lifted)
4. `--shadow-accent-glow` `0 20px 60px rgba(59,130,246,.25)` — profile photo on hover
Dark mode intensifies opacity to `.3–.35`.

### Corner radii
- **10px** (`--radius-lg`) — buttons, nav item chips, inputs
- **12px** (`--radius-xl`) — email CTA, back‑to‑top button
- **14px** (`--radius-2xl`) — project/article feed cards
- **16px** (`--radius-3xl`) — bento, experience, education, certificate, blog cards (the "default" card radius)
- **50px / 9999** (`--radius-pill`) — status badge, filter tabs, chips
- **50%** — profile photo, carousel buttons, dot indicators

### Animation & motion
- **Easing:** default CSS is `ease` for color fades and `cubic-bezier(0.4, 0, 0.2, 1)` for the carousel track translate.
- **Durations:** theme/color transitions `0.3s`, hovers `0.2s`, page fade‑in `0.35s`, carousel slide `0.5s`, fade‑up on scroll `0.6s`.
- **Named keyframes:**
  - `pageIn` — 8px up + opacity (page load)
  - `pulse` — status dot 1 → 0.5 → 1 opacity, 2s infinite
  - `blink` — typewriter cursor, 0.7s infinite
  - `fade-up` — scroll‑triggered 20px rise, single‑run via IntersectionObserver
- **Number counters** in hero ease with `1 − (1 − t)^3` over 1400ms.
- **No bounces, no spring physics, no scale‑above‑1 except the profile photo's `scale(1.05)` hover.**

### Hover states
- Cards: border → `--border-hover` or `--accent`, add soft shadow, `translateY(-2px)`.
- Buttons / chips: border → `--accent`, text → `--accent`, bg → `--accent-light`. Sometimes `translateY(-2px)`.
- Primary CTA: shadow `0 10px 30px rgba(15,23,42,0.15)` + `translateY(-2px)`.
- **No darker/lighter‑shade hover.** Hover always goes "toward accent" or "lift + shadow", never "same color darker".

### Press / active states
- No explicit `:active` styles — relies on browser defaults. The only "pressed" feel is buttons returning from their hover `translateY`.

### Transparency & blur
- Nav bar uses **`backdrop-filter: blur(20px)`** with a white/slate `rgba` background. After scrolling past 50px, the opacity deepens from `0.8` → `0.97`.
- Hero overlay uses a flat `rgba(255,255,255,0.75)` (light) or `rgba(15,23,42,0.88)` (dark) on top of the background image.
- **Cursor glow:** a `500×500px` radial gradient with only ~7–10% opacity that follows the mouse pointer — extremely subtle, easy to miss, and that's the point.
- Tech‑tag tooltips use solid `--text` on `--bg` (inverted); no blur.

### Imagery vibe
- Profile photo: warm natural‑light portrait, green foliage behind, no filter. Cropped into a 280px circle with a 4px `--border` ring.
- Hero background: black‑and‑white 3D sculptural texture (woven ribbons). Pure neutrals, no color cast, softened by the white overlay so it reads as "subtle surface" rather than "photo".
- Everything else: emoji glyphs on tinted card strips. No other photography on the site.

### Layout rules (fixed elements)
- **Nav** is `position: fixed; top: 0` across all three pages.
- **Left & right sidebars** on portfolio/articles are `position: sticky; top: 0; height: 100vh` (never fixed — they stop when the page ends).
- **Back‑to‑top** is `position: fixed; bottom: 2rem; right: 2rem`, fades in after 400px of scroll.
- **Cursor glow** is `position: fixed` and lives at `z-index: 0` behind content.

### "Protection gradients" vs capsules
- There are no protection gradients / vignettes on photography.
- **Capsules** (pill‑shaped chips) are the dominant small UI unit: status badge, filter tabs, filter chips, tech tags, blog tags. All share `padding: 0.3–0.4rem 0.7–1rem` and a `50px`/`9999px` radius with 1px border.

---

## ICONOGRAPHY

**Approach:** icons are **hand‑inlined SVG** in the HTML, drawn in the **Feather / Lucide** house style — 24×24 viewBox, `fill="none"`, `stroke="currentColor"`, `stroke-width="2"`, `stroke-linecap="round"`, `stroke-linejoin="round"`. They pick up color from whatever `color` the parent text uses, so they automatically theme with dark mode.

**Icons actually used in the source:**

| Icon | Usage |
|---|---|
| Home (house) | Sidebar "Home" |
| Briefcase | Sidebar "Portfolio" |
| Document | Sidebar "Articles" / card "article" badge |
| GitHub mark | Sidebar "GitHub" / card "github" badge |
| Envelope | Sidebar "Contact" |
| User | Sidebar "Profile" |
| Moon / Sun | Dark‑mode toggle |
| Magnifier (circle + handle) | Right‑rail search input |
| Heart | Project card actions (like) |
| Bookmark | Project card actions (save) |
| Arrow‑up‑out‑of‑box | "Open →" link |
| Refresh | Articles "refresh" button |
| Empty‑folder | Empty states |

**Rules I extracted:**
- Icons live **next to text**, not alone — always paired with a label, except the back‑to‑top arrow and carousel chevrons.
- Size is almost always **20px** in sidebars, **14–16px** inline with small text, **11px** inside category badges, **40–44px** in empty states / back‑to‑top.
- **Never filled.** Every icon is outline‑only.
- **Flag and emoji** as ad‑hoc category glyphs (see Content Fundamentals) — these are intentional, scoped to location labels and project cards. They are the ONLY raster glyphs.
- **Unicode arrows** appear as text, not icons: `→` in "See all →" / "Open →", `←` / `→` in carousel buttons, `↑` in back‑to‑top, `☰` in mobile menu. These use whatever font weight / color the surrounding link uses.
- **No icon font** is loaded. **No icon library (Lucide, Heroicons)** is linked. Every SVG is written by hand. For THIS design system, new icons SHOULD ship from **Lucide** (`https://unpkg.com/lucide-static@latest/icons/<name>.svg` or CDN import) — it matches the existing stroke weight and visual metrics almost exactly. Flag this substitution when you use it outside pure recreations.

**Logo / wordmark:**
- `n.` — lowercase `n` in `--text` with a period rendered as the **gradient** (either via `-webkit-text-fill-color: transparent` on a `<span>`, or as a flat circle in the favicon). Used at **3.5rem** in the nav and **2rem** in the sidebars.
- Favicon (`assets/favicon.svg`) is the dark rounded‑square version: `#0f172a` 14‑radius rect, white `n` at 44px, solid `#3b82f6` dot.

---

## Fonts

The site loads **Inter** from Google Fonts with `@import url(…)`. No .ttf / .woff files were shipped in the codebase, so **no substitution was needed** — `colors_and_type.css` imports the same weights directly from Google. If you want fully offline fonts, download Inter from <https://fonts.google.com/specimen/Inter> and drop the `.woff2` files into `fonts/`, then replace the `@import` with local `@font-face` rules.

---

## Notes & deltas from source

- No changes to tokens — every value in `colors_and_type.css` is lifted verbatim from the site's inline `:root` block.
- The site's three pages share 90%+ of their CSS; I deduped into a single source of truth here. If you see conflicting values in the originals, the canonical version is what `index.html` defines.
