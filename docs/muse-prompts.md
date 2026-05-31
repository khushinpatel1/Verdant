# Muse image prompts — LOCKED recipe

Generate, don't stock. Tool: **Google Gemini (Imagen / Nano Banana)** — best free tier and
strongest at real-world lighting and natural-landmark accuracy, which is what Japanese-garden
realism needs. Generate 4 variants per prompt, pick the best, drop it into `public/art/`.

## How these get used (read first — it dictates composition)
Each image becomes a **foundation layer** behind a page: it's **feathered into the cream paper**
on its top and (usually) one side via a soft mask, recoloured slightly toward the brand greens,
and the page content scrolls over it. The current Studio plum-moon (`public/art/plum-moon-web.jpg`)
is the prototype.

So every image MUST:
- Put its **subject weighted to ONE side** (right by default), leaving the opposite ~45% as
  **calm, near-empty negative space** — that's where the text lives and where the mask feathers
  out. Do not centre the subject. Do not fill the whole frame.
- Keep **one clear focal object** (a moon, a flower, a stone) — never a busy collage.
- Read as **painting, not photo**: nihonga / sumi-e ink-and-wash, soft pigment bleed at the
  edges, visible paper tooth. Matte, not glossy.
- Land in the brand palette so the recolour is a nudge, not a fight:
  moonlight creams `#FBF8F2`/`#F4EEE2`, moss `#7A9E7E`, sage `#C8D5B9`, forest `#2D5016`/`#15300A`,
  one faint warm-brown accent `#6B3F2A` at most.

## The shared style spine (paste into EVERY prompt, then add the subject line)
> A serene Japanese-garden scene rendered as a traditional nihonga / sumi-e watercolour and
> ink wash on textured washi paper. Moonlit, dusk-still, meditative. Soft pigment bleeding into
> the paper at the edges, generous empty negative space on the [left/right], a single quiet focal
> subject. Muted palette of moonlight cream, moss green, sage, deep forest green, with at most one
> faint earthy-brown accent. Matte, painterly, hand-made — no gloss, no glow, no digital sheen.
> Subtle but precise; nothing extra, everything intentional. 4:5 to 3:4 portrait or a loose
> square, subject weighted to one side.
>
> Negative / avoid: photorealism, 3D render, HDR, lens flare, neon, vibrant saturation, busy
> composition, text or kanji, watermark, frame or border, symmetrical centred layout, glossy or
> plasticky surfaces, generic "AI fantasy" lighting.

## The five subjects (one line each, appended to the spine)
1. **Studio `/` — anchor (REGENERATE):** a flowering plum branch reaching across from the right
   in front of a large pale full moon; blossoms catching moonlight. *Regenerate to match this
   locked recipe so all five read as one set — the current plum-moon predates it.*
2. **Garden `/garden`:** a still moonlit pond with one or two koi drifting beneath the surface,
   reflections of moonlight broken into soft rings; reeds at the right edge.
3. **Ethos `/about`:** a raked dry-stone (karesansui) garden — concentric rake lines in pale
   sand around two or three dark settled stones, low moonlight raking across the grooves.
4. **Team `/team`:** a single moonlit flower or one bare maple branch against deep quiet space —
   solitary, "a studio of one," the most minimal of the five.
5. **Emerald `/emerald` — the hidden egg:** a deeper, darker, more mysterious green dusk — dense
   foliage half-swallowed in shadow, a hint of something just out of sight. Lowest light, most
   secretive of the set.

## After generating
Drop the chosen variant into `public/art/` (suggested names: `garden-pond`, `ethos-sand`,
`team-flower`, `emerald-dusk`, and the regenerated `plum-moon`). Tell Claude they're in — the
reusable `MuseImage` foundation component + per-page wiring is a quick build once the real art
exists (mask/placement get tuned to each actual image, not guessed).
