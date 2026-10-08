---
name: Razim Manzoor portfolio
description: Green and Geist identity with an authentic portrait, illustrative interfaces and deep-green feature sections
colors:
  primary: "#047857"
  primary-hover: "#065f46"
  on-primary: "#ffffff"
  background: "#f8fafc"
  foreground: "#09090b"
  surface: "#ffffff"
  surface-hover: "#f1f5f9"
  border: "rgba(15, 23, 42, 0.08)"
  control-border: "#77869b"
  muted: "#526176"
  primary-glow: "rgba(5, 150, 105, 0.15)"
  dark-background: "#09090b"
  dark-foreground: "#f8fafc"
  dark-surface: "#121215"
  dark-surface-hover: "#1a1a20"
  dark-border: "rgba(255, 255, 255, 0.08)"
  dark-control-border: "#64748b"
  dark-muted: "#94a3b8"
  dark-accent: "#6ee7b7"
  dark-primary-glow: "rgba(16, 185, 129, 0.2)"
  feature: "#063d2f"
  feature-ink: "#f3faf6"
  feature-muted: "#c3dece"
  feature-border: "rgba(195,222,206,.3)"
  feature-action: "#a7f3d0"
  feature-action-hover: "#c5f4db"
  feature-secondary-hover: "#174f40"
  delivery-label: "#496b57"
  delivery-connection: "#9bdcb8"
  scene-field: "#e7f1eb"
  scene-paper: "#ffffff"
  scene-tint: "#eef5f0"
  scene-line: "#bacdc1"
  scene-mid: "#83b59a"
  scene-green: "#047857"
  scene-mint: "#a7f3d0"
  scene-ink: "#143c2b"
  dark-scene-field: "#132c23"
  dark-scene-paper: "#203b30"
  dark-scene-tint: "#294a3b"
  dark-scene-line: "#759987"
  dark-scene-mid: "#4e8a6a"
  dark-scene-green: "#a7f3d0"
  dark-scene-mint: "#143c2b"
  dark-scene-ink: "#edf8f1"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(64px, 7vw, 92px)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(30px, 3.55vw, 48px)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontSize: "21px"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontSize: "14px"
    fontWeight: 600
  hero-statement:
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "-0.025em"
  footer-signature:
    fontSize: "clamp(42px,7vw,84px)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.035em"
  scene-body:
    fontSize: "13px"
    lineHeight: 1.45
  scene-caption:
    fontSize: "11px"
  scene-display:
    fontSize: "20px"
    lineHeight: 1.2
    letterSpacing: "-0.02em"
rounded:
  control: "8px"
  action: "10px"
  frame: "12px"
  panel: "14px"
  feature: "16px"
  scene-small: "4px"
  scene-action: "5px"
  scene-window: "9px"
spacing:
  tight: "8px"
  related: "16px"
  grid: "24px"
  group: "24px"
  card-body: "26px"
  panel: "28px"
  layout: "40px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.action}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-feature:
    backgroundColor: "{colors.feature-action}"
    textColor: "{colors.feature}"
    rounded: "{rounded.action}"
    padding: "12px 20px"
  button-feature-hover:
    backgroundColor: "{colors.feature-action-hover}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.action}"
    padding: "12px 20px"
  input:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.control}"
    padding: "12px"
  service-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.panel}"
  service-card-body:
    padding: "26px"
  scene-window:
    backgroundColor: "{colors.scene-paper}"
    textColor: "{colors.scene-ink}"
    rounded: "{rounded.scene-window}"
  scene-action:
    backgroundColor: "{colors.scene-green}"
    textColor: "{colors.scene-mint}"
    rounded: "{rounded.scene-action}"
    padding: "9px 11px"
  chip:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.control}"
    padding: "8px 12px"
---

# Design System: Razim Manzoor portfolio

## Overview

**Creative North Star: "A personal professional portfolio with the care of an editorial layout"**

The existing identity gives a real person the first impression: Razim's name, authentic portrait and the connection between business understanding and practical development. Open text regions, restrained green emphasis and quiet functional panels create variation without changing the brand.

The accepted portrait direction extends that identity with geometric interface fragments, substantial illustrative service examples and deep-green delivery/contact passages. This document merges the implemented source on 2026-10-08 with the existing system. Current application captures and an independent visual finish disposition of ship are recorded in the [integration record](planning/2026-10-08_visual-direction/APP_INTEGRATION.md); release verification remains pending. CSS and rendered components are the implementation source of truth; reconcile this record when they change.

