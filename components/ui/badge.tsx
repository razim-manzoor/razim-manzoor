import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "emerald" | "amber";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantStyles = {
    default:
      "bg-[var(--foreground)] text-[var(--background)]",
    secondary:
      "bg-[var(--surface-hover)] text-[var(--foreground)] border border-[var(--border)]",
    outline:
      "border border-[var(--border)] text-[var(--foreground)] bg-transparent",
    emerald:
      "border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono",
    amber:
      "border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
