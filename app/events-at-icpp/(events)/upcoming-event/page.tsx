import Hero from "./_components/Hero";
import Image from "next/image";
import noEvent from "@public/png/no-events.png";

import EventsSection from "../../_components/EventsSection";

const page = () => {
  
  return (
    <div>
      <Hero />
      <EventsSection initialActiveTab="upcoming-event" />
      <div className="clamp-[px,24px,80px]">
        <Image src={noEvent} alt="Events" className="w-full h-fit" />
      </div>
      
    </div>
  );
};

export default page;
