"use client";

import React, { useRef } from "react";
import { motion, type HTMLMotionProps, useMotionTemplate, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export interface SpotlightCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: React.ReactNode;
  spotlightColor?: string;
  enableTilt?: boolean;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(16, 185, 129, 0.25)",
  enableTilt = false,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const spotlight = useMotionTemplate`radial-gradient(450px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`;
  const mask = useMotionTemplate`radial-gradient(240px circle at ${mouseX}px ${mouseY}px, black, transparent 80%)`;

  // 3D Tilt springs
  const rotateXSpring = useSpring(0, { stiffness: 300, damping: 25 });
  const rotateYSpring = useSpring(0, { stiffness: 300, damping: 25 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    mouseX.set(x);
    mouseY.set(y);

    if (enableTilt && !shouldReduceMotion) {
      const centerX = width / 2;
      const centerY = height / 2;
      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;
      rotateXSpring.set(rotateX);
      rotateYSpring.set(rotateY);
    }
  }

  function handleMouseLeave() {
    mouseX.set(-1000);
    mouseY.set(-1000);
    if (enableTilt && !shouldReduceMotion) {
      rotateXSpring.set(0);
      rotateYSpring.set(0);
    }
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={
        enableTilt && !shouldReduceMotion
          ? {
              rotateX: rotateXSpring,
              rotateY: rotateYSpring,
              transformStyle: "preserve-3d",
            }
          : undefined
      }
      className={cn(
        "group relative rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition-shadow duration-300 hover:shadow-lg",
        className
      )}
      {...props}
    >
      {/* Spotlight Radial Background Glow */}
      {!shouldReduceMotion && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: spotlight,
          }}
        />
      )}

      {/* Spotlight Border Glow */}
      {!shouldReduceMotion && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl border border-emerald-500/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            maskImage: mask,
            WebkitMaskImage: mask,
          }}
        />
      )}

      {/* Card Content Container */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </motion.div>
  );
}
