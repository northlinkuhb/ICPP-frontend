"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import galleryImage from '../../public/gallery/gallery-potrait.png'
import gallery1 from '../../public/gallery/gallery-landscape.png'
import LeftArrow from '@/components/svg/LeftArrow'
import RightArrow from '@/components/svg/RightArrow'

const GallerySection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <div className='bg-black clamp-[py,40px,120px] clamp-[rounded-bl,20px,40px]'>
      <div className='text-white clamp-[pb,4px,10px] clamp-[px,24px,80px] font-geist-mono clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d]'>{
       'Image Gallery'.toUpperCase() }
       </div>
      <hr className='text-white clamp-[mx,24px,80px]'/>
      <div className='flex justify-between items-end text-white clamp-[pt,16px,40px] clamp-[pb,24px,40px] clamp-[px,24px,80px]'>
        <div className='font-semibold clamp-[text,h2-m,h2-d] clamp-[leading,h2-m,h2-d]'>Events at ICPP</div>
        <div className='underline clamp-[text,caption2-m,caption2-d] clamp-[leading,caption2-m,caption2-d]'>View All</div>
      </div>
      <div
        ref={scrollRef}
        className='clamp-[ml,24px,80px] flex clamp-[gap,16px,20px] clamp-[h,297px,550px] overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar'
      >
        <div className='flex-shrink-0 snap-start'>
          <Image
            src={galleryImage}
            alt=''
            className='h-full w-auto'
            priority
          />
        </div>
        <div className='flex-shrink-0 snap-start'>
          <Image
            src={galleryImage}
            alt=''
            className='h-full w-auto'
            priority
          />
        </div>
        <div className='flex-shrink-0 snap-start'>
          <Image
            src={galleryImage}
            alt=''
            className='h-full w-auto'
            priority
          />
        </div>
        <div className='flex-shrink-0 snap-start'>
          <Image
            src={galleryImage}
            alt=''
            className='h-full w-auto'
            priority
          />
        </div>
        <div className='flex-shrink-0 snap-start'>
          <Image
            src={galleryImage}
            alt=''
            className='h-full w-auto'
            priority
          />
        </div>

        {/* <Image
          src={gallery1}
          alt=''
          className='w-full h-fit'
          priority
        />
        <Image
          src={galleryImage}
          alt=''
          className='w-auto h-auto'
          priority
        /> */}
      </div>
      <div className='pt-[20px] flex gap-[8px] clamp-[px,24px,80px]'>
        <button onClick={handleScrollLeft} aria-label='Scroll left'>
          <LeftArrow fill='gray' />
        </button>
        <button onClick={handleScrollRight} aria-label='Scroll right'>
          <RightArrow fill='white' />
        </button>
      </div>
    </div>
  )
}

export default GallerySection