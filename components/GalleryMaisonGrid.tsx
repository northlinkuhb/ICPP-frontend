import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface GalleryMaisonGridProps {
  images: StaticImageData[];
}

const GalleryMaisonGrid: React.FC<GalleryMaisonGridProps> = ({ images }) => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 clamp-[px,24px,80px] clamp-[py,20px,40px]">
      {images.map((image, index) => (
        <div key={index} className="mb-4 break-inside-avoid  overflow-hidden">
          <Image
            src={image}
            alt={`gallery-${index + 1}`}
            className="w-full"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryMaisonGrid;
