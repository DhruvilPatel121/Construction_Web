<<<<<<< HEAD
# Siddhi Constructions

Desktop-first React website for Siddhi Constructions, built with Vite. The page follows the supplied reference layout and uses locally stored project, leadership, award, and client images.

## Development

```sh
=======
<div align="center">

  <img src="https://readme-typing-svg.demolab.com?font=Red+Hat+Display&weight=700&size=26&duration=2600&pause=900&color=D4312A&center=true&vCenter=true&width=760&lines=Engineering+spaces+that+endure.;Building+vision+into+every+foundation.;Shaping+tomorrow%2C+one+structure+at+a+time." alt="Siddhi Constructions brand statement" />

  # Siddhi Constructions

  ### Built on experience. Designed for what’s next.

  A polished digital home for a Surat civil contractor established in **1986**—bringing its people, capabilities, projects, and legacy into one considered experience.

  <a href="#bring-the-project-to-life">Get started</a> · <a href="#explore-the-website">Explore the experience</a> · <a href="#project-documentation">Read the blueprint</a>

</div>

<br />

> **A digital foundation for a construction brand with momentum.** The site combines a confident, media-led visual language with clear paths into Siddhi Constructions’ work, people, credentials, and contact journey.

<div align="center">

`React 19` &nbsp; `Vite 8` &nbsp; `Tailwind CSS v4` &nbsp; `Swiper 14`

</div>

---

## 🏗️ Building Beyond Expectations

This repository contains the client-rendered Siddhi Constructions marketing website. It presents a construction practice through an editorial, responsive interface: a strong brand opening, company story, services, selected work, leadership, impact figures, recognitions, client connections, and clear contact calls to action.

The project currently includes a focused Home experience and a dedicated About Us page. It is intentionally a frontend experience—there is no local API, CMS, form-submission service, deployment configuration, or backend in this repository.

## ✨ The Digital Experience

| Experience | What it delivers |
| :-- | :-- |
| **A memorable arrival** | Autoplaying muted hero video with poster fallback and an accessible sound control. |
| **Stories in motion** | Swiper-driven carousels for company imagery, projects, awards, and the About Us gallery. |
| **A guided project view** | Project-category selection paired with external project destinations. |
| **Meaningful interaction** | Sticky navigation, project/media menus, mobile drawer submenus, scroll progress, and a back-to-top control. |
| **Impact that feels tangible** | Reveal transitions and in-view statistics, including the approved rolling **40+ years of experience** counter. |
| **A considered About journey** | Keyboard-accessible Mission/Vision tabs, core-feature cards, and a user-triggered video dialog. |

## ⚙️ Technology Behind the Build

| Layer | Verified choice | Role in the build |
| :-- | :-- | :-- |
| UI | React `19.3.1` + React DOM | Component-based interface rendering. |
| Tooling | Vite `8.3.6` + React plugin | Fast local development and production bundling. |
| Styling | Tailwind CSS `4.3.5` + custom CSS | Utilities alongside precision layout, responsive, and interaction rules. |
| Motion & slides | Swiper `14.4.0` | Carousels across key content moments. |
| Quality | ESLint `10.14.0` | Linting with React hooks and refresh support. |

> **Design palette:** Siddhi red `#D4312A` · deep charcoal `#1E1E20` · paper `#EFECE7` · ink `#131313`

## 🧭 Explore the Website

| Route | Implemented areas |
| :-- | :-- |
| `/` | Hero, company overview, services, project carousel, leadership, impact metrics, awards, clients, contact CTA, footer, and scroll-progress control. |
| `/about-us` | Introduction, image gallery, Mission/Vision tabs, core-feature area, video dialog, CTA, and shared site chrome. |

## 📐 Inside the Blueprint

```text
src/
├── assets/
│   ├── images/              # Bundled visual media
│   └── videos/              # Hero video media
├── components/
│   ├── animations/          # CountUp digit-reel component
│   ├── common/              # Shared controls and section UI
│   ├── layout/              # Header and Footer
│   └── sections/            # Home-page feature sections
├── data/                    # Shared site content
├── hooks/                   # Reveal and count-up behavior
├── pages/                   # HomePage and AboutUsPage
├── styles/site.css          # Tokens, layouts, components, breakpoints
├── App.jsx                  # Lightweight pathname-based entry
├── index.css                # Tailwind entry and shared keyframes
└── main.jsx                 # React bootstrap

public/                      # Static favicon and icons
docs/                        # Product, design, architecture, and project records
```

