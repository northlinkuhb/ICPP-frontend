import React from "react";
import Hero from "./_components/Hero";
import Tab from "@/components/Tab";
import Image, { StaticImageData } from "next/image";
import noEvent from "../../../public/png/no-events.png";
import LeftArrow from "@/components/svg/LeftArrow";
import RightArrow from "@/components/svg/RightArrow";
import MainEventSection from "@/components/ui/MainEventSection";
import second from "@public/png/Vector.png";
import GallerySection from "@/components/GallerySection";
import gallery1 from "../../../public/gallery/gallery-potrait.png";
import gallery2 from "../../../public/gallery/gallery-landscape.png";
import gallery3 from "../../../public/gallery/gallery3.png";
import gallery4 from "../../../public/gallery/gallery4.png";
import gallery5 from "../../../public/gallery/gallery5.png";
import gallery6 from "../../../public/gallery/gallery6.png";

const page = () => {
  const tabs = [
    { name: "Upcoming Events", link: "/events/upcoming-events" },
    { name: "Past Events", link: "/events/past-events" },
  ];
  const galleryImages: Array<{
    id: number;
    src: StaticImageData;
    alt: string;
  }> = [
    { id: 1, src: gallery1, alt: "Gallery 1" },
    { id: 2, src: gallery2, alt: "Gallery 2" },
    { id: 3, src: gallery3, alt: "Gallery 3" },
    { id: 4, src: gallery4, alt: "Gallery 4" },
    { id: 5, src: gallery5, alt: "Gallery 5" },
    { id: 6, src: gallery6, alt: "Gallery 6" },
  ];
  return (
    <div>
      <Hero />
      <div className="clamp-[pt,40px,120px] clamp-[pb,20px,40px] clamp-[px,24px,80px] text-deep-blue font-semibold clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d]">
        All Events
      </div>
      <div className="clamp-[px,24px,80px]">
        <Tab tabs={tabs} />
      </div>
      <div className="clamp-[px,24px,80px] clamp-[pt,20px,80px]">
        <Image src={noEvent} alt="Events" className="w-full" />
        <div className="flex clamp-[pt,20px,40px] gap-[8px]">
          <LeftArrow fill="light-gray" />
          <RightArrow fill="black" />
        </div>
      </div>
      <div className="clamp-[pt,40px,120px]">
        <MainEventSection />
      </div>
      <div>
        <Image src={second} alt="Vector" className="w-full " />
      </div>
      <GallerySection images={galleryImages} />
    </div>
  );
};

export default page;
