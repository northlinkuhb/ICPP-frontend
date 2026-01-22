import React from 'react'
import Image from 'next/image'
import promo1 from '../../public/promo/a.png'
import promo2 from '../../public/promo/b.png'
import promo3 from '../../public/promo/c.png'

const PromoSection = () => {
  return (
    <div>
      <div className='bg-electric-blue '>
        <div className='bg-light-blue clamp-[rounded-tl,20px,40px]  clamp-[pt,40px,120px] clamp-[px,24px,190px]'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-[32px] lg:gap-0'>
            <div className='flex flex-col items-center '>
              <Image src={promo1} className='clamp-[h,84px,148px] w-auto' alt='' priority/>
              <div className='clamp-[text,h1-m,h1-d] clamp-[leading,h1-m,h1-d] font-semibold text-black clamp-[mt,16px,24px]'>
                6
              </div>
              <div className='clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d] text-black'>
                Research papers published
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <Image src={promo2} className='clamp-[h,84px,148px] w-auto' alt='' priority/>
              <div className='clamp-[text,h1-m,h1-d] clamp-[leading,h1-m,h1-d] font-semibold text-black clamp-[mt,16px,24px]'>
                40
              </div>
              <div className='clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d] text-black'>
                Opinion pieces
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <Image src={promo3} className='clamp-[h,84px,148px] w-auto' alt='' priority/>
              <div className='clamp-[text,h1-m,h1-d] clamp-[leading,h1-m,h1-d] font-semibold text-black clamp-[mt,16px,24px]'>
                25
              </div>
              <div className='clamp-[text,body2-m,body2-d] clamp-[leading,body2-m,body2-d] text-black'>
                Policy briefs
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-light-blue clamp-[rounded-br,20px,40px] clamp-[pb,40px,120px]'>
      </div>
    </div>
  )
}

export default PromoSection