import React from "react";
import HeroSection from "./_components/HeroSection";
import WhoAndWhatSection from "./_components/WhoAndWhatSection";
import OurWorkSection from "./_components/OurWorkSection";
import GallerySection from "./_components/GallerySection";
import LeaderSection from "./_components/LeaderSection";
import research1 from "../public/research/latest.png";
import PromoSection from "./_components/PromoSection";
import InsightSection from "./_components/InsightSection";
import MainEventSection from "./_components/MainEventSection";
import video1 from "../public/video.png";
import MediaSection from "./_components/MediaSection";
import { mediaData } from "./_data/media";
import { heroSlides } from "./_data/hero";
const page = () => {
  const insightData = [
    {
      src: video1,
      alt: "insight-1",
      type: "Video",
      title: "Temperature Shocks in Early-Life and Long-run Health Outcomes",
      author: "Aparajita Dasgupta",
      date: "22 November, 2025",
    },
    {
      src: video1,
      alt: "insight-2",
      type: "Article",
      title:
        "Laws Mandating Prevention of Sexual Harassment at Workplace and Female Employment",
      author: "John Smith",
      date: "15 December, 2025",
    },
    {
      src: video1,
      alt: "insight-3",
      type: "Podcast",
      title: "Renewable Energy and Sustainability",
      author: "Emily Johnson",
      date: "10 January, 2026",
    },
  ];

  const researchData = [
    {
      src: research1,
      alt: "research-1",
      title: "Temperature Shocks in Early-Life and Long-run Health Outcomes",
      author: "Aparajita Dasgupta",
      date: "22 November, 2025",
    },
    {
      src: research1,
      alt: "research-2",
      title: "Climate Change Impacts on Agricultural Productivity",
      author: "John Smith",
      date: "15 December, 2025",
    },
    {
      src: research1,
      alt: "research-3",
      title: "Economic Effects of Renewable Energy Adoption",
      author: "Emily Johnson",
      date: "10 January, 2026",
    },
    {
      src: research1,
      alt: "research-4",
      title: "Urban Heat Islands and Public Health",
      author: "Michael Brown",
      date: "5 February, 2026",
    },
    {
      src: research1,
      alt: "research-5",
      title: "Biodiversity Loss Due to Deforestation",
      author: "Sarah Davis",
      date: "20 March, 2026",
    },
    {
      src: research1,
      alt: "research-6",
      title: "Water Scarcity in Developing Regions",
      author: "David Wilson",
      date: "14 April, 2026",
    },
  ];

  return (
    <>
      <HeroSection slides={heroSlides} />

      {/* Who and What Section */}
      <WhoAndWhatSection />

      {/* Our Work Section */}
      <OurWorkSection researchData={researchData} />

      {/* Image Gallery */}
      <GallerySection />

      {/* Leaders of ICPP */}
      <LeaderSection />

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
