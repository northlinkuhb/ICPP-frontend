import SectionHeaderDescription from "@/components/ui/SectionHeaderDescription";
import MainHeader from "@/components/ui/SectionMainHeader";
import SectionSubHeader from "@/components/ui/SectionSubHeader";
import React from "react";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  viewAllLink?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  subtitle,
  title,
  description,
  viewAllLink,
}) => {
  return (
    <div>
      <SectionSubHeader subtitle={subtitle}/>
      <hr className=" text-black w-[100%] " />
      <div className="flex justify-between items-end clamp-[pt,16px,40px]">
        <div>
          <MainHeader label={title}/>

          {description && (
            <SectionHeaderDescription description={description} />
          )}
        </div>
        {viewAllLink && (
          <a
            href={viewAllLink}
            className="underline clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d] text-black"
          >
            View All
          </a>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
