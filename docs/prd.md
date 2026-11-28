# Siddhi Constructions — Product Requirements Document

## Quick start for AI agents

Read [rules.md](./rules.md) before editing, [architecture.md](./architecture.md) to locate code, and [design.md](./design.md) before visual work. Record completed work in [task.md](./task.md) and [memory.md](./memory.md).

## Product

**Name:** Siddhi Constructions website.  
**Purpose:** A single-page marketing site for a Surat civil contractor, presenting the company, its services, projects, leadership, credentials, awards, clients, and contact path. The local implementation mirrors the approved design/reference site at <https://www.siddhiconstructions.com/> using local media where available.

**Primary audiences:** prospective commercial, industrial, residential, and infrastructure clients; project-management clients; job candidates; partners; and visitors validating credentials.

**User and business goals:** quickly establish the 1986 legacy and capability; make services, projects, leadership, awards, clients, and contact destinations discoverable; drive contact, brochure, project, and official-site links; retain the approved visual identity across desktop and mobile.

## Implemented experience

| Area | Current implementation | Main code |
| --- | --- | --- |
| Header/navigation | Desktop navigation, project mega menu, media dropdown, sticky/scrolled state, and mobile off-canvas drawer/submenus | [Header.jsx](../src/components/layout/Header.jsx) |
| Hero | Autoplaying muted video, poster fallback, sound control, first-scroll unmute attempt | [HeroSection.jsx](../src/components/sections/HeroSection.jsx) |
| About | Image carousel, company copy, approved `40+` rolling counter, three highlights | [AboutSection.jsx](../src/components/sections/AboutSection.jsx) |
| Services | Four dark service cards and central industry callout | [ServicesSection.jsx](../src/components/sections/ServicesSection.jsx) |
| Projects | Category tabs plus Swiper project carousel and external project links | [ProjectsSection.jsx](../src/components/sections/ProjectsSection.jsx) |
| Leadership | Two leader cards and management CTA | [LeadershipSection.jsx](../src/components/sections/LeadershipSection.jsx) |
| Impact | Construction-industry heading and four animated statistics | [ImpactSection.jsx](../src/components/sections/ImpactSection.jsx) |
| Awards | Three-up responsive awards carousel | [AwardsSection.jsx](../src/components/sections/AwardsSection.jsx) |
| Clients/contact | Eighteen client logos and contact CTA banner | [ClientsSection.jsx](../src/components/sections/ClientsSection.jsx) |
| Footer/progress | Footer links/contact/social links and request-animation-frame scroll progress/back-to-top control | [Footer.jsx](../src/components/layout/Footer.jsx), [BackToTopButton.jsx](../src/components/common/BackToTopButton.jsx) |

## Requirements

### Functional

- Anchor navigation must reach the corresponding one-page section.
- Mobile navigation must open, close, expose submenu state, and return focus as implemented by `Header`.
- Carousels must retain their existing autoplay/navigation/category behavior.
- Project, company, social, brochure, and mail/tel links must preserve their present destinations and security attributes.
- Counters animate only when their observed element enters view (unless reduced motion/fallback behavior applies).
- Video must remain playable/muted by default with an accessible sound toggle.

### Non-functional

- Preserve local assets and lazy-loading/async-decoding choices.
- Support desktop, tablet, and mobile layouts defined by local CSS and Tailwind utilities.
- Retain semantic headings, alt text currently supplied, labelled buttons, keyboard-accessible controls, and `prefers-reduced-motion` handling in reveal/counter UI.
- Keep production builds clean with `npm.cmd run build` on this Windows workspace (PowerShell policy may block `npm` directly).

## Known limitations / to verify

- No automated test suite is configured; ESLint and production build are the available validations.
- There is no local Git history, so earlier implementation chronology is not independently verifiable.
- The site is a client-rendered single page; it has no local API, CMS, form submission, router, or deployment configuration.
- Several external links use the live reference domain. Their availability and destinations are external dependencies.
- Visual parity is approved-design dependent and requires screenshot/browser comparison; do not claim pixel perfection without it.

## Development history supported by evidence

- The project currently uses React, Vite, Tailwind v4, custom CSS, local reference media, Swiper, and manually authored sections.
- `src_backup/` and `ref folder/` exist. The latter contains two WebM captures and a PDF reference; treat them as reference material, not runtime dependencies.
- Current-session work restored scoped services styling and subsequently corrected the impact and awards sections after unlayered CSS overrode Tailwind spacing/color utilities. This is recorded in [memory.md](./memory.md).
