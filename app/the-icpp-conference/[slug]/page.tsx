import React from 'react'
import Hero from '../_components/Hero'
import MainHeader from '@/components/ui/SectionMainHeader'
import LinkArrow from '@/components/svg/LinkArrow';
import { ConferenceDetailApi } from '@/network/api/conference-detail.api';
import { notFound } from 'next/navigation';

interface ConferenceDetailPageProps {
    params: Promise<{slug: string}>;
}

const page = async (props: ConferenceDetailPageProps) => {
    const slug = (await props.params).slug
    const conferenceDetailData = await ConferenceDetailApi.getConferenceDetailData(slug);
    if(!conferenceDetailData){
        return notFound();
    }
  return (
    <div>
      <Hero />
      <div className='clamp-[px,24px,80px] clamp-[py,40px,120px]'>
        <MainHeader label={conferenceDetailData.title} />
        <div className='clamp-[pt,20px,40px]'>
            <div className='clamp-[py,5px,10px] flex clamp-[gap,10px,20px] text-black border-t border-b border-light-gray'>
                <div className='font-semibold clamp-[text,h4-m,h4-d] '>
                    Date
                </div>
                <div className='clamp-[text,body1-m,body1-d] '>
                    {conferenceDetailData.onDate}
                </div>
            </div>
            <div className='clamp-[py,5px,10px] flex clamp-[gap,10px,20px] text-black border-b border-light-gray'>
                <div className='font-semibold clamp-[text,h4-m,h4-d] '>
                    Time
                </div>
                <div className='clamp-[text,body1-m,body1-d] '>
                    {conferenceDetailData.fromTime} - {conferenceDetailData.toTime}
                </div>
            </div>
            <div className='clamp-[py,5px,10px]  clamp-[gap,10px,20px] text-black border-b border-light-gray'>
                
                <div className='clamp-[text,body1-m,body1-d] '>
                        <div className='inline-block align-top'>
                            {conferenceDetailData.speakers.map((speaker, index) => (
                                <div key={speaker.name} className='clamp-[pb,10px,20px]'>
                                    {index === 0 ? (
                                        <>
                                            <span className='font-semibold clamp-[text,h4-m,h4-d] clamp-[mr,10px,20px]'>Speakers</span> {speaker.name} {speaker.designation}
                                        </>
                                    ) : (
                                        <>{speaker.name} {speaker.designation}</>
                                    )}
                                </div>
                            ))}
                        </div>
                </div>
            </div>
            <div className='clamp-[py,5px,10px] flex clamp-[gap,10px,20px] text-black border-b border-light-gray'>
                <div className='font-semibold clamp-[text,h4-m,h4-d] '>
                    Moderator
                </div>
                <div className='clamp-[text,body1-m,body1-d] '>
                    {conferenceDetailData.moderator.name} {conferenceDetailData.moderator.designation}
                </div>
            </div>
            <div className='clamp-[py,20px,40px] clamp-[text,body2-m,body2-d] text-black clamp-[leading,body2-m,body2-d]'>
                <div dangerouslySetInnerHTML={{ __html: conferenceDetailData.description }} />
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
            <div className='clamp-[pt,20px,40px]'>
                <iframe
                    className="w-full clamp-[h,172px,810px]"
                    src={`https://www.youtube.com/embed/${conferenceDetailData.videoId}`}
                    title={conferenceDetailData.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default page
