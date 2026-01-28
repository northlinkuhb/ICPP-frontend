import React from 'react'
import Tab from "@/components/Tab";

const AboutTab = () => {
    const tabs = [
      { name: "Our Story", link: "/about-us/our-story" },
      { name: "Advisory Board", link: "/about-us/our-story/advisory-board" },
      { name: "Our Team", link: "/about-us/our-story/our-team" },
      { name: "Fellows", link: "/about-us/our-story/fellows" },
    ];
  return (
        <Tab tabs={tabs} />
  )
}

export default AboutTab