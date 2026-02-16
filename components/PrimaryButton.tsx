import React from "react";
import Link from "next/link";

interface PrimaryButtonProps {
  text: string;
  link?: string;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  link,
  onClick,
}) => {
  const buttonClassName = `px-[24px] py-[16px] hover:bg-deep-red duration-300 ease-in-out transition-all text-white bg-red cursor-pointer clamp-[mt,12px,32px] clamp-[text,button-m,button-d] clamp-[leading,button-m,button-d] font-semibold`;

  if (link) {
    return (
      <Link href={link}>
        <button className={buttonClassName}>{text}</button>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClassName}>
      {text}
    </button>
  );
};

export default PrimaryButton;
