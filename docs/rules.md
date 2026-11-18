# AI and Development Rules

## Non-negotiable scope

1. Work directly in this workspace; do not create a ZIP, duplicate project, or install a library unless explicitly requested.
2. Preserve the approved site. Do not redesign or alter unrelated sections, content, typography, colors, dimensions, spacing, assets, sliders, or behavior.
3. Make the smallest targeted change. Never delete/rewrite existing CSS before verifying the replacement.
4. The `40+ Years Of Experience` counter is approved. Do not change its speed, easing, layout, digit reels, clipping, trigger, or reduced-motion behavior without explicit approval.
5. Treat screenshots/reference recordings as visual evidence. If a requested hover state is absent, inspect the live reference; otherwise report the blocker rather than inventing an effect.

## Coding rules

- Reuse existing section/common components, hooks, assets, CSS variables, and installed dependencies.
- Use Tailwind v4 for straightforward local layout/spacing when it does not lose required precision. Retain/add scoped custom CSS for complex selectors, exact reference behavior, media queries, Swiper rules, and collision fixes.
- Tailwind utility rules are layered; unlayered rules in [site.css](../src/styles/site.css) may override them. Inspect computed styles before assuming a utility wins.
- Keep component data close to the component unless shared reuse justifies [siteContent.js](../src/data/siteContent.js). Use stable keys.
- Prefer semantic controls, explicit `type="button"`, accessible labels, alt text, and `rel="noreferrer"` for external `_blank` links.
- Avoid per-scroll/per-frame React state. Use `requestAnimationFrame`, refs, observers, passive listeners, and cleanup as the existing progress/counter implementations do.
- Preserve `prefers-reduced-motion` behavior and avoid animation-induced layout shifts.
- Handle browser API absence/failures safely, following existing `IntersectionObserver`, video-play, and resize-observer fallbacks.

## Verification and handoff

1. Inspect the exact source and relevant current styles first.
2. Verify desktop, tablet, and mobile layouts affected by the change.
3. Test normal and requested hover/focus states; do not claim pixel-perfect parity without a visual comparison at the requested viewport.
4. Run `npm.cmd run build` on this Windows workspace. Run `npm run lint` when source/lint coverage is relevant.
5. Do not silently remove functionality. State concrete blockers, uncertainty, and unverified details.
6. Update [task.md](./task.md) and [memory.md](./memory.md) after each task.

## Component standards

- Keep effects focused with cleanup functions; do not recreate Swiper/observers unnecessarily.
- Keep external content/data links intact unless instructed.
- Use existing `Reveal`, `SectionLabel`, and `CountUp` contracts; changes to shared components require impact inspection of every consumer.
- Inline styles are permitted only where dynamic imported assets/overlays require them; do not replace reusable styling with inline declarations.
