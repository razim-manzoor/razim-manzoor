# Complete editorial website preview

Local review version, 2026-10-09, based on main `ac7fe05`. Open http://127.0.0.1:3114/. This extends the selected portrait direction across Client, Hiring teams and Everything. The main application and live website are unchanged.

## What is included

- Authentic vertical portrait with a slim green frame, complete hairline/shoulders and caption outside the image. Frame/caption center within the content area on phones; the opening location appears only beside the name.
- Coordinated finite name/portrait/rule entrance, audience and category feedback, and a bounded delivery sequence. No decorative loops. Replay and Reduce motion are local review controls.
- Five categories and fourteen real scopes, native deliverable disclosures, Add/Remove feedback, shared selections and an optional complete project planner.
- Local hiring summary, three experience entries with optional responsibilities, two education entries, certificates, résumé and public contact destinations.
- Existing planner goals, starting point, name/contact, notes, current tools, timing, message preview, copying/fallback and time-value estimate. Audience/tool/theme changes retain these values within this page session. Refresh starts a fresh session.
- Both themes, responsive navigation and shared toolkit/contact. Everything renders both audience bodies once. Direct audience URLs, anchors and browser history use the existing audience rules.

## Direction contract

**THESIS:** A personal editorial studio connecting business understanding to working systems. **OWN-WORLD:** Existing Geist, green identity, authentic photograph and supplied professional history; open ruled layouts rather than large miniature interfaces. **STORY:** Meet Razim, choose project or hiring information, explore the relevant details, start a conversation. **FIRST VIEWPORT:** Large name, readable positioning/action and a balanced vertical portrait; phone actions precede the photograph. **FORM:** Compact service index, career timeline, complete optional tools, deep-green delivery/contact and native scrolling. **SIGNATURE:** Finite name/frame/rule assembly, quiet continuity and immediate state feedback; reduced motion shows finished compositions. Real work examples remain deferred.

## Run locally

Use the already installed root dependencies; no installation is required. From the repository root:

```powershell
node node_modules/next/dist/bin/next build planning/2026-10-09_motion-direction/preview --webpack
node node_modules/next/dist/bin/next start planning/2026-10-09_motion-direction/preview -p 3114 --hostname 127.0.0.1
```

Stop the existing preview server before rebuilding/restarting on that port. Development uses the same project with `next dev ... --webpack -p 3114 --hostname 127.0.0.1`; `.next-dev` and `.next-build` are separate ignored outputs. Preview metadata remains noindex.

## Source and assets

`app/FullPreview.jsx` and `app/full.css` extend the prior study. They import current `lib/data.ts`, `lib/services.ts`, navigation, audience/selection helpers, theme provider and toolkit. Production globals provide the existing tokens and Tailwind foundations; scoped rules provide this composition. `PreviewStudio.tsx` is a local adaptation of the current `TurnkeyStudio.tsx`: selection is shared with the index, the static brief illustration is removed, and a local QA flag exercises copying failure. Its arithmetic still uses the existing `lib/estimate.ts`. Main source is not modified.

The photograph imports the original `public/profilepic.jpeg`; no image editing, generation or extension. The existing licensed Geist asset is self-hosted from the preceding study. The résumé is copied unchanged into preview public assets; both SHA-256 values are `DF3993B15FB8FB95587826F568C46EB163BAE21A667A99687EA29271A233BAD1`. Matching bytes confirm provenance, not career accuracy. No external UI component, upstream website asset or new dependency was adopted.

The local audience subscription mirrors existing URL precedence and receives the initial audience from server query parameters, avoiding a client-first render on direct recruiter queries. Hash-only selection still resolves in the browser. Native navigation helpers and mounted state remain the integration baseline.

## Provisional design extraction

Source comparison, 2026-10-09, after the audience-button correction. This is an ordinary local extension of the incumbent green/Geist identity. The following observations describe this preview surface; they do not replace root `DESIGN.md`, introduce global tokens, or establish production approval. Visual disposition and verification belong to `FINISH_FULL.md`.

