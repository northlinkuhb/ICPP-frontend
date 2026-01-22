import React from 'react';

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-[24px] py-[16px] bg-red clamp-[mt,12px,32px] clamp-[text,button-m,button-d] clamp-[leading,button-m,button-d] font-semibold ${className}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
