"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { HeroSlide } from "../_data/hero";
import PrimaryButton from "../../components/PrimaryButton";

interface HeroSectionProps {
  slides: HeroSlide[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 400);
  };

  const handleDotClick = (index: number) => {
    if (index !== currentSlide) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsAnimating(false);
      }, 400);
    }
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative h-[100vh] flex flex-col clamp-[rounded-bl,20px,40px] bg-black justify-end items-start clamp-[px,24px,80px] clamp-[pb,36px,60px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute top-0 left-0 w-full h-full  z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover "
            priority
          />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full relative z-20"
        >
          <h1 className="font-semibold clamp-[text,h1-m,h1-d] max-w-[30ch] clamp-[leading,h1-m,h1-d] text-white">
            {slide.title}
          </h1>
          <p className="clamp-[mt,12px,32px] clamp-[text,body1-m,body1-d] clamp-[leading,body1-m,body1-d] max-w-[80ch] text-white">
            {slide.description}
          </p>
          <PrimaryButton text="Our Research" />
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="flex clamp-[gap,5px,10px] clamp-[mt,12px,32px] z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className="outline-none focus:outline-none"
          >
            <motion.div
              className="h-[4px] w-[40px] cursor-pointer"
              animate={{
                backgroundColor:
                  index === currentSlide
                    ? "rgba(255,255,255,1)"
                    : "rgba(255,255,255,0.3)",
              }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
