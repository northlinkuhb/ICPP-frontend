"use client";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { motion } from "motion/react";

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
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleTabClick = (label: string) => {
    if (onTabChange) onTabChange(label);
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("tab", label);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  // Find active tab index for indicator animation
  const activeIndex = tabs.findIndex(
    (tab) =>
      (tab.link && pathname === tab.link) ||
      (!tab.link && activeTab === tab.label),
  );

  return (
    <div className="flex w-full justify-center items-center relative">
      <div
        className="flex md:flex-row flex-col md:border-b text-black md:border-light-gray w-full bg-transparent relative"
        role="tablist"
      >
        {/* Desktop indicator - Using layoutId for better animation */}
        {activeIndex >= 0 && (
          <motion.div
            layoutId="activeTabIndicator"
            className="hidden md:block absolute bottom-0 h-[3px] bg-deep-blue"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />
        )}

        {/* Mobile indicator */}
        {activeIndex >= 0 && (
          <motion.div
            layoutId="activeTabIndicatorMobile"
            className="md:hidden absolute bottom-0 h-[2px] bg-deep-blue"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />
        )}

        {tabs.map((tab, index) => (
          <React.Fragment key={index}>
            {tab.link ? (
              <motion.div
                className="relative flex-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={tab.link}
                  aria-selected={pathname === tab.link}
                  role="tab"
                  className={`clamp-[text,body2-m,body2-d] cursor-pointer clamp-[leading,body2-m,body2-d] w-full text-center focus:outline-none text-black py-[5px] md:pb-[10px] relative block ${
                    pathname === tab.link
                      ? "max-md:font-semibold text-deep-blue"
                      : "hover:text-deep-blue transition-colors duration-200"
                  }`}
                  scroll={false}
                >
                  {tab.name}
                </Link>

                {/* Desktop active indicator */}
                {pathname === tab.link && (
                  <>
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="hidden md:block absolute bottom-0 left-0 right-0 h-[3px] bg-deep-blue"
                    />
                    <motion.div
                      layoutId="activeTabIndicatorMobile"
                      className="md:hidden absolute bottom-0 left-0 right-0 h-[2px] bg-deep-blue"
                    />
                  </>
                )}
              </motion.div>
            ) : (
              onTabChange && (
                <motion.div
                  className="relative flex-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleTabClick(tab.label || "")}
                    aria-selected={activeTab === tab.label}
                    role="tab"
                    className={`clamp-[text,body2-m,body2-d] cursor-pointer clamp-[leading,body2-m,body2-d] w-full text-center focus:outline-none text-black py-[5px] md:pb-[10px] relative ${
                      activeTab === tab.label
                        ? "max-md:font-semibold text-deep-blue"
                        : "hover:text-deep-blue transition-colors duration-200"
                    }`}
                  >
                    {tab.name}
                  </button>

                  {/* Desktop active indicator */}
                  {activeTab === tab.label && (
                    <>
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="hidden md:block absolute bottom-0 left-0 right-0 h-[3px] bg-deep-blue"
                      />
                      <motion.div
                        layoutId="activeTabIndicatorMobile"
                        className="md:hidden absolute bottom-0 left-0 right-0 h-[2px] bg-deep-blue"
                      />
                    </>
                  )}
                </motion.div>
              )
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Tab;
