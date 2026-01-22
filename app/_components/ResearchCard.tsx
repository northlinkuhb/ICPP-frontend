import Image from 'next/image'
import React from 'react'
import research1 from '../../public/research/latest.png'

const ResearchCard = () => {
  return (
    <div >
        <Image
            src={research1}
            alt='research-1'
            className='w-full h-auto '
            priority
        />
        <div className='clamp-[pt,12px,20px] font-semibold clamp-[text,h4-m,h4-d] clamp-[leading,h4-m,h4-d] text-black'>Temperature Shocks in Early-Life and Long-run Health Outcomes</div>
        <div className='clamp-[pt,4px,10px] clamp-[text,body3-m,body3-d] clamp-[leading,body3-m,body3-d] text-black'>Published by <span className='underline'>Aparajita Dasgupta</span></div>
        <div className='clamp-[pt,4px,10px] text-gray clamp-[text,caption1-m,caption1-d] clamp-[leading,caption1-m,caption1-d]'>22 November, 2025</div>
    </div>
  )
}

export default ResearchCard
