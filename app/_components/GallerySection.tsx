"use client";
import React from "react";
import GalleryCarousel from "../../components/ui/GalleryCarousel";
import { TGallery } from "@/network/types/home.type";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";
import AnimatedLine from "@/components/animations/AnimatedLine";
import SectionSubHeader from "@/components/ui/SectionSubHeader";

type GalleryHomeSectionProps = {
  dataGallery?: TGallery[];
};

const GalleryHomeSection: React.FC<GalleryHomeSectionProps> = ({
  dataGallery = [],
}) => {
  return (
    <>
      <div className="bg-black clamp-[py,40px,120px] clamp-[rounded-bl,20px,40px]">
        <div className="clamp-[mx,24px,80px]">
          <SectionSubHeader subtitle="IMAGE GALLERY" className="text-white" />{" "}
          <AnimatedLine className="bg-white " />
        </div>
        <div className="flex justify-between items-end text-white clamp-[pt,16px,40px] clamp-[pb,24px,40px] clamp-[px,24px,80px]">
          <div className="font-semibold clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d]">
            <TextStaggerAnimation
              text="Events at ICPP"
              className="flex flex-wrap"
            />
          </div>
          <div className="underline clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d]">
            View All
          </div>
        </div>
        <GalleryCarousel galleryImages={dataGallery} />
      </div>
    </>
  );
};

export default GalleryHomeSection;
