# Maintaining and publishing the portfolio

Checked against current source and package scripts on 2026-10-12. The approved complete editorial composition is implemented in main source. Browser access is restored, fresh main captures and critical journey checks are recorded, and independent finish review returned ship with no material findings; production publication and live verification are complete. The [editorial integration record](../planning/2026-10-12_editorial-integration/IMPLEMENTATION.md) owns current results and remaining limitations. The [2026-10-08 integration record](../planning/2026-10-08_visual-direction/APP_INTEGRATION.md) documents the earlier production release, not the current source's readiness.

## Develop and edit

Use Node.js 22.18 or later; the repository has been run with Node 24. Install the locked dependencies with `npm ci`, then run `npm run dev`. No service credentials are required for the current local contact-draft flow. Fonts use `next/font/google`, so a fresh build may require access to its font source.

Keep the existing Geist Sans/Mono variable classes on `html`, where Tailwind's root theme resolves them; body antialiasing remains separate. Inspect computed font-family after layout/font changes. The current main check resolves Geist after correcting the former body-only scope; documented font families and tokens are unchanged.

Edit personal facts and public contact details in `lib/data.ts`; service content in `lib/services.ts`; the shared résumé URL in `lib/contact.ts`. Keep service IDs stable when changing names so planner selection remains coherent. The toolkit groups and delivery copy are currently authored in their components. Review résumé, recruiter content and public claims together rather than changing one in isolation.

Edit the active opening, service index, career rows, delivery and contact composition in `components/composite/EditorialPortfolio.jsx`; edit its scoped geometry in `app/editorial.css`. Keep the fourteen IDs and category membership aligned with `lib/services.ts` and the shared planner selection. `TurnkeyStudio.tsx` owns fields, draft generation/copy and estimation; its parent owns selected service IDs. Earlier `ServiceExample.tsx`, `HeroFragments.tsx` and illustration styles remain retained source and are not active evidence or UI. Semantic scene/feature theme assignments remain in `app/globals.css`. Reconcile `DESIGN.md` and `.impeccable/design.json` together: frontmatter owns primitives, while the extension-only sidecar carries motion, depth, breakpoints and self-contained specimens. Preserve historical records and distinguish retained vocabulary from active treatment.

Replace the portrait or résumé in `public/` only with approved assets. The editorial portrait uses a centered 4:5 display, slim matte and outside caption; framing cannot recover source pixels. Keep the phone figure/caption centered and the opening location only beside the name. Updating the domain requires consistent changes to layout metadata, robots and sitemap; review social-image output when identity or assets change. Keep the hidden showcase hidden until real replacement work and substantiated contribution/results are ready. Supplied career facts, certificates and availability require owner validation; matching asset bytes do not authenticate them.

## Verify a change

From the repository root:

```powershell
npm run lint
npm test
npm run build
npx tsc --noEmit
git diff --check
npm start
```

Run TypeScript after route types exist; build generates them. The test script covers the five estimator cases, not the full interactive site. If generated `.next` files become corrupt, stop the associated development server and regenerate build output; do not alter application types to conceal cache errors. Any alternate build invocation and its result should be recorded explicitly.

The repository provides `npm run build:local` for the webpack build. The current editorial integration used the existing webpack path; its success does not establish that earlier local Turbopack problems are resolved. The query-derived initial audience makes `/` request-rendered. Check direct recruiter/all response content as well as client-side switches; do not assume every generated route is static.

Review the built application at its reported local address. Check desktop and mobile at 1440px, 390px and 320px, both themes, and intermediate layout changes. Capture the current implementation, not the proposal. Cover:

- Audience URLs, direct service/studio/dossier anchors, history, sticky offsets and native modified clicks.
- Category filters, native disclosures, shared Add/Remove state, brief count/status, service deduplication/removal and goal consistency.
- Notes and estimate state surviving audience/tool switches; refresh clearing the in-memory draft.
- Encoded WhatsApp/email drafts, optional field combinations and copy success/error feedback without sending a message.
- Estimate zero/negative-net scenarios, currency unit wording and return to the planner.
- Keyboard focus, skip link, mobile menu Escape/focus return and outside dismissal, reduced motion, loaded portrait/font, and console errors.
- Horizontal overflow, long scope/career content, icon-only phone Add/Remove labels, centered portrait/caption, single opening location and contact/résumé destinations.
- Finite opening/desktop delivery sequence, static phone delivery rules, immediate keyboard feedback and absence of preview-only replay/QA controls.

Use the [adopted editorial contract](../planning/2026-10-09_motion-direction/preview/README.md) and [current integration record](../planning/2026-10-12_editorial-integration/IMPLEMENTATION.md) for coverage; the earlier [QA plan](../planning/2026-10-07_visual-refresh/QA_PLAN.md) supplies supplementary journey checks. Browser access is restored. Actual main captures cover all three audiences in both themes at 1440px and 390px, with additional 700px/320px, direct hiring and focus evidence. The recorded checks cover all fourteen scope disclosures, retained selection/name/note/estimate values, copy and draft destinations, menu Escape, URL history/focus and finite opening properties; the sampled browser output showed no warnings/errors. Fresh independent finish review returned ship with no material findings, and standalone-preview screenshots or an earlier ship verdict do not certify this main build. Physical-device, forced OS reduced-motion, full screen-reader, denied-clipboard, native 200% zoom and field-performance claims require their own evidence.

The current main-cycle detector output included typography-ramp advisories and was truncated. No complete count or clean result is claimed. This document/sidecar reconciliation is source-derived and does not imply a new detector pass. Preserve older detector results with their dated integration scope.

For dependency or deployment changes, inspect the installed version, affected bundle/behavior and production dependency audit. Record unresolved findings with their actual scope rather than forcing an incompatible dependency change. Keep `package-lock.json` with approved dependency updates.

## Publish and verify

1. Complete the applicable checks and current browser review; record evidence and outstanding limitations in the implementation record.
2. Review `git status` and the exact diff. Stage only intended public files. Exclude secrets, generated `.next` output and private vault material; inspect any planning assets before including them.
3. Follow the user's authorized publication scope. Commit/push only when authorized, and inspect the actual hosting project/branch association before relying on a deployment.
4. After publication, confirm the deployed revision and responses for `/`, `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, the résumé and portrait. Verify redirects/canonical domain and configured response headers, then repeat critical public journeys on the deployed site.
5. Report commit, deployment identity, checked journeys and unresolved limits separately. A successful local build or Git push does not establish a healthy hosted deployment.

The canonical domain is `https://www.razim.work`. The Vercel project association, production revision and live paths were verified for `razim-manzoor`, GitHub `main`, and that domain on 2026-10-08; see the integration record. Architectural changes require explicit user consent under the project instructions. Preserve decision history and update the short private project state at a meaningful stopping point, without copying it into public documentation.
