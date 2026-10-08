# Verification and release plan

Date: 2026-10-07
Status: Release checklist. Application integration and automated checks were completed on 2026-10-08; current browser verification remains blocked. See [IMPLEMENTATION](IMPLEMENTATION.md) for results and limits. The initial planning pass did not run application tests.

## Before editing

Record fresh Git status/diff and preserve the existing sticky-bar changes. Establish a reachable local production preview with a recorded stop method. Capture comparable desktop/mobile and light/dark baselines. Record route output, console state, transfer sizes and a repeatable performance run. Older state notes are not substitutes.

## Automated checks after implementation

Run the repository commands from README: npm run lint; npx tsc --noEmit; npm test; npm run build; git diff --check. Run the Impeccable mechanical detector once on changed UI targets after the design is built. Run a production dependency audit if dependencies change or release readiness requires fresh evidence. Resolve existing installation drift only if it interferes, and record it separately.

The existing test suite exercises the estimator. Passing it does not validate navigation, accessibility or planner interactions. Add tests only for meaningful changed behavior; a purely presentational pass does not need tests mirroring CSS.

## Acceptance matrix

| Product IDs | Check | Pass evidence |
| --- | --- | --- |
| P01, P08 | Personal visual direction | Accepted opening and section screenshots; portrait/type carry the identity |
| P02, P03 | Client service/planner | Add twice without duplicates; combine/remove; optional choices fold; notes survive |
| P03 | Draft completeness | Preview/copy/WhatsApp/email contain identical context and encoding; no message sent |
| P02, P04 | Recruiter path | Hiring link/deep URL reveals background; résumé resolves; junior-friendly content retained |
| P02, P03 | Audience/history | All three modes; back/forward; direct sections; mounted state retained |
| P05 | Responsive composition | 320, 390, 768, 1024 and 1440 px; no horizontal overflow or obscured content |
| P05 | Themes | Light/dark/system; controls, portrait frame and separators readable |
| P06 | Keyboard/accessibility | Tab order, focus, labels, pressed states, disclosures, menu Escape/return focus, anchor offset |
| P06, P09 | Reduced motion | No reveal/scroll movement; information and state feedback still present |
| P07 | Evidence/export | Showcase remains hidden; no invented claims or private assets in delivery |
| P10 | Production behavior | Build/static route output, existing security headers, metadata and assets retained |
| P10 | Performance | Same production test setup before/after; stable image layout; explain meaningful regressions |
| P11 | Later case studies | Asset register complete; real screenshot/contribution/results approved |

Clipboard denial, external-app absence, 200% zoom, long existing content and a screen-reader spot check belong in the browser round. State clearly if browser capabilities cannot emulate a preference or if a physical device/full screen-reader review remains untested.

## Bounded visual review

Batch desktop/mobile and both themes into one initial inspection. Fix the material findings together, then confirm once. Do not repeatedly tune unrelated details. Where the selected Impeccable build workflow calls for an independent finish reviewer/documenter, use its shipped agents and scoped evidence; retain the user-approved composition as the comparison target.

Evidence record: tested revision; viewport/theme/preference; screenshot paths; command results; passed flows; performance setup/results; limitations. Screenshots should show settled, loaded content and the correct section, not half-completed animation.

## Publication and rollback

Only publish after the visual result and final diff are reviewed and publication is authorized. Match the repository, hosting project and domain before deployment; current Vercel connector association is unresolved. Verify the hosted page, résumé and metadata after deployment rather than treating a push as successful delivery.

Use a dedicated codex/ branch for implementation when appropriate. Separate the pre-existing sticky changes explicitly; do not reset them. Record an accepted baseline commit, snapshot any required uncommitted work, and keep the refresh commit bounded. Rollback should revert only the new refresh change on the publication branch; avoid destructive resets of unrelated work.

## Planning-pass checks

The planning packet itself needs local link checks, source/path consistency, balanced Mermaid/code fences, token-value/contrast verification, whitespace review and a delivery-content scan. Application checks are deferred because no application source was changed by this pass. Completion of these documentation checks must be recorded in the project state.
