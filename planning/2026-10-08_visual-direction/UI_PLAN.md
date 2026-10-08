# Proposed UI plan

Date: 2026-10-08. Status: recommended visual direction, awaiting concrete mockup review. This is planning, not an implemented design system or an architecture decision.

## Job and visual ambition

Clients should see what Razim can help them build; hiring teams should see a capable, approachable person with clear experience. Keep the accepted UX and public facts. The main improvement is to show the nature of the work through designed visual scenes rather than making visitors infer everything from paragraphs.

Recommended direction: a personal portfolio with a composed portrait, illustrated examples of working systems, generous visual regions and confident deep-green contrast. The site's green identity, Geist typography and real photograph remain recognisable. The signature moment is a small illustrated workflow becoming a usable result, using one consistent graphic language across the hero, services and delivery section.

The previous composition remains the functional baseline. This proposal expands its visual vocabulary; it does not invent a new business identity. Final composition and materials must be demonstrated in mockups before being recorded as durable rules.

## Section changes

| Before | Proposed after | Why |
| --- | --- | --- |
| Hero: name and text next to a rectangular portrait | Keep the name/actions clear on the left. Compose the real portrait inside a deep-green frame on the right, with two offset illustration fragments: a browser/mobile layout and a routed workflow. Photo remains the dominant image. | The first viewport communicates both the person and the kind of work. |
| Services: equal text cards on pale ground | Keep the five needs and existing scope actions. Add a substantial illustration to each visible card, with a coordinated set of scenes and purposeful foreground/background layers. Adjust the medium-width grid so a third card does not appear accidentally orphaned. | Visitors can scan by what the work looks like; visual interest extends beyond the hero. |
| Category changes: text replacement | Transition only the illustration layer and decorative selection marker; text and controls update immediately. | Creates continuity while preserving usable state and fast navigation. |
| Delivery: three open text columns | A full-width deep-green section with three connected illustrated stages, existing step descriptions and one finite flow animation. | A memorable contrast and an explanation of how the work progresses. |
| Planner: long white panel beside mostly empty space | Keep the optional form. Give the introductory column a small static illustration of notes becoming an organised brief; tighten panel grouping and line up its edges with the intro. | The form feels part of the page's visual story instead of an unrelated utility. |
| Recruiter: text summary and experience list | Add a clearly drawn chronology with stronger date alignment, deliberate type hierarchy and small authored education/certificate marks. Retain factual content and résumé prominence. | Express care and credibility without turning work history into decorative statistics. |
| Toolkit: text disclosure | Keep it folded initially. Inside, use consistent icons and a carefully spaced capability grid; retain the actual skills and grouping. | Adds visual craft when explored without adding a second showcase. |
| Footer: another white contact block | Close with an expansive deep-green contact region, large name/sign-off and clear high-contrast contact controls. | A stronger visual ending and a coherent return to the hero's material. |
| Controls: mostly resting states | Consistent press, focus, selected, expanded and copy-result treatments, with motion specifications below. | The rich visual work is supported by precise interaction details. |

The illustrations explain offered services. They must not imply completed client work, live integrations, external endorsements or achieved results. Introduce them with honest context such as “Example workflow” when they could be mistaken for working product or project evidence. Real project screenshots join the retained showcase only when replacement work is supplied and cleared for publication.

## Illustration system

Use original, responsive SVG/HTML scenes that share stroke weight, corner treatment, perspective and palette. Illustration fragments are not buttons; the existing real controls remain visually distinct. A scene should still read clearly in a static screenshot and at phone width.

| Business need | Visual scene | Explanatory motion |
| --- | --- | --- |
| Launch online | Browser frame, smaller mobile page and a booking/product tile; adapt the scene to each visible service scope | One layer settles into position; booking selection appears once. |
| Simplify operations | Inquiry → rules → assigned task/notification, with three legible nodes | A connector traces the route once in about 2 seconds. |
| Put AI to work | A document excerpt connected to a question and an answer with a source cue | The document/source relationship is highlighted; avoid endless typing or fabricated conversation claims. |
| Use your data | A small report with grouped bars and a selected row, clearly an example | Bars settle once; no invented ROI or success counters. |
| Improve a system | Two versions of a small interface with a clear updated component | One change is highlighted; no draggable comparison required for comprehension. |

