import React from "react";
import RightArrow from "@/components/svg/RightArrow";
import Link from "next/link";
type Props = {
  datas?: { title: string; description: string; link: string }[];
  title: string;
  description: string;
};
const HeroStyle = ({ datas, description, title }: Props) => {
  return (
    <div className="flex lg:flex-row flex-col text-black md:text-white relative clamp-[gap,1.25rem,8rem] lg:clamp-[gap,-1.25rem,8rem] w-full z-10">
      <div className={`" ${datas ? "lg:w-[45%] " : "w-full"} flex items-end `}>
        <div className="h-fit">
          <h1 className=" clamp-[text,h1-m,h1-d] font-semibold clamp-[leading,h1-m,h1-d]">
            {title}
          </h1>
          <p className="clamp-[mt,12px,20px] clamp-[text,body1-m,body1-d] clamp-[leading,body1-m,body1-d] max-w-[40ch] ">
            {description}
          </p>
        </div>
      </div>
      {datas && (
        <div className="lg:w-[55%]  flex flex-col gap-[20px]">
          {datas.map((item, i) => (
            <Link
              href={item.link}
              key={i}
              className="clamp-[pb,10px,20px] relative border-b group  md:border-white/50 "
            >
              <div className=" flex items-center gap-[20px] ">
                <h4 className="clamp-[text,h4-m,h4-d] font-semibold clamp-[leading,h4-m,h4-d] ">
                  {item.title}
                </h4>
                <RightArrow
                  fill="white"
                  className="group-hover:-rotate-45 transition-all ease-in-out duration-300"
                />
              </div>
              <p className="clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d] ">
                {item.description}
              </p>
              <div className="absolute left-0 bottom-0 h-[2px] w-full overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-full bg-white scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </div>{" "}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroStyle;
