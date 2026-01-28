import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import RightArrow from "@/components/svg/RightArrow";

interface PursuitCardProps {
  image: StaticImageData;
  alt: string;
  header: string;
  desc: string;
  buttonLabel: string;
  buttonHref: string;
}

const PursuitCard = ({ image, alt, header, desc, buttonLabel, buttonHref }: PursuitCardProps) => {
  return (
    <div className="mt-[40px] lg:mt-[0px] flex flex-col lg:flex-row items-center clamp-[px,0px,20px] clamp-[py,20px,40px] gap-[40px] border-b border-light-gray">
      <div className="mx-[20px] flex-shrink-0">
        <Image src={image} alt={alt} className="size-[149px]" />
      </div>
      <div>
        <div className="clamp-[text,h4-m,h4-d] clamp-[leading,h4-m,h4-d] font-semibold text-deep-blue">
          {header}
        </div>
        <div className="clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d] text-black clamp-[pt,10px,20px] clamp-[pb,20px,40px]">
          {desc}
        </div>
        <hr className="text-light-gray" />
        <Link
          href={buttonHref}
          className="clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d] text-black flex justify-between clamp-[pt,5px,10px] items-center"
        >
          <span>{buttonLabel}</span>
          <RightArrow fill="black" />
        </Link>
      </div>
    </div>
  );
};

export default PursuitCard;
