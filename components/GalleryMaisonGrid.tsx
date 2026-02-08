import React from "react";
import Image from "next/image";
import { TGallery } from "@/network/types/about.type";

interface GalleryMaisonGridProps {
  images: TGallery[];
}

const GalleryMaisonGrid: React.FC<GalleryMaisonGridProps> = ({ images }) => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 clamp-[px,24px,80px]">
      {images.map((image, index) => (
        <div key={index} className="mb-4 break-inside-avoid overflow-hidden">
          <Image
            src={image.imageUrl}
            alt={`gallery-${index + 1}`}
            className="w-full h-auto"
            width={100}
            height={100}
            quality={100}
            unoptimized
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryMaisonGrid;
