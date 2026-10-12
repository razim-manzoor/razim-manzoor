# Application architecture

Source reference checked 2026-10-12. The authorized complete editorial integration keeps the runtime stack and local interaction model. It reads the initial audience query on the server, so the home route is now request-rendered; this is the rendering behavior adopted from the approved preview, not a new backend or persistence layer. No tracking or dependency is introduced. Fresh main captures and critical journey checks are recorded; independent finish review returned ship with no material findings; production publication and live verification are complete in the [editorial integration record](../planning/2026-10-12_editorial-integration/IMPLEMENTATION.md). The [earlier integration record](../planning/2026-10-08_visual-direction/APP_INTEGRATION.md) preserves prior release evidence.

## Runtime

Next.js App Router renders the single home page plus metadata/image routes. `app/layout.tsx` provides Geist fonts, metadata, the theme provider and globals → illustrations → editorial stylesheet order. The async `app/page.tsx` awaits `searchParams`, resolves client/recruiter/all and passes `initialMode` through the thin `AudiencePageLayout` wrapper. `EditorialPortfolio.jsx` owns the visible composition, navigation and local shared service selection. React handles interaction locally; the browser URL carries audience and section navigation. ThemeProvider wraps next-themes and MotionConfig with the visitor's reduced-motion preference. Hash fragments are unavailable to the server and resolve after hydration.

The existing Geist Sans/Mono variable classes are attached to `html`, where Tailwind's root theme resolves them. The body keeps `antialiased`. Moving those declarations from the body corrects fallback font resolution without changing fonts, tokens, form state or calculation behavior; current main computed font-family resolves Geist.

The installed foundation is Next.js 16.3.8, React/React DOM 19.2.3, TypeScript 5, Tailwind 4, Motion 13, next-themes 0.4 and existing Radix/Lucide utilities. `package.json` declares versions/ranges; `package-lock.json` records exact resolved dependencies. A present dependency or retained component does not imply it is used by every current section.

```text
RootLayout → ThemeProvider
Home(searchParams) → AudiencePageLayout(initialMode) → EditorialPortfolio
EditorialPortfolio → NavBar + Opening + AudienceToggle
                   → ServiceIndex / Hiring (mounted, visibility changes)
                   → Delivery → TurnkeyStudio (mounted) → SkillsGrid → Contact
```

## Source ownership

| File | Responsibility |
| --- | --- |
| `app/globals.css` | Semantic light/dark colors, base focus/accessibility rules and maintained utility/legacy composition styles. |
| `app/illustrations.css` | Retained static service/brief example geometry; imported after globals but those examples are not rendered by the editorial page. |
| `app/editorial.css` | Editorial namespace, ruled layout, portrait framing, compact planner shell, responsive and reduced-motion overrides; imported last. |
| `lib/data.ts` | Personal facts, professional history, education, contact destinations and retained project data. |
| `lib/services.ts` | Five business needs, fourteen stable service scopes with concise outcomes, handover and scope definitions. |
| `lib/audience.ts` | URL-derived audience state, history updates and section navigation helpers. |
| `lib/project-planner.ts` | Browser event connecting a service link to the mounted planner. |
| `lib/contact.ts` | Shared résumé path; encoded WhatsApp/email draft URLs derived from public contact data. |
| `lib/estimate.ts` | Pure illustrative time-value calculation; `tests/estimate.test.mjs` covers normal and edge cases. |
| `app/page.tsx`, `components/composite/AudiencePageLayout.tsx` | Server query resolution and thin composition boundary carrying initial audience mode. |
| `components/composite/EditorialPortfolio.jsx` | Opening, category/service index, hiring rows, finite delivery, contact, audience visibility, anchor/history focus and shared selected-service state. |
| `components/ServicesHub.tsx`, `ServiceExample.tsx`, `HeroFragments.tsx` | Retained earlier service/illustration components; not imported by the active home composition. |
| `components/composite/TurnkeyStudio.tsx` | Maintained optional goals/fields, service-event handling, copy states and estimator; selected scopes are supplied by the editorial parent. The earlier BriefExample is removed from this component. |
| `components/NavBar.tsx`, `ThemeToggle.tsx` | Responsive navigation dismissal/focus behavior and resolved-theme toggle. |
| `components/SkillsGrid.tsx` | Shared toolkit, retained in the active home composition. |
| `components/HeroSection.tsx`, `RecruiterSnapshot.tsx`, `Footer.tsx`, `composite/InteractivePipeline.tsx` | Retained earlier composition components; active counterparts are in EditorialPortfolio. |
| `app/layout.tsx`, `robots.ts`, `sitemap.ts`, `opengraph-image.tsx`, `icon.tsx` | Canonical domain, search/social metadata and generated image routes. |
| `next.config.ts` | Site-wide response headers. |
| `public/profilepic.jpeg`, `public/Razim_Manzoor_MBA_AI_Analytics.pdf` | Current portrait and shared résumé download asset. |

`PRODUCT.md` explains behavior; `DESIGN.md` and `.impeccable/design.json` record the active visual system. Update them alongside changes to their source. Planning documents and standalone preview snapshots describe decisions and proposals, not runtime truth.

Editorial delivery uses Motion `useInView` with `once: true` and `amount: 0.3`. Three decorative rules animate over 650ms with 160ms step delays; copy is always visible. Phone CSS forces finished rules. Opening name, portrait and signature assembly runs once on mount; local MotionConfig and CSS remove motion for reduced preference and relevant keyboard feedback. No replay or copy-failure QA flags are included in main. The original portrait and shared résumé are unchanged; earlier interface specimens remain illustrative source, not work evidence.

## State and event boundaries

`useAudienceMode(initialMode)` subscribes through `useSyncExternalStore` to history, hash and the custom navigation event. Its server snapshot uses the query-derived initial mode; missing or unknown queries resolve to client. The browser URL snapshot gives explicit `view=all` precedence; otherwise services/studio anchors choose client, dossier chooses recruiter, and the query provides the remaining choice. Audience switching clears the hash and scrolls to content. Ordinary in-page navigation updates query/hash and focuses the destination; modified clicks retain native behavior. Keyboard activation uses immediate scrolling. Reading search parameters makes `/` request-rendered; verify metadata/image routes independently rather than describing all routes as static.

Both audience sections and the planner remain mounted under `hidden`; the global hidden rule suppresses their display. Planner scope/estimate panels also use `hidden`. React state therefore survives audience, tool and theme switches in the current page, but not a reload. `EditorialPortfolio` lifts selected IDs into one state shared by ServiceIndex and TurnkeyStudio. The existing service event adds a known scope once, switches to planner mode and folds optional goals. Row removals, summary removals and planner checkboxes update the same state. Removing a need also removes selected services in that need. A derived message combines goals, known services and trimmed optional fields.

Contact is outbound URL construction, not form submission. Clipboard writing is explicit, with success/error status and a fallback field. Estimation is local arithmetic: annual hours = weekly hours × 52 × share; net annual value subtracts 12 running costs; modeled payback is null when net value is nonpositive. Currency is a display unit, not an exchange-rate service.

The retained `ProjectShowcase` and project data are not imported into the current page. Enable them only after replacement evidence is ready and review the resulting journeys. Private working memory is ignored and must not be included in builds, previews or public exports.
