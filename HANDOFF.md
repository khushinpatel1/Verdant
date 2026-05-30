# Verdant — session handoff (v3 build)

You are continuing a multi-session redesign. **Read these first, in order:**
1. Your memory index `MEMORY.md` (auto-loaded) — esp. `company-muse`, `design-direction`,
   `site-architecture`, `design-taste`.
2. The plan file: `~/.claude/plans/spicy-snacking-wilkinson.md` (full context + v3 section).
3. `verdant-site/CLAUDE.md` (project rules) and `~/.claude/CLAUDE.md` (how KP works).

Repo: `/Users/khushinpatel/Dev/verdant-site` (React 19 + Vite + React Router SPA, plain CSS
in `src/index.css`). Sister app: `/Users/khushinpatel/Dev/garden`.

## Non-negotiable working rule this session
A prior session marked things "DONE" that were never visible. **Do not repeat that.** For every
task below: make the change, then VERIFY it actually renders with the `preview_*` tools
(screenshot it) BEFORE calling it done. "Structurally correct" is not done. Show proof.

## Current state (verified on disk)
- ✅ Home hero + buttons already in the editorial "Blend" language. Squared buttons done.
- ✅ `FluidBackground.jsx` (dep `webgl-fluid`) mounted globally `position:fixed` in `App.jsx`.
  BUT the pond is **invisible** — it relies on autonomous splats accumulating over time and
  never visibly renders. This is the #1 complaint across sessions. MUST FIX.
- ✅ Garden page restyled to Blend (CSS/text only) — but NOT the showcase KP wants.
- ✅ Asset present: `public/art/plum-moon.jpeg` ("Japanese plum blossoms in moonlight", CC0,
  ~7MB, 2139×3561) — currently UNUSED.
- ❌ Japanese-garden motif (the plum image) not incorporated into any page.
- ❌ No Garden app screenshots; no `public/garden/` folder.
- Hosting: remote is `github.com/khushinpatel1/verdant`. NO Cloudflare yet (KP setting it up
  now, in parallel). Nothing is deployed/live. You only need it to BUILD cleanly.

## BUILD TASKS — do in this order, verify each

### 1. Make the pond visibly alive (highest priority)
Rework `src/components/FluidBackground.jsx` so green water is visible the instant the page
loads — do not depend on slow auto-splats. Seed several standing splats immediately on mount
(call the sim's splat path / multiple seeded splats across the canvas), keep slow ongoing
motion, lower density-dissipation so pigment lingers. Palette: **green-dominant + creams,
brown as the LIGHTEST/least accent** (`TONES`). It's a fixed layer; the whole site scrolls
over it. Verify: screenshot home AND a scrolled-down section — green must be clearly visible,
text still legible. If `webgl-fluid`'s auto approach stays unreliable, replace with a custom
always-on canvas/shader watercolor — visibility wins over library purity.

### 2. Incorporate the Japanese motif across pages
Use `public/art/plum-moon.jpeg`. Original is brown-dominant; KP wants it **green-dominant,
more cream, brown as the lightest color** — recolor via CSS duotone/gradient-map or a green
cast; if that looks cheap on such a detailed piece, flag KP for an AI recolor instead of
shipping ugly. Place it as the hero art (replaces the line-sprig `.sh-sprig` in `Studio.jsx`):
large, moon+blossom, soft watercolor edge, slow parallax on scroll. Echo the motif subtly on
the other pages (Ethos/Team/Emerald) — restrained, not pasted everywhere. Verify each.

### 3. New Garden page — long portrait showcase (`src/pages/Garden.jsx`)
Demo the REAL app at `~/Dev/garden` (screens: Garden/Grow/Roots/Seeds/Grove; sheets incl.
`TransactionSheet`; themes in `src/ui/theme/themes.ts`; fonts in `fonts.ts`).
- Page opens on the prototype **adding a transaction with numbers changing** (capture the real
  app: run its `vite` dev server, open TransactionSheet, enter amount, list+balance update;
  assemble frames to a looping `.webm/.mp4` via ffmpeg if available, else cross-fade stills in
  React). Put assets in `verdant-site/public/garden/`.
- Scroll = alternating feature sections: a framed screenshot of each Garden screen + a side
  blurb, EACH captured under a **different theme+font combo** (e.g. Moss & Cream + Editorial,
  Pale Sage + Newsstand, Forest Loam + Spectral, Midnight Forest + Caslon) to show off
  customization. Use `preview_*` against the garden dev server to set theme/font + screenshot.
- Verify the page renders with real images, not placeholders.

### 4. Emerald easter-egg
Remove Emerald from the main `Nav` links. Hide a small "off-looking" image somewhere
unexpected on the site that links to `/emerald`. Discoverable, never signposted.

## DEPLOY-READINESS (so KP can connect Cloudflare Pages to BOTH repos)
KP is setting up Cloudflare for **both** `verdant-site` and `garden`. Make both ready:
- `verdant-site`: confirm `npm run build` passes; ensure `public/_redirects` has
  `/*  /index.html  200` (SPA deep links). Note watch the 7MB plum image — compress/resize it
  for web (it should not bloat the bundle; it's in `public/`, served as-is — downscale to a
  sane hero size, keep a web-optimized version).
- `garden` (`/Users/khushinpatel/Dev/garden`): confirm `npm run build` passes and it has SPA
  `_redirects` too; fix if missing. Report the build command + output dir for each (both Vite:
  build `npm run build`, output `dist`).
- Do NOT create the Cloudflare account or deploy — KP does that. Just make both build-clean
  and list exactly what KP enters in Cloudflare (framework: none/Vite, build cmd, output dir).

## Definition of done for THIS session
Visible breathing pond ✓, plum motif in the hero (+ light echoes) ✓, real Garden showcase with
app screenshots ✓, Emerald easter-egg ✓, and BOTH `verdant-site` and `garden` building cleanly
& ready to point Cloudflare Pages at. Commit when KP says. Then we stop.
