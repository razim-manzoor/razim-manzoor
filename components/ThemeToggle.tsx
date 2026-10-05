"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const mounted = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);

    if (!mounted) {
        return (
            <div aria-hidden="true" className="h-11 w-11 rounded-lg border border-[var(--border)] bg-[var(--surface)]" />
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="grid h-11 w-11 place-items-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-colors hover:bg-[var(--surface-hover)] cursor-pointer"
            aria-label="Toggle theme"
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
        >
            <motion.span
                key={isDark ? "dark" : "light"}
                initial={false}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
            >
                {isDark ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}
            </motion.span>
        </button>
    );
}
