# Skills, MCPs and resource research

Date checked: 2026-10-07
Status: Source-backed shortlist. Three reviewed Emil guidance skills subsequently installed; no runtime packages, MCP servers or subscriptions added. See the [current skill workflow](../../docs/SKILLS.md).

## Selection method

Inspect official maintainers' docs and source, then assess fit to this portfolio. Popularity is a discovery signal; it does not establish visual quality, accessibility or compatibility. These are current ecosystem resources, not a measured ranking of design trends. The recommendation to favour editorial composition is a design judgment grounded in this site's portrait, two audiences and lack of ready replacement work imagery.

## Local skills

| Skill | Verified availability | Role and recommendation |
| --- | --- | --- |
| Impeccable | Local entrypoint version 4.5.0; context launcher succeeded earlier in this session | Primary design guidance; preserve incumbent identity; review composition before implementation |
| Find Skills | Local file read; shared lock records vercel-labs/skills | Discovery; directory already identifies relevant installed skills, so no CLI install is needed |
| Workstation Skills | Local file read; local workstation policy | Provenance, staged updates and integration matching; leave upstream packages unchanged |
| Vercel React Best Practices | Local metadata 1.0.0; lock records vercel-labs/agent-skills | React/Next performance review during implementation; not an aesthetic recipe |
| Web Design Guidelines | Local metadata 1.0.0; lock records vercel-labs/agent-skills | Accessibility/interface review after edits; fetch current upstream guidelines when running review |
| shadcn | Local entrypoint/lock present; source shadcn-ui/ui | Conditional component tooling; no components.json exists in this project |
| Figma skills | Installed plugin 15.0.0 from session catalogue | Optional editable mockups; load the exact creation/design skills when that workflow is chosen |

