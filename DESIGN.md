---
name: Razim Manzoor portfolio
description: Existing green and Geist identity with an editorial personal composition
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
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(64px, 7.4vw, 96px)"
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
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.375
  body:
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontSize: "14px"
    fontWeight: 600
rounded:
  control: "8px"
  action: "10px"
  frame: "12px"
  panel: "14px"
spacing:
  tight: "8px"
  related: "16px"
  grid: "20px"
  group: "24px"
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
    padding: "24px"
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

This document records the implemented source on 2026-10-08, extending the [approved direction](planning/2026-10-07_visual-refresh/DESIGN.md). It does not certify rendered quality. Current desktop/mobile captures and browser interaction review are outstanding; proposal captures are not implementation evidence. CSS and rendered components are the implementation source of truth; reconcile this record when they change.

**Key Characteristics:**

- Authentic portrait and prominent personal identity.
- Green actions with neutral reading surfaces in both themes.
- Open section layouts mixed with compact functional panels.
- Optional detail and immediate state feedback.

## Colors

### Primary

The green primary fills actions and selected controls; primary-hover deepens the fill. The on-primary color carries text on those fills. Accent text uses primary in light mode and dark-accent in dark mode. Primary and on-primary remain the same in both themes.

### Neutral

Background and surface separate the page from functional panels. Surface-hover groups selections and supporting material. Foreground carries main text; muted carries explanatory copy. Border is a quiet divider; control-border gives form fields and delivery rules stronger definition. Dark-prefixed tokens replace the matching neutral roles under the root dark class. Primary-glow supports tap highlighting rather than a decorative halo.

**The Theme Role Rule.** Use the live semantic CSS variables for component colors so the light and dark assignments remain connected.

## Typography

Display and body use Geist through `next/font` in `app/layout.tsx`; Geist Mono is retained for numerical/code contexts rather than a competing display face. The hero name uses the display token, section titles use headline, service titles use title, and hero/section descriptions use body. Smaller supporting copy uses 14px; facts and captions use 12–13px. Numerical outputs use tabular figures.

At 760px and below the name becomes `clamp(36px, 10vw, 62px)`; at 350px and below it is 32px. The hero statement uses 28px, weight 600, line-height 1.18 and tracking -0.025em; mobile uses 26px. Long descriptions are constrained to 65ch. Headings balance text wrapping.

**The One Family Rule.** Preserve Geist for the implemented identity; create hierarchy through size, weight, line length and whitespace.

## Layout

The shared container is capped at 1120px with 32px side margins; at 760px and below it uses 20px side margins. The fixed header is 76px tall, becoming 64px on mobile. The audience selector remains sticky immediately below it. Anchor targets reserve 10.5rem above their content, increasing to 12rem at 760px and below for the taller mobile audience bar.

Desktop hero uses 1.25fr/0.8fr columns with an 80px gap and 144px/64px top/bottom padding. Name and copy occupy the left column; the 3:4 portrait spans both rows on the right. Mobile pairs the name with a 120px portrait, then places the copy across the full width; at 350px the portrait becomes 102px. The portrait caption is hidden on mobile. Actions stack.

Sections use 92px vertical padding, reduced to 56px on mobile. Heading/copy pairs use a 1.05fr/1fr grid; service cards use three columns and a 20px gap, two columns below 1024px and one below 761px. Delivery steps use an open three-column layout and stack on mobile. Recruiter and planner regions use asymmetric two-column grids and stack on mobile. The estimate panel spans both planner columns. Navigation switches to its menu below 1024px; Tailwind utility layouts also use 640px, 768px and 1024px breakpoints where declared.

## Elevation & Depth

The active page uses tonal surfaces and thin borders rather than card shadows or frosted islands. Global keyboard focus uses a background ring at 2px and a primary ring at 4px. Keep this distinction between resting surfaces and focused controls. Retained legacy utilities and unrendered showcase styles are not the current composition's vocabulary.

**The Quiet Surface Rule.** Use open regions and hairline dividers alongside panels; do not turn every section into a card.

## Shapes

Controls and chips use gently curved corners; actions use a slightly fuller curve. The portrait frame and audience group use frame rounding; service cards and planner use panel rounding. Service cards use 24px padding, rising to 28px at the medium utility breakpoint. Planner padding is 28px desktop and 20px mobile. The portrait is clipped to its frame with centered object-cover; retain the authentic source crop.

## Components

- **Actions:** primary and secondary use 48px minimum height, 14px semibold text and shared padding. Primary hover deepens green; secondary hover changes surface and border. Text actions and secondary links have 44px minimum height.
- **Navigation:** fixed opaque background, quiet divider and 44px icon controls. Mobile menu sits below the header with bounded scrolling. Escape closes it and returns focus; outside press, link selection and desktop resize dismiss it.
- **Audience selector:** three equal buttons with pressed state, a primary selection marker and 44px minimum height. It fills available mobile width. Marker movement is 220ms with cubic-bezier(.16, 1, .3, 1); focused selection updates immediately.
- **Filters/chips:** service filters use pressed state and a 48px minimum height; tool and role chips are compact supporting content. Do not infer interactive behavior from a static chip.
- **Service cards:** display three examples, then a native scope disclosure and a named planner link. Fine-pointer hover lifts a card by 3px and moves the action arrow 3px. Focus-within gives immediate equivalent feedback. Selected services update the existing planner rather than replacing it.
- **Fields:** persistent visible labels, at least 16px input text, control-border, background surface and accent caret. Optional fields and native checkboxes/radios retain their semantics. Global focus treatment applies.
- **Disclosures:** native details/summary controls expose optional content. Chevron rotation is 200ms; the content does not depend on a reveal animation.
- **Copy feedback:** the planner announces copying, success or failure, avoids stale copied status when message text changes, and offers a read-only manual-copy field after failure.

The desktop portrait entrance begins visible at opacity .92, moves 8px and resolves in 480ms. It is only enabled above 760px when motion is allowed. Reduced motion removes portrait entrance, smooth scrolling, audience marker movement and service transforms; action/disclosure transitions are removed as well. `ThemeProvider` retains MotionConfig with user reduced-motion support. Legacy spring presets are not a mandate for the current CSS interactions.

## Do's and Don'ts

### Do:

- Do preserve the authentic portrait, green identity and Geist typography.
- Do use semantic theme variables and visible keyboard focus.
- Do keep optional detail in native disclosures and preserve mounted drafts.
- Do reduce movement without removing information or feedback.

### Don't:

- Don't substitute fabricated portraits, work evidence or performance claims.
- Don't add competing decorative animation around the portrait.
- Don't promote unused legacy effects into the current design vocabulary.
- Don't treat proposal screenshots or source-only checks as a rendered application pass.
