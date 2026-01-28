import React from "react";
import Hero from "../../_components/Hero";
import about from "../../../../public/about-us.png";
import AboutTab from "../../_components/AboutTab";
import AuthorCard from "@/components/ui/AuthorCard";
import Breadcrumbs from "@/components/BreadCrumbs";
import leader1 from "@public/leaders/asis.png";
import leader2 from "@public/leaders/leader2.png";
import leader3 from "@public/leaders/leader3.png";
import TopFooterCTA from "@/components/ui/TopFooterCTA";

const page = () => {
  const leadersData = [
    {
      src: leader1,
      alt: "leader-1",
      name: "Name Surname 1",
      title: "President",
    },
    {
      src: leader2,
      alt: "leader-2",
      name: "Name Surname 2",
      title: "Vice President",
    },
    {
      src: leader3,
      alt: "leader-3",
      name: "Name Surname 3",
      title: "Director",
    },
    {
      src: leader1,
      alt: "leader-4",
      name: "Name Surname 4",
      title: "Manager",
    },
    {
      src: leader2,
      alt: "leader-5",
      name: "Name Surname 5",
      title: "Coordinator",
    },
    {
      src: leader3,
      alt: "leader-6",
      name: "Name Surname 6",
      title: "Advisor",
    },
    {
      src: leader1,
      alt: "leader-7",
      name: "Name Surname 7",
      title: "Secretary",
    },
  ];
  return (
    <div>
      <Hero
        image={about}
        imageAlt="Fellows"
        breadcrumb={{ activepage: "About Us", innerpage: "Our Story" }}
        title="Our Story"
        description="ICPP operates at the nexus of research, education, and policymaking."
      />
      <div className="clamp-[pt,40px,120px] clamp-[px,24px,80px]">
        <AboutTab />
        <div className="text-deep-blue clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d] font-semibold clamp-[mt,40px,80px] ">
          Fellows
        </div>
        <AuthorCard leadersData={leadersData} />
      </div>
      <TopFooterCTA
        buttonName={"Explore"}
        description={"Data-driven insights on macroeconomic trends"}
      />
    </div>
  );
};

export default page;
