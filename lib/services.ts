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
  name: ServiceDeliverable["scopeType"];
  duration: string;
  tagline: string;
  inScope: string[];
  outOfScope: string[];
  handoverIncludes: string[];
}

export const SPRINT_SCOPES: SprintScopeDefinition[] = [
  {
    id: "fixed-milestone", name: "Fixed Milestone", duration: "Typically 1–2 weeks",
    tagline: "One defined feature, workflow, or integration.",
    inScope: ["Agreed deliverable and acceptance criteria", "Testing and deployment", "One review round"],
    outOfScope: ["Additional features outside the agreed scope", "Third-party fees", "Ongoing maintenance"],
    handoverIncludes: ["Custom code and repository access", "Setup and usage documentation", "14 days of fixes for delivered functionality"],
  },
  {
    id: "turnkey-build", name: "Turnkey Build", duration: "Typically 3–4 weeks",
    tagline: "A complete, focused application or business tool.",
    inScope: ["Frontend, backend, and data setup as required", "Milestone reviews and testing", "Deployment and handover"],
    outOfScope: ["Unplanned features", "Third-party subscriptions and usage costs", "Unrelated legacy fixes"],
    handoverIncludes: ["Custom code and client-owned accounts", "Team walkthrough and documentation", "14 days of fixes for delivered functionality"],
  },
  {
    id: "monthly-retainer", name: "Monthly Retainer", duration: "Monthly",
    tagline: "An agreed allocation of time for improvements and upkeep.",
    inScope: ["Prioritized backlog and agreed monthly hours", "System checks and small improvements", "Regular progress updates"],
    outOfScope: ["Unlimited hours or emergency coverage", "Large standalone builds", "Third-party fees"],
    handoverIncludes: ["Monthly work summary", "Updated documentation", "Maintained access to code and accounts"],
  },
];

export const HANDOVER_GUARANTEES: HandoverGuarantee[] = [
  {
    title: "Your code & accounts",
    description: "Custom code, repositories, and deployment access are handed over to you.",
    scopeTerms: "Third-party products retain their own licenses and subscription terms.",
    iconName: "KeyRound",
  },
  {
    title: "A usable handover",
    description: "Setup notes, a walkthrough, and guidance for everyday use.",
    scopeTerms: "Documentation covers the agreed build and its dependencies.",
    iconName: "BookOpenCheck",
  },
  {
    title: "14 days of bug fixes",
    description: "Post-launch fixes for delivered functionality within the agreed scope.",
    scopeTerms: "New features, third-party outages, and external changes are scoped separately.",
    iconName: "ShieldCheck",
  },
];

