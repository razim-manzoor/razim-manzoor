# Portrait, typography and purposeful motion

Date: 2026-10-09. Status: complete local Client/Hiring teams/Everything preview built and verified, including the improved portrait framing; fresh full-preview review scored the44px audience-control correction resolved. Application integration and publication remain pending. Earlier partial-preview records are historical.
Baseline inspected: main at `ac7fe05`, following `156c3c7`. These changes postdate the previously reviewed `70b6a35` release. This document does not certify the current production deployment or all recent edits.

The implemented local version includes the coordinated finite opening, compact five-category/fourteen-scope service index, full retained planner/time-value estimate, local hiring timeline/education/résumé, shared toolkit/contact, both themes and normal/reduced motion. The original portrait uses a narrower near-source4:5 presentation with a slim matte and an outside caption. See [complete preview](preview/README.md) and [full verification](preview/FINISH_FULL.md). Real work examples remain deferred. Main integration must reconcile the local planner adaptation, remove review controls/QA flags and verify the maintained application before publication.

## Decision

Make the site feel like a personal studio run by someone who understands business and builds useful systems. Keep the actual portrait, green identity, Geist typography, factual career content, and direct client/recruiter paths. Give the opening more scale and visual authorship; make the services lighter and quicker to scan. Use a small number of visible, connected animations rather than distributing equal motion across every section.

The motion thesis is **understand → build → hand over**. The opening introduces the person; the service selection visibly becomes a scope; the delivery section shows how that scope reaches handover. This is appropriate to the site's actual offer and works without finished case studies.

The [expanded inspiration study](RESEARCH.md) compares eight references, including annual/current winners, historical examples and recent nominees. Its recommendation is a personal editorial studio: portrait and typography form the dominant opening; compact service rows and actual selection state carry supporting motion. A new large morphing process illustration is an optional exploration rather than part of the default build.

## What the inspection found

The current code already contains audience-marker transitions, service entrance/hover feedback, floating hero fragments and a finite delivery animation. The problem is their combined presentation, rather than the absence of an animation library.

In the inspected 521 px live viewport, the three initial service cards were about 653 px high, with the miniature example occupying 317–318 px before the service title. These measurements describe that viewport and state, not every breakpoint. Miniature controls also compete visually with real enquiry actions. Retain useful scope descriptions while removing these interfaces from the default catalogue presentation.

## Recent references and what to take from them

Checked directly on 2026-10-09, including the live sites. Both entries below were listed as nominees when inspected; they are not being presented as award winners.

