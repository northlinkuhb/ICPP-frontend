import React from "react";
import policy from "../../../public/research.jpg";
import Image from "next/image";
import HeroStyle from "@/components/HeroStyle";
import Breadcrumbs from "@/components/BreadCrumbs";

const datas = [
  {
    link: "/policy/documents",

    title: "Research Projects",
    description:
      "ICPP’s published research offers rigorously validated insights to inform policymakers, scholars, and practitioners.",
  },
  {
    link: "/policy/documents",

    title: "Working Papers",
    description:
      "Ongoing research shared for feedback, presenting preliminary findings, methods, and ideas under development.",
  },
];
const Hero = () => {
  return (
    <div className="md:min-h-[90svh] clamp-[rounded-br,20px,40px] relative overflow-hidden text-white flex flex-col gap-[60px] md:justify-between clamp-[pb,22px,60px] clamp-[px,24px,80px] overflow-hidden">
      <Image
        src={policy}
        alt=""
        fill
        className="absolute max-md:!h-[200px] clamp-[rounded-br,20px,40px] inset-0 object-cover "
      />
      <div className="relative max-md:pt-[10rem] clamp-[pt,100px,155px] z-20">
        {" "}
        <Breadcrumbs activepage="Research" />
      </div>
      <HeroStyle
        datas={datas}
        title="Research"
        description="Rigorous, data-driven policy research informing India’s economic decisions."
      />
    </div>
  );
};

export default Hero;