## 🚧 Bring the Project to Life

**Prerequisite:** a current Node.js installation with npm.

```bash
# Clone the repository, then enter its directory
>>>>>>> 8fa6e0c6936f0fe5c5ff52c78d86ef6782161b00
npm install
npm run dev
```

<<<<<<< HEAD
## Validation

```sh
npm run lint
=======
Vite will print the local development URL. In this Windows PowerShell workspace, use `npm.cmd run <script>` if execution policy prevents direct `npm` invocation.

To create and preview an optimized bundle:

```bash
>>>>>>> 8fa6e0c6936f0fe5c5ff52c78d86ef6782161b00
npm run build
npm run preview
```

<<<<<<< HEAD
## Structure

- `src/components/layout` — site header and footer
- `src/components/sections` — homepage sections
- `src/components/common` and `src/components/animations` — reusable UI and motion
- `src/data` — project, service, award, and client content
- `src/assets/images` and `src/assets/videos` — media assets
- `src/hooks`, `src/utils`, and `src/styles` — shared behavior and styling
=======
> `vite build` writes the production output to `dist/`.

## 🧰 Developer Toolkit

| Command | Purpose |
| :-- | :-- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Generate the production bundle in `dist/`. |
| `npm run lint` | Run ESLint across the project. |
| `npm run preview` | Serve the production build locally. |

## 🎨 Design Philosophy

The interface is built to feel as deliberate as the brand it represents: warm paper surfaces, high-contrast charcoal foundations, and Siddhi red used as a decisive accent rather than decoration. Inter supports clear everyday reading; Red Hat Display and Gantari give key headings their structural presence.

- **Responsive by design:** desktop, tablet, and mobile rules adapt layouts across the site’s defined breakpoints.
- **Motion with purpose:** reveals, sliders, counters, and progress feedback create rhythm; the existing UI honours reduced-motion preferences.
- **Precision where it matters:** Tailwind supports local utilities while scoped CSS governs design tokens, Swiper presentation, complex interactions, and exact responsive behavior.
- **Accessible foundations:** semantic headings, alt text, labelled controls, keyboard-friendly tabs, and sensible media fallbacks are part of the implementation.

## 📚 Project Documentation

The six documents in [`docs/`](./docs/) preserve the decisions behind the experience and provide a practical handoff point for future work.

| Document | Use it for |
| :-- | :-- |
| [`prd.md`](./docs/prd.md) | Product purpose, audiences, requirements, implemented experience, and known limitations. |
| [`architecture.md`](./docs/architecture.md) | Stack, application composition, data and behavior flow, media strategy, and build notes. |
| [`rules.md`](./docs/rules.md) | Scope safeguards, engineering conventions, accessibility expectations, and verification practices. |
| [`design.md`](./docs/design.md) | Verified visual tokens, typography, layouts, responsive rules, and interaction details. |
| [`task.md`](./docs/task.md) | Completed work, pending QA, and a reusable task-tracking format. |
| [`memory.md`](./docs/memory.md) | Evidence-based implementation history, lessons, and safeguards for future changes. |

## 🏁 Built for What’s Next

The core brand experience is in place: Home and About Us are implemented, the site is responsive, and the main navigation, media, carousels, metric animation, and contact pathways are present.

The next careful steps are already clear: full visual-regression comparison, an accessibility audit, a content-encoding review, and dedicated About-page reference comparison. No automated test suite is configured today; ESLint and the production build are the current validation path.

---

<div align="center">

### Siddhi Constructions

**Solid foundations. Clear vision. Lasting impact.**

<sub>Crafted as a digital expression of the Siddhi Constructions brand.</sub>

</div>
>>>>>>> 8fa6e0c6936f0fe5c5ff52c78d86ef6782161b00
