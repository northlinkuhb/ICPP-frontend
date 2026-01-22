import React from 'react';
import Image from 'next/image';

interface ResearchCardProps {
  src: any;
  alt: string;
  title: string;
  author: string;
  date: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ src, alt, title, author, date }) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        className='w-full h-auto'
        priority
      />
      <div className=''>{title}</div>
      <div>Published by <span>{author}</span></div>
      <div>{date}</div>
    </div>
  );
};

export default ResearchCard;