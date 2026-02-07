import Hero from "./_components/Hero";
import Image, { StaticImageData } from "next/image";
import noEvent from "@public/png/no-events.png";
import MainEventSection from "@/components/ui/MainEventSection";
import second from "@public/png/Vector.png";
import gallery1 from "@public/gallery/gallery-potrait.png";
import gallery2 from "@public/gallery/gallery-landscape.png";
import gallery3 from "@public/gallery/gallery3.png";
import gallery4 from "@public/gallery/gallery4.png";
import gallery5 from "@public/gallery/gallery5.png";
import gallery6 from "@public/gallery/gallery6.png";
import EventsSection from "../_components/EventsSection";
import GalleryMaisonGrid from "@/components/GalleryMaisonGrid";
import SectionHeader from "@/app/_components/SectionHeader";

const page = () => {
  const tabs = [
    { name: "Upcoming Events", link: "/events/upcoming-events" },
    { name: "Past Events", link: "/events/past-events" },
  ];
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
  return (
    <div>
      <Hero />
      <EventsSection initialActiveTab="upcoming-event" />
      <div className="clamp-[px,24px,80px]">
        <Image src={noEvent} alt="Events" className="w-full h-fit" />
        
      </div>
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
