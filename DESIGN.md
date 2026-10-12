---
name: Razim Manzoor portfolio
description: Green and Geist identity with an authentic vertical portrait, open ruled sections and deep-green delivery/contact
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
  editorial-name:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(56px,7.15vw,96px)"
    fontWeight: 550
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  editorial-headline:
    fontSize: "clamp(34px,4.2vw,56px)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  editorial-statement:
    fontSize: "clamp(30px,3.3vw,44px)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.03em"
  editorial-service-title:
    fontSize: "21px"
    fontWeight: 550
    lineHeight: 1.25
    letterSpacing: "-0.03em"
  editorial-contact-heading:
    fontSize: "clamp(40px,5vw,68px)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.03em"
rounded:
  control: "8px"
  action: "10px"
  frame: "12px"
  panel: "14px"
  feature: "16px"
  scene-small: "4px"
  scene-action: "5px"
  scene-window: "9px"
  editorial-action: "5px"
  editorial-scope: "4px"
  editorial-marker: "3px"
spacing:
  tight: "8px"
  related: "16px"
  grid: "24px"
  group: "24px"
  card-body: "26px"
  panel: "28px"
  layout: "40px"
  editorial-section: "88px"
  editorial-section-phone: "56px"
  editorial-service-block: "22px 0 16px"
  editorial-matte: "12px"
  editorial-matte-phone: "10px"
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
  editorial-action:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.editorial-action}"
    padding: "12px 20px"
  editorial-scope-action:
    textColor: "{colors.foreground}"
    rounded: "{rounded.editorial-scope}"
    padding: "9px 12px"
    height: "44px"
  editorial-scope-action-selected:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.primary}"
  editorial-service-row:
    textColor: "{colors.foreground}"
    padding: "{spacing.editorial-service-block}"
  editorial-career-row:
    textColor: "{colors.foreground}"
    padding: "24px 0"
  editorial-delivery-step:
    backgroundColor: "{colors.feature}"
    textColor: "{colors.feature-ink}"
  editorial-contact-link:
    backgroundColor: "{colors.feature}"
    textColor: "{colors.feature-ink}"
    padding: "25px 0"
---

# Design System: Razim Manzoor portfolio

## Overview

**Creative North Star: "A personal professional portfolio with the care of an editorial layout"**

The existing identity gives a real person the first impression: Razim's name, authentic portrait and the connection between business understanding and practical development. Open text regions, restrained green emphasis and quiet functional panels create variation without changing the brand.

The approved complete editorial direction is adopted in main source as of 2026-10-12: a centered vertical portrait, open ruled service/career regions, optional complete planner and deep-green delivery/contact passages. Fresh main captures and critical journey checks are recorded; independent finish review returned ship with no material findings; production publication remains pending in the [editorial integration record](planning/2026-10-12_editorial-integration/IMPLEMENTATION.md). The [preview direction contract](planning/2026-10-09_motion-direction/preview/README.md) remains the surface brief; its screenshots do not certify main. The [2026-10-08 integration](planning/2026-10-08_visual-direction/APP_INTEGRATION.md) records the earlier published composition.

This is a merge of the adopted vocabulary into the existing system. Existing palette, type, radius, spacing and illustration primitives remain available for maintained utilities and retained source. Editorial-prefixed roles describe the current home composition and override inherited roles there; they are not a new global identity. CSS and rendered components are implementation truth, and this document records source extraction rather than a new visual approval.

**Key Characteristics:**

- Authentic portrait and prominent personal identity.
- Green actions with neutral reading surfaces in both themes.
- Open ruled rows with compact optional controls.
- Contrasting deep-green delivery and contact sections.
- Optional detail and immediate state feedback.

## Colors

### Primary

The green primary fills actions and selected controls; primary-hover deepens the fill. The on-primary color carries text on those fills. Accent text uses primary in light mode and dark-accent in dark mode. Primary and on-primary remain the same in both themes.

Feature is the deep-green portrait matte, delivery passage and contact close. Feature-ink and feature-muted carry text and rules on that ground in both themes. The current contact destinations are open ruled links. Feature-action, feature-action-hover, feature-secondary-hover, delivery-label and delivery-connection remain from the earlier feature buttons and illustrated delivery component; they are not instructions to restore those shapes to the current page.

### Neutral

