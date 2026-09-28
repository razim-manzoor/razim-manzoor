export interface ServiceDeliverable {
  title: string;
  tagline: string;
  description: string;
  scopeType: "Fixed Milestone" | "Sprint" | "Monthly Retainer" | "Turnkey";
  tech: string[];
  deliverables: string[];
  businessImpact: string;
}

export interface ServicePillar {
  id: string;
  title: string;
  shortTitle: string;
  summary: string;
  iconName: string;
  items: ServiceDeliverable[];
}

export interface HandoverGuarantee {
  title: string;
  description: string;
  iconName: string;
}

export const HANDOVER_GUARANTEES: HandoverGuarantee[] = [
  {
    title: "14-Day Defect Warranty",
    description: "Complimentary post-launch rectification window for any software defects, regression errors, or broken configurations directly within delivered code.",
    iconName: "ShieldCheck",
  },
  {
    title: "100% IP & Asset Vesting",
    description: "Full transfer of GitHub repositories, Vercel/Cloudflare production deployments, DNS delegations, and API credentials upon project sign-off.",
    iconName: "KeyRound",
  },
  {
    title: "Operational Runbooks",
    description: "Comprehensive system architecture documentation, environment variable guides, and video runbooks so your internal team can operate independently.",
    iconName: "BookOpenCheck",
  },
];

