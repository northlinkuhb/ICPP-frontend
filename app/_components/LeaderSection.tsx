"use client";
import React from "react";
import RightArrow from "@/components/svg/RightArrow";
import LeftArrow from "@/components/svg/LeftArrow";
import AuthorCard from "@/components/ui/AuthorCard";
import { TAdvisoryCard } from "@/network/types/home.type";
import SectionSubHeader from "@/components/ui/SectionSubHeader";
import SectionHeader from "./SectionHeader";
import SectionMainHeader from "@/components/ui/SectionMainHeader";
import SectionHeaderDescription from "@/components/ui/SectionHeaderDescription";

interface LeaderSectionProps {
  // You can add props here if needed
  advisoriesData: TAdvisoryCard[];
}
const LeaderSection: React.FC<LeaderSectionProps> = ({ 
  advisoriesData 
}) => {

  return (
    <div className="bg-electric-blue">
      <div className="clamp-[py,40px,120px] clamp-[px,24px,80px] text-black clamp-[rounded-bl,20px,40px] bg-white">
        <div>
          <SectionSubHeader subtitle="LEADERS OF ICPP"/>
          <hr className=" text-black w-full clamp-[mb,8px,40px]" />
          <div className="flex justify-between items-end">
            <div>
              <SectionMainHeader label="The spark that started everything."/>
              <SectionHeaderDescription description="The minds behind the mission; the architects of our purpose"/>
            </div>
          </div>
        </div>
        <AuthorCard leadersData={advisoriesData} />
        <div className="lg:hidden flex justify-between items-center mt-3.5">
          <div className="flex gap-2">
            <LeftArrow fill="gray" />
            <RightArrow fill="black" />
          </div>
          <div className="underline clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d] text-black">
            View All
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderSection;
