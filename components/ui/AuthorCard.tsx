"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import LinkedIn from "../svg/LinkedIn";
import LinkArrow from "../svg/LinkArrow";

type Leader = {
  src: string | StaticImageData;
  alt: string;
  name: string;
  title: string;
};

type AuthorCardProps = {
  leadersData?: Leader[];
  onLeaderClick?: (leader: Leader) => void;
};

const AuthorCard = ({ leadersData = [], onLeaderClick }: AuthorCardProps) => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [isSlideOpen, setIsSlideOpen] = useState(false);

  const openSlide = (leader: Leader) => {
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
              src={leader.src}
              alt={leader.alt}
              className="clamp-[size,90px,159.33px] clamp-[rounded-br,10px,20px]"
              priority
            />
            <div>
              <div className="text-deep-blue clamp-[text,h4-m,h4-d] clamp-[leading,h4-m,h4-d] font-semibold">
                {leader.name}
              </div>
              <div className="text-black clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d]">
                {leader.title}
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
                  src={selectedLeader?.src || ''}
                  alt={selectedLeader?.alt || 'leader'}
                  className='clamp-[size,160px,280px] object-contain clamp-[rounded-bl,20px,40px] clamp-[rounded-tl,20px,40px]'
                  priority
                />
                <div>
                  <h2 className='text-deep-blue clamp-[text,h3-m,h3-d] clamp-[leading,h3-m,h3-d] font-semibold'>
                    {selectedLeader?.name}
                  </h2>
                  <p className='text-black clamp-[pt,8px,12px] clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d]'>
                    {selectedLeader?.title}
                  </p>
                </div>
              </div>
              <div className='clamp-[pt,10px,20px]'>
                <p className='text-black clamp-[px,24px,40px] clamp-[py,16px,20px] clamp-[pt,16px,24px] clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d]'>
                  Lorem ipsum dolor sit amet consectetur. Placerat lorem ac gravida amet velit integer vehicula condimentum. Vitae sit in at viverra pellentesque aliquam pretium vel. Leo lobortis dui donec cras risus ut. Eget magnis maecenas est curabitur dictum tortor. Vel posuere quam ut mauris.<br/>
Sollicitudin donec ante sagittis massa id. Ante faucibus in dignissim arcu nibh. Quis quam nec hac nulla in lobortis. Morbi tellus habitant mauris aenean dolor id. Nec ullamcorper tortor quam sagittis sed egestas enim egestas. Id odio sit maecenas enim mauris. <br/>
<br/>
Lorem ipsum dolor sit amet consectetur. Placerat lorem ac gravida amet velit integer vehicula condimentum. Vitae sit in at viverra pellentesque aliquam pretium vel. Leo lobortis dui donec cras risus ut. Eget magnis maecenas est curabitur dictum tortor. Vel posuere quam ut mauris.
Sollicitudin donec ante sagittis massa id. Ante faucibus in dignissim arcu nibh. Quis quam nec hac nulla in lobortis. Morbi tellus habitant mauris aenean dolor id. Nec ullamcorper tortor quam sagittis sed egestas enim egestas. Id odio sit maecenas enim mauris. 
                </p>
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