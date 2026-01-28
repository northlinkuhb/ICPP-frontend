import React from "react";
import Image from "next/image";
import HeroStyle from "@/components/HeroStyle";
import { StaticImageData } from "next/image";
import Breadcrumbs from "@/components/BreadCrumbs";

type HeroProps = {
  image: string | StaticImageData;
  imageAlt?: string;

  breadcrumb: {
    activepage: string;
    innerpage?: string;
    activePageLink?: string;
  };
  title: string;
  description: string;
};

const Hero = ({
  image,
  imageAlt = "",
  breadcrumb,
  title,
  description,
}: HeroProps) => {
  return (
    <div className="md:min-h-[90svh] clamp-[rounded-br,20px,40px] relative overflow-hidden text-white flex flex-col gap-[60px] md:justify-between clamp-[pb,22px,60px] clamp-[px,24px,80px] overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="absolute max-md:!h-[200px] clamp-[rounded-br,20px,40px] inset-0 object-cover "
      />
      <div className="relative max-md:pt-[10rem] clamp-[pt,100px,155px] z-20">
        {" "}
        <Breadcrumbs
          activepage={breadcrumb.activepage}
          innerpage={breadcrumb.innerpage}
          activePageLink={breadcrumb.activePageLink}
        />{" "}
      </div>{" "}
      <HeroStyle title={title} description={description} />
    </div>
  );
};

export default Hero;
