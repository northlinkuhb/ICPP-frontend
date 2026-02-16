"use client";

import React from "react";

type TopFooterCTAProps = {
  buttonName?: string;
  description?: string;
};

const TopFooterCTA = ({ buttonName, description }: TopFooterCTAProps) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row text-white justify-between clamp-[mt,40px,80px] clamp-[text,h3-m,h3-d] clamp-[leading,h3-m,h3-d] clamp-[rounded-tl,20px,40px] clamp-[pt,40px,80px] clamp-[pb,20px,40px] clamp-[px,24px,80px] bg-black">
        <div>{description}</div>

        <button className="px-[24px] py-[16px] hover:bg-deep-red duration-300 ease-in-out transition-all text-white bg-red cursor-pointer  clamp-[text,button-m,button-d] clamp-[leading,button-m,button-d] font-semibold`">
          {buttonName}
        </button>
      </div>

      <div className="grid grid-cols-2">
        <div className="clamp-[h,20px,40px] bg-black clamp-[rounded-br,20px,40px]" />
        <div className="clamp-[h,20px,40px] bg-black clamp-[rounded-bl,20px,40px]" />
      </div>
    </div>
  );
};

export default TopFooterCTA;
