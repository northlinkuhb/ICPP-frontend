import SectionHeader from "@/app/_components/SectionHeader";
import Image from "next/image";
import React from "react";
import second from "@public/media.png";
import test from "@public/research/research4.png";
import CardAnimation from "@/components/animations/CardAnimation";
const SecondSection = () => {
  const datas = [
    {
      image: test,
      title: "Temperature Shocks in Early-Life and Long-run Health Outcomes",
      published_by: " Aparajita Dasgupta",
      date: "01 November, 2025",
    },
    {
      image: second,
      title:
        "Laws Mandating Prevention of Sexual Harassment at Workplace and Female Employment",
      published_by: "Kanika Mahajan ",
      date: "01 November, 2025",
    },
    {
      image: second,
      title: "Immigration Uncertainty and Offshoring Jobs: Evidence from India",
      published_by: "Kanika Mahajan ",
      date: "01 November, 2025",
    },
    {
      image: second,
      title:
        "How Income Translates Into Consumption: Considering the Efficacy of Fiscal Policy in India",
      published_by: "Kanika Mahajan ",
      date: "01 November, 2025",
    },
  ];
  return (
    <div className="bg-[#1893C9] ">
      <div className="clamp-[px,1.5rem,5rem]  clamp-[rounded-bl,20px,40px] relative overflow-hidden clamp-[pb,40px,100px] bg-white  clamp-[pt,3rem,7.5rem]">
        <SectionHeader subtitle="TOP HIGHLIGHTS" title="Latest in Policy" />

        <div className="flex lg:flex-row flex-col clamp-[gap,20px,48px] text-black clamp-[pt,20px,40px]">
          <div className="2xl:w-[55%] lg:w-[50%] relative">
            <div className="relative w-full clamp-[h,204px,480px]">
              <Image
                src={datas.at(0)?.image || second}
                fill
                alt=""
                className="object-cover "
              />
            </div>

            <h2 className="clamp-[text,h3-m,h3-d] clamp-[pt,0.75rem,1.25rem] font-semibold clamp-[leading,h3-m,h3-d]">
              {datas.at(0)?.title}
            </h2>
            <p className="clamp-[text,11px,16px] leading-[120%]">
              Published by{" "}
              <span className="underline decoration-1 text-black hover:text-[#1893C9] duration-300 transition-all ease-in-out  cursor-pointer underline-offset-2">
                {datas.at(0)?.published_by}
              </span>
            </p>
            <p className="clamp-[text,11px,14px] leading-[100%] pt-[4px] text-[#898F92]">
              {datas.at(0)?.date}
            </p>
          </div>

          <div className="h-auto w-[1px] bg-[#AEB6B9]"></div>
          <div className="2xl:w-[45%] lg:w-[50%]">
            {datas.slice(1, 4).map((item, i) => (
              <CardAnimation index={i} delay={0.1} key={i}>
                <div className="flex clamp-[gap,12px,23px] ">
                  <div className="clamp-[w,78px,192px] relative shrink-0 clamp-[h,78px,144px]">
                    {" "}
                    <Image
                      src={item.image}
                      fill
                      className="object-cover"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5 className="clamp-[text,h4-m,h4-d]  font-semibold clamp-[leading,h4-m,h4-d]">
                      {item.title}
                    </h5>
                    <p className="clamp-[text,11px,16px] clamp-[pt,0.25rem,0.625rem] leading-[120%]">
                      Published by{" "}
                      <span className="underline decoration-1 text-black duration-300 transition-all ease-in-out  hover:text-[#1893C9]  cursor-pointer underline-offset-2">
                        {item.published_by}
                      </span>
                    </p>
                    <p className="clamp-[text,11px,14px] leading-[100%] pt-[4px] text-[#898F92]">
                      {item.date}
                    </p>
                  </div>
                </div>
                {i !== datas.length - 2 && (
                  <div className="h-[1px] w-full my-[2.5rem] bg-[#AEB6B9]"></div>
                )}{" "}
              </CardAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
