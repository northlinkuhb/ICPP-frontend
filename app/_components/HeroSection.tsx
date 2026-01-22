'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import type { HeroSlide } from '../_data/hero'
import PrimaryButton from '../../components/PrimaryButton'

interface HeroSectionProps {
  slides: HeroSlide[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <div className='h-[100vh] flex flex-col justify-end items-start clamp-[px,24px,80px] clamp-[pb,36px,60px]'>
      <Image
        src={slide.image}
        alt={slide.alt}
        className='absolute top-0 left-0 w-full h-full object-cover -z-10 clamp-[rounded-bl,20px,40px]'
        priority
      />
      <h1 className='font-semibold clamp-[text,h1-m,h1-d] max-w-[30ch] clamp-[leading,h1-m,h1-d]'>
        {slide.title}
      </h1>
      <p className='clamp-[mt,12px,32px] clamp-[text,body1-m,body1-d] clamp-[leading,body1-m,body1-d] max-w-[80ch]'>
        {slide.description}
      </p>
      <PrimaryButton text='Our Research' />
      <div className='flex clamp-[gap,5px,10px] clamp-[mt,12px,32px]'>
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-[4px] w-[40px] cursor-pointer transition-opacity ${
              index === currentSlide ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSection