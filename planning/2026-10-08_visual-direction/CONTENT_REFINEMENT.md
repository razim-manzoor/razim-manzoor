# Portrait preview: content refinement

2026-10-08. The user preferred the portrait composition and authorised refining the content inside its illustrations. This pass updates the standalone preview on port 3112. Main application integration remains the next stage.

## What changed

- Fourteen distinct HTML examples replace the repeated service-category SVG scenes. They show a services page, booking confirmation, project requests, assigned team requests, enquiry automation, mapped tool fields, a sourced answer, an approval step, extracted invoice fields, record validation, labelled reporting, exploratory analysis, a form improvement and a maintenance queue.
- Every example has an illustrative caption. Chart and analysis values explicitly say example data; no client identities, completed-project claims or results were invented. These are static visual demonstrations, with real enquiry actions outside the illustration.
- Each service has a concise outcome description. Existing titles, three initial deliverables, scope disclosures and planner actions remain. `data.json` is unchanged and byte-identical to its earlier preview origin.
- Delivery artwork now explains the agreed brief, build/review and handover. The planner shows a rough request becoming a goal, current situation and first step. Meaningful illustration text is exposed to accessibility tools.
- Shared window geometry aligns the desktop card illustrations; the small before/after action label was enlarged. Existing portrait, identity, green/Geist palette and finite motion are preserved. The alternative workflow comparison uses the same service examples.

## Evidence and checks

[Latest screenshots and measurements](mockups/screenshots/content-refinement/checks.json) are separate from the historical direction-selection captures. Twenty service captures cover all five categories at 1440px and 390px in both themes. Eight further captures cover delivery/planner at those widths and themes. Fifteen boundary checks cover all categories at 320px in both themes and 945px in light theme. Measured documents and illustration windows have no horizontal overflow.

These widths come from responsive iframe documents, because the earlier native viewport override was ineffective. The tall capture frame allows complete category evidence; ordinary desktop/phone heights were used for boundary checks. This is responsive-layout evidence, not physical-device testing.

Representative selection/copy testing combined website and automation services, retained the typed draft and both selections across audience and direction changes, and matched copied text to the generated draft. All four JavaScript source files pass syntax checks; all fourteen catalogue IDs have an example and outcome. No new dependencies or runtime changes were needed.

The [detector report](mockups/screenshots/content-refinement/detector.json) is retained with findings, not described as a clean pass. Its undersized functional-text findings prompted enlargement of narrow-screen comparison/audience controls. Remaining findings include 11px metadata, structural padding heuristics, retained Geist and shadows, and proposed palette/radius values outside the application's canonical system. The reported feature-paragraph contrast pairs feature text with the page background; browser inspection confirms that paragraph is actually on `#063d2f`, with text `#c3dece`. Review the outstanding findings alongside actual-app integration rather than silently changing the canonical identity to satisfy a detector.

An unattributed MutationObserver error appeared in the browser automation session. The prototype source does not use MutationObserver; its origin was not established. The tested paths completed. Full screen-reader, physical-device, performance and actual-application QA remain outside this refinement.

The earlier [finish review](FINISH_REVIEW.md) remains historical evidence for its original scored fixes; it does not certify this new content pass. This pass was checked by the implementing agent. Existing app QA debt remains in the [implementation record](../2026-10-07_visual-refresh/IMPLEMENTATION.md).

## Files and next stage

[examples.js](mockups/examples.js) owns the authored scenes and outcome copy; [examples.css](mockups/examples.css) owns their shared geometry. [preview.js](mockups/preview.js) renders each catalogue ID. The capture host accepts category/focus/tall options for local evidence only. Asset origins remain in [provenance.json](mockups/provenance.json).

Integrate the accepted portrait composition into existing application components, preserve the established journeys and estimator, verify the actual application, then update canonical product/design references. This pass does not change application source, architecture or hosting and includes no commit, push or deployment.
