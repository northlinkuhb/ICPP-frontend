"use client";
import React from "react";
import Image from "next/image";
import leader1 from "@public/leaders/asis.png";
import leader2 from "@public/leaders/leader2.png";
import leader3 from "@public/leaders/leader3.png";
import RightArrow from "@/components/svg/RightArrow";
import LeftArrow from "@/components/svg/LeftArrow";
import AuthorCard from "@/components/ui/AuthorCard";

const LeaderSection: React.FC = () => {
  const leadersData = [
    {
      src: leader1,
      alt: "leader-1",
      name: "Name Surname 1",
      title: "President",
    },
    {
      src: leader2,
      alt: "leader-2",
      name: "Name Surname 2",
      title: "Vice President",
    },
    {
      src: leader3,
      alt: "leader-3",
      name: "Name Surname 3",
      title: "Director",
    },
    {
      src: leader1,
      alt: "leader-4",
      name: "Name Surname 4",
      title: "Manager",
    },
    {
      src: leader2,
      alt: "leader-5",
      name: "Name Surname 5",
      title: "Coordinator",
    },
    {
      src: leader3,
      alt: "leader-6",
      name: "Name Surname 6",
      title: "Advisor",
    },
    {
      src: leader1,
      alt: "leader-7",
      name: "Name Surname 7",
      title: "Secretary",
    },
  ];

  return (
    <div className="bg-electric-blue">
      <div className="clamp-[py,40px,120px] clamp-[px,24px,80px] text-black clamp-[rounded-bl,20px,40px] bg-white">
        <div>
          <div className=" text-black clamp-[pb,4px,10px] font-geist-mono clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d]">
            {"leaders of icpp".toUpperCase()}
          </div>
          <hr className=" text-black w-[100%]" />
          <div className="flex justify-between items-end">
            <div>
              <h1 className="clamp-[pt,16px,40px] text-deep-blue clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d] font-semibold">
                {"The spark that started everything."}
              </h1>
              <p className="clamp-[pt,10px,16px] clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d] text-black">
                {"The minds behind the mission; the architects of our purpose"}
              </p>
            </div>
          </div>
        </div>
        <AuthorCard leadersData={leadersData} />
        <div className="lg:hidden flex justify-between items-center mt-[14px]">
          <div className="flex gap-[8px]">
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
