import React from "react";
import Image, { StaticImageData } from "next/image";
import SectionHeader from "./SectionHeader";

export interface MediaItem {
  src: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
}

interface MediaSectionProps {
  mediaData: MediaItem[];
}

const MediaSection: React.FC<MediaSectionProps> = ({ mediaData }) => {
  const items = mediaData.slice(0, 3);
  return (
    <div className="clamp-[px,24px,80px] clamp-[py,40px,120px]">
      <SectionHeader
        title="Press. Perspective. Presence."
        subtitle="MEDIA HIGHLIGHTS"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 clamp-[gap,16px,20px] clamp-[pt,24px,40px]">
        {items.map((item, idx) => (
          <div key={idx}>
           <div className="clamp-[h,204px,310px] relative w-full"> <Image src={item.src} alt={item.alt} priority fill className="w-full" /></div>
            <div className="clamp-[text,h4-m,h4-d] clamp-[leading,h4-m,h4-d] font-semibold text-black clamp-[mt,12px,20px]">
              {item.title}
            </div>
            <div className="clamp-[mt,4px,10px] text-gray clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d]">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaSection;
