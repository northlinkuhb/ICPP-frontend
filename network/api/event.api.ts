import { TEventPageResp } from "../types/event.type";

export const EventApi = {
    getEventpageData: async (): Promise<TEventPageResp> => {
        // Simulate an API call with a delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        return {
            eventsGallery:[
                {
                    id: "1",
                    imageUrl: "/gallery/gallery-potrait.png",
                },
                {
                    id: "2",
                    imageUrl: "/gallery/gallery-landscape.png",
                },
                {
                    id: "3",
                    imageUrl: "/gallery/gallery3.png",
                },
                {
                    id: "4",
                    imageUrl: "/gallery/gallery4.png",
                },
                {
                    id: "5",
                    imageUrl: "/gallery/gallery5.png",
                },
                {
                    id: "6",
                    imageUrl: "/gallery/gallery6.png",
                },
            ],
            pastEvents: [
                {
                    id: "1",
                    slug: "equilibrium-3-0-annual-economics-festival",
                    date: "12 December, 2025",
                    time: "11:00 AM - 1:00 PM",
                    eventName: "Equilibrium 3.0: Annual Economics Festival, Ashoka University",
                    eventDescription: "We're thrilled to share that the Isaac Centre for Public Policy (ICPP) at Ashoka University joined as the Knowledge Partner",
                    speakers: ["Speaker Name", "Speaker Name", "Speaker Name"]
                    },
                    {
                    id: "2",
                    slug: "urban-policy-forum-2025",
                    date: "5 November, 2025",
                    time: "2:00 PM - 4:00 PM",
                    eventName: "Urban Policy Forum 2025",
                    eventDescription: "A comprehensive discussion on urban development challenges and policy interventions in Indian cities.",
                    speakers: ["Dr. Rajesh Kumar", "Prof. Ananya Das", "Policy Expert"]
                    },
                    {
                    id: "3",
                    slug: "research-symposium-on-development-economics",
                    date: "18 October, 2025",
                    time: "10:00 AM - 12:30 PM",
                    eventName: "Research Symposium on Development Economics",
                    eventDescription: "Exploring recent research findings in development economics and their policy implications.",
                    speakers: ["Dr. Amit Sharma", "Research Scholar", "Economist"]
                    },
                    {
                    id: "4",
                    slug: "public-policy-workshop-series",
                    date: "25 September, 2025",
                    time: "3:00 PM - 5:00 PM",
                    eventName: "Public Policy Workshop Series",
                    eventDescription: "Interactive workshop sessions on effective policy formulation and implementation strategies.",
                    speakers: ["Policy Consultant", "Government Official", "Academic Researcher"]
                    },
                    {
                    id: "5",
                    slug: "health-policy-and-governance-summit",
                    date: "10 August, 2025",
                    time: "11:30 AM - 1:30 PM",
                    eventName: "Health Policy and Governance Summit",
                    eventDescription: "Discussion on healthcare policy reforms and governance mechanisms in the Indian health sector.",
                    speakers: ["Dr. Priya Verma", "Healthcare Administrator", "Policy Analyst"]
                    },
                    {
                    id: "6",
                    slug: "educational-equity-and-access-conference",
                    date: "22 July, 2025",
                    time: "4:00 PM - 6:00 PM",
                    eventName: "Educational Equity and Access Conference",
                    eventDescription: "Examining barriers to educational access and policy solutions for inclusive education.",
                    speakers: ["Education Expert", "NGO Representative", "Academic"]
                    }
            ]
        };
    }
};