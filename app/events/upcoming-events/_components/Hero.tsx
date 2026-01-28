import React from "react";
import policy from "../../../../public/png/events.png";
import Image from "next/image";
import HeroStyle from "@/components/HeroStyle";
import Breadcrumbs from "@/components/BreadCrumbs";

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
        <Breadcrumbs activepage="Events at ICPP" />
      </div>
      <HeroStyle
        title="Events at ICPP"
        description="ICPP’s events convene voices and ideas at the intersection of research, policy, and public discourse."
      />
    </div>
  );
};

export default Hero;
