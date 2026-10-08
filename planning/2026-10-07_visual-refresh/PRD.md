# Product requirements document

Date: 2026-10-07
Status: Proposed visual refinement; current behavior verified against source.

## Problem and outcome

The site clearly describes Razim's services and background, but its visual presentation carries less personal character than its content. Improve the first impression and scrolling experience while keeping it easy for clients to start a project conversation and hiring teams to assess fit.

Success means a visitor can identify Razim, understand his work, find the relevant path, and contact him or download his résumé without needing to decode decorative interfaces. Visual distinction must come from composition, genuine photography, useful work evidence and careful detail.

## People and product truth

| Audience | Situation | Job to complete |
| --- | --- | --- |
| Potential client | Has a business problem, product idea, or existing system | Understand services, select relevant scope or describe the problem, start a conversation |
| Recruiter/hiring manager | Evaluates suitability and availability quickly | Scan experience, education and roles, download résumé, contact Razim |
| Visitor exploring both | Wants broader context | Switch between views without losing work or navigation context |

Current positioning combines business understanding and hands-on development of websites, applications, AI tools, automation and dashboards. The site supports junior and associate opportunities; visual polish must not change factual seniority or fabricate enterprise credibility.

Current capabilities: five business needs, fourteen service scopes, a goal-led optional planner, an illustrative time-value estimator, professional history, education, toolkit disclosure, WhatsApp/email links, résumé PDF and theme choice. Both audience views stay mounted to retain state. Projects remain hidden until replacement evidence is ready.

## Requirements

| ID | Priority | Requirement | Acceptance |
| --- | --- | --- | --- |
| P01 | Must | Personal, distinctive opening | Portrait and identity remain the focal material; existing introduction and CTAs are visible |
| P02 | Must | Clear client and hiring routes | Both paths available in the opening; selector remains understandable and keyboard operable |
| P03 | Must | Retain enquiry behavior | Service selection, deduplication, removal, optional fields and retained notes work as before |
| P04 | Must | Preserve recruiter truth | Background, qualifications, junior-friendly positioning and résumé destination remain intact |
| P05 | Must | Coherent themes and responsive layout | Light/dark and narrow/intermediate/wide screens are deliberately composed with no clipped content |
| P06 | Must | Accessible interactions | Visible focus, labels, contrast, reduced motion, Escape and focus handling pass targeted checks |
| P07 | Must | Honest evidence | No fabricated projects, customer logos, testimonials or metrics; hidden showcase stays hidden |
| P08 | Should | Varied section rhythm | Hero, service choices, process, background and contact have purposeful differences in composition |
| P09 | Should | Restrained motion | At most one newly authored signature treatment; content remains visible without animation |
| P10 | Must | Preserve architecture and performance | No new backend or animation engine; fresh production comparison shows no material regression |
| P11 | Later | Show real work | Only publish approved replacement screenshots with contribution and supported results |

## Scope and boundaries

In scope: visual hierarchy, portrait treatment, spacing, type scale/weight, section surfaces, borders, responsive composition, focus/hover feedback, and a restrained motion treatment. Current copy is the default; any factual or positioning rewrite requires separate review.

Outside scope: CMS, contact submission backend, analytics/tracking, hosting migration, commercial purchases, new public claims, new routes, and enabling the old showcase. A project-proof release is separately gated by ASSETS_AND_PROVENANCE.

## Evaluation

Use the acceptance matrix in QA_PLAN rather than inventing conversion targets. Ask a first-time reviewer to identify the person's work and locate both contact paths after a short look; this is a qualitative check, not a measured conversion claim. Evaluate the hero alongside the existing site at desktop and mobile size. The user decides whether the result feels personal and avoids a generic AI template.

No audience priority change is assumed. Retain the current default client view while exposing the hiring path equally clearly in the shared opening.
