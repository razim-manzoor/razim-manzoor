"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { snappySpring } from "@/lib/motion";

const subscribe = () => () => {};
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const mounted = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot);
    const reduced = useReducedMotion();

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
            className="relative grid h-11 w-11 place-items-center rounded-xl text-[var(--foreground)] hover:bg-[var(--surface-hover)] active:scale-95 transition-transform"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={isDark ? "dark" : "light"}
                    initial={reduced ? false : { rotate: -90, scale: 0.7, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={reduced ? undefined : { rotate: 90, scale: 0.7, opacity: 0 }}
                    transition={reduced ? { duration: 0 } : snappySpring}
                    className="grid place-items-center"
                >
                    {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
                </motion.span>
            </AnimatePresence>
        </button>
    );
}
