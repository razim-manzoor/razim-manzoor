"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FileText,
  ShieldCheck,
  BrainCircuit,
  Workflow,
  BarChart3,
  CheckCircle2,
  Lock,
  Zap,
} from "lucide-react";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { SpotlightCard } from "@/components/magicui/spotlight-card";
import { snappySpring, spatialSpring } from "@/lib/motion";

interface PipelineNode {
  id: string;
  stageNumber: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  latency: string;
  privacy: string;
  businessImpact: string;
  schemaExample: string;
  techStack: string[];
}

const PIPELINE_NODES: PipelineNode[] = [
  {
    id: "ingestion",
    stageNumber: "01",
    title: "Inbound Ingestion",
    category: "Data Capture",
    icon: FileText,
    latency: "15ms",
    privacy: "Encrypted",
    businessImpact: "Captures incoming PDFs, web forms, emails, or WhatsApp messages automatically with zero lost leads.",
    techStack: ["Webhooks", "FastAPI", "Cloudflare", "Cloud Storage"],
    schemaExample: `{
  "source": "pdf_invoice_or_web_lead",
  "payload_type": "multipart/form-data",
  "raw_size_bytes": 142850,
  "timestamp": "2026-10-02T10:00:00Z"
}`,
  },
  {
    id: "guardrail",
    stageNumber: "02",
    title: "Data Cleaning",
    category: "Validation",
    icon: ShieldCheck,
    latency: "25ms",
    privacy: "Sanitized",
    businessImpact: "Validates fields, removes junk inputs, and formats data cleanly before passing to workflows.",
    techStack: ["Python", "JSON Schema", "Pydantic", "Zod"],
    schemaExample: `{
  "is_valid": true,
  "fields_cleaned": 12,
  "spam_detected": false,
  "ready_for_processing": true
}`,
  },
  {
    id: "rag",
    stageNumber: "03",
    title: "AI Search & QA",
    category: "Knowledge Engine",
    icon: BrainCircuit,
    latency: "85ms",
    privacy: "100% Private / Local",
    businessImpact: "Searches internal documents and contracts to answer questions with accurate source references.",
    techStack: ["Local LLMs", "Ollama", "ChromaDB", "LangChain", "Vector Embeddings"],
    schemaExample: `{
  "model": "deepseek-r1 / llama3",
  "source_matched": "Company_SOP_v2.pdf",
  "similarity_score": 0.94,
  "external_cloud_leak": false
}`,
  },
  {
    id: "orchestration",
    stageNumber: "04",
    title: "Workflow Engine",
    category: "Automation",
    icon: Workflow,
    latency: "40ms",
    privacy: "Internal Server",
    businessImpact: "Automates multi-step business actions: CRM deal updates, team alerts, and automated task assignments.",
    techStack: ["n8n", "Make.com", "Python", "PostgreSQL"],
    schemaExample: `{
  "workflow_id": "lead_intake_v2",
  "execution_status": "success",
  "crm_record_created": true,
  "team_alert_sent": true
}`,
  },
  {
    id: "delivery",
    stageNumber: "05",
    title: "Live Action & Output",
    category: "Output & Dashboards",
    icon: BarChart3,
    latency: "10ms",
    privacy: "Direct Output",
    businessImpact: "Delivers the final output: auto-refreshed Power BI dashboards, instant WhatsApp notifications, or invoices.",
    techStack: ["Power BI (DAX)", "WhatsApp Cloud API", "Stripe", "Next.js"],
    schemaExample: `{
  "dashboard_refreshed": true,
  "mobile_alert_dispatched": true,
  "reporting_speedup": "3 days to 2 hours"
}`,
  },
];

