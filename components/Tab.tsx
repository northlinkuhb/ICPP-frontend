"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type TabProps = {
  tabs: {
    name: string;
    link?: string;
    label?: string;
  }[];
  activeTab?: string;
  onTabChange?: (label: string) => void;
};

function Tab({ tabs, activeTab, onTabChange }: TabProps) {
  const pathname = usePathname();

  return (
    <>
      <div className="flex  w-full justify-center items-center">
        <div
          className="flex md:flex-row flex-col md:border-b text-black md:border-light-gray w-full justify-between   bg-transparent"
          role="tablist"
        >
          {tabs.map((tab, index) => (
            <>
              {tab.link ? (
                <Link
                  key={index}
                  href={tab.link}
                  aria-selected={pathname === tab.link}
                  role="tab"
                  className={`clamp-[text,body2-m,body2-d] mb-[-1px] cursor-pointer clamp-[leading,body2-m,body2-d] w-full text-start md:text-center focus:outline-none text-black py-[5px] md:pb-[10px] ${
                    pathname === tab.link
                      ? " border-b-deep-blue border-b-[2px] max-md:font-semibold md:border-b-[3px] "
                      : "text-black border-b  md:border-b-[3px] hover:border-b-[3px] hover:border-b-deep-blue  border-light-gray md:border-b-transparent "
                  }`}
                >
                  {tab.name}
                </Link>
              ) : (
                <>
                  {onTabChange && (
                    <button
                      onClick={() => onTabChange(tab.label || "")}
                      aria-selected={activeTab === tab.label}
                      role="tab"
                      className={`clamp-[text,body2-m,body2-d] mb-[-1px] cursor-pointer clamp-[leading,body2-m,body2-d] w-full text-start md:text-center focus:outline-none text-black py-[5px] md:pb-[10px] ${
                        activeTab === tab.label
                          ? " border-b-deep-blue border-b-[2px] max-md:font-semibold md:border-b-[3px] "
                          : "text-black border-b  md:border-b-[3px] hover:border-b-[3px] hover:border-b-deep-blue  border-light-gray md:border-b-transparent "
                      }`}
                    >
                      {tab.name}
                    </button>
                  )}
                </>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Tab;
