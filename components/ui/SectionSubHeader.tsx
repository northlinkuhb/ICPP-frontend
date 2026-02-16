"use client";

import React from "react";
import { motion, cubicBezier } from "framer-motion";
import { cn } from "../utils/tailwind";

type SectionSubHeaderProps = {
  subtitle: string;
  className?: string;
  delay?: number;
};

const SectionSubHeader = ({
  subtitle,
  className,
  delay = 0,
}: SectionSubHeaderProps) => {
  const letters = subtitle.toUpperCase().split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        "text-black clamp-[pb,4px,10px] font-geist-mono clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d]",
        className,
      )}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default SectionSubHeader;
