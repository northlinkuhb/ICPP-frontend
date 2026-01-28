import Hero from "../_components/Hero";
import VisionMission from "../_components/VisionMission";
import second from "@public/png/Vector.png";
import Image from "next/image";
import pursuit1 from "@public/png/pursuit/our-pursuite-1.png";
import pursuit2 from "@public/png/pursuit/our-pursuite-2.png";
import pursuit3 from "@public/png/pursuit/our-pursuite-3.png";
import PursuitCard from "../_components/PursuitCard";
import GallerySection from "@/app/_components/GallerySection";
import about from "../../../public/about-us.png";
import AboutTab from "../_components/AboutTab";

const page = () => {
  const pursuits = [
    {
      image: pursuit1,
      alt: "our-pursuit-1",
      header: "Academic Programmes & Executive Education",
      desc: "Building on Ashoka University’s Economics programme, ICPP offers an interdisciplinary undergraduate major in Economics and Public Policy that provides rigorous training to engage with real-world economic policy challenges.",
      buttonLabel: "Explore our policy work",
      buttonHref: "/policy", // update to correct route if needed
    },
    {
      image: pursuit2,
      alt: "our-pursuit-2",
      header: "Policy & Practitioner Led Research",
      desc: "Led by full-time and visiting faculty, the research operates at the intersection of economics and allied disciplines at Ashoka University, including Political Science, Media Studies, Computer Science, and Biological Sciences. Research grants are awarded to proposals demonstrating clear policy relevance.",
      buttonLabel: "Discover our research initiatives",
      buttonHref: "/research", // update to correct route if needed
    },
    {
      image: pursuit3,
      alt: "our-pursuit-3",
      header: "Public Policy Events",
      desc: "ICPP will disseminate its research, case studies, and policy briefs through periodic workshops and marquee conferences, creating a shared platform for ideas and exchange. Thematic workshops will be hosted in collaboration with other centres at Ashoka.",
      buttonLabel: "View our upcoming events",
      buttonHref: "#", // update to correct route if needed
    },
  ];

  return (
    <div>
      <Hero
        image={about}
        imageAlt=""
        breadcrumb={{ activepage: "About Us", innerpage: "Our Story" }}
        title="Our Story"
        description="The Isaac Centre for Public Policy strengthens India’s policy ecosystem through rigorous research and meaningful engagement, grounded at Ashoka University."
      />
      <div className="clamp-[pt,40px,120px] clamp-[px,24px,80px]">
        <AboutTab />
        <VisionMission />
      </div>
      <div>
        <Image src={second} alt="Vector" className="w-full " />
      </div>

      <div className="clamp-[px,24px,80px] clamp-[py,40px,80px]">
        <div className="clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d] font-semibold text-deep-blue">
          Our Pursuits
        </div>
        <div className="clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d] text-black clamp-[mt,10px,16px]">
          The Isaac Centre for Public Policy (ICPP) aims to achieve excellence
          in three strands of work:
        </div>
        <div className="clamp-[mt,40px,20px]">
          {pursuits.map((pursuit, index) => (
            <PursuitCard
              key={index}
              image={pursuit.image}
              alt={pursuit.alt}
              header={pursuit.header}
              desc={pursuit.desc}
              buttonLabel={pursuit.buttonLabel}
              buttonHref={pursuit.buttonHref}
            />
          ))}
        </div>
      </div>

      <GallerySection />
    </div>
  );
};

export default page;