| Reference | Verified evidence | Useful principle for this site |
| --- | --- | --- |
| [John Gearhart — Portfolio 2026](https://www.awwwards.com/sites/john-gearhart-portfolio-2026), nominee Sep 28, 2026; [live site](https://johngearhart.me/) | Large project typography and imagery; directly operated the switch from image-led view to a typographic catalogue with object imagery. Awwwards lists intro, navigation and project-transition examples. | Strong scale contrast and a coherent transition between compositions. Apply continuity to service/scope state, while keeping normal page browsing and accessible controls. |
| [Mostafa ElBermawy](https://www.awwwards.com/sites/mostafa-elbermawy), nominee Oct 2, 2026; [live site](https://bermawy.com/) | Journal-like composition, personal portrait and short business introduction; Awwwards highlights portrait, menu and footer interactions. | Personality comes from the person's story and a consistent visual language. Use Razim's portrait and existing identity; author the details around his work. |

These are composition and interaction references. No assets, code, fonts or branded imagery have been copied. The decision below is a design inference from these references and this site's audience, not a claim that their complete layouts should be adopted.

## Composition and component changes

| Before | After | Why |
| --- | --- | --- |
| Portrait with multiple small floating interface fragments | Remove miniature interfaces; compose larger display typography, a deliberate green portrait frame and one line motif connecting the role, portrait and actions | Establish one focal composition and make the person memorable. Keep role and actions immediately readable. |
| Tall service cards led by miniature interfaces | A numbered service index: name, short outcome, details disclosure, enquiry action; three initial services visible together on desktop where space permits | Put the actual offer first. On phones use stacked rows, with comfortable wrapping and touch targets. |
| Decorative float plus scattered transitions | Coordinated portrait-frame/typography entrance and a shared line motif used in active service/category feedback | Give motion a recognizable visual language. Finite movement has a clear resting state. |
| Delivery diagram with several simultaneous cues | Start with a compact stage/progress transition through existing brief, build/review and handover content; elaborate scope-sheet morph optional after preview | Explain the work while preserving space and readable copy. The opening and actual service selection carry the main visual motion. |
| Dense recruiter cards and a conventional closing block | Clear typographic career timeline and an oversized green contact close with precise link feedback | Give hiring information a confident hierarchy and finish with a clear next action. |

Keep the existing palette tokens and both themes. Use green for the portrait, selected state, delivery scene and closing section; use quiet surfaces and ruled dividers for the service index. Expressiveness comes from type scale, alignment and contrast between dense and spacious areas. New color/font tokens are not required for this direction.

## Motion map

Timing values are starting targets to tune in the actual composition, not performance guarantees.

| Moment | Behavior and budget | Mobile / reduced motion |
| --- | --- | --- |
| Opening | One 600–800 ms frame-and-type assembly. The portrait stays recognizable; role, navigation and CTAs are available immediately. Decorative masks may move, but essential text never waits for a loader. | Shorter movement on phones. Reduced motion shows the finished composition immediately. |
| Service category | Shared active rule moves in approximately 180–240 ms; outgoing/incoming service content uses a short transition. Updating the selected category and keyboard feedback is immediate. | Same controls and visible state; movement can become an instant change. |
| Service selection | Selection styling and scope count update immediately; a small 150–220 ms continuity cue connects the selected row and planner summary. | Keep it local to the controls; no flying object across the phone viewport. |
| Delivery | A bounded stage/progress cue follows brief → build/review → handover. Prototype the simpler version first; an elaborate scene is optional. No page pinning; labels remain readable. | Stacked, static stages on small screens and under reduced motion. The complete process is available without animation. |
| Career and contact | Career information stays readable. Contact links get local underline/arrow feedback in about 120–180 ms. | Identical access through touch and keyboard. |

Budget: one dominant composed opening, supporting category/selection feedback, and a restrained delivery progression. No perpetual decorative float, repeated section-by-section entrance formula, or essential content hidden behind hover. Native scrolling, visible focus, interruption-safe controls and immediate state updates are requirements.

## Stack choice

Keep the installed Next.js 16.3.8, React 19.2.3, Tailwind 4.1.18 and Motion 13.4.4, plus existing Radix/local primitives. Tailwind and custom CSS handle visual composition and simple feedback. Motion handles shared layout/state transitions and the bounded scroll scene. Use current `motion/react` imports.

The official [Motion React documentation](https://motion.dev/docs/react) and [scroll animation guide](https://motion.dev/docs/react-scroll-animations) cover the required mechanisms. [Tailwind theme variables](https://tailwindcss.com/docs/theme) support the existing token approach. Implement against the installed APIs and inspect actual runtime behavior. This proposal requires no additional runtime library or architectural change.

Use existing primitives and author the small amount of composition-specific motion. If an exact reusable component becomes useful during implementation, verify its revision, license, dependencies, keyboard behavior and reduced-motion behavior before adoption, following `docs/SKILLS.md`. The research does not authorize copying unspecified registry components.

## Implementation order and completion checks

1. Build a local preview of the portrait opening, compact service index and contact composition, including both themes and phone layouts. Use actual content. Preserve the 5 categories/14 scopes, disclosures and enquiry behavior.
2. Add the opening, category and selection transitions. Preserve audience URLs/history, selected scopes, notes and estimator state; animation must not remount retained drafts or steal focus.
3. Refine the existing delivery progression and career/contact composition. Keep the larger delivery-scene experiment optional. Keep all facts truthful; real case studies remain deferred.
4. Verify changed client/recruiter journeys, touch, keyboard, focus, reduced motion and desktop/mobile layouts. Run repository lint, TypeScript, tests and production build. Inspect animation frames and loading behavior before making performance claims.
5. Update existing `DESIGN.md`, `PRODUCT.md` and relevant maintenance notes to reflect what actually ships. Record adopted material in the existing provenance register. Preserve ADR history. Do not create duplicate PRD/TRD/system-design documents for this visual revision.

Step 1 now has an isolated [local portrait, service and contact preview](preview/README.md), using the existing installed runtime and actual service data. Its verification and finishing record belong to that preview. Steps 2–5 are application integration work; they have not been applied to production. Main application source, dependency installation, hosting settings and deployment remain unchanged. The root lint configuration excludes the preview's generated build directories.

## Follow-up: complete audience and motion scope

2026-10-09, after the user reviewed port 3114 and asked about animation and the hiring view. This is an expanded implementation brief, not a completed application review. The current preview has a 750 ms portrait crop/rule reveal, a shared category marker, selected-list layout feedback and short link transitions. Its name and introductory typography are static. Once the entrance finishes, most of the page rests. Its Background link opens the existing public hiring page; it contains no local hiring view, delivery section, full planner, estimator or toolkit. These are material omissions from a complete site proposal.

The next reviewable result must be one local website with Client, Hiring teams and Everything states. Keep the selected portrait/editorial direction. Complete these states before treating the new treatment as ready for integration or publication. The existing application is the behavior baseline; the isolated preview is the visual reference. Do not substitute its simplified brief for the application's full optional planner.

### Surface coverage

| Before | After | Why |
| --- | --- | --- |
| Client-led preview with an external Background link | In-page Client / Hiring teams / Everything selector near the opening, plus working local `#dossier` navigation | A recruiter can assess the complete new site without leaving for an older composition. |
| Static name and a subtle portrait-only entrance | One coordinated name/rule/portrait assembly; name and portrait share the same visual line language | Give the opening an authored, visibly memorable moment while keeping role, navigation and actions usable immediately. |
| One generic set of opening actions | Client emphasis on services/conversation; hiring emphasis on background/résumé; Everything keeps both paths clear | The first screen should help the visitor take the right next step. Keep one identity and factual positioning across states. |
| Hiring composition absent from the study | Open editorial career layout: role interests and supplied location/availability beside a dated experience timeline; education, optional certificates, résumé, LinkedIn and direct role contact | Make the background easy to scan and visibly part of the same website. On phones place summary and résumé before the detailed history. |
| Category marker and a distant simplified brief | Compact five-category/fourteen-scope index; immediate Add/Remove state and a nearby selected-scope summary connected to the existing planner | Make service selection legible, retain actual scope definitions and avoid recreating oversized example cards. |
| Delivery absent from the study | Compact agreed brief → build/review → handover composition with a finite connecting rule and readable stage labels | Explain the offer through motion grounded in how the work happens. Keep its footprint smaller than the removed service illustrations. |
| Toolkit and estimate absent; inquiry fields reduced | Visually matched optional toolkit and full planner/estimate controls, including all existing optional fields and copy fallback | A visual revision must preserve the site's actual functionality and useful details. |
| Strong contact close with one generic message | Same green closing composition, with project/role context and direct email, WhatsApp, phone and LinkedIn access | Carry the selected audience through the final action; inquiry preparation remains optional. |

Hiring hierarchy: qualification/role fit → location and working arrangements → résumé/contact → experience → education → optional courses/certificates. Preserve the supplied three experience entries, two education entries, role options and junior/associate welcome. The shared approach explains how Razim works; commercial timing and estimator remain in the client journey. Everything shows both audience bodies once, with one shared toolkit/contact region.

### Portrait framing refinement

2026-10-09 photo follow-up. Inspected the actual original portrait and the saved desktop-opening capture against current preview CSS. The source is a vertical portrait with some headroom; the preview's fixed 310 px image height inside a wide frame, `object-fit: cover` and `object-position: 50% 34%` remove the top of the hair in that desktop capture. The 24 px green matte plus caption band also makes it read as a separate heavy card. This is a proposed correction, not an applied UI change or a reason to edit the photograph.

| Before | After | Why |
| --- | --- | --- |
| Wide image crop with clipped hair | A vertical crop near the source's 4:5 ratio, preserving the top of the hair and enough shoulders | Keep the person recognizable and avoid a cramped headshot. Verify each breakpoint rather than shifting the crop blindly. |
| Broad green matte with a large caption band | Slimmer green frame and a small caption below the image | Keep the brand connection while giving the photograph more presence than its container. |
| Large width combined with a fixed short image height | Test a narrower desktop portrait around 320–360 px wide with proportional height | Preserve a balanced first viewport; a vertical crop should not create an oversized hero card. Responsive values remain provisional. |
| Decorative arrow in a noninteractive caption | Remove the arrow unless the portrait gets a useful, explicitly labelled action | Avoid suggesting that the image is clickable. |

Carry the finite green-rule/frame reveal into this framing. Keep one consistent portrait treatment across Client/Hiring/Everything, with a phone crop checked separately. Preserve the original image, grayscale appearance and truthful identity. No generated extensions, retouching or new photo are required for this proposal.

### Motion choreography

Targets below are provisional tuning values. Inspect actual playback before scoring it. Motion must be visible at the moments it serves, rather than relying on animated decoration across every section.

| Moment | Proposed treatment | Resting, touch and accessibility behavior |
| --- | --- | --- |
| First opening | A single 600–800 ms sequence aligns the name's green rule, portrait frame and crop. Essential copy remains visible; no loader or letter-by-letter wait. | Complete static composition for reduced motion and failed animation. Do not replay on theme, history or audience changes. Phone sequence has less movement. |
| Audience switch | Immediate pressed/visible state, moving selector rule and a short 180–240 ms local continuity cue in the incoming audience region. | Retain both bodies and planner state; do not key/remount the page or animate a whole page's height. Keyboard feedback and focus are immediate. Rapid switching interrupts cleanly. |
| Categories and scope | Short active-rule continuity; selected styling/count changes immediately, with a small local summary cue around 150–220 ms. | Category, scope disclosure and Add/Remove work during transitions. Native details remain independently operable; no flying service card or distant automatic scroll for every selection. |
| Delivery | Once-per-visit connecting rule advances through three readable stages on intersection; target about 900–1400 ms total. | Labels and handover remain readable throughout. Static stacked sequence on phones/reduced motion; no pinned or overridden scrolling. |
| Hiring timeline | Ruled editorial timeline with an optional one-time short rule reveal. Dates, titles and achievements remain visible and readable. | No count-up employment metrics or delayed achievement list. Keep supporting motion subordinate to the opening and delivery. |
| Menu, links and brief feedback | Fast open/close feedback, local arrow/underline motion, clear Add/Remove and Copying/Copied/Error states. | Fine-pointer hover only where appropriate; touch has press feedback, keyboard has visible focus. Copy feedback is announced independently of animation. |
| Theme / motion preferences | Change semantic colors and render the correct movement preference across all sections. | Do not replay the opening or discard inputs. Reduced motion also controls root scrolling; preview controls stay out of the final site. |

Keep native scrolling, finite movement and a settled readable page. Use existing CSS/Tailwind for simple feedback and installed Motion for coordinated sequences/shared state. No additional runtime library is justified by this scope. Architectural patterns and permanent ADR history remain unchanged.

### Behavior and content contract

- Preserve `?view=client`, `?view=recruiter`, `?view=all`, anchors, direct links, modified clicks and browser Back/Forward. `view=all` continues to win over audience-specific anchors. Navigation has consistent section names, sensible active state, visible focus and a mobile menu with the existing dismissal behavior.
- Keep audience bodies, planner and estimator mounted. Preserve selections, goals, starting point, name/contact, notes, tools, timing, estimate inputs and copy status correctness through audience/category/tool/theme changes. Refresh persistence is not added as part of this visual task.
- Retain all five categories and fourteen stable scope IDs, optional native disclosures, a help-deciding path and direct contact without a completed brief. Remove miniature interfaces from the default service list. No replacement case study or testimonial is invented; work examples remain deferred.
- Keep external drafts reviewable and visitor-sent. Preserve exact message encoding, no-context inquiry, duplicate prevention, removal, manual copy after failure, and the existing calculator's units/assumptions and nonpositive-payback behavior. Avoid decorative number animation on editable calculation results.
- Use current semantic light/dark tokens, Geist, actual portrait and public contact destinations. Keep minimum readable form text, visible labels, disclosure semantics, contrast, touch targets and overflow handling throughout.
- Review the rendered career wording and the actual résumé asset together. `public/Razim_Manzoor_MBA_AI_Analytics.pdf` exists, but existence is not a content-consistency check. Current data includes immediate availability/visa wording and supplied percentages/multipliers; their accuracy and freshness are not established by this UI review. Preserve facts pending owner correction; do not turn these claims into large promotional statistics or import hidden project claims into the page.
- Account for first render on direct recruiter URLs and theme hydration: use the shared opening as a stable base, avoid a client-to-recruiter entrance flash, and do not hide meaningful default content while waiting for animation JavaScript.

### Completion gate and documentation

1. Extend the reviewable local experience to all three audience states and existing tools using actual current content. Review the full composition before applying it to the main application. This is continuation of the chosen world, not another concept tournament.
2. Inspect desktop, tablet and narrow-phone Client/Hiring/Everything, both themes, short/long/empty brief states and reduced motion in one batched visual pass. Check actual motion start/mid/rest and rapid interruption; static screenshots alone do not demonstrate playback.
3. Verify direct audience/anchor URLs and history, repeated audience switches with retained drafts/estimate, all categories/scopes, scope removal, goal-only inquiry, keyboard/focus, mobile menu, copy failure fallback, encoded drafts, résumé destination and contact links. No external messages are sent during checks.
4. Run repository lint, TypeScript, existing calculator tests, production build and whitespace checks for the integrated application. Inspect loading and runtime errors. Physical-phone, screen-reader and field-performance claims require their own evidence; do not silently inherit older release certification.
5. Update the existing `PRODUCT.md`, `DESIGN.md`/design sidecar, `docs/ARCHITECTURE.md` and `docs/MAINTENANCE.md` to match the result that actually ships; preserve source/asset provenance and permanent ADR history. Keep this plan as proposal history. No duplicate PRD/TRD/system-design/color-profile documents are needed.

This follow-up changes planning documentation only. No new UI animation, hiring composition, application integration, dependency installation, commit, push or deployment occurred in this planning turn.
