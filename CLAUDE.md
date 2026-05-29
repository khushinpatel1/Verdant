# Verdant Studio

## What this is
Marketing site for Verdant Studio — a privacy-first software studio ("software built for
people, not advertisers"). A single-page React app, client-side routed. Deployed on
Cloudflare Pages via GitHub.

## Stack — keep it simple
- React 19 + React Router 7 (SPA, `BrowserRouter`).
- Vite 6 build tool. Scripts: `npm run dev` (port 5173) · `npm run build` · `npm run preview`.
- Plain CSS with custom properties in `src/index.css`. No CSS framework.
- No backend, no database, no API routes. Static front-end only.
- Deploy: push to GitHub → Cloudflare Pages builds it.

## File map
- `index.html` → mounts `src/main.jsx` → `src/App.jsx` (defines routes).
- Pages (`src/pages/`): `Studio.jsx` (home `/`), `Garden.jsx` (`/garden`), `Emerald.jsx`
  (`/emerald`), `Ethos.jsx` (`/about`), `Team.jsx` (`/team`), `Profile.jsx` (`/team/:slug`).
- Components (`src/components/`): `Nav.jsx`, `Footer.jsx`.
- `src/useReveal.js` — scroll-reveal hook.
- `src/index.css` — ALL styles, design tokens at `:root`. This file is large; edit it
  surgically, never rewrite it whole.

## Visual direction
Organic, asymmetric, layered. Watercolor logic — colors bleed at edges, elements overlap.
Never a clean grid. Never default AI symmetry. Multiple depths. Imperfection is intentional.
Think Diablo III art direction — the world feels grown, not designed.

## Typography (CSS vars in `src/index.css`)
- `--ff-display`: **Newsreader** — headlines. Editorial high-contrast serif, composed (not whimsical).
- `--ff-body`: **Hanken Grotesque** — UI / body.
- `--ff-mono`: **DM Mono** — data / labels.
Always reference the vars, never hardcode a font name.

## Colors (CSS vars in `src/index.css`)
forest `#15300A` / `#2D5016` · moss `#7A9E7E` · sage `#C8D5B9` · parchment `#F4EEE2` ·
cream `#FBF8F2` · amber `#8B6914` · gold `#C8973F` · terra `#6B3F2A`.
Use the `--var` tokens, never raw hex in components.

## Working rules
- **Edit, don't rewrite.** Use targeted edits; never `Write` a whole file unless I ask.
- One section at a time — finish it before starting the next.
- Show diffs, not full rewrites.
- Ask before structural / layout decisions.
- Mobile responsive always. Semantic HTML.
- Batch related changes into one pass; `/clear` between unrelated tasks to keep context lean.

## Models
Opus 4.8 for design, judgment, and refactors. Sonnet 4.6 for mechanical / scaffolding work.

## Claude Code workflow
- Verify visual changes with the `preview_*` tools. Use `preview_snapshot` / `preview_inspect`
  while iterating (cheap, text); reserve `preview_screenshot` for final proof (image tokens).
- `/code-review` before committing; `/simplify` to clean up changed code.
- `npm run dev` and the read-only preview tools are pre-approved (see `.claude/settings.json`).
