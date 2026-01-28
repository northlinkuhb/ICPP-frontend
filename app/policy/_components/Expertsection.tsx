import { Carousel } from "@/components/ui/Carousel";
import React from "react";
import leader1 from "@public/leaders/asis.png";
import leader2 from "@public/leaders/leader2.png";
import leader3 from "@public/leaders/leader3.png";
import Image from "next/image";
import LeftArrow from "@/components/svg/LeftArrow";
import RightArrow from "@/components/svg/RightArrow";
import AuthorCard from "@/components/ui/AuthorCard";
const Expertsection = () => {
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
  ];
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
          <AuthorCard leadersData={leadersData} />
        </Carousel>
      </div>
    </div>
  );
};

export default Expertsection;