Background and surface separate the page from functional panels. Surface-hover groups selections and supporting material. Foreground carries main text; muted carries explanatory copy. Border is a quiet divider; control-border gives form fields and delivery rules stronger definition. Dark-prefixed tokens replace the matching neutral roles under the root dark class. Primary-glow supports tap highlighting rather than a decorative halo.

The scene roles and their dark assignments are preserved for retained portrait fragments, service examples and brief artwork. Those components are not rendered by the current editorial page. Their sample figures describe illustrative capabilities and must never be treated as client results. Editorial rows use the established foreground, muted, border, control-border and accent variables instead.

**The Theme Role Rule.** Use the live semantic CSS variables for component colors so the light and dark assignments remain connected.

## Typography

Display and body use Geist through `next/font` in `app/layout.tsx`; Geist Mono is retained for numerical/code contexts. The current name, section titles, proposition, service headings and contact close use the editorial roles in frontmatter. Inherited display/headline/title/hero-statement/footer-signature and scene roles remain documented primitives for retained components, not the current opening hierarchy. Numerical outputs use tabular figures.

Both existing font variables are defined on the root HTML element so Tailwind's root theme resolves them before inherited typography is applied; the body retains antialiasing. Main browser inspection now resolves Geist rather than the system fallback. This scope correction preserves the documented families, type roles and specimens; it introduces no font or token change.

At 1100px and below the editorial name uses `clamp(54px,7.2vw,78px)`. At 700px and below it uses `clamp(42px,11.8vw,74px)`, line-height 1.03 and a two-line name without the accent dot. The phone proposition is 30px, section titles 36px, service titles 20px and contact heading 44px. Opening body copy is 17px with a 48ch limit, becoming 15px on phones; section copy is bounded to 54ch. Scope copy uses 14px/1.75 with a 70ch limit, and supporting dates/location/captions use 11–14px according to context. These are observed component adaptations, not a replacement universal type scale.

**The One Family Rule.** Preserve Geist for the implemented identity; create hierarchy through size, weight, line length and whitespace.

## Layout

The editorial container is capped at 1200px with 48px gutters, 32px gutters at 1100px and below, and 20px gutters at 700px and below. The fixed header is 76px, becoming 64px at the phone breakpoint; the audience selector is sticky below it. Root scroll padding is 156px desktop/180px phone and target/control scroll margin is 20px. Retained utility CSS also uses 640px, 760px, 768px and 1024px rules; inspect both layers at intermediate widths rather than assuming one common breakpoint.

The opening has 130px top/32px bottom padding. Its name/location line precedes a 1.25fr/.75fr proposition/portrait grid with a 9% gap; at 1100px it becomes 1.2fr/.8fr with a 5% gap. The portrait cap is 344px desktop/320px medium/280px phone. It uses the original centered 4:5 presentation, a slim matte and an outside caption. At 700px the opening stacks with copy/actions before a centered photograph, uses 104px top/24px bottom padding and retains the opening location only beside the name.

Sections use editorial-section spacing, with editorial-section-phone below 701px. Heading/copy pairs use 1.15fr/1fr and an 8% gap. Categories occupy a 29% sidebar with a 7% gap; ruled service rows occupy the remaining column. On phones categories wrap into compact buttons above the rows. Career and planner layouts use .8fr/1.2fr with a 9% gap; phone layouts stack. Career date/detail rows use 110px plus flexible copy with a 22px gap, stacking at 1100px. Delivery steps and handover guarantees use three columns, stacking on phones. The estimator remains inside the planner with its controls/results in one column. Contact destinations use two columns and stack on phones.

## Elevation & Depth

The editorial home is flat at rest: thin rules, open whitespace and tonal selected controls carry hierarchy. Its planner shell is transparent without an outer border, rounding, padding or shadow; individual fields/results retain their maintained treatments. Global keyboard focus uses a background ring at 2px and a primary ring at 4px; delivery/contact links add a pale 2px outline with 5px offset. Existing service-card, fragment and delivery-panel shadow values remain in the sidecar as retained vocabulary, not active resting elevation for editorial rows. Retained frosted utilities and the unrendered showcase do not define this composition.

**The Quiet Surface Rule.** Use open regions and hairline dividers alongside panels; do not turn every section into a card.

## Shapes

