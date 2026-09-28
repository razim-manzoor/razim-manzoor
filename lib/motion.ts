import type { Transition } from "motion/react";

/**
 * Standardized Spring Physics Presets
 * Mandated by ui-craft-motion and enterprise-ui-architecture
 */

// Snappy Micro-interactions (Buttons, toggles, badges, chips) - duration < 200ms
export const snappySpring: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
  mass: 0.8,
};

// Natural Spatial Transitions (Modals, tabs, card expansions) - duration ~ 250-300ms
export const spatialSpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 28,
  mass: 1,
};

// Gentle Content Expansions (Ambient indicators, floating pulses)
export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 24,
  mass: 1.2,
};

// Stagger helper for orchestrating container reveals
export const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// Item reveal variant
export const itemFadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: spatialSpring,
  },
};
