# Interactive visual preview

Date: 2026-10-08
Stage: Concrete visual review before application implementation.

Open [the local preview](http://127.0.0.1:3111/). It is a standalone proposal using the current public portrait, résumé, catalogue and professional history. It does not change the Next.js application or published site.

## What to review

- A more deliberate opening: a two-line name, larger authentic portrait and clearer contact hierarchy on desktop; a compact portrait beside the name on mobile.
- Existing green light/dark identity and Geist typography, with more variation in section layout and spacing.
- Quieter service surfaces, an open three-step delivery sequence, a compact optional planner, and dates aligned with experience entries for hiring teams.
- Restrained portrait entrance, selected audience marker, service hover/keyboard feedback and clipboard status. The preview toolbar's Reduce motion option is for review and does not belong in the final site.

Use the audience buttons, service category filters, disclosures and Discuss this links. Enter a note, switch to hiring and back, and inspect the retained draft. Copy message copies the preview's current draft. WhatsApp/email links open real draft destinations if clicked; the preview does not send anything automatically.

## Preview URLs and captures

| View | Light | Dark |
| --- | --- | --- |
| Client | [Interactive](http://127.0.0.1:3111/?view=client&theme=light) | [Interactive](http://127.0.0.1:3111/?view=client&theme=dark) |
| Recruiter | [Interactive](http://127.0.0.1:3111/?view=recruiter&theme=light) | [Interactive](http://127.0.0.1:3111/?view=recruiter&theme=dark) |
| Everything | [Interactive](http://127.0.0.1:3111/?view=all&theme=light) | [Interactive](http://127.0.0.1:3111/?view=all&theme=dark) |

| Saved composition | Evidence |
| --- | --- |
| Desktop opening, 1440 × 900 | [Light](screenshots/desktop-light.jpg), [dark](screenshots/desktop-dark.jpg) |
| Mobile opening, 390 × 844 | [Light](screenshots/mobile-light.jpg), [dark](screenshots/mobile-dark.jpg) |
| Client page, full length | [Desktop](screenshots/client-full-desktop.jpg), [mobile](screenshots/client-full-mobile.jpg) |
| Recruiter section | [Desktop light](screenshots/recruiter-desktop.jpg), [mobile dark](screenshots/recruiter-mobile-dark.jpg) |

Screenshots are browser viewport captures, not claims of physical-device testing. Full-page client captures preceded the final small navigation/mobile-type adjustments; opening and recruiter captures include those adjustments.

## Verification and limits

On 8 October, browser checks passed for desktop/mobile in both themes, loaded local font/portrait, horizontal overflow at 1440, 390 and 320 px, selected-service draft inclusion, note and selection retention across audience changes, clipboard success feedback, reduced-motion demo, and mobile menu Escape dismissal with focus returned to its button. No browser warnings/errors were observed. JavaScript syntax and repository whitespace checks passed.

This is a composition prototype, not full application parity. The existing estimator is not included. Production navigation/history/deep-link parity, all optional field combinations, forced clipboard denial, screen-reader behavior and field performance still require the implementation QA plan. The reduced-motion checkbox was tested; the operating-system preference was not changed. Existing employment metrics were preserved, not independently authenticated. No messages were sent and no deployment was made. Application tests were not rerun because application source was unchanged by this preview task.

## Run locally

From the repository root:

```powershell
python -m http.server 3111 --bind 127.0.0.1 --directory planning/2026-10-07_visual-refresh/preview
```

Only this preview directory is served. The browser page uses its local files without a build or external component runtime. Keep the server running while reviewing; restart it if the URL becomes unavailable.

`data.json` is a snapshot of selected existing public fields from `lib/data.ts` and `lib/services.ts`; hidden project data and private memory are excluded. `build-data.mjs` regenerates the snapshot and asset copies using the installed React/Lucide dependencies. Its cached Geist filename is specific to the current build; if that cache changes, resolve the current Latin Geist file before regeneration. Regeneration is optional for reviewing the saved preview:

```powershell
node --experimental-strip-types planning/2026-10-07_visual-refresh/preview/build-data.mjs
```

Source and license records are in [ASSETS_AND_PROVENANCE](../ASSETS_AND_PROVENANCE.md); pattern choices are in [COMPONENT_SHORTLIST](../COMPONENT_SHORTLIST.md). After visual review, apply the composition to existing application components and complete [QA_PLAN](../QA_PLAN.md) before publication.
