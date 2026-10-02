export interface ServiceDeliverable {
  id: string;
  title: string;
  tagline: string;
  description: string;
  scopeType: "Fixed Milestone" | "Turnkey Build" | "Monthly Retainer";
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
  scopeTerms: string;
  iconName: string;
}

export interface SprintScopeDefinition {
  id: "fixed-milestone" | "turnkey-build" | "monthly-retainer";
  name: "Fixed Milestone" | "Turnkey Build" | "Monthly Retainer";
  duration: string;
  tagline: string;
  inScope: string[];
  outOfScope: string[];
  handoverIncludes: string[];
}

export const SPRINT_SCOPES: SprintScopeDefinition[] = [
  {
    id: "fixed-milestone",
    name: "Fixed Milestone",
    duration: "1-2 Weeks",
    tagline: "Focused single-system build, automation pipeline, or specific feature",
    inScope: [
      "Clear deliverable scoped and agreed upon upfront",
      "Thorough testing and deployment to your production environment",
      "One round of feedback and refinement before sign-off",
      "Clean, documented code with no messy dependencies",
    ],
    outOfScope: [
      "Major scope changes added midway through the sprint without notice",
      "Building unrelated new features outside the initial agreement",
      "Long-term ongoing maintenance (available as monthly retainer)",
    ],
    handoverIncludes: [
      "14 days of bug-fix support on delivered code",
      "100% code ownership and full repository access",
      "Straightforward setup and usage instructions",
    ],
  },
  {
    id: "turnkey-build",
    name: "Turnkey Build",
    duration: "3-4 Weeks",
    tagline: "Complete web application, custom AI assistant, or end-to-end tool",
    inScope: [
      "Full frontend, backend, and database setup",
      "Production deployment connected directly to your custom domain",
      "Fast, mobile-friendly, and accessible user experience",
      "End-to-end testing and integration setup",
    ],
    outOfScope: [
      "Unbounded feature additions outside the initial milestone plan",
      "Third-party software subscription or API costs (billed directly to client)",
      "Fixing unrelated legacy bugs in pre-existing systems",
    ],
    handoverIncludes: [
      "14 days of post-launch bug-fix support",
      "100% ownership of code, hosting, and configuration accounts",
      "Short video walkthrough and written documentation for your team",
    ],
  },
  {
    id: "monthly-retainer",
    name: "Monthly Retainer",
    duration: "Ongoing (Monthly)",
    tagline: "Dedicated development hours and priority support for continuous improvements",
    inScope: [
      "Dedicated monthly hours for new features, tweaks, and optimizations",
      "Regular updates and health checks for existing automations and apps",
      "Direct communication channel via Slack or WhatsApp for quick turnarounds",
      "Proactive advice on new tools and workflow improvements",
    ],
    outOfScope: [
      "Unused monthly hours rolling over indefinitely",
      "Building massive new standalone products (handled as separate Turnkey builds)",
      "24/7 middle-of-the-night emergency pager duty",
    ],
    handoverIncludes: [
      "Monthly summary report of completed tasks and improvements",
      "Continuous documentation updates as new features roll out",
      "Ongoing peace of mind with someone keeping systems running smoothly",
    ],
  },
];

export const HANDOVER_GUARANTEES: HandoverGuarantee[] = [
  {
    title: "14-Day Bug Fix Support",
    description: "Complimentary 14-day window after launch to fix any unexpected bugs or issues in the delivered code.",
    scopeTerms: "Covers all functional bugs against the agreed scope. Excludes external third-party API outages or modifications made by other developers.",
    iconName: "ShieldCheck",
  },
  {
    title: "100% Asset & Code Ownership",
    description: "Full transfer of GitHub repositories, hosting dashboards, domain settings, and credentials upon project completion.",
    scopeTerms: "Zero vendor lock-in. You own every line of code, design file, and deployment asset without recurring licensing fees.",
    iconName: "KeyRound",
  },
  {
    title: "Clear Walkthrough & Docs",
    description: "Simple written instructions and a short video walkthrough so you and your team can use everything independently.",
    scopeTerms: "Straightforward documentation covering daily use, environment keys, and routine maintenance without confusing jargon.",
    iconName: "BookOpenCheck",
  },
];

