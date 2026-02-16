import React from "react";
import SectionHeader from "./SectionHeader";
import { TViewpointCard } from "@/network/types/home.type";
import CardAnimation from "@/components/animations/CardAnimation";

interface ViewpointSectionProps {
  viewpointData: TViewpointCard[];
}

const ViewpointSection = ({ viewpointData }: ViewpointSectionProps) => {
  return (
    <div className="clamp-[px,24px,80px] clamp-[py,40px,120px] text-black">
      <SectionHeader
        title="Our Viewpoints"
        subtitle="Insights"
        viewAllLink="/insights?tab=viewpoints"
      />

      <div className="clamp-[mt,24px,40px] grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 clamp-[gap,16px,20px]">
        {viewpointData.map((viewpoint, index) => (
          <CardAnimation delay={0.1} index={index} key={index}>
            <div className="relative w-full clamp-[h,204px,310px] overflow-hidden ">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${viewpoint.videoId}`}
                title={viewpoint.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div className="clamp-[mt,12px,20px] text-electric-blue clamp-[text,caption1-m,caption1-d] clamp-[leading,caption1-m,caption1-d]">
              {viewpoint.category}
            </div>

            <div className="clamp-[mt,4px,10px] line-clamp-2 clamp-[text,h4-m,h4-d] clamp-[leading,h4-m,h4-d] font-semibold">
              {viewpoint.title}
            </div>

            <div className="clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d] clamp-[mt,4px,10px]">
              Episode by <span>{viewpoint.author.name}</span>
            </div>

            <div className="clamp-[text,caption1-m,caption1-d] clamp-[leading,caption1-m,caption1-d] clamp-[mt,4px,10px] text-gray">
              {viewpoint.createdAt}
            </div>
          </CardAnimation>
        ))}
      </div>
    </div>
  );
};

export default ViewpointSection;
