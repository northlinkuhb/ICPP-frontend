import React from "react";
import policy from "@public/png/events.png";
import Hero from "../about-us/_components/Hero";
import EventsSection from "./_components/EventsSection";
const page = () => {
  return (
    <div>
      <Hero
        image={policy}
        imageAlt=""
        breadcrumb={{ activepage: "Events at ICPP" }}
        title="Events at ICPP"
        description="ICPP’s events convene voices and ideas at the intersection of research, policy, and public discourse."
      />
      <EventsSection />
    </div>
  );
};

export default page;
