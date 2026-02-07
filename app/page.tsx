import React from "react";
import HeroSection from "./_components/HeroSection";
import WhoAndWhatSection from "./_components/WhoAndWhatSection";
import OurWorkSection from "./_components/OurWorkSection";
import GallerySection from "./_components/GallerySection";
import LeaderSection from "./_components/LeaderSection";
import research1 from "../public/research/latest.png";
import research3 from "../public/research/research2.png";
import research2 from "../public/research/research3.png";
import research4 from "../public/research/research4.png";
import PromoSection from "./_components/PromoSection";
import InsightSection from "./_components/InsightSection";
import MainEventSection from "../components/ui/MainEventSection";
import MediaSection from "./_components/MediaSection";
import { mediaData } from "./_data/media";
import { heroSlides } from "./_data/hero";
import { HomeApi } from "@/network/api/home.api";
const page = async () => {
  const insightData = [
    {
      videoId: "DSfBnpr44PQ",
      alt: "insight-1",
      type: "Video",
      title: "Temperature Shocks in Early-Life and Long-run Health Outcomes",
      author: "Aparajita Dasgupta",
      date: "22 November, 2025",
    },
    {
      videoId: "MUhW9G7XQYI",
      alt: "insight-2",
      type: "Article",
      title:
        "Laws Mandating Prevention of Sexual Harassment at Workplace and Female Employment",
      author: "John Smith",
      date: "15 December, 2025",
    },
    {
      videoId: "LZtYdtlMwaI",
      alt: "insight-3",
      type: "Podcast",
      title: "Renewable Energy and Sustainability",
      author: "Emily Johnson",
      date: "10 January, 2026",
    },
  ];

  

  const homepageApiData = await HomeApi.getHomePageData();

  return (
    <>
      <HeroSection slides={heroSlides} />

      {/* Who and What Section */}
      <WhoAndWhatSection />

      {/* Our Work Section */}
      <OurWorkSection policyData={homepageApiData.policies} researchData={homepageApiData.researches} />

      {/* Image Gallery */}
      <GallerySection />

      {/* Leaders of ICPP */}
      <LeaderSection advisoriesData={homepageApiData.advisories} />

      {/* Promo grid */}
      <PromoSection />

      {/* Insights Section */}
      <InsightSection insightData={insightData} />

      {/* ICPP Main Event */}
      <MainEventSection />

      {/* Media Highlights */}
      <MediaSection mediaData={mediaData} />
    </>
  );
};

export default page;
