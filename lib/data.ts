
import { Mail, Phone, MapPin, Linkedin, Github, FileText, Globe } from "lucide-react";

export const USER_DATA = {
  name: "Razim Manzoor",
  role: "Business Analyst | AI Strategist | Automation Specialist",
  location: "Dubai, UAE",
  contact: {
    email: "manzoorrazim@gmail.com",
    phone: "+971 50 300 1697",
    linkedin: "https://www.linkedin.com/in/razim-manzoor",
  },
  summary:
    "Business Strategist & AI Implementer. I don't just analyze data; I build the systems that automate the analysis.",
  detailedBio: [
    "Bridging the gap between technical complexity and business reality.",
    "Specialized in: Automated Workflows (Power Automate), GenAI Solutions (RAG), and Real-time Intelligence (Power BI).",
  ],
  stats: [
    { label: "Revenue Growth Opportunity", value: "15%" },
    { label: "Manual Effort Reduction", value: "45%" },
    { label: "Reporting Time Reduced", value: "3 Days to 2 Hrs" },
  ],
  skills: {
    business: [
      "Strategic Planning",
      "KPI Analysis",
      "Process Mining",
      "ROI Assessment",
      "Market Segmentation",
      "Requirement Gathering",
      "Stakeholder Management",
    ],
    technical: [
      "Generative AI (LLMs)",
      "RAG Architecture",
      "Prompt Engineering",
      "AI Agents",
      "Power Automate",
      "UiPath",
      "Power BI (DAX)",
      "Python (Pandas, Scikit-learn)",
      "SQL",
      "Azure",
      "Tableau",
    ],
  },
  experience: [
    {
      id: 1,
      role: "Data Strategy Associate (Industrial Trainee)",
      company: "Luminar Technolab",
      location: "Kochi, India",
      period: "Jun 2024 -- Mar 2025",
      achievements: [
        "Completed a 9-month intensive industrial simulation focused on building end-to-end AI & Business Intelligence solutions for enterprise use cases (Capstone Scope).",
        "Developed a customer segmentation model identifying a projected 15% revenue uplift opportunity through targeted cross-selling strategies.",
        "Engineered a Power BI automated workflow designed to slash reporting latency by 95% (simulating a reduction from 3 days to 2 hours).",
        "Built and deployed RAG (Retrieval-Augmented Generation) pipelines to automate document analysis, demonstrating the capability to reduce manual research time by 80%.",
      ],
    },
    {
      id: 2,
      role: "Associate AI and Data Analytics Engineer",
      company: "Resemble Systems",
      location: "Kochi, India",
      period: "Nov 2023 -- May 2024",
      achievements: [
        "Led a finance automation initiative using Power Automate, streamlining invoice processing workflows which reduced manual data entry effort by 45%.",
        "Conducted Process Mining to map operational workflows, identifying bottlenecks and implementing RPA solutions that improved cycle times by 20%.",
        "Designed HR Analytics Dashboards to visualize attrition and engagement KPIs, enabling data-driven resource planning.",
        "Collaborated on deploying automated solutions via Azure, ensuring scalable and secure data handling.",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Business Administration (MBA)",
      field: "Data Science & Analytics",
      institution: "JAIN University",
      year: "2021 -- 2023",
      details: "Relevant Coursework: Financial Analysis, Business Statistics, Marketing Analytics, Strategic Management.",
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      field: "Computer Applications",
      institution: "Kannur University",
      year: "2018 -- 2021",
    },
    {
      degree: "Higher Secondary (+2)",
      field: "Computer Science",
      institution: "St. Joseph's HSS Thalassery",
      year: "2016 -- 2018",
    },
    {
      degree: "SSLC (10th)",
      field: "General Education",
      institution: "St. Joseph's HSS Thalassery",
      year: "2015 -- 2016",
    },
  ],
  projects: [
    {
      title: "LiquidityAI: Automated Accounts Receivable Engine",
      tech: ["Python", "Streamlit", "AI Agents", "Zero-Touch"],
      description: "Developed a 'Zero-Touch' Python system to automate invoice collections, reducing daily manual effort by 80% (3 hours to 5 minutes). Engineered a tiered logic gate (VIP vs. High Risk) to customize communication tone.",
    },
    {
      title: "Secure Document Analysis Agent (Local RAG)",
      tech: ["DeepSeek", "Ollama", "RAG", "Privacy-focused"],
      description: "Built a privacy-focused AI tool allowing businesses to query internal PDFs without external data exposure. Leveraged DeepSeek & Ollama to create a local 'Chat with your Data' solution.",
    },
    {
      title: "Automated Quality Control System",
      tech: ["CNN", "Computer Vision", "Deep Learning"],
      description: "Developed a Convolutional Neural Network (CNN) model to automate image classification, simulating an industrial Quality Assurance (QA) workflow. Reduced manual inspection time and human error rates.",
    },
  ],
  certifications: [
    "KPMG Data Analytics Consulting Virtual Internship",
    "Accenture Data Analytics & Visualization Virtual Experience",
    "Google Advanced Data Analytics Professional Certificate",
    "Generative AI with Large Language Models (Coursera)",
    "Google Data Analytics Specialization",
  ],
};
