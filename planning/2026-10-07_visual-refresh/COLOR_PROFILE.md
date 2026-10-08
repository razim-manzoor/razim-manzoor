# Color profile

Date: 2026-10-07
Status: Existing CSS tokens verified; recommended to preserve for this refinement.

Source: app/globals.css. Hex values are sRGB. Alpha values describe compositing, not standalone opaque colors. No palette change is required to make the composition more distinctive.

## Semantic palette

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| background | #f8fafc | #09090b | Main canvas |
| foreground | #09090b | #f8fafc | Main text |
| primary | #047857 | #047857 | Filled primary actions |
| primary-hover | #065f46 | #065f46 | Primary-action hover |
| on-primary | #ffffff | #ffffff | Text on filled primary |
| accent | #047857 | #6ee7b7 | Accent text, icons and emphasis |
| surface | #ffffff | #121215 | Functional panels |
| surface-hover | #f1f5f9 | #1a1a20 | Interactive neutral regions |
| border | rgba(15,23,42,0.08) | rgba(255,255,255,0.08) | Decorative separators |
| control-border | #77869b | #64748b | Input boundaries |
| muted | #526176 | #94a3b8 | Secondary readable text |
| primary-glow | rgba(5,150,105,0.15) | rgba(16,185,129,0.2) | Existing optional token; no new glow treatment proposed |

Dark accent and primary are intentionally different: mint text is readable on the dark canvas while deep green supports white button labels. Do not substitute the filled-button green for small dark-theme accent text.

## Calculated contrast

Calculated from the opaque sRGB pairs using WCAG relative luminance; rounded to two decimals. These are token-pair calculations, not proof of every rendered state.

| Pair | Ratio | Intended criterion |
| --- | --- | --- |
| Light foreground / background | 19.02:1 | Normal text >= 4.5:1 |
| Light muted / background | 6.03:1 | Normal text >= 4.5:1 |
| Light accent / background | 5.24:1 | Normal text >= 4.5:1 |
| White / primary | 5.48:1 | Button text >= 4.5:1 |
| White / primary-hover | 7.68:1 | Button text >= 4.5:1 |
| Dark foreground / background | 19.02:1 | Normal text >= 4.5:1 |
| Dark muted / background | 7.76:1 | Normal text >= 4.5:1 |
| Dark accent / background | 13.05:1 | Normal text >= 4.5:1 |
| Dark muted / surface | 7.29:1 | Normal text >= 4.5:1 |
| Dark accent / surface | 12.27:1 | Normal text >= 4.5:1 |
| Light control-border / surface-hover | 3.38:1 | Relevant component boundary >= 3:1 |
| Dark control-border / surface-hover | 3.64:1 | Relevant component boundary >= 3:1 |

[WCAG text contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) distinguishes normal and large-text requirements. Also check non-text contrast for functional controls and focus indicators in the browser.

## Application rules

- Let neutral surfaces dominate; reserve green for actions, selected states, links and a few identity accents.
- Match typography and structure between themes rather than treating dark mode as an automatic inversion.
- Keep body text off imagery; the photo supplies visual character without becoming a text surface.
- Decorative border opacity is not sufficient for input boundaries. Use control-border where the boundary is necessary to identify the control.
- Selection and focus communicate state through shape/text as well as color.
- Check hover, pressed, focus and placeholder pairs on their actual backgrounds after implementation. Alpha layers, image backgrounds and opacity can change the effective ratio.

Any proposed new token must record both theme values, purpose and checked contrast here before being added to CSS. Do not add a second competing palette in a component or imported template.
