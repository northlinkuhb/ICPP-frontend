"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import logo from "../public/svg/logo_white.svg";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const isFirstVisit = localStorage.getItem("visited") === null;

    if (isFirstVisit) {
      localStorage.setItem("visited", "true");
    }

    const timer = setTimeout(
      () => {
        setIsLoading(false);
      },
      isFirstVisit ? 2000 : 1500,
    );

    return () => clearTimeout(timer);
  }, []);


  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-deep-blue z-[999999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src={logo}
              alt="icpp-logo"
              className="clamp-[w,106px,222px] clamp-[h,32px,60px]"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
