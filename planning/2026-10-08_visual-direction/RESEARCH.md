# Visual research and component decisions

Checked 2026-10-08. This is a selection for this portfolio, not a ranking of the most popular trends. Public galleries support discovery; maintainer code and licenses support adoption decisions. Browser observations and source inspection are distinguished below.

## What the current page needs

The actual application capture shows a strong personal portrait but predominantly text-only services, uniform neutral regions and a long planner beside an empty column. At the inspected medium width, the third service card occupies a new row alone. These are observed composition issues at that width, not proof of a defect at every breakpoint. The next pass should introduce substantial explanatory imagery and deliberate contrasts while retaining readable information and contact paths.

## Live references

| Reference | Evidence inspected | Useful design principle | Translation for this site |
| --- | --- | --- | --- |
| [Linear](https://linear.app/) | Live hero and illustrated feature region in a temporary browser tab; official homepage content | Large explanatory visual regions and a consistent illustration language | Use authored scenes for websites, automation and reporting. Preserve Razim's personal identity rather than copying a software company homepage. |
| [Resend](https://resend.com/) | Live first viewport and official homepage content | Confident type scale, material contrast and a deliberately composed first screen | Give the portrait and work illustrations a stronger frame. The browser capture did not establish that its hero media had fully rendered; do not use that capture as animation evidence. |
| [Rauno Freiberg](https://rauno.me/) | Live first viewport and official personal site | A recognisable personal graphic gesture rather than interchangeable decoration | Develop a consistent green frame and illustration style. Its artful interaction is inspiration; do not reproduce text masking or obstruct the commercial journey. |
| [Emil: Train Your Judgement](https://emilkowal.ski/ui/train-your-judgement) | Official interactive examples described on the page | Timing, grouping and layered motion change how an interface feels | Give the planned visual preview explicit timings and interruption behavior; evaluate the result rather than assuming a preset produces quality. |

These websites are visual references only. Their images, branding and implementation are not licensed for reuse by this research. No remote media was downloaded. Temporary browser research tab closed; the user's local page and selections were preserved.

## Discovery resources

The [shadcn registry directory](https://ui.shadcn.com/docs/directory), [21st community catalog](https://21st.dev/community/components), [Curated](https://curated.design/) and [Tailark](https://tailark.com/) were checked for component or composition discovery. Use the first two to find exact implementations and the latter two to compare page rhythm. A catalog update or search crawl does not establish that a component was updated, maintained or tested with this project.

[Motion UI](https://motion.dev/ui) offers themed sections and components within Motion+. It is an optional paid reference; none was purchased or adopted. Its performance descriptions are vendor claims, not measurements of this application. An additional MCP or premium package is not required for the proposed direction.

## Freshness: official GitHub snapshots

Default branch and latest commit metadata were fetched from GitHub's official API during this task. Dates below are UTC commit dates, not claims that every component changed on that date.

| Repository | Snapshot | Latest commit date and subject | License inspected |
| --- | --- | --- | --- |
| [Motion Primitives](https://github.com/ibelick/motion-primitives/tree/120f64f6ca60348e251f929e9c81f11ccbe45eda) | `120f64f6ca60348e251f929e9c81f11ccbe45eda` | 2026-09-28, remove .vercelignore | [MIT](https://github.com/ibelick/motion-primitives/blob/120f64f6ca60348e251f929e9c81f11ccbe45eda/LICENCE.md) |
| [Magic UI](https://github.com/magicuidesign/magicui/tree/cdb348cb4c72a9b54b554d8617801e479fbc8714) | `cdb348cb4c72a9b54b554d8617801e479fbc8714` | 2026-10-05, sitemap/static-generation fix | [MIT for the free repository](https://github.com/magicuidesign/magicui/blob/cdb348cb4c72a9b54b554d8617801e479fbc8714/LICENSE.md) |
| [React Bits](https://github.com/DavidHDev/react-bits/tree/3329f3bde763a37a2a89b24598e9f50fa0d4de3d) | `3329f3bde763a37a2a89b24598e9f50fa0d4de3d` | 2026-10-08, rebuild lanyard | [MIT plus Commons Clause conditions](https://github.com/DavidHDev/react-bits/blob/3329f3bde763a37a2a89b24598e9f50fa0d4de3d/LICENSE.md) |
| [SmoothUI](https://github.com/educlopez/smoothui/tree/b6312bce2b6f2ed95d8a6e98a592857884f5ea9e) | `b6312bce2b6f2ed95d8a6e98a592857884f5ea9e` | 2026-09-24, merge develop | [MIT](https://github.com/educlopez/smoothui/blob/b6312bce2b6f2ed95d8a6e98a592857884f5ea9e/LICENSE) |

React Bits advanced since the 7 October research. The checked license allows use within applications/websites/products subject to its conditions and restricts selling, sublicensing or redistributing the components themselves. It is not plain MIT; this research does not treat the repository's catalog as a blanket unrestricted code source. Preserve applicable notices if any exact source is eventually adopted.

## Exact component shortlist

| Candidate | Source findings | Proposed use and decision |
| --- | --- | --- |
| [Magic UI Animated Beam](https://github.com/magicuidesign/magicui/blob/cdb348cb4c72a9b54b554d8617801e479fbc8714/apps/www/registry/magicui/animated-beam.tsx) | React refs/ResizeObserver calculate SVG paths; Motion drives the gradient. Default repeat is infinite; no reduced-motion check is in this file. | An animated inquiry → routing → handover diagram. Prefer the existing local component, which already includes reduced motion, but add finite playback/offscreen control and theme mapping before using it. Exact local provenance is not established merely by the folder name. |
| [Motion Primitives TransitionPanel](https://github.com/ibelick/motion-primitives/blob/120f64f6ca60348e251f929e9c81f11ccbe45eda/components/core/transition-panel.tsx) | Uses motion/react and keyed children under AnimatePresence with popLayout. No reduced-motion rule in this source. The selected child is replaced. | Adapt the transition mechanics only for the illustrated service scene. Never wrap the audience/planner tree: replacing keyed children would conflict with the site's mounted-state requirement. Add reduced-motion and keyboard handling. |
| [Motion Primitives AnimatedBackground](https://github.com/ibelick/motion-primitives/blob/120f64f6ca60348e251f929e9c81f11ccbe45eda/components/core/animated-background.tsx) | Clones child elements, owns selection internally and injects click/hover handlers; shared layout marker. | Pattern reference for the existing audience/need selector. Retain the application's controlled URL-backed buttons and handlers rather than installing this state model. Existing audience marker already covers much of this need. |
| [SmoothUI ButtonCopy](https://github.com/educlopez/smoothui/blob/b6312bce2b6f2ed95d8a6e98a592857884f5ea9e/packages/smoothui/components/button-copy/index.tsx) | Motion/Lucide, reduced-motion handling and request/timer cleanup. Default success waits an extra second; transitions include blur. | Reference for copy/check icon feedback after the real clipboard result. Preserve immediate success, readable status and failure/manual-copy recovery. No artificial delay or blur required. |
| [React Bits SpotlightCard](https://github.com/DavidHDev/react-bits/blob/3329f3bde763a37a2a89b24598e9f50fa0d4de3d/src/ts-tailwind/Components/SpotlightCard/SpotlightCard.tsx) | Tracks pointer position with React state, draws a radial gradient and provides focus handlers. No reduced-motion handling in this file; dark colors are embedded. | Secondary comparison only. The project already has a local spotlight component; a moving glow would contribute little to the missing visual content. Do not copy this component for the proposed main pass. |

Full bodies of these source files were read, not just previews. No integration test was run on them and no compatibility certification is implied. The Motion Primitives docs returned 403 through web fetching, so the pinned GitHub source was used. Several JS-heavy galleries exposed limited text; those entries support discovery only.

## Existing capability and tooling

Installed packages rechecked locally: Next 16.3.8, React/React DOM 19.2.3, Tailwind 4.1.18, Motion 13.4.4, Lucide 0.563.0, next-themes 0.4.6 and Radix dialog/tabs/tooltip 1.1.23/1.1.21/1.2.16. The inventory also reported existing extraneous platform/wasm packages; no dependency cleanup was performed.

Existing local AnimatedBeam and SpotlightCard source was inspected. For this scope the stack can support SVG scenes, finite motion, responsive composition and polished controls. No new animation engine, 3D runtime or registry setup is selected. Recheck exact APIs and all adopted dependency paths during implementation.

Impeccable and Emil guidance were read for this planning task. Primary browser and web research tools worked. No Figma/Vercel account dependency, new skill installation, MCP configuration or architecture change is needed. Earlier connector-health results remain dated evidence rather than newly verified access.
