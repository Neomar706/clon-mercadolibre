import { useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import navidadBanner from '../../assets/navidad-banner.webp'
import yukeryBanner from '../../assets/yukery-banner.webp'
import futbolBanner from '../../assets/futbol-banner.webp'
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import { useSwiper } from '../../hooks/useSwiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


export const BannerSlider = function(){
    const [prevElement, navigationPrevRef] = useSwiper()
    const [nextElement, navigationNextRef] = useSwiper()

    const [showArrows, setShowArrows] = useState(false)

    return (
        <div className='relative flex' onMouseOver={() => setShowArrows(true)} onMouseLeave={() => setShowArrows(false)}>
            <div 
                className={`absolute z-10 top-32 flex items-center content-center w-10 h-16 bg-white cursor-pointer rounded-tr-full rounded-br-full ${showArrows ? 'opacity-100': 'opacity-0'}`} 
                ref={navigationPrevRef}
            >
                <BsChevronLeft className='ml-2' color='#3483fa' fontWeight='bold' />
            </div>
            <Swiper
                style={{userSelect: 'none'}}
                modules={[Navigation, Pagination]}
                loop={true}
                draggable={false}
                slidesPerView={1}
                navigation={{
                    prevEl: prevElement,
                    nextEl: nextElement
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                }}
            >
                <SwiperSlide> <img src={navidadBanner} /> </SwiperSlide>
                <SwiperSlide> <img src={yukeryBanner} /> </SwiperSlide>
                <SwiperSlide> <img src={futbolBanner} /> </SwiperSlide>
            </Swiper>                
            <div 
                className={`absolute z-10 top-32 right-0 flex items-center content-center w-10 h-16 bg-white *ml-auto cursor-pointer rounded-tl-full rounded-bl-full ${showArrows ? 'opacity-100': 'opacity-0'}`}
                ref={navigationNextRef}
            >
                <BsChevronRight className='ml-4' color='#3483fa' fontWeight='bold' />
            </div>
        </div>
    )
}