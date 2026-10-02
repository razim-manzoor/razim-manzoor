export interface ProjectItem {
  title: string;
  metric: string;
  serviceTrack: string;
  tech: string[];
  link: string;
  description: string;
  caseStudy: string;
  problem: string;
  solution: string;
  impact: string;
  architectureDetails?: string;
}

export interface RecruiterFact {
  label: string;
  value: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  year: string;
  details?: string;
}

export interface FocusArea {
  title: string;
  detail: string;
}

export interface UserData {
  name: string;
  role: string;
  location: string;
  availability: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
  };
  summary: string;
  detailedBio: string[];
  stats: { label: string; value: string }[];
  recruiterSnapshot: RecruiterFact[];
  hiringSignals: string[];
  proofPoints: string[];
  focusAreas: FocusArea[];
  skills: {
    business: string[];
    technical: string[];
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  certifications: string[];
}

export const USER_DATA: UserData = {
  name: "Razim Manzoor",
  role: "MBA | AI Solutions Architect & Systems Strategist",
  location: "Dubai, UAE",
  availability: "Visit Visa | Available immediately in Dubai",
  contact: {
    email: "manzoorrazim@gmail.com",
    phone: "+971 50 300 1697",
    linkedin: "https://www.linkedin.com/in/razim-manzoor",
  },
  summary:
    "I help founders and business leaders build custom digital platforms, intelligent tools, and automated operations without the months of delay or agency overhead. Combining an MBA in Data Science with hands-on systems engineering, I turn messy operational bottlenecks into clean, working systems in weeks instead of months.",
  detailedBio: [
    "Traditional development is painfully slow. Agencies take months, charge bloated retainers, and rarely understand the underlying business mechanics. I combine MBA strategic scoping (knowing what actually drives margin) with rapid, hands-on engineering execution to design, build, and deploy production software in weeks instead of months.",
    "Based in Dubai on a visit visa with immediate availability. Whether you need a full-time architect, a dedicated technical sprint, or a turnkey system built from scratch, I can jump straight in.",
  ],
  stats: [
    { label: "Delivery Speedup", value: "Weeks vs Months" },
    { label: "Manual Effort Saved", value: "80%" },
    { label: "Location & Joining", value: "Dubai / Immediate" },
  ],
  recruiterSnapshot: [
    {
      label: "Target Roles",
      value: "AI Solutions Architect, Enterprise AI & Automation Specialist, Senior Systems Analyst",
    },
    {
      label: "Work Authorization",
      value: "Visit Visa, available immediately in Dubai with zero notice period",
    },
    {
      label: "Core Competency",
      value: "AI Solutions Architecture, Full-Stack Engineering, Python, Local RAG, and Workflow Automation",
    },
    {
      label: "Education Background",
      value: "MBA in Data Science & Analytics + B.Com in Computer Applications",
    },
  ],
  hiringSignals: [
    "Ships production web apps, MVPs, and internal tools in weeks instead of months with clean, maintainable architecture.",
    "Builds practical AI tools and private local document search without runaway API bills or data privacy risks.",
    "Understands the numbers (MBA in Data Science): builds software that directly recovers hours and protects profit margins.",
    "Available immediately in Dubai for on-site, hybrid, or remote full-time roles and contract builds.",
  ],
  proofPoints: [
    "MBA in Data Science & Analytics",
    "Rapid MVP & Full-Stack Web Apps",
    "Private AI & Local Document Search",
    "n8n & Python Workflow Automation",
    "Executive Power BI Dashboards",
    "Dubai Visit Visa, Immediate Joining",
  ],
  focusAreas: [
    {
      title: "Full-Stack Web Apps & Rapid MVPs",
      detail:
        "SaaS platforms, client portals, and internal tools built with Next.js, React 19, and Supabase. Shipped in weeks, not quarters.",
    },
    {
      title: "Applied AI & Private Local Copilots",
      detail:
        "Private document search, knowledge assistants, and task runners running on local hardware or secure APIs without data leaks.",
    },
    {
      title: "Workflow & Operations Automation",
      detail:
        "Connecting CRMs, WhatsApp, spreadsheets, and databases with n8n and Python so teams never do repetitive manual data entry again.",
    },
    {
      title: "Executive Dashboards & BI Engines",
      detail:
        "Turning fragmented spreadsheets into clean Power BI reports and automated daily digests that leadership can actually trust.",
    },
  ],
  skills: {
    business: [
      "Business Requirements & Scope Definition",
      "Process Optimization & Bottleneck Elimination",
      "Operational Cost Reduction & ROI Modeling",
      "Executive KPI & Performance Dashboards",
      "Customer Lifetime Value & Churn Analytics",
      "Cross-Functional Team & Stakeholder Communication",
    ],
    technical: [
      "Next.js 16 (App Router) & React 19",
      "TypeScript, JavaScript & Modern Web Standards",
      "Tailwind CSS v4 & Responsive UI Design",
      "Python (FastAPI, Pandas, Scikit-learn)",
      "Local LLMs & On-Premises Ollama",
      "Document Search (RAG) & Vector Stores (ChromaDB)",
      "Workflow Automation (n8n, Make, Power Automate)",
      "SQL, PostgreSQL & Supabase",
      "Power BI, DAX & Automated Reporting",
      "REST APIs, Webhooks & Third-Party Integrations",
      "Git, Vercel & Cloudflare Deployment",
    ],
  },
  experience: [
    {
      id: 0,
      role: "Independent AI & Solutions Architect",
      company: "Self-Employed",
      location: "Dubai, UAE",
      period: "2025 - Present",
      achievements: [
        "Built automated lead-generation and prospecting pipelines that scrape verified business records into structured databases, cutting manual research time by 80%.",
        "Engineered internal CRM tracking systems with one-tap WhatsApp reply playbooks, helping sales teams double daily outreach velocity.",
        "Created Career-Ops, a local-first workspace orchestrating local Qwen LLMs and a Chrome extension to extract job requirements and generate tailored applications on an interactive board.",
        "Delivered custom client web applications and MVPs on schedule by managing the full technical lifecycle from scoping to production deployment.",
      ],
    },
    {
      id: 1,
      role: "Data Strategy Associate (Industrial Trainee)",
      company: "Luminar Technolab",
      location: "Kochi, India",
      period: "Jun 2024 - Mar 2025",
      achievements: [
        "Built analytical data pipelines in Python and SQL to extract actionable insights from raw company datasets.",
        "Trained a customer segmentation model (RFM) that helped sales teams identify prioritized commercial accounts.",
        "Converted messy legacy spreadsheets into automated Power BI dashboards, reducing reporting turnaround from 3 days to under 2 hours.",
        "Earned A+ distinction in Enterprise Data Science and Python Systems.",
      ],
    },
    {
      id: 2,
      role: "Associate AI & Data Analytics Engineer",
      company: "Resemble Systems",
      location: "Kochi, India",
      period: "Nov 2023 - May 2024",
      achievements: [
        "Automated repetitive accounts-payable workflows using Power Automate, reducing manual invoice handling time by 45%.",
        "Mapped operational bottlenecks across internal business processes to eliminate multi-day communication lags.",
        "Constructed executive HR and workforce dashboards tracking headcount, retention, and department KPIs.",
        "Configured secure Azure cloud integrations and structured data logging.",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Business Administration (MBA)",
      field: "Data Science & Analytics",
      institution: "JAIN University",
      year: "2021 - 2023",
      details:
        "Coursework: Financial Modeling, Business Statistics, Marketing Analytics, Strategic Decision Making, Applied Machine Learning.",
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      field: "Computer Applications",
      institution: "Kannur University",
      year: "2018 - 2021",
      details:
        "Coursework: Financial Accounting, Business Law, Corporate Taxation, Database Systems, Software Programming.",
    },
  ],
  projects: [
    {
      title: "OmniFlow: WhatsApp & CRM Lead Engine",
      metric: "Sub-30s Response",
      serviceTrack: "Operations & Workflow Automation",
      tech: ["n8n", "Python", "WhatsApp Cloud API", "HubSpot", "PostgreSQL"],
      link: "https://www.linkedin.com/in/razim-manzoor",
      description:
        "An automated pipeline that captures web leads, enriches their company data, updates the CRM, and sends an instant WhatsApp alert to the on-duty sales rep with a one-tap reply link.",
      caseStudy:
        "Built using n8n and Python microservices to bridge incoming webhooks with WhatsApp Cloud API and HubSpot. Eliminates the hours leads normally sit untouched in an inbox.",
      problem:
        "Inbound website leads sit cold for 4-8 hours before a rep notices them, while salespeople waste half their morning copy-pasting customer info between forms and spreadsheets.",
      solution:
        "An automated pipeline that instantly validates incoming inquiries, creates clean CRM deals, and pings the right rep's phone in under 30 seconds with pre-addressed chat links.",
      impact:
        "Slashed lead response time from hours to under 30 seconds, eliminated lead drop-off, and saved sales reps 10+ hours of manual data entry every week.",
    },
    {
      title: "VaultDoc: Private Document Intelligence",
      metric: "100% Private / 0 Cloud API Fees",
      serviceTrack: "Applied AI & Local Models",
      tech: ["Ollama", "DeepSeek", "ChromaDB", "LangChain", "Python"],
      link: "https://www.linkedin.com/posts/razim-manzoor_rag-llm-ai-activity-7313875466493259776-90vf",
      description:
        "A private on-premises AI assistant that lets internal teams search and chat with confidential contracts, SOPs, and board packets with zero data leaving the company network.",
      caseStudy:
        "Engineered with Ollama, ChromaDB, and open-weights models running completely on local hardware. Performs vector search across hundreds of PDFs with exact page-level citations.",
      problem:
        "Companies have hundreds of pages of confidential contracts and internal manuals, but strict data privacy rules prevent them from uploading sensitive files to ChatGPT or third-party cloud tools.",
      solution:
        "A completely isolated, local-first search assistant that indexes internal documents and answers complex questions locally with exact source citations.",
      impact:
        "Guarantees 100% data privacy with zero bytes sent to public clouds, cuts internal document lookup time from 40 minutes to 15 seconds, and has zero recurring API token costs.",
    },
    {
      title: "LaunchPad: Rapid Production SaaS Platform",
      metric: "Shipped in 14 Days",
      serviceTrack: "Web Applications & Digital Products",
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Supabase", "Stripe"],
      link: "https://www.linkedin.com/posts/razim-manzoor_productmanagement-businessstrategy-dubai-activity-7402331627022192640-u-II",
      description:
        "A production-ready full-stack web application with user authentication, role-based dashboards, Stripe subscription billing, and database backends built in a rapid 2-week sprint.",
      caseStudy:
        "Built on Next.js 16 App Router, React 19, and Supabase. Combines clean UI design with sub-second page performance, automated email notifications, and mobile responsiveness.",
      problem:
        "Founders and businesses waste 4-6 months and tens of thousands of dollars waiting for slow agencies just to build a functional web platform or customer portal.",
      solution:
        "A modern full-stack web application engineered with modern AI-accelerated workflows, shipping auth, database, payments, and dashboards in days instead of months.",
      impact:
        "Delivered a complete, deployable platform in under 2 weeks, allowing the client to start onboarding users and testing market demand immediately without burning runway.",
    },
    {
      title: "CashFlow Pulse: Automated Invoicing & AR",
      metric: "15+ Hrs/Wk Saved",
      serviceTrack: "Business Automation & Finance",
      tech: ["Python", "Pandas", "Streamlit", "SMTP / SendGrid", "REST APIs"],
      link: "https://www.linkedin.com/posts/razim-manzoor_the-operational-efficiency-post-activity-7411345989959147520-ghxo",
      description:
        "An automated receivables tool that syncs overdue invoices, groups clients by payment habits, and triggers polite, staged reminders so finance teams stop chasing late payments manually.",
      caseStudy:
        "Built with Python and Streamlit, this tool automatically parses aging invoices and flags delinquent balances with tiered reminder schedules tailored to client relationship tiers.",
      problem:
        "Finance teams spend 15+ hours every week manually cross-referencing bank spreadsheets and drafting repetitive, awkward reminder emails for overdue accounts.",
      solution:
        "An automated pipeline that parses balance sheets, groups clients into priority buckets, and prepares scheduled reminders before invoices go delinquent.",
      impact:
        "Saves over 15 hours of manual work weekly, accelerates cash collection cycles, and protects key client relationships with polite, staged communication.",
    },
    {
      title: "ExecutivePulse: Live BI & Decision Dashboard",
      metric: "3 Days to 2 Hours Latency",
      serviceTrack: "Data Intelligence & Analytics",
      tech: ["Power BI", "DAX", "SQL", "Python", "Power Query"],
      link: "https://www.linkedin.com/in/razim-manzoor",
      description:
        "An automated business intelligence system that pulls live data from Stripe, sales CRMs, and operations into a clean visual dashboard with automated morning KPI digests.",
      caseStudy:
        "Designed star-schema data models in Power BI and SQL, connecting disconnected sales and operational data into auto-refreshing visual screens accessible on desktop and mobile.",
      problem:
        "Leadership teams make critical growth and hiring decisions based on two-week-old spreadsheet exports full of broken formulas and conflicting numbers.",
      solution:
        "A centralized, automated business intelligence model that pulls directly from operational tools and presents clean, trustworthy KPIs in real time.",
      impact:
        "Cut monthly reporting from 3 full days of manual copy-paste down to a 2-hour review, giving leadership real-time visibility into revenue, churn, and operational capacity.",
    },
  ],
  certifications: [
    "Google Advanced Data Analytics Professional Certificate",
    "Generative AI with Large Language Models (Coursera)",
    "Google Data Analytics Specialization",
    "KPMG Data Analytics Consulting Virtual Internship",
    "Accenture Data Analytics & Visualization Virtual Experience",
    "1st Place, Marketing Event - Encore 2020",
    "3rd Place, Marketing Event - Manaquest 2020",
  ],
};
