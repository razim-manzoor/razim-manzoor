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
  role: "Business Analyst & Developer (MBA) | Web, AI & Automation",
  location: "Dubai, UAE",
  availability: "Visit Visa (Immediate Joiner) | Dubai, UAE",
  contact: {
    email: "manzoorrazim@gmail.com",
    phone: "+971 50 300 1697",
    linkedin: "https://www.linkedin.com/in/razim-manzoor",
  },
  summary:
    "I build websites, applications, AI tools, automations, and dashboards around business needs. My background combines an MBA in Data Science & Analytics with hands-on work in business analysis, development, and reporting.",
  detailedBio: [
    "I work across business analysis and technical implementation: understanding a process, defining what needs to change, and building tools that help people do the work.",
    "Based in Dubai and open to roles and project work. Junior and associate opportunities are welcome, particularly in business analysis, development, AI and automation, or data and BI.",
  ],
  stats: [
    { label: "Delivery Speedup", value: "Weeks vs Months" },
    { label: "Manual Effort Saved", value: "80%" },
    { label: "Location & Joining", value: "Dubai / Immediate" },
  ],
  recruiterSnapshot: [
    { label: "Location & availability", value: "Dubai, UAE · Available immediately" },
    { label: "Roles of interest", value: "Business analysis, web development, AI / automation, and data / BI" },
    { label: "Qualifications", value: "MBA in Data Science & Analytics · B.Com in Computer Applications" },
    { label: "Working arrangements", value: "Full-time and contract opportunities; on-site, hybrid, or remote" },
  ],
  hiringSignals: [
    "Business requirements and process analysis, supported by an MBA in Data Science & Analytics.",
    "Hands-on work with web applications, Python, SQL, Power BI, and automation tools.",
    "Experience with business workflows at Resemble Systems and data work at Luminar Technolab.",
    "Independent development of applications and automation tools, from requirements to deployment.",
  ],
  proofPoints: [
    "MBA in Data Science & Analytics",
    "Business Analysis & Process Mining",
    "Full-Stack Web & MVP Development",
    "Power BI (Advanced DAX) & SQL Pipelines",
    "AI Agents, Local RAG & RPA Automation",
    "Dubai Visit Visa, Immediate Joiner",
  ],
  focusAreas: [
    {
      title: "Business Analysis & Strategic Scoping",
      detail:
        "Requirement elicitation, process mining across multi-tier client operations, KPI modeling, and conducting ROI analyses to eliminate operational bottlenecks and protect margins.",
    },
    {
      title: "Websites & Full-Stack Web Platforms",
      detail:
        "High-performance business websites, turnkey SaaS platforms, and client portals engineered using a stack selected for the project.",
    },
    {
      title: "AI Agents & Intelligent Automation",
      detail:
        "24/7 conversational sales agents on WhatsApp and web, private on-premises document intelligence (Local RAG), and automated workflows with n8n, Power Automate, and Playwright RPA.",
    },
    {
      title: "Data Ecosystem & Decision Dashboards",
      detail:
        "Automated data pipelines in Python and SQL, customer segmentation models, and interactive Power BI executive dashboards with scheduled refreshes and clear operational metrics.",
    },
  ],
  skills: {
    business: [
      "Business Strategy & Strategic Planning",
      "Requirement Elicitation & Stakeholder Management",
      "Process Mining & Bottleneck Removal",
      "ROI Analysis & Financial Modeling",
      "KPI Modeling & Executive Decision Dashboards",
      "Vendor Evaluation & Technical Roadmapping",
    ],
    technical: [
      "Power BI (Advanced DAX, Power Query) & Tableau",
      "Python (Pandas, NumPy, Scikit-learn, FastAPI)",
      "SQL (PostgreSQL, MS SQL) & Relational Data Modeling",
      "Next.js 16, React 19, TypeScript & Modern Web Standards",
      "Generative AI, Local RAG Architectures & Prompt Engineering",
      "Autonomous Workflow Agents, n8n & Webhooks",
      "Power Automate, UiPath RPA & Playwright Automation",
      "IBM BAW (Business Automation Workflow)",
      "Microsoft Azure Cloud Infrastructure",
      "Git, REST APIs & Docker",
    ],
  },
  experience: [
    {
      id: 0,
      role: "Independent AI & Business Solutions Consultant",
      company: "Self-Employed",
      location: "Dubai, UAE",
      period: "2025 - Present",
      achievements: [
        "Reduced sales prospecting cycle time by 80% by architecting an automated lead intelligence web app utilizing Playwright RPA to scrape map targets and migrate verified records directly into client data stores.",
        "Engineered an end-to-end sales enablement CRM featuring embedded call/WhatsApp playbooks and deal-tracking dashboards, boosting daily outbound sales outreach capacity by 2x.",
        "Engineered Career-Ops, a local-first workspace orchestrating local Qwen LLMs and a custom Chrome extension to extract JDs, generate ATS-tailored LaTeX resumes, and manage pipeline velocity across interactive Kanban views.",
        "Delivered a bespoke client web platform with 100% on-schedule milestone execution by managing the full technical lifecycle from stakeholder requirements gathering to deployment.",
      ],
    },
    {
      id: 1,
      role: "Data Science Intern",
      company: "Luminar Technolab",
      location: "Kerala, India",
      period: "Jun 2024 - Mar 2025",
      achievements: [
        "Enhanced forecasting throughput and predictive accuracy across business test scenarios by developing scalable data and analytics pipelines in Python and SQL.",
        "Projected a 15% revenue uplift for targeted sales campaigns by engineering a predictive customer segmentation machine learning pipeline.",
        "Slashed reporting latency by 95% (from 3 days to under 2 hours) by orchestrating the end-to-end migration of legacy reporting workflows to interactive Power BI dashboards.",
        "Eliminated reporting anomalies and ensured high-fidelity executive metrics by engineering automated data validation scripts across multi-source datasets.",
      ],
    },
    {
      id: 2,
      role: "Associate AI & Data Analytics Engineer",
      company: "Resemble Systems",
      location: "Kochi, India",
      period: "Nov 2023 - May 2024",
      achievements: [
        "Delivered enterprise consulting and workflow solutions for regional corporate clients under Resemble Systems' official IBM Partnership, leveraging IBM BAW and AI automation.",
        "Slashed repetitive manual data processing time by 45% by spearheading a finance process automation initiative using Power Automate.",
        "Drove a 20% cycle time efficiency gain by conducting process mining across multi-tier client operations to identify and eliminate workflow bottlenecks.",
        "Guided executive staffing and retention decisions by architecting interactive HR analytics dashboards in Power BI unifying workforce engagement and attrition metrics.",
        "Ensured operational high availability and enterprise security compliance by deploying scalable cloud automation modules on Microsoft Azure.",
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
      title: "Local RAG: Secure Enterprise Document Intelligence",
      metric: "100% Private / 0 Cloud API Fees",
      serviceTrack: "Applied AI & Local Models",
      tech: ["Ollama", "DeepSeek", "ChromaDB", "BM25 Hybrid Search", "Python"],
      link: "https://www.linkedin.com/posts/razim-manzoor_rag-llm-ai-activity-7313875466493259776-90vf",
      description:
        "A privacy-first retrieval-augmented generation (RAG) assistant allowing secure querying of internal PDFs and documents with zero external cloud exposure.",
      caseStudy:
        "Engineered with Ollama, DeepSeek, and ChromaDB vector search running locally. Combines vector embeddings with BM25 hybrid search to ensure high retrieval precision and sub-second query response times.",
      problem:
        "Companies possess sensitive contracts and internal manuals, but strict data compliance prevents them from uploading confidential files to third-party cloud APIs.",
      solution:
        "A completely isolated, local-first search assistant that indexes internal documents and answers complex operational questions with verified source citations.",
      impact:
        "Guarantees 100% data privacy with zero bytes sent to public clouds, cuts internal document lookup time from 40 minutes to 15 seconds, and operates with zero recurring API fees.",
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
        "A modern full-stack web application engineered for rapid delivery, shipping auth, database, payments, and dashboards in days instead of months.",
      impact:
        "Delivered a complete, deployable platform in under 2 weeks, allowing the client to start onboarding users and testing market demand immediately without burning runway.",
    },
    {
      title: "LiquidityAI: Automated Accounts Receivable Engine",
      metric: "80% Follow-Up Effort Saved",
      serviceTrack: "Business Automation & Finance",
      tech: ["Python", "Pandas", "Streamlit", "Multi-Agent Logic", "REST APIs"],
      link: "https://www.linkedin.com/posts/razim-manzoor_the-operational-efficiency-post-activity-7411345989959147520-ghxo",
      description:
        "An autonomous Python workflow for overdue invoice recovery that reduces routine accounting follow-up effort by 80% while preserving client relationships.",
      caseStudy:
        "Built with Python and Streamlit, implementing dual-tier risk prioritization (VIP vs. High Risk) and a human-in-the-loop review portal for high-value accounts.",
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
    "Google Advanced Data Analytics Professional Certificate (Coursera)",
    "Generative AI with Large Language Models (DeepLearning.AI / Coursera)",
    "Google Data Analytics Specialisation (Coursera)",
    "KPMG Data Analytics Consulting Virtual Internship (Forage)",
    "Accenture Data Analytics & Visualisation Virtual Experience (Forage)",
    "1st Place, Strategic Marketing Case Competition (Encore 2020)",
  ],
};
