"use client";
import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import LeftArrow from "@/components/svg/LeftArrow";
import RightArrow from "@/components/svg/RightArrow";

interface GalleryImage {
  id: number;
  src: StaticImageData;
  alt: string;
}

interface GallerySectionProps {
  images: GalleryImage[];
  bgColor?: "white" | "black";
}

const GallerySection: React.FC<GallerySectionProps> = ({ images, bgColor = "white" }) => {
  const isBlackBg = bgColor === "black";
  const textColor = isBlackBg ? "text-white" : "text-black";
  const captionColor = isBlackBg ? "text-gray-300" : "text-black";
  const hrColor = isBlackBg ? "border-gray-600" : "border-black";
  const headingColor = isBlackBg ? "text-white" : "text-deep-blue";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <div className={`clamp-[py,40px,120px] clamp-[px,24px,80px] ${isBlackBg ? "bg-black" : "bg-white"}`}>
      <div className={`${captionColor} font-geist-mono clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d]`}>
        IMAGE GALLERY
      </div>
      <hr className={`${hrColor} clamp-[mt,4px,10px]`} />
      <div className={`clamp-[pt,16px,40px] ${headingColor} clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d] font-semibold`}>
        In Pictures
      </div>
      <div className="clamp-[pt,24px,40px] flex flex-col clamp-[gap,0.625rem,1.25rem] ">
        {Array.from({ length: Math.ceil(images.length / 4) }).map(
          (_, rowIndex) => {
            const base = rowIndex * 4;
            const isEvenRow = rowIndex % 2 === 0;
            return (
              <div
                key={rowIndex}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 clamp-[gap,0.625rem,1.25rem]"
              >
                {isEvenRow ? (
                  <>
                    {images[base] && (
                      <button onClick={() => openModal(base)}>
                        <Image
                          src={images[base].src}
                          alt={images[base].alt}
                          className="w-full clamp-[h,18.5938720703rem,46.875rem] object-cover"
                        />
                      </button>
                    )}

                    <div className="flex flex-col clamp-[gap,0.625rem,1.25rem]">
                      {images[base + 1] && (
                        <button onClick={() => openModal(base + 1)}>
                          <Image
                            src={images[base + 1].src}
                            alt={images[base + 1].alt}
                            className="w-full clamp-[h,9rem,22.8rem] object-cover"
                          />
                        </button>
                      )}
                      {images[base + 2] && (
                        <button onClick={() => openModal(base + 2)}>
                          <Image
                            src={images[base + 2].src}
                            alt={images[base + 2].alt}
                            className="w-full clamp-[h,9rem,22.8rem] object-cover"
                          />
                        </button>
                      )}
                    </div>

                    {images[base + 3] && (
                      <button onClick={() => openModal(base + 3)}>
                        <Image
                          src={images[base + 3].src}
                          alt={images[base + 3].alt}
                          className="w-full clamp-[h,18.5938720703rem,46.875rem] object-cover"
                        />
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    <div className="flex flex-col clamp-[gap,0.625rem,1.25rem]">
                      {images[base] && (
                        <button onClick={() => openModal(base)}>
                          <Image
                            src={images[base].src}
                            alt={images[base].alt}
                            className="w-full clamp-[h,9rem,22.8rem] object-cover"
                          />
                        </button>
                      )}
                      {images[base + 1] && (
                        <button onClick={() => openModal(base + 1)}>
                          <Image
                            src={images[base + 1].src}
                            alt={images[base + 1].alt}
                            className="w-full clamp-[h,9rem,22.8rem] object-cover"
                          />
                        </button>
                      )}
                    </div>

                    {images[base + 2] && (
                      <button onClick={() => openModal(base + 2)}>
                        <Image
                          src={images[base + 2].src}
                          alt={images[base + 2].alt}
                          className="w-full clamp-[h,18.5938720703rem,46.875rem] object-cover"
                        />
                      </button>
                    )}

                    <div className="flex flex-col clamp-[gap,0.625rem,1.25rem]">
                      {images[base + 3] && (
                        <button onClick={() => openModal(base + 3)}>
                          <Image
                            src={images[base + 3].src}
                            alt={images[base + 3].alt}
                            className="w-full clamp-[h,9rem,22.8rem] object-cover"
                          />
                        </button>
                      )}
                      {images[base + 4] && (
                        <button onClick={() => openModal(base + 4)}>
                          <Image
                            src={images[base + 4].src}
                            alt={images[base + 4].alt}
                            className="w-full clamp-[h,9rem,22.8rem] object-cover"
                          />
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          },
        )}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          onClick={closeModal}
        >
          <div
            className="relative flex items-center justify-center w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={goToPrevious}
              className="absolute left-4 md:left-8 z-50 p-2 hover:bg-white/10 rounded-full"
            >
              <LeftArrow fill="white" />
            </button>

            <div className="max-w-4xl max-h-[90vh] px-16">
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            <button
              onClick={goToNext}
              className="absolute right-4 md:right-8 z-50 p-2 hover:bg-white/10 rounded-full"
            >
              <RightArrow fill="white" />
            </button>

            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-50 text-white bg-black/40 hover:bg-black/60 rounded-full w-12 h-12 flex items-center justify-center"
            >
              ✕
            </button>

            <div className="absolute bottom-4 text-white text-sm bg-black/30 px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