**Key Characteristics:**

- Authentic portrait and prominent personal identity.
- Green actions with neutral reading surfaces in both themes.
- Open section layouts mixed with compact functional panels.
- Static interface examples and contrasting deep-green feature sections.
- Optional detail and immediate state feedback.

## Colors

### Primary

The green primary fills actions and selected controls; primary-hover deepens the fill. The on-primary color carries text on those fills. Accent text uses primary in light mode and dark-accent in dark mode. Primary and on-primary remain the same in both themes.

Feature is the deep-green portrait ground, delivery passage and footer. Feature-ink and feature-muted keep text legible on that ground in both themes. Footer actions use the pale feature-action fill with feature text; their hover and secondary-hover treatments retain the same green family. Delivery panels deliberately retain light paper and scene-ink in both themes; delivery-label and delivery-connection support their explanatory labels and route.

### Neutral

Background and surface separate the page from functional panels. Surface-hover groups selections and supporting material. Foreground carries main text; muted carries explanatory copy. Border is a quiet divider; control-border gives form fields and delivery rules stronger definition. Dark-prefixed tokens replace the matching neutral roles under the root dark class. Primary-glow supports tap highlighting rather than a decorative halo.

Scene-field grounds the portrait fragments, service examples and brief artwork. Scene-paper, tint, line and mid establish their layered interface geometry; scene-green, mint and ink carry action-like marks and readable content. Every scene role has a dark-theme assignment. These illustrated surfaces describe capabilities; their sample figures do not represent client results.

**The Theme Role Rule.** Use the live semantic CSS variables for component colors so the light and dark assignments remain connected.

## Typography

Display and body use Geist through `next/font` in `app/layout.tsx`; Geist Mono is retained for numerical/code contexts rather than a competing display face. The hero name uses display, section titles use headline, service titles use title, and hero/section descriptions use body. The footer signature has its own fluid scale. Smaller supporting copy uses 14px; facts and captions use 12–13px. Numerical outputs use tabular figures.

At 760px and below the name becomes `clamp(36px, 10vw, 62px)`; at 350px and below it is 32px. The hero statement uses 28px, weight 600, line-height 1.18 and tracking -0.025em; mobile uses 26px. Long descriptions are constrained to 65ch. Headings balance text wrapping.

Illustration body and captions use the scene roles in frontmatter. Internal interface labels use 11–13px, with selected action labels at weight 550; these are static explanatory surfaces. Scene display becomes 23px on mobile, captions become 12px, and scene padding increases for reading. Service titles become 22px on mobile. Footer signature becomes 48px on mobile and 40px below 351px. These are component-specific responsive adaptations, not a new universal type scale.

**The One Family Rule.** Preserve Geist for the implemented identity; create hierarchy through size, weight, line length and whitespace.

## Layout

The shared container is capped at 1120px with 32px side margins; at 760px and below it uses 20px side margins. The fixed header is 76px tall, becoming 64px on mobile. The audience selector remains sticky immediately below it. Anchor targets reserve 10.5rem above their content, increasing to 12rem at 760px and below for the taller mobile audience bar.

Desktop hero uses 1.12fr/1fr columns with a 58px gap and 144px/64px top/bottom padding. Name and copy occupy the left column; the portrait stage spans both rows on the right. Its deep-green ground contains the authentic 3:4 portrait and two overlapping interface fragments. Mobile pairs the name with a 120px stage containing a smaller portrait and one fragment, then places copy across the full width; at 350px the stage becomes 102px. The portrait caption and second fragment are hidden on mobile. Actions stack.

Sections use 92px vertical padding, reduced to 56px on mobile. Heading/copy pairs use a 1.05fr/1fr grid; service cards use three columns and a 24px gap, two columns from 761px through 1100px and one below 761px. A final odd card spans both tablet columns with illustration and body side by side. The medium portrait fragment uses a fluid vertical position to clear its caption. Delivery has a connected brief/build/handover composition, then open three-column steps; mobile reflows the handover panel below the first two stages. Recruiter and planner regions use asymmetric two-column grids and stack on mobile. The estimate panel spans both planner columns and hides the brief illustration. Navigation switches to its menu below 1024px; Tailwind utility layouts also use 640px, 768px and 1024px breakpoints where declared.

