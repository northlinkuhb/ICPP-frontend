import React, { Suspense } from "react";
import Hero from "../../_components/Hero";
import about from "../../../../public/about-us.png";
import AboutTab from "../../_components/AboutTab";
import AuthorCard from "@/components/ui/AuthorCard";
import TopFooterCTA from "@/components/ui/TopFooterCTA";
import { AboutApi } from "@/network/api/about.api";

const page = async () => {
  const aboutApiData = await AboutApi.getAboutPageData();
  return (
    <div>
      <Hero
        image={about}
        imageAlt="Advisory Board"
        breadcrumb={{ activepage: "About Us", innerpage: "Our Story" }}
        title="Our Story"
        description="ICPP operates at the nexus of research, education, and policymaking."
      />
      <div className="clamp-[pt,40px,120px] clamp-[px,24px,80px]">
        <Suspense fallback={null}>
          <AboutTab />
        </Suspense>
        <div className="text-deep-blue clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d] font-semibold clamp-[mt,40px,80px] ">
          Advisory Board
        </div>
        <AuthorCard leadersData={aboutApiData.advisories} />
      </div>
      <TopFooterCTA
        buttonName={"View Now"}
        description={"Explore upcoming events shaping public policy"}
      />
    </div>
  );
};

export default page;