export function InteractivePipeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const [activeNodeId, setActiveNodeId] = useState<string>("rag");
  const activeNode = PIPELINE_NODES.find((n) => n.id === activeNodeId) || PIPELINE_NODES[2];

  return (
    <section id="pipeline" className="relative py-20 md:py-28 overflow-hidden blueprint-grid">
      <div className="container mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
            How The Systems Work
          </h2>
          <p className="mt-4 text-base text-[var(--muted)] leading-relaxed md:text-lg">
            An interactive look at how data moves from inbound files and leads into automated processing, private AI search, and instant team action.
          </p>
        </div>

        {/* Interactive Canvas */}
        <div
          ref={containerRef}
          className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 md:p-10 shadow-sm"
        >
          {/* Animated Connecting Beams between consecutive nodes */}
          <div className="hidden lg:block">
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={nodeRefs[0]}
              toRef={nodeRefs[1]}
              curvature={0}
              gradientStartColor="#10b981"
              gradientStopColor="#34d399"
              duration={3.5}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={nodeRefs[1]}
              toRef={nodeRefs[2]}
              curvature={0}
              gradientStartColor="#10b981"
              gradientStopColor="#34d399"
              duration={3.5}
              delay={0.6}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={nodeRefs[2]}
              toRef={nodeRefs[3]}
              curvature={0}
              gradientStartColor="#10b981"
              gradientStopColor="#34d399"
              duration={3.5}
              delay={1.2}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={nodeRefs[3]}
              toRef={nodeRefs[4]}
              curvature={0}
              gradientStartColor="#10b981"
              gradientStopColor="#34d399"
              duration={3.5}
              delay={1.8}
            />
          </div>

          {/* Node Grid */}
          <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PIPELINE_NODES.map((node, index) => {
              const NodeIcon = node.icon;
              const isActive = node.id === activeNodeId;

              return (
                <div key={node.id} ref={nodeRefs[index]} className="relative">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={snappySpring}
                    onClick={() => setActiveNodeId(node.id)}
                    className={`w-full text-left rounded-xl p-4 transition-all border cursor-pointer ${
                      isActive
                        ? "border-[var(--primary)] bg-[var(--surface-hover)] shadow-md"
                        : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div
                        className={`grid h-9 w-9 place-items-center rounded-lg ${
                          isActive
                            ? "bg-[var(--primary)] text-white"
                            : "bg-[var(--surface-hover)] text-[var(--muted)]"
                        }`}
                      >
                        <NodeIcon size={18} />
                      </div>
                      <span className="text-[10px] font-mono font-bold tracking-wider text-[var(--muted)]">
                        STAGE {node.stageNumber}
                      </span>
                    </div>

                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--primary)]">
                      {node.category}
                    </p>
                    <h3 className="mt-1 text-sm font-bold text-[var(--foreground)]">
                      {node.title}
                    </h3>

                    <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[var(--muted)]">
                      <span className="flex items-center gap-1">
                        <Zap size={12} className="text-amber-500" /> {node.latency}
                      </span>
                      <span className="flex items-center gap-1">
                        <Lock size={12} className="text-emerald-500" />
                        {node.id === "rag" ? "Private" : "Secure"}
                      </span>
                    </div>
                  </motion.button>
                </div>
              );
            })}
          </div>

          {/* Detailed Node Inspector Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={spatialSpring}
              className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--surface-hover)] p-6 md:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                {/* Left: Spec Details */}
                <div>
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[var(--primary)] px-2.5 py-0.5 text-xs font-mono font-bold text-white">
                      Stage {activeNode.stageNumber}
                    </span>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)]">
                      {activeNode.category}
                    </span>
                  </div>

                  <h4 className="mt-2 text-2xl font-bold tracking-tight text-[var(--foreground)]">
                    {activeNode.title}
                  </h4>

                  <p className="mt-3 text-sm text-[var(--foreground)] leading-relaxed">
                    {activeNode.businessImpact}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3">
                      <span className="font-mono text-[10px] uppercase text-[var(--muted)] block">
                        Latency SLA
                      </span>
                      <span className="mt-1 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                        {activeNode.latency}
                      </span>
                    </div>
                    <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3">
                      <span className="font-mono text-[10px] uppercase text-[var(--muted)] block">
                        Privacy Level
                      </span>
                      <span className="mt-1 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                        {activeNode.privacy}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5">
                    <span className="font-mono text-[10px] uppercase text-[var(--muted)] block mb-2">
                      Underlying Technology Stack
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeNode.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-xs font-mono text-[var(--foreground)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Real Payload Schema Inspector */}
                <div className="flex flex-col justify-between rounded-xl border border-[var(--border)] bg-[#09090b] p-4 text-emerald-400 font-mono text-xs overflow-hidden">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3 text-[11px] text-zinc-400">
                    <span className="flex items-center gap-1.5 font-bold">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Payload Inspection Console
                    </span>
                    <span className="text-[10px] text-zinc-500">JSON Schema</span>
                  </div>
                  <pre className="overflow-x-auto text-[11px] leading-relaxed text-zinc-300">
                    <code>{activeNode.schemaExample}</code>
                  </pre>
                  <div className="mt-4 pt-2 border-t border-white/10 text-[10px] text-zinc-500 flex items-center justify-between">
                    <span>Validation: PASSED</span>
                    <span className="text-emerald-400">Zero Leakage</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
