"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import LinkedIn from "../svg/LinkedIn";
import LinkArrow from "../svg/LinkArrow";
import { TAdvisoryCard } from "@/network/types/home.type";


type AuthorCardProps = {
  leadersData?: TAdvisoryCard[];
  onLeaderClick?: (leader: TAdvisoryCard) => void;
};

const AuthorCard = ({ leadersData = [], onLeaderClick }: AuthorCardProps) => {
  const [selectedLeader, setSelectedLeader] = useState<TAdvisoryCard | null>(null);
  const [isSlideOpen, setIsSlideOpen] = useState(false);

  const openSlide = (leader: TAdvisoryCard) => {
    setSelectedLeader(leader);
    setIsSlideOpen(true);
    document.body.style.overflow = 'hidden';
    onLeaderClick?.(leader);
  };

  const closeSlide = () => {
    setIsSlideOpen(false);
    document.body.style.overflow = 'unset';
  };
  return (
    <>
      <div className="clamp-[pt,24px,40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 clamp-[gap,14px,20px]">
        {leadersData.map((leader, index) => (
          <button
            key={index}
            onClick={() => openSlide(leader)}
            className="flex flex-row gap-[20px] cursor-pointer hover:opacity-80 transition-opacity text-left"
          >
            <Image
              src={leader.imageUrl|| ""}
              alt={leader.name}
              className="clamp-[size,90px,159.33px] clamp-[rounded-br,10px,20px]"
              width={159}
              height={159}
            />
            <div>
              <div className="text-deep-blue clamp-[text,h4-m,h4-d] clamp-[leading,h4-m,h4-d] font-semibold">
                {leader.name}
              </div>
              <div className="text-black clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d]">
                {leader.designation}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Slide-in Panel */}
      {isSlideOpen && (
        <>
          {/* Backdrop */}
          <div
            className='fixed inset-0 z-[9998] bg-black/30'
            onClick={closeSlide}
          />
          {/* Slide Panel */}
          <div
            className='fixed top-0 right-0 h-screen w-full lg:w-1/2 bg-white z-[9999] clamp-[rounded-bl,20px,40px] clamp-[rounded-tl,20px,40px] shadow-lg transform transition-transform duration-300 ease-in-out'
            style={{
              transform: isSlideOpen ? 'translateX(0)' : 'translateX(100%)',
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeSlide}
              className='absolute top-6 right-6 text-black hover:text-gray-900 text-2xl'
              aria-label="Close slide"
            >
              ✕
            </button>

            {/* Content */}
            <div className='h-full flex flex-col '>
              <div className='flex items-end clamp-[gap,10px,20px]'>
                <Image
                  src={selectedLeader?.imageUrl || ''}
                  alt={selectedLeader?.name || 'leader'}
                  className='clamp-[size,160px,280px] object-contain clamp-[rounded-bl,20px,40px] clamp-[rounded-tl,20px,40px]'
                  width={280}
                  height={280}
                />
                <div>
                  <h2 className='text-deep-blue clamp-[text,h3-m,h3-d] clamp-[leading,h3-m,h3-d] font-semibold'>
                    {selectedLeader?.name}
                  </h2>
                  <p className='text-black clamp-[pt,8px,12px] clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d]'>
                    {selectedLeader?.designation}
                  </p>
                </div>
              </div>
              <div className='clamp-[pt,10px,20px]'>
                <div className='text-black clamp-[px,24px,40px] clamp-[py,16px,20px] clamp-[pt,16px,24px] clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d]' dangerouslySetInnerHTML={{ __html: selectedLeader?.desc || '' }} />
                <hr className="text-light-gray clamp-[mx,24px,40px]"/>
                <div className=" flex clamp-[px,24px,40px] clamp-[pt,10px,20px] clamp-[gap,10px,20px] text-black">
                  <LinkedIn fill="gray"/>
                  <div className=" flex items-center">
                    <div className="mr-[10px] border-b ">Website</div>
                    <LinkArrow/>
                  </div>
                  <div className=" flex items-center">
                    <div className="mr-[10px] border-b ">Read their work</div>
                    <LinkArrow/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AuthorCard;