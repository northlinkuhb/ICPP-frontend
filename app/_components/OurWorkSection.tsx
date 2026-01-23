import React from "react";
import SectionHeader from "./SectionHeader";
import RightArrow from "@/components/svg/RightArrow";
import LeftArrow from "@/components/svg/LeftArrow";
import ResearchCard from "./ResearchCard";
import { StaticImageData } from "next/image";

interface OurWorkSectionProps {
  researchData: Array<{
    image: StaticImageData;
    alt: string;
    title: string;
    author?: string;
    date: string;
  }>;
  policyData: Array<{
    image: StaticImageData;
    alt: string;
    title: string;
    author?: string;
    date: string;
  }>;
}

const OurWorkSection: React.FC<OurWorkSectionProps> = ({
  researchData,
  policyData,
}) => {
  return (
    <div className="clamp-[pt,40px,120px] clamp-[px,24px,80px]">
      <SectionHeader
        subtitle="our work"
        title="Latest in Research & Policy"
        description="Where ideas meet real-world impact"
      />
      <div className="clamp-[pt,24px,40px] clamp-[pb,16px,20px]">
        <div className="flex justify-between text-black">
          <div className="font-semibold clamp-[text,h4-m,h4-d] clamp-[leading,h4-m,h4-d] text-deep-blue">
            Research
            <div className="lg:inline lg:ml-[10px] underline font-normal clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d] text-black">
              View All
            </div>
          </div>
          <div className="flex gap-[8px]">
            <LeftArrow fill="light" />
            <RightArrow fill="black" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 clamp-[gap,16px,20px] clamp-[pb,24px,40px]">
        {researchData.map((item, index) => (
          <ResearchCard
            key={index}
            image={item.image}
            title={item.title}
            published_by={item.author}
            date={item.date}
          />
        ))}
      </div>

      <hr className="text-light-gray w-full" />

      {/* Policy Section */}
      <div className="clamp-[pt,24px,40px] clamp-[pb,16px,20px]">
        <div className="flex justify-between">
          <div className="font-semibold clamp-[text,h4-m,h4-d] clamp-[leading,h4-m,h4-d]  text-deep-blue">
            Policy
            <div className="lg:inline lg:ml-[10px] underline font-normal clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d] text-black">
              View All
            </div>
          </div>
          <div className="flex gap-[8px]">
            <LeftArrow fill="light" />
            <RightArrow fill="black" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 clamp-[gap,16px,20px] clamp-[pb,40px,120px]">
        {policyData.map((item, index) => (
          <ResearchCard
            key={index}
            image={item.image}
            title={item.title}
            published_by={item.author}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default OurWorkSection;
