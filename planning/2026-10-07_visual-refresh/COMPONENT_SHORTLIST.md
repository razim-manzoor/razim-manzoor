# Component decisions for the visual preview

Date: 2026-10-08
Status: Source review and standalone preview complete; application adoption pending visual review.

The preview uses custom HTML/CSS/JavaScript and existing assets to establish the composition. It does not install a component pack or copy third-party component implementations. Production work should retain the current React components and their behavior wherever possible.

| Need | Reviewed reference | Decision |
| --- | --- | --- |
| Audience selection | [Motion Primitives animated tabs example](https://github.com/ibelick/motion-primitives/blob/120f64f6ca60348e251f929e9c81f11ccbe45eda/app/docs/animated-background/animated-tabs.tsx) | Adapt the selected-background idea to the existing URL-backed audience buttons. The preview uses a 220 ms CSS marker. Do not replace the application's navigation or state model. |
| Service and optional-detail disclosures | [Motion Primitives accordion source](https://github.com/ibelick/motion-primitives/blob/120f64f6ca60348e251f929e9c81f11ccbe45eda/components/core/accordion.tsx) | Retain native details/summary for the initial release. The reviewed source adds height/opacity transitions but would require a separate semantics review, including control/panel association. Animation alone does not justify replacing working controls. |
| Copy feedback | [SmoothUI ButtonCopy source](https://github.com/educlopez/smoothui/blob/b6312bce2b6f2ed95d8a6e98a592857884f5ea9e/packages/smoothui/components/button-copy/index.tsx) | Use clear success and failure feedback after the actual clipboard result. The preview does not reproduce the sample's artificial one-second loading delay or blur treatment. Keep a readable fallback draft. |
| Portrait, service hover and arrows | Existing CSS and installed Motion 13.4.4 | One restrained portrait entrance and small functional feedback are sufficient for this composition. Respect reduced motion. No additional motion dependency. |
| Navigation, controls and icons | Existing site primitives and Lucide 0.563.0 | Keep the established accessible links/buttons, theme controls and icon family. The preview contains generated Lucide SVGs and its license notice. |
| Decorative effects and new libraries | The broader alternatives in [RESEARCH](RESEARCH.md) | No effect selected from Magic UI, React Bits, Animate UI or a paid Motion UI asset for this pass. Revisit only when a specific accepted feature needs it. |

These links identify the exact reviewed snapshots, not a claim that these are the latest available commits on every future date. Repository activity and gallery listing dates are different signals. The broader freshness comparison was checked on 7 October 2026; these particular source files were read on 8 October.

Before importing an implementation, review its complete dependency path and applicable license at the selected revision, retain notices, map tokens, and check behavior against the installed versions. The animated-tabs example is a reviewed pattern reference; its underlying AnimatedBackground is not adopted or fully integration-tested here. No source-reference browsing grants a blanket reuse right.

The next implementation pass should prioritize the accepted composition: hero, section spacing, service surfaces, open delivery sequence, compact planner and recruiter chronology. Skills support those choices; adding more skills or components is not a deliverable by itself.
