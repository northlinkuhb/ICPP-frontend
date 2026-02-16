import React from "react";
import HeroSection from "./_components/HeroSection";
import WhoAndWhatSection from "./_components/WhoAndWhatSection";
import OurWorkSection from "./_components/OurWorkSection";
import GalleryHomeSection from "./_components/GallerySection";
import LeaderSection from "./_components/LeaderSection";
import PromoSection from "./_components/PromoSection";
import ViewpointSection from "./_components/ViewpointSection";
import MainEventSection from "../components/ui/MainEventSection";
import MediaSection from "./_components/MediaSection";
import { HomeApi } from "@/network/api/home.api";
const page = async () => {
  const homepageApiData = await HomeApi.getHomePageData();

  return (
    <>
      <HeroSection slides={homepageApiData.banners} />

      <WhoAndWhatSection />

      {/* Our Work Section */}
      <OurWorkSection
        policyData={homepageApiData.policies}
        researchData={homepageApiData.researches}
      />

      {/* Image Gallery */}
      <GalleryHomeSection dataGallery={homepageApiData.eventsGallery} />

      {/* Leaders of ICPP */}
      <LeaderSection advisoriesData={homepageApiData.advisories} />

      {/* Promo grid */}
      <PromoSection />

      {/* Insights Section */}
      <ViewpointSection viewpointData={homepageApiData.viewpoints} />

      <MainEventSection />

      <MediaSection mediaData={homepageApiData.medias} />
    </>
  );
};

export default page;
