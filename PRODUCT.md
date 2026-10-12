# Razim Manzoor portfolio

Current application reference, checked against source on 2026-10-12. The approved complete editorial preview is adopted in the maintained main source. Fresh main captures and critical journey checks are recorded; independent finish review returned ship with no material findings; production publication and live verification are complete. The live deployment serves this editorial composition. Current evidence belongs to the [editorial integration record](planning/2026-10-12_editorial-integration/IMPLEMENTATION.md). The [2026-10-08 integration record](planning/2026-10-08_visual-direction/APP_INTEGRATION.md) documents the earlier verified release, not approval of this implementation.

The site helps prospective clients start a project conversation and hiring teams review Razim's background. It connects business analysis with practical websites, applications, AI tools, automation and reporting. Preserve the existing green identity, Geist typography and authentic portrait. Professional history and claims are supplied content, not independently authenticated evidence.

## Visitor journeys

| Journey | Current behavior |
| --- | --- |
| Client | Default view. Explore five business needs and fourteen ruled service scopes; expand native scope disclosures; add/remove scopes in a shared brief or describe a custom problem. |
| Hiring team | View experience, education, roles of interest and certificates; download the résumé or open a contact destination. Junior and associate roles are explicitly welcome. |
| Everything | Both audience sections are visible; shared approach, toolkit and contact remain available. |
| Project inquiry | Optional goals, service choices, starting point, name/contact, note, existing tools and timing produce a reviewable message. Services can be combined or removed. Selecting a service opens the planner and folds optional goals. |
| Time-value estimate | Adjust weekly hours, hourly value, automation share, upfront cost and monthly running cost. Results assume 52 weeks and constant automation; currency selection changes units without conversion. Results are illustrative capacity value, not guaranteed savings or a quote. |
| Contact | WhatsApp and email links open external drafts. Copy message provides immediate status and a manual-copy fallback on failure. The visitor decides whether to send. |

Audience choice lives in `?view=client`, `?view=recruiter` or `?view=all`. The home route reads the query on the server so direct hiring and Everything requests start in the requested audience. Hash-only navigation resolves in the browser: services and studio reveal the client view; dossier reveals hiring content unless `view=all` was explicitly requested. Back/forward navigation and direct anchors are handled by the application. Both audience sections and the planner stay mounted, retaining unsent text, shared service choices and estimate values through audience, tool and theme switches in the current page. Refreshing clears the draft; there is no draft storage or inquiry backend.

## Product boundaries

- No message is submitted by this website. There is no tracking integration or account flow in the current implementation.
- The current service index presents scope, outcome, deliverables and explicit Add/Remove controls. Real work examples remain deferred. Earlier illustrative service/brief examples and portrait fragments remain in the repository but are not rendered by this composition; they must not be presented as delivered client work. The retained project showcase and project data remain unrendered until replacement case studies and evidence are ready.
- Keep requirements optional and contact available without completing a planner. Preserve meaningful labels, visible keyboard focus, native disclosures and reduced-motion behavior.
- Keep public assets and documentation separate from private working memory. Do not export the private vault.

The shared delivery section explains the agreed brief, build/review and handover through three numbered ruled steps. Finite opening and delivery motion supports the editorial composition; reduced motion shows the finished arrangement and phone delivery rules remain static. The planner uses the maintained fields and estimator without the earlier brief illustration. The single opening location, original centered vertical portrait and compact hiring rows preserve the personal identity and supplied facts. Supplied career metrics, certificates and availability remain unverified; résumé consistency still needs owner review.

Content and behavior ownership is in [Architecture](docs/ARCHITECTURE.md); visual rules are in [DESIGN.md](DESIGN.md); checks and publishing steps are in [Maintenance](docs/MAINTENANCE.md). The [complete editorial preview](planning/2026-10-09_motion-direction/preview/README.md) records the adopted surface direction and asset provenance; its captures certify that preview only. The earlier [portrait study](planning/2026-10-08_visual-direction/mockups/README.md) remains historical context.
