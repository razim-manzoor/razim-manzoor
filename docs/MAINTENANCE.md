# Maintaining and publishing the portfolio

Checked against the current source and package scripts on 2026-10-08. The visual refresh is local and has not completed release verification. Consult the dated [implementation record](../planning/2026-10-07_visual-refresh/IMPLEMENTATION.md) for actual command results and blockers; do not infer deployment readiness from this procedure.

## Develop and edit

Use Node.js 22.18 or later; the repository has been run with Node 24. Install the locked dependencies with `npm ci`, then run `npm run dev`. No service credentials are required for the current local contact-draft flow. Fonts use `next/font/google`, so a fresh build may require access to its font source.

Edit personal facts and public contact details in `lib/data.ts`; service content in `lib/services.ts`; the shared résumé URL in `lib/contact.ts`. Keep service IDs stable when changing names so planner selection remains coherent. The toolkit groups and delivery copy are currently authored in their components. Review résumé, recruiter content and public claims together rather than changing one in isolation.

Replace the portrait or résumé in `public/` only with approved assets. The portrait's centered 3:4 crop cannot recover source pixels. Updating the domain requires consistent changes to layout metadata, robots and sitemap; review social-image output when identity or assets change. Keep the hidden showcase hidden until real replacement work and substantiated contribution/results are ready.

## Verify a change

From the repository root:

```powershell
npm run lint
npm test
npx tsc --noEmit
npm run build
git diff --check
npm start
```

Run TypeScript after route types exist; build generates them. The test script covers the five estimator cases, not the full interactive site. If generated `.next` files become corrupt, stop the associated development server and regenerate build output; do not alter application types to conceal cache errors. Any alternate build invocation and its result should be recorded explicitly.

Review the built application at its reported local address. Check desktop and mobile at 1440px, 390px and 320px, both themes, and intermediate layout changes. Capture the current implementation, not the proposal. Cover:

- Audience URLs, direct service/studio/dossier anchors, history, sticky offsets and native modified clicks.
- Category filters, native disclosures, service deduplication/removal, goals and selected-service consistency.
- Notes and estimate state surviving audience/tool switches; refresh clearing the in-memory draft.
- Encoded WhatsApp/email drafts, optional field combinations and copy success/error feedback without sending a message.
- Estimate zero/negative-net scenarios, currency unit wording and return to the planner.
- Keyboard focus, skip link, mobile menu Escape/focus return and outside dismissal, reduced motion, loaded portrait/font, and console errors.
- Horizontal overflow, long content, readability and contact/résumé destinations.

Follow the [QA plan](../planning/2026-10-07_visual-refresh/QA_PLAN.md) for detailed coverage. Browser connection failure is a blocker to browser evidence; screenshots from the standalone preview cannot close it. Physical-device, screen-reader, denied-clipboard and field-performance claims require their own evidence. The current Impeccable review calls for recapture because current desktop/mobile review images are missing.

For dependency or deployment changes, inspect the installed version, affected bundle/behavior and production dependency audit. Record unresolved findings with their actual scope rather than forcing an incompatible dependency change. Keep `package-lock.json` with approved dependency updates.

## Publish and verify

1. Complete the applicable checks and current browser review; record evidence and outstanding limitations in the implementation record.
2. Review `git status` and the exact diff. Stage only intended public files. Exclude secrets, generated `.next` output and private vault material; inspect any planning assets before including them.
3. Follow the user's authorized publication scope. Commit/push only when authorized, and inspect the actual hosting project/branch association before relying on a deployment.
4. After publication, confirm the deployed revision and responses for `/`, `/robots.txt`, `/sitemap.xml`, `/opengraph-image`, the résumé and portrait. Verify redirects/canonical domain and configured response headers, then repeat critical public journeys on the deployed site.
5. Report commit, deployment identity, checked journeys and unresolved limits separately. A successful local build or Git push does not establish a healthy hosted deployment.

The configured canonical domain is `https://www.razim.work`; current hosting health and deployment-to-commit identity are not established by these documents. Architectural changes require explicit user consent under the project instructions. Preserve decision history and update the short private project state at a meaningful stopping point, without copying it into public documentation.
