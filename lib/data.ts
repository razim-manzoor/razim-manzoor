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
    "Bridging executive MBA strategy with production systems engineering. I architect private on-prem AI systems, automated workflow pipelines, and sub-second web platforms that convert operational friction into verifiable margin.",
  detailedBio: [
    "MBA graduate in Data Science & Analytics combining financial ROI modeling, process mining, and DSO reduction with production code in Next.js 16, Python, and local LLMs.",
    "Based in Dubai on a visit visa with immediate joining availability for full-time architectural appointments and turnkey client advisory engagements.",
  ],
  stats: [
    { label: "Revenue Growth Opportunity", value: "15%" },
    { label: "Daily Workflow Effort Saved", value: "80%" },
    { label: "Executive Reporting Latency", value: "3 Days to 2 Hrs" },
  ],
  recruiterSnapshot: [
    {
      label: "Target Roles",
      value: "AI Solutions Architect, Enterprise AI & Automation Specialist, Senior Business Analyst",
    },
    {
      label: "Work Authorization",
      value: "Visit Visa, available immediately in Dubai with zero notice period",
    },
    {
      label: "Core Competency",
      value: "Bridging C-suite commercial KPIs and financial ROI with hands-on Next.js, Python, RAG, and n8n delivery",
    },
    {
      label: "Market Focus",
      value: "UAE enterprise data sovereignty, private on-prem AI, and multi-system workflow automation",
    },
  ],
  hiringSignals: [
    "Translates ambiguous C-level business challenges into scoped software architectures, operational dashboards, and automated execution loops.",
    "Deploys sovereign AI systems adhering to UAE PDPL Law 45/2021 and DIFC/ADGM standards using air-gapped Ollama and DeepSeek-R1.",
    "Combines rigorous MBA financial modeling (ROI, payback period, unit economics) with modern production code in Next.js 16 and Python.",
  ],
  proofPoints: [
    "MBA in Data Science & Analytics",
    "Air-Gapped Local RAG & DeepSeek-R1",
    "Next.js 16 & React 19 Web Platforms",
    "n8n & Enterprise Workflow Pipelines",
    "Power BI DAX & Star Schema Modeling",
    "Dubai Visit Visa, Immediate Joining",
  ],
  focusAreas: [
    {
      title: "Commercial Bottleneck to Code",
      detail:
        "Translating unstructured operational pain points into scoped technical architectures, dashboards, and automated systems.",
    },
    {
      title: "Data Sovereignty & Local AI",
      detail:
        "Deploying private, air-gapped language models on local hardware to satisfy UAE PDPL and DIFC data privacy mandates.",
    },
    {
      title: "Operational Payback Modeling",
      detail:
        "Calculating exact labor overhead drag, cycle latency, and payback timelines before committing engineering resources.",
    },
  ],
  skills: {
    business: [
      "Process Mining & Bottleneck Analysis",
      "Financial ROI & Unit Economics Modeling",
      "DSO Reduction & Working Capital Strategy",
      "Executive KPI Dashboards",
      "Enterprise Requirement Scoping",
      "Stakeholder Consensus & C-Level Advisory",
      "Predictive Customer Segmentation (RFM)",
      "UAE Data Sovereignty & Regulatory Compliance",
    ],
    technical: [
      "Generative AI & LLM Systems",
      "Private On-Prem RAG (Ollama / DeepSeek-R1)",
      "Next.js 16 (App Router) & React 19",
      "TypeScript & Tailwind CSS v4",
      "Python (FastAPI, Pandas, Scikit-learn)",
      "Workflow Automation (n8n / Make.com)",
      "Enterprise RPA (Power Automate, UiPath)",
      "Business Intelligence (Power BI, DAX, SQL)",
      "Vector Stores (ChromaDB, Qdrant)",
      "Server-Side Tracking (Meta CAPI, Cloudflare)",
      "Edge Infrastructure (Cloudflare Workers, Vercel)",
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
        "Engineered Career-Ops, a local-first workspace orchestrating local Qwen LLMs and a custom Chrome extension to extract JDs, generate hallucination-free ATS-tailored LaTeX resumes, and manage pipeline velocity across interactive Kanban views.",
        "Delivered a bespoke client web platform with 100% on-schedule milestone execution by managing the full technical lifecycle from stakeholder requirements gathering to deployment.",
      ],
    },
    {
      id: 1,
      role: "Data Strategy Associate (Industrial Trainee)",
      company: "Luminar Technolab",
      location: "Kochi, India",
      period: "Jun 2024 - Mar 2025",
      achievements: [
        "Architected and deployed scalable analytical workflows using Python, SQL, and Deep Learning, translating complex business logic into structured predictive systems.",
        "Engineered a predictive customer segmentation engine (K-Means / RFM) that identified a 15% revenue expansion opportunity, arming commercial teams with prioritized accounts.",
        "Migrated legacy reporting pipelines into automated Power BI dashboards, compressing executive decision latency by 95% from 3 days to 2 hours.",
        "Awarded A+ distinction in Enterprise Data Science and Python Systems, validating production competency across algorithmic design and data modeling.",
      ],
    },
    {
      id: 2,
      role: "Associate AI and Data Analytics Engineer",
      company: "Resemble Systems",
      location: "Kochi, India",
      period: "Nov 2023 - May 2024",
      achievements: [
        "Engineered automated accounts-payable workflows using Power Automate, eliminating manual invoice entry friction and reducing cycle effort by 45%.",
        "Conducted process mining audits across multi-stage business workflows, pinpointing execution bottlenecks to achieve a 20% operational cycle time reduction.",
        "Constructed executive HR analytics dashboards tracking talent retention and workforce KPIs to inform leadership planning.",
        "Configured secure Azure cloud integrations, establishing audit logging and enterprise data boundary compliance.",
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
        "Relevant Coursework: Financial Modeling, Business Statistics, Marketing Analytics, Strategic Decision Making, Machine Learning Applications.",
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      field: "Computer Applications",
      institution: "Kannur University",
      year: "2018 - 2021",
      details:
        "Relevant Coursework: Financial Accounting, Business Law, Corporate Taxation, Database Systems, Software Programming.",
    },
  ],
  projects: [
    {
      title: "Manifest: AI-Native Career CRM",
      metric: "60-Day Runway & Pipeline Guard",
      serviceTrack: "Web Platforms & Product Strategy",
      tech: ["React 19", "TypeScript", "Tailwind CSS v4", "IndexedDB", "Framer Motion"],
      link: "https://www.linkedin.com/posts/razim-manzoor_productmanagement-businessstrategy-dubai-activity-7402331627022192640-u-II",
      description:
        "Resolved tracking drop-off during time-sensitive UAE job searches by replacing spreadsheets with a gamified candidate CRM. Slashed application logging from 2 minutes down to 15 seconds and provided 100% visibility over visit visa expiry milestones across 60+ enterprise opportunities.",
      caseStudy:
        "Engineered a local-first React 19 application with IndexedDB persistence, guaranteeing 0ms state updates and total candidate data privacy without cloud servers. Integrated a Visit Visa Timeline Monitor that calculates remaining runway days and triggers structured milestone escalations (Day 30, Day 45, Day 55) alongside an XP-weighted pipeline state machine.",
      problem:
        "UAE job seekers on 60-day visit visas face strict regulatory countdowns and severe spreadsheet fatigue, leading to missed follow-up deadlines and overstay risks.",
      solution:
        "Local-first React 19 Kanban platform with IndexedDB persistence, XP-based behavioral gamification, and an automated visit visa timeline countdown monitor.",
      impact:
        "Reduced application logging time by 87% (sub-15 seconds), maintained 100% deadline visibility across 60+ targeted employers, and eliminated overstay fine risks.",
    },
    {
      title: "LiquidityAI: Automated Accounts Receivable Engine",
      metric: "80% Daily AR Effort Slashed",
      serviceTrack: "Operations & Workflow Automation",
      tech: ["Python", "Pandas", "Streamlit", "SMTP / SendGrid", "REST APIs"],
      link: "https://www.linkedin.com/posts/razim-manzoor_the-operational-efficiency-post-activity-7411345989959147520-ghxo",
      description:
        "Eliminated 15 weekly hours of manual invoice reconciliation by automating receivables follow-ups with deterministic customer segmentation. Accelerated cash collection cycles by 12 days and reduced 60+ day delinquent balances by 35% with zero relationship friction on strategic accounts.",
      caseStudy:
        "Architected a Python automation engine with a Streamlit operational dashboard, parsing aging balance sheets into dynamic aging buckets. Implemented tiered customer prioritization: Tier 1 (VIP) receives 14-day grace periods and account-manager routing; Tier 2 receives staged invoice cadences; Tier 3 (High Risk) triggers accelerated dunning, automated late-penalty calculations, and director escalation alerts.",
      problem:
        "Manual B2B receivables tracking consumed 15-20 hours weekly, while blunt generic dunning damaged high-value client relationships and allowed high-risk accounts to slip into bad debt.",
      solution:
        "Zero-touch Python automation engine with dynamic aging classification, ERP webhook synchronization, and a rule-based 3-tier customer prioritization matrix.",
      impact:
        "Slashed daily manual AR effort by 80%, accelerated portfolio cash collection by 12 days, and protected 100% of strategic VIP enterprise accounts from automated collection friction.",
    },
    {
      title: "Secure Document Analysis Agent (Local Private RAG)",
      metric: "100% Air-Gapped / Zero API Leakage",
      serviceTrack: "AI & Intelligent Systems",
      tech: ["DeepSeek-R1", "Ollama", "ChromaDB", "LangChain", "Python"],
      link: "https://www.linkedin.com/posts/razim-manzoor_rag-llm-ai-activity-7313875466493259776-90vf",
      description:
        "Solved strict enterprise data privacy constraints by deploying an on-premise document interrogation pipeline with zero third-party cloud API exposure. Compressed internal contract audit times from 4 hours down to under 15 seconds per multi-clause query with zero recurring token fees.",
      caseStudy:
        "Designed a 100% air-gapped RAG pipeline running quantized open-weights models (DeepSeek-R1 / Llama 3) via Ollama on local hardware. Engineered a LangChain and ChromaDB ingestion pipeline with 500-token recursive chunking and local embeddings. Hallucination guardrails enforce cosine similarity gating (>= 0.72) and exact page-level source citations.",
      problem:
        "Enterprise legal contracts and board packets cannot touch public cloud LLM APIs under UAE PDPL regulations, while manual review takes 4-8 hours per document.",
      solution:
        "Fully isolated, local RAG architecture using Ollama, ChromaDB, and quantized open-weights models running completely on on-premise hardware.",
      impact:
        "Achieved 100% data sovereignty with 0 bytes transmitted outside corporate firewalls, cut document review latency by 95%, and eliminated external API token costs.",
    },
    {
      title: "Automated Quality Control System",
      metric: "Sub-45ms Edge QA / 96% Acc",
      serviceTrack: "Data Intelligence & Analytics",
      tech: ["TensorFlow", "Keras", "OpenCV", "Python", "ONNX Runtime"],
      link: "https://github.com/razim-manzoor/Plant-Disease-Classification-CNN",
      description:
        "Replaced subjective manual visual inspection on high-velocity production lines with a deterministic edge computer vision pipeline. Slashed defect escape rates from 12% to under 1.8% while delivering real-time inspection throughput of 22+ frames per second without cloud network latency.",
      caseStudy:
        "Trained a deep Convolutional Neural Network (CNN) in TensorFlow/Keras optimized with ONNX Runtime for edge execution on industrial hardware. Applied OpenCV CLAHE preprocessing and data augmentation to neutralize factory floor lighting shifts. Built a dual-threshold decision gate: items >= 95% confidence route automatically, while borderline items (80-94%) divert to secondary inspection.",
      problem:
        "Human visual inspection fatigue caused 8-12% defect escape rates on assembly lines, while cloud vision APIs introduced unacceptable network latency (>1,500ms) and line-stop risks.",
      solution:
        "Edge-deployed quantized CNN model with CLAHE lighting normalization, dual-threshold confidence gating, and local structured audit logging.",
      impact:
        "Delivered deterministic sub-45ms inference latency (>22 FPS), cut defect escape rates from 12% to 1.8%, and eliminated external cloud bandwidth dependencies.",
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
