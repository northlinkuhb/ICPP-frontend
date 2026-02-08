import { TAboutPageResp } from "../types/about.type";

export const AboutApi = {
    getAboutPageData: async (): Promise<TAboutPageResp> => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return {
            advisories: [
                {
                    id: "1",
                    slug: "sekhar-bonu",
                    name: "Sekhar Bonu",
                    designation: "Member of Advisory Board",
                    imageUrl: "/leaders/leader2.png",
                    desc: "<p><strong>Dr Sekhar Bonu</strong> is a Non-resident Fellow at the NITI Aayog. He currently supports a couple of nonprofits and public policy institutions.</p><p>He earlier served as the <strong>Director General, Development Monitoring and Evaluation Office (DMEO)</strong>, NITI Aayog, from April 2019 to June 2022.</p><p>Before joining NITI Aayog, Dr Bonu worked at the <strong>Asian Development Bank (ADB)</strong>, Manila, Philippines, from 2004 to 2019. At ADB, he worked on health, urban infrastructure development, and regional cooperation, mainly in the South Asia region.</p><p>After completing his MBBS, Dr Bonu joined the <strong>1987 batch of the Indian Administrative Service (IAS)</strong> and served in Rajasthan between 1987 and 2003 in various roles, including District Magistrate, Director of Primary and Secondary Education, and Chief Executive Officer of state-owned enterprises.</p><p>Dr Bonu holds a <strong>PhD from Johns Hopkins University</strong> and is a <strong>Chartered Financial Analyst (CFA)</strong> charter holder. His research interests include state capacity building, service delivery, and outcomes measurement, and he has published in peer-reviewed journals.</p>",
                    linkedIn: "https://www.linkedin.com/in/kanika-mahajan-9b1a3a1b2/",
                    website: "https://icpp.org.in/people/kanika-mahajan/",
                    readMore: "https://icpp.org.in/people/kanika-mahajan/"
                },
                {
                    id: "2",
                    slug: "ajit-isaac",
                    name: "Ajit Isaac",
                    designation: "Member of Advisory Board",
                    imageUrl: "/leaders/leader2.png",
                    desc: "<p><strong>Ajit Isaac</strong>, the founder of Quess Corp, is an entrepreneur who over a period of 20 years has been involved in creating market-leading enterprises in the business services sector in India.</p><p>Under his leadership, Quess has grown into a 5,11,000+ strong organization with approximately US$ 2 billion in revenues and has accelerated the transition of informal jobs to formal platforms, bringing financial and social security to underprivileged sections of Indian society.</p><p>His focus on transformative deals, operational efficiency, and business development helped Quess scale rapidly, culminating in Fairfax investing in Quess in 2013, where it continues as the single largest shareholder.</p><p>Deeply socially committed, he founded the Care Works Foundation, which today supports over 13,500 students across 75 schools, and partnered with the Indian Institute of Science (IISc), Bangalore, to establish The Isaac Centre of Public Health (ICPH).</p><p>Along with Fairfax and Quess, he also anchored the establishment of a pediatric specialty center at CMC Vellore.</p><p>A gold medalist in PG-HR and a British Chevening Scholar from Leeds University, he spent 10 years in leadership roles at organizations including Adecco, IDFC, and Godrej &amp; Boyce before becoming an entrepreneur in 2000.</p><p>He currently serves on the Boards of Allsec Technologies, Net Resources Investments, Isaac Enterprises LLP, and the Board of Governors of St. Joseph’s University, Bangalore.</p>",
                    linkedIn: "https://www.linkedin.com/in/kanika-mahajan-9b1a3a1b2/",
                    website: "https://icpp.org.in/people/kanika-mahajan/",
                    readMore: "https://icpp.org.in/people/kanika-mahajan/"
                },
                {
                    id: "3",
                    slug: "ashish-dhawan",
                    name: "Ashish Dhawan",
                    designation: "Member of Advisory Board",
                    imageUrl: "/leaders/leader2.png",
                    desc: "<p><strong>Ashish Dhawan</strong> is the founder and CEO of the Convergence Foundation (TCF), focused on accelerating India’s economic growth and development.</p><p>He is also the founding Chairperson of the Board of Trustees of Ashoka University and the founder of Central Square Foundation, a nonprofit working to improve the quality of education for all children in India.</p><p>TCF incubates nonprofits creating system-wide impact across economic growth, equality of opportunity, and sustainability, with initiatives spanning jobs and investment, rule of law, governance and state capacity, women’s economic empowerment, science and technology, air pollution, unlocking philanthropic capital, and strengthening nonprofit effectiveness.</p><p>Prior to his second career as a philanthropist, Ashish was among India’s most successful private equity investors and founded ChrysCapital, the country’s leading private equity firm.</p><p>He is a graduate of Yale University, holds an MBA from Harvard Business School, serves on the India Advisory Board of Harvard, and is a member of Yale’s Development Council.</p>",
                    linkedIn: "https://www.linkedin.com/in/kanika-mahajan-9b1a3a1b2/",
                    website: "https://icpp.org.in/people/kanika-mahajan/",
                    readMore: "https://icpp.org.in/people/kanika-mahajan/"
                },
                {
                    id: "4",
                    slug: "k-p-krishnan",
                    name: "K P Krishnan",
                    designation: "Member of Advisory Board",
                    imageUrl: "/leaders/leader2.png",
                    desc: "<p>He was educated in Economics at St. Stephen’s College and Law at the Campus Law Centre, University of Delhi, and obtained his PhD in Economics from IIM Bangalore.</p><p>He joined the Indian Administrative Service (IAS) in 1983 and superannuated from service in 2019.</p><p>Before retiring as Secretary, Ministry of Skill Development and Entrepreneurship, he served in various roles in the Government of Karnataka, Government of India, and the World Bank, primarily in economic affairs, macro policy, and rural and urban development.</p><p>Dr Krishnan has authored several reports and published numerous academic papers and held the BoK Visiting Professorship in Regulation at the University of Pennsylvania Law School in 2012.</p><p>In 2017, he received the Distinguished Alumni Award from IIM Bangalore and served as the IEPF Chair Professor at the National Council of Applied Economic Research (NCAER) from August 2020 to December 2021.</p><p>He has also been a Visiting Professor of Economics, Public Policy, and Regulation at LBSNAA Mussoorie, ISB Hyderabad and Mohali, Ashoka University, and IIM Bangalore.</p><p>Since August 2020, he has been writing a monthly column titled <em>Artikam Chintanam – Thoughts on the Economy</em> in the Business Standard, focusing on the Indian economy and financial sector issues.</p>",
                    linkedIn: "https://www.linkedin.com/in/kanika-mahajan-9b1a3a1b2/",
                    website: "https://icpp.org.in/people/kanika-mahajan/",
                    readMore: "https://icpp.org.in/people/kanika-mahajan/"
                },
                {
                    id: "5",
                    slug: "tarun-bajaj",
                    name: "Tarun Bajaj",
                    designation: "Member of Advisory Board",
                    imageUrl: "/leaders/leader2.png",
                    desc: "<p><strong>Mr. Tarun Bajaj</strong> belongs to the 1988 batch of the Indian Administrative Service and has over 34 years of experience in civil service across the Government of India and the State of Haryana.</p><p>In the Central Government, he has served as Revenue Secretary, Economic Affairs Secretary, and Joint Secretary (Financial Services).</p><p>In the State of Haryana, he has primarily worked in finance, taxation, industry, and infrastructure development and has also served as Managing Director of several state public sector companies.</p><p>Mr. Bajaj holds a Bachelor’s degree in Commerce from Shri Ram College of Commerce, Delhi University, a Post Graduate Diploma in Management (MBA) from IIM Ahmedabad, and a Master of Science degree from the London School of Economics and Political Science.</p><p>He is also a Chartered Financial Analyst (CFA) from the Institute of Chartered Financial Analysts of India, Hyderabad.</p>",
                    linkedIn: "https://www.linkedin.com/in/kanika-mahajan-9b1a3a1b2/",
                    website: "https://icpp.org.in/people/kanika-mahajan/",
                    readMore: "https://icpp.org.in/people/kanika-mahajan/"
                },
                {
                    id: "6",
                    slug: "anup-wadhawan",
                    name: "Anup Wadhawan",
                    designation: "Member of Advisory Board",
                    imageUrl: "/leaders/leader2.png",
                    desc: "<p><strong>Anup</strong> holds a PhD in Economics (1997) from Duke University, with a thesis titled “The Time Path of Macro Variables under Alternative Structural Settings”.</p><p>He earned his Master’s degrees from the Delhi School of Economics (1985) and Duke University (1994), and a Bachelor’s degree from Hindu College, University of Delhi, and has lectured and written extensively on economics, finance, regulation, public service delivery, and public policy issues.</p><p>His professional experience spans public policy, public administration, regulation, public service delivery, and international development institutions.</p><p>He served in the Indian Administrative Service in the Uttar Pradesh and Uttarakhand cadres and completed a three-year tenure at the World Bank.</p><p>In the Government of India, he worked in the Departments of Economic Affairs, Financial Services, and Commerce, as well as the Prime Minister’s Office, handling foreign trade, capital markets, and the banking, insurance, and pensions sectors, and served on the boards of IRDAI, Bank of India, and PFRDA.</p><p>In his final assignment, he served as India’s Commerce Secretary.</p><p>At the state level in Uttar Pradesh and Uttarakhand, his roles ranged from field administration to policy and regulatory assignments across education, planning, hill and rural development, panchayati raj, cooperatives, urban development, forests and environment, land revenue, home, vigilance, and disaster management, including roles as Secretary of the Uttar Pradesh Electricity Regulatory Commission and Member Secretary of the Uttarakhand Pollution Control Board.</p><p>During his time with the World Bank’s Water and Sanitation Program, he worked on strengthening accountability in water supply, sanitation, and solid waste management service delivery and also contributed to an African Development Bank evaluation of public utilities lending in Ghana and Tanzania.</p>",
                    linkedIn: "https://www.linkedin.com/in/kanika-mahajan-9b1a3a1b2/",
                    website: "https://icpp.org.in/people/kanika-mahajan/",
                    readMore: "https://icpp.org.in/people/kanika-mahajan/"
                },
                {
                    id: "7",
                    slug: "sushama-nath",
                    name: "Sushama Nath",
                    designation: "Member of Advisory Board",
                    imageUrl: "/leaders/leader2.png",
                    desc: "<p><strong>Sushama Nath</strong> belonged to the 1974 batch of the Indian Administrative Service (MP Cadre) and served in both the State and Central Governments across finance, agriculture, food, water resources, rural sectors, as well as culture, tourism, personnel, and general administration.</p><p>She served as Secretary of the Indian Council of Agricultural Research, Member Secretary of the Sixth Central Pay Commission, and Secretary of the Department of Expenditure, Ministry of Finance, Government of India, retiring as Finance Secretary to the Government of India.</p><p>She was a Member of the Fourteenth Central Finance Commission and later served as a part-time Member of the Insurance Regulatory and Development Authority of India (IRDAI).</p>",
                    linkedIn: "https://www.linkedin.com/in/kanika-mahajan-9b1a3a1b2/",
                    website: "https://icpp.org.in/people/kanika-mahajan/",
                    readMore: "https://icpp.org.in/people/kanika-mahajan/"
                },
            ],
            fellows: [
                {
                    id: "1",
                    slug: "anup-wadhawan",
                    name: "Anup Wadhawan",
                    designation: "Senior Fellow",
                    imageUrl: "/leaders/leader2.png",
                    desc: "<p><strong>Anup</strong> holds a PhD in Economics (1997) from Duke University, with a thesis titled “The Time Path of Macro Variables under Alternative Structural Settings”, and earned Master’s degrees from the Delhi School of Economics (1985) and Duke University (1994), along with a Bachelor’s degree from Hindu College, University of Delhi.</p><p>He has lectured and written extensively on economics, finance, regulation, public service delivery, and public policy issues.</p><p>His professional experience spans public policy, public administration, regulation, public service delivery, and international development institutions, including service in the Indian Administrative Service in the Uttar Pradesh and Uttarakhand cadres and a three-year tenure at the World Bank.</p><p>In the Government of India, he served in the Departments of Economic Affairs, Financial Services, and Commerce, as well as the Prime Minister’s Office, handling foreign trade, capital markets, and the banking, insurance, and pensions sectors, and served on the boards of IRDAI, Bank of India, and PFRDA.</p><p>In his final assignment, he served as India’s Commerce Secretary.</p><p>At the state level in Uttar Pradesh and Uttarakhand, his roles ranged from field administration to policy and regulatory assignments across education, planning, hill development, rural development, panchayati raj, cooperatives, urban development, forests and environment, land revenue, home, vigilance, and disaster management, including roles as Secretary of the Uttar Pradesh Electricity Regulatory Commission and Member Secretary of the Uttarakhand Pollution Control Board.</p><p>During his time with the World Bank’s Water and Sanitation Program, he worked on improving accountability in water supply, sanitation, and solid waste management service delivery and contributed to an African Development Bank evaluation of public utilities lending in Ghana and Tanzania.</p>",
                    linkedIn: "https://www.linkedin.com/in/kanika-mahajan-9b1a3a1b2/",
                    website: "https://icpp.org.in/people/kanika-mahajan/",
                    readMore: "https://icpp.org.in/people/kanika-mahajan/"
                },
                {
                    id: "2",
                    slug: "eswaran-somanathan",
                    name: "Eswaran Somanathan",
                    designation: "Senior Fellow",
                    imageUrl: "/leaders/leader2.png",
                    desc: "<p><strong>Eswaran Somanathan</strong> is a Professor in the Economics and Planning Unit at the Indian Statistical Institute (ISI), Delhi, and Program Director of CECFEE.</p><p>His research focuses on the economics of environment and development and microeconomic theory, and he is the Editor of the journal <em>Environment and Development Economics</em> published by Cambridge University Press.</p><p>He served as a Coordinating Lead Author for Working Group III of the Fifth Assessment Report of the Intergovernmental Panel on Climate Change and has recently joined as an Expert on the Indian Council of Medical Research (ICMR)-led National Task Force.</p><p>He received his PhD in Economics from Harvard University in 1995 and has taught at Princeton University, the University of Michigan at Ann Arbor, and Emory University.</p>",
                    linkedIn: "https://www.linkedin.com/in/kanika-mahajan-9b1a3a1b2/",
                    website: "https://icpp.org.in/people/kanika-mahajan/",
                    readMore: "https://icpp.org.in/people/kanika-mahajan/"
                },
                {
                    id: "3",
                    slug: "ashish-dhawan",
                    name: "Farzana Afridi",
                    designation: "Senior Fellow",
                    imageUrl: "/leaders/leader2.png",
                    desc: "<p><strong>Farzana</strong> is a Professor of Economics at the Indian Statistical Institute (Delhi), a Visiting Professor at the Munk School of Global Affairs &amp; Public Policy at the University of Toronto, and a Research Fellow at IZA, Bonn.</p><p>Her research lies at the intersection of development and labor economics, focusing on gender and social identity, human capital, and governance.</p><p>Her work contributes to designing effective transfer programs, understanding the role of information in improving health and learning outcomes, and assessing the impact of identity and networks on performance, productivity, and labor market outcomes.</p><p>She currently heads the Digital Platforms and Women’s Economic Empowerment (WEE) program, supported by the Bill and Melinda Gates Foundation, which analyzes and proposes measures to empower women on digital labor platforms.</p><p>Her research has also been supported by institutions including the International Growth Centre (IGC), DFID, CAGE, The Weiss Fund, UNU-WIDER, the Hewlett Foundation, the European Commission, the Planning Commission of India, and the Directorate of Education, India.</p>",
                    linkedIn: "https://www.linkedin.com/in/kanika-mahajan-9b1a3a1b2/",
                    website: "https://icpp.org.in/people/kanika-mahajan/",
                    readMore: "https://icpp.org.in/people/kanika-mahajan/"
                },
                {
                    id: "4",
                    slug: "k-p-krishnan",
                    name: "Sekhar Bonu",
                    designation: "Senior Fellow",
                    imageUrl: "/leaders/leader2.png",
                    desc: "<p><strong>Dr Sekhar Bonu</strong> is a Non-resident Fellow at the NITI Aayog and currently supports a couple of nonprofits and public policy institutions.</p><p>He earlier served as Director General of the Development Monitoring and Evaluation Office (DMEO), NITI Aayog, from April 2019 to June 2022.</p><p>Before joining NITI Aayog, he worked at the Asian Development Bank (ADB), Manila, Philippines, from 2004 to 2019, focusing on health, urban infrastructure development, and regional cooperation in the South Asia region.</p><p>After completing his MBBS, he joined the 1987 batch of the Indian Administrative Service and served in Rajasthan between 1987 and 2003 in roles including District Magistrate, Director of Primary and Secondary Education, and Chief Executive Officer of state-owned enterprises.</p><p>He holds a PhD from Johns Hopkins University and is a Chartered Financial Analyst (CFA) charter holder, with research interests in state capacity building, service delivery, and outcomes measurement, and has published in peer-reviewed journals.</p>",
                    linkedIn: "https://www.linkedin.com/in/kanika-mahajan-9b1a3a1b2/",
                    website: "https://icpp.org.in/people/kanika-mahajan/",
                    readMore: "https://icpp.org.in/people/kanika-mahajan/"
                },
                {
                    id: "5",
                    slug: "",
                    name: "Vijay Singh Chauhan",
                    designation: "Former IRS and Executive Director, Deloitte India",
                    imageUrl: "/leaders/leader2.png",
                    desc: "<p><strong>Vijay Singh Chauhan</strong>, currently Executive Director at Deloitte India, is a fiscal policy and trade facilitation expert with over 30 years of experience in economic policy formulation and implementation.</p><p>An alumnus of St. Stephen’s College and the Delhi School of Economics and a 1992 batch officer of the Indian Revenue Service (Customs and Indirect Taxes), he has held senior roles including Director (Budget), Director (FIPB), Director (FM Office), and Advisor (Expenditure Management Commissioner).</p><p>His areas of interest include fiscal responsibility, cash and debt management, linkages between fiscal and monetary policy, and government debt restructuring.</p><p>He also has deep expertise in customs administration, trade facilitation, supply chain, and logistics, having headed customs administration at major facilities including JNPA, Air Cargo Complex Sahar, ICD Tughlakabad, and serving as the Customs Authority for Advance Rulings, New Delhi.</p><p>He is nearing completion of his PhD in Public Policy at the Jindal School of Government and Public Policy, Sonipat, with a thesis on the measurement of trade facilitation in India, building on his work in the evolution of Time Release Studies since 2017, and has worked on trade facilitation and supply chain issues in Sri Lanka, Bhutan, and Bangladesh.</p><p>He is an International Consultant with the Asian Development Bank, Visiting Professor of Practice at National Law University Meghalaya, Shillong, and a columnist with BasisPoint Insight, and teaches trade facilitation and fiscal policy at leading academic institutions in India.</p><p>He received the Presidential Award for Specially Distinguished Record of Service on the eve of Republic Day, 2014.</p>",
                    linkedIn: "https://www.linkedin.com/in/kanika-mahajan-9b1a3a1b2/",
                    website: "https://icpp.org.in/people/kanika-mahajan/",
                    readMore: "https://icpp.org.in/people/kanika-mahajan/"
                },
            ],
            ourTeams: [
                {
                    id: "1",
                    slug: "anisha-sharma",
                    name: "Anisha Sharma",
                    designation: "Co-lead, Employment and Labour. Associate Professor of Economics, Ashoka University",
                    imageUrl: "/leaders/leader2.png",
                    desc: "<p><strong>Anisha Sharma</strong> is an Associate Professor of Economics at Ashoka University.</p><p>She holds a PhD in Economics, an MSc in Economics for Development, and an MSc in Financial Economics from the University of Oxford, where she was a Rhodes Scholar, and a BA in Economics from St. Stephen’s College, Delhi University.</p><p>Her research focuses on labour economics, the economics of health and education, public policy, and gender gaps, examining how social norms influence human capital investment decisions, firm hiring constraints, and women’s labour supply.</p><p>Her work has been supported by institutions including the Bill and Melinda Gates Foundation, Innovations for Poverty Action, J-PAL, and the Centre for Economic Policy Research.</p><p>Prior to Ashoka University, she taught undergraduate microeconomics and mathematics at Brasenose College, Oxford, and earlier served as an economist at South Africa’s National Treasury as an Overseas Development Institute Fellow, working on macro-prudential stability in the banking and financial sectors following the 2008 financial crisis.</p><p>She is also an invited researcher at J-PAL.</p>",
                    linkedIn: "https://www.linkedin.com/in/anisha-sharma/",
                    website: "https://icpp.org.in/people/anisha-sharma/",
                    readMore: "https://icpp.org.in/people/anisha-sharma/"
                },
                {
                    id: "2",
                    slug: "bharat-ramaswami",
                    name: "Bharat Ramaswami",
                    designation: "Co-lead, Agriculture and Rural Economy. Professor of Economics, Ashoka University",
                    imageUrl: "/leaders/leader2.png",
                    desc: "<p><strong>Bharat Ramaswami</strong> is a Professor of Economics at Ashoka University and has held visiting appointments at universities in Canada, Japan, Sweden, and the United States.</p><p>He earned his degrees from the University of Delhi (BA Honours, MA) and the University of Minnesota (PhD) and was awarded the Mahalanobis Memorial Medal by the Indian Econometric Society in 2004 for his contributions to quantitative economics.</p><p>His recent research includes work on basis risk in rainfall insurance, economic impacts of ozone pollution, global markets for food staples, aggregation bias in index numbers, and the political economy of plant biotechnology, published in leading journals.</p><p>His policy engagements include work with the Ministry of Finance, Ministry of Commerce, the Finance Commission, and the Planning Commission.</p><p>He has also collaborated with international institutions including the Asian Development Bank, the International Food Policy Research Institute, and the World Bank.</p>",
                    linkedIn: "https://www.linkedin.com/in/kanika-mahajan-9b1a3a1b2/",
                    website: "https://icpp.org.in/people/kanika-mahajan/",
                    readMore: "https://ramaswami-s-web-page.web.app/"
                },
                {
                    id: "3",
                    slug: "digvijay-singh-negi",
                    name: "Digvijay Singh Negi",
                    designation: "Co-lead, Agriculture and Rural Economy. Associate Professor, Department of Economics, Ashoka University",
                    imageUrl: "/leaders/leader2.png",
                    desc: "<p><strong>Digvijay</strong> is an Associate Professor in the Department of Economics at Ashoka University.</p><p>His previous research and academic experience includes serving as a researcher at the National Institute for Agricultural Economics and Policy Research from 2010 to 2013, Assistant Professor at the Indira Gandhi Institute of Development Research from 2019 to 2024, and a Fulbright Nehru Postdoctoral Fellow at Cornell University from 2022 to 2023.</p><p>He holds a PhD in Quantitative Economics from the Indian Statistical Institute, New Delhi, and a Master’s degree in Economics from the Delhi School of Economics, University of Delhi.</p><p>His primary research interests include agricultural economics, risk and insurance, and environmental and resource economics.</p><p>For more details,.</p>",
                    linkedIn: "https://www.linkedin.com/in/kanika-mahajan-9b1a3a1b2/",
                    website: "https://icpp.org.in/people/kanika-mahajan/",
                    readMore: "https://sites.google.com/view/digvijaysnegi/home"
                },
                {
                    id: "4",
                    slug: "kanika-mahajan",
                    name: "Kanika Mahajan",
                    designation: "Co-lead, Employment and Labour. Associate Professor of Economics, Ashoka University",
                    imageUrl: "/leaders/leader2.png",
                    desc: "<p><strong>Kanika Mahajan</strong> is an Associate Professor of Economics at Ashoka University.</p><p>Her primary research interests include labor, gender, and agriculture, with a focus on the distributional consequences of economic growth across demographic groups and firms.</p><p>Her current research on gender and labor examines the stagnation of women’s labor force participation in India, analyzing both supply- and demand-side linkages using data from digital platforms as well as household- and firm-level sources, with public policy impacts forming a central theme.</p><p>Her other ongoing work studies the growth and resilience of firms in India and the resulting implications for labor, capital, and trade.</p><p>Previously, she served as an Assistant Professor of Economics at Ambedkar University Delhi from 2015 to 2017, teaching development economics, econometrics, statistics, and microeconomic theory.</p><p>She earned her PhD in Quantitative Economics from the Indian Statistical Institute, Delhi, in 2015, completed her undergraduate studies in Economics at St. Stephen’s College, Delhi University, and holds a Master’s degree in Economics from Jawaharlal Nehru University, Delhi.</p>",
                    linkedIn: "https://www.linkedin.com/in/kanika-mahajan-9b1a3a1b2/",
                    website: "https://icpp.org.in/people/kanika-mahajan/",
                    readMore: "https://icpp.org.in/people/kanika-mahajan/"
                },
                {
                    id: "5",
                    slug: "prachi-mishra",
                    name: "Prachi Mishra",
                    designation: "Head and Director. Co-lead Financial Sector Regulations. Lead Public Finance. Professor of Economics, Ashoka University",
                    imageUrl: "/leaders/leader2.png",
                    desc: "<p><strong>Prachi Mishra</strong> is a Professor in the Department of Economics and Director and Head of the Isaac Center for Public Policy at Ashoka University.</p><p>Prior to joining Ashoka, she served as Chief of the Systemic Issues Division and Advisor in the Research Department at the International Monetary Fund (IMF) and worked across several IMF departments in Washington, including the Office of the First Deputy Managing Director.</p><p>Between 2018 and 2020, she was Managing Director, Global Macro Research, and India Chief Economist at Goldman Sachs.</p><p>From 2014 to 2017, she served as Specialist Adviser and Head of the Strategic Research Unit at the Reserve Bank of India, and during 2012–13, she was Senior Economist in the Office of the Chief Economic Advisor, Ministry of Finance, and at the Prime Minister’s Economic Advisory Council.</p><p>She has served on the Board of CAFRAL, the External Advisory Council of the Fifteenth Finance Commission of India, and the Fiscal Responsibility and Budget Management Review Committee.</p><p>She holds a PhD in Economics from Columbia University and a Master’s degree from the Delhi School of Economics.</p><p>Her research interests include international economics, macroeconomics, and the Indian macroeconomy and financial markets.</p>",
                    linkedIn: "https://www.linkedin.com/in/kanika-mahajan-9b1a3a1b2/",
                    website: "https://icpp.org.in/people/kanika-mahajan/",
                    readMore: "https://icpp.org.in/people/kanika-mahajan/"
                },
                {
                    id: "6",
                    slug: "vikas-dimble",
                    name: "Vikas Dimble",
                    designation: "Director, Operations. Co-lead Financial Sector Regulations",
                    imageUrl: "/leaders/leader2.png",
                    desc: "<p><strong>Vikas Dimble</strong> is the Director and Head of the Isaac Centre for Public Policy (ICPP) at Ashoka University, working closely with the Academic Director, Advisory Board, and University leadership.</p><p>Prior to joining Ashoka University, he served as Associate Director and India Lead for the DataDelta team at IDinsight and was also Deputy Director of the Ashoka Centre for Economic Policy (ACEP) at Ashoka University.</p><p>At ACEP, he worked with Arvind Subramanian to conceptualize, establish, and run the centre, focusing on empirical macro-development questions relevant to developing countries.</p><p>Before ACEP, he was Assistant Director of Research and Strategy at the Tata Centre for Development (TCD) at the University of Chicago.</p><p>He has also worked as an India Country Economist for the International Growth Centre (IGC) at the London School of Economics, as a consultant to the World Bank, and as a Research Associate at J-PAL.</p><p>In addition, he serves as the content editor for <em>Ideas for India</em>, a public policy portal.</p>",
                    linkedIn: "https://www.linkedin.com/in/kanika-mahajan-9b1a3a1b2/",
                    website: "https://icpp.org.in/people/kanika-mahajan/",
                    readMore: "https://icpp.org.in/people/kanika-mahajan/"
                },
            ], 
            commonGallery:[
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
                {
                    id: "7",
                    imageUrl: "/gallery/gallery-potrait.png",
                },
                {
                    id: "8",
                    imageUrl: "/gallery/gallery-landscape.png",
                },
                {
                    id: "9",
                    imageUrl: "/gallery/gallery3.png",
                },
                {
                    id: "10",
                    imageUrl: "/gallery/gallery4.png",
                },
                {
                    id: "11",
                    imageUrl: "/gallery/gallery5.png",
                },
                {
                    id: "12",
                    imageUrl: "/gallery/gallery6.png",
                },
            ],
            testimonials: [
                {
                    id: "1",
                    feedback:
                    "Lorem ipsum dolor sit amet consectetur. Enim nisi lorem nunc tortor. Feugiat ac non facilisis quisque eleifend metus dui amet accumsan. Et orci ultrices condimentum duis urna magna. Id quis adipiscing nisl nisl risus enim pellentesque. Habitasse arcu facilisis a feugiat et ultrices. Nibh pellentesque sed tortor arcu penatibus dolor habitant. Quam non ultricies auctor ultricies arcu mi odio. Praesent ",
                    name: "Priya Sharma",
                    designation: "Senior Policy Researcher",
                },
                {
                    id: "2",
                    feedback:
                    "The interdisciplinary team here brings diverse perspectives to complex policy challenges. It's truly a place where ideas matter.",
                    name: "Amit Kumar",
                    designation: "Data Scientist",
                },
                {
                    id: "3",
                    feedback:
                    "ICPP's mission to bridge research and policy resonates deeply with my values. Every project contributes to meaningful change.",
                    name: "Neha Patel",
                    designation: "Research Associate",
                },
                {
                    id: "4",
                    feedback:
                    "The learning opportunities and mentorship at ICPP are unparalleled. I've grown both professionally and personally.",
                    name: "Vikram Singh",
                    designation: "Policy Analyst",
                },
                {
                    id: "5",
                    feedback:
                    "Being part of a team dedicated to India's economic development gives our work real purpose and direction.",
                    name: "Anjali Desai",
                    designation: "Communications Manager",
                },
            ],
        }
    }
}