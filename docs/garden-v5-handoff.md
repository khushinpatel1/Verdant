# Garden v5 — Handoff

> Source of truth for the rebuild. Distilled from `Garden v5 KEEP.tsx` (1,323 lines, single-file
> React prototype built inside Claude.ai). That file was constrained to what the artifact sandbox
> allowed — one file, no deps beyond recharts/lucide, no persistence, no real backend. **The rebuild
> in Claude Code drops those limits.** This doc captures everything worth keeping, plus where to push.

---

## What Garden is

A **privacy-first personal finance app** — the product expression of Verdant's "software built for
people, not advertisers." Mobile-first (375px frame, rendered as a phone). Five tabs, organic plant
metaphor throughout. The whole app runs client-side; the pitch is **"Private · On-device"** — your
financial data never leaves you.

The metaphor is load-bearing, not decoration:
- **Garden** — home / net worth overview (the whole plot)
- **Grow** — transactions, spending, budgets (tending the plants)
- **Seeds** — savings goals (plant a seed, watch it grow)
- **Roots** — debt payoff (what's underground, pulling at you)
- **Grove** — AI financial advisor (the wise presence in the garden)
- Goals complete = "You planted this seed. You watched it grow." Subscriptions = **"Weeds."**

---

## The amazing things (keep all of these)

### 1. Five-theme live theming engine
`THEMES` object → each theme is a flat map of ~24 CSS custom properties (`--bg`, `--ac`, `--t1..t4`,
`--gold`, `--pos`, etc.) **plus its own display font and weight** (`--hf`, `--hw`). Switching theme =
`Object.entries(t.vars).forEach(([k,v]) => documentElement.style.setProperty(k,v))`. Instant, whole-app
recolor + re-typeface. Themes: Midnight Forest, Pale Sage, Obsidian Amber, Terracotta Grove, Arctic Moss.
Each carries a `grain: true/false` flag and a 3-dot swatch preview. **This pattern is gold — keep it.**

### 2. Tactile, native-feeling interaction layer
- **Haptics** — `navigator.vibrate` wrapper with named patterns (`light` 7ms, `tab` 5ms, `success`
  [8,55,12], `delete` [14,35,8], `error` [18,20,18]). Fired on every meaningful touch. Cheap, huge payoff.
- **`PressCard`** — scale-down (0.975) on press with a spring ease-out (`cubic-bezier(0.34,1.56,0.64,1)`).
- **`SwipeRow`** — swipe-left-to-delete with a red gradient reveal + trash icon, axis-locking (ignores
  vertical drag), tap-to-edit, and a `selectMode` variant with checkboxes. Genuinely good gesture code.
- **`useCountUp`** — net worth counts up on a cubic ease-out (re-fires via `enterKey` when you return
  to the Garden tab).
- **Directional tab transitions** — slide-in-from-left/right depending on nav direction (`TAB_ORDER`).

### 3. The grain layer
SVG `feTurbulence` fractal noise as a data-URI, `mixBlendMode: overlay`, opacity 0.038. Per-theme toggle.
This is the "visible texture, not flat AI gloss" the design taste calls for. **Non-negotiable keep.**

### 4. Grove — streaming AI advisor
- Real **SSE token-by-token streaming** off the Anthropic Messages API (parses `content_block_delta`).
- System prompt is **dynamically built from live financial state** — net worth, health score, savings
  rate, top categories, accounts, recent 20 txns, goals, debts — so the AI always answers in real numbers.
- Persona: *"direct, brilliant, premium. Real numbers only. No disclaimers. Under 100 words."*
- Starter chips, thinking-dots, graceful error + retry (rolls back the last 2 messages and re-sends).

### 5. Statement import with AI parsing
`ImportModal` — upload PDF or CSV. **PDF → Anthropic document API** extracts transactions as JSON.
**CSV → smart local parser** (`parseCSV`: auto-detects tab/comma, fuzzy-matches date/merchant/amount
column headers). Preview screen with per-row select + select-all before committing. Demo-import fallback.

### 6. Real financial intelligence (not just CRUD)
- `computeFinancials` — income/expenses/savings-rate/health-score (0–100) + per-category totals, all derived live.
- **Weed detection** — `weed:true` subscriptions surfaced in a gold "Subscription Weeds · $X/mo" audit
  card with Cancel/Keep per row.
- **Recurring detection** — merchants appearing 2+ times get a "Recurring" badge automatically.
- **Budget burn bars** — green→gold→red as you approach/exceed each category limit.
- **Debt strategies** — Avalanche (by APR) vs Snowball (by balance) toggle, payoff projection.
- **Spending breakdown** — donut (recharts) + ranked category bars.
- **Harvest modal** — full-screen seasonal summary ("Spring Harvest 2026") with staggered reveal.

### 7. Design system (lift verbatim)
- **Type:** display = Fraunces / Cormorant Garamond (italic, light weight, editorial); body = Instrument
  Sans; data/labels = DM Mono (uppercase, wide letter-spacing 0.07–0.3em, tiny 7–9px). The mono-label-over-
  serif-number rhythm is the whole visual identity.
- **Motion:** the house easing is `cubic-bezier(0.16,1,0.3,1)` (ease-out-expo). Stagger children at
  `i*0.055s`. Sheets slide up over a blurred scrim.
- **`Sheet`** — reusable bottom-sheet primitive (grab handle, blur backdrop, slide-up). Every modal uses it.
- **Custom SVG icon set** (`I`) — plant/leaf/sprout/roots icons drawn inline, with an active-state weight
  bump. No icon font for the brand marks (lucide only for generic UI: upload, plus, x, send, search).

---

## Architecture notes for the rebuild

**What the artifact forced (and we now fix):**
- Single 1,323-line file → split into proper components/hooks/lib modules.
- **No persistence** — `useState(SEED)` resets on reload. Rebuild needs real storage. To honor the
  "on-device / private" promise, lean toward **local-first** (IndexedDB / localStorage / OPFS), not a
  server DB. That claim is the brand — don't break it casually.
- **API key exposure** — the prototype calls `api.anthropic.com` directly from the browser with no auth
  header (only worked inside the Claude.ai sandbox proxy). Real build needs a proxy/edge function so the
  key isn't shipped to the client. (Cloudflare Pages Functions / Workers fits the existing deploy.)
- **Inline styles everywhere** — fine for a prototype; decide deliberately whether to keep inline-style-
  driven theming (it pairs naturally with the CSS-var engine) or move to CSS modules. The CSS-var theme
  engine should survive either way.
- **Hardcoded values** — payoff projection text ("Debt-free by August 2028", "$620/mo") is faked; make
  it computed. ETA on goals is static.

**Keep the feel, lose the constraints. The prototype's taste is the spec — the engineering is the part to redo.**

---

## Push beyond v5 (compete with top-tier finance apps)

The brief: *"let go of the limits… make a new one that competes with all the top-of-the-line finance apps."*
Candidate directions (decide with the user before building):
- Persistence + multi-device sync that stays local-first / E2E-encrypted (privacy as the moat).
- Real account connection (Plaid-style) vs. staying import-only (privacy purity) — a core product fork.
- Grove gets memory + agentic actions (recategorize, set budgets, plan payoffs) instead of chat-only.
- Forecasting / cash-flow projection, net-worth trajectory, "what-if" scenarios.
- Real charts depth, drill-down, time-range selection.
- Accessibility pass (the prototype is tap/haptic-first; needs keyboard + a11y for production).
- The phone-frame presentation is a prototype device — decide if the real app is PWA/native/responsive web.

---

## File reference
Prototype lives at repo root: `Garden v5 KEEP.tsx` (gitignored / scratch — not the rebuild). When the
rebuild starts, this handoff is the brief; the .tsx is the visual + interaction reference.
