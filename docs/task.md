# Task Management

**Last updated:** 2026-11-18

## Completed (supported by current code/session record)

| ID | Task | Priority | Status | Files | Acceptance / verification |
| --- | --- | --- | --- | --- | --- |
| DOC-001 | Create AI project documentation | High | Completed | `docs/*.md` | Six requested Markdown files created; existence to be verified after write |
| UI-001 | Restore services section typography/card decoration/hover | High | Completed | `ServicesSection.jsx`, `SectionLabel.jsx`, `site.css`, `index.html` | Scoped Gantari/type/colors and red glow/icon hover; `npm.cmd run build` passed in current session |
| UI-002 | Restore impact and awards screenshot sections | High | Completed | `ImpactSection.jsx`, `AwardsSection.jsx`, `site.css` | Scoped CSS prevents Tailwind-layer/reset conflict; build passed in current session |

## Pending / to verify

| ID | Task | Priority | Status | Files | Acceptance criteria | Verification |
| --- | --- | --- | --- | --- | --- | --- |
| QA-001 | Full visual regression at approved viewport captures | High | Pending | affected sections/styles | Compare all sections/states to approved screenshots/reference | Not performed as a full-suite validation |
| QA-002 | Accessibility audit | Medium | Pending | whole app | Keyboard, focus, contrast, drawer inert/focus behavior, video control | No automated audit configured |
| QA-003 | Content encoding review | Medium | Pending | JSX text | Replace visibly malformed mojibake only with approved source content | Some source output displays malformed smart punctuation; status unverified in browser |

## Reusable future-task template

| ID | Task description | Priority | Status | Related files/components | Acceptance criteria | Verification results | Last updated |
| --- | --- | --- | --- | --- | --- | --- |
| FUT-### |  | High / Medium / Low | Pending / In Progress / Blocked / Completed |  |  |  | YYYY-MM-DD |

Only move a task to **Completed** when current code plus an appropriate build/test/visual check supports it. Record blockers rather than inferring completion.