## Elevation & Depth

The active page combines tonal surfaces and thin borders with restrained shadows on service cards, portrait fragments and the light delivery panels. Their exact shadow vocabulary lives in the sidecar; dark service cards use a stronger alpha. Global keyboard focus uses a background ring at 2px and a primary ring at 4px. Service-card focus-within adds an accent outline; delivery/footer focus uses a pale 2px outline with 4px offset. Keep these state treatments distinct from resting elevation. Retained frosted utilities and unrendered showcase styles are not the current composition's vocabulary.

**The Quiet Surface Rule.** Use open regions and hairline dividers alongside panels; do not turn every section into a card.

## Shapes

Controls and chips use gently curved corners; actions use a slightly fuller curve. The portrait frame, desktop fragments and audience group use frame rounding; service cards, brief art and planner use panel rounding. The green portrait ground uses feature rounding, with action rounding on mobile. Illustrated windows use scene-window rounding; small statuses and fields use scene-small and illustrated actions use scene-action. Service shells clip their illustration and carry no outer padding; bodies use 26px desktop and 24px mobile. Planner padding is 28px desktop and 20px mobile. The portrait is clipped to its frame with centered object-cover; retain the authentic source crop.

## Components

- **Actions:** primary and secondary use 48px minimum height, 14px semibold text and shared padding. Primary hover deepens green; secondary hover changes surface and border. Footer actions use the pale feature palette. Text actions and secondary links have 44px minimum height.
- **Navigation:** fixed opaque background, quiet divider and 44px icon controls. Mobile menu sits below the header with bounded scrolling. Escape closes it and returns focus; outside press, link selection and desktop resize dismiss it.
- **Audience selector:** three equal buttons with pressed state, a primary selection marker and 44px minimum height. It fills available mobile width. Marker movement is 220ms with cubic-bezier(.16, 1, .3, 1); focused selection updates immediately.
- **Filters/chips:** service filters use pressed state and a 48px minimum height; tool and role chips are compact supporting content. Do not infer interactive behavior from a static chip.
- **Service cards:** each of fourteen scopes has a distinct labelled static interface example, concise outcome, three deliverable lines, native scope disclosure and named planner link. Static examples contain no working controls. Cards stay still on hover; the enquiry arrow moves 3px for fine pointers and keyboard focus. Focus-within outlines the card. Selected services update the existing planner rather than replacing it.
- **Portrait and brief artwork:** original project-authored SVG interface fragments overlap the portrait ground; they are decorative and hidden from assistive technology. The planner's labelled rough-request-to-brief example uses readable HTML and disappears in estimate mode.
- **Delivery:** content is visible by default. Once 35% of the illustration intersects, connection lines expand from scale .4 and opacity .6, and the handover panel moves upward from 8px over 1.8 seconds; each runs once. All information remains visible without movement.
- **Fields:** persistent visible labels, at least 16px input text, control-border, background surface and accent caret. Optional fields and native checkboxes/radios retain their semantics. Global focus treatment applies.
- **Disclosures:** native details/summary controls expose optional content. Chevron rotation is 200ms; the content does not depend on a reveal animation.
- **Copy feedback:** the planner announces copying, success or failure, avoids stale copied status when message text changes, and offers a read-only manual-copy field after failure.

The portrait and service examples have no entrance animation. Delivery movement is enabled only for `prefers-reduced-motion: no-preference`. Reduced motion removes smooth scrolling, audience marker movement and action/disclosure/arrow transitions and transforms. `ThemeProvider` retains MotionConfig with user reduced-motion support. Motion was source-reviewed; static captures do not prove playback or a forced OS preference. Legacy spring presets are not a mandate for current CSS interactions.

## Do's and Don'ts

### Do:

- Do preserve the authentic portrait, green identity and Geist typography.
- Do use semantic theme variables and visible keyboard focus.
- Do keep optional detail in native disclosures and preserve mounted drafts.
- Do label static interface examples as illustrative and place real enquiry actions outside them.
- Do reduce movement without removing information or feedback.

### Don't:

- Don't substitute fabricated portraits, work evidence or performance claims.
- Don't add competing decorative animation around the portrait or make explanatory delivery motion perpetual.
- Don't promote unused legacy effects into the current design vocabulary.
- Don't treat proposal screenshots or source-only checks as a rendered application pass.
