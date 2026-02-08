import { TKeySession } from "../types/conference.type";

export const ConferenceDetailApi = {
    getConferenceDetailData: async (slug: string) : Promise<TKeySession | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
        const allConference = [
                {
                    id: "1",
                    slug: "panel-discussion-macroeconomics-public-finance",
                    title: "Panel Discussion : Macroeconomics and Public Finance",
                    description: "<p>Shri NK Singh contextualized India’s macro-fiscal policies within a post-COVID paradigm shift.</p><p>Fiscal orthodoxy, once defined by fixed thresholds, now requires dynamic recalibration.</p><p>Singh called for extending scrutiny to state-level finances, warning of a growing misalignment with central policies.</p><p>Dr. Arvind Panagariya added nuance, suggesting that moderate inflation (around 4%) is desirable for a developing economy.</p><p>He addressed India’s long-run development goals, arguing that sustained 7–8% growth could allow India to meet its “Viksit Bharat 2047” vision.</p><p>He highlighted the growing strategic space India occupies amid US-China trade decoupling.</p><p>However, trade gains, he cautioned, hinge on deeper bilateral engagements.</p><p>Shri Ajay Seth provided a multilateral lens, highlighting energy security concerns dominating the Global South’s development agenda.</p><p>He advocated for a rebalanced fiscal policy that promotes capital expenditure while cautioning against financing current consumption from public funds.</p><p>He raised the imperative to raise the tax-to-GDP ratio and called for performance-linked fiscal transfers.</p>",
                    onDate: "2nd May, 2026",
                    fromTime: "10:00 AM",
                    toTime: "12:00 PM",
                    videoId: "3U1KVBccZNs",
                    speakers: [
                        {
                            name: "Dr. Arvind Panagariya",
                            designation: "(Chairperson of Finance Commission)"
                        },
                        {
                            name: " Shri Ajay Seth",
                            designation: "(Finance Secretary & Secretary, Department of Economic Affairs)"
                        },
                        {
                            name: "Prof. Prachi Mishra",
                            designation: "(Head and Director, ICPP)"
                        },
                    ],
                    moderator: {
                        name: "Shri NK Singh",
                        designation: "(Former Member of Rajya Sabha)"
                    },
                },
                {
                    id: "2",
                    slug: "regulations",
                    title: "Regulations",
                    description: "<p>Justice V. Ramasubramaniam delivered a wide-ranging keynote that bridged jurisprudence, economic governance, and constitutional theory.</p><p>Drawing on cases like Kaushal Kishore v. UOI and the cryptocurrency judgment, he reflected on the evolution of delegated legislation.</p><p>Regulation, he argued, is indispensable in a modern economy, but its expansion must be accompanied by accountability.</p><p>He warned against the fusion of legislative, executive, and judicial powers in Statutory Regulatory Authorities (SRAs), cautioning that such concentration erodes the rule of law and curbs economic dynamism.</p><p>His reflections—infused with literary references like the Kamba Ramayana—underscored that governance, like justice, must marry expertise with restraint.</p>",
                    onDate: "2nd May, 2026",
                    fromTime: "2:00 PM",    
                    toTime: "4:00 PM",
                    videoId: "wZkYO6rcTFQ",
                    speakers: [
                        {
                            name: "Justice V. Ramasubramanian",
                            designation: "(Chairman, National Human Rights Commission and Former Judge of the Supreme Court of India)"
                        },  
                    ],
                    moderator: {
                        name: "Dr. K P Krishnan",
                        designation: "(Former Secretary, GOI & Distinguished Fellow, ICPP)"
                    },
                },
                {
                    id: "3",
                    slug: "employment-and-labour",
                    title: "Employment and Labour",
                    description: "<p>The session explored India’s skilling challenges, the rise of gig work, and gender disparities in labour participation.</p><p>Atul Tiwari emphasized industry-aligned curricula, Sanjay Chadha called for balanced gig regulations, and Kanika Mahajan advocated expanding care work and formal services to enable higher female employment.</p>",
                    onDate: "2nd May, 2026",
                    fromTime: "2:00 PM",    
                    toTime: "4:00 PM",
                    videoId: "vDsJQNO-pVU",
                    speakers: [
                        {
                            name: "Atul Tiwari",
                            designation: "(Secretary, Ministry of Skill Development and Entrepreneurship, Government of India)"
                        },
                        {
                            name: "Sanjay Chadha",
                            designation: "(Director of Public Policy for India & South Asia, UBER India)"
                        },  
                        {
                            name: "Dr. Kanika Mahajan",
                            designation: "(Associate Professor of Economics, Ashoka University)"
                        },
                    ],
                    moderator: {
                        name: "Ajay Khanna",
                        designation: "(Co-Founder, PAFI)"
                    },
                },
                {
                    id: "4",
                    slug: "panel-discussion-developed-states-for-developed-india",
                    title: "Panel Discussion : Developed States for Developed India",
                    description: "<p>Shri Jayesh Ranjan presented Telangana’s success as a template for proactive statecraft.</p><p>With high per capita income and leading innovation hubs like T-Hub, Telangana’s two-tier governance and private sector integration were key enablers.</p><p>The replication of “Invest Telangana” by states like Tamil Nadu underscores its policy influence.</p><p>Shrimati Radha Raturi spoke of Uttarakhand’s ecological constraints and demographic pressures.</p><p>With 7 crore tourists and only 1 crore residents, infrastructure strain is real.</p><p>Yet the state leads the SDG Index and is promoting high-value, sustainable tourism.</p><p>Green energy and agro-based industries were her priorities for balancing ecology and growth.</p><p>Shrimati Seema Bansal offered a sobering take on Punjab.</p><p>Once a leader during the Green Revolution, Punjab now ranks 15th in per capita income.</p><p>Stagnation in rice-wheat agriculture and high input costs have trapped the state.</p><p>She urged a pivot to services, agro-processing, and niche manufacturing, warning that historical advantage can become a developmental trap.</p>",
                    onDate: "3rd May, 2026",
                    fromTime: "10:00 AM",    
                    toTime: "12:00 PM",
                    videoId: "i6b4qy159Zo",
                    speakers: [
                        {
                            name: "Shri Jayesh RanjanJayesh",
                            designation: "(Special Chief Secretary, Telangana)",
                        },
                        {
                            name: "Ranjan Seema Bansal",
                            designation: "(Vice-Chairperson, Punjab Development Commission)"
                        },
                        {
                            name: "Radha Raturi",
                            designation: "(Former Chief Secretary, Uttarakhand and Chief Information Commissioner, Uttarakhand)"
                        },
                    ],
                    moderator: {
                        name: "Ashish Dhawan",
                        designation: "(Founder & CEO, The Convergence Foundation & Advisory Board Member, ICPP)"
                    },
                },
                {
                    id: "5",
                    slug: "panel-discussion-agriculture-and-rural-economy",
                    title: "Panel Discussion : Agriculture and Rural Economy",
                    description: "<p>Shri Jayesh Ranjan presented Telangana’s success as a template for proactive statecraft.</p><p>With high per capita income and leading innovation hubs like T-Hub, Telangana’s two-tier governance and private sector integration were key enablers.</p><p>The replication of “Invest Telangana” by states like Tamil Nadu underscores its policy influence.</p><p>Shrimati Radha Raturi spoke of Uttarakhand’s ecological constraints and demographic pressures.</p><p>With 7 crore tourists and only 1 crore residents, infrastructure strain is real.</p><p>Yet the state leads the SDG Index and is promoting high-value, sustainable tourism.</p><p>Green energy and agro-based industries were her priorities for balancing ecology and growth.</p><p>Shrimati Seema Bansal offered a sobering take on Punjab.</p><p>Once a leader during the Green Revolution, Punjab now ranks 15th in per capita income.</p><p>Stagnation in rice-wheat agriculture and high input costs have trapped the state.</p><p>She urged a pivot to services, agro-processing, and niche manufacturing, warning that historical advantage can become a developmental trap.</p>",
                    onDate: "3rd May, 2026",
                    fromTime: "10:00 AM",    
                    toTime: "12:00 PM",
                    videoId: "MVlK5sVhCg4",
                    speakers: [
                        {
                            name: "Dr. Ramesh Chand",
                            designation: "(Member, NITI Aayog)",
                        },
                        {
                            name: " Siraj Hussain ",
                            designation: "(Former Food and Agriculture Secretary, GOI)"
                        },
                        {
                            name: "Dr. Srivalli Krishnan",
                            designation: "(Senior Program Officer - Agricultural Development, Gates Foundation)"
                        },
                    ],
                    moderator: {
                        name: "Dr. Bharat Ramaswami",
                        designation: "(Professor of Economics, Ashoka University)"
                    },
                },
            ];
        return allConference.find(item => item.slug === slug);
    }
}