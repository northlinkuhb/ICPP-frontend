import Link from "next/link";
import React from "react";

type Props = {
  activepage: string;
  innerpage?: string;
  activePageLink?: string;
};

const Breadcrumbs = ({ activepage, innerpage, activePageLink }: Props) => {
  return (
    <div className="items-center flex relative z-[50] clamp-[text,0.6875rem,0.875rem] leading-[105%] tracking-[0%] gap-[0.5rem]">
      <Link href={"/"}>
        <div className="text-white">Home</div>
      </Link>

      <svg className="clamp-[w,7px,9px]" viewBox="0 0 7 10" fill="none">
        <path
          d="M3.9375 5L0 1.0625L1.0625 0L6.0625 5L1.0625 10L0 8.9375L3.9375 5Z"
          fill="white"
        />
      </svg>

      {innerpage ? (
        activePageLink ? (
          <Link
            href={activePageLink}
            className="duration-300 ease-in-out transition-all hover:text-[#FFFFFF8F]"
          >
            {activepage}
          </Link>
        ) : (
          <button
            type="button"
            className="cursor-default duration-300 ease-in-out transition-all text-white"
          >
            {activepage}
          </button>
        )
      ) : (
        <div className=" underline-offset-2 text-white">{activepage}</div>
      )}

      {innerpage && (
        <>
          <svg className="clamp-[w,7px,9px]" viewBox="0 0 7 10" fill="none">
            <path
              d="M3.9375 5L0 1.0625L1.0625 0L6.0625 5L1.0625 10L0 8.9375L3.9375 5Z"
              fill="white"
            />
          </svg>

          <div className="text-[#FFFFFF]">{innerpage}</div>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs;
