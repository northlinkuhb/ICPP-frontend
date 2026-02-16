"use client";
import { motion } from "motion/react";
// import { useEffect, useState } from 'react';
type Props = {
  text: string;
  className?: string;
};
const TextStaggerAnimation = ({ text, className }: Props) => {
  const variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      initial="initial"
      transition={{ delay: 0.05, staggerChildren: 0.1 }}
      whileInView="animate"
      viewport={{ once: true }}
      className={`${className}`}
    >
      {text.split(" ").map((char, i) => (
        <motion.div key={i} variants={variants}>
          <span> {char}&nbsp;</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TextStaggerAnimation;
