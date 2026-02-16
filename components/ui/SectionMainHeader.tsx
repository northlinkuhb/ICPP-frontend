import React from "react";
import TextStaggerAnimation from "../animations/TextStaggerAnimation";

type MainHeaderProps = {
  label: string;
};

const MainHeader: React.FC<MainHeaderProps> = ({ label }) => {
  return (
    <div>
      <h1 className="clamp-[text,h2-m,h2-d] font-semibold clamp-[leading,h2-m,h2-d] text-deep-blue">
        <TextStaggerAnimation text={label} className="flex flex-wrap" />
      </h1>
    </div>
  );
};

export default MainHeader;
