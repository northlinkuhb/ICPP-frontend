"use client";

import Link from "next/link";
import { TKeySession } from "@/network/types/conference.type";

interface MediaCardProps {
  item: TKeySession;
}

const MediaCard = ({ item }: MediaCardProps) => {
  return (
    <Link href={`/the-icpp-conference/${item.slug}`}>
      <div className="flex clamp-[gap,12px,24px] cursor-pointer hover:opacity-80 transition-opacity">
        <div className="clamp-[w,80px,320px] shrink-0 relative clamp-[h,80px,240px]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${item.videoId}`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className=" flex flex-col justify-between border-t border-t-light-gray flex-1">
          <div>
            <h2 className="clamp-[text,h4-m,h4-d] clamp-[pt,4px,10px] font-semibold clamp-[leading,h4-m,h4-d] text-black">
              {item.title}
            </h2>
            <div className="clamp-[pt,4px,10px]">
              <div className="text-black font-semibold clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d] clamp-[pb,4px,8px]">
                Speakers: {item.speakers.map((speaker, idx) => (
                  <span key={idx} className="text-black clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d]">
                    <span className="font-normal">{speaker.name} - {speaker.designation}, </span>
                  </span>
                ))}
              </div>
              
            </div>
            <div className="line-clamp-3 clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d] text-ellipsis clamp-[pt,4px,10px] text-gray" dangerouslySetInnerHTML={{ __html: item.description }} >
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MediaCard;
