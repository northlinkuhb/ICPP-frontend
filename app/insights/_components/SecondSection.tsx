"use client";
import Tab from "@/components/Tab";
import React, { useState } from "react";
import second from "@public/media.png";
import seconfirst from "@public/banners/banner2.png";
import Image from "next/image";
import InsightSection from "./InsightSection";
const SecondSection = () => {
  const [activeTab, setActiveTab] = useState("featured");

  const tabs = [
    { name: "Featured", label: "featured" },
    { name: "Op-Eds", label: "op-eds" },
    { name: "Bulletin", label: "bullets" },
    { name: "Blog", label: "blog" },
    { name: "Newsletter", label: "newsletter" },
    { name: "Viewpoints", label: "viewpoints" },
  ];

  const handleTabChange = (label: string) => {
    setActiveTab(label);
  };

  return (
    <div className=" text-black clamp-[pt,40px,120px]">
      <div className="clamp-[px,24px,80px]">
        {" "}
        <Tab tabs={tabs} onTabChange={handleTabChange} activeTab={activeTab} />
      </div>

      <div className="">
        {activeTab === "featured" && <FeaturedSection />}
        {activeTab === "op-eds" && <InsightSection allTitle="Op-Eds" />}
        {activeTab === "bullets" && <InsightSection allTitle="Bulletins" />}
        {activeTab === "blog" && <InsightSection allTitle="Blogs" />}
        {activeTab === "newsletter" && (
          <InsightSection allTitle="Newsletters" />
        )}
        {activeTab === "viewpoints" && <InsightSection allTitle="Viewpoints" />}
      </div>
    </div>
  );
};

export default SecondSection;

export const FeaturedSection = () => {
  const insightData = [
    {
      typeId: 1,
      videoId: "DSfBnpr44PQ",
      alt: "insight-1",
      type: "Video",
      title: "Temperature Shocks in Early-Life and Long-run Health Outcomes",
      author: "Aparajita Dasgupta",
      date: "22 November, 2025",
      image: "",
    },
    {
      typeId: 2,
      videoId: "",
      alt: "insight-2",
      type: "Article",
      title:
        "Laws Mandating Prevention of Sexual Harassment at Workplace and Female Employment",
      author: "John Smith",
      date: "15 December, 2025",
      image: second,
    },
    {
      image: seconfirst,
      typeId: 2,
      videoId: "",
      alt: "insight-3",
      type: "Podcast",
      title: "Renewable Energy and Sustainability",
      author: "Emily Johnson",
      date: "10 January, 2026",
    },
    {
      typeId: 2,
      videoId: "",
      alt: "insight-2",
      type: "Article",
      title:
        "Laws Mandating Prevention of Sexual Harassment at Workplace and Female Employment",
      author: "John Smith",
      date: "15 December, 2025",
      image: second,
    },
    {
      image: seconfirst,
      typeId: 2,
      videoId: "",
      alt: "insight-3",
      type: "Podcast",
      title: "Renewable Energy and Sustainability",
      author: "Emily Johnson",
      date: "10 January, 2026",
    },
    {
      typeId: 1,
      videoId: "DSfBnpr44PQ",
      alt: "insight-1",
      type: "Video",
      title: "Temperature Shocks in Early-Life and Long-run Health Outcomes",
      author: "Aparajita Dasgupta",
      date: "22 November, 2025",
      image: "",
    },
  ];
  return (
    <div>
      <div className="clamp-[py,20px,80px] clamp-[px,24px,80px]">
        <h2 className=" text-deep-blue clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d] font-semibold">
          Featured
        </h2>
        <div className="clamp-[mt,24px,40px] grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 clamp-[gap,16px,20px]">
          {insightData.map((insight, index) => (
            <div key={index}>
              {insight.typeId === 1 ? (
                <div className="relative w-full clamp-[h,204px,310px] overflow-hidden ">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${insight.videoId}`}
                    title={insight.alt}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative w-full clamp-[h,204px,310px] overflow-hidden ">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="clamp-[mt,12px,20px] uppercase text-electric-blue clamp-[text,caption1-m,caption1-d] clamp-[leading,caption1-m,caption1-d]">
                {insight.type}
              </div>

              <div className="clamp-[mt,4px,10px] line-clamp-2 min-h-[3.6ch] clamp-[text,h4-m,h4-d] clamp-[leading,h4-m,h4-d] font-semibold">
                {insight.title}
              </div>

              <div className="clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d] clamp-[mt,4px,10px]">
                Episode by <span>{insight.author}</span>
              </div>

              <div className="clamp-[text,caption1-m,caption1-d] clamp-[leading,caption1-m,caption1-d] clamp-[mt,4px,10px] text-gray">
                {insight.date}
              </div>
            </div>
          ))}
        </div>

        <div className=""></div>
      </div>

      <div className="  ">
        <div className="clamp-[px,24px,80px] clamp-[pt,20px,80px]  bg-light-blue">
          <h2 className=" text-deep-blue clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d] font-semibold">
            In the Spotlight{" "}
          </h2>
        </div>
        <div className="flex lg:flex-row flex-col  text-black ">
          <div className=" clamp-[pl,24px,80px] max-lg:clamp-[pr,24px,80px] clamp-[pt,20px,40px] lg:clamp-[pb,20px,80px] lg:clamp-[rounded-br,20px,40px]   bg-light-blue lg:w-[50%] relative">
            <div className="relative w-full clamp-[h,204px,480px]">
              <Image src={second} fill alt="" className="object-cover " />
            </div>
          </div>

          <div className=" lg:clamp-[pl,20px,48px]  clamp-[pl,24px,80px]  clamp-[pr,24px,80px] relative clamp-[pt,20px,40px] clamp-[pb,40px,80px] md:clamp-[rounded-bl,20px,40px]   bg-light-blue  lg:w-[50%]">
            <p className="clamp-[text,11px,14px] uppercase leading-[100%] pt-[4px] text-electric-blue">
              Podcast
            </p>
            <h2 className="clamp-[text,h3-m,h3-d] clamp-[pt,0.75rem,1.25rem] font-semibold clamp-[leading,h3-m,h3-d]">
              Temperature Shocks in Early-Life and Long-run Health Outcomes
            </h2>

            <p className="clamp-[text,11px,16px] pt-[8px] leading-[120%]">
              Published by{" "}
              <span className="underline decoration-1 text-black hover:text-[#1893C9] duration-300 transition-all ease-in-out  cursor-pointer underline-offset-2">
                 Aparajita Dasgupta
              </span>
            </p>
            <p className="clamp-[text,11px,14px] pt-[4px] leading-[100%] pt-[4px] text-[#898F92]">
              22 November, 2025{" "}
            </p>

            <p className="clamp-[text,11px,16px] pt-[10px] text-[#898F92] leading-[120%]">
              Lorem ipsum dolor sit amet consectetur. Gravida faucibus viverra
              nibh ullamcorper aliquam nec ut cursus fermentum. Erat senectus ac
              nunc sed ipsum sem ipsum. Sed risus velit tellus aliquam luctus
              cras risus et sit. Duis lorem vestibulum rhoncus sodales ac. Sed
              senectus odio amet etiam maecenas commodo nulla nunc feugiat.
              Consectetur elit purus pharetra sagittis est. Nisl elit sodales
              vulputate urna donec vitae sagittis at. Ut amet elit sit sed metus
              vitae. Scelerisque rhoncus ut ipsum sagittis nunc. Adipiscing enim
              eros lectus ultricies in vel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
