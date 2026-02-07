import React from "react";
import policy from "@public/png/events.png";
import Hero from "../../about-us/_components/Hero";
import EventsSection from "../_components/EventsSection";
import EventListTile from "../_components/EventListTile";
import MainEventSection from "@/components/ui/MainEventSection";
import second from "@public/png/Vector.png";
import Image, { StaticImageData } from "next/image";
import SectionHeader from "@/app/_components/SectionHeader";
import GalleryMaisonGrid from "@/components/GalleryMaisonGrid";
import gallery1 from "@public/gallery/gallery-potrait.png";
import gallery2 from "@public/gallery/gallery-landscape.png";
import gallery3 from "@public/gallery/gallery3.png";
import gallery4 from "@public/gallery/gallery4.png";
import gallery5 from "@public/gallery/gallery5.png";
import gallery6 from "@public/gallery/gallery6.png";

const page = () => {
  const galleryImages: Array<StaticImageData> = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];
  const events = [
    {
      slug: "equilibrium-3-0-annual-economics-festival",
      date: "12 December, 2025",
      time: "11:00 AM - 1:00 PM",
      eventName: "Equilibrium 3.0: Annual Economics Festival, Ashoka University",
      eventDescription: "We're thrilled to share that the Isaac Centre for Public Policy (ICPP) at Ashoka University joined as the Knowledge Partner",
      speakers: ["Speaker Name", "Speaker Name", "Speaker Name"]
    },
    {
      slug: "urban-policy-forum-2025",
      date: "5 November, 2025",
      time: "2:00 PM - 4:00 PM",
      eventName: "Urban Policy Forum 2025",
      eventDescription: "A comprehensive discussion on urban development challenges and policy interventions in Indian cities.",
      speakers: ["Dr. Rajesh Kumar", "Prof. Ananya Das", "Policy Expert"]
    },
    {
      slug: "research-symposium-on-development-economics",
      date: "18 October, 2025",
      time: "10:00 AM - 12:30 PM",
      eventName: "Research Symposium on Development Economics",
      eventDescription: "Exploring recent research findings in development economics and their policy implications.",
      speakers: ["Dr. Amit Sharma", "Research Scholar", "Economist"]
    },
    {
      slug: "public-policy-workshop-series",
      date: "25 September, 2025",
      time: "3:00 PM - 5:00 PM",
      eventName: "Public Policy Workshop Series",
      eventDescription: "Interactive workshop sessions on effective policy formulation and implementation strategies.",
      speakers: ["Policy Consultant", "Government Official", "Academic Researcher"]
    },
    {
      slug: "health-policy-and-governance-summit",
      date: "10 August, 2025",
      time: "11:30 AM - 1:30 PM",
      eventName: "Health Policy and Governance Summit",
      eventDescription: "Discussion on healthcare policy reforms and governance mechanisms in the Indian health sector.",
      speakers: ["Dr. Priya Verma", "Healthcare Administrator", "Policy Analyst"]
    },
    {
      slug: "educational-equity-and-access-conference",
      date: "22 July, 2025",
      time: "4:00 PM - 6:00 PM",
      eventName: "Educational Equity and Access Conference",
      eventDescription: "Examining barriers to educational access and policy solutions for inclusive education.",
      speakers: ["Education Expert", "NGO Representative", "Academic"]
    }
  ];
  return (
    <div>
      <Hero
        image={policy}
        imageAlt=""
        breadcrumb={{ activepage: "Events at ICPP" }}
        title="Events at ICPP"
        description="ICPP’s events convene voices and ideas at the intersection of research, policy, and public discourse."
      />
      <EventsSection initialActiveTab="past-events" />
      <div className="clamp-[px,24px,80px] grid grid-cols-[1fr_3fr_1fr] clamp-[text,caption2-m,caption2-d] text-gray font-geist-mono" >
        <div className="hidden md:block">
            DATE & TIME
        </div>
        <div className="hidden md:block">
          EVENT NAME
        </div>
        <div className="hidden md:block">
            SPEAKERS
        </div>
      </div>
      

      {events.map((event, index) => (
        <EventListTile
          key={index}
          slug={event.slug}
          date={event.date}
          time={event.time}
          eventName={event.eventName}
          eventDescription={event.eventDescription}
          speakers={event.speakers}
          category="past-events"
        />
      ))}

      <div className="clamp-[pt,40px,120px]">
        <MainEventSection />
      </div>
      <div>
        <Image src={second} alt="Vector" className="w-full " />
      </div>
      <div className="clamp-[px,24px,80px] clamp-[pt,40px,120px]">
        <SectionHeader title="Events in Pictures" subtitle="IMAGE GALLERY"/>
      </div>
      <GalleryMaisonGrid images={galleryImages}/>
    </div>
  );
};

export default page;
