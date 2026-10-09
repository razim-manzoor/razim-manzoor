# Editorial portrait preview

Local proposal, 2026-10-09. Baseline: `ac7fe05`. This is step 1 of [the accepted motion plan](../PLAN.md), separate from the production application.

## Review locally

From the repository root, using the already installed dependencies:

```powershell
node node_modules/next/dist/bin/next dev planning/2026-10-09_motion-direction/preview --webpack -p 3114 --hostname 127.0.0.1
```

Open [the preview](http://127.0.0.1:3114/). Use the theme button, all five service categories, scope disclosures, Add/Remove controls and the project note. The review controls at the bottom replay the opening or reduce motion. Enquiry links prepare external drafts; they do not send a message. Background links lead to the existing public recruiter page. Nothing in this preview changes that page.

The current reviewed server uses the production build. To reproduce it after stopping any server on that port:

```powershell
node node_modules/next/dist/bin/next build planning/2026-10-09_motion-direction/preview --webpack
node node_modules/next/dist/bin/next start planning/2026-10-09_motion-direction/preview -p 3114 --hostname 127.0.0.1
```

Development output is `.next-dev`; production output is `.next-build`. Both stay inside this preview and are ignored. No installation is necessary.

Selections and the note are retained across category and theme changes in this preview session. Reloading starts a fresh preview. The production audience switch, estimator, career timeline and delivery section remain integration work; this isolated preview does not certify those journeys.

## Direction contract

- **THESIS:** A personal studio that connects business understanding to working systems. The portrait and name introduce the person; compact offers let visitors scan and act.
- **OWN-WORLD:** Existing Geist, green, truthful professional content and authentic photograph. Editorial scale, open space and ruled rows replace miniature interface illustrations.
- **STORY:** Meet Razim → identify a useful scope → assemble a brief → start a conversation. Real work examples remain deferred.
- **FIRST VIEWPORT:** Name, actual portrait, business/developer positioning and a services action are readily visible on desktop. Phones put the role and action before the full portrait; no loader delays them.
- **FORM:** Native scrolling, asymmetric opening, compact category index, restrained scope disclosures and a large green contact close. One finite portrait-frame reveal; local category and selection feedback. Both themes and reduced motion.

Code-led extension of the incumbent identity; no approved image comp and no replacement of the canonical design system. Quality reference: [the eight-site research](../RESEARCH.md), interpreted through the existing site's actual audience and content.

## Material and runtime provenance

- `app/EditorialPreview.jsx` imports the current `lib/services.ts` and `lib/data.ts`. All five categories and fourteen service scopes come from those sources; their illustrative historical metrics are not rendered.
- The portrait is imported directly from `public/profilepic.jpeg`; no modification or derivative asset.
- The self-hosted Geist font reuses the prior verified copy in `planning/2026-10-08_visual-direction/mockups/assets/geist-latin.woff2`, alongside its existing `OFL-Geist.txt` notice.
- Existing Next, React, Motion and Lucide packages are resolved from root `node_modules`. No dependency install, external registry component or upstream site code was adopted. CSS composition is original; Tailwind remains part of the production stack but this isolated study uses scoped CSS.
- Finite 750 ms portrait crop/rule reveal, 200 ms shared active-category rule, brief-list layout continuity and short local link feedback. Essential content starts visible. Reduced motion disables those movements; native disclosures remain usable.

## Verification and documentation

Final preview build and HTTP check passed. All fourteen disclosures, combined selections/notes, category/theme retention, draft copying and keyboard controls were checked. The normal desktop and phone viewports have no horizontal overflow. Source color calculations meet the body-text contrast target. The existing five calculation tests pass; lint completed without errors and its sole config warning was cleared by a scoped rerun.

The fresh reviewer scored both material corrections resolved: reduced motion now controls the HTML viewport's scrolling, and phone textareas use 16 px text. Its final disposition is **ship for those two scored fixes**. The [finishing record](FINISH_REVIEW.md) owns evidence and limits. Desktop/phone light and dark captures are in [screenshots](screenshots/); full documents use tall browser viewports, not physical-device captures.

The fresh documenter compared the built source against `PRODUCT.md`, `DESIGN.md` and `.impeccable/design.json` and left those canonical files unchanged. This is a proposal within the incumbent identity. A provisional vocabulary extracted from the actual preview is:

| Role | Preview treatment |
| --- | --- |
| Palette | Existing green `#047857`, mint dark accent `#6ee7b7`, neutral light/dark backgrounds and deep-green feature ground. Local muted/divider values remain provisional. |
| Type | Geist; desktop name up to 96 px/550, section headings 36–58 px/500, service titles 21 px/550; phone field text 16 px. |
| Composition | 1200 px maximum container, asymmetric opening, open ruled catalogue and brief, large green contact close; actions precede the full phone portrait. |
| Controls | Compact 4 px controls, labelled icon actions, native disclosures and visible focus. Selection/note state stays mounted across category and theme changes. |
| Motion | One finite 750 ms portrait-frame/crop reveal, shared active-category rule and local brief feedback; no decorative loop. Reduced motion has a finished static state. |

These values are not new canonical design-system rules. The full application build, audience/estimator regression matrix, canonical documentation update and publishing belong to the later integration step. Physical-phone, screen-reader, forced clipboard-failure/OS preference, 200% zoom and field-performance checks remain unperformed.
