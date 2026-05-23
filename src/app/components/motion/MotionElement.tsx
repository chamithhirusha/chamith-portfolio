"use client";

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";

type MotionVariant =
  | "fade"
  | "rise"
  | "slide-left"
  | "slide-right"
  | "scale"
  | "tilt"
  | "clip";

interface Props extends Omit<
  HTMLMotionProps<"div">,
  "variants" | "initial" | "animate" | "transition"
> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  variant?: MotionVariant;
  amount?: number;
  once?: boolean;

  // 👇 NEW
  playKey?: string | number;
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function MotionElement({
  children,
  className,
  delay = 0,
  duration = 0.75,
  variant = "rise",
  playKey,
  ...props
}: Props) {
  const reduceMotion = useReducedMotion();

  const variants: Record<MotionVariant, Variants> = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    rise: {
      hidden: { opacity: 0, y: reduceMotion ? 0 : 34 },
      visible: { opacity: 1, y: 0 },
    },
    "slide-left": {
      hidden: { opacity: 0, x: reduceMotion ? 0 : 42 },
      visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
      hidden: { opacity: 0, x: reduceMotion ? 0 : -42 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: reduceMotion ? 1 : 0.94 },
      visible: { opacity: 1, scale: 1 },
    },
    tilt: {
      hidden: {
        opacity: 0,
        y: reduceMotion ? 0 : 36,
        rotateX: reduceMotion ? 0 : -8,
      },
      visible: { opacity: 1, y: 0, rotateX: 0 },
    },
    clip: {
      hidden: {
        opacity: 1,
        y: reduceMotion ? 0 : 28,
        clipPath: reduceMotion ? "inset(0 0 0 0)" : "inset(0 0 18% 0)",
      },
      visible: {
        opacity: 1,
        y: 0,
        clipPath: "inset(0 0 0 0)",
      },
    },
  };

  return (
    <motion.div
      key={playKey} // 👈 THIS is what forces re-mount + replay
      className={className}
      variants={variants[variant]}
      initial="hidden"
      animate="visible"
      transition={{ delay, duration, ease }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