export const SERVICES_CATALOG: ServicePillar[] = [
  {
    id: "ai-agents",
    title: "AI Agents & Intelligent Copilots",
    shortTitle: "AI & Copilots",
    summary: "Custom conversational sales agents, internal knowledge assistants (RAG), autonomous multi-agent task runners, and intelligent document extraction pipelines.",
    iconName: "BrainCircuit",
    items: [
      {
        id: "whatsapp-sales-agent",
        title: "24/7 WhatsApp & Web AI Sales Agent",
        tagline: "Instant lead qualification, FAQ handling, and automated appointment booking",
        description: "An intelligent conversational assistant deployed on WhatsApp, web chat, or Telegram. Engages inbound leads in natural language, answers service questions, qualifies budget and intent, and books meetings directly into your calendar.",
        scopeType: "Fixed Milestone",
        tech: ["Any Modern Stack", "Python / Node.js", "WhatsApp Cloud API", "OpenAI / Claude", "Webhooks"],
        deliverables: [
          "Conversational assistant trained on your services, pricing, and qualification rules",
          "Automated calendar booking and CRM contact creation",
          "Seamless handoff trigger to human reps for high-intent conversations",
        ],
        businessImpact: "Responds to inbound inquiries in seconds 24/7, preventing lead drop-off and booking warm meetings while you sleep.",
      },
      {
        id: "internal-rag",
        title: "Internal Knowledge Assistant (RAG)",
        tagline: "Chat and search across company documents, SOPs, and contracts with citations",
        description: "A private knowledge base assistant that searches your company PDFs, Notion workspaces, handbooks, and client records. Provides accurate answers with exact page and document source references to prevent hallucinations.",
        scopeType: "Fixed Milestone",
        tech: ["Any Modern Stack", "Python / TypeScript", "Vector DBs (Qdrant / Chroma)", "Hybrid Search", "FastAPI"],
        deliverables: [
          "Automated ingestion pipeline for PDFs, spreadsheets, and documentation",
          "Strict citation grounding showing exact source paragraphs for every answer",
          "Clean web dashboard or Slack/Discord integration for your internal team",
        ],
        businessImpact: "Saves team members 30 to 45 minutes every day previously lost searching through messy shared drives and documentation.",
      },
      {
        id: "multi-agent-ops",
        title: "Autonomous Multi-Agent Workflows",
        tagline: "AI task runners that coordinate research, data extraction, and tool actions",
        description: "Multi-agent systems (LangGraph / CrewAI) that break down complex operational tasks into steps: researching data, verifying constraints, querying databases, and drafting outputs with human approval checkpoints.",
        scopeType: "Turnkey Build",
        tech: ["Any Modern Stack", "LangGraph / CrewAI", "Python", "Tool Validation", "Redis"],
        deliverables: [
          "Specialized agent roles for research, validation, and content generation",
          "Human-in-the-loop approval gate before any external action or database write",
          "Detailed execution log showing agent steps and token consumption",
        ],
        businessImpact: "Replaces hours of repetitive multi-step analysis with autonomous execution that finishes in minutes.",
      },
      {
        id: "doc-extractor",
        title: "Automated Document & Invoice Extractor",
        tagline: "Convert unstructured invoices, receipts, and forms into clean database records",
        description: "Multimodal AI pipeline that extracts line items, totals, dates, vendor details, and tax numbers from uploaded PDFs and image scans, validating data against schema rules before exporting.",
        scopeType: "Fixed Milestone",
        tech: ["Any Modern Stack", "Vision AI", "Python", "Pydantic", "Structured JSON Schema"],
        deliverables: [
          "Automated processing pipeline for multi-page invoices, receipts, and contracts",
          "Validation rules with automated flagging for low-confidence fields",
          "Direct export into Google Sheets, Airtable, or SQL databases",
        ],
        businessImpact: "Cuts manual data entry time by over 80% and eliminates human typing mistakes in financial and operational records.",
      },
    ],
  },
  {
    id: "web-mvps",
    title: "Full-Stack Web Apps & Rapid MVPs",
    shortTitle: "Web Apps & MVPs",
    summary: "Production-ready web applications, SaaS MVPs, client-facing portals, and bespoke internal tools engineered for speed, clean UX, and rapid time to market.",
    iconName: "Globe",
    items: [
      {
        id: "turnkey-mvp",
        title: "Turnkey SaaS Platform & MVP in 3 Weeks",
        tagline: "Complete web app with auth, database, payments, and responsive design",
        description: "Full-cycle MVP development designed to get your product in front of real paying users fast. Includes secure authentication, relational database architecture, Stripe billing, and a modern responsive user interface.",
        scopeType: "Turnkey Build",
        tech: ["Any Modern Stack", "React / Next.js / Vue", "TypeScript / Node / Python", "PostgreSQL / Supabase", "Stripe"],
        deliverables: [
          "Full-stack responsive web application optimized for mobile and desktop",
          "User authentication, passwordless login, and account management",
          "Stripe checkout and subscription billing integration",
          "Production deployment on custom domain with automated CI/CD",
        ],
        businessImpact: "Launches your product idea into the market in 3 to 4 weeks instead of burning 6 months and tens of thousands on agencies.",
      },
      {
        id: "client-portal",
        title: "Custom Client & Partner Portal",
        tagline: "Branded self-service hub for client onboarding, file sharing, and project tracking",
        description: "A secure, professional client dashboard where your customers can log in to view project milestones, download deliverables, upload required documents, and track invoices in real time.",
        scopeType: "Turnkey Build",
        tech: ["Any Modern Stack", "Modern Frontend & Auth", "PostgreSQL", "Tailwind CSS", "Cloud Storage"],
        deliverables: [
          "Secure client login with magic links or password authentication",
          "Real-time milestone progress tracker and file upload portal",
          "Automated email notifications when project updates or files are posted",
        ],
        businessImpact: "Drastically cuts repetitive status inquiry emails while making your business look like an enterprise operation.",
      },
      {
        id: "internal-ops-hub",
        title: "Custom Internal Operations Hub",
        tagline: "Tailored admin consoles and inventory screens that replace messy Google Sheets",
        description: "Bespoke internal web tools built specifically for your team: custom order management consoles, warehouse dispatch screens, customer directories, or approval dashboards with role-based permissions.",
        scopeType: "Turnkey Build",
        tech: ["Any Modern Stack", "React / TypeScript", "PostgreSQL", "REST / GraphQL", "Tailwind CSS"],
        deliverables: [
          "Data grid interface with search, multi-filter, and bulk export capabilities",
          "Role-based staff permissions (Admin, Manager, Staff view)",
          "Direct integration with your production database and operational webhooks",
        ],
        businessImpact: "Eliminates spreadsheet corruption and version chaos, giving your team a fast, authoritative operational tool.",
      },
      {
        id: "backend-apis",
        title: "High-Performance Backend APIs & Microservices",
        tagline: "Fast, documented API layers connecting your applications and third-party tools",
        description: "Lightweight, resilient backend services built with Python (FastAPI) or Node.js. Handles complex business calculations, webhook routing, data transformations, and caching with sub-100ms response times.",
        scopeType: "Fixed Milestone",
        tech: ["Any Modern Stack", "FastAPI / Node.js / Go", "PostgreSQL", "Redis", "Docker / Cloud"],
        deliverables: [
          "Documented REST API endpoints with interactive Swagger documentation",
          "Redis caching and rate limiting for stability under sudden traffic spikes",
          "Automated test suite and deployment on cloud container infrastructure",
        ],
        businessImpact: "Provides a reliable, lightning-fast backend engine that scales smoothly as your customer base expands.",
      },
    ],
  },
  {
    id: "workflow-automation",
    title: "Workflow & Operations Automation",
    shortTitle: "Automations",
    summary: "Eliminating manual data transfer, syncing CRMs, automating invoice delivery, and scraping market intelligence across all your business tools.",
    iconName: "Workflow",
    items: [
      {
        id: "cross-app-sync",
        title: "Cross-App Pipeline Automation (n8n / Make)",
        tagline: "Sync forms, CRMs, spreadsheets, and messaging platforms without manual copy-paste",
        description: "Automated pipelines that connect your disconnected SaaS tools: capturing form submissions, updating HubSpot/Pipedrive, logging records into Airtable, and pinging team channels in real time.",
        scopeType: "Fixed Milestone",
        tech: ["Any Modern Stack", "n8n / Make", "Python", "Enterprise REST APIs", "Webhooks"],
        deliverables: [
          "Multi-step automated scenario with robust error handling and fallback alerts",
          "Real-time bidirectional synchronization between your primary tools",
          "Complete documentation and testing to guarantee zero data loss",
        ],
        businessImpact: "Reclaims 10 to 20 hours of manual copy-pasting every week and prevents customer details from slipping through the cracks.",
      },
      {
        id: "lead-intake-dispatch",
        title: "Instant Lead Intake & Dispatch Pipeline",
        tagline: "Qualify website leads and ping sales reps in under 30 seconds",
        description: "An automated lead acceleration pipeline: when a prospect submits a website form, the system immediately enriches company details, scores the lead, creates a CRM deal, and sends an instant WhatsApp alert to the assigned rep with a pre-filled chat link.",
        scopeType: "Fixed Milestone",
        tech: ["Any Modern Stack", "n8n / Python", "WhatsApp Cloud API", "CRM Webhooks", "Instant Alerts"],
        deliverables: [
          "Instant lead validation, enrichment, and spam filtering",
          "Automatic deal creation and round-robin sales rep assignment",
          "Mobile alert with one-tap WhatsApp chat button for instant rep outreach",
        ],
        businessImpact: "Drops lead response time from hours to under 30 seconds, dramatically boosting call booking rates and conversion.",
      },
      {
        id: "invoicing-reconciliation",
        title: "Automated Invoicing & Payment Reconciliation",
        tagline: "Automate milestone invoices, payment receipts, and accounting sync",
        description: "End-to-end payment workflow connecting Stripe checkout links or bank feeds directly into QuickBooks or Xero. Generates branded tax invoices, logs accounting entries, and triggers polite payment reminders.",
        scopeType: "Fixed Milestone",
        tech: ["Any Modern Stack", "Stripe API", "QuickBooks / Xero APIs", "Python", "Webhooks"],
        deliverables: [
          "Automated invoice generation upon contract signing or milestone triggers",
          "Automatic payment receipts and ledger reconciliation",
          "Polite, automated reminder emails for upcoming or overdue milestones",
        ],
        businessImpact: "Accelerates payment collection, prevents overdue receivables, and spares your team from awkward manual reminder emails.",
      },
      {
        id: "custom-scrapers",
        title: "Custom Data Scrapers & Market Intelligence",
        tagline: "Extract clean, verified market listings and business directories into databases",
        description: "Automated scraping and data extraction engines in Python that pull public business directories, real estate listings, or competitor pricing into clean, structured spreadsheets or relational databases on a scheduled basis.",
        scopeType: "Fixed Milestone",
        tech: ["Any Modern Stack", "Python", "Playwright / Crawlers", "PostgreSQL / Airtable", "Proxy Rotation"],
        deliverables: [
          "Resilient scraping pipeline with anti-blocking and proxy handling",
          "Data cleaning and deduplication logic ensuring pristine datasets",
          "Scheduled automatic runs delivering updated CSVs or syncing to databases",
        ],
        businessImpact: "Gives your sales and strategy teams targeted market datasets without hiring expensive research freelancers.",
      },
    ],
  },
  {
    id: "bi-analytics",
    title: "Business Intelligence & Decision Dashboards",
    shortTitle: "Dashboards & BI",
    summary: "Interactive Power BI reports, automated KPI cockpits, and financial models that turn messy spreadsheets into reliable decision tools.",
    iconName: "ChartSpline",
    items: [
      {
        id: "power-bi-dashboards",
        title: "Interactive Power BI & SQL Dashboards",
        tagline: "Live revenue, pipeline, and operational performance without manual spreadsheets",
        description: "Custom business intelligence dashboards consolidating sales, marketing spend, and operational data into clear, interactive visual reports. Features automated data refreshes and mobile-friendly layouts.",
        scopeType: "Fixed Milestone",
        tech: ["Any Modern Stack", "Power BI / Metabase", "DAX / SQL", "Power Query", "PostgreSQL"],
        deliverables: [
          "Interactive dashboard with drill-down views by product, channel, and timeframe",
          "Scheduled automatic data refreshes so numbers are always current",
          "Clean executive summary layout accessible on desktop and mobile",
        ],
        businessImpact: "Replaces 3 to 4 hours of tedious manual spreadsheet assembling every week with an instant, always-accurate dashboard.",
      },
      {
        id: "revenue-unit-economics",
        title: "Unit Economics & Revenue Modeling Engines",
        tagline: "Automated tracking of MRR, customer acquisition cost, and lifetime value",
        description: "Analytical models that connect transactional databases to track recurring revenue (MRR/ARR), churn cohorts, customer acquisition costs (CAC), and gross margins automatically.",
        scopeType: "Fixed Milestone",
        tech: ["Any Modern Stack", "Python (Pandas)", "SQL", "Power BI", "Financial Modeling"],
        deliverables: [
          "Automated customer cohort retention and churn analysis",
          "Unit economics breakdown by acquisition channel and customer tier",
          "Variance reporting tracking actual revenue against financial targets",
        ],
        businessImpact: "Gives founders and executives the financial clarity needed to make confident marketing and hiring decisions.",
      },
      {
        id: "daily-executive-digests",
        title: "Automated Executive Alerts & Daily Digests",
        tagline: "Key operational metrics and anomalies delivered directly to WhatsApp or Slack",
        description: "Automated daily or weekly summary digests querying your database or CRM and sending a clean executive snapshot (daily sales, cash collected, pending tickets, hot leads) straight to leadership channels.",
        scopeType: "Fixed Milestone",
        tech: ["Any Modern Stack", "Python / SQL", "Slack / WhatsApp API", "Scheduled Cron", "Webhooks"],
        deliverables: [
          "Custom morning digest format customized to your leadership priorities",
          "Real-time threshold alerts for sudden dips in conversion or failed payments",
          "Zero need to log in to multiple separate SaaS tools to check daily health",
        ],
        businessImpact: "Keeps leadership informed on critical metrics in under 30 seconds every morning without logging into five different dashboards.",
      },
    ],
  },
  {
    id: "retainers-sprints",
    title: "Sprints & Dedicated Engineering",
    shortTitle: "Retainers & Sprints",
    summary: "Dedicated development sprints for new features, ongoing AI & automation retainers, and technical scoping calls to derisk your build.",
    iconName: "Layers",
    items: [
      {
        id: "feature-sprint",
        title: "2-Week Dedicated Feature Sprint",
        tagline: "High-focus engineering sprint to ship a specific tool, integration, or feature",
        description: "A fast, dedicated 2-week development sprint focused on building and deploying a single high-priority feature, custom AI tool, or integration into your existing codebase.",
        scopeType: "Fixed Milestone",
        tech: ["Any Modern Stack", "Polyglot Full-Stack", "AI Integrations", "Rapid Production Delivery"],
        deliverables: [
          "Pre-sprint scoping session to lock in requirements and acceptance criteria",
          "Daily async updates and rapid prototype iteration",
          "Tested, deployed code with 14 days of bug-fix support",
        ],
        businessImpact: "Gets critical product features built and shipped immediately without the delays or cost of full-time engineering hires.",
      },
      {
        id: "monthly-retainer-care",
        title: "Monthly AI & Automation Retainer",
        tagline: "Dedicated development hours for continuous improvements and priority support",
        description: "An ongoing monthly technical partnership providing dedicated hours for prompt tuning, adding new automation workflows, building small features, and keeping all your systems running smoothly.",
        scopeType: "Monthly Retainer",
        tech: ["Any Modern Stack", "Full Stack & Automations", "Prompt Tuning", "Direct Chat Support"],
        deliverables: [
          "Dedicated monthly engineering hours committed to your priority backlog",
          "Direct Slack or WhatsApp channel for fast turnarounds and questions",
          "Proactive system health checks and monthly improvement summary",
        ],
        businessImpact: "Gives your business a reliable on-call senior builder to continuously upgrade systems without full-time payroll overhead.",
      },
      {
        id: "scoping-architecture",
        title: "Technical Scoping & Architecture Blueprint",
        tagline: "Clear technical roadmap, database schema, and tool selection before you build",
        description: "A comprehensive technical teardown of your product or automation idea. Evaluates technical feasibility, designs the database schema and API flow, selects the most cost-effective tools, and provides a clear milestone plan.",
        scopeType: "Fixed Milestone",
        tech: ["Any Modern Stack", "System Design & Schemas", "API Mapping", "Tech Stack Selection"],
        deliverables: [
          "Written architecture blueprint with recommended tools, schemas, and API flows",
          "Realistic timeline and budget breakdown avoiding common technical traps",
          "Clickable wireframe or interactive prototype scope definition",
        ],
        businessImpact: "Saves founders thousands of dollars and months of wasted rework by making the right technical architecture choices upfront.",
      },
    ],
  },
];
