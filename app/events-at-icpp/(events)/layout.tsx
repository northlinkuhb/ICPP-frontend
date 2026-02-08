import SectionHeader from "@/app/_components/SectionHeader";
import GalleryMaisonGrid from "@/components/GalleryMaisonGrid";
import MainEventSection from "@/components/ui/MainEventSection";
import Image from "next/image";
import React from "react";
import second from "@public/png/Vector.png";
import { TGallery } from "@/network/types/event.type";
import { EventApi } from "@/network/api/event.api";
interface EventsLayoutProps {
  children: React.ReactNode;
  eventGalleryImages?: TGallery[]; // Optional prop for event gallery images
}

const EventsLayout: React.FC<EventsLayoutProps> = async ({ children, eventGalleryImages }) => {
        const eventApiData = await EventApi.getEventpageData();
    
  return (
    <div className="w-full">
      {/* Main Content - On Top */}
      <div>{children}</div>

      {/* Add additional shared components below if needed */}
      <div className="clamp-[pt,40px,120px]">
        <MainEventSection />
      </div>
      <div>
        <Image src={second} alt="Vector" className="w-full " />
      </div>
      <div className="clamp-[px,24px,80px] clamp-[pt,40px,120px]">
        <SectionHeader title="Events in Pictures" subtitle="IMAGE GALLERY"/>
      </div>
      <div className="clamp-[pb,20px,120px] clamp-[pt,20px,40px]">
        <GalleryMaisonGrid images={eventApiData.eventsGallery}/>
      </div>
    </div>
  );
};

export default EventsLayout;
