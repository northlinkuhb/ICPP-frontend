import { TKeySession } from "../types/conference.type";
import { TPastEvent } from "../types/event.type";

export const EventDetailApi = {
    getEventDetailData: async (slug: string) : Promise<TPastEvent | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
        const allEvent = [
                {
                    id: "1",
                    slug: "equilibrium-3-0-annual-economics-festival",
                    onDate: "11 June, 2025",
                    fromTime: "8:00 AM",
                    toTime: "5:00 PM",
                    eventName: "Equilibrium 3.0: Annual Economics Festival, Ashoka University",
                    eventDescription: "We’re thrilled to share that the Isaac Centre for Public Policy (ICPP) at Ashoka University joined as the Knowledge Partner for our academic competitions at Equilibrium 3.0, Ashoka’s annual economics fest.ICPP is dedicated to becoming India’s leading hub for public policy research and ideas, contributing to inclusive, sustainable, and accelerated growth for the nation. In line with this vision, ICPP collaborated on four innovative, academically-driven events that brought learning into real-world application:",
                    speakers: ["Kranti Patil", "Vikas Dimble"],
                    imageUrl: "/gallery/event/event-1.jpg",
                },
                {
                    id: "2",
                    slug: "india-at-2047-progress-since-1991-and-the-road-ahead-gurcharan-das",
                    onDate: "11 June, 2025",
                    fromTime: "8:00 AM",
                    toTime: "5:00 PM",
                    eventName: "India at 2047: Progress since 1991 and the Road Ahead : Gurcharan Das",
                    eventDescription: "Ashoka University Economics Society in collaboration with Isaac Centre for Public Policy had the privilege of hosting Gurcharan Das, former CEO of Procter &amp; Gamble India, for an insightful session on India’s economic journey since 1991 and the roadmap to 2047. Mr Das framed 1991 as India’s true economic independence, highlighting how these reforms lifted about 447 million people from poverty, but failed to spark an industrial revolution- a critical gap in India’s development story.",
                    speakers: ["Kranti Patil", "Vikas Dimble"],
                    imageUrl: "/gallery/event/event-2.jpg",
                },
                {
                    id: "3",
                    slug: "economics-exchange-conference-trade-productivity-and-economic-transformation",
                    onDate: "11 June, 2025",
                    fromTime: "8:00 AM",
                    toTime: "5:00 PM",
                    eventName: "Economics Exchange Conference: Trade, productivity and Economic Transformation",
                    eventDescription: "The Isaac Centre for Public Policy and Department of Economics organized The Economics Exchange series featuring presentation by Sankalp Mathur, Priyam Verma, Anshuman Tiwari, and Keynote address by Prof. Donald R. Davis.",
                    speakers: ["Prof. Donald R. Davis", "Ragnar Nurkse"],
                    imageUrl: "/gallery/event/event-3.jpg",
                },
                {
                    id: "4",
                    slug: "work-from-home-work-from-anywhere-urban-and-global-economic-development-seminar",
                    onDate: "11 June, 2025",
                    fromTime: "8:00 AM",
                    toTime: "5:00 PM",
                    eventName: "Work from Home, Work from Anywhere: Urban and Global Economic Development’ seminar",
                    eventDescription: "International trade and urbanization have been two important engines of economic growth for countries around the globe. However, in recent years, both have encountered significant disruptions. The COVID-19 pandemic accelerated the shift to remote work, prompting demographic shifts as people relocated away from urban centers, raising questions about the future of cities and labor markets. At the same time, post-pandemic industrial policies—ranging from subsidies to tariffs—have placed new pressures on global trade dynamics, reshaping supply chains and economic relationships between nations. As cities have historically thrived as hubs of commerce and international exchange, these shifts in trade policies and workforce distribution are redefining the economic role of urban centers. Against this evolving landscape, this talk will explore pressing issues and emerging ideas in urban and labor economics, as well as international trade, offering insights into how these forces continue to shape economic development.",
                    speakers: ["Vikas Dimble", "Kranti Patil"],
                    imageUrl: "/gallery/event/event-4.png",
                },
                {
                    id: "5",
                    slug: "dilemmas-in-central-banking-dr-duvvuri-subbarao-22nd-governor-rbi",
                    onDate: "11 June, 2025",
                    fromTime: "8:00 AM",
                    toTime: "5:00 PM",
                    eventName: "Dilemmas in Central Banking’: Dr. Duvvuri Subbarao (22nd Governor, RBI)",
                    eventDescription: "The Ashoka University Economics Society was honored to host Dr. Duvvuri Subbarao, former Governor of the Reserve Bank of India (2008-13), for an insightful discussion on the challenges of central banking and economic management during the Global Financial Crisis (2008-09).",
                    speakers: ["Dr. Duvvuri Subbarao"],
                    imageUrl: "/gallery/event/event-5.jpg",
                },
                {
                    id: "6",
                    slug: "trumps-tariff-war-opportunity-or-threat-for-india-prachi-mishra",
                    onDate: "11 February, 2025",
                    fromTime: "8:00 AM",
                    toTime: "5:00 PM",
                    eventName: "Trump’s Tariff War: Opportunity Or Threat For India? | The Big Question | Prachi Mishra",
                    eventDescription: "Trump’s aggressive tariff policies have triggered a global trade war, impacting numerous trading partners, including India. In response, India has adjusted custom duties to mitigate the effects. While initially avoiding the full brunt of tariffs, India faces ongoing challenges and opportunities in this volatile trade environment. The question remains: can India leverage this situation for economic growth, or will it hinder progress. Watch Dr. Prachi Mishra (Head, ICPP) discusses the tariff policies and its impact on the Indian Economy in the Big Questions.",
                    speakers: ["Prachi Mishra"],
                    imageUrl: "/gallery/event/event-6.jpg",
                },
                {
                    id: "7",
                    slug: "harvard-case-study-workshop-with-professor-jeffrey-liebman",
                    onDate: "02 December, 2024",
                    fromTime: "8:00 AM",
                    toTime: "5:00 PM",
                    eventName: "Harvard Case Study Workshop with Professor Jeffrey Liebman",
                    eventDescription: "Event Overview: Isaac Centre for Public Policy (ICPP) hosted a workshop led by Professor Jeffrey Liebman, Professor of Public Policy at the Harvard Kennedy School and Distinguished Fellow at ICPP. Between two sessions, around 60-65 participants engaged in a detailed discussion of a Harvard case study examining the effects of cash benefits on healthcare utilization and health outcomes, offering valuable insights for those interested in evidence-based policy analysis and implementation. About Professor Jeffrey Liebman: Dr. Jeffrey Liebman is the Robert W. Scrivner Professor of Public Policy at the Harvard Kennedy School, where he teaches courses in social policy, public sector economics, and American economic policy. At Harvard Kennedy School, he is Director of the Government Performance Lab, which has been providing pro bono technical assistance to state and local governments since 2012 to improve the results they achieve for their citizens.During the first two years of the Obama Administration, Professor Liebman served at the Office of Management and Budget (OMB), first as Executive Associate Director and Chief Economist, and then as Acting Deputy Director. He has also served in the Clinton Administration as Special Assistant to the President for Economic Policy. In these roles, he played a key part in shaping economic policy and overseeing budgetary matters during a critical period for the U.S. economy.",
                    speakers: ["Professor Jeffrey Liebman"],
                    imageUrl: "/gallery/event/event-7.jpg",
                },
            ];
        return allEvent.find(item => item.slug === slug);
    }
}