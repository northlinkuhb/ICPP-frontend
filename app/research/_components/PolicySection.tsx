"use client";

import React from "react";
import Image from "next/image";
import second from "@public/media.png";
import test from "@public/research/research4.png";
import CustomInput from "@/components/CustomInput";
import CardAnimation from "@/components/animations/CardAnimation";
const PolicySection = () => {
  const datas = [
    {
      type: "Discussion Papers",
      image: test,
      title: "Temperature Shocks in Early-Life and Long-run Health Outcomes",
      published_by: " Aparajita Dasgupta",
      description:
        " There is a growing body of evidence on how early-life shocks have a significant bearing on long-term human capital formation There is a growing body of evidence on how early-life shocks have a significant bearing on long-term human capital formation",
      date: "01 November, 2025",
    },
    {
      type: "Policy Briefs",
      image: second,
      description:
        " There is a growing body of evidence on how early-life shocks have a significant bearing on long-term human capital formation There is a growing body of evidence on how early-life shocks have a significant bearing on long-term human capital formation",

      title:
        "Laws Mandating Prevention of Sexual Harassment at Workplace and Female Employment",
      published_by: "Kanika Mahajan ",
      date: "01 November, 2025",
    },
    {
      type: "Case Studies",
      description:
        " There is a growing body of evidence on how early-life shocks have a significant bearing on long-term human capital formation There is a growing body of evidence on how early-life shocks have a significant bearing on long-term human capital formation",

      image: test,
      title: "Immigration Uncertainty and Offshoring Jobs: Evidence from India",
      published_by: "Kanika Mahajan ",
      date: "01 November, 2025",
    },
  ];
  return (
    <div className="clamp-[px,1.5rem,5rem] text-black relative clamp-[py,2.5rem,7.5rem]">
      <div className="flex lg:flex-row flex-col clamp-[text,12px,16px] clamp-[leading,18px,25px]  clamp-[gap,20px,50px]">
        <div className="clamp-[min-w,10.1875rem,25rem] sticky clamp-[top,4.5rem,8rem] z-50 bg-white h-full shrink-0">
          <div className="flex items-center relative ">
            <input
              className="w-full border-[#AEB6B9] border pr-[3rem] outline-none clamp-[px,12px,20px] clamp-[py,12px,16px]"
              placeholder="Search"
            />
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute clamp-[right,12px,20px]"
            >
              <path
                d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
                fill="#AEB6B9"
              />
            </svg>
          </div>
          <div className="pt-[20px] pb-[8px] border-b border-b-[#AEB6B9]">
            <p className="font-bold">Filter by</p>
          </div>

          {datas.map((item, i) => (
            <div
              key={i}
              className="clamp-[pt,13px,20px] gap-[14px] items-center flex"
            >
              <CustomInput id={item.type} checked={false} onChange={() => {}} />
              <p className="">{item.type}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col clamp-[gap,20px,42.5px] w-full">
          {datas.map((item, i) => (
            <CardAnimation
              delay={0.1}
              index={i}
              key={i}
              className="flex  clamp-[gap,12px,24px] "
            >
              <div className="clamp-[w,80px,320px] shrink-0 relative clamp-[h,80px,240px]">
                <Image src={item.image} alt="" fill className="object-cover" />
              </div>
              <div className="clamp-[pt,20px,10px] pb-[1px] flex flex-col justify-between border-t border-t-[#AEB6B9]">
                <div>
                  <p className="clamp-[text,11px,14px] uppercase text-electric-blue clamp-[text,14px,16px]">
                    {item.type}
                  </p>
                  <h2 className="clamp-[text,h4-m,h4-d] clamp-[pt,4px,10px] font-semibold clamp-[leading,h4-m,h4-d]">
                    {item.title}
                  </h2>
                  <p className="clamp-[text,11px,16px] py-[0.625rem] clamp-[pt,0.25rem,0.625rem] leading-[120%]">
                    Published by{" "}
                    <span className="underline decoration-1 text-black duration-300 transition-all ease-in-out  hover:text-[#1893C9]  cursor-pointer underline-offset-2">
                      {item.published_by}
                    </span>
                  </p>{" "}
                  <p className="line-clamp-3 clamp-[text,11px,16px] leading-[130%] text-ellipsis text-[#898F92]">
                    {item.description}
                  </p>
                </div>
                <p className="clamp-[text,11px,14px]  leading-[100%] pt-[10px] text-[#898F92]">
                  {item.date}
                </p>
              </div>
            </CardAnimation>
          ))}

          <div className="w-full border-[#AEB6B9] clamp-[text,12px,16px] clamp-[leading,18px,25px]  border font-semibold text-center outline-none clamp-[px,12px,20px] clamp-[py,12px,16px]">
            SHOW MORE
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicySection;
