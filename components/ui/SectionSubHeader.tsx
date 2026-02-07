import React from 'react'

type SectionSubHeaderProps = {
  subtitle: string;
};

const SectionSubHeader = ({ subtitle }: SectionSubHeaderProps) => {
  return (
    <div className=" text-black clamp-[pb,4px,10px] font-geist-mono clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d]">
    {subtitle.toUpperCase()}
    </div>
  )
}

export default SectionSubHeader
