# Razim Manzoor portfolio

A personal site for client projects and hiring conversations. It presents websites and applications, AI tools, automation, and reporting alongside professional experience.

## Local development

Use Node.js 22.18 or later (verified with Node 24).

- Install dependencies: `npm ci`
- Start development: `npm run dev`
- Check code: `npm run lint` and `npx tsc --noEmit`
- Check the estimation model: `npm test`
- Build for production: `npm run build`
- Preview the build: `npm start`

## Content and behavior

- `lib/data.ts`: personal details, work history, education, and project data.
- `lib/services.ts`: five client needs and fourteen service scopes, plus handover terms. Service links feed the goal-led planner; specific service selection is optional and custom scopes are welcome.
- `lib/contact.ts`: shared résumé path and WhatsApp/email draft links.
- `lib/audience.ts`: URL-backed audience selection and section navigation.
- `lib/estimate.ts`: illustrative time-value calculation including running costs.

The old project showcase stays unrendered until replacement projects are ready. Its source and data are retained.

Audience selection is reflected in `?view=client`, `?view=recruiter`, or `?view=all`. Both audience views remain mounted to preserve unsent planner text and calculator state. Section links reveal the appropriate audience; browser history and direct section URLs are supported.

Contact links open WhatsApp or email. The site has no inquiry backend and does not send a message automatically. Planner fields are optional and remain in memory for the current page session; refreshing the page clears the draft.

The calculator models the value of released work time using visitor assumptions and 52 working weeks. It includes recurring costs. Results are neither guaranteed cash savings nor a project quotation.

## Publishing

The production domain is configured in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts`. Validate the production build and review local changes before pushing to the deployed branch.

The ignored `.brain/` junction contains private working notes and is not part of the public site.

## Recent work

The approved [editorial integration](planning/2026-10-12_editorial-integration/IMPLEMENTATION.md) now renders in the main application: authentic 4:5 portrait with a slim matte and centered phone framing, compact five-category/fourteen-scope service rows, complete client/hiring/Everything views, retained planner/estimate, finite opening/delivery motion and a deep-green contact close. Large illustrative service interfaces and preview-only controls are absent from the active page. Existing supplied facts, green/Geist identity and runtime remain; real case studies are deferred.

Final main webpack build/TypeScript, full lint and five calculator tests pass. Actual desktop/phone captures in both themes, narrow breakpoints and supplied interaction evidence passed a fresh independent finish review with disposition ship and no material findings. Opening property samples corroborate finite movement; forced OS preferences and physical-device/reader/field-performance checks remain unperformed. Published on https://www.razim.work on 2026-10-12. Vercel confirmed the integration commit and canonical alias; actual live desktop/mobile views, retained enquiry state and critical route/assets were verified. The integration record separates these release results from local review.

The [Oct8 integration record](planning/2026-10-08_visual-direction/APP_INTEGRATION.md) preserves the earlier illustrative application's verified release. Its checks do not certify this implementation.
The [visual studies](planning/2026-10-08_visual-direction/mockups/README.md) and [preview publication scope](planning/2026-10-08_visual-direction/PUBLICATION.md) preserve the earlier proposal history.

The [website skill workflow](docs/SKILLS.md) maps design, motion, implementation and verification skills, with conditional tools and component-source adoption rules.

The [2026-10-07 visual refresh packet](planning/2026-10-07_visual-refresh/README.md) retains the earlier design proposal, PRD, TRD, flows, color profile and research. Its [implementation record](planning/2026-10-07_visual-refresh/IMPLEMENTATION.md) describes that earlier checkout; use the current editorial integration record for present status.

Durable website references: [product and visitor flows](PRODUCT.md), [design system](DESIGN.md), [architecture](docs/ARCHITECTURE.md), and [maintenance and release](docs/MAINTENANCE.md).

See `planning/2026-10-05_content-code-review.md` for the initial review and the dated implementation handoff for final verification. Review snapshots describe the checkout at the time they were written.

MIT license; see `LICENSE`.
