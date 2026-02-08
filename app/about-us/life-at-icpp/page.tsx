import React from "react";
import Hero from "../_components/Hero";
import lifeAtIcpp from "@public/life-at-icpp.png";
import second from "@public/png/Vector.png";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import whoweare from "@public/png/testimonial.png";
import { AboutApi } from "@/network/api/about.api";
import GalleryMaisonGrid from "@/components/GalleryMaisonGrid";
import SectionHeader from "@/app/_components/SectionHeader";


const page = async () => {
    const aboutApiData = await AboutApi.getAboutPageData();
  
  return (
    <div>
      <Hero
        image={lifeAtIcpp}
        imageAlt=""
        breadcrumb={{ activepage: "About Us", innerpage: "Life at ICPP" }}
        title="Life at ICPP"
        description="Inside the people, places, and moments shaping our work in public policy."
      />
      <div className="clamp-[px,24px,80px] clamp-[pt,40px,120px]">
        <SectionHeader title="In Pictures" subtitle="IMAGE GALLERY"/>
      </div>
      <div className="clamp-[pb,20px,120px] clamp-[pt,20px,40px]">
        <GalleryMaisonGrid images={aboutApiData.commonGallery}/>
      </div>
      <div>
        <Image src={second} alt="Vector" className="w-full " />
      </div>
      <div className="clamp-[py,40px,120px] clamp-[px,24px,80px]">
        <div className="text-black font-geist-mono clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d]">
          TESTIMONIALS
        </div>
        <hr className="text-black clamp-[mt,4px,10px]" />
        <Carousel>
          <div className="flex justify-between items-center clamp-[pt,16px,40px] text-deep-blue clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d] font-semibold">
            <div>What others have to say about us</div>
            <div className="flex gap-[8px]">
              <CarouselPrevious aria-label="Scroll left"></CarouselPrevious>
              <CarouselNext aria-label="Scroll right"></CarouselNext>
            </div>
          </div>
          <div className="clamp-[pt,20px,40px]">
            <CarouselContent className="clamp-[pr,16px,20px]">
              {aboutApiData.testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="basis-auto clamp-[px,16px,20px] border-r border-r-light-blue"
                >
                  <div className="max-w-[30ch] clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d] text-black">
                    {testimonial.feedback}
                  </div>
                  <div className="flex items-center clamp-[pt,24px,32px] gap-[16px]">
                    <div>
                      <Image
                        src={whoweare}
                        alt="Who We Are"
                        className="clamp-[h,30px,56px] clamp-[w,33px,63px] mr-16px"
                        priority
                      />
                    </div>
                    <div>
                      <div className=" text-deep-blue clamp-[text,h4-m,h4-d] clamp-[leading,h4-m,h4-d] font-semibold">
                        {testimonial.name}
                      </div>
                      <div className="text-black clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d]">
                        {testimonial.designation}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default page;
