"use client";
import React from "react";
import RightArrow from "@/components/svg/RightArrow";
import Link from "next/link";
import { motion } from "motion/react";

type Props = {
  datas?: { title: string; description?: string; link?: string }[];
  title: string;
  description: string;
};

const HeroStyle = ({ datas, description, title }: Props) => {
  return (
    <div className="flex lg:flex-row flex-col text-black md:text-white relative clamp-[gap,1.25rem,8rem] lg:clamp-[gap,-1.25rem,8rem] w-full z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`${datas ? "lg:w-[45%]" : "w-full"} flex items-end`}
      >
        <div className="h-fit">
          <h1 className="clamp-[text,h1-m,h1-d] font-semibold clamp-[leading,h1-m,h1-d]">
            {title}
          </h1>
          <p className="clamp-[mt,12px,20px] clamp-[text,body1-m,body1-d] clamp-[leading,body1-m,body1-d] max-w-[40ch]">
            {description}
          </p>
        </div>
      </motion.div>

      {datas && (
        <div className="lg:w-[55%] flex flex-col justify-end gap-[20px]">
          {datas.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              {item.link ? (
                <Link
                  href={item.link}
                  className="clamp-[pb,10px,20px] relative border-b group md:border-white/50"
                >
                  <div className="flex items-center gap-[20px]">
                    <h4 className="clamp-[text,h4-m,h4-d] font-semibold clamp-[leading,h4-m,h4-d]">
                      {item.title}
                    </h4>
                    <div className="group-hover:-rotate-45 transition-all ease-in-out duration-300">
                      <RightArrow />
                    </div>
                  </div>
                  {item.description && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      className="clamp-[text,body2-m,body2-d] pt-[8px] pb-[20px] border-b border-b-white clamp-[leading,body2-m,body2-d]"
                    >
                      {item.description}
                    </motion.p>
                  )}
                  <div className="absolute left-0 bottom-0 h-[2px] w-full overflow-hidden">
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute left-0 top-0 h-full w-full bg-white origin-left"
                    />
                  </div>
                </Link>
              ) : (
                <div className="clamp-[pb,10px,20px] relative border-b md:border-white/50">
                  <h4 className="clamp-[text,h4-m,h4-d] font-semibold clamp-[leading,h4-m,h4-d]">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d]">
                      {item.description}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroStyle;
