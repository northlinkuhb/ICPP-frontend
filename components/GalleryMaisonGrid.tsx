"use client";

import React from "react";
import Image from "next/image";
import { TGallery } from "@/network/types/about.type";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface GalleryMaisonGridProps {
  images: TGallery[];
}

const GalleryMaisonGrid: React.FC<GalleryMaisonGridProps> = ({ images }) => {
  React.useEffect(() => {
    NativeFancybox.bind("[data-fancybox='gallery-maison']");

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 clamp-[px,24px,80px]">
      {images.map((image, index) => (
        <div key={index} className="mb-4 break-inside-avoid overflow-hidden">
          <a
            href={image.imageUrl}
            data-fancybox="gallery-maison"
            data-caption={`Image ${index + 1}`}
          >
            <Image
              src={image.imageUrl}
              alt={`gallery-${index + 1}`}
              className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity duration-300"
              width={100}
              height={100}
              quality={100}
              unoptimized
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default GalleryMaisonGrid;
