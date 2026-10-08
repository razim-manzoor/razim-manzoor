# Website design and implementation workflow

This is the working skill map for this portfolio. Load the skills needed for the current task; avoid combining complete design workflows. Skills guide decisions, reusable components supply code, and MCPs connect tools or accounts. Installing one does not install the others.

## Working set

| Task | Skill | Responsibility |
| --- | --- | --- |
| Overall interface design | `impeccable` | Composition, typography, color, responsive layout, clear content and visual coherence. Primary design workflow. |
| Component and interaction craft | `emil-design-eng` | Purposeful feedback, timing, easing, interruption, touch behavior and motion that fits the design. Complement to Impeccable. |
| React/Next implementation review | `vercel-react-best-practices` | Rendering, loading, bundle cost and data-flow performance. Apply relevant guidance to the installed framework version. |
| Interface review | `web-design-guidelines` | Keyboard use, focus, labels, contrast, responsive behavior and other interface checks. Follow its current-guideline retrieval procedure. |

Use Impeccable to establish a specific desktop/mobile composition and both themes before implementing the proposed refresh. Use Emil's guidance for the hero, navigation, audience selector, service disclosures, planner feedback and contact controls when their behavior needs refinement. Then verify the changed journeys and run the repository's applicable checks. A stronger result comes from coherent choices across these components, rather than an accumulation of effects.

## Use only when needed

| Skill or integration | Trigger and boundary |
| --- | --- |
| `review-animations` | Explicitly requested motion-code audit. Manual invocation only; review findings must cite code and distinguish observed problems from unverified heuristics. |
| `pick-ui-library` | Explicitly requested library selection for a concrete component task. Manual invocation only; inspect existing dependencies first. Its Base UI preference does not authorize replacing this site's Radix primitives. |
| `shadcn` | Work on an existing compatible primitive or a deliberately selected registry component. Inspect actual APIs and project context first; this project currently has no `components.json`. |
| `vercel-composition-patterns` | A real component-composition problem during implementation; avoid adding abstractions for a small styling edit. |
| Figma skills and connector | An editable mockup or design file is requested. Use the exact native Figma workflow and verify access to the target file. |
| Native browser tools | Inspect layouts, both themes, reduced motion, keyboard behavior, audience URLs and retained drafts after implementation. |
| Vercel skills and connector | Deployment inspection or authorized publication. Confirm the associated project before relying on connector results. |
| `find-skills` + `workstation-skills` | Discover or maintain shared skills. Review a pinned revision in staging, preserve existing packages and record provenance before promotion. |

## Design and technical boundaries

User instructions and project constraints take precedence over skill defaults. Keep the green identity, actual portrait, clear client/recruiter paths and truthful work evidence. Preserve draft retention, deep links, contact behavior and the hidden project showcase until replacement work is ready. Architectural changes still require explicit user consent under AGENTS.md.

Keep the existing CSS, Motion, Tailwind and Radix foundations unless a concrete requirement warrants a dependency. Verify sample APIs against the installed version. Emil's packages include older `framer-motion` imports and categorical performance claims; treat these as guidance to investigate, rather than proof that a particular animation is slow. Measure relevant behavior before recommending a rewrite.

Preserve immediate keyboard feedback, visible focus and accessible state changes. Reduce or remove movement according to the visitor's motion preference; an opacity transition is optional. Do not force transforms, blur, stagger or custom easing merely to satisfy a stylistic checklist. Motion-review verdicts are code-review judgments, not deployment permission or a new approval workflow.

## Optional aesthetic alternative

`design-taste-frontend` from [Taste Skill](https://github.com/Leonxlnx/taste-skill) remains an uninstalled alternative for a specifically requested expressive composition exploration. It overlaps Impeccable, so it is not part of the default working set. The current task does not need an additional full design pack or the missing legacy `ui-craft-motion` route.

## Reusable component sources

Current stack recommendation (2026-10-07): retain Next.js/React, Tailwind, Motion, the existing Radix/local primitives, Lucide and next-themes. Installed versions were checked directly. These cover the proposed portfolio UI; choose individual reusable components for a concrete improvement before considering another runtime dependency. The planned visual work still includes composition, typography, portrait treatment and coordinated interactions across the page.

Start discovery with the official [shadcn registry directory](https://ui.shadcn.com/docs/directory) and [21st.dev](https://21st.dev/), then verify candidates in their maintainer repository. For restrained transitions, compare [Motion Primitives](https://github.com/ibelick/motion-primitives) and [SmoothUI](https://smoothui.dev/); [Motion UI](https://motion.dev/ui) is an additional paid option from Motion's maintainers, announced July 2026. For section composition, inspect [Tailark](https://tailark.com/). [Kokonut UI](https://kokonutui.com/) offers further candidates. These are sources to evaluate, not default dependencies.

The broader freshness check on 2026-10-07 found late-2025 default-branch activity for [Animate UI](https://github.com/imskyleen/animate-ui), despite a newer catalog timestamp. Keep it as a secondary reference pending inspection of the exact item; its pinned repository license includes Commons Clause conditions. Repository commits, catalog updates and component changes are separate evidence. Use developer discussions for discovery and reports of problems, then verify technical claims against source. See the [dated freshness comparison](../planning/2026-10-07_visual-refresh/RESEARCH.md#broader-freshness-check-2026-10-07).

Before copying an exact component, record its purpose, source revision, license/notice, dependencies, token mapping, keyboard behavior, reduced-motion behavior and bundle impact. Adapt it to the accepted design. Use the [asset/provenance register](../planning/2026-10-07_visual-refresh/ASSETS_AND_PROVENANCE.md) for adopted material. No third-party UI component or new runtime library was adopted during skill organization.

## Verified setup

Checked 2026-10-07. The existing shared working-set entrypoints are present. Three additional upstream skills were installed from [Emil Kowalski's official repository](https://github.com/emilkowalski/skills/tree/e8a175de22ae1e49370fc144c1f3bb9aeedf988d):

- `emil-design-eng`
- `review-animations`, including its `STANDARDS.md` reference
- `pick-ui-library`

Reviewed commit: `e8a175de22ae1e49370fc144c1f3bb9aeedf988d`. The four Markdown files match the pinned upstream Git blobs and installed SHA-256 fingerprints. Upstream folders remain unchanged; the [MIT notice](https://github.com/emilkowalski/skills/blob/e8a175de22ae1e49370fc144c1f3bb9aeedf988d/LICENSE) is retained with the shared installation. The shared lock was backed up, existing entries preserved, and provenance recorded. Antigravity compatibility links point to the canonical shared copies. The new skills become discoverable on the next turn; no MCP server or account access was added.

The [dated research](../planning/2026-10-07_visual-refresh/RESEARCH.md) contains resource comparisons and connector limitations. The [visual refresh packet](../planning/2026-10-07_visual-refresh/README.md) remains a proposal; this workflow does not claim its interface changes have shipped.
