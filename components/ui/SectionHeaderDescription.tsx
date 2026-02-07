import React from 'react'

type MainDescription = {
  description: string;
};

const SectionHeaderDescription = ({ description }: MainDescription) => {

  return (
    <p className="clamp-[pt,10px,16px] clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d] text-black">
        {description}
    </p>
  )
}

export default SectionHeaderDescription
