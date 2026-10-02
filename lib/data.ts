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
    "MBA in Data Science & Analytics bridging business strategy with production systems engineering. I architect custom AI tools, automated workflow pipelines, and web platforms that solve real operational bottlenecks.",
  detailedBio: [
    "Combines rigorous business analytical strategy (MBA in Data Science) with hands-on systems engineering across local AI models (RAG), workflow automations (n8n, Python), and full-stack web platforms.",
    "Based in Dubai on a visit visa with immediate availability for full-time architectural appointments, enterprise roles, and turnkey client builds.",
  ],
  stats: [
    { label: "Manual Effort Saved", value: "80%" },
    { label: "Reporting Speedup", value: "3 Days to 2 Hrs" },
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
      value: "Next.js 16, React 19, TypeScript, Python, Local AI / RAG, and Workflow Automation",
    },
    {
      label: "Education Background",
      value: "MBA in Data Science & Analytics + B.Com in Computer Applications",
    },
  ],
  hiringSignals: [
    "Builds production-ready, clean web applications with Next.js, React 19, and TypeScript.",
    "Builds practical AI tools and local document search (RAG) running locally or via APIs.",
    "Translates business requirements directly into working code without communication friction.",
    "Available immediately in Dubai for on-site, hybrid, or remote roles.",
  ],
  proofPoints: [
    "MBA in Data Science & Analytics",
    "Next.js 16 & React 19 Web Apps",
    "Local AI & Document Search (RAG)",
    "n8n & Python Workflow Automation",
    "Power BI Dashboards & SQL Modeling",
    "Dubai Visit Visa, Immediate Joining",
  ],
  focusAreas: [
    {
      title: "Modern Web Apps & MVPs",
      detail:
        "Fast, responsive web apps designed with clean code, modern UX, and reliable architecture.",
    },
    {
      title: "Practical AI & Local LLMs",
      detail:
        "Private document search, assistants, and tools running on local hardware or via secure APIs.",
    },
    {
      title: "Workflow Automation",
      detail:
        "Connecting disparate tools and replacing manual spreadsheet tasks with automated pipelines.",
    },
  ],
  skills: {
    business: [
      "Requirements Gathering & Scoping",
      "Workflow & Process Optimization",
      "Executive KPI Dashboards",
      "Business Analytics & Reporting",
      "Cross-Functional Collaboration",
      "Data Modeling & Forecasting",
    ],
    technical: [
      "Next.js 16 (App Router) & React 19",
      "TypeScript & JavaScript",
      "Tailwind CSS v4 & Modern UI",
      "Python (FastAPI, Pandas, Scikit-learn)",
      "Local LLMs & Ollama",
      "RAG & Vector Search (ChromaDB)",
      "Workflow Automation (n8n, Make)",
      "SQL & PostgreSQL",
      "Business Intelligence (Power BI)",
      "REST APIs & Webhooks",
      "Git, Vercel & Cloudflare",
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
        "Built an automated lead-discovery tool using Playwright that extracted verified business leads directly into structured spreadsheets, reducing manual searching time by 80%.",
        "Developed an internal sales tracker and CRM with quick-action WhatsApp playbooks, helping double daily outreach capacity.",
        "Created Career-Ops, a local-first workspace with local LLMs and a Chrome extension to extract job details, generate tailored LaTeX resumes, and track applications on an interactive board.",
        "Delivered custom client web applications on time by handling requirements, UI design, and full-stack deployment.",
      ],
    },
    {
      id: 1,
      role: "Data Strategy Associate (Industrial Trainee)",
      company: "Luminar Technolab",
      location: "Kochi, India",
      period: "Jun 2024 - Mar 2025",
      achievements: [
        "Built analytical pipelines in Python and SQL to extract insights from business datasets.",
        "Developed a customer segmentation model (RFM) to help commercial teams prioritize high-value prospects.",
        "Transformed manual spreadsheets into automated Power BI dashboards, cutting report delivery time from 3 days to under 2 hours.",
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
        "Built automated invoice processing workflows using Power Automate, cutting manual entry time by 45%.",
        "Mapped and streamlined internal approval processes to reduce turnaround delays.",
        "Constructed executive HR and workforce dashboards tracking key operational metrics.",
        "Integrated secure cloud storage and data logging pipelines on Azure.",
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
      title: "Manifest: AI Career CRM",
      metric: "80% Time Saved",
      serviceTrack: "Web Application",
      tech: ["React 19", "TypeScript", "Tailwind CSS v4", "IndexedDB", "Framer Motion"],
      link: "https://www.linkedin.com/posts/razim-manzoor_productmanagement-businessstrategy-dubai-activity-7402331627022192640-u-II",
      description:
        "A fast, local-first web app to track job applications, milestones, and interview follow-ups without messy spreadsheets.",
      caseStudy:
        "Built with React 19 and IndexedDB for instant offline storage without requiring backend servers. Includes an interactive Kanban board and milestone reminders to keep applications organized.",
      problem:
        "Tracking dozens of applications across spreadsheets is slow, messy, and makes it easy to miss crucial follow-up deadlines.",
      solution:
        "A responsive local-first web app with zero cloud lag, offline persistence, and automated reminders.",
      impact:
        "Cut application logging time down to 15 seconds, with 100% offline data privacy and clear deadline tracking.",
    },
    {
      title: "LiquidityAI: Automated Accounts Receivable",
      metric: "15+ Hrs/Wk Saved",
      serviceTrack: "Workflow Automation",
      tech: ["Python", "Pandas", "Streamlit", "SMTP / SendGrid", "REST APIs"],
      link: "https://www.linkedin.com/posts/razim-manzoor_the-operational-efficiency-post-activity-7411345989959147520-ghxo",
      description:
        "An automated Python tool that tracks overdue invoices and schedules tailored client reminders based on payment history.",
      caseStudy:
        "Engineered with Python and Streamlit, this tool automatically parses aging invoices and categorizes clients into priority tiers so teams know exactly which accounts need follow-ups.",
      problem:
        "Finance teams spend 15+ hours every week manually checking spreadsheets and drafting repetitive invoice reminder emails.",
      solution:
        "An automated Python pipeline that parses balance sheets, groups clients by aging tier, and prepares structured reminders.",
      impact:
        "Saves over 15 hours of manual work weekly and speeds up cash collections while keeping client communication polite.",
    },
    {
      title: "Private Document Search (Local RAG)",
      metric: "100% Private / 0 Cloud API Fees",
      serviceTrack: "AI & Local LLM",
      tech: ["DeepSeek", "Ollama", "ChromaDB", "LangChain", "Python"],
      link: "https://www.linkedin.com/posts/razim-manzoor_rag-llm-ai-activity-7313875466493259776-90vf",
      description:
        "A private AI assistant that lets users search and chat with internal PDFs and documents locally on their own computer.",
      caseStudy:
        "Built using Ollama and ChromaDB to run open-source language models completely on local hardware. Chunks documents and provides exact source citations for every answer.",
      problem:
        "Uploading sensitive contracts or financial documents to third-party cloud AI tools creates data privacy and security risks.",
      solution:
        "A local-first document question-answering tool running open-source models directly on local hardware without sending data outside.",
      impact:
        "Provides instant answers with exact source citations, keeping data 100% private with zero recurring API costs.",
    },
    {
      title: "Automated Edge Defect Detection",
      metric: "Sub-45ms Real-Time Vision",
      serviceTrack: "Computer Vision & ML",
      tech: ["TensorFlow", "Keras", "OpenCV", "Python", "ONNX Runtime"],
      link: "https://github.com/razim-manzoor/Plant-Disease-Classification-CNN",
      description:
        "A computer vision tool that inspects products on production lines in real time to detect defects automatically.",
      caseStudy:
        "Trained a convolutional neural network (CNN) in TensorFlow and optimized it for fast edge execution using OpenCV and ONNX, running at over 22 frames per second.",
      problem:
        "Manual visual inspection on fast-moving lines leads to missed defects due to eye fatigue.",
      solution:
        "A lightweight CNN vision model that processes camera frames in real time and flags defects with high accuracy.",
      impact:
        "Achieves sub-45ms inspection speed without cloud lag, catching defects reliably before packaging.",
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
