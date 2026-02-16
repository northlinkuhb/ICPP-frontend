"use client";
import React from "react";
import SectionHeader from "./SectionHeader";
import ResearchCard from "./ResearchCard";
import { TResearchCard } from "@/network/types/home.type";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import CardAnimation from "@/components/animations/CardAnimation";

interface OurWorkSectionProps {
  researchData: TResearchCard[];
  policyData: TResearchCard[];
}

const OurWorkSection: React.FC<OurWorkSectionProps> = ({
  researchData,
  policyData,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const plugin = React.useRef<any>(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  return (
    <div className="clamp-[py,40px,120px] clamp-[px,24px,80px]">
      <SectionHeader
        subtitle="our work"
        title="Latest in Research & Policy"
        description="Where ideas meet real-world impact"
      />
      <Carousel
        plugins={[plugin.current]}
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <div className="clamp-[pt,24px,40px] clamp-[pb,16px,20px]">
          <div className="flex justify-between text-black">
            <div className="font-semibold clamp-[text,h4-m,h4-d] clamp-[leading,h4-m,h4-d] text-deep-blue">
              Research
              <Link
                href={"/research"}
                className="lg:inline lg:ml-[10px] underline hover:text-electric-blue duration-300 ease-in-out transition-all font-normal clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d] text-black"
              >
                View All
              </Link>
            </div>
            <div className="flex text-black gap-[18px]">
              <CarouselPrevious aria-label="Scroll left"></CarouselPrevious>
              <CarouselNext aria-label="Scroll right"></CarouselNext>
            </div>
          </div>
        </div>
        <CarouselContent className="clamp-[pb,24px,40px]">
          {researchData.map((item, i) => (
            <CarouselItem
              key={item.id}
              className="basis-full lg:basis-1/3 clamp-[pr,16px,20px]"
            >
              <CardAnimation delay={0.1} index={i}>
                <ResearchCard
                  image={item.imageUrl}
                  title={item.title}
                  published_by={item.author.name}
                  date={item.createdAt}
                />
              </CardAnimation>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <hr className="text-light-gray w-full" />

      {/* Policy Section */}
      <Carousel
        plugins={[plugin.current]}
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <div className="clamp-[pt,24px,40px] clamp-[pb,16px,20px]">
          <div className="flex justify-between">
            <div className="font-semibold clamp-[text,h4-m,h4-d] clamp-[leading,h4-m,h4-d]  text-deep-blue">
              Policy
              <Link
                href={"/policy"}
                className="lg:inline lg:ml-[10px] underline hover:text-electric-blue duration-300 ease-in-out transition-all font-normal clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d] text-black"
              >
                View All
              </Link>
            </div>
            <div className="flex gap-[18px] text-black">
              <CarouselPrevious aria-label="Scroll left"></CarouselPrevious>
              <CarouselNext aria-label="Scroll right"></CarouselNext>
            </div>
          </div>
        </div>
        <CarouselContent className="clamp-[pb,24px,40px]">
          {policyData.map((item, i) => (
            <CarouselItem
              key={item.id}
              className="basis-full lg:basis-1/3 clamp-[pr,16px,20px]"
            >
              <CardAnimation delay={0.1} index={i}>
                <ResearchCard
                  image={item.imageUrl}
                  title={item.title}
                  published_by={item.author.name}
                  date={item.createdAt}
                />
              </CardAnimation>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default OurWorkSection;
