# Personal portfolio visual refresh

Date: 2026-10-07 (Asia/Dubai)
Status: Preview accepted and application implemented locally on 2026-10-08; fresh browser verification and publication pending.
Owner: Razim Manzoor

## Recommendation

Refine the existing portfolio through portrait composition, typography, section rhythm, and precise interactions. Keep its recognisable green identity and its client and hiring paths. The memorable feature should be Razim and his work. A generic animated system diagram is no longer the lead recommendation.

The initial release can be completed using the existing portrait and content. Replacement project screenshots belong in a later, evidence-led release; their absence must not stall the initial visual improvements or lead to invented examples.

## Read this packet

| Document | Owns |
| --- | --- |
| [PRD](PRD.md) | Audience, scope, product requirements, acceptance criteria |
| [Design direction](DESIGN.md) | Composition, typography, section treatments, motion |
| [Color profile](COLOR_PROFILE.md) | Existing light/dark tokens, usage, calculated contrast |
| [User flows](USER_FLOWS.md) | Client, recruiter, audience, draft, and recovery journeys |
| [System design](SYSTEM_DESIGN.md) | Current boundaries, state, data, external services |
| [TRD](TRD.md) | Technical requirements and component changes |
| [Research](RESEARCH.md) | Skills, MCP health, current resources, adoption decisions |
| [Asset register](ASSETS_AND_PROVENANCE.md) | Real assets, licensing, project-proof readiness |
| [QA and release plan](QA_PLAN.md) | Verification, evidence, release and rollback gates |
| [Interactive visual preview](preview/README.md) | Working desktop/mobile composition, both themes and saved captures |
| [Component shortlist](COMPONENT_SHORTLIST.md) | Specific source patterns reviewed and adoption decisions |
| [Implementation and verification](IMPLEMENTATION.md) | Integrated changes, passed checks, browser blocker and release work remaining |

This packet preserves the research and original requirements. The PRD owns scope, its DESIGN records the proposed direction, and TRD records implementation constraints. The [implementation record](IMPLEMENTATION.md) distinguishes completed source work from outstanding verification. Root PRODUCT.md and DESIGN.md describe the current application; this packet does not claim publication. Existing historical planning documents and ADRs remain intact. The February BRD is historical and does not override the current two-audience requirements.

## Delivery sequence

| Stage | Concrete deliverable | Exit condition |
| --- | --- | --- |
| 0. Research and documentation | This packet, verified source/stack inventory | Complete in this planning pass |
| 1. Visual review | [Interactive composition and captures](preview/README.md), completed and user authorized integration 2026-10-08 | Complete |
| 2. Foundation and hero | Integrated into existing components | Source complete; browser verification pending |
| 3. Page rhythm | Services, delivery process, recruiter experience, planner and footer integrated | Source complete; browser journeys pending |
| 4. Interaction and verification | Motion integrated; automated/HTTP checks recorded | Browser tooling unavailable; reviewer requires new captures |
| 5. Publication | Reviewed diff and verified hosted result | Publication authorization and matched deployment target |
| Later. Work proof | Replacement case studies with real screenshots | Asset and claim checks pass before showcase is enabled |

Do not install component libraries or MCPs simply to satisfy the research list. A chosen component must solve a specific need, fit the existing stack, pass source/license review, and improve the accepted visual example.

## Decision record

| ID | Decision | State |
| --- | --- | --- |
| D1 | Research and documents before interface implementation | User requested |
| D2 | Avoid an AI-generated/template appearance | User requested |
| D3 | Refine existing green identity and real portrait | Preview accepted; integrated locally 2026-10-08 |
| D4 | Preserve client/recruiter/all modes and hidden projects | Existing product constraint |
| D5 | Use existing CSS/Motion first; import selectively | Existing CSS/local primitives used; no component code imported |
| D6 | Keep runtime architecture, hosting assumptions and session-only drafts | Proposed preservation; no architecture change |
| D7 | Do not make a backend, add tracking, or publish in this pass | Outside this planning scope |

The 8 October preview demonstrates the existing Geist font, a larger natural-ratio portrait on desktop, a compact portrait beside the name on mobile, and a single restrained portrait entrance. The user authorized integration and those choices are now in application source. Fresh browser captures of the application are outstanding. No Figma file, purchased asset, or new account was required.

## Baseline and limitations

Verified local branch: main; HEAD and local origin/main: b57de1a (Update profile portrait). This supersedes the older memory note naming 73cd921 as current. Two source files were already modified: app/globals.css and components/composite/AudiencePageLayout.tsx, implementing the sticky audience bar and anchor offsets. Four older planning reports were already untracked. Preserve those changes when implementing.

The live hero and recruiter view were inspected in this conversation. They are readable but rely heavily on text and repeated neutral surfaces. The old localhost preview on port 3100 was unavailable. These observations are not a complete mobile, dark-theme, or performance audit.

Planning and standalone preview creation made no application changes. The subsequent authorized integration changed UI components and styling without dependencies, integrations, deployment or architecture changes. The standalone proposal's screenshots/checks remain separately labelled; they do not verify the current implementation. See IMPLEMENTATION for current evidence and limitations.
