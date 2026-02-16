import React, { Suspense } from "react";
import Hero from "./_components/Hero";
import SecondSection from "./_components/SecondSection";

const page = () => {
  return (
    <div>
      <Hero />
      <Suspense fallback={null}>
        <SecondSection />
      </Suspense>
    </div>
  );
};

export default page;
