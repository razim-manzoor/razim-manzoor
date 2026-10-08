# Portrait direction: application integration

2026-10-08. Application integration, local review, Git publication and live release verification complete. The user authorised integrating the preferred portrait composition, checking the real application and publishing it. Real project case studies are deferred.

## Direction contract

Code-led translation of the accepted portrait preview; no generated comp or new identity exercise. Audience: clients evaluating a project and hiring teams reviewing the supplied background. Keep green/Geist, authentic portrait and supplied facts. Preserve the existing catalogue, planner selections, mounted drafts, estimator, audience URLs/history, contact helpers and hidden project showcase.

First viewport: title-case name and clear service proposition beside the authentic portrait in a deep-green frame, with two geometric interface fragments. Phone: name and smaller portrait together, one fragment, proposition and actions below. The header and audience choice stay accessible and sticky.

Across the page: fourteen distinct labelled static service examples; native scope disclosures and real enquiry actions outside the examples; delivery brief/build-review/handover; rough-request-to-brief planner artwork; authentic recruiter content; deep-green contact close. Static example numbers and source material are illustrative, never presented as professional results.

Signature motion: delivery connection and handover reveal once on intersection for 1.8 seconds, from already-visible content. OS reduced-motion preference removes that movement. Existing selector feedback stays immediate for keyboard interaction. No perpetual effects or additional dependencies.

## Quality bar and verification scope

The real application must preserve its existing journeys and render the selected design clearly at 1440px, 390px, 320px, intermediate widths and the user's observed width, in light/dark themes. Inspect complete loaded captures, visible focus, wrapping, typography and image loading. Check combined/deduplicated/removed services, retained notes and estimator values, audience/history/deep links, draft encoding/copy, menu Escape/focus and finite/reduced motion. Contact tests inspect drafts without sending.

Run lint, TypeScript, five existing estimator tests, production build and whitespace checks. Browser screenshots and measurements must come from the built application, not the standalone mockup. Record detector findings and actual limitations. Independent finish review and canonical documentation reconciliation follow the final corrections. Git publication and hosted deployment identity/critical paths are separate verification steps.

## Implementation

`ServiceExample.tsx` and `HeroFragments.tsx` port the original project-authored static interfaces and SVG geometry into React. The examples share a shell and hoisted content; no HTML injection or runtime fetch is used. The fourteen short outcome lines now live in the existing catalogue. `app/illustrations.css` carries illustration-specific geometry; semantic scene/feature colours join the existing theme tokens. Existing components compose the portrait, services, delivery, planner and contact treatments.

No runtime, architecture, tracking, inquiry backend or package change. The estimator and factual hiring material remain. Public portrait bytes are reused unchanged; no new raster asset is generated or edited.

## Application checks

- Lint, TypeScript, all five existing estimator tests and whitespace checks passed. The final production build passed with `npm run build -- --webpack` after the responsive correction. The default local Turbopack build stalled and was stopped; no configuration change was made and no resolution of that stall is claimed.
- The built application rendered all fourteen example IDs across twenty category/theme/width states (1440px and 390px, both themes). No page or example overflow was measured. Evidence: `.impeccable/review/categories.json`.
- Phone interaction checks passed: combined and deduplicated services, removal from the draft, retained Unicode/multiline notes, matching WhatsApp/email encoding and clipboard content; hiring visibility and retained drafts; browser back/forward; zero-hours, negative net value and no modeled payback; retained estimate/currency; menu Escape and restored 3px keyboard focus. No warning/error logs in that test tab. Evidence: `.impeccable/review/journeys.json`.
- The first batched visual inspection found a tablet portrait-caption overlap. The medium-width fragment position now scales with width. Final loaded application captures cover 1440px/390px/320px in both themes, 768px/945px/1024px/1280px light reflow, hiring at desktop/mobile and readable service/planner crops. Measured pages and examples have no horizontal overflow. Evidence: [responsive measurements](../../.impeccable/review/responsive.json), [category coverage](../../.impeccable/review/categories.json), [journeys](../../.impeccable/review/journeys.json).
- The fresh independent [finish review](../../.impeccable/review/FINISH_REVIEW.md) returned **ship; no material fixes**. It inspected fourteen primary captures and two readable crops and sampled page/layout, hero, delivery, examples and styles. Remaining component internals were not independently re-audited; supplied journey checks were not independently rerun. Finite/reduced motion was source-reviewed, not demonstrated by static images.

Responsive evidence uses same-origin documents at the stated widths because this browser's native viewport override was ineffective. Full-page captures are checked from the document origin, with fonts and portrait loaded. The temporary local capture host was removed and its path returns 404. This is browser reflow evidence, not a physical-device or native 200% zoom audit. Reduced-motion rules are source-reviewed; forced OS-preference and clipboard-denial tests, a full screen-reader audit and field performance measurement are not claimed. No contact message was sent. Real project examples stay deferred.

## Canonical documentation reconciliation

Merged [DESIGN.md](../../DESIGN.md) and [.impeccable/design.json](../../.impeccable/design.json) against the actual source. Added the reused light/dark scene roles, invariant deep-green feature palette, static example roles and component specimens. Corrected hero fluid sizing, column/gap geometry, service spacing/body/title, restrained resting shadows and focus treatments. Removed obsolete portrait entrance and card-lift guidance; recorded the finite 1.8-second delivery movement. This is a source reconciliation, not extra scale rules invented to satisfy a detector.

The single detector run retained 60 advisory stale-system findings (36 font sizes, 18 colours, six radii), with no non-advisory findings. The detector was not rerun, so no clean rerun is claimed. [Product](../../PRODUCT.md), [architecture](../../docs/ARCHITECTURE.md), [maintenance](../../docs/MAINTENANCE.md) and the [README](../../README.md) now refer to the accepted integrated composition and its actual verification scope. Prior reports and ADR history are preserved.

Documentation validation passed: YAML/JSON parsing; documented schema fields, component/token references and canonical heading order; sidecar narrative matching; all 43 light/dark semantic source assignments, six fixed feature/delivery colours and selected geometry/type values reconciled; 45 colour entries, 26 token references, ten scoped component specimens and 31 local links checked. Whitespace checks passed. These are bounded document/source checks, not another application test or detector run.

## Release status

The Vercel project association was verified healthy: `razim-manzoor`, GitHub `main`, canonical `https://www.razim.work`. No hosting settings, packages, backend or tracking changed.

## Published application verification

Implementation commit `6be5fcf9b34cafc2f072204e586e710a31a28bcb` was pushed to `origin/main`. Vercel deployment `dpl_8jXmvXzyUs59uNPzeRred7N9M2cf` reached READY in production with that exact Git SHA and the canonical domain alias. This hosted build completed separately from the local webpack fallback.

The public site rendered the portrait, fragments and illustrative service cards with loaded fonts/image and no horizontal overflow at the observed 1280px browser width. Service-to-planner selection, matching WhatsApp/email drafts, hiring URL/visibility, planner hiding and retained project notes passed; no warning/error logs were captured in that test tab. No message was sent. [Live first-screen capture](../../.impeccable/review/live-first.png).

`/`, `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, `/Razim_Manzoor_MBA_AI_Analytics.pdf` and `/profilepic.jpeg` returned 200 with the expected content types. Responses retain SAMEORIGIN and nosniff headers. The deleted temporary capture path returns 404. Apex `https://razim.work/` redirects 308 to `https://www.razim.work/`, matching the rendered canonical URL.

The release-record follow-up changes documentation and its screenshot evidence only; application source remains the reviewed implementation. Future hosting health requires fresh verification.
