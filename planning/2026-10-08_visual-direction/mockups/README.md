# Two visual studies

2026-10-08. The user prefers A, portrait and panels. Its service examples and delivery/planner content are now refined; application integration is pending. The [brief](../MOCKUP_BRIEF.md) defines the original comparison, and the [finish review](../FINISH_REVIEW.md) owns its historical verdict. The final fix-list verdict was `ship`: three original findings and one introduced caption regression were resolved. That verdict covers the original scored fixes only. The [content refinement record](../CONTENT_REFINEMENT.md) describes the latest source and checks separately.

| Study | Composition | Responsive adaptation |
| --- | --- | --- |
| A: Portrait & panels | Dominant authentic portrait in a deep-green frame, two interface fragments, illustrated service panels; connected workflow in delivery. | Smaller portrait and one fragment beside the name, actions below; stacked service panels and wrapped workflow. |
| B: Workflow & rows | Smaller portrait beside the name, dominant request-to-result workflow, open service rows with separate illustration fields; open delivery sequence. | Name/portrait and actions first, workflow below, then stacked illustration/text rows. |

Compared with the [incumbent capture](../../2026-10-07_visual-refresh/implementation/current-ui-assessment.jpg), these studies add substantial illustrations and green feature/contact regions beyond the earlier text-and-portrait composition. [Desktop A](screenshots/portrait-desktop-light.jpg), [desktop B](screenshots/workflow-desktop-light.jpg), [945px A](screenshots/portrait-current-945-light.jpg) and [945px B](screenshots/workflow-current-945-light.jpg) support that comparison. This evidence belongs to the prototype.

## Open locally

From the repository root:

```powershell
python -m http.server 3112 --bind 127.0.0.1 --directory planning/2026-10-08_visual-direction/mockups
```

Open [portrait study](http://127.0.0.1:3112/index.html?direction=portrait), [workflow study](http://127.0.0.1:3112/index.html?direction=workflow), or the [phone review host](http://127.0.0.1:3112/review.html?device=phone&direction=portrait). The host provides Desktop (1440px), Phone (390px), Small phone (320px), and full-page controls. Inside the study, compare directions, themes and audiences, explore categories and disclosures, combine services, retain a draft and copy it. Contact links open external drafts only on activation; no external message was sent during verification. Stop the local server with Ctrl+C in its terminal (current session: 8977).

## Provisional visual vocabulary

Extracted from [base styles](style.css), [study styles](visual.css), [scene source](scenes.js), [markup](index.html) and [behavior](preview.js). These are prototype decisions, not additions to the canonical [DESIGN.md](../../../DESIGN.md) or [design sidecar](../../../.impeccable/design.json).

| Role | Observed treatment |
| --- | --- |
| Reading / action | Light background `#f8fafc`, ink `#09090b`, white surface; dark background `#09090b`, ink `#f8fafc`, surface `#121215`. Green action `#047857`, dark accent `#6ee7b7`. |
| Feature / illustration | Deep-green field `#063d2f`, feature ink `#f3faf6`, muted text `#c3dece`. Scene field `#e7f1eb`, paper `#fff`, line `#bacdc1`; dark scene field `#132c23`, paper `#203b30`, line `#759987`. |
| Type | Local Geist. A desktop name `clamp(64px,7vw,92px)`, B `clamp(48px,5.5vw,76px)`; phone names `clamp(36px,10vw,60px)`, 320px names 32px. Section headings `clamp(30px,3.55vw,48px)`, body 16px, service body 14px. |
| Space / shape | 1120px maximum reading container; desktop gutters 32px, phone gutters 20px, small phone gutters 16px. Service rhythm 24px, mobile section rhythm 56px. Rounded scenes/frames 12–16px; B rows use square outer edges and dividers. |
| Material / motion | Real photograph, original flat countable SVG/HTML scenes, tonal fields and soft shadows. Workflow connection/result reveal runs once for 1.8 seconds on intersection; no loop. OS reduced-motion rules and review checkbox disable animation/transitions and smooth scrolling. |

Keep honest example captions, a visible route into the result after wrapping, and clear portrait-caption space at medium widths. The final corrections restore those elements and move “Example workflow” beneath the diagram. They do not establish new global design rules.

## Provenance and evidence

Five original SVG scene families remain in scenes.js for decorative hero fragments and the alternative hero workflow. Fourteen distinct static HTML service demonstrations now live in examples.js and share geometry in examples.css. Delivery and planner scenes explain their sections; synthetic values carry example labels. These are original interfaces and geometric diagrams, not generated screenshots or adopted third-party components. Controls and data derive from the [earlier preview](../../2026-10-07_visual-refresh/preview/README.md). No packages were added; the [research](../RESEARCH.md) records reusable upstream source/license assessment, with no upstream component code imported. [provenance.json](provenance.json) records exact asset hashes: data, résumé, Geist font and notices are byte-identical to their stated origins. The portrait copy carries embedded origin metadata; its source file is unchanged. JPEG coding content matches the original after ignoring comment metadata; no pixel-decoding comparison was run.

The [capture folder](screenshots/) contains sixteen primary screenshots: A/B at 1440×1000 and 390×844 in both themes; four light full pages; two 945px light views; and recruiter light views at desktop/phone sizes. A seventeenth [wrapped-flow detail](screenshots/portrait-wrapped-flow-mobile-light.jpg) documents the final connection. [checks.json](screenshots/checks.json) records loaded assets/fonts and no horizontal overflow at 1440, 945, 390 and 320px. [interactions.json](screenshots/interactions.json) records category scenes, combined selections, retained drafts across direction/audience switches, matching clipboard content, theme changes, menu Escape/focus and finite/reduced-motion results.

The browser viewport override was ineffective, so captures and width measurements use responsive iframe documents. Scrollbars reduce their client width by 15px; the width records distinguish `inner`, `client` and `scroll`. These are responsive-layout proofs, not physical-phone/native-viewport testing. Captures use reduced motion for stability; motion evidence comes from the interaction record and source rules.

The prototype omits the application's actual estimator. It cannot certify real application routes, retained React state, contact fallbacks, accessibility or performance. Full application QA and the earlier application's outstanding review remain open in the [implementation record](../../2026-10-07_visual-refresh/IMPLEMENTATION.md). No canonical system, architecture, source UI or existing documentation drift was repaired, and no commit, publication or external message is part of this deliverable.
