import React from "react";
import keysession from '@/public/key-session.png';
import LinkArrow from "@/components/svg/LinkArrow";
import Image from "next/image";
import MainHeader from "@/components/ui/SectionMainHeader";
import Hero from "../../upcoming-event/_components/Hero";

interface EventDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const EventDetailPage: React.FC<EventDetailPageProps> = async ({ params }) => {
  const { slug } = await params;

  // Event data mapping
  const eventData: Record<string, any> = {
    "equilibrium-3-0-annual-economics-festival": {
      title: "Equilibrium 3.0: Annual Economics Festival, Ashoka University",
      date: "12 December, 2025",
      time: "11:00 AM - 1:00 PM",
      location: "Ashoka University, Delhi NCR",
      description: "We're thrilled to share that the Isaac Centre for Public Policy (ICPP) at Ashoka University joined as the Knowledge Partner for Equilibrium 3.0",
      speakers: ["Speaker Name", "Speaker Name", "Speaker Name"],
      moderator: "Speaker Name",
      about: "Equilibrium is a premier annual event that showcases cutting-edge research and policy discussions in economics."
    },
    "urban-policy-forum-2025": {
      title: "Urban Policy Forum 2025",
      date: "5 November, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Delhi",
      description: "A comprehensive discussion on urban development challenges and policy interventions in Indian cities.",
      speakers: ["Dr. Rajesh Kumar", "Prof. Ananya Das", "Policy Expert"],
      moderator: "Policy Expert",
      about: "This forum addresses critical urban challenges and explores policy solutions for sustainable development."
    },
    "research-symposium-on-development-economics": {
      title: "Research Symposium on Development Economics",
      date: "18 October, 2025",
      time: "10:00 AM - 12:30 PM",
      location: "New Delhi",
      description: "Exploring recent research findings in development economics and their policy implications.",
      speakers: ["Dr. Amit Sharma", "Research Scholar", "Economist"],
      moderator: "Dr. Amit Sharma",
      about: "A symposium dedicated to presenting latest research in development economics."
    },
    "public-policy-workshop-series": {
      title: "Public Policy Workshop Series",
      date: "25 September, 2025",
      time: "3:00 PM - 5:00 PM",
      location: "Mumbai",
      description: "Interactive workshop sessions on effective policy formulation and implementation strategies.",
      speakers: ["Policy Consultant", "Government Official", "Academic Researcher"],
      moderator: "Policy Consultant",
      about: "Hands-on workshop sessions for practitioners and researchers in public policy."
    },
    "health-policy-and-governance-summit": {
      title: "Health Policy and Governance Summit",
      date: "10 August, 2025",
      time: "11:30 AM - 1:30 PM",
      location: "Bangalore",
      description: "Discussion on healthcare policy reforms and governance mechanisms in the Indian health sector.",
      speakers: ["Dr. Priya Verma", "Healthcare Administrator", "Policy Analyst"],
      moderator: "Dr. Priya Verma",
      about: "Focusing on health system reforms and effective governance structures."
    },
    "educational-equity-and-access-conference": {
      title: "Educational Equity and Access Conference",
      date: "22 July, 2025",
      time: "4:00 PM - 6:00 PM",
      location: "Hyderabad",
      description: "Examining barriers to educational access and policy solutions for inclusive education.",
      speakers: ["Education Expert", "NGO Representative", "Academic"],
      moderator: "Education Expert",
      about: "Conference dedicated to exploring solutions for educational equity and access."
    }
  };

  const event = eventData[slug] || {
    title: "Event Not Found",
    date: "",
    time: "",
    location: "",
    description: "",
    speakers: [],
    moderator: "",
    about: "",
  };

  return (
    <div>
        <Hero />
        <div className='clamp-[px,24px,80px] clamp-[py,40px,120px]'>
            <div className=" text-gray clamp-[pb,4px,10px] clamp-[pb,20px,40px] font-geist-mono clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d]">
                THIS EVENT HAS PASSED
            </div>
            <MainHeader label={event.title} />
            <div className='clamp-[pt,20px,40px]'>
                <div className='clamp-[py,5px,10px] flex clamp-[gap,10px,20px] text-black border-t border-b border-light-gray'>
                    <div className='font-semibold clamp-[text,h4-m,h4-d] '>
                        Date
                    </div>
                    <div className='clamp-[text,body1-m,body1-d] '>
                        {event.date}
                    </div>
                </div>
                <div className='clamp-[py,5px,10px] flex clamp-[gap,10px,20px] text-black border-b border-light-gray'>
                    <div className='font-semibold clamp-[text,h4-m,h4-d] '>
                        Time
                    </div>
                    <div className='clamp-[text,body1-m,body1-d] '>
                        {event.time}
                    </div>
                </div>
                <div className='clamp-[py,5px,10px]  clamp-[gap,10px,20px] text-black border-b border-light-gray'>
                    
                    <div className='clamp-[text,body1-m,body1-d] '>
                            <div className='inline-block align-top'>
                                {event.speakers.map((speaker, index) => (
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
                    {event.about} India’s macro-fiscal policies within a post-COVID paradigm shift. Fiscal orthodoxy, once defined by fixed thresholds, now requires dynamic recalibration. Singh called for extending scrutiny to state-level finances, warning of a growing misalignment with central policies.<br/><br/>

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
        <Image src={keysession} alt="Vector" className="w-full h-[405px] object-cover" />
    </div>
  );
};

export default EventDetailPage;
