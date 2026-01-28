"use client";
import Tab from "@/components/Tab";
import React, { useState } from "react";

const EventsSection = () => {
  const [activeTab, setActiveTab] = useState("upcoming-events");

  const tabs = [
    { name: "Upcoming Events", label: "upcoming-events" },
    { name: "Past Events", label: "past-events" },
  ];
  const handleTabChange = (label: string) => {
    setActiveTab(label);
  };
  return (
    <div className="clamp-[px,1.5rem,5rem] clamp-[py,2.5rem,7.5rem]">
      <h2 className=" text-deep-blue clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d] font-semibold">
        All Events{" "}
      </h2>
      <div className="clamp-[pt,20px,60px]">
        {" "}
        <Tab tabs={tabs} onTabChange={handleTabChange} activeTab={activeTab} />
      </div>
    </div>
  );
};

export default EventsSection;
