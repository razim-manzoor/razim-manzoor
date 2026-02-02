# Business Requirements Document (BRD)
**Project:** Personal Portfolio Website
**Date:** 2026-02-02
**Status:** Draft / Requirements Gathering

## 1. Executive Summary
### 1.1 Project Objective
To create a premium, high-impact personal portfolio website that effectively showcases professional experience, skills, and projects. The website will serve as a central hub for personal branding, primarily targeting recruiters and potential employers in the Business Analysis and Operational Excellence domains.

### 1.2 Value Proposition
- **For Recruiters:** Quick access to resume, skills matrix, and project case studies.
- **For the Owner:** Control over personal narrative, enhanced discoverability (SEO), and a platform to demonstrate technical and analytical capabilities.

## 2. Target Audience & Personas
### 2.1 Primary Persona: The Recruiter / Hiring Manager
- **Goals:** Quickly verify qualifications, assess cultural fit, view concrete examples of work.
- **Pain Points:** Time-constrained, reviewing hundreds of candidates.
- **Requirement:** Information must be structured, scannable, and visually professional.

### 2.2 Secondary Persona: Professional Peers / Network
- **Goals:** Networking, referencing industry insights (if blog is included).

## 3. Functional Requirements
### 3.1 Core Modules
- **Homepage:**
    - **Hero:** "Razim Manzoor - Business Analyst | AI Strategist | Automation Specialist". Call to Action: "Download Resume" / "View Projects".
    - **Value Prop:** "Bridging the gap between technical data solutions and business goals."
- **About Me:**
    - **Bio:** MBA-qualified Strategist focusing on Digital Transformation. Experience with Power Automate, GenAI (RAG), and BI Dashboards.
    - **Key Stats:**
        - **Nationality:** Indian
        - **Visa Status:** Visit Visa (Available Immediately)
        - **Contact:** +971 50 300 1697 | manzoorrazim@gmail.com
- **Interactive Resume (Timeline):**
    - **Education:** MBA (Data Science & Analytics) from JAIN University (2021-2023).
    - **Experience:**
        - **Luminar Technolab (Intern):** 15% revenue growth via market segmentation.
        - **Resemble Systems (Assoc. Engineer):** 45% reduction in manual entry via Power Automate.
- **Portfolio / Case Studies:**
    - **LiquidityAI:** Automated AR Engine (Python, Zero-Touch, 80% effort reduction).
    - **Secure Document Agent:** Local RAG with DeepSeek & Ollama (Privacy-focused).
    - **Automated QC System:** CNN for image classification.
- **Skills Matrix:**
    - **Business:** Strategic Planning, ROI Assessment, Stakeholder Management.
    - **AI/Tech:** GenAI, RAG, Power BI (DAX), Python, SQL, Azure.
- **Certifications:** KPMG Virtual Internship, Google Advanced Data Analytics.

### 3.2 User Experience (UX)
- **Navigation:** Simple, sticky navigation bar.
- **Interactivity:** Subtle animations (hover effects, scroll reveals) to demonstrate "Dynamic" design requirement.
- **Downloadable Assets:** Easy access to PDF Resume.

## 4. Non-Functional Requirements
### 4.1 Performance
- Load time < 2 seconds on 4G networks.
- 90+ Lighthouse Performance Score.

### 4.2 Responsiveness
- Mobile-first design; flawless rendering on Mobile, Tablet, and Desktop.

### 4.3 SEO
- SEO-friendly URL structure.
- Open Graph metadata for social sharing (LinkedIn previews).

### 4.4 Aesthetics - Trends 2026
- **Style:** Modern Minimalism with a Twist (Clean layouts with bold accents).
- **Core Visuals:**
    - **Micro-animations:** Subtle movements (scroll-triggered reveals) to guide attention.
    - **Typography:** Large, expressive typography for headers (e.g., "Operational Excellence").
    - **Color:** "Dopamine colors" (vibrant accents) against a clean/dark background.
    - **Theme:** Dark Mode preferred for "Premium" feel.
- **Inspiration:** "Glassmorphism" elements for cards/modals.

## 5. Technical Constraints & Assumptions
- **Hosting:** Vercel (Optimized for Next.js).
- **Tech Stack:** Next.js (React Framework) for performance and scalability.
- **Content Source:** Extracted from LaTeX resume files (`r:/Projects/Resume/custom.tex` as primary source).
