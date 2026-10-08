# Razim Manzoor portfolio

Current application reference, extracted from source on 2026-10-08. The visual refresh is implemented locally; release and browser verification remain incomplete. The dated [implementation record](planning/2026-10-07_visual-refresh/IMPLEMENTATION.md) owns verification results.

The site helps prospective clients start a project conversation and hiring teams review Razim's background. It connects business analysis with practical websites, applications, AI tools, automation and reporting. Preserve the existing green identity, Geist typography and authentic portrait. Professional history and claims are supplied content, not independently authenticated evidence.

## Visitor journeys

| Journey | Current behavior |
| --- | --- |
| Client | Default view. Explore five business needs and fourteen service scopes; expand scope disclosures; discuss one service or describe a custom problem. |
| Hiring team | View experience, education, roles of interest and certificates; download the résumé or open a contact destination. Junior and associate roles are explicitly welcome. |
| Everything | Both audience sections are visible; shared approach, toolkit and contact remain available. |
| Project inquiry | Optional goals, service choices, starting point, name/contact, note, existing tools and timing produce a reviewable message. Services can be combined or removed. Selecting a service opens the planner and folds optional goals. |
| Time-value estimate | Adjust weekly hours, hourly value, automation share, upfront cost and monthly running cost. Results assume 52 weeks and constant automation; currency selection changes units without conversion. Results are illustrative capacity value, not guaranteed savings or a quote. |
| Contact | WhatsApp and email links open external drafts. Copy message provides immediate status and a manual-copy fallback on failure. The visitor decides whether to send. |

Audience choice lives in `?view=client`, `?view=recruiter` or `?view=all`. Services and studio anchors reveal the client view; dossier reveals hiring content unless `view=all` was explicitly requested. Back/forward navigation and direct anchors are handled by the application. Both audience sections and planner tools stay mounted, retaining unsent text, service choices and estimate values through switches in the current page. Refreshing clears the draft; there is no draft storage or inquiry backend.

## Product boundaries

- No message is submitted by this website. There is no tracking integration or account flow in the current implementation.
- Service examples describe offered work; they are not completed case studies. The retained project showcase and project data remain unrendered until replacement evidence is ready.
- Keep requirements optional and contact available without completing a planner. Preserve meaningful labels, visible keyboard focus, native disclosures and reduced-motion behavior.
- Keep public assets and documentation separate from private working memory. Do not export the private vault.

Content and behavior ownership is in [Architecture](docs/ARCHITECTURE.md); visual rules are in [DESIGN.md](DESIGN.md); checks and publishing steps are in [Maintenance](docs/MAINTENANCE.md). The [preview](planning/2026-10-07_visual-refresh/preview/README.md) records the approved proposal, not application test evidence.
