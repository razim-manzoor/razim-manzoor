
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { USER_DATA } from "@/lib/data";

export default function HeroSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-primary dark:bg-white/5 dark:border-white/10 text-sm font-medium mb-6">
                        Based in {USER_DATA.location} • Available for immediate joining
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-primary dark:from-white dark:to-gray-400">{USER_DATA.name}</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-light mb-8 max-w-3xl mx-auto">
                        {USER_DATA.role}
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
                        Bridging the gap between technical data solutions and business goals.
                        I build automated workflows and GenAI systems that drive operational excellence.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all flex items-center gap-2"
                        >
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a
                            href="/Razim_Manzoor_Resume_V2.pdf"
                            target="_blank"
                            className="px-8 py-3 glass text-gray-700 dark:text-white rounded-full font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-all flex items-center gap-2"
                        >
                            Download Resume <Download size={18} />
                        </a>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
                >
                    <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
}