export const SERVICES_CATALOG: ServicePillar[] = [
  {
    id: "ai-systems",
    title: "AI & Intelligent Systems",
    shortTitle: "AI & RAG",
    summary: "Autonomous conversational assistants, local private models, and unstructured document extraction engines built on robust vector databases and LLM orchestration.",
    iconName: "BrainCircuit",
    items: [
      {
        title: "Enterprise RAG Knowledge Assistant",
        tagline: "Semantic search across internal PDF handbooks, contracts, and SOPs",
        description: "Autonomous retrieval-augmented assistant trained on internal manuals, technical briefs, and customer FAQs with citation traceability and seamless human handover.",
        scopeType: "Fixed Milestone",
        tech: ["LangChain", "Vector DB (Qdrant/Pinecone)", "OpenAI / Claude API", "FastAPI"],
        deliverables: [
          "Document chunking and hybrid vector/keyword ingestion pipeline",
          "Hallucination guardrails and source document attribution",
          "Web embed widget and internal Slack/Teams integration",
        ],
        businessImpact: "Eliminates repetitive internal lookup delays and gives clients instantaneous, verified answers 24/7.",
      },
      {
        title: "Local & Private RAG Pipelines",
        tagline: "Zero external data exposure using on-prem open models",
        description: "Privacy-first architecture utilizing Ollama and DeepSeek models running locally to query sensitive financial, healthcare, or executive documents without API leakage.",
        scopeType: "Fixed Milestone",
        tech: ["Ollama", "DeepSeek", "ChromaDB", "Python Streamlit"],
        deliverables: [
          "100% on-premises vector search and local inference deployment",
          "Air-gapped data retention policy configuration",
          "Custom desktop/local web UI for business analysts",
        ],
        businessImpact: "Total regulatory compliance and data sovereignty with zero third-party token consumption fees.",
      },
      {
        title: "Automated Document Parsing & Extraction",
        tagline: "Convert messy PDF invoices, receipts, and forms into validated JSON",
        description: "Structured extraction pipeline turning unformatted PDFs, contracts, and customer applications into schema-validated data dispatches.",
        scopeType: "Fixed Milestone",
        tech: ["Python", "Pydantic", "Vision LLMs", "JSON Schema"],
        deliverables: [
          "Strict Pydantic JSON schema validation and error-handling",
          "Automated file ingestion watchdogs (Google Drive / S3 / Email)",
          "Direct webhook routing to databases or ERP systems",
        ],
        businessImpact: "Cuts manual clerical entry by over 80% with guaranteed data schema conformity.",
      },
      {
        title: "Prompt Guardrails & API Spend Governance",
        tagline: "Corporate API controls, safety boundaries, and token cost caps",
        description: "Hardening production prompt architectures against prompt injection, output schema drift, and unexpected corporate API token bill spikes.",
        scopeType: "Sprint",
        tech: ["Guardrails AI", "OpenAI Admin API", "Rate-Limiting Middleware"],
        deliverables: [
          "System prompt boundary testing and red-teaming",
          "Hard monthly budget spend-cap enforcement triggers",
          "Telemetry logging for latency, token counts, and accuracy",
        ],
        businessImpact: "Protects brand integrity and prevents runway depletion from runaway agent loops.",
      },
    ],
  },
  {
    id: "web-platforms",
    title: "Web Platforms & Digital Products",
    shortTitle: "Web Platforms",
    summary: "High-performance, sub-second web applications and conversion funnels engineered with Next.js, TypeScript, Headless CMS, and edge infrastructure.",
    iconName: "Globe",
    items: [
      {
        title: "Turnkey Next.js Web Platform",
        tagline: "Sub-second load times, responsive architecture, and accessible UX",
        description: "Full-stack web application built on Next.js App Router with TypeScript and Tailwind CSS. Built to pass Core Web Vitals with 90+ Lighthouse performance scores.",
        scopeType: "Turnkey",
        tech: ["Next.js (App Router)", "TypeScript", "Tailwind CSS v4", "Motion"],
        deliverables: [
          "Production responsive layout across mobile, tablet, and ultra-wide",
          "Dark/Light theme switching with zero layout-shift or hydration flashes",
          "Accessible UI primitives (WCAG 2.2 AA compliant)",
        ],
        businessImpact: "Provides an elite, institutional-grade commercial storefront that immediately builds buyer trust.",
      },
      {
        title: "High-Ticket Lead Qualification Wizard",
        tagline: "Multi-step consultative intake funnel that segments prospective clients",
        description: "Interactive questionnaire capturing prospect budget, company size, and operational bottlenecks, pre-qualifying leads before routing to client inboxes.",
        scopeType: "Fixed Milestone",
        tech: ["React Hook Form", "Zod", "Tailwind", "Webhook Integrations"],
        deliverables: [
          "Dynamic branching questionnaire with progress state indicators",
          "Real-time input validation and spam/bot filtering",
          "Instant lead dispatch to Slack, CRM, and WhatsApp",
        ],
        businessImpact: "Eliminates low-budget tire-kickers and arms sales teams with rich prospect context before calls.",
      },
      {
        title: "Headless CMS & Content Pipeline",
        tagline: "Role-based editorial workflows for non-technical team members",
        description: "Headless CMS configuration allowing founders, copywriters, and marketers to publish case studies, advisories, and blog posts without touching codebase files.",
        scopeType: "Fixed Milestone",
        tech: ["Sanity / Strapi / MDX", "Content Schemas", "Live Previews"],
        deliverables: [
          "Custom content modeling for projects, testimonials, and articles",
          "Role-based publishing access with live draft previews",
          "Automated on-demand cache revalidation upon publish",
        ],
        businessImpact: "Empowers marketing teams to update content in real-time with zero developer bottlenecks.",
      },
      {
        title: "Edge Cloud Deployment & SEO Architecture",
        tagline: "Vercel / Cloudflare edge hosting with canonical DNS & dynamic OpenGraph",
        description: "Global edge launch with automated SSL, canonical apex/www routing, dynamic XML sitemaps, and rich OpenGraph social preview images for LinkedIn and Twitter.",
        scopeType: "Fixed Milestone",
        tech: ["Cloudflare / Vercel Edge", "DNS (SPF/DMARC)", "JSON-LD Schema", "Next OG"],
        deliverables: [
          "Zero-downtime CI/CD deployment pipelines with automated previews",
          "Structured JSON-LD organization and service schema metadata",
          "Automated dynamic social share card generation",
        ],
        businessImpact: "Dominates search indexation and ensures maximum click-through rates across executive social networks.",
      },
    ],
  },
  {
    id: "automation",
    title: "Operations & Workflow Automation",
    shortTitle: "Automation",
    summary: "End-to-end multi-step scenarios syncing leads, CRMs, payments, and messaging across Make.com, n8n, Slack, and WhatsApp.",
    iconName: "Workflow",
    items: [
      {
        title: "End-to-End CRM & Operations Pipelines",
        tagline: "Automated sync across forms, CRMs, Slack, and internal spreadsheets",
        description: "Robust automated scenarios in Make or n8n that ingest incoming inquiries, enrich prospect company data, create CRM deals, and alert the sales team.",
        scopeType: "Fixed Milestone",
        tech: ["Make.com", "n8n", "HubSpot / Pipedrive", "Slack API"],
        deliverables: [
          "Multi-branch automation scenario with retry logic and error logging",
          "CRM deal creation, lead attribution tagging, and owner assignment",
          "Automated channel alert dispatch with one-click approval buttons",
        ],
        businessImpact: "Removes 10+ hours of weekly manual data copying and ensures zero lost leads.",
      },
      {
        title: "WhatsApp Speed-to-Lead Instant Triage",
        tagline: "Sub-30-second mobile triage prefilling consultation reference numbers",
        description: "Instant mobile notification route that alerts on-duty team members to hot inquiries with pre-filled WhatsApp click-to-chat links for instant engagement.",
        scopeType: "Fixed Milestone",
        tech: ["WhatsApp Cloud API", "Twilio / Meta Business", "Webhooks"],
        deliverables: [
          "Deep-linked WhatsApp conversation launcher with contextual reference ID",
          "Automated off-hours auto-responder with calendar scheduling link",
          "Conversation logging back into central deal records",
        ],
        businessImpact: "Captures inbound high-ticket leads while their buying intent is at its highest.",
      },
      {
        title: "Stripe Billing & Invoicing Automation",
        tagline: "Automatic milestone deposit invoicing, receipts, and accounting sync",
        description: "Automated payment workflow triggering deposit invoicing, customer onboarding folders, and accounting notifications upon contract sign-off.",
        scopeType: "Fixed Milestone",
        tech: ["Stripe Checkout", "Stripe Invoicing API", "Xero / QuickBooks", "Webhooks"],
        deliverables: [
          "Branded Stripe customer portal for payment and invoice history",
          "Automated receipt dispatch and accounting ledger reconciliation",
          "Tiered milestone payment scheduling with automatic payment reminders",
        ],
        businessImpact: "Accelerates cash collection and eliminates manual accounts-receivable follow-up overhead.",
      },
    ],
  },
  {
    id: "analytics-growth",
    title: "Data Intelligence & Attribution",
    shortTitle: "Analytics & Data",
    summary: "Executive Power BI dashboards, server-side tracking containers (Meta CAPI), and outbound infrastructure designed for clarity and ROI.",
    iconName: "ChartSpline",
    items: [
      {
        title: "Executive Power BI Dashboards & Decision Loops",
        tagline: "Transform fragmented spreadsheets into real-time visual KPI engines",
        description: "Consolidating finance, marketing, and operational data into interactive Power BI reports with custom DAX calculations and executive summary views.",
        scopeType: "Fixed Milestone",
        tech: ["Power BI", "DAX", "SQL", "Power Query (M)"],
        deliverables: [
          "Custom star-schema data models optimized for rapid query refresh",
          "Automated scheduled data refreshes and executive alert thresholds",
          "Mobile-responsive dashboard views for executive leadership",
        ],
        businessImpact: "Compresses monthly reporting cycles from 3 days down to 2 hours with audit-grade accuracy.",
      },
      {
        title: "Meta Conversions API (CAPI) Server Container",
        tagline: "First-party server-side tracking unaffected by ad-blockers and iOS privacy",
        description: "Server-side tracking container deployed on Cloudflare Workers, passing deduplicated browser and server events with SHA-256 customer matching.",
        scopeType: "Fixed Milestone",
        tech: ["Cloudflare Workers", "Meta CAPI", "Google Tag Manager Server-Side"],
        deliverables: [
          "First-party tracking subdomain setup (e.g. data.yourdomain.com)",
          "Deduplicated browser pixel + server event parity testing",
          "Event Quality Match Score optimization (achieving 8.0+/10 rating)",
        ],
        businessImpact: "Restores accurate ad attribution, lowers cost per acquisition, and feeds Meta algorithms high-fidelity purchase signals.",
      },
      {
        title: "Outbound Infrastructure & Email Deliverability",
        tagline: "Secondary domains, warmed inboxes, and strict SPF/DKIM/DMARC",
        description: "Setting up isolated secondary sending domains with authenticated inboxes to protect root domain reputation during outbound prospecting.",
        scopeType: "Sprint",
        tech: ["Google Workspace / Microsoft 365", "Cloudflare DNS", "SPF/DKIM/DMARC", "Mail-Tester"],
        deliverables: [
          "Secondary domain provisioning and MX/SPF/DKIM/DMARC alignment",
          "Enrollment in automated AI warm-up pools with ramp-up schedules",
          "Custom SSL-secured click-tracking domain setup",
        ],
        businessImpact: "Guarantees 10/10 deliverability scores and ensures cold outreach lands in primary inboxes, not spam.",
      },
    ],
  },
  {
    id: "retainers",
    title: "Fractional Advisory & Retainers",
    shortTitle: "Retainers",
    summary: "Dedicated engineering bandwidth, proactive prompt accuracy governance, and fractional solutions leadership on ongoing monthly terms.",
    iconName: "Layers",
    items: [
      {
        title: "Essential Platform Care & Security Retainer",
        tagline: "Continuous uptime monitoring, dependency updates, and SLA support",
        description: "Continuous edge availability monitoring, monthly security patches, weekly automated database backups, and next-business-day defect SLA.",
        scopeType: "Monthly Retainer",
        tech: ["Vercel Monitoring", "Cloudflare Health Checks", "GitHub Dependabot"],
        deliverables: [
          "24/7 endpoint uptime health monitoring with instant SMS/Slack alerts",
          "Monthly dependency vulnerability patches and framework upgrades",
          "Next-business-day defect resolution SLA",
        ],
        businessImpact: "Ensures mission-critical web applications remain online, secure, and fast with zero management overhead.",
      },
      {
        title: "AI Pipeline Uptime & Prompt Accuracy Care",
        tagline: "Ongoing scenario recovery, monthly vector refreshes, and token budget governance",
        description: "Proactive monitoring of Make/n8n scenario execution, monthly knowledge base document refresh, prompt accuracy auditing, and token spend cap governance.",
        scopeType: "Monthly Retainer",
        tech: ["Make/n8n Alerting", "Vector Index Maintenance", "Model Evaluation"],
        deliverables: [
          "Prompt drift auditing and periodic few-shot calibration",
          "Monthly ingestion of up to 10 updated company documents/PDFs",
          "Automated scenario error recovery and rate-limit backoff management",
        ],
        businessImpact: "Prevents AI models from outputting stale information as business policies evolve.",
      },
      {
        title: "Dedicated Fractional Solutions & Tech Lead",
        tagline: "Dedicated monthly architectural hours for new workflows and technical strategy",
        description: "Dedicated engineering and architectural bandwidth for new automations, feature enhancements, technical vendor evaluations, and emergency hotline SLA.",
        scopeType: "Monthly Retainer",
        tech: ["Full Stack", "AI Strategy", "Workflow Architecture", "Direct Slack"],
        deliverables: [
          "Direct Slack/WhatsApp advisory channel with founder/executive team",
          "Bi-weekly sprint planning and execution on highest-ROI automation bottlenecks",
          "Technical vendor vetting and data architecture roadmaps",
        ],
        businessImpact: "Access senior technical leadership and rapid execution without the $200k+ overhead of a full-time CTO.",
      },
    ],
  },
];
