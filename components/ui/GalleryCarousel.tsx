"use client";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import { TGallery } from "@/network/types/home.type";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
interface GalleryCarouselProps {
  galleryImages: TGallery[];
}

const GalleryCarousel = ({ galleryImages }: GalleryCarouselProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const plugin = React.useRef<any>(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  React.useEffect(() => {
    NativeFancybox.bind("[data-fancybox]");

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  return (
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
          <CarouselItem key={index} className="basis-auto clamp-[mr,16px,20px]">
            <a
              href={image.imageUrl}
              data-fancybox="gallery"
              data-caption={`Image ${index + 1}`}
            >
              <Image
                src={image.imageUrl}
                alt={`gallery-${index + 1}`}
                className="h-full w-auto"
                width={550}
                height={297}
              />
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="pt-[20px] flex gap-[18px] clamp-[px,24px,80px]">
        <CarouselPrevious aria-label="Scroll left"></CarouselPrevious>
        <CarouselNext aria-label="Scroll right"></CarouselNext>
      </div>
    </Carousel>
  );
};

export default GalleryCarousel;
