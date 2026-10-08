# Application architecture

Source reference checked 2026-10-08. The authorized composition refresh keeps the existing runtime and data flow. No backend, tracking, dependency or architectural change is introduced. Current release evidence belongs to the [implementation record](../planning/2026-10-07_visual-refresh/IMPLEMENTATION.md).

## Runtime

Next.js App Router renders the single home page plus metadata/image routes. `app/layout.tsx` provides Geist fonts, metadata and the theme provider. `app/page.tsx` renders the skip link, navigation and client audience composition. React handles interaction locally; the browser URL carries audience and section navigation. ThemeProvider wraps next-themes and MotionConfig with the visitor's reduced-motion preference.

The installed foundation is Next.js 16.3.8, React/React DOM 19.2.3, TypeScript 5, Tailwind 4, Motion 13, next-themes 0.4 and existing Radix/Lucide utilities. `package.json` declares versions/ranges; `package-lock.json` records exact resolved dependencies. A present dependency or retained component does not imply it is used by every current section.

```text
RootLayout → ThemeProvider
Home → NavBar + AudiencePageLayout
AudiencePageLayout → Hero → AudienceToggle
                    → Services / Recruiter (mounted, visibility changes)
                    → Approach → Planner (mounted) → Toolkit → Footer
```

## Source ownership

| File | Responsibility |
| --- | --- |
| `app/globals.css` | Semantic light/dark colors, base focus/accessibility rules, responsive composition and CSS interaction timing. |
| `lib/data.ts` | Personal facts, professional history, education, contact destinations and retained project data. |
| `lib/services.ts` | Five business needs, fourteen service scopes, handover and scope definitions. |
| `lib/audience.ts` | URL-derived audience state, history updates and section navigation helpers. |
| `lib/project-planner.ts` | Browser event connecting a service link to the mounted planner. |
| `lib/contact.ts` | Shared résumé path; encoded WhatsApp/email draft URLs derived from public contact data. |
| `lib/estimate.ts` | Pure illustrative time-value calculation; `tests/estimate.test.mjs` covers normal and edge cases. |
| `components/composite/AudiencePageLayout.tsx` | Audience visibility, anchor interception, history scroll and focus on selected anchor targets. |
| `components/ServicesHub.tsx` | Business-need filter, scope disclosures and service-to-planner actions. |
| `components/composite/TurnkeyStudio.tsx` | Optional goals and message fields, selections, copy states, estimator inputs and output. |
| `components/NavBar.tsx`, `ThemeToggle.tsx` | Responsive navigation dismissal/focus behavior and resolved-theme toggle. |
| `components/HeroSection.tsx`, `RecruiterSnapshot.tsx`, `SkillsGrid.tsx`, `Footer.tsx`, `composite/InteractivePipeline.tsx` | Identity, hiring background, toolkit, contact and delivery sequence. |
| `app/layout.tsx`, `robots.ts`, `sitemap.ts`, `opengraph-image.tsx`, `icon.tsx` | Canonical domain, search/social metadata and generated image routes. |
| `next.config.ts` | Site-wide response headers. |
| `public/profilepic.jpeg`, `public/Razim_Manzoor_MBA_AI_Analytics.pdf` | Current portrait and shared résumé download asset. |

`PRODUCT.md` explains behavior; `DESIGN.md` and `.impeccable/design.json` record the active visual system. Update them alongside changes to their source. Planning documents and standalone preview snapshots describe decisions and proposals, not runtime truth.

## State and event boundaries

`useAudienceMode` subscribes through `useSyncExternalStore` to history, hash and the custom navigation event. Default/server mode is client. Explicit `view=all` wins; otherwise services/studio anchors choose client, dossier chooses recruiter, and the query provides the remaining choice. Audience switching clears the hash and scrolls to content. Ordinary in-page navigation updates query/hash and focuses the destination; modified clicks retain native behavior.

Both audience sections remain mounted under `hidden`; the global hidden rule suppresses their display. Planner scope/estimate panels also use `hidden`. React state therefore survives audience and tool switches in the current page, but not a reload. The service event adds a known scope once, switches to planner mode and folds optional goals. Removing a need also removes selected services in that need. A derived message combines goals, known services and trimmed optional fields.

Contact is outbound URL construction, not form submission. Clipboard writing is explicit, with success/error status and a fallback field. Estimation is local arithmetic: annual hours = weekly hours × 52 × share; net annual value subtracts 12 running costs; modeled payback is null when net value is nonpositive. Currency is a display unit, not an exchange-rate service.

The retained `ProjectShowcase` and project data are not imported into the current page. Enable them only after replacement evidence is ready and review the resulting journeys. Private working memory is ignored and must not be included in builds, previews or public exports.
