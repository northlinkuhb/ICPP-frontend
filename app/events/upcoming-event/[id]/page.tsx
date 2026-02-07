"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import Hero from "./_components/Hero";
import MainHeader from "@/components/ui/SectionMainHeader";
import second from "@public/png/Vector.png";
import test from "@public/research/research4.png";
import test1 from "@public/research/research3.png";
import gallery1 from "@public/gallery/gallery-potrait.png";
import gallery2 from "@public/gallery/gallery-landscape.png";
import gallery3 from "@public/gallery/gallery3.png";
import gallery4 from "@public/gallery/gallery4.png";
import gallery5 from "@public/gallery/gallery5.png";
import gallery6 from "@public/gallery/gallery6.png";
import GallerySection from "@/components/GalleryCarouselSection";
import SectionHeader from "@/app/_components/SectionHeader";

const EventDetailPage = () => {
  const params = useParams();
  const router = useRouter();
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
  ];
  const datas = [
    {
      image: test,
      title: "Panel Discussion: Macroeconomics and Public Finance",
      speakers: [
        { name: "Dr. Arvind Panagariya", role: "Chairperson of Finance Commission" },
        { name: "Shri Ajay Seth", role: "Finance Secretary & Secretary, Department of Economic Affairs" },
        { name: "Prof. Prachi Mishra", role: "Head and Director, ICPP" },
      ],
      description:
        "Shri NK Singh contextualized India’s macro-fiscal policies within a post-COVID paradigm shift. Fiscal orthodoxy, once defined by fixed thresholds, now requires dynamic recalibration. Singh called for extending scrutiny to state-level finances, warning of a growing misalignment with central policies.",
    },
    {
      image: test1,
      title: "Panel Discussion: Macroeconomics and Public Finance",
      speakers: [
        { name: "Dr. Arvind Panagariya", role: "Chairperson of Finance Commission" },
        { name: "Shri Ajay Seth", role: "Finance Secretary & Secretary, Department of Economic Affairs" },
        { name: "Prof. Prachi Mishra", role: "Head and Director, ICPP" },
      ],
      description:
        "Shri NK Singh contextualized India’s macro-fiscal policies within a post-COVID paradigm shift. Fiscal orthodoxy, once defined by fixed thresholds, now requires dynamic recalibration. Singh called for extending scrutiny to state-level finances, warning of a growing misalignment with central policies.",
    },
    {
      image: test,
      title: "Panel Discussion: Macroeconomics and Public Finance",
      speakers: [
        { name: "Dr. Arvind Panagariya", role: "Chairperson of Finance Commission" },
        { name: "Shri Ajay Seth", role: "Finance Secretary & Secretary, Department of Economic Affairs" },
        { name: "Prof. Prachi Mishra", role: "Head and Director, ICPP" },
      ],
      description:
        "Shri NK Singh contextualized India’s macro-fiscal policies within a post-COVID paradigm shift. Fiscal orthodoxy, once defined by fixed thresholds, now requires dynamic recalibration. Singh called for extending scrutiny to state-level finances, warning of a growing misalignment with central policies.",
    },
  ];
  return (
    <div>
      <Hero />
      <div className="clamp-[px,24px,80px] clamp-[py,40px,120px]">
        <MainHeader label="Overview" />
        <div className="clamp-[pt,20px,40px] text-black ">
          The ICPP Growth Conference is a platform for dialogue on India’s growth strategy, bringing together senior policymakers, academics, private sector experts, and civil society leaders. The inaugural conference featured five sessions; on macro and public finance to employment and agriculture. 
          <br/>
          <br/>
          The conference presented ICPP’s work and enabled in-depth discussions on India’s policy priorities, while also generating policy questions to inform ICPP’s future work plans.
        </div>
      </div>
      <div>
        <Image src={second} alt="Vector" className="w-full " />
      </div>
      <div className="clamp-[px,24px,80px] clamp-[py,40px,120px]">
        <MainHeader label="Key Sessions" />
        <div className="clamp-[pt,20px,40px]">
          <div className="flex flex-col clamp-[gap,20px,40px] w-full">
            {datas.map((item, i) => (
              <div key={i} className="flex clamp-[gap,12px,24px] ">
                <div className="clamp-[w,80px,320px] shrink-0 relative clamp-[h,80px,240px]">
                  <Image src={item.image} alt="" fill className="object-cover" />
                </div>
                <div className=" flex flex-col justify-between border-t border-t-light-gray">
                  <div>
                    <h2 className="clamp-[text,h4-m,h4-d] clamp-[pt,4px,10px] font-semibold clamp-[leading,h4-m,h4-d] text-black">
                      {item.title}
                    </h2>
                    <div className="clamp-[pt,4px,10px]">
                      <p className="text-black font-semibold clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d] clamp-[pb,4px,8px]">
                        Speakers:
                      </p>
                      <div className="flex flex-col clamp-[gap,4px,8px]">
                        {item.speakers.map((speaker, idx) => (
                          <div key={idx} className="text-black clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d]">
                            <span className="font-semibold">{speaker.name}</span>
                            <span className="font-normal"> - {speaker.role}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="line-clamp-3 clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d] text-ellipsis clamp-[pt,4px,10px] text-gray">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
  
          </div>
        </div>
      </div>
      <GallerySection images={galleryImages} bgColor="black"/>
      <div className="clamp-[py,40px,120px] clamp-[px,24px,80px]" >
            <SectionHeader title="In The Press" subtitle="MEDIA HIGHLIGHTS" />
      </div>
    </div>
  );
};

export default EventDetailPage;
