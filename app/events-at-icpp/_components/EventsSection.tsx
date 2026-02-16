"use client";
import Tab from "@/components/Tab";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TextStaggerAnimation from "@/components/animations/TextStaggerAnimation";

interface EventsSectionProps {
  initialActiveTab?: string;
}

const EventsSection = ({
  initialActiveTab = "upcoming-event",
}: EventsSectionProps) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const router = useRouter();

  const tabs = [
    { name: "Upcoming Events", link: "/events-at-icpp/upcoming-event" },
    { name: "Past Events", link: "/events-at-icpp/past-events" },
  ];
  const handleTabChange = (label: string) => {
    setActiveTab(label);
    router.push(`/events-at-icpp/${label}`, { scroll: false });
  };
  return (
    <div className="clamp-[px,1.5rem,5rem] clamp-[py,2.5rem,7.5rem]">
      <h2 className=" text-deep-blue clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d] font-semibold">
        <TextStaggerAnimation text="All Events" className=" flex flex-wrap" />
      </h2>
      <div className="clamp-[pt,20px,60px]">
        {" "}
        <Tab tabs={tabs} onTabChange={handleTabChange} activeTab={activeTab} />
      </div>
    </div>
  );
};

export default EventsSection;
