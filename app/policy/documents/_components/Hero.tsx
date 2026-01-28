import React from "react";
import document from "@public/png/document.png";
import Image from "next/image";
import HeroStyle from "@/components/HeroStyle";
import Breadcrumbs from "@/components/BreadCrumbs";

const Hero = () => {
  return (
    <div className="md:min-h-[90svh] clamp-[rounded-br,20px,40px] relative overflow-hidden text-white flex flex-col gap-[60px] md:justify-between clamp-[pb,22px,60px] clamp-[px,24px,80px] overflow-hidden">
      <Image
        src={document}
        alt=""
        fill
        className="absolute max-md:!h-[200px] clamp-[rounded-br,20px,40px] inset-0 object-cover "
      />
      <div className="relative max-md:pt-[10rem] clamp-[pt,100px,155px] z-20">
        {" "}
        <Breadcrumbs
          activepage="Policy"
          innerpage="Discussion Papers"
          activePageLink="/policy"
        />
      </div>
      <HeroStyle
        title="Discussion Papers"
        description="Analytical pieces exploring policy questions and debates to encourage informed discussion."
      />
    </div>
  );
};

export default Hero;
