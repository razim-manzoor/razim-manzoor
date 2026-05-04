"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const frame = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="grid h-10 w-10 place-items-center border border-[var(--card-border)] bg-surface text-foreground transition-transform hover:-translate-y-0.5"
            aria-label="Toggle theme"
            title="Toggle theme"
        >
            <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.3 }}
            >
                {theme === "dark" ? <Moon size={18} /> : <Sun size={18} />}
            </motion.span>
        </button>
    );
}
