"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/svg/logo_white.svg";
import RightArrow from "@/components/svg/RightArrow";
import LinkedIn from "@/components/svg/LinkedIn";
import Twitter from "@/components/svg/Twitter";
import Instagram from "@/components/svg/Instagram";
import Link from "next/link";
import RightAngleArrow from "@/components/svg/RightAngleArrow";
import DownAngleArrow from "@/components/svg/DownAngleArrow";
import Star from "@/components/svg/Star";

type FooterMenuListProps = {
  label: string;
  menuListItems?: { label: string; href: string }[];
};

const FooterMenuList: React.FC<FooterMenuListProps> = ({
  label,
  menuListItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      {/* Mobile accordion */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full flex items-center justify-between text-left text-white clamp-[pb,8px,10px] font-semibold clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d]"
        >
          <span>{label}</span>
          <span className="text-light-gray text-xl leading-none">
            {isOpen ? (
              <RightAngleArrow fill="white" />
            ) : (
              <DownAngleArrow fill="white" />
            )}
          </span>
        </button>
        <hr className="text-white" />
        {isOpen && (
          <ul className="pt-[20px] flex flex-col gap-[20px] text-light-gray clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d]">
            {menuListItems?.map((menuListItem, i) => (
              <Link
                className="text-light-gray group hover:text-white flex items-center gap-1.5 duration-300 ease-in-out transition-all hover:font-medium"
                href={menuListItem.href}
                key={i}
              >
                {menuListItem.label}{" "}
                <svg
                  className="size-3 opacity-0 group-hover:opacity-100 duration-300 ease-in-out transition-all"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            ))}
          </ul>
        )}
      </div>

      {/* Desktop static list */}
      <div className="hidden lg:block">
        <h4 className="text-white clamp-[pb,8px,10px] font-semibold clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d]">
          {label}
        </h4>
        <hr className="text-white" />
        <ul className="pt-[20px] flex flex-col gap-[20px] clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d]">
          {menuListItems?.map((menuListItem, i) => (
            <Link
              className="text-light-gray group hover:text-white flex items-center gap-1.5 duration-300 ease-in-out transition-all hover:font-medium"
              href={menuListItem.href}
              key={i}
            >
              {menuListItem.label}{" "}
              <svg
                className="size-3 opacity-0 group-hover:opacity-100 duration-300 ease-in-out transition-all"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="font-geist">
      {/* <div className="grid grid-cols-2">
        <div className="bg-deep-blue clamp-[h,40px,80px] clamp-[rounded-tr,20px,40px]"></div>
        <div className="bg-deep-blue clamp-[h,40px,80px] clamp-[rounded-tl,20px,40px]"></div>
      </div> */}

      <div className="relative flex md:flex-row flex-col clamp-[px,24px,80px] mt-[-1px] clamp-[pt,40px,120px] clamp-[pb,24px,80px]  bg-deep-blue clamp-[gap,40px,100px]">
        <Star className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 clamp-[size,40px,80px]" />
        <div className="md:w-[35%] flex flex-col justify-between">
          <div className="">
            <Image
              src={logo}
              alt="icpp-logo"
              className="w-auto clamp-[h,46px,70px]"
              priority
            />
            <div className="text-white pt-[16px] clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d] w-full">
              As the policy wing of Ashoka University, ICPP stands at the
              intersection of rigour and relevance, building pathways for
              knowledge to converge, travel, inform, and transform.
            </div>
            <div className="mt-[32px] max-md:hidden md:clamp-[pr,1rem,5rem]">
              <p className="mb-[16px] clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d]">
                Subscribe to our newsletter
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full clamp-[h,44px,56px] clamp-[px,12px,18px] clamp-[py,12px,15px] clamp-[text,14px,16px] outline-0  border-y border-l border-white bg-transparent placeholder:text-white "
                />
                <div className="bg-red hover:bg-deep-red duration-300 ease-in-out transition-all cursor-pointer flex items-center clamp-[px,10px,16px]">
                  <RightArrow fill="white" />
                </div>
              </div>
            </div>
          </div>
          <div className="clamp-[mt,32px,60px] flex max-md:hidden flex-col lg:flex-row  clamp-[gap,12px,20px]">
            <div className="flex gap-[16px]">
              <LinkedIn />
              <Twitter />
              <Instagram />
            </div>
            <Link
              className="text-light-gray hover:text-white hover:underline hover:decoration-white clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d]"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-light-gray hover:text-white hover:underline hover:decoration-white clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d]"
              href="#"
            >
              Terms of Use
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between md:w-[65%]">
          <div className="grid grid-cols-1 lg:grid-cols-4 clamp-[gap,8px,40px] ">
            {/* Our Work */}
            <FooterMenuList
              label="Our Work"
              menuListItems={[
                { label: "Research", href: "/research" },
                { label: "Projects", href: "/research" },
                { label: "Papers", href: "/research" },
                { label: "Policy", href: "/policy" },
                { label: "Discussion Papers", href: "/policy/documents" },
                { label: "Policy Briefs", href: "/policy/documents" },
                { label: "Case Studies", href: "/policy/documents" },
              ]}
            />
            {/* Insights */}
            <FooterMenuList
              label="Insights"
              menuListItems={[
                { label: "Featured", href: "/insights?tab=featured" },
                { label: "Op-Eds", href: "/insights?tab=op-eds" },
                { label: "Bulletin", href: "/insights?tab=bullets" },
                { label: "Blog", href: "/insights?tab=blog" },
                { label: "Newsletter", href: "/insights?tab=newsletter" },
                { label: "Viewpoints", href: "/insights?tab=viewpoints" },
              ]}
            />
            {/* About Us */}
            <FooterMenuList
              label="About Us"
              menuListItems={[
                { label: "Our Story", href: "/about-us/our-story" },
                {
                  label: "Advisory Board",
                  href: "/about-us/our-story/advisory-board",
                },
                { label: "Our Team", href: "/about-us/our-story/our-team" },
                { label: "Fellows", href: "/about-us/our-story/fellows" },
                {
                  label: "Life at ICPP",
                  href: "/about-us/life-at-icpp",
                },
              ]}
            />

            <div className="clamp-[gap,10px,20px] flex flex-col">
              <FooterMenuList
                label="Events"
                menuListItems={[
                  {
                    label: "Events at ICPP",
                    href: "/events-at-icpp/upcoming-event",
                  },
                  {
                    label: "The ICPP Conference",
                    href: "the-icpp-conference",
                  },
                ]}
              />
              <FooterMenuList label="Contact Us" />
            </div>
          </div>
          <div className="mt-[32px] md:hidden md:pr-[3rem]">
            <p className="mb-[16px] clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d]">
              Subscribe to our newsletter
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="w-full clamp-[h,44px,56px] clamp-[px,12px,18px] clamp-[py,12px,15px] clamp-[text,14px,16px] outline-0  border border-white bg-transparent placeholder:text-white "
              />
              <div className="bg-red clamp-[p,10px,16px]">
                <RightArrow fill="white" />
              </div>
            </div>
          </div>
          <div className="clamp-[mt,32px,60px] flex md:hidden flex-col lg:flex-row  clamp-[gap,12px,20px]">
            <div className="flex gap-[16px]">
              <LinkedIn />
              <Twitter />
              <Instagram />
            </div>
            <Link
              className="text-light-gray hover:text-white hover:underline hover:decoration-white clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d]"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-light-gray hover:text-white hover:underline hover:decoration-white clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d]"
              href="#"
            >
              Terms of Use
            </Link>
          </div>
          <div className="md:text-right max-md:pt-[2rem]  text-white clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d]">
            ©2024-25 Isacc Centre for Public Policy
            <br />
            Designed with 🤍 by Sane Difference
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
