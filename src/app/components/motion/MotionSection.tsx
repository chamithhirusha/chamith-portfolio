"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  once?: boolean;
}

export default function MotionSection({
  children,
  className,
  delay = 0,
  amount = 0.18,
  once = true,
}: Props) {
  const reduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 44,
      filter: reduceMotion ? "none" : "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay,
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}
