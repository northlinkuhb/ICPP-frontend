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
  menuListItems?: string[];
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
            {menuListItems?.map((menuListItem) => (
              <li key={menuListItem}>{menuListItem}</li>
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
        <ul className="pt-[20px] flex flex-col gap-[20px] text-light-gray clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d]">
          {menuListItems?.map((menuListItem) => (
            <li key={menuListItem}>{menuListItem}</li>
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
                  className="w-full clamp-[h,44px,56px] clamp-[px,12px,18px] clamp-[py,12px,15px] clamp-[text,14px,16px] outline-0  border border-white bg-transparent placeholder:text-white "
                />
                <div className="bg-red  clamp-[p,10px,16px]">
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
                "Research",
                "Projects",
                "Papers",
                "Policy",
                "Discussion Papers",
                "Policy Briefs",
                "Case Studies",
              ]}
            />
            {/* Insights */}
            <FooterMenuList
              label="Insights"
              menuListItems={[
                "Featured",
                "Op-Eds",
                "Bulletin",
                "Blog",
                "Newsletter",
                "Viewpoints",
              ]}
            />

            {/* About Us */}
            <FooterMenuList
              label="About Us"
              menuListItems={[
                "Our Story",
                "Advisory Board",
                "Our Team",
                "Fellows",
                "Life at ICPP",
              ]}
            />

            <div className="clamp-[gap,10px,20px] flex flex-col">
              <FooterMenuList
                label="Events"
                menuListItems={["Events at ICPP", "The ICPP Conference"]}
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
