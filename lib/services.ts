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
    id: "enterprise-ai",
    title: "Enterprise AI & Autonomous Systems",
    shortTitle: "AI & Agents",
    summary: "Production multi-agent workflows, private on-premises model deployments, enterprise knowledge retrieval (RAG), and intelligent document processing.",
    iconName: "BrainCircuit",
    items: [
      {
        id: "agentic-workflows",
        title: "Autonomous AI Agents & Task Orchestration",
        tagline: "Multi-agent systems that research, route, and execute complex workflows",
        description: "Autonomous agent pipelines (LangGraph / CrewAI) that coordinate tasks across tools, query databases, and execute multi-step operational logic with human-in-the-loop review.",
        scopeType: "Turnkey Build",
        tech: ["Python", "LangGraph", "CrewAI", "FastAPI", "Redis"],
        deliverables: [
          "Multi-agent state machine with strict tool permissions and validation",
          "Human review and approval gates for high-stakes operational actions",
          "Observability dashboard tracking agent trajectories, latency, and costs",
        ],
        businessImpact: "Automates complex multi-step knowledge work that previously took skilled team members hours of manual investigation.",
      },
      {
        id: "enterprise-rag",
        title: "Enterprise Knowledge Retrieval & Semantic Search",
        tagline: "Accurate search and query engines over company documents and databases",
        description: "Production RAG pipelines engineered with hybrid vector and keyword search, smart chunking, and reranking across internal PDFs, manuals, and records with strict page citations.",
        scopeType: "Fixed Milestone",
        tech: ["Python", "Qdrant / ChromaDB", "Hybrid Search", "FastEmbed", "LangChain"],
        deliverables: [
          "Automated document ingestion and semantic indexing pipeline",
          "Strict citation grounding to eliminate hallucinations and ambiguity",
          "Role-based document access controls and query audit trails",
        ],
        businessImpact: "Delivers verified answers from thousands of pages of internal documentation in seconds, eliminating manual search overhead.",
      },
      {
        id: "private-local-ai",
        title: "Private On-Premises & Air-Gapped AI Systems",
        tagline: "Run open-source models completely on your own hardware with 100% privacy",
        description: "Air-gapped AI environments using open-source models (Llama, DeepSeek, Mistral) hosted locally via vLLM or Ollama. Ensures confidential financial, legal, and operational data never leaves your infrastructure.",
        scopeType: "Fixed Milestone",
        tech: ["Ollama", "vLLM", "Open-Source LLMs", "Docker", "Local Vector Storage"],
        deliverables: [
          "Turnkey local inference server with GPU optimization and queue management",
          "Zero external data egress and 100% offline query capability",
          "Clean internal web interface and secure API endpoints for network users",
        ],
        businessImpact: "Guarantees complete data sovereignty and regulatory compliance with zero recurring per-token cloud API expenses.",
      },
      {
        id: "intelligent-document-ai",
        title: "Intelligent Document & Vision Processing",
        tagline: "Extract structured data from complex invoices, contracts, and forms",
        description: "Vision and language pipelines that extract structured tables, line items, and metadata from messy PDFs, scans, and physical documents, validating fields against strict schema rules.",
        scopeType: "Fixed Milestone",
        tech: ["Vision LLMs", "Python", "Pydantic", "OCR", "Structured JSON Schema"],
        deliverables: [
          "High-accuracy extraction pipeline for multi-page documents and complex tables",
          "Automated confidence scoring and human exception review queue",
          "Direct export into ERPs, SQL databases, or financial accounting software",
        ],
        businessImpact: "Slashes document processing time by up to 85%, eliminating manual data re-entry and operational backlogs.",
      },
    ],
  },
  {
    id: "digital-platforms",
    title: "Scalable Digital Platforms & Custom Software",
    shortTitle: "Platforms & SaaS",
    summary: "Production web applications, multi-tenant SaaS products, internal operations consoles, and high-performance API architectures.",
    iconName: "Globe",
    items: [
      {
        id: "turnkey-saas",
        title: "Full-Stack SaaS Applications & MVPs",
        tagline: "Production-ready web applications built for speed, scale, and clean user experience",
        description: "End-to-end web applications engineered with modern web standards, secure authentication, multi-tenant database schemas, and integrated payment processing.",
        scopeType: "Turnkey Build",
        tech: ["Next.js / React", "TypeScript", "Node.js / Python", "PostgreSQL", "Tailwind CSS"],
        deliverables: [
          "Responsive, high-performance web application optimized for all devices",
          "Role-based user authentication, billing integration, and account management",
          "Production deployment on reliable edge infrastructure with automated CI/CD",
        ],
        businessImpact: "Ships fully functional commercial products in weeks instead of quarters, validating market demand with minimal burn.",
      },
      {
        id: "internal-tools",
        title: "Enterprise Operations Portals & Backoffices",
        tagline: "Tailored command centers and internal management portals",
        description: "Custom internal backoffice portals, warehouse dispatch consoles, inventory trackers, and staff workflows built specifically for your team's operational rhythm.",
        scopeType: "Turnkey Build",
        tech: ["React", "TypeScript", "PostgreSQL / Supabase", "Tailwind", "REST / GraphQL"],
        deliverables: [
          "Custom data grids with advanced filtering, search, and bulk operations",
          "Granular employee permission tiers and activity audit logs",
          "Direct connection to live production databases and third-party APIs",
        ],
        businessImpact: "Replaces fragile, disconnected spreadsheets with a single authoritative source of truth for daily operations.",
      },
      {
        id: "api-microservices",
        title: "Scalable APIs & Microservices Architecture",
        tagline: "High-throughput, documented API layers connecting your distributed systems",
        description: "Resilient REST, GraphQL, or gRPC backend services designed for high transaction volume, data validation, rate-limiting, and sub-100ms response times.",
        scopeType: "Fixed Milestone",
        tech: ["FastAPI / Node.js / Go", "PostgreSQL", "Redis", "Docker", "OpenAPI"],
        deliverables: [
          "High-performance API endpoints with complete OpenAPI / Swagger documentation",
          "Redis caching layer and rate limiting for high-traffic stability",
          "Automated test suites and health check monitoring",
        ],
        businessImpact: "Provides an unshakeable technical foundation that handles sudden traffic spikes and seamless third-party partner integrations.",
      },
      {
        id: "client-portals",
        title: "Client Self-Service & Partner Portals",
        tagline: "Secure portals for clients to track orders, upload documents, and manage accounts",
        description: "Professional self-service dashboards where clients can track project milestones, access invoices, submit support tickets, and securely exchange sensitive files.",
        scopeType: "Turnkey Build",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "S3 Storage", "Webhooks"],
        deliverables: [
          "Secure login and authentication for external clients",
          "Real-time status tracking and structured document exchange",
          "Automated milestone status notifications via email and messaging",
        ],
        businessImpact: "Drastically cuts inbound support tickets and client status emails while projecting an enterprise-grade customer experience.",
      },
    ],
  },
  {
    id: "workflow-integration",
    title: "Enterprise Integration & Process Automation",
    shortTitle: "Integration & Automation",
    summary: "Connecting fragmented enterprise software, syncing databases across departments, and automating multi-step operational workflows.",
    iconName: "Workflow",
    items: [
      {
        id: "erp-crm-sync",
        title: "Cross-System Enterprise Data Synchronization",
        tagline: "Bidirectional sync between ERPs, CRMs, and core business software",
        description: "Robust automated pipelines synchronizing customer records, transaction histories, and inventory status across platforms like Salesforce, HubSpot, SAP, and custom databases.",
        scopeType: "Fixed Milestone",
        tech: ["n8n", "Python", "Webhooks", "Enterprise REST APIs", "PostgreSQL"],
        deliverables: [
          "Real-time event-driven data sync with automatic conflict resolution",
          "Failure alert triggers and automated retry queues for high reliability",
          "Centralized operational logging to verify data integrity across tools",
        ],
        businessImpact: "Eliminates departmental data silos, guaranteeing that sales, finance, and operations always see identical records.",
      },
      {
        id: "financial-automation",
        title: "Automated Order-to-Cash & Billing Pipelines",
        tagline: "Automated invoice generation, payment reconciliation, and ledger syncing",
        description: "End-to-end automation connecting payment gateways (Stripe, bank feeds) with accounting software (QuickBooks, Xero) and inventory ledgers.",
        scopeType: "Fixed Milestone",
        tech: ["Stripe API", "QuickBooks / Xero APIs", "Python", "Webhooks", "SQL"],
        deliverables: [
          "Automated invoice issuance upon contract signing or milestone completion",
          "Real-time transaction matching and automated ledger reconciliation",
          "Automated past-due reminders and payment receipt generation",
        ],
        businessImpact: "Accelerates cash collection cycles, eliminates reconciliation errors, and frees the finance team from manual bookkeeping.",
      },
      {
        id: "operational-workflows",
        title: "Cross-Departmental Approval & Fulfillment Pipelines",
        tagline: "Streamlined approvals, purchase orders, and multi-team handoffs",
        description: "Orchestrated workflows that route purchase orders, vendor agreements, and internal approval requests to appropriate department heads with multi-channel notifications.",
        scopeType: "Fixed Milestone",
        tech: ["n8n / Make", "Slack / Teams / WhatsApp APIs", "Webhooks", "PostgreSQL"],
        deliverables: [
          "Multi-tier approval routing with automated timeout escalations",
          "One-click approval actions via Slack, Teams, or email",
          "Centralized audit log tracking every decision and approval timestamp",
        ],
        businessImpact: "Cuts operational approval turnaround from days to minutes, preventing project delays and procurement bottlenecks.",
      },
      {
        id: "legacy-modernization",
        title: "Legacy System API Modernization & Wrapping",
        tagline: "Modernize legacy databases and older software without full system rewrites",
        description: "Builds clean, modern API wrappers and event listeners over older legacy databases (SQL Server, Oracle, on-prem ERPs) to enable integration with modern cloud software.",
        scopeType: "Fixed Milestone",
        tech: ["Python / Node.js", "ODBC / JDBC", "Docker", "REST", "Webhooks"],
        deliverables: [
          "Modern RESTful API interface exposing legacy data safely",
          "Scheduled or event-based data synchronization into modern stores",
          "Complete security layer preventing direct database exposure",
        ],
        businessImpact: "Unlocks legacy operational data for modern tools without spending millions on risky, multi-year core system replacements.",
      },
    ],
  },
  {
    id: "data-intelligence",
    title: "Data Systems, Analytics & Decision Intelligence",
    shortTitle: "Data & BI",
    summary: "Centralized data modeling, automated ETL pipelines, executive Power BI dashboards, and predictive decision engines.",
    iconName: "ChartSpline",
    items: [
      {
        id: "executive-bi",
        title: "Executive BI & Operational Cockpits",
        tagline: "Real-time decision dashboards for executive leadership and board reporting",
        description: "High-clarity business intelligence cockpits in Power BI or Superset consolidating revenue, margin, customer acquisition, and departmental KPIs into single-view dashboards.",
        scopeType: "Fixed Milestone",
        tech: ["Power BI", "DAX", "SQL", "Power Query", "PostgreSQL"],
        deliverables: [
          "Executive summary dashboard with drill-down capabilities by region and product",
          "Automated scheduled refreshes and snapshot alerts",
          "Mobile-optimized layouts for executive review on the go",
        ],
        businessImpact: "Eliminates days spent compiling static spreadsheets, giving executives accurate numbers at a glance.",
      },
      {
        id: "data-warehousing",
        title: "Centralized Data Warehousing & ETL Pipelines",
        tagline: "Clean, transformed, and consolidated data pipelines from all your tools",
        description: "Automated data ingestion and transformation pipelines (dbt, SQL, Python) extracting raw data from databases, APIs, and spreadsheets into a clean, query-ready data warehouse.",
        scopeType: "Fixed Milestone",
        tech: ["PostgreSQL / Snowflake / BigQuery", "dbt", "Python", "SQL", "DuckDB"],
        deliverables: [
          "Automated extraction and transformation pipelines with error alerting",
          "Clean dimensional data models (star schema) built for fast reporting",
          "Automated data quality and schema validation tests",
        ],
        businessImpact: "Creates a single, reliable source of truth across all tools, preventing conflicting numbers between departments.",
      },
      {
        id: "financial-modeling",
        title: "Automated Financial Reconciliation & Unit Economics",
        tagline: "Accurate unit economics, cohort analytics, and automated ledger balancing",
        description: "Analytical models that track customer lifetime value (LTV), customer acquisition cost (CAC), churn cohorts, and multi-entity financial consolidation automatically.",
        scopeType: "Fixed Milestone",
        tech: ["Python (Pandas)", "SQL", "Power BI", "Financial Modeling"],
        deliverables: [
          "Dynamic cohort analysis and customer retention models",
          "Unit economics breakdown by channel, product line, and geography",
          "Automated variance analysis comparing budget vs. actuals",
        ],
        businessImpact: "Provides the financial clarity needed to make confident capital allocation and operational decisions.",
      },
      {
        id: "predictive-analytics",
        title: "Applied Predictive Modeling & Demand Forecasting",
        tagline: "Machine learning models predicting customer churn and inventory demand",
        description: "Practical machine learning models trained on historical transaction and engagement data to forecast inventory requirements, identify churn risks, and score sales leads.",
        scopeType: "Fixed Milestone",
        tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "FastAPI"],
        deliverables: [
          "Trained, validated predictive model with transparent feature importance",
          "Automated weekly scoring pipeline updating CRM or ERP records",
          "Actionable threshold alerts when high-value accounts show churn signals",
        ],
        businessImpact: "Enables proactive intervention before customers churn and prevents costly inventory stockouts or overstocking.",
      },
    ],
  },
  {
    id: "systems-advisory",
    title: "Architecture Advisory & Fractional Technical Leadership",
    shortTitle: "Advisory & Retainers",
    summary: "Independent technical audits, system architecture roadmaps, fractional technical leadership, and dedicated ongoing engineering retainers.",
    iconName: "Layers",
    items: [
      {
        id: "architecture-audit",
        title: "System Architecture & Technical Debt Audit",
        tagline: "Comprehensive evaluation of system scalability, security, and codebase health",
        description: "In-depth technical evaluation of existing software, database schemas, API dependencies, and infrastructure to identify performance bottlenecks and security vulnerabilities.",
        scopeType: "Fixed Milestone",
        tech: ["Architecture Review", "Code Profiling", "Security Scanning", "Cloud Infrastructure"],
        deliverables: [
          "Detailed technical audit report with risk ratings for every subsystem",
          "Prioritized remediation plan ranked by business risk and engineering effort",
          "12-month engineering roadmap with clear architectural milestones",
        ],
        businessImpact: "Prevents catastrophic outages, exposes hidden technical debt, and gives leadership a clear roadmap before scaling.",
      },
      {
        id: "fractional-architect",
        title: "Fractional Solutions Architect & Technical Advisory",
        tagline: "Strategic technical leadership and architectural steering on demand",
        description: "Ongoing executive technical advisory providing guidance on vendor selection, architecture decisions, team hiring, code reviews, and high-level technical roadmaps.",
        scopeType: "Monthly Retainer",
        tech: ["Systems Architecture", "Vendor Due Diligence", "Cloud Strategy", "Executive Advisory"],
        deliverables: [
          "Bi-weekly technical steering sessions with founders or executive leadership",
          "Independent review of vendor proposals and technical contracts",
          "Direct availability on Slack or WhatsApp for critical technical decisions",
        ],
        businessImpact: "Gives leadership the expertise of an enterprise technical architect at a fraction of full-time executive hiring costs.",
      },
      {
        id: "dedicated-engineering",
        title: "Dedicated Monthly Systems Engineering Sprint",
        tagline: "Dedicated hands-on development hours for ongoing features and enhancements",
        description: "Ongoing monthly engineering capacity dedicated to building new features, optimizing pipelines, deploying integrations, and maintaining mission-critical tools.",
        scopeType: "Monthly Retainer",
        tech: ["Full-Stack Engineering", "AI Systems", "Automation", "Continuous Deployment"],
        deliverables: [
          "Dedicated monthly engineering hours committed to your priority backlog",
          "Continuous deployment, monitoring, and performance optimization",
          "Transparent sprint tracking with weekly progress summaries",
        ],
        businessImpact: "Keeps systems advancing continuously with reliable, high-velocity engineering execution without hiring full-time staff.",
      },
    ],
  },
];