Editorial actions and audience group use modest rounding (editorial-action); the audience marker uses editorial-marker and scope actions use editorial-scope. The portrait matte, service/career rows, selection summary and delivery/contact rules remain square. Fields retain control rounding, and toolkit/utility chips retain their own inherited treatment. Existing frame/panel/feature and illustration rounding remains for retained source; it does not restore a rounded outer planner or portrait stage. The portrait uses centered object-cover within its 4:5 display and preserves the original image asset; framing cannot recover pixels absent from the source.

## Components

- **Actions:** primary and secondary retain 48px minimum height, 14px semibold text and shared padding with editorial-action rounding. Primary hover deepens green; secondary hover changes surface and border. Underlined editorial text links have 44px minimum height and restrained arrow feedback for fine pointers.
- **Navigation:** fixed opaque background, quiet divider and 44px icon controls. Mobile menu sits below the header with bounded scrolling. Escape closes it and returns focus; outside press, link selection and desktop resize dismiss it.
- **Audience selector:** three equal buttons with pressed state, a primary selection marker and 44px minimum height. It fills available mobile width. Marker movement is 220ms with cubic-bezier(.16, 1, .3, 1); focused selection updates immediately.
- **Categories:** vertical pressed-state choices use 58px minimum height and a fine accent rule; phone choices wrap with a 44px minimum. Tool and role labels are supporting content, not controls.
- **Service rows:** fourteen stable scopes use title/outcome, native scope/deliverable disclosure and a named Add/Remove button with a 44px minimum height. On phones the visible button label becomes an icon while its accessible name retains the action and scope. Selected titles and buttons use the accent; the brief count is numerical, removals are labelled and status feedback is announced. Catalogue and planner share one selected-service state.
- **Portrait:** original photograph in a square matte with outside caption, centered on phones. No interface fragments or brief artwork are rendered in the editorial page. Real work examples remain deferred; retained illustrative source is historical vocabulary.
- **Career rows:** open dates/details with native responsibilities and certificate disclosures; the résumé/contact summary remains alongside the history on desktop and stacks on phones.
- **Delivery:** three numbered steps keep their copy visible. Once 30% of the list intersects, desktop rules grow from scale .06 to 1 over 650ms with 160ms step delays, once. Phone and reduced-motion rules show their final form.
- **Contact:** two large ruled WhatsApp/email destinations on deep green, with supporting call/LinkedIn/background/services/top links. Destination detail wraps when needed; hover arrows move 3px right/up for fine pointers.
- **Fields:** persistent visible labels, at least 16px input text, control-border, background surface and accent caret. Optional fields and native checkboxes/radios retain their semantics. Global focus treatment applies.
- **Disclosures:** native details/summary controls expose optional content. Chevron rotation is 200ms; the content does not depend on a reveal animation.
- **Copy feedback:** the planner announces copying, success or failure, avoids stale copied status when message text changes, and offers a read-only manual-copy field after failure.

Opening motion is finite: name translates from -16px over 720ms; portrait assembles from 14px below and an 8% bottom clip over 780ms; signature words arrive over 720ms with 60ms increments, and rules expand from scale .08 over 780ms. It does not replay on audience change. Category movement is 200ms; audience content arrives 7px upward over 220ms. The existing audience marker is 220ms. Keyboard mode removes audience arrival, uses immediate audience scrolling and disables category/selection layout movement through MotionConfig; it also removes link/chevron transitions. Reduced motion removes transitions, entrance transforms/clipping, animated rules and smooth scrolling while preserving information. The root ThemeProvider and local MotionConfig retain user preference handling. Current main captures and finite opening-property samples now support the implementation record; independent finish review returned ship with no material findings, and forced OS reduced-motion remains a separate unperformed check. There are no production replay or QA-copy controls. Legacy spring presets and earlier 1.8-second illustrated delivery motion are not current editorial instructions.

## Do's and Don'ts

### Do:

- Do preserve the authentic portrait, green identity and Geist typography.
- Do use semantic theme variables and visible keyboard focus.
- Do keep optional detail in native disclosures and preserve mounted drafts.
- Do keep the portrait/caption centered on phones and the opening location beside the name.
- Do retain scope names in accessible Add/Remove labels when the phone button becomes icon-only.
- Do label retained static examples as illustrative if they are used again.
- Do reduce movement without removing information or feedback.

### Don't:

- Don't substitute fabricated portraits, work evidence or performance claims.
- Don't make opening or delivery motion perpetual or add production replay controls.
- Don't promote unused legacy effects into the current design vocabulary.
- Don't treat proposal screenshots or source-only checks as a rendered application pass.
