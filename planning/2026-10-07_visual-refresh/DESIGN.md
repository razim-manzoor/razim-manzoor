# Proposed visual direction

Date: 2026-10-07
Status: Proposal for review, not a shipped design system.

## Intent

A personal professional portfolio with the care of an editorial layout: a real face, strong typography, purposeful whitespace, and a clear path to the work. Inherit the current green identity, theme support, content and navigation. This is an extension of the existing visual system, not a rebrand.

The opening should be remembered as Razim's portrait and name, and his connection between business understanding and practical development. A technical animation should not become the subject of the page.

## Section treatment

| Area | Proposed change | What it accomplishes |
| --- | --- | --- |
| Navigation | Refine alignment, spacing and active/focus details within the existing structure | Calm entry; contact and résumé remain easy to find |
| Hero | Compose name, message and portrait as one balanced spread; use available photo space carefully | Personal character and stronger visual hierarchy |
| Audience bar | Keep the existing three choices and local sticky behavior; reduce visual competition | Visitors understand the two paths immediately |
| Services | Retain approved cards, deliverables and disclosures; improve heading/CTA alignment and whitespace | Better scanning without another catalogue rethink |
| Approach | Use an open three-stage layout with crisp connecting rules; stack naturally on mobile | A change of pace and a meaningful sequence |
| Recruiter view | Make dates, employer/role and evidence read as a clear timeline or aligned chronology | Professional history becomes easier to scan |
| Planner | Keep its functional surfaces compact and quieter than the hero | The visitor can finish the task without decorative distraction |
| Toolkit/footer | Preserve progressive disclosure; give the contact close strong typographic emphasis | A concise end and obvious next action |
| Work proof, later | Large real screenshot with a short contribution/result caption | Concrete evidence once assets are ready |

## Hero composition to review

Desktop: use the existing two-column content/portrait relationship, with shared alignment and a deliberate balance between image size and the name. Keep the current short message and contact choices. Avoid adding floating tool badges, fake windows, diagram nodes or extra promotional labels around the face.

Mobile: identity, brief introduction and action remain in a sensible reading order; the portrait should feel included without making the first contact action excessively distant. Compare the complete first viewport at 390 px and the document at 320 px. Do not place copy over the photograph.

The current image has a tight crop. The layout cannot restore pixels absent from the source. Fit the real image naturally; any request for a new portrait is optional, not a prerequisite.

## Typography and spacing

Start with the existing Geist family. Distinction should first come from composition, scale, weight and rhythm. Keep monospace for actual code or numerical material. A font replacement is a review option only after comparing the same real copy, both themes and mobile line breaks.

Proposed working values: body 16–18 px with 1.5–1.7 line height; display 40–88 px responsive; section headings 28–48 px. Keep display tracking at or above -0.04em and avoid forcing uppercase onto long section headings. These are prototype ranges, not new tokens already applied.

Use an 8 px spacing rhythm with optical exceptions. Related items sit close; section transitions receive more space. Keep card radii in the existing 12–16 px range. Open text regions and hairline rules should provide variety; do not turn every region into another rounded panel.

## Motion and feedback

Retain the useful card/arrow feedback already present. If stage 1 supports it, add one short portrait reveal or restrained image-frame transition, approximately 350–550 ms, starting from visible content. New content must never rely on a delayed reveal to become readable.

Use existing Motion or CSS. No looping ambient background, scroll hijacking, cursor replacement, typewriter headline, floating icon cloud or WebGL scene is proposed. Reduced-motion mode removes the reveal and movement without removing information. Focus should be at least as clear as hover.

The later discussion clarified that the desired scope is a coordinated component-and-motion pass, beyond hero spacing. The single signature treatment limit applies to expressive decoration; useful small transitions can be considered throughout navigation, the mobile menu, audience selection, catalogue filtering, disclosures, selection chips, fields and copy confirmation. Each transition must serve a state change, preserve focus and mounted drafts, and remain responsive under repeated input. Exact effects are candidates for the concrete visual review, not an instruction to animate every component.

## Review criteria

The design works when the portrait, hierarchy and content relationships look authored for this person; the service catalogue remains useful; the recruiter view reads quickly; and the page has distinct but coherent rhythms. Reject a component whose strongest justification is that it is popular or animated.

Colors and contrast belong to COLOR_PROFILE. Interaction behavior belongs to USER_FLOWS. Final composition is still to be reviewed; no new visual-world setting is considered approved by this document.
