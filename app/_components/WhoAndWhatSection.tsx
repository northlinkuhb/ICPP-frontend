import React from "react";
import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";
import whoweare from "../../public/png/whoweare.png";
import whoweareImage from "../../public/png/whoweare_image.png";
import whatwedo from "../../public/png/whatwedo.png";
import whatwedoImage from "../../public/png/whatwedo_image.png";
import Star from "@/components/svg/Star";

const WhoAndWhatSection = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2">
    <div className="flex flex-col">
      <div className="bg-deep-blue clamp-[px,24px,80px] clamp-[py,48px,80px] text-white clamp-[rounded-tl,20px,40px] clamp-[rounded-br,20px,40px]">
        <div className="text-white font-geist-mono clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d]">
          WHO WE ARE
        </div>
        <hr className="clamp-[mt,4px,10px]" />
        <Image
          src={whoweare}
          alt="Who We Are"
          className="clamp-[h,22px,52px] clamp-[mt,16px,32px] w-auto"
          priority
        />
        <div className="clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d] clamp-[mt,16px,20px] font-semibold">
          A unified centre of inquiry
        </div>
        <div className="clamp-[mt,16px,20px]  clamp-[mb,24px,200px] clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d]">
          The Isaac Centre for Public Policy (ICPP) at Ashoka University aspires
          to be India's leading public policy hub. Established in 2024, it
          builds on Ashoka University's academic excellence and a strong
          endowment. ICPP advances rigorous research and meaningful engagement
          on critical policy challenges. Its work spans public policy education
          and training, policy research, and policy engagement and public
          events.
        </div>
        <div className="">
          <PrimaryButton text="About Us" />
        </div>
      </div>
      <div className="relative">
        <Image
          src={whoweareImage}
          alt="Who We Are"
          className="clamp-[rounded-bl,20px,40px] clamp-[rounded-tr,20px,40px] w-full clamp-[h,186px,486px] object-cover"
          priority
        />
        <Star className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 clamp-[size,40px,80px]" />
      </div>
      
    </div>
    <div className="flex flex-col-reverse lg:flex-col">
      <Image
        src={whatwedoImage}
        alt="What We Do"
        className="clamp-[rounded-bl,20px,40px] w-full clamp-[h,186px,486px] object-cover"
        priority
      />
      <div className="bg-black clamp-[px,24px,80px] text-white clamp-[py,48px,80px] clamp-[rounded-tl,20px,40px] clamp-[rounded-br,20px,40px] flex-1 flex flex-col">
        <div className="flex-1">
          <div className="text-white font-geist-mono clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d]">
            WHAT WE DO
          </div>
          <hr className="clamp-[mt,4px,10px]" />
          <Image
            src={whatwedo}
            alt="What We Do"
            className="clamp-[h,33px,52px] clamp-[mt,16px,32px]"
            priority
          />
          <div className="clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d] clamp-[mt,16px,20px] font-semibold">
            Where disciplines converge
          </div>
          <div className="clamp-[mt,16px,20px] clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d]">
            ICPP works at the nexus of education, research, and policy
            engagement in India's public policy ecosystem. Its academic
            programmes blend rigorous economics training with hands-on policy
            analysis and executive courses. Faculty and practitioners
            collaborate on applied, India-focused research bridging academia and
            government. Through publications, engagement, and platforms like the
            Growth Conference, ICPP turns evidence into action.
          </div>
        </div>
        <div className="">
          <PrimaryButton text="About Us" />
        </div>
      </div>
    </div>
  </div>
);

export default WhoAndWhatSection;