Create five base scenes with limited scope-specific variants, rather than fourteen unrelated illustration styles. Desktop card graphics occupy approximately the upper third of the panel, around 160–220px in the mockups. Mobile retains a meaningful illustration around 120–160px; it is not reduced to an icon. These are provisional composition targets, to be judged with real copy.

The portrait keeps its supplied likeness and natural crop. Its frame and adjacent vector artwork can change. No stock team photography or synthetic portrait is proposed.

## Color and material proposal

| Role | Proposed value/use |
| --- | --- |
| Primary action | Keep existing `#047857`; white label, existing deeper hover. |
| Reading background | Keep existing `#f8fafc` and white panels. |
| Feature field | Proposed `#063D2F` for the delivery/footer regions and portrait framing. |
| Illustration field | Proposed pale green `#E7F1EB`, paired with dark ink. |
| Illustration accent | Proposed `#A7F3D0` on deep green; decorative or paired with an independently verified readable text color. |
| Dark theme | Keep the existing near-black/neutral foundation; use green fields and strokes to separate scenes from reading panels. |

These are proposed roles, not applied tokens or approved contrast results. Verify all text, form, focus and interactive-state pairings before adoption. Keep one illustration palette across both themes; do not force the light artwork onto a dark surface unchanged. Depth comes from two or three offset graphic layers and controlled shadows inside scenes, with open reading regions between them.

## Page storyboard

Desktop sequence:

1. Clear navigation, prominent name and contact action; portrait/illustration composition on the right.
2. Existing audience selector; illustrated service panels with coordinated artwork.
3. Deep-green delivery section; three stages connect into a finished result.
4. Quiet, readable planner with a supporting brief illustration.
5. Folded toolkit; recruiter chronology when that audience is chosen.
6. Deep-green contact ending.

Mobile preserves the name, authentic portrait and contact action in the first screen. Illustration fragments move below or beside the portrait without covering copy. Cards stack; the delivery diagram becomes a vertical three-stage scene. Decorative overlap is reduced, while the underlying artwork remains. Sticky controls, anchors and all contact paths keep their current behavior.

## Motion plan

| Moment | Proposed behavior | Reduced motion / keyboard |
| --- | --- | --- |
| Hero composition | Small grouped entrance, 320–480ms, at most one brief sequence; the name and primary action are readable immediately | Fully composed static view. |
| Service choice | Artwork crossfade/short translation, 150–220ms; interruption goes directly to the latest selection | Instant change; preserve focus and immediate text. |
| Workflow explanation | A finite 1.8–2.5s path/node sequence on first visibility; stop offscreen; optional explicit replay only if useful | Static labelled connections. |
| Card interaction | Inner illustration shifts a few pixels on pointer hover; selected border/action stays clear | Same readable resting content; focus uses a visible ring, not movement. |
| Buttons and copy result | Brief press response around 100–160ms; copy/check transition around 150–200ms after actual success | Immediate state and readable status; retain failure recovery. |

All durations are design targets, not performance measurements. Use the installed Motion/CSS capabilities. Motion remains an explanation or response to an action; content is never hidden waiting for an entrance. Avoid simultaneous loops, scroll locking, custom cursors and dependency-heavy shader backgrounds because they would compete with this site's person and service evidence.