Sources: [Impeccable maintainer](https://github.com/pbakaus/impeccable), [Vercel official skills](https://github.com/vercel-labs/agent-skills), [Skills directory](https://www.skills.sh/), [shadcn MCP docs](https://ui.shadcn.com/docs/mcp).

The directory displayed approximately 776.9K installs for [React Best Practices](https://www.skills.sh/vercel-labs/agent-skills/vercel-react-best-practices) and 707.6K for [Web Design Guidelines](https://www.skills.sh/vercel-labs/agent-skills/web-design-guidelines), with their source repository around 32K stars at lookup. Counts are dated discovery evidence, not reasons to update the installed skills.

Local SKILL.md SHA-256 fingerprints were checked for the five shared upstream entries. The lock contains folder hashes, not semantic versions for every package; a local fingerprint does not prove exact correspondence to a current upstream commit. No update or promotion was attempted.

## MCP and connector health

| Capability | Evidence in this session | Planned use |
| --- | --- | --- |
| Browser tools | Published site opened; hero and recruiter screenshots obtained in this conversation | Primary visual and flow verification; local port 3100 unavailable at lookup |
| Figma | Plugin search: installed/enabled; whoami read succeeded | Optional design review file; no file was created or modified |
| Vercel | Plugin search: installed/enabled; project-list reads succeeded | Future deployment verification; bounded project search/list did not match razim.work, so project association is unverified |
| 21st MCP | Official docs researched; no callable 21st tool exposed; plugin search returned no match | Optional discovery integration later; browser/source research suffices now |
| shadcn MCP | Official docs researched; no callable shadcn tool exposed; plugin search returned no match | Optional registry discovery later; not a blocker |

An exposed or enabled plugin is not proof of account/file access; Figma and Vercel were probed read-only. A missing match in plugin search is not proof that no MCP can be installed. MCP protocol/server versions were not exposed by these connector checks. Account identifiers and authentication material are deliberately excluded.

[21st MCP](https://21st.dev/mcp) documents catalog search, installation and sign-in. [shadcn MCP](https://ui.shadcn.com/docs/mcp) documents registry browsing/search/install and project registries in components.json. Neither should be added merely to make the site look current. No global configuration edits are proposed.

## Resource shortlist

| Resource | Useful material | Decision for this site | Caveat/source |
| --- | --- | --- | --- |
| Existing CSS, Motion and local primitives | Layout, portrait treatment, feedback | First choice for initial pass | Already installed; exact APIs inspected before edits |
| 21st.dev | Discover authored React layouts/components | Selective candidate discovery | Many authors/styles; review each source and license; [catalog](https://21st.dev/) |
| Tailark | Marketing composition and responsive section examples | Reference for hierarchy; possible selective code reuse | Free repo MIT; premium offerings separate; [source](https://github.com/tailark/blocks), [license](https://raw.githubusercontent.com/tailark/blocks/main/LICENCE.md) |
| Motion Primitives | Transitions built around Motion/Tailwind | Optional reference for one purposeful interaction | MIT repository; marked beta; site fetch returned 403, repo accessible; [source](https://github.com/ibelick/motion-primitives) |
| Magic UI | Existing reusable visual primitives | Reuse only if tied to real content; no animated-beam hero planned | Free source MIT; premium templates separate; [source](https://github.com/magicuidesign/magicui), [license](https://raw.githubusercontent.com/magicuidesign/magicui/main/LICENSE.md) |
| React Bits | Expressive animation references | Secondary inspiration; defer heavy effects | MIT plus Commons Clause conditions; not plain MIT; [source](https://github.com/davidHDev/react-bits), [license](https://raw.githubusercontent.com/davidHDev/react-bits/main/LICENSE.md) |
| Aceternity UI | Interaction/effect examples | Reference only in initial pass | Effect-heavy options can overwhelm this content; inspect exact item terms/dependencies; [official site](https://ui.aceternity.com/) |
| shadcn/Radix | Interactive primitives | Preserve existing primitives; consult for necessary controls | [shadcn](https://ui.shadcn.com/docs/mcp), [Radix accessibility](https://www.radix-ui.com/primitives/docs/overview/accessibility) |
| Awwwards portfolio gallery | Real portfolio composition references | Study image/type/spacing, not navigation gimmicks | Visual reference, not a source-code license or proof of accessibility; [gallery](https://www.awwwards.com/websites/portfolio/) |
| Realtime Colors | Visual palette exploration | Optional preview of existing tokens | Token values and calculated ratios in COLOR_PROFILE remain authoritative; [tool](https://www.realtimecolors.com/) |

React Bits' license permits use within applications/sites while adding restrictions on selling or redistributing the components themselves. Re-read the exact revision before copying; do not apply the portfolio's MIT license to third-party code indiscriminately.

## Adoption gate

For each exact component candidate: record the user need, preview, source revision, license/notice, dependencies, token mapping, keyboard/reduced-motion behavior and bundle cost. Compare with the simplest local implementation. Reject if its main benefit is a fashionable effect or if it requires an architecture/primitive-library change.

No exact third-party component has been approved or copied. Compatibility claims above describe ecosystem alignment, not a tested imported component. Paid resources, new credentials and integrations are not prerequisites for the recommended initial release.

## Follow-up: Emil Kowalski, Taste Skill and more direct sources

Checked 2026-10-07 following the user's request. These skills were researched from their maintainer repositories; their instructions were not installed or executed. The checked shared paths for emil-design-eng, taste-skill and ui-craft-motion are absent, and no project .agents/skills directory exists. The workstation note about legacy routing does not establish that those entrypoints are currently present.

| Candidate | Verified source and discovery signals | Recommendation |
| --- | --- | --- |
| Emil Kowalski: emil-design-eng | [Official source](https://github.com/emilkowalski/skills), approximately 44.1K repository stars; [directory](https://www.skills.sh/emilkowalski/skills/emil-design-eng), approximately 330.8K installs | Strongest additional complement for component feel, animation decisions, easing, interruption and responsive feedback |
| Emil: review-animations / pick-ui-library | [Maintainer README](https://raw.githubusercontent.com/emilkowalski/skills/main/README.md), [library-selection skill](https://raw.githubusercontent.com/emilkowalski/skills/main/skills/pick-ui-library/SKILL.md) | Targeted review/selection tools, invoked for the specific job; retain an existing suitable dependency |
| Taste Skill: design-taste-frontend | [Maintainer repository](https://github.com/Leonxlnx/taste-skill), approximately 93.4K stars; [directory](https://www.skills.sh/leonxlnx/taste-skill/design-taste-frontend), approximately 574.4K installs | Optional composition alternative when a more expressive redesign is wanted; do not layer a second complete design workflow over Impeccable |

Emil's skill focuses on judging whether motion belongs, choosing timing/easing and polishing component behavior. It complements the existing Motion implementation. Its sample code and general performance statements must still be verified against current library/browser behavior; a skill is not API documentation. Impeccable remains the primary overall design workflow under project instructions.

Taste Skill's current default is experimental v2, according to its README. Its source adapts layout variance, motion and density to the brief and preserves existing brand material; it also contains opinionated defaults and GSAP patterns. It is useful for an alternative visual exploration, but does not justify adding GSAP or replacing the current identity. A future installation must pin and review the chosen revision.

For reference only, the canonical selective install commands documented by the maintainers are: npx skills add emilkowalski/skills --skill emil-design-eng; npx skills add https://github.com/Leonxlnx/taste-skill --skill design-taste-frontend. These were not run. Follow the workstation staged-review procedure before promoting a selected skill; do not bulk-install every skill in either pack.

| Direct resource | Useful job | Site-specific judgment |
| --- | --- | --- |
| [Animate UI](https://animate-ui.com/docs) | Open React/Tailwind/Motion components, animated primitives and Lucide icons | Worth inspecting for selector/menu/disclosure transitions; choose exact items and preserve current semantics |
| [Kokonut UI](https://kokonutui.com/) | React/Tailwind/Motion components with live previews and copyable code | Additional component candidate source; choose controls over ambient effects; free and Pro offerings differ |
| [Motion Primitives](https://github.com/ibelick/motion-primitives) | Focused motion components | A more direct source than a broad catalog for restrained transition patterns |
| [Tailark](https://tailark.com/) | Marketing section composition | A more direct source for cohesive layout references |
| [Curated](https://curated.design/) | Real website design references | Explore portfolio composition and art direction; inspiration does not confer code/media reuse rights |
| [Lapa Ninja](https://www.lapa.ninja/) | Landing-page examples | Useful for heading/section/contact rhythm; do not transplant unrelated marketing claims |
| [Awwwards portfolios](https://www.awwwards.com/websites/portfolio/) | Portfolio examples | Review real image/type relationships while retaining practical navigation |

Origin UI currently redirects to coss ui, which describes a Base UI foundation. Do not assume old Origin UI guidance matches today's components or licensing, and do not replace the project's Radix primitives merely to adopt a candidate. Godly's page could not be verified by the browsing tool, so it is not a relied-upon reference here.

Recommended working set: Impeccable for overall composition; Emil's targeted guidance for interaction craft; existing CSS/Motion/Radix for implementation; Motion Primitives/Animate UI/Tailark as candidate sources; 21st.dev as an additional discovery catalog. This is a fit judgment, not a claim that any one resource is universally better.

## Subsequent skill organization

At the user's request on 2026-10-07, emil-design-eng, review-animations and pick-ui-library were staged, reviewed and promoted from official commit e8a175de22ae1e49370fc144c1f3bb9aeedf988d. All four upstream Markdown files, including review-animations/STANDARDS.md, match the pinned Git blobs and promoted SHA-256 hashes. The MIT notice and local provenance manifest are retained with the shared installation; upstream folders remain unchanged. Compatibility links were created through the existing safe sync script. These skills need no executable scripts, credentials or additional runtime dependencies.

The earlier availability and no-installation statements describe the research stage before this promotion. [docs/SKILLS.md](../../docs/SKILLS.md) is the current role map. Impeccable stays primary; Emil complements component craft; the two manual tools are invoked explicitly; Taste remains an uninstalled optional alternative. Sample APIs and categorical motion-performance heuristics require verification against the actual installed stack and accessibility behavior. No website UI or architecture change was made by this organization task.

## Broader freshness check: 2026-10-07

The earlier shortlist was researched from current official pages, but did not compare repository maintenance dates or comprehensively cover new releases. This follow-up broadens the comparison using maintainer announcements, the shadcn directory, GitHub REST repository/default-branch commit reads, and recent developer discussions. No single catalog establishes the best choice for this portfolio.

| Source | Latest observed default-branch commit (UTC) | Evidence and interpretation |
| --- | --- | --- |
| Motion Primitives | 2026-09-28 | [Pinned commit](https://github.com/ibelick/motion-primitives/commit/120f64f6ca60348e251f929e9c81f11ccbe45eda); recent commits concern deployment and links. This shows repository activity, not a new component or proof of production quality. README still marks the project beta. |
| Animate UI | 2025-12-31 | [Pinned commit](https://github.com/imskyleen/animate-ui/commit/efeb96ffd7a3b7a4868667e4ac3c346620fb3044); [published changelog](https://animate-ui.com/docs/changelog) ends 2025-12-15. Its 21st listing said updated 16 days ago, which does not establish upstream component freshness. Secondary reference pending exact-item review. |
| Tailark blocks | 2026-07-29 | [Pinned commit](https://github.com/tailark/blocks/commit/8139698115c1341bfd2e3e286c04bb4d8146f472); registry configuration changes. Remains a section-composition candidate. |
| Magic UI | 2026-10-05 | [Pinned commit](https://github.com/magicuidesign/magicui/commit/cdb348cb4c72a9b54b554d8617801e479fbc8714); sitemap/static-generation fix. Inspect selected components rather than inferring their freshness from this date. |
| React Bits | 2026-10-07 | [Pinned commit](https://github.com/DavidHDev/react-bits/commit/63a008de65732d73010bd219d25d15c47739bb31); October news follows a same-day component/docs update. Useful expressive candidate source, with the previously recorded license conditions. |
| SmoothUI | 2026-09-24 | [Pinned commit](https://github.com/educlopez/smoothui/commit/b6312bce2b6f2ed95d8a6e98a592857884f5ea9e); repository pushed_at is 2026-10-06, which differs from default-branch HEAD. [Maintainer documentation](https://smoothui.dev/) describes React/Tailwind/Motion components and blocks; a new comparison candidate. Accessibility claims still require component-level verification. |
| shadcn-animated | 2026-09-30 | [Pinned commit](https://github.com/sopo/shadcn-animated/commit/75df1e32319d63cdff2de04d5a5f52de6d1aa906); docs follow a same-day image-card feature. A [2026-09-28 community launch discussion](https://www.reddit.com/r/reactjs/comments/1ws8hkf/i_made_a_collection_of_animated_shadcnui/) led to the maintainer source. Early exploratory candidate rather than a default dependency. |

All seven repository metadata reads report archived=false. Dates are point-in-time observations; they do not measure support response, usage, releases, or the age of each component. GitHub license metadata lists MIT for Motion Primitives, Tailark, Magic UI, SmoothUI and shadcn-animated; that metadata does not replace review of the exact files. Animate UI's [pinned LICENSE.md](https://github.com/imskyleen/animate-ui/blob/efeb96ffd7a3b7a4868667e4ac3c346620fb3044/LICENSE.md) was read and specifies MIT plus Commons Clause conditions. No component was copied.

### Newly relevant maintainer offering

[Motion UI](https://motion.dev/ui) was [announced by Motion's maintainers on 2026-07-23](https://motion.dev/magazine/introducing-motion-ui). It supplies animated React sections and components themed through shadcn tokens, with shared motion configuration and maintainer-provided MotionScore grades. It is included in paid Motion+ and is a comparison option, not a purchase recommendation or a requirement. Neither membership access nor compatibility with this project's installed Motion version has been tested. Its performance grades are maintainer evidence, not a measured result on this portfolio.

### Selection workflow after this check

Use the official [shadcn registry directory](https://ui.shadcn.com/docs/directory) alongside [21st's motion catalog](https://21st.dev/community/libraries/s/motion) for broad discovery. The directory's experimental [registry health](https://ui.shadcn.com/docs/registry/health) checks availability, schema and sampled installation; its score explicitly does not measure design or code quality. Check GitHub source, relevant component history, issues and license after finding a candidate. Recent Reddit launch posts can surface new work but do not substantiate technical quality. Vendor-written rankings were treated as discovery leads, not independent evidence.

For this portfolio, compare focused interactions from Motion Primitives, SmoothUI and the optional Motion UI offering; compare section composition with Tailark; retain 21st as broader discovery. Animate UI remains a secondary source with the freshness/license qualifications above. Build a concrete component shortlist with previews and exact source revisions before importing code. The foundation-stack recommendation remains unchanged; this is a broader candidate search, not a runtime migration. No UI, dependencies, integrations or deployment changes occurred.
