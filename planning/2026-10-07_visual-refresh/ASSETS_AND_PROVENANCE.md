# Assets and provenance

Date: 2026-10-07
Status: Baseline register and future intake requirements.

## Existing assets

| Asset | Source/status | Use in this refinement |
| --- | --- | --- |
| public/profilepic.jpeg | Existing user-provided portrait; current Git commit updates portrait | Keep authentic; refine its frame/composition without altering likeness |
| public/Razim_Manzoor_MBA_AI_Analytics.pdf | Current RESUME_URL target | Preserve path and download affordances |
| lib/data.ts professional history | Existing professional content | Preserve facts; existing metrics are not independently authenticated |
| lib/services.ts catalogue | Current five needs/fourteen scopes | Preserve scope and descriptions |
| ProjectShowcase and project data | Retained but not rendered | Do not enable until replacement evidence is approved |
| Geist/Geist Mono | Existing next/font configuration | First choice; no new font purchase or download needed |
| lucide-react icons | Installed shared icon library | Keep consistent icon strokes and meaningful labels |

No ready-to-publish replacement project screenshots were identified in the scoped public asset inventory. This does not establish that none exist elsewhere; no private project folders or vault content were searched for public export.

## Project proof intake

Each replacement case study needs: title; actual problem; Razim's contribution; screenshot of real work cleared for public display; supported result or a factual description of functionality; working destination if published; relevant role/technology context; and any client permission required for that specific material.

If numerical impact cannot be substantiated, use a concrete functionality/contribution description. Remove personal/customer records and credentials from screenshots. Do not show fake users, dashboards or customer logos as shipped work. Demonstration material must be explicitly described as a demonstration and requires separate approval before public use.

## New source register template

| Field | Required record |
| --- | --- |
| Asset/component name | Human-readable name and destination path |
| Origin | Official source URL or user-provided asset reference |
| Revision | Commit SHA/tag or download date and checksum |
| License | Exact applicable license and retained notices |
| Changes | Crop, compression, code adaptation, token mapping |
| Dependencies | Runtime packages and version constraints |
| Validation | Theme, responsive, keyboard/motion and performance evidence |
| Publication state | Candidate, approved, shipped, retired |

No code or media was imported during the initial research. Browsing a gallery does not grant reuse rights. Existing Magic UI-named local files should not be assumed to match today's upstream source; inspect their provenance before substantial reuse.

## Standalone preview register, 2026-10-08

All destinations below are inside `preview/`. Publication state: local visual proposal, not shipped. Third-party component implementations were not imported; the [shortlist](COMPONENT_SHORTLIST.md) records source patterns inspected.

| Destination | Origin and change | Notice/validation |
| --- | --- | --- |
| assets/portrait.jpeg | Byte copy of public/profilepic.jpeg; CSS composition only | User-provided existing asset; byte identity checked, browser loaded |
| assets/resume.pdf | Byte copy of public/Razim_Manzoor_MBA_AI_Analytics.pdf | Existing public résumé; byte identity checked |
| assets/geist-latin.woff2 | Current cached Latin Geist file, .next/static/media/caa3a2e1cccd8315-s.p.0wgildi0cnwt9.woff2; no font modification | SIL OFL notice retained in assets/OFL-Geist.txt from [Google Fonts Geist](https://github.com/google/fonts/blob/main/ofl/geist/OFL.txt), retrieved 2026-10-08; byte identity and browser load checked |
| data.json icon SVGs | Generated from installed lucide-react 0.563.0; 20 px with 1.7 stroke width and aria-hidden | Installed license copied to assets/LICENSE-Lucide; UI controls have text or accessible names |
| data.json profile/catalogue | Selected public fields from lib/data.ts and lib/services.ts | Five categories/fourteen scopes; no hidden project records or private vault content |
| screenshots/*.jpg | Local browser captures of the proposal | Responsive/theme evidence; not fabricated project proof |

The preview font and SVG notices remain with their files. They are not replacements for a future component's license review. The data builder uses existing installed React/React DOM/Lucide tooling; the saved browser preview does not add application dependencies.

## Document delivery

The 8 October application integration retained the existing public portrait/résumé and next/font configuration. It did not ship the standalone preview's duplicated assets or import the researched component implementations. Current UI refinements are local source edits with no new runtime dependency. Publication and browser approval remain outstanding in [IMPLEMENTATION](IMPLEMENTATION.md).

Keep this planning packet and source notices as repository documentation. Keep .brain private. Do not publish connector account details, credentials, private screenshots or unrelated personal notes. Future commits must include only deliberate, reviewable files; four unrelated prior planning reports and two existing source changes are part of the current working-tree baseline, not automatically part of this planning deliverable.
