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
            ourTeams: [
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
        }
    }
}