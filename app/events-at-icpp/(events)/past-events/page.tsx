import React from "react";
import policy from "@public/png/events.png";
import EventsSection from "../../_components/EventsSection";
import EventListTile from "../../_components/EventListTile";
import Hero from "../../_components/Hero";
import { EventApi } from "@/network/api/event.api";


const page = async () => {
  const eventPageData = await EventApi.getEventpageData();
  
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
      

      {eventPageData.pastEvents.map((event) => (
        <EventListTile
          key={event.id}
          slug={event.slug}
          date={event.date}
          time={event.time}
          eventName={event.eventName}
          eventDescription={event.eventDescription}
          speakers={event.speakers}
          category="past-events"
        />
      ))}
    </div>
  );
};

export default page;
