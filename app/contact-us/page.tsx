import React from "react";
import Hero from "./_components/Hero";
import FormSection from "./_components/FormSection";
import ContactDetails from "./_components/ContactDetails";

const page = () => {
  return (
    <div>
      {" "}
      <Hero />
      <FormSection />
      <ContactDetails />
    </div>
  );
};

export default page;
