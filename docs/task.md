# Task Management

**Last updated:** 2026-11-18

## Completed (supported by current code/session record)

| ID | Task | Priority | Status | Files | Acceptance / verification |
| --- | --- | --- | --- | --- | --- |
| DOC-001 | Create AI project documentation | High | Completed | `docs/*.md` | Six requested Markdown files created; existence to be verified after write |
| UI-001 | Restore services section typography/card decoration/hover | High | Completed | `ServicesSection.jsx`, `SectionLabel.jsx`, `site.css`, `index.html` | Scoped Gantari/type/colors and red glow/icon hover; `npm.cmd run build` passed in current session |
| UI-002 | Restore impact and awards screenshot sections | High | Completed | `ImpactSection.jsx`, `AwardsSection.jsx`, `site.css` | Scoped CSS prevents Tailwind-layer/reset conflict; build passed in current session |
| UI-003 | Build routed About Us page | High | Completed | `AboutUsPage.jsx`, `App.jsx`, `Header.jsx`, `Footer.jsx`, `site.css` | Added the reference-ordered banner, gallery, Mission/Vision tabs, video/core-feature area, CTA, shared header/footer, responsive styling, and About navigation; `npm.cmd run build` passed and tabs/modal were interaction-checked on 2026-11-18 |
| UI-004 | Correct About banner, mission list, and reference dimensions | High | Completed | `AboutUsPage.jsx`, `site.css` | Uses the verified official `bread3.jpg` banner source; mission items use explicit square list markers; banner height/type/breadcrumb geometry aligned to reference CSS; build passed on 2026-11-18 |
| UI-005 | Align About core-feature container width | High | Completed | `site.css` | Adjusted only the core-feature desktop container from 1077px to the 1092px width measured from the supplied reference capture; build passed on 2026-11-18 |
| UI-006 | Restore full About page size scale | High | Completed | `site.css` | Enlarged About intro, gallery, tabs, core-feature/video section, feature cards, CTA, and responsive size rules using verified reference stylesheet measurements; `npm.cmd run build` passed on 2026-11-18 |
| UI-007 | Widen About page content containers | High | Completed | `site.css` | Reduced desktop side gutters to 32px/64px and aligned intro, CTA, and core-feature containers to a 1300px cap; tablet gutters use 20px; `npm.cmd run build` passed on 2026-11-18 |
| UI-008 | Add reusable red CTA fill hover | High | Completed | `site.css`, `Footer.jsx` | Existing `.btn-primary` CTA links/buttons and the footer brochure-download CTA now use a 400 ms brand-red bottom-to-top fill that reverses downward on leave, preserves geometry, includes keyboard focus visibility, and respects the existing global reduced-motion rule; `npm.cmd run build` passed on 2026-11-18 |
| UI-009 | Build Achievements page | High | Completed | `AchievementsPage.jsx`, `App.jsx`, `Header.jsx`, `Footer.jsx`, `site.css` | Added the local `/achievements` page with the screenshot-verified hero, ratings, monumental-project sequence, civic projects, responsive rules, local navigation links, and independent once-only red/black civic-project wipe reveals; `npm.cmd run build` passed on 2026-11-19. |
| UI-010 | Standardize inner-page banners and prevent watermark clipping | High | Completed | `PageBanner.jsx`, `AboutUsPage.jsx`, `AchievementsPage.jsx`, `site.css`, `index.css`, `index.html` | Replaced per-page banner selectors with the reusable component. The watermark uses one Inter import and measured responsive sizing so full names remain visible; `npm.cmd run build` passed on 2026-11-19. |
| UI-011 | Build Awards page with reusable media wipe | High | Completed | `AwardsPage.jsx`, `SiddhiDoubleLayerWipeReveal.jsx`, `App.jsx`, `site.css` | Added the reference-led alternating award cards, shared banner/header/footer, and a media-only independently triggered red → black → image reveal. `npm.cmd run build` passed on 2026-11-20. |
| UI-012 | Repair Awards navigation and complete verified award media | High | Completed | `Header.jsx`, `Footer.jsx`, `AwardsPage.jsx`, `site.css` | Header/mobile and footer Awards links now target `/awards`; the page renders all nine official award/certificate images, each in an equal 3:2, 10 px rounded media container. `npm.cmd run build` passed on 2026-11-20. |
<<<<<<< HEAD
| UI-013 | Centralize client-side routing | High | Completed | `main.jsx`, `App.jsx`, `routes/AppRoutes.jsx`, `Header.jsx`, `Footer.jsx`, `AboutUsPage.jsx` | One React Router instance now serves `/home`, `/about-us`, `/achievements`, and `/awards`; `/` and unmatched paths redirect to `/home`; internal navigation no longer appends hashes to inner-page URLs. Direct loads, refresh, back/forward, desktop header, footer, and mobile target URLs were checked; `npm.cmd run build` passed on 2026-11-20. |
| UI-014 | Build Certificates page from approved Awards design | High | Completed | `CertificatesPage.jsx`, `AppRoutes.jsx` | Added `/certificates` with the three verified ISO records, same-side media/details layout, shared banner/chrome, Awards card styling, and existing image-only wipe. `npm.cmd run build` passed on 2026-11-20. |
=======
>>>>>>> 2562ddf9ad316e87a3cbefe05ee67f23eaac7372

## Pending / to verify

| ID | Task | Priority | Status | Files | Acceptance criteria | Verification |
| --- | --- | --- | --- | --- | --- | --- |
| QA-001 | Full visual regression at approved viewport captures | High | Pending | affected sections/styles | Compare all sections/states to approved screenshots/reference | Not performed as a full-suite validation |
| QA-002 | Accessibility audit | Medium | Pending | whole app | Keyboard, focus, contrast, drawer inert/focus behavior, video control | No automated audit configured |
| QA-003 | Content encoding review | Medium | Pending | JSX text | Replace visibly malformed mojibake only with approved source content | Some source output displays malformed smart punctuation; status unverified in browser |
| QA-004 | Visual reference comparison for dedicated About page | Medium | Pending | `AboutUsPage.jsx`, `site.css` | Compare desktop/tablet/mobile pixels against supplied captures, including the unavailable original dedicated video/poster asset | Structure and interactions checked locally; exact original image/video assets are not in the workspace |

## Reusable future-task template

| ID | Task description | Priority | Status | Related files/components | Acceptance criteria | Verification results | Last updated |
| --- | --- | --- | --- | --- | --- | --- |
| FUT-### |  | High / Medium / Low | Pending / In Progress / Blocked / Completed |  |  |  | YYYY-MM-DD |

Only move a task to **Completed** when current code plus an appropriate build/test/visual check supports it. Record blockers rather than inferring completion.
