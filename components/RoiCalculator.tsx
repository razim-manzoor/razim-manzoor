
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, DollarSign, Clock } from "lucide-react";

export default function RoiCalculator() {
    const [hours, setHours] = useState(10);
    const hourlyRate = 50; // Conservative estimate for specialized admin/analyst work
    const annualSavings = hours * 52 * hourlyRate;

    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                                <Calculator size={14} />
                                <span>First Principles Thinking</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                The Cost of <span className="text-gray-400 dark:text-gray-500 line-through">Thinking</span> Waiting.
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                                Business value isn't abstract—it's mathematical.
                                I don't just "do data"; I build systems that remove human latency from the equation.
                            </p>
                            <div className="p-6 bg-primary/5 dark:bg-white/5 border-l-2 border-primary rounded-r-xl">
                                <p className="italic text-gray-600 dark:text-gray-300">
                                    "Excellence is achieved not by adding mental models, but by systematically removing biases and noise (Subtractive Cognition)."
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Calculator Card */}
                    <div className="lg:w-1/2 w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 md:p-8 rounded-3xl border border-black/5 dark:border-white/10 relative"
                        >
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />

                            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                                Automation ROI Simulator
                            </h3>

                            <div className="space-y-8">
                                {/* Input Slider */}
                                <div>
                                    <div className="flex justify-between mb-4">
                                        <label className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                                            <Clock size={16} /> Manual Hours / Week
                                        </label>
                                        <span className="text-2xl font-bold text-foreground dark:text-white">{hours} hrs</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="40"
                                        step="1"
                                        value={hours}
                                        onChange={(e) => setHours(Number(e.target.value))}
                                        className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary hover:accent-primary-dark transition-all"
                                    />
                                    <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
                                        <span>0 hr</span>
                                        <span>20 hrs</span>
                                        <span>40 hrs</span>
                                    </div>
                                </div>

                                {/* Result Display */}
                                <div className="bg-white/50 dark:bg-black/40 rounded-xl p-6 border border-black/5 dark:border-white/5">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Potential Annual Savings</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-primary dark:from-green-400 dark:to-primary">
                                            ${annualSavings.toLocaleString()}
                                        </span>
                                        <span className="text-sm text-gray-500">/ year</span>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-600 mt-3">
                                        *Based on conservative $50/hr operational cost (Salary + Overhead)
                                    </p>
                                </div>

                                <div className="text-center">
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        This is the value I bring to the table. <br />
                                        <span className="text-primary font-semibold">Day One.</span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
