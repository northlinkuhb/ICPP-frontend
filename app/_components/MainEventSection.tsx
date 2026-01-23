import React from "react";
import Image from "next/image";
import icppEvent from "../../public/icpp-event.png";
import PrimaryButton from "@/components/PrimaryButton";
import Vector from "../../public/svg/Vector.svg";
const MainEventSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="2xl:col-span-4 relative col-span-6 clamp-[px,24px,80px] clamp-[py,48px,80px] bg-black text-white clamp-[rounded-br,20px,40px]">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="font-geist-mono clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d] clamp-[mb,4px,10px]">
              {"Events".toUpperCase()}
            </div>
            <hr />
            <div className="clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d] font-semibold clamp-[mt,8px,20px]">
              The ICPP Conference: A Summit of Ideas
            </div>
            <div className="clamp-[mt,8px,20px] clamp-[pb,30px,200px] clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d]">
              The ICPP Annual Growth Conference brings together senior
              policymakers, leading academics, private sector experts, and civil
              society leaders for a dialogue on India's growth strategy.
            </div>
          </div>
          <div>
            <PrimaryButton text="Read More" />
          </div>
        </div>
        <Image
          src={Vector}
          alt=""
          className="absolute max-md:hidden clamp-[size,150px,300px] bottom-0 right-0"
        />
      </div>
      <div className="2xl:col-span-8 col-span-6 relative w-full clamp-[h,256px,792px] lg:h-auto">
        <Image
          className="object-cover clamp-[rounded-tr,20px,40px] clamp-[rounded-bl,20px,40px]"
          fill
          src={icppEvent}
          alt=""
          priority
        />
      </div>
    </div>
  );
};

export default MainEventSection;
