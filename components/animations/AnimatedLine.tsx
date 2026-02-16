// components/AnimatedLine.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface AnimatedLineProps {
  className?: string;
  delay?: number;
}

export default function AnimatedLine({
  className = "",
  delay = 0,
}: AnimatedLineProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ width: 0 }}
      animate={isInView ? { width: "100%" } : { width: 0 }}
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`h-[1px] bg-white ${className}`}
    />
  );
}
