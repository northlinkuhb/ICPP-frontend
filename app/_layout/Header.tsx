"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../public/svg/logo_white.svg";
import logoColor from "../../public/svg/logo_color.svg";
import Search from "@/components/svg/Search";
import DownAngleArrow from "@/components/svg/DownAngleArrow";
import HamMenu from "@/components/svg/HamMenu";
import MenuClose from "@/components/svg/MenuClose";
import LinkedIn from "@/components/svg/LinkedIn";
import Twitter from "@/components/svg/Twitter";
import Instagram from "@/components/svg/Instagram";
import RightAngleArrow from "@/components/svg/RightAngleArrow";
import RightArrow from "@/components/svg/RightArrow";

type SearchListItemProps = {
  label: string;
};

const SearchListItem: React.FC<SearchListItemProps> = ({ label }) => (
  <div className="flex flex-col gap-[20px] ">
    <div className="flex justify-between">
      <div className="clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d] ">
        {label}
      </div>
      <RightArrow fill="black" />
    </div>
    <hr className="text-light-gray" />
  </div>
);

type LargeMenuItem = {
  label: string;
  description: string;
  link: string;
};

type LargeMenuListProps = {
  label: string;
  items: LargeMenuItem[];
};

const LargeMenuList: React.FC<LargeMenuListProps> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center cursor-pointer gap-[4px]"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <DownAngleArrow fill="white" />
        </div>
      </button>
      <div
        className={`absolute right-0 mt-[24px] p-[20px] w-[419px] rounded-[8px] bg-white text-black shadow-lg transition-opacity duration-200 ease-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <ul className="flex flex-col gap-[12px] clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d]">
          {items.map((item) => (
            <li key={item.label}>
              <Link onClick={() => setIsOpen(false)} href={item.link}>
                <div className="cursor-pointer p-[10px] rounded-[4px] hover:bg-gray-100">
                  <div className="mb-[5px]">{item.label}</div>
                  <div className="text-light-gray clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d]">
                    {item.description}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Header = () => {
  const [isScroll, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openMenuItems, setOpenMenuItems] = useState<Record<string, boolean>>({
    ourWork: false,
    insights: false,
    aboutUs: false,
    events: false,
  });

  const toggleMenuItemOpen = (menuItem: string) => {
    setOpenMenuItems((prev) => ({
      ...prev,
      [menuItem]: !prev[menuItem],
    }));
  };

  return (
    <div
      className={`${isScroll ? "bg-black clamp-[py,20px,24px]" : "bg-transparent clamp-[py,32px,40px]"} top fixed top-0 right-0 left-0 z-[500]  clamp-[px,24px,80px] flex justify-between duration-500 transition-all ease-in-out`}
    >
      <Link href={"/"}>
        <Image
          src={logo}
          alt="icpp-logo"
          className={`${isScroll ? "clamp-[w,106px,222px] clamp-[h,32px,60px]" : "clamp-[w,106px,232px] clamp-[h,32px,70px]"} duration-500 transition-all ease-in-out`}
          priority
        />
      </Link>
      <div className="flex clamp-[gap,10px,40px] items-center text-white">
        <div className="lg:flex hidden items-center font-normal clamp-[gap,20px,40px] text-white clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d]">
          <LargeMenuList
            label="Our Work"
            items={[
              {
                label: "Research",
                description:
                  "Rigorous, data-driven policy research informing India’s economic decisions.",
                link: "/research",
              },
              {
                label: "Policy",
                description:
                  "ICPP's accessible policy outputs translating research into practical, evidence-based decisions.",
                link: "/policy",
              },
            ]}
          />
          <Link href={"/insights"}>Insights</Link>
          <LargeMenuList
            label="About Us"
            items={[
              {
                label: "Our Story",
                description:
                  "ICPP operates at the nexus of research, education, and policymaking.",
                link: "/about-us/our-story",
              },
              {
                label: "Life at ICPP",
                description:
                  "Inside the people, places, and moments shaping our work in public policy.",
                link: "/about-us/life-at-icpp",
              },
            ]}
          />
          <LargeMenuList
            label="Events"
            items={[
              {
                label: "Events at ICPP",
                description:
                  "ICPP’s events convene voices and ideas at the intersection of research, policy, and public discourse.",
                link: "/events/upcoming-event",
              },
              {
                label: "The ICPP Conference: A Summit of Ideas",
                description:
                  "Bringing policymakers, academics, and practitioners together to discuss India's growth strategy.",
                link: "/events/past-events",
              },
            ]}
          />
          <Link href={"/contact-us"}>Contact Us</Link>
        </div>

        <button
          type="button"
          onClick={() => setIsSearchOpen(true)}
          className="hidden lg:flex items-center justify-center"
          aria-label="Open search panel"
        >
          <Search />
        </button>
        <div onClick={() => setIsOpen(true)} className="flex lg:hidden">
          <HamMenu />
        </div>
        {isOpen && (
          <div className="fixed top-0 right-0 left-0 w-full h-[100vh] bg-white text-black clamp-[px,24px,80px] clamp-[py,38px,40px] z-50">
            <div className="flex flex-col justify-between h-full">
              <div className="flex justify-between">
                <Image
                  src={logoColor}
                  alt=""
                  className="clamp-[w,106px,232px] clamp-[h,32px,70px]"
                  priority
                />
                <div className="flex gap-[10px]">
                  <div>
                    <Search fill="black" />
                  </div>
                  <div onClick={() => setIsOpen(false)} className="mb-[20px]">
                    <MenuClose />{" "}
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => toggleMenuItemOpen("ourWork")}
                  className="w-full flex justify-between gap-[10px] py-[10px] clamp-[text,button-m,button-d] clamp-[leading,button-m,button-d] font-semibold"
                >
                  <div>Our Work</div>
                  <div
                    className={`transform transition-transform duration-300 ${
                      openMenuItems.ourWork ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <DownAngleArrow fill="black" />
                  </div>
                </button>
                {openMenuItems.ourWork && (
                  <div className="flex flex-col gap-[12px] pl-[16px] py-[10px] border-l-2 border-light-gray">
                    <Link href="/research" onClick={() => setIsOpen(false)}>
                      <div className="cursor-pointer clamp-[text,body2-m,body2-d]">Research</div>
                    </Link>
                    <Link href="/policy" onClick={() => setIsOpen(false)}>
                      <div className="cursor-pointer clamp-[text,body2-m,body2-d]">Policy</div>
                    </Link>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => toggleMenuItemOpen("insights")}
                  className="w-full flex justify-between gap-[10px] py-[10px] clamp-[text,button-m,button-d] clamp-[leading,button-m,button-d] font-semibold"
                >
                  <div>Insights</div>
                  <div
                    className={`transform transition-transform duration-300 ${
                      openMenuItems.insights ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <DownAngleArrow fill="black" />
                  </div>
                </button>
                {openMenuItems.insights && (
                  <div className="flex flex-col gap-[12px] pl-[16px] py-[10px] border-l-2 border-light-gray">
                    <Link href="/insights" onClick={() => setIsOpen(false)}>
                      <div className="cursor-pointer clamp-[text,body2-m,body2-d]">All Insights</div>
                    </Link>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => toggleMenuItemOpen("aboutUs")}
                  className="w-full flex justify-between gap-[10px] py-[10px] clamp-[text,button-m,button-d] clamp-[leading,button-m,button-d] font-semibold"
                >
                  <div>About Us</div>
                  <div
                    className={`transform transition-transform duration-300 ${
                      openMenuItems.aboutUs ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <RightAngleArrow fill="black" />
                  </div>
                </button>
                {openMenuItems.aboutUs && (
                  <div className="flex flex-col gap-[12px] pl-[16px] py-[10px] border-l-2 border-light-gray">
                    <Link href="/about-us/our-story" onClick={() => setIsOpen(false)}>
                      <div className="cursor-pointer clamp-[text,body2-m,body2-d]">Our Story</div>
                    </Link>
                    <Link href="/about-us/life-at-icpp" onClick={() => setIsOpen(false)}>
                      <div className="cursor-pointer clamp-[text,body2-m,body2-d]">Life at ICPP</div>
                    </Link>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => toggleMenuItemOpen("events")}
                  className="w-full flex justify-between gap-[10px] py-[10px] clamp-[text,button-m,button-d] clamp-[leading,button-m,button-d] font-semibold"
                >
                  <div>Events</div>
                  <div
                    className={`transform transition-transform duration-300 ${
                      openMenuItems.events ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <DownAngleArrow fill="black" />
                  </div>
                </button>
                {openMenuItems.events && (
                  <div className="flex flex-col gap-[12px] pl-[16px] py-[10px] border-l-2 border-light-gray">
                    <Link href="/events/upcoming-event" onClick={() => setIsOpen(false)}>
                      <div className="cursor-pointer clamp-[text,body2-m,body2-d]">Upcoming Events</div>
                    </Link>
                    <Link href="/events/past-events" onClick={() => setIsOpen(false)}>
                      <div className="cursor-pointer clamp-[text,body2-m,body2-d]">Past Events</div>
                    </Link>
                  </div>
                )}

                <Link href="/contact-us" onClick={() => setIsOpen(false)}>
                  <div className="flex justify-between gap-[10px] py-[10px] clamp-[text,button-m,button-d] clamp-[leading,button-m,button-d] font-semibold">
                    <div>Contact Us</div>
                  </div>
                </Link>
              </div>

              <div className="flex flex-col gap-[12px]">
                <div className="flex gap-[16px]">
                  <LinkedIn fill="gray" />
                  <Twitter fill="gray" />
                  <Instagram fill="gray" />
                </div>
                <div className="text-gray clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d]">
                  Privacy Policy
                </div>
                <div className="text-gray clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d]">
                  Terms of Use
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop search slide-in panel */}
      <>
        {isSearchOpen && (
          <div
            className="hidden lg:block fixed inset-0 z-30 bg-black/30"
            onClick={() => setIsSearchOpen(false)}
          />
        )}
        <div
          className={`hidden lg:flex fixed top-0 right-0 h-screen w-1/3 clamp-[rounded-bl,20px,40px] bg-white text-black z-40 shadow-lg transform transition-transform duration-300 ease-in-out ${isSearchOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="fixed top-[28px] right-[26px] ">
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              aria-label="Close search panel"
            >
              <MenuClose />
            </button>
          </div>
          <div className="flex flex-col w-full h-full clamp-[pr,24px,80px] clamp-[pl,24px,60px] clamp-[py,32px,52px] gap-[24px]">
            <div className="flex items-center gap-[8px] border-b border-b-light-gray">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 outline-none bg-transparent py-[10px] clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d] text-light-gray"
              />
              <Search fill="black" />
            </div>
            <SearchListItem label="Research" />
            <SearchListItem label="Policy" />
            <SearchListItem label="Contact Us" />
          </div>
        </div>
      </>
    </div>
  );
};
export default Header;
