"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

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
            className="grid h-11 w-11 place-items-center rounded-xl text-[var(--foreground)] hover:bg-[var(--surface-hover)]"
            aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
            title={isDark ? "Switch to light theme" : "Switch to dark theme"}
        >
            {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
        </button>
    );
}
