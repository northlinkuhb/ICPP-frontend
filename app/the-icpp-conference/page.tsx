import React from "react";
import Image from "next/image";
import Hero from "./_components/Hero";
import MainHeader from "@/components/ui/SectionMainHeader";
import second from "@public/png/Vector.png";
import SectionHeader from "@/app/_components/SectionHeader";
import { ConferenceApi } from "@/network/api/conference.api";
import GalleryMaisonGrid from "@/components/GalleryMaisonGrid";
import MediaCard from "./_components/MediaCard";

const TheIcppConferencePage = async () => {
    
  const conferenceApiData = await ConferenceApi.getConferenceData();
  
  
  return (
    <div>
      <Hero />
      <div className="clamp-[px,24px,80px] clamp-[py,40px,120px]">
        <MainHeader label="Overview" />
        <div className="clamp-[pt,20px,40px] text-black" dangerouslySetInnerHTML={{ __html: conferenceApiData.overview }}>
        </div>
      </div>
      <div>
        <Image src={second} alt="Vector" className="w-full " />
      </div>
      <div className="clamp-[px,24px,80px] clamp-[py,40px,120px]">
        <MainHeader label="Key Sessions" />
        <div className="clamp-[pt,20px,40px]">
          <div className="flex flex-col clamp-[gap,20px,40px] w-full">
            {conferenceApiData.keySessions.map((item, i) => (
              <MediaCard key={i} item={item} />
            ))}
  
          </div>
        </div>
      </div>
      <div className="clamp-[py,40px,120px] clamp-[px,24px,80px] bg-black">
          <div className="text-white clamp-[pb,4px,10px] clamp-[px,24px,80px] font-geist-mono clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d]">
            {"Image Gallery".toUpperCase()}
          </div>
          <hr className="text-white clamp-[mx,24px,80px]" />
          <div className="flex justify-between items-end text-white clamp-[pt,16px,40px] clamp-[pb,24px,40px] clamp-[px,24px,80px]">
            <div className="font-semibold clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d]">
              In Pictures
            </div>
          </div>
          <GalleryMaisonGrid images={conferenceApiData.conferenceGallery}/>
      </div>
      <div className="clamp-[py,40px,120px] clamp-[px,24px,80px]" >
          <SectionHeader title="In The Press" subtitle="MEDIA HIGHLIGHTS" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 clamp-[gap,16px,20px] clamp-[pt,24px,40px]">
            {conferenceApiData.mediaHighlights.map((item, idx) => (
              <div key={idx}>
                <div className="clamp-[h,204px,310px] relative w-full"> <Image src={item.imageUrl} alt={item.title} priority fill className="w-full" /></div>
                <div className="clamp-[text,h4-m,h4-d] clamp-[leading,h4-m,h4-d] font-semibold text-black clamp-[mt,12px,20px] line-clamp-2">
                  {item.title}
                </div>
                <div className="clamp-[mt,4px,10px] text-gray clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d] line-clamp-4">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default TheIcppConferencePage;
