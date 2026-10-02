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
    id: "ai-systems",
    title: "AI Tools & Local LLMs",
    shortTitle: "AI & Smart Tools",
    summary: "Helpful conversational assistants, private on-device search, and smart document extractors built with modern AI models.",
    iconName: "BrainCircuit",
    items: [
      {
        id: "rag-assistant",
        title: "Internal Knowledge & Search Assistant",
        tagline: "Search and chat with company documents, PDFs, and handbooks",
        description: "An AI assistant trained on your internal PDFs, manuals, and FAQs that answers questions accurately with direct source references.",
        scopeType: "Fixed Milestone",
        tech: ["LangChain", "Vector DB (Chroma / Qdrant)", "OpenAI / Claude API", "FastAPI"],
        deliverables: [
          "Document parsing and search indexing pipeline",
          "Accurate answers with direct source document references",
          "Clean web interface or Slack integration for your team",
        ],
        businessImpact: "Helps team members find answers in seconds instead of spending 20+ minutes digging through folders and long PDFs.",
      },
      {
        id: "private-rag",
        title: "Local & Private AI Search",
        tagline: "Private document search running 100% on your own hardware",
        description: "Runs open-source models (Ollama, DeepSeek) locally on your own machine so sensitive financial or confidential files never leave your premises.",
        scopeType: "Fixed Milestone",
        tech: ["Ollama", "DeepSeek", "ChromaDB", "Python Streamlit"],
        deliverables: [
          "Complete local setup with zero external cloud dependencies",
          "Private local search index that works offline",
          "Simple web dashboard for querying confidential documents",
        ],
        businessImpact: "Protects sensitive data from ever reaching third-party cloud servers while eliminating recurring monthly API costs.",
      },
      {
        id: "doc-extraction",
        title: "Automated Document & PDF Extractor",
        tagline: "Turn messy invoices, receipts, and forms into clean structured data",
        description: "Automatically pulls relevant fields (totals, dates, line items, names) out of uploaded PDFs and sends them straight into your spreadsheets or database.",
        scopeType: "Fixed Milestone",
        tech: ["Python", "Pydantic", "Vision LLMs", "JSON Schema"],
        deliverables: [
          "Automated file ingestion from email or Google Drive folders",
          "Accurate extraction with validation checks to catch errors",
          "Direct export into Excel, Google Sheets, or internal databases",
        ],
        businessImpact: "Replaces hours of tedious manual data entry, processing invoices and receipts in seconds with high accuracy.",
      },
      {
        id: "prompt-guardrails",
        title: "AI Cost & Quality Guardrails",
        tagline: "Keep AI answers accurate and prevent unexpected API bill spikes",
        description: "Sets up structured safety limits, prompt safeguards, and monthly spend caps so your AI integrations remain reliable and budget-friendly.",
        scopeType: "Fixed Milestone",
        tech: ["Guardrails AI", "OpenAI Admin API", "Rate-Limiting Middleware"],
        deliverables: [
          "Prompt testing to prevent off-topic or confusing responses",
          "Hard monthly budget caps to eliminate surprise API bills",
          "Simple logging to track response time and error rates",
        ],
        businessImpact: "Ensures AI features stay consistent, polite, and strictly within your monthly operational budget.",
      },
    ],
  },
  {
    id: "web-platforms",
    title: "Web Applications & MVPs",
    shortTitle: "Web Applications",
    summary: "Fast, modern web applications built with Next.js, React, and TypeScript. Designed for speed, smooth usability, and easy maintenance.",
    iconName: "Globe",
    items: [
      {
        id: "turnkey-web",
        title: "Full-Stack Web App & MVP",
        tagline: "Fast load times, responsive design, and modern user experience",
        description: "Complete custom web application engineered with Next.js, React, and TypeScript. Optimized to look great on phones, tablets, and desktop screens.",
        scopeType: "Turnkey Build",
        tech: ["Next.js (App Router)", "React 19", "TypeScript", "Tailwind CSS"],
        deliverables: [
          "Responsive, clean UI designed for all modern screen sizes",
          "Smooth dark and light mode toggle",
          "Fast loading performance with clean code and zero bloat",
        ],
        businessImpact: "Gives your product a polished, professional digital presence that earns trust and converts visitors into customers.",
      },
      {
        id: "lead-wizard",
        title: "Interactive Lead Intake Funnel",
        tagline: "Multi-step questionnaire that qualifies prospects before booking calls",
        description: "A clean multi-step form that asks prospects the right questions upfront, filtering tire-kickers and sending ready leads straight to your inbox.",
        scopeType: "Fixed Milestone",
        tech: ["React Hook Form", "Zod", "Tailwind", "Webhook Integrations"],
        deliverables: [
          "Step-by-step interactive form with progress indicators",
          "Instant spam protection and input validation",
          "Automatic notification dispatch to your email, WhatsApp, or CRM",
        ],
        businessImpact: "Saves you time on introductory calls by delivering pre-qualified prospect details directly to your phone.",
      },
      {
        id: "headless-cms",
        title: "Easy Content Management Dashboard",
        tagline: "Update text, blog posts, and case studies without touching code",
        description: "Sets up a straightforward dashboard so you or your marketing team can publish new articles, testimonials, and updates whenever you want.",
        scopeType: "Fixed Milestone",
        tech: ["Sanity / Strapi / MDX", "Content Schemas", "Live Previews"],
        deliverables: [
          "Clean visual editor for adding and editing content",
          "Instant preview mode to check changes before publishing",
          "Automatic site rebuilds so published edits appear right away",
        ],
        businessImpact: "Lets non-technical team members update the website independently without waiting for a developer.",
      },
      {
        id: "edge-seo",
        title: "Fast Hosting, Domain & SEO Setup",
        tagline: "Reliable edge hosting, custom domain connection, and social preview cards",
        description: "Connects your custom domain, sets up automatic SSL certificates, and configures clean preview images for when your links are shared on LinkedIn and WhatsApp.",
        scopeType: "Fixed Milestone",
        tech: ["Cloudflare / Vercel Edge", "DNS Settings", "Next.js Metadata", "OpenGraph"],
        deliverables: [
          "Custom domain connection with zero downtime",
          "Automated SSL certificates and fast global edge delivery",
          "Custom social sharing cards that look great on LinkedIn and Twitter",
        ],
        businessImpact: "Ensures your website loads instantly from anywhere in the world and presents a credible preview when shared online.",
      },
    ],
  },
  {
    id: "automation",
    title: "Workflow & Process Automation",
    shortTitle: "Automation",
    summary: "Connecting your tools and eliminating manual copy-pasting across forms, spreadsheets, CRMs, and messaging apps.",
    iconName: "Workflow",
    items: [
      {
        id: "crm-pipeline",
        title: "CRM & Lead Pipeline Automation",
        tagline: "Sync forms, spreadsheets, CRMs, and team notifications automatically",
        description: "Automated pipelines in n8n or Make that capture new leads, update your CRM, format data into spreadsheets, and ping your team instantly.",
        scopeType: "Fixed Milestone",
        tech: ["n8n", "Make.com", "HubSpot / Pipedrive", "Slack / WhatsApp API"],
        deliverables: [
          "Multi-step automated scenario with error handling",
          "Automatic contact creation and deal tracking",
          "Instant alert notifications sent directly to your phone or team channel",
        ],
        businessImpact: "Stops leads from slipping through the cracks and saves hours previously lost to manual data re-entry.",
      },
      {
        id: "whatsapp-triage",
        title: "WhatsApp Quick Lead Alerts",
        tagline: "Get instant mobile alerts for hot leads with one-tap chat links",
        description: "Sends instant notifications to your phone whenever someone submits an inquiry, complete with a pre-filled WhatsApp link to reply in seconds.",
        scopeType: "Fixed Milestone",
        tech: ["WhatsApp Cloud API", "Twilio", "Webhooks"],
        deliverables: [
          "Instant mobile alert with customer inquiry details",
          "One-tap link that opens a pre-addressed chat with the prospect",
          "Automated friendly acknowledgement sent to the customer",
        ],
        businessImpact: "Dramatically improves response speed, turning warm website inquiries into real conversations within minutes.",
      },
      {
        id: "stripe-billing",
        title: "Automated Invoicing & Payment Reminders",
        tagline: "Automatic milestone invoices, payment receipts, and reminders",
        description: "Sets up streamlined payment workflows that generate deposit invoices, issue receipts, and send gentle reminders before dues.",
        scopeType: "Fixed Milestone",
        tech: ["Stripe Checkout", "Stripe Invoicing API", "Xero / QuickBooks", "Webhooks"],
        deliverables: [
          "Branded payment links and customer invoice portal",
          "Automatic payment receipts and ledger updates",
          "Polite, automated reminder emails for upcoming milestones",
        ],
        businessImpact: "Speeds up payment collection and removes the awkwardness of writing manual payment reminder emails.",
      },
    ],
  },
  {
    id: "analytics-growth",
    title: "Data Dashboards & Reporting",
    shortTitle: "Dashboards & Data",
    summary: "Turning messy, disconnected spreadsheets into clean, interactive dashboards that show exactly how your business is performing.",
    iconName: "ChartSpline",
    items: [
      {
        id: "power-bi",
        title: "Interactive Power BI & SQL Dashboards",
        tagline: "Transform fragmented spreadsheets into clear, auto-updating reports",
        description: "Pulls sales, financial, or operational data from spreadsheets and databases into clean visual dashboards that update automatically.",
        scopeType: "Fixed Milestone",
        tech: ["Power BI", "DAX", "SQL", "Power Query"],
        deliverables: [
          "Clean visual dashboards showing your most important metrics",
          "Scheduled automatic data refreshes so numbers are always current",
          "Mobile-friendly report views you can check from your phone",
        ],
        businessImpact: "Replaces hours spent compiling weekly spreadsheet reports with an instant, always-accurate dashboard.",
      },
      {
        id: "meta-capi",
        title: "Reliable Server-Side Tracking",
        tagline: "Accurate conversion tracking that bypasses ad-blocker drop-offs",
        description: "Sets up direct server-side tracking so marketing platforms receive accurate conversion signals without relying entirely on browser cookies.",
        scopeType: "Fixed Milestone",
        tech: ["Cloudflare Workers", "Meta CAPI", "Google Tag Manager Server-Side"],
        deliverables: [
          "Server-side event tracking setup",
          "Testing to ensure conversions match actual sales",
          "High event match quality score optimization",
        ],
        businessImpact: "Ensures you see exactly where customer purchases come from, improving ad performance and budget efficiency.",
      },
      {
        id: "outbound-infra",
        title: "Email Deliverability & Domain Setup",
        tagline: "Properly configured email domains so your messages stay out of spam",
        description: "Configures essential DNS records (SPF, DKIM, DMARC) and secondary domains so your business emails land reliably in client inboxes.",
        scopeType: "Fixed Milestone",
        tech: ["Google Workspace / Microsoft 365", "Cloudflare DNS", "SPF/DKIM/DMARC", "Mail-Tester"],
        deliverables: [
          "Full DNS authentication setup for clean deliverability",
          "Testing and mailbox warm-up setup",
          "Spam-score validation checks before sending campaigns",
        ],
        businessImpact: "Protects your main domain reputation and ensures important business communications don't get lost in spam folders.",
      },
    ],
  },
  {
    id: "retainers",
    title: "Ongoing Support & Collaboration",
    shortTitle: "Ongoing Support",
    summary: "Dedicated development hours and priority support to keep your software, automations, and tools running smoothly.",
    iconName: "Layers",
    items: [
      {
        id: "platform-care",
        title: "Website & App Maintenance",
        tagline: "Keep your web platform fast, secure, and up to date",
        description: "Ongoing monitoring, security patches, regular backups, and quick bug fixes so you never have to worry about your website breaking.",
        scopeType: "Monthly Retainer",
        tech: ["Vercel Monitoring", "Cloudflare", "GitHub Updates"],
        deliverables: [
          "Continuous uptime checks with immediate notifications if issues arise",
          "Monthly security patches and dependency updates",
          "Priority support for quick fixes and small tweaks",
        ],
        businessImpact: "Keeps your digital presence reliable and secure without needing a full-time in-house webmaster.",
      },
      {
        id: "ai-care",
        title: "AI & Automation Maintenance",
        tagline: "Keep workflows running smoothly and knowledge bases updated",
        description: "Regularly updates your AI knowledge base with new company documents, checks for automation errors, and keeps prompt responses accurate.",
        scopeType: "Monthly Retainer",
        tech: ["Make/n8n Alerting", "Vector Index Maintenance", "Model Evaluation"],
        deliverables: [
          "Monthly additions of new documents to your AI assistant",
          "Prompt tuning to keep responses helpful and relevant",
          "Quick fixes if an external API or workflow changes",
        ],
        businessImpact: "Ensures your automations and AI tools continue running smoothly as your business grows and changes.",
      },
      {
        id: "fractional-lead",
        title: "Dedicated Monthly Development Hours",
        tagline: "A developer on call for continuous improvements and new features",
        description: "Dedicated hours every month for building new features, automating new workflows, and advising on technical decisions.",
        scopeType: "Monthly Retainer",
        tech: ["Full Stack", "AI Strategy", "Workflow Architecture", "Direct Chat"],
        deliverables: [
          "Direct Slack or WhatsApp communication channel",
          "Bi-weekly planning and quick delivery on your top priorities",
          "Straightforward guidance on tools and technical decisions",
        ],
        businessImpact: "Gives you a reliable, hands-on developer to build and improve software continuously without full-time hiring overhead.",
      },
    ],
  },
];
