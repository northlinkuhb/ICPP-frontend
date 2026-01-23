import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  image: StaticImageData;
  title: string;
  published_by?: string;
  date: string;
};
const ResearchCard = ({ image, title, published_by, date }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt="research-1"
        className="w-full clamp-[h,204px,310px] object-cover"
        priority
      />
      <div className="clamp-[pt,12px,20px]">
        <div className=" font-semibold min-h-[3.6ch] clamp-[text,h4-m,h4-d] line-clamp-2 text-ellipsis clamp-[leading,h4-m,h4-d] text-black">
          {title}
        </div>
        <div className="clamp-[pt,4px,10px] clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d] text-black">
          Published by <span className="underline">{published_by}</span>
        </div>
        <div className="clamp-[pt,4px,10px] text-gray clamp-[text,caption1-m,caption1-d] clamp-[leading,caption1-m,caption1-d]">
          {date}
        </div>
      </div>
    </div>
  );
};

export default ResearchCard;