| Vocabulary | Observed preview treatment | Relationship to the incumbent system |
| --- | --- | --- |
| Color | Existing semantic primary/accent, neutral surface/border and feature/feature-ink/feature-muted variables; rules use accent or border. | Retains both theme assignments without a new palette. |
| Typography | Geist; name `clamp(56px,7.15vw,96px)`, weight 550, line-height 1.08; section title `clamp(34px,4.2vw,56px)`, weight 500, line-height 1.06. Phone name `clamp(42px,11.8vw,74px)` and section title 36px. | Extends the existing type family with a surface-specific hierarchy; these do not supersede canonical display/headline roles. |
| Layout | Container capped at 1200px with 48px desktop gutters, 32px through 1100px and 20px through 700px; sections 88px desktop/56px phone. | Wider open reading regions and ruled rows replace this preview's illustrated service cards. Retained utility components keep their own responsive rules. |
| Portrait | Original image, centered 4:5 presentation, matte 12px desktop/10px phone, outside caption; figure cap 344px desktop/280px phone. | Preserves the identity asset while changing this surface's framing. Root 3:4 portrait/fragments describe the incumbent application. |
| Shape/depth | Flat ruled service/career regions and transparent planner shell; action/audience rounding 5px, scope action 4px. Fields retain rounded 8px treatment. | Extends the canonical quiet-surface principle. Inherited components retain their own borders and depth; these values are not a universal radius scale. |
| Motion | Existing easing `cubic-bezier(.16,1,.3,1)`; finite opening 0.72–0.78s, category marker 0.2s, audience arrival 0.22s, delivery rules 0.65s with 0.16s step delays. | Adds bounded name/frame/rule assembly and replaces the preview delivery illustration with open steps. Reduced motion presents finished compositions; keyboard-specific feedback remains immediate. |

Reusable component candidates are the ruled service row with native scope disclosure and labelled Add/Remove state, the shared brief selection list, the career date/detail row with optional responsibilities, and the numbered delivery rule/step. Audience selection reuses the existing pressed-state component with a preview-scoped 44px minimum button height. Planner fields, native goals/starting-point controls, estimate ranges/results and copy status/manual-copy fallback remain adaptations of maintained behavior. Contact uses large ruled destinations on the existing deep-green feature surface. These are extraction candidates for integration, not a second component library.

The canonical documents retain incumbent illustration/card geometry, portrait framing and delivery motion intentionally while this proposal is local. A separate preexisting documentation discrepancy remains: `PRODUCT.md` says the portrait direction is published, while the `DESIGN.md` overview still says release verification is pending. This pass does not reconcile release history or repair canonical drift.

On accepted main integration, merge the actual adopted values and components into the existing `DESIGN.md` and regenerate its extension-only design sidecar together. Keep palette/type/radius/spacing primitives in frontmatter; put adopted motion, breakpoint, depth and self-contained component specimens in the sidecar. Update `PRODUCT.md` only for changed visitor behavior and verified release status. Keep this direction contract surface-specific and retain provenance, unverified career facts and test limitations in the relevant integration record.

## Verification record

See `FINISH_FULL.md` for the completed checks, evidence and fresh review disposition. New captures belong to `screenshots/full/`; the earlier files, `PARTIAL_PREVIEW.md` and `FINISH_REVIEW.md` describe the preceding partial study and do not certify this extension.

For a deterministic local copy-failure check, visit `/?copy-check=unavailable#studio`. Copy message exercises the same error/status/manual-copy branch without changing browser permissions. This is simulated clipboard unavailability, not a forced OS-permission test. Normal copying uses the browser API.

## Integration boundary

This is a complete local proposal, not a production release. The live application, canonical PRODUCT/DESIGN/architecture documents, dependencies and hosting remain unchanged. Integration must merge the accepted treatment into maintained application components, reconcile the local planner adaptation, remove review controls/QA flags, update the existing canonical records, and verify the main application before publication.

Supplied career metrics and immediate availability remain unverified. Résumé wording needs an owner consistency check; no new professional claims were introduced. Physical-device, screen-reader, OS-forced motion/clipboard, native zoom and field-performance checks require separate evidence.
