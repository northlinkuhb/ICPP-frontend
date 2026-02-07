import { Carousel } from "@/components/ui/Carousel";
import React from "react";
import Image from "next/image";
import LeftArrow from "@/components/svg/LeftArrow";
import RightArrow from "@/components/svg/RightArrow";
import AuthorCard from "@/components/ui/AuthorCard";
import { AboutApi } from "@/network/api/about.api";
const Expertsection = async () => {
  const aboutApiData = await AboutApi.getAboutPageData();
  return (
    <div className="bg-[#1893C9]">
      <div className=" bg-[#C1DEEB] clamp-[rounded-tl,20px,40px] relative overflow-hidden  clamp-[p,1.5rem,5rem]">
        <Carousel>
          <div className="flex justify-between items-center">
            <h2 className="clamp-[pt,16px,40px] text-deep-blue clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d] font-semibold">
              Our Experts
            </h2>
            <div className="flex gap-[8px]">
              <LeftArrow fill="gray" />
              <RightArrow fill="black" />
            </div>
          </div>
          <AuthorCard leadersData={aboutApiData.fellows} />
        </Carousel>
      </div>
    </div>
  );
};

export default Expertsection;
