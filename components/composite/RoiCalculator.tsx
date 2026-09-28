"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Clock, TrendingUp, DollarSign, Sparkles } from "lucide-react";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Card } from "@/components/ui/card";
import { snappySpring } from "@/lib/motion";

export function RoiCalculator() {
  const [hours, setHours] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(65);
  const [automationRate, setAutomationRate] = useState(80);
  const [implementationCost, setImplementationCost] = useState(6000);

  // Math: hours * 52 weeks * rate * automationRate
  const annualSavings = Math.round(hours * 52 * hourlyRate * (automationRate / 100));
  const paybackMonths =
    annualSavings > 0
      ? Number(((implementationCost / annualSavings) * 12).toFixed(1))
      : 0;

  return (
    <section id="roi" className="relative py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-5 md:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
            Operational ROI Simulator
          </h2>
          <p className="mt-4 text-base text-[var(--muted)] leading-relaxed md:text-lg">
            Quantitative modeling for process automation: calculate manual repetitive hours, convert them into annual overhead drag in AED, and model the exact payback timeline before deploying code.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: Input Sliders */}
          <Card className="p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
              <h3 className="text-lg font-bold text-[var(--foreground)]">
                Bottleneck Parameters
              </h3>
              <Clock size={18} className="text-[var(--primary)]" />
            </div>

            {/* Slider 1: Hours */}
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <label htmlFor="manual-hours" className="font-semibold text-[var(--foreground)]">
                  Manual hours spent per week
                </label>
                <span className="font-mono font-bold text-[var(--primary)] text-base tabular-nums">
                  {hours} hrs/wk
                </span>
              </div>
              <input
                id="manual-hours"
                type="range"
                min="2"
                max="40"
                step="1"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full accent-[var(--primary)] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-[var(--muted)] mt-1">
                <span>2 hrs</span>
                <span>20 hrs</span>
                <span>40 hrs</span>
              </div>
            </div>

            {/* Slider 2: Hourly Cost */}
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <label htmlFor="hourly-rate" className="font-semibold text-[var(--foreground)]">
                  Blended team cost (AED / hour)
                </label>
                <span className="font-mono font-bold text-[var(--primary)] text-base tabular-nums">
                  AED {hourlyRate}/hr
                </span>
              </div>
              <input
                id="hourly-rate"
                type="range"
                min="30"
                max="250"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full accent-[var(--primary)] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-[var(--muted)] mt-1">
                <span>AED 30</span>
                <span>AED 140</span>
                <span>AED 250</span>
              </div>
            </div>

            {/* Slider 3: Automation Efficiency */}
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <label htmlFor="automation-rate" className="font-semibold text-[var(--foreground)]">
                  Automated throughput target
                </label>
                <span className="font-mono font-bold text-[var(--primary)] text-base tabular-nums">
                  {automationRate}%
                </span>
              </div>
              <input
                id="automation-rate"
                type="range"
                min="40"
                max="95"
                step="5"
                value={automationRate}
                onChange={(e) => setAutomationRate(Number(e.target.value))}
                className="w-full accent-[var(--primary)] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-[var(--muted)] mt-1">
                <span>40% (Assisted)</span>
                <span>75%</span>
                <span>95% (Zero-Touch)</span>
              </div>
            </div>
          </Card>

          {/* Right: Real-Time Economic Outcome */}
          <div className="flex flex-col justify-between rounded-xl border border-[var(--border)] bg-[var(--surface-hover)] p-6 md:p-8">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--muted)]">
                  Financial Engineering Projection
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                  <TrendingUp size={13} /> {automationRate}% Efficiency
                </span>
              </div>

              {/* Annual Savings Headline */}
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--muted)] block">
                  Projected Annual Labor Savings
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-black tracking-tight text-[var(--foreground)] font-mono tabular-nums">
                    AED <NumberTicker value={annualSavings} />
                  </span>
                </div>
                <p className="mt-2 text-xs text-[var(--muted)]">
                  Recovers approximately {Math.round(hours * 52 * (automationRate / 100))} productive hours annually.
                </p>
              </div>

              {/* Payback Metric Card */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
                  <span className="text-[11px] font-mono uppercase text-[var(--muted)] block">
                    Target Payback Period
                  </span>
                  <span className="text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400 mt-1 block tabular-nums">
                    {paybackMonths} Months
                  </span>
                  <span className="text-[10px] text-[var(--muted)] mt-0.5 block">
                    Based on standard turnkey sprint
                  </span>
                </div>

                <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4">
                  <span className="text-[11px] font-mono uppercase text-[var(--muted)] block">
                    Weekly Hours Saved
                  </span>
                  <span className="text-2xl font-black font-mono text-[var(--foreground)] mt-1 block tabular-nums">
                    {Number(((hours * automationRate) / 100).toFixed(1))} hrs/wk
                  </span>
                  <span className="text-[10px] text-[var(--muted)] mt-0.5 block">
                    High-margin reallocation
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between">
              <span className="text-xs text-[var(--muted)]">
                Have specific workflow bottleneck data?
              </span>
              <a
                href="#scope-builder"
                className="text-xs font-bold text-[var(--primary)] hover:underline inline-flex items-center gap-1"
              >
                Configure Solution Scope &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
