"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gallery1 from "../../public/gallery/gallery-potrait.png";
import gallery2 from "../../public/gallery/gallery-landscape.png";
import gallery3 from "../../public/gallery/gallery3.png";
import gallery4 from "../../public/gallery/gallery4.png";
import gallery5 from "../../public/gallery/gallery5.png";
import gallery6 from "../../public/gallery/gallery6.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";

const GallerySection: React.FC = () => {
  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const plugin = React.useRef<any>(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  return (
    <>

    <div className="bg-black clamp-[py,40px,120px] clamp-[rounded-bl,20px,40px]">
      <div className="text-white clamp-[pb,4px,10px] clamp-[px,24px,80px] font-geist-mono clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d]">
        {"Image Gallery".toUpperCase()}
      </div>
      <hr className="text-white clamp-[mx,24px,80px]" />
      <div className="flex justify-between items-end text-white clamp-[pt,16px,40px] clamp-[pb,24px,40px] clamp-[px,24px,80px]">
        <div className="font-semibold clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d]">
          Events at ICPP
        </div>
        <div className="underline clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d]">
          View All
        </div>
      </div>
      <Carousel
        plugins={[plugin.current]}
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="clamp-[ml,24px,80px] flex clamp-[h,297px,550px]">
          {galleryImages.map((image, index) => (
            <CarouselItem
              key={index}
              className="basis-auto clamp-[mr,16px,20px]"
            >
              <Image
                src={image}
                alt={`gallery-${index + 1}`}
                className="h-full w-auto"
                priority
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="pt-[20px] flex gap-[18px] clamp-[px,24px,80px]">
          <CarouselPrevious aria-label="Scroll left"></CarouselPrevious>
          <CarouselNext aria-label="Scroll right"></CarouselNext>
        </div>
      </Carousel>
    </div>
    </>
  );
};

export default GallerySection;
