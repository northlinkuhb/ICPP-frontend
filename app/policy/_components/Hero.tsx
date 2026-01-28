import React from "react";
import policy from "../../../public/policy.png";
import Image from "next/image";
import HeroStyle from "@/components/HeroStyle";
import Breadcrumbs from "@/components/BreadCrumbs";

const datas = [
  {
    link: "/policy/documents",
    title: "Discussion Papers",
    description:
      "Analytical pieces exploring policy questions and debates to encourage informed discussion.",
  },
  {
    link: "/policy/documents",
    title: "Policy Briefs",
    description:
      "Concise briefs distilling research insights, trade-offs, and actionable policy takeaways.",
  },
  {
    link: "/policy/documents",
    title: "Case Studies",
    description:
      "In-depth studies examining policies and programmes, drawing lessons from real-world implementation.",
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
        <Breadcrumbs activepage="Policy" />
      </div>
      <HeroStyle
        datas={datas}
        title="Policy"
        description="ICPP’s accessible policy outputs translating research into practical, evidence-based decisions."
      />
    </div>
  );
};

export default Hero;
