import React from "react";
import icppEvent from "@public/icpp-event.png";

import Image from "next/image";
import HeroStyle from "@/components/HeroStyle";
import Breadcrumbs from "@/components/BreadCrumbs";

const datas = [
  {
    

    title: "2nd and 3rd May, 2026",
    },
  {
    

    title: "Taj Mansingh Hotel, New Delhi, India",
    },
];
const Hero = () => {
  return (
    <div className="md:min-h-[90svh] clamp-[rounded-br,20px,40px] relative overflow-hidden text-white flex flex-col gap-[60px] md:justify-between clamp-[pb,22px,60px] clamp-[px,24px,80px] overflow-hidden">
      <Image
        src={icppEvent}
        alt=""
        fill
        className="absolute max-md:!h-[200px] clamp-[rounded-br,20px,40px] inset-0 object-cover "
      />
      <div className="absolute inset-0 bg-black/40 clamp-[rounded-br,20px,40px]" />
      <div className="relative max-md:pt-[10rem] clamp-[pt,100px,155px] z-20">
        {" "}
        <Breadcrumbs activepage="The ICPP Conference" />
      </div>
      <HeroStyle
        datas={datas}
        title="The ICPP Conference: A Summit of Ideas"
        description="Bringing policymakers, academics, and practitioners together to discuss India’s growth strategy."
      />
    </div>
  );
};

export default Hero;
