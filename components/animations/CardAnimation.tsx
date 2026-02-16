"use client";
import { motion } from "motion/react";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  index: number;
  delay: number;
  x1?: number;
  x2?: number;
  y1?: number;
  y2?: number;
  className?: string;
};

const CardAnimation = ({
  children,
  className,
  index,
  delay,
  x1,
  x2,
  y1,
  y2,
}: Props) => {
  // const [value, setValue] = useState()
  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
          x: x1,
          y: y1 ? y1 : 20,
        },
        animate: () => ({
          opacity: 1,
          x: x2,
          y: y2 ? y2 : 0,
          transition: { delay: delay * index, ease: "easeInOut" },
        }),
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`${className}`}
    >
      {children}
    </motion.div>
  );
};
export default CardAnimation;