Technical implementation reference: [Motion's accessibility guidance](https://motion.dev/docs/react-accessibility). Exact component adaptation choices are in [RESEARCH](RESEARCH.md).

## Reuse and implementation scope

Use the existing local AnimatedBeam after adding finite playback/offscreen behavior and theme mapping. Adapt Motion Primitives TransitionPanel mechanics only for illustrative scenes. Keep the URL-backed audience state, mounted planner, native scope disclosures and contact/clipboard logic. SmoothUI supplies a copy-feedback reference, not a replacement inquiry flow. No new runtime package is selected.

Likely source targets: HeroSection, ServicesHub, InteractivePipeline, RecruiterSnapshot, TurnkeyStudio, SkillsGrid, Footer and scoped global tokens/styles. Introduce reusable illustration components under the existing component structure if accepted; keep catalogue and professional facts in their current data files. Read full adopted source/dependency paths, record revision/license and preserve notices before copying code. Existing local component names do not establish provenance by themselves.

## Delivery plan

1. **Concrete visual studies:** produce two substantially different desktop/mobile compositions within the existing identity: one with the framed portrait and illustrated panels; one with a larger single workflow illustration and more open service rows. Both use actual copy, the real portrait, proposed color fields and light/dark treatments. They are mockups, not application changes.
2. **Direction review:** compare first screen, service section, delivery scene and contact ending against the current rendered baseline. Select one coherent composition and lock its artwork language. Approval of a text plan alone does not establish that the visuals succeeded.
3. **Implementation:** integrate the accepted scenes and surfaces in one coordinated pass; preserve existing journeys. Update the asset/provenance register if exact third-party code or assets are adopted.
4. **Bounded verification:** inspect desktop/mobile and both themes together, fix observed issues in one batch, then confirm once. Check selected state, disclosure, draft retention, contact encoding, clipboard failure, history, anchor offsets, keyboard, reduced motion and overflow. Run repository-required lint, typecheck, estimator tests and production build sequentially. Complete the independent finish review required by the design workflow using fresh application captures.
5. **Durable records:** update root DESIGN.md/design sidecar from the accepted implementation, and amend architecture/maintenance only for actual changes. Record verification and remaining work in the dated implementation record and project state. Publication remains a separate authorized action.

## Acceptance criteria

- At normal viewport size, the hero, services and delivery regions each contain substantial authored visual material; the improvement is apparent without hovering.
- The site is recognisably Razim's in a static screenshot: actual portrait, consistent green composition, legible personal identity and coordinated illustrations.
- A client can understand the kind of offered work from a scene and its plain-language title. Example scenes cannot be confused with finished client case studies.
- The services grid has a deliberate composition at 1440, 1024, approximately 945, 768, 390 and 320px, with readable copy and no accidental overlap or orphaned panel treatment.
- Primary actions stay visible and usable; an impressive animation does not become a required step.
- Both themes, static/reduced-motion states and keyboard use receive actual rendered verification.
- Compare new compressed transfers against a measured baseline before calling the implementation fast. Reserve image/scene geometry, avoid new heavyweight runtime dependencies, and inspect main-thread activity during the explanatory sequence. No current LCP/INP/CLS result is available.

The user prefers the portrait/panels study (2026-10-08). Card scene/content detail remains the next refinement; this preference does not certify the application's outstanding QA. Fresh project images remain optional future evidence. No richer-direction application integration, runtime or architecture change has been made by this planning task.

## Content assessment after portrait preference

Advice only, 2026-10-08. Preserve A's portrait composition and the current service catalogue/selection journey. The present illustrations establish a coordinated visual language but repeat too much: launch variants mainly change labels, while operations, AI, data and improvement scenes repeat across different services. Placeholder lines and small SVG text explain little about the actual output.

Recommend a distinct, readable demonstration for each scope, sharing palette and geometry rather than identical compositions. Use compact HTML/interface fragments where real labels and controls need to remain legible. Describe illustrative output honestly; no invented client logos, testimonials, results or completed-case-study claims.

| Service family | More specific visual content |
| --- | --- |
| Websites / bookings / apps | Services page and enquiry form; calendar/slot/confirmation; request list and status/detail view. |
| Internal systems / automation / integrations | Team request queue; trigger/action/review sequence; mapped records between two tools. |
| AI search / agents / processing | Question, answer and source; proposed action with approval; document fields extracted into a structured record. |
| Preparation / reporting / analysis | Duplicate records reconciled; labelled reporting chart/table; a question and illustrative comparison with clear assumptions. |
| Reviews / ongoing support | Specific usability change before/after; prioritised maintenance queue and release note. |

Keep each card's title, short outcome, three deliverables, optional scope and existing action. Tighten vague outcome lines instead of adding more paragraphs. Synthetic chart values must be labelled example data and never imply professional results.

The delivery illustration should explain the section's actual collaboration: brief, reviewable build, handover. The current enquiry-routing example belongs with automation services. The planner illustration should turn a concrete rough request into a structured brief. Recruiter content should emphasise real role/contribution details; future project imagery needs authentic, publishable artifacts before it becomes work evidence.

Next recommendation: refine these scenes and their short copy in the preferred portrait preview before application integration. No UI/content edits were made in this assessment.

## Authorised content refinement

The recommended fourteen distinct examples, short outcomes and delivery/planner alignment are implemented in the preferred portrait preview. See [CONTENT_REFINEMENT.md](CONTENT_REFINEMENT.md) for the latest source, verification and remaining actual-application integration. The assessment above is retained as the rationale; its no-edit statement applies to the earlier advice turn.