export const SERVICES_CATALOG: ServicePillar[] = [
  {
    id: "launch", title: "Launch something people can use", shortTitle: "Launch online", iconName: "Globe",
    summary: "For a business that needs an online presence, a way to sell, or a new digital product.",
    items: [
      {
        id: "business-website", title: "Websites & digital presence",
        tagline: "Present your services clearly and give visitors a way to enquire.",
        description: "Business websites, landing pages, portfolios, and content-managed sites. Shape the pages around what visitors need to understand and the action you want them to take.",
        scopeType: "Fixed Milestone", tech: ["Project-fit stack", "Web frameworks or CMS", "Responsive design", "Search metadata & analytics"],
        deliverables: ["Page structure and responsive interface", "Content editing where needed", "Enquiry, booking, or signup journey", "Search metadata, analytics, and deployment"],
        businessImpact: "Useful for a new business, a campaign, or a website that no longer reflects your work.",
      },
      {
        id: "commerce-booking", title: "Online selling & bookings",
        tagline: "Let customers choose a service, book a time, or buy online.",
        description: "Stores, service bookings, paid memberships, and checkout flows. Choose a ready-made platform or a custom implementation based on your catalogue, operations, and budget.",
        scopeType: "Turnkey Build", tech: ["Project-fit stack", "Commerce or booking platforms", "Payment gateways", "Order integrations"],
        deliverables: ["Product or service catalogue", "Purchase or reservation flow", "Payments and customer notifications", "Administration and end-to-end journey checks"],
        businessImpact: "Useful when orders, appointments, or payments need a more consistent online process.",
      },
      {
        id: "digital-product", title: "Apps & new digital products",
        tagline: "Give users a working interface for the core task in your product.",
        description: "Web applications, SaaS products, and interfaces designed for mobile use. Define the core user journey, build the needed data and integrations, and review a usable version before expanding.",
        scopeType: "Turnkey Build", tech: ["Project-fit stack", "Frontend & backend", "Authentication & databases", "Product integrations"],
        deliverables: ["Core journeys and working interface", "Accounts, permissions, and data model", "Required integrations or billing", "Testing, deployment, and handover"],
        businessImpact: "Useful when you need to test a product idea or replace a process with a dedicated application.",
      },
    ],
  },
  {
    id: "operations", title: "Make everyday operations easier", shortTitle: "Simplify operations", iconName: "Workflow",
    summary: "For teams juggling spreadsheets, disconnected tools, repeated tasks, or scattered updates.",
    items: [
      {
        id: "business-systems", title: "Internal systems & portals",
        tagline: "Bring requests, records and responsibilities into one workspace.",
        description: "Client portals, CRM tools, admin panels, and systems for requests, inventory, projects, or service delivery. Build around the people, records, and decisions in your process.",
        scopeType: "Turnkey Build", tech: ["Project-fit stack", "Role-based access", "Databases", "Notifications"],
        deliverables: ["Workflow and user-role design", "Relevant forms, records, and admin views", "Permissions and status updates", "Team walkthrough and usage notes"],
        businessImpact: "Useful when important work is spread across messages, files, and manual trackers.",
      },
      {
        id: "workflow-automation", title: "Workflow automation",
        tagline: "Turn a repeatable process into defined steps, with review where needed.",
        description: "Automate approvals, follow-ups, onboarding, document generation, billing updates, or scheduled tasks. Start with the trigger and desired result, then define exceptions and human review.",
        scopeType: "Fixed Milestone", tech: ["Project-fit stack", "Workflow platforms", "Custom scripts", "Scheduled jobs"],
        deliverables: ["Process map and trigger rules", "Agreed automated steps", "Review paths, failure alerts, and recovery", "Run history and maintenance notes"],
        businessImpact: "Useful when the same sequence consumes time or depends on someone remembering the next step.",
      },
      {
        id: "system-integration", title: "Integrations & connected tools",
        tagline: "Move agreed information between tools without repeated re-entry.",
        description: "Connect websites, CRMs, accounting tools, spreadsheets, databases, and external APIs. Move the right information between them with clear ownership, mappings, and duplicate handling.",
        scopeType: "Fixed Milestone", tech: ["Project-fit stack", "APIs & webhooks", "Data mapping", "Sync jobs"],
        deliverables: ["Connection and field mapping", "Sync rules and duplicate handling", "Logging, retries, and failure notifications", "Integration testing and access handover"],
        businessImpact: "Useful when people copy the same information between tools or records drift out of sync.",
      },
    ],
  },
  {
    id: "ai", title: "Put AI to work on a specific task", shortTitle: "Put AI to work", iconName: "BrainCircuit",
    summary: "For work involving questions, documents, language, or decisions that need assistance.",
    items: [
      {
        id: "knowledge-assistant", title: "Assistants & knowledge search",
        tagline: "Answer questions from your business information, with sources to check.",
        description: "Website or WhatsApp assistants and search over your business information. Ground answers in agreed sources, connect useful tools, and define when to ask for clarification or hand over to a person.",
        scopeType: "Fixed Milestone", tech: ["Project-fit stack", "Local or hosted models", "Document retrieval", "Chat channels"],
        deliverables: ["Knowledge sources and access rules", "Conversation and source-reference behavior", "Booking, lookup, or handoff where needed", "Sample-question and conversation evaluation"],
        businessImpact: "Useful for customer enquiries, staff knowledge, or navigating a large collection of documents.",
      },
      {
        id: "ai-workflows", title: "AI agents & application features",
        tagline: "Prepare useful actions with clear permissions and human approval.",
        description: "Agents that work with business tools, or AI features inside an existing product. Scope tasks such as research, classification, drafting, summarisation, and record updates with defined permissions and approvals.",
        scopeType: "Turnkey Build", tech: ["Project-fit stack", "Model APIs or local models", "Tool integrations", "Evaluation & logging"],
        deliverables: ["Defined tasks and permitted actions", "Connections to agreed tools and records", "Approval, fallback, and usage controls", "Representative task tests and run visibility"],
        businessImpact: "Useful when a process needs interpretation as well as fixed rules.",
      },
      {
        id: "document-processing", title: "Document & content processing",
        tagline: "Extract useful fields and flag uncertain results for review.",
        description: "Extract fields from documents, organise incoming messages, or prepare structured summaries and drafts. Validate the output and route uncertain or important results for review.",
        scopeType: "Fixed Milestone", tech: ["Project-fit stack", "OCR & vision", "Structured outputs", "Validation & exports"],
        deliverables: ["Agreed input types and output format", "Extraction or transformation pipeline", "Validation and review flags", "Sample-based checks and system export"],
        businessImpact: "Useful when files and unstructured text create repeated reading, sorting, or transcription work.",
      },
    ],
  },
  {
    id: "data", title: "Make better use of your data", shortTitle: "Use your data", iconName: "ChartSpline",
    summary: "For teams that need reliable records, clearer reporting, or an answer to a business question.",
    items: [
      {
        id: "data-foundations", title: "Data preparation & migration",
        tagline: "Clean, map and validate records before importing or reporting.",
        description: "Clean records, combine sources, build repeatable imports, or move data between systems. Agree on mappings and check the results before using the data in reports or applications.",
        scopeType: "Fixed Milestone", tech: ["Project-fit stack", "SQL & Python", "Data pipelines", "Validation"],
        deliverables: ["Source review and field mapping", "Cleaning and transformation rules", "Repeatable import or migration", "Record validation and exception report"],
        businessImpact: "Useful when spreadsheets disagree, data is fragmented, or a system change needs a careful transfer.",
      },
      {
        id: "reporting", title: "Dashboards & business reporting",
        tagline: "Bring the measures your team needs into a clear, repeatable report.",
        description: "Define KPIs, connect data sources, and build dashboards or recurring reports around real business questions. Include refresh rules and checks so people know what they are looking at.",
        scopeType: "Fixed Milestone", tech: ["Project-fit stack", "Power BI or custom reporting", "SQL & data models", "Refresh pipelines"],
        deliverables: ["Business questions and KPI definitions", "Reporting model and interactive views", "Refresh setup and data-quality checks", "Report walkthrough and documentation"],
        businessImpact: "Useful when reports take too long to assemble or the numbers are difficult to interpret.",
      },
      {
        id: "analysis-models", title: "Analysis & predictive models",
        tagline: "Use the available data to investigate a practical business question.",
        description: "Explore trends, segments, forecasts, or classification problems. Start with the decision you want to make, check the available data, and evaluate a model against a practical baseline.",
        scopeType: "Fixed Milestone", tech: ["Project-fit stack", "Python & statistics", "Machine learning", "Evaluation"],
        deliverables: ["Question definition and data assessment", "Exploratory analysis or prototype model", "Baseline comparison and limitations", "Findings, recommendations, and reproducible work"],
        businessImpact: "Useful when a business decision needs analysis beyond a dashboard.",
      },
    ],
  },
  {
    id: "improve", title: "Improve what you already have", shortTitle: "Improve a system", iconName: "Wrench",
    summary: "For a website, application, automation, or report that needs a fix, a new capability, or ongoing attention.",
    items: [
      {
        id: "system-improvements", title: "Reviews, fixes & modernisation",
        tagline: "Fix a specific problem in the system your team already uses.",
        description: "Review an existing implementation, reproduce a fault, add a feature, improve usability or speed, or plan a migration. Start with the current system and the change you need.",
        scopeType: "Fixed Milestone", tech: ["Project-fit stack", "Existing codebases", "Diagnostics & testing", "Deployment"],
        deliverables: ["Review or reproducible diagnosis", "Agreed fix, feature, or migration plan", "Relevant regression and journey checks", "Change notes and deployment support"],
        businessImpact: "Useful when a system works only partly, has outgrown its setup, or needs a defined improvement.",
      },
      {
        id: "ongoing-support", title: "Ongoing development & support",
        tagline: "Keep a prioritised queue of improvements, fixes and maintenance.",
        description: "An agreed allocation for maintenance, new features, workflow changes, reporting updates, and technical support. Prioritise the backlog and agree on capacity and response expectations.",
        scopeType: "Monthly Retainer", tech: ["Project-fit stack", "Applications & workflows", "System checks", "Direct communication"],
        deliverables: ["Agreed capacity and priorities", "Maintenance and incremental improvements", "Progress and issue updates", "Maintained code access and documentation"],
        businessImpact: "Useful when your needs continue after launch and you want continuity across the work.",
      },
    ],
  },
];
