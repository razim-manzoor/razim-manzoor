"use client";

import { useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Calculator, Clock, TrendingUp } from "lucide-react";

const aedFormatter = new Intl.NumberFormat("en-AE", {
    style: "currency",
    currency: "AED",
    maximumFractionDigits: 0,
});

export default function RoiCalculator() {
    const [hours, setHours] = useState(10);
    const [hourlyRate, setHourlyRate] = useState(50);
    const [automationRate, setAutomationRate] = useState(75);
    const [implementationCost, setImplementationCost] = useState(5000);
    const annualSavings = Math.round(hours * 52 * hourlyRate * (automationRate / 100));
    const paybackMonths = annualSavings > 0 ? Math.ceil((implementationCost / annualSavings) * 12) : null;
    const springHours = useSpring(hours, { stiffness: 90, damping: 18 });
    const barScale = useTransform(springHours, [0, 40], [0.04, 1]);

    return (
        <section className="py-20 md:py-32">
            <div className="container mx-auto px-5 md:px-8">
                <div className="grid gap-8 border-y border-[var(--card-border)] py-10 lg:grid-cols-[0.95fr_1.05fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-between gap-10"
                    >
                        <div>
                            <div className="mb-6 inline-flex items-center gap-2 bg-foreground px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-background">
                                <Calculator size={14} />
                                Recruiter-ready business case
                            </div>
                            <h2 className="text-4xl font-black uppercase leading-[0.95] md:text-7xl">
                                Turn manual work into savings.
                            </h2>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                                A simple way to show how I evaluate automation opportunities: estimate repeated hours, convert them into annual cost, then prioritize the workflow with the clearest business return.
                            </p>
                        </div>
                        <div className="border-l-4 border-[var(--accent)] bg-surface p-5 text-lg font-semibold leading-8">
                            Useful automation starts with a measurable process, not a tool demo.
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border border-[var(--card-border)] bg-surface p-5 shadow-xl md:p-8"
                    >
                        <div className="mb-8 flex items-center justify-between gap-4">
                            <h3 className="text-2xl font-black uppercase">Automation math</h3>
                            <TrendingUp size={28} className="text-[var(--accent)]" />
                        </div>

                        <div className="space-y-8">
                            <div>
                                <div className="mb-4 flex justify-between gap-4">
                                    <label htmlFor="manual-hours" className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-muted">
                                        <Clock size={16} /> Manual hours / week
                                    </label>
                                    <span className="text-4xl font-black">{hours}</span>
                                </div>
                                <input
                                    id="manual-hours"
                                    type="range"
                                    min="0"
                                    max="40"
                                    step="1"
                                    value={hours}
                                    onChange={(event) => setHours(Number(event.target.value))}
                                    className="w-full cursor-pointer accent-[var(--accent)]"
                                />
                                <div className="mt-3 flex justify-between text-xs font-bold uppercase tracking-[0.16em] text-muted">
                                    <span>0</span>
                                    <span>20</span>
                                    <span>40</span>
                                </div>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-muted">
                                    Loaded hourly cost (AED)
                                    <input
                                        type="number"
                                        min="1"
                                        value={hourlyRate}
                                        onChange={(event) => setHourlyRate(Math.max(1, Number(event.target.value) || 1))}
                                        className="border border-[var(--card-border)] bg-background px-3 py-3 text-base font-black text-foreground"
                                    />
                                </label>
                                <label className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-muted">
                                    Automation captured
                                    <span className="flex items-center gap-3 border border-[var(--card-border)] bg-background px-3 py-2 text-base font-black text-foreground">
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            step="5"
                                            value={automationRate}
                                            onChange={(event) => setAutomationRate(Number(event.target.value))}
                                            className="w-full cursor-pointer accent-[var(--accent)]"
                                        />
                                        {automationRate}%
                                    </span>
                                </label>
                            </div>

                            <div className="overflow-hidden border border-[var(--card-border)] bg-background p-5">
                                <p className="text-xs font-black uppercase tracking-[0.22em] text-muted">Potential annual savings (AED)</p>
                                <div className="mt-3 flex items-end gap-2">
                                    <span className="text-5xl font-black leading-none text-[var(--accent)] md:text-7xl">
                                        {aedFormatter.format(annualSavings)}
                                    </span>
                                    <span className="pb-2 text-sm font-bold uppercase text-muted">/ year</span>
                                </div>
                                <div className="mt-6 h-3 overflow-hidden bg-surface-strong">
                                    <motion.div className="h-full origin-left bg-[var(--accent)]" style={{ scaleX: barScale }} />
                                </div>
                                <label className="mt-5 grid gap-2 text-xs font-black uppercase tracking-[0.16em] text-muted">
                                    Estimated implementation cost
                                    <input
                                        type="number"
                                        min="0"
                                        step="500"
                                        value={implementationCost}
                                        onChange={(event) => setImplementationCost(Math.max(0, Number(event.target.value) || 0))}
                                        className="border border-[var(--card-border)] bg-surface px-3 py-2 text-base font-black text-foreground"
                                    />
                                </label>
                                <p className="mt-4 text-xs leading-5 text-muted">
                                    {paybackMonths === null ? "Add weekly hours to estimate payback." : paybackMonths === 0 ? "The estimate has no implementation cost." : `Estimated payback: ${paybackMonths} month${paybackMonths === 1 ? "" : "s"}.`} Assumes 52 working weeks and includes salary, overhead, and coordination drag.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
