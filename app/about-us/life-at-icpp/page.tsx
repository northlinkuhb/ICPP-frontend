"use client";
import React from "react";
import { StaticImageData } from "next/image";
import Hero from "../_components/Hero";
import lifeAtIcpp from "../../../public/life-at-icpp.png";
import second from "@public/png/Vector.png";
import Image from "next/image";
import gallery1 from "../../../public/gallery/gallery-potrait.png";
import gallery2 from "../../../public/gallery/gallery-landscape.png";
import gallery3 from "../../../public/gallery/gallery3.png";
import gallery4 from "../../../public/gallery/gallery4.png";
import gallery5 from "../../../public/gallery/gallery5.png";
import gallery6 from "../../../public/gallery/gallery6.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import whoweare from "../../../public/png/testimonial.png";
import GallerySection from "@/components/GallerySection";

const testimonialLists = [
  {
    description:
      "Lorem ipsum dolor sit amet consectetur. Enim nisi lorem nunc tortor. Feugiat ac non facilisis quisque eleifend metus dui amet accumsan. Et orci ultrices condimentum duis urna magna. Id quis adipiscing nisl nisl risus enim pellentesque. Habitasse arcu facilisis a feugiat et ultrices. Nibh pellentesque sed tortor arcu penatibus dolor habitant. Quam non ultricies auctor ultricies arcu mi odio. Praesent ",
    name: "Priya Sharma",
    designation: "Senior Policy Researcher",
  },
  {
    description:
      "The interdisciplinary team here brings diverse perspectives to complex policy challenges. It's truly a place where ideas matter.",
    name: "Amit Kumar",
    designation: "Data Scientist",
  },
  {
    description:
      "ICPP's mission to bridge research and policy resonates deeply with my values. Every project contributes to meaningful change.",
    name: "Neha Patel",
    designation: "Research Associate",
  },
  {
    description:
      "The learning opportunities and mentorship at ICPP are unparalleled. I've grown both professionally and personally.",
    name: "Vikram Singh",
    designation: "Policy Analyst",
  },
  {
    description:
      "Being part of a team dedicated to India's economic development gives our work real purpose and direction.",
    name: "Anjali Desai",
    designation: "Communications Manager",
  },
];

const page = () => {
  const galleryImages: Array<{
    id: number;
    src: StaticImageData;
    alt: string;
  }> = [
    { id: 1, src: gallery1, alt: "Gallery 1" },
    { id: 2, src: gallery2, alt: "Gallery 2" },
    { id: 3, src: gallery3, alt: "Gallery 3" },
    { id: 4, src: gallery4, alt: "Gallery 4" },
    { id: 5, src: gallery5, alt: "Gallery 5" },
    { id: 6, src: gallery6, alt: "Gallery 6" },
    { id: 7, src: gallery1, alt: "Gallery 1" },
    { id: 8, src: gallery2, alt: "Gallery 2" },
    { id: 9, src: gallery3, alt: "Gallery 3" },
    { id: 10, src: gallery4, alt: "Gallery 4" },
    { id: 11, src: gallery5, alt: "Gallery 5" },
    { id: 12, src: gallery6, alt: "Gallery 6" },
  ];
  return (
    <div>
      <Hero
        image={lifeAtIcpp}
        imageAlt=""
        breadcrumb={{ activepage: "About Us", innerpage: "Life at ICPP" }}
        title="Life at ICPP"
        description="Inside the people, places, and moments shaping our work in public policy."
      />
      <GallerySection images={galleryImages} />
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
              {testimonialLists.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="basis-auto clamp-[px,16px,20px] border-r border-r-light-blue"
                >
                  <div className="max-w-[30ch] clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d] text-black">
                    {testimonial.description}
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
