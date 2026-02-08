import React from "react";
import Link from "next/link";
import { TPastEvent } from "@/network/types/event.type";

interface EventListTileProps {
  eventData: TPastEvent;
}

const EventListTile: React.FC<EventListTileProps> = ({
  eventData,
}) => {
  const { slug, onDate, fromTime, toTime, eventName, eventDescription, speakers } = eventData;
  
  return (
    <div className="grid grid-cols-[1fr_3fr_1fr] clamp-[py,20px,40px] clamp-[px,24px,80px] border-b border-light-grays">
      <div className="font-geist-sans text-black">
        <div className="font-semibold clamp-[text,h4-m,h4-d] clamp-[leading,h4-m,h4-d]">
          {onDate}
        </div>
        <div className="mt-0 lg:mt-[10px] clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d]">
          {`${fromTime} - ${toTime}`}
        </div>
      </div>

      <div className="font-geist-sans text-black">
        <Link href={`/events-at-icpp/${slug}`}>
          <div className="font-semibold clamp-[text,h4-m,h4-d] clamp-[leading,h4-m,h4-d] cursor-pointer hover:text-deep-blue transition-colors">
            {eventName}
          </div>
        </Link>
        <div className="mt-0 lg:mt-[10px] clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d] text-gray line-clamp-2">
          {eventDescription}
        </div>
      </div>

      <div className="font-geist-sans text-black flex flex-col gap-[5px]">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d] underline"
          >
            {speaker}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventListTile;
