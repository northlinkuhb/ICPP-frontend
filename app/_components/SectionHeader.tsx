import React from 'react'

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  viewAllLink?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ subtitle, title, description, viewAllLink }) => {
  return (
    
      <div>
          <div className=' text-black clamp-[pb,4px,10px] font-geist-mono clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d]'>
            {subtitle.toUpperCase()}
          </div>
          <hr className=' text-black w-[100%]'/>
          <div className='flex justify-between items-end'>
            <div>
              <h1 className='clamp-[pt,16px,40px] text-deep-blue clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d] font-semibold'>
                {title}
              </h1>
              {description && (
              <p className='clamp-[pt,10px,16px] clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d] text-black'>
                {description}
              </p>
               )}
            </div>
            {viewAllLink && (
              <a href={viewAllLink} className='underline clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d] text-black'>
                View All
              </a>
            )}
        </div>
      </div>
  )
}

export default SectionHeader