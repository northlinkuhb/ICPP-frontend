"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import LinkedIn from "../svg/LinkedIn";
import LinkArrow from "../svg/LinkArrow";
import { TAdvisoryCard } from "@/network/types/home.type";
import { Dialog, DialogTitle } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { ButtonAnimation } from "../animations/ButtonAnimation";
import CardAnimation from "../animations/CardAnimation";

type AuthorCardProps = {
  leadersData?: TAdvisoryCard[];
  onLeaderClick?: (leader: TAdvisoryCard) => void;
};

const AuthorCard = ({ leadersData = [], onLeaderClick }: AuthorCardProps) => {
  const [selectedLeader, setSelectedLeader] = useState<TAdvisoryCard | null>(
    null,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openSlide = (leader: TAdvisoryCard) => {
    setSelectedLeader(leader);
    setIsOpen(true);
    onLeaderClick?.(leader);
  };

  const closeSlide = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="clamp-[pt,24px,40px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 clamp-[gap,14px,20px]">
        {leadersData.map((leader, index) => (
          <CardAnimation key={leader.id} index={index} delay={0.1}>
            <button
              key={index}
              onClick={() => openSlide(leader)}
              className="flex flex-row gap-[20px] cursor-pointer hover:opacity-80 transition-opacity text-left"
            >
              <Image
                src={leader.imageUrl || ""}
                alt={leader.name}
                className="clamp-[size,90px,159.33px] clamp-[rounded-br,10px,20px]"
                width={159}
                height={159}
              />
              <div>
                <div className="text-deep-blue clamp-[text,h4-m,h4-d] clamp-[leading,h4-m,h4-d] font-semibold">
                  {leader.name}
                </div>
                <div className="text-black clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d]">
                  {leader.designation}
                </div>
              </div>
            </button>
          </CardAnimation>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <Dialog
            open={isOpen}
            onClose={closeSlide}
            className="fixed inset-0 z-[9998]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={closeSlide}
              className="bg-black/30 fixed inset-0 w-full"
            />

            <motion.div
              initial={{
                x: isMobile ? "-100%" : "100%",
                opacity: 0,
              }}
              animate={{
                x: "0",
                opacity: 1,
              }}
              exit={{
                x: isMobile ? "-100%" : "100%",
                opacity: 0,
                transition: { duration: 1, ease: [0.55, 0.64, 0.84, 1] },
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`absolute ${isMobile ? "left-0" : "right-0"} top-0 h-full`}
            >
              <div className="h-full flex items-center justify-center">
                <div
                  onClick={closeSlide}
                  className="max-lg:hidden h-full lg:w-1/2"
                />
                <div
                  className={`h-full ${isMobile ? "w-full" : "w-full lg:w-1/2"} bg-white ${isMobile ? "rounded-bl-[20px] rounded-tl-[20px]" : "clamp-[rounded-bl,20px,40px] clamp-[rounded-tl,20px,40px]"} shadow-lg flex flex-col`}
                >
                  <ButtonAnimation
                    onClick={closeSlide}
                    className="absolute top-6 right-6 cursor-pointer text-black hover:text-gray-900 text-2xl transition-colors duration-200 z-[999]"
                    aria-label="Close slide"
                  >
                    ✕
                  </ButtonAnimation>

                  <div className="h-full flex flex-col overflow-y-auto">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                      className="flex items-end clamp-[gap,10px,20px] clamp-[pb,16px,24px]"
                    >
                      <Image
                        src={selectedLeader?.imageUrl || ""}
                        alt={selectedLeader?.name || "leader"}
                        className="clamp-[size,160px,280px] object-contain clamp-[rounded-bl,20px,40px] clamp-[rounded-tl,20px,40px]"
                        width={280}
                        height={280}
                      />
                      <div className="flex-1 min-w-0">
                        <DialogTitle className="text-deep-blue clamp-[text,h3-m,h3-d] clamp-[leading,h3-m,h3-d] font-semibold truncate">
                          {selectedLeader?.name}
                        </DialogTitle>
                        <p className="text-black clamp-[pt,8px,12px] clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d] truncate">
                          {selectedLeader?.designation}
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                      className="clamp-[pt,10px,20px] flex-1"
                    >
                      <div
                        className="text-black clamp-[px,24px,40px] clamp-[py,16px,20px] clamp-[pt,16px,24px] clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d]"
                        dangerouslySetInnerHTML={{
                          __html: selectedLeader?.desc || "",
                        }}
                      />
                      <hr className="text-light-gray clamp-[mx,24px,40px]" />
                      <div className="flex flex-wrap clamp-[px,24px,40px] clamp-[pt,10px,20px] clamp-[gap,10px,20px] text-black">
                        <LinkedIn fill="gray" />
                        <div className="flex items-center">
                          <div className="mr-[10px] border-b hover:text-electric-blue cursor-pointer">
                            Website
                          </div>
                          <LinkArrow />
                        </div>
                        <div className="flex items-center">
                          <div className="mr-[10px] border-b hover:text-electric-blue cursor-pointer">
                            Read their work
                          </div>
                          <LinkArrow />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default AuthorCard;
