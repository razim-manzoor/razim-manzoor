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

The [2026-10-08 visual direction follow-up](planning/2026-10-08_visual-direction/README.md) researches a richer UI and proposes illustrated services, a stronger portrait composition, explanatory motion and green feature sections. Two [interactive visual studies](planning/2026-10-08_visual-direction/mockups/README.md) show portrait/panels and workflow/rows compositions in both themes. The preferred portrait study now has fourteen distinct service examples and aligned delivery/planner content. This richer direction is not integrated into the application.

The preview and supporting documentation are published separately from the pending application edits. [Publication scope](planning/2026-10-08_visual-direction/PUBLICATION.md) records that boundary.

The [website skill workflow](docs/SKILLS.md) maps design, motion, implementation and verification skills, with conditional tools and component-source adoption rules.

The [2026-10-07 visual refresh packet](planning/2026-10-07_visual-refresh/README.md) retains the design proposal, PRD, TRD, flows, color profile and research. The accepted composition is now integrated locally; [implementation checks and outstanding browser verification](planning/2026-10-07_visual-refresh/IMPLEMENTATION.md) are recorded separately. It has not been published.

Durable website references: [product and visitor flows](PRODUCT.md), [design system](DESIGN.md), [architecture](docs/ARCHITECTURE.md), and [maintenance and release](docs/MAINTENANCE.md).

See `planning/2026-10-05_content-code-review.md` for the initial review and the dated implementation handoff for final verification. Review snapshots describe the checkout at the time they were written.

MIT license; see `LICENSE`.
