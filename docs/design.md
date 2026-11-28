# Design System (verified local implementation)

The approved local code is the primary source of truth; the reference website is comparative evidence only.

## Tokens

| Role | Value |
| --- | --- |
| Primary red | `#d4312a` / rgb(212,49,42) |
| Primary hover | `#b5251f` |
| Paper | `#efece7` |
| Heading | `#131313` |
| Body | `#75777a` |
| Dark / dark cards | `#1e1e20` |
| Service dark | `#1b1b1e`, `#141416` |
| Dark borders | `#2b2b30`, `#2e2e31`, arrow border `#34343a` |
| Secondary dark copy | `#7c7c84`, impact label `#656565` |
| Awards surface | `#f8f9fb` |

`site.css` also defines `--color-dark-2: #1c1c1e`, `--color-border: #e3deda`, `--container-width: 1416px`, and `--section-gap: 120px`.

## Typography

- Body/navigation/buttons: Inter, fallback system sans-serif; base `15px/1.65`.
- General heading token: Red Hat Display (700/800) in root styles.
- Reference-restored service, impact, and awards headings: Gantari 700. Fonts are loaded in [index.html](../index.html).
- Typical title scale: section 42 px; centered section title 46 px; service/impact/awards title 44 px; service title 22 px; metric 44 px; body 15 px; label 16 px.
- Service and impact typography is intentionally scoped; do not globally change heading font variables to alter one section.

## Layout and responsive behavior

- `site-container`: `min(1416px, calc(100% - 48px))`, centered.
- General section gap: 120 px, adapting in custom CSS at narrower widths.
- Key responsive thresholds: 1599, 1199, 991, 767, 575, 479 px.
- Services: desktop three-column layout; center banner leads in the two-column/tablet layout and cards stack on mobile.
- Impact: four equal metric cells, two cells below 1199 px, one centered cell below 767 px.
- Awards: 3 slides at 992+, 2 at 640+, and 1 below 640 px.

## Inner-page banners

- All inner pages use the shared [PageBanner.jsx](../src/components/common/PageBanner.jsx) component. It accepts `title`, optional `watermark`, `backgroundImage`, `breadcrumbs`, and an optional visual `variant`; page-specific banner markup and CSS are not permitted.
- The approved banner geometry is retained: 380 px desktop height, 10 px radius, 17 px top and 19 px bottom spacing, and responsive 320 px/245 px tablet/mobile heights.
- Inter is loaded once globally in [index.css](../src/index.css). Watermarks use Inter 700, `#6b6b6b`, and a base 180 px size with `26px` line-height.
- The component measures the rendered watermark after font loading and on container resize. It uses 180 px when it fits and otherwise reduces to the largest safe size (down to 24 px on the narrowest screens). Its no-wrap width limit and padded line box keep full glyphs visible without clipping or wrapping.

## Components and interactions

| Component | Verified style/interaction |
| --- | --- |
| Primary button | Site primary red, white text; shared hover follows local `.btn-primary` rules |
| Service cards | `#1b1b1e` ground, `#2e2e31` borders, 60 px padding, 87 px icon tile; hover is a 0.3 s red blurred glow and icon-decoration red change, with no lift/scale |
| Impact metrics | `#1e1e20` image-backed dark surface; `#2b2b30` separators; 80 px circular icons; white metric/Gantari type |
| Awards cards | `#1e1e20`, 6 px top/side padding, 6 px radius, `355/230` image crop; no locally implemented image scale hover |
| Carousel arrows | 50 px dark controls, `#34343a` 1 px border, 10 px radius; awards hover transitions red background/border over 0.3 s |
| Progress control | fixed 48 px white circular control, red SVG path and shadow; opacity/translation transition 250 ms |
| Reveal | 750 ms `cubic-bezier(0.16,1,0.3,1)` opacity/translate transition; disabled for reduced motion |
| SiddhiDoubleLayerWipeReveal | Media-only red → black → image reveal. Each instance observes independently at a 0.35 threshold, runs once per visit, then uses a 1.35 s red wipe followed by the same black wipe after a 1.35 s delay. Never wrap text/details with it; reduced motion renders media immediately. |

Images use `object-fit: cover` where cropped (hero, slide/card media) and `contain` for logos/icons. Do not change aspect ratios/cropping without comparison evidence.

## Header and navigation

The header supports desktop nav, dropdown/mega-menu CSS, a right mobile drawer, and a red contact action. Exact behavior/styles live in [Header.jsx](../src/components/layout/Header.jsx) and [site.css](../src/styles/site.css); inspect those before making header changes.
