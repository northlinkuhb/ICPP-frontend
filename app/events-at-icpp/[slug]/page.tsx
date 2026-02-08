import React from "react";
import keysession from '@/public/key-session.png';
import LinkArrow from "@/components/svg/LinkArrow";
import Image from "next/image";
import MainHeader from "@/components/ui/SectionMainHeader";
import Hero from "../(events)/upcoming-event/_components/Hero";
import { EventDetailApi } from "@/network/api/event-detail.api";
import { notFound } from "next/navigation";

interface EventDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface EventData {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  speakers: string[];
  moderator: string;
  about: string;
}

const page = async ( props : EventDetailPageProps) => {
    const slug = (await props.params).slug;
    const eventDetailData = await EventDetailApi.getEventDetailData(slug);
    if(!eventDetailData){
        return notFound();
    }


  return (
    <div>
        <Hero />
        <div className='clamp-[px,24px,80px] clamp-[py,40px,120px]'>
            <div className=" text-gray clamp-[pb,4px,10px] clamp-[pb,20px,40px] font-geist-mono clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d]">
                THIS EVENT HAS PASSED
            </div>
            <MainHeader label={eventDetailData.eventName} />
            <div className='clamp-[pt,20px,40px]'>
                <div className='clamp-[py,5px,10px] flex clamp-[gap,10px,20px] text-black border-t border-b border-light-gray'>
                    <div className='font-semibold clamp-[text,h4-m,h4-d] '>
                        Date
                    </div>
                    <div className='clamp-[text,body1-m,body1-d] '>
                        {eventDetailData.onDate}
                    </div>
                </div>
                <div className='clamp-[py,5px,10px] flex clamp-[gap,10px,20px] text-black border-b border-light-gray'>
                    <div className='font-semibold clamp-[text,h4-m,h4-d] '>
                        Time
                    </div>
                    <div className='clamp-[text,body1-m,body1-d] '>
                        {eventDetailData.fromTime} - {eventDetailData.toTime}
                    </div>
                </div>
                <div className='clamp-[py,5px,10px]  clamp-[gap,10px,20px] text-black border-b border-light-gray'>
                    
                    <div className='clamp-[text,body1-m,body1-d] '>
                            <div className='inline-block align-top'>
                                {eventDetailData.speakers.map((speaker: string, index: number) => (
                                    <div key={speaker} className='clamp-[pb,10px,20px]'>
                                        {index === 0 ? (
                                            <>
                                                <span className='font-semibold clamp-[text,h4-m,h4-d] clamp-[mr,10px,20px]'>Speakers</span> {speaker}
                                            </>
                                        ) : (
                                            speaker
                                        )}
                                    </div>
                                ))}
                            </div>
                    </div>
                </div>
            
                <div className='clamp-[py,20px,40px] clamp-[text,body2-m,body2-d] text-black clamp-[leading,body2-m,body2-d]'>
                    {eventDetailData.eventDescription} India’s macro-fiscal policies within a post-COVID paradigm shift. Fiscal orthodoxy, once defined by fixed thresholds, now requires dynamic recalibration. Singh called for extending scrutiny to state-level finances, warning of a growing misalignment with central policies.<br/><br/>

                    Dr. Arvind Panagariya added nuance, suggesting that moderate inflation (around 4%) is desirable for a developing economy. He addressed India’s long-run development goals, arguing that sustained 7–8% growth could allow India to meet its “Viksit Bharat 2047” vision. He highlighted the growing strategic space India occupies amid US-China trade decoupling. However, trade gains, he cautioned, hinge on deeper bilateral engagements.<br/><br/>

                    Shri Ajay Seth provided a multilateral lens, highlighting energy security concerns dominating the Global South’s development agenda. He advocated for a rebalanced fiscal policy that promotes capital expenditure while cautioning against financing current consumption from public funds. He raised the imperative to raise the tax-to-GDP ratio and called for performance-linked fiscal transfers.
                </div>
                <div className=' flex clamp-[gap,10px,20px] text-black flex-wrap'>
                    <div className='font-semibold clamp-[text,button-m,button-d] '>
                        Add to Calender
                    </div>
                    <div className='clamp-[text,body1-m,body1-d] flex items-center gap-[5px] clamp-[text,body3-m,body3-d]'>
                        <div>Google Calender</div>
                        <LinkArrow />
                    </div>
                    <div className='clamp-[text,body1-m,body1-d] flex items-center gap-[5px] clamp-[text,body3-m,body3-d]'>
                        <div>iCalendar</div>
                        <LinkArrow />
                    </div>
                    <div className='clamp-[text,body1-m,body1-d] flex items-center gap-[5px] clamp-[text,body3-m,body3-d]'>
                        <div>Outlook</div>
                        <LinkArrow />
                    </div>
                </div>
            </div>
        </div>
        <Image src={eventDetailData.imageUrl} alt="Vector" className="w-full h-[405px] object-cover" width={100} height={405} unoptimized />
    </div>
  );
};

export default page;
