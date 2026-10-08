# Technical requirements document

Date: 2026-10-07
Status: Original implementation specification; integrated locally on 2026-10-08. [IMPLEMENTATION](IMPLEMENTATION.md) records verification and remaining browser work. Root DESIGN.md and docs/ARCHITECTURE.md describe current source.

## Requirement mapping

| ID | Product IDs | Technical requirement | Likely files |
| --- | --- | --- | --- |
| T01 | P01, P08 | Responsive hero/portrait composition with real asset and reserved dimensions | HeroSection, globals.css |
| T02 | P02, P06 | Preserve URL navigation, sticky offsets, pressed states, focus and mobile menu | AudiencePageLayout, AudienceToggle, NavBar |
| T03 | P03 | Preserve mounted draft/selection state and service event contract | ServicesHub, TurnkeyStudio, lib/project-planner.ts |
| T04 | P04, P08 | Improve chronology styling without changing experience facts | RecruiterSnapshot |
| T05 | P05, P06 | Use semantic tokens; verify both themes and control states | globals.css, existing UI primitives |
| T06 | P09, P10 | One optional motion treatment using existing Motion/CSS | HeroSection or a small local presentational component |
| T07 | P07, P11 | Keep projects unrendered; gate future screenshots and claims | AudiencePageLayout, ProjectShowcase, lib/data.ts |
| T08 | P10 | Retain current metadata, assets, security headers and stack | app/layout.tsx, next.config.ts, contact helpers |

## Component work

Hero: refine the existing component instead of replacing it with a full template. Keep Next Image, priority for the hero asset, accurate sizes and a stable image box. Do not generate an altered likeness or crop away additional headroom. Any new frame component should remain presentational and accept the existing image/alt rather than duplicating personal data.

Services: keep the existing five-need selection, fourteen scopes, three visible deliverables, remaining-detail disclosure and service-to-planner action. Styling must not require a new catalogue model or extra decision screen.

Approach/recruiter: create layout variation through rules, alignment, type and whitespace. Chronological dates are content; section numbering solely for decoration is unnecessary. Preserve existing heading structure and source order.

Planner/navigation: visual refinements must not change validation, draft encoding, estimator semantics, URL rules, focus behavior or mounted state. Preserve the two pre-existing sticky-bar/CSS modifications and recheck their combined behavior after layout changes.

## Reusable code policy

Prefer existing components. Before copying a candidate, inspect its complete source, dependencies, license, accessibility, theme behavior and compatibility with React 19, Tailwind 4 and the installed Motion version. Pin the source revision in the asset register and retain required notices. Adapt tokens to this site.

There is no components.json in the current project. Existing local components use Radix and shadcn-like conventions, but registry CLI operations are not ready to run blindly. Stage candidate code in an isolated review location if necessary; do not overwrite local button, tabs or sheet APIs. Do not add a second animation package or change primitive libraries to match an imported example.

## Performance and resilience

Target zero new runtime dependencies for the initial pass. No background canvas, autoplay video, scroll-interception engine or continuous animation loop. Reuse current fonts first. If a font or component dependency is accepted, record its cost and compare the production output before and after.

Content stays visible if motion is disabled or delayed. Reduced motion removes movement but retains state feedback. Rendered image dimensions prevent layout shift. Only image assets that serve the selected design are delivered.

Proposed field objectives are LCP <= 2.5 s, INP <= 200 ms and CLS <= 0.1 at the 75th percentile, following [Core Web Vitals guidance](https://web.dev/articles/vitals). They are objectives, not measured results. Without real traffic data, use repeatable production lab checks and record that INP field compliance remains unverified. A material regression from the measured baseline blocks release even if a synthetic score appears acceptable.

## Acceptance and handoff

Run the checks and journeys in QA_PLAN. Attach screenshots and compare against the accepted visual example. Keep an explicit list of outstanding device/assistive-technology limitations.

After the user reviews this proposal, capture durable product facts in root PRODUCT.md using the Impeccable init confirmation workflow. After the visual example is accepted and implemented, record the actual design system in root DESIGN.md and its tool sidecar as required by the skill. Do not publish this proposed packet as if it were the implemented system.
