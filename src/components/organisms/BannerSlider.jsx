import { useState, useRef } from 'react'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import navidadBanner from '../../assets/navidad-banner.webp'
import yukeryBanner from '../../assets/yukery-banner.webp'
import futbolBanner from '../../assets/futbol-banner.webp'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useSwiper } from '../../hooks/useSwiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


export const BannerSlider = function(){
    const [prevElement, navigationPrevRef] = useSwiper()
    const [nextElement, navigationNextRef] = useSwiper()

    const [showArrows, setShowArrows] = useState(false)
    const swiperRef = useRef()

    return (
        <div className='relative flex' onMouseOver={() => setShowArrows(true)} onMouseLeave={() => setShowArrows(false)}>
            <div 
                className={`absolute z-10 top-32 flex items-center content-center w-10 h-16 bg-white cursor-pointer rounded-tr-full rounded-br-full ${showArrows ? 'opacity-100': 'opacity-0'}`} 
                ref={navigationPrevRef}
            >
                <FaChevronLeft className='ml-2' color='#3483fa' fontWeight='bold' />
            </div>
            <div 
                className={`absolute z-10 top-32 right-0 flex items-center content-center w-10 h-16 bg-white *ml-auto cursor-pointer rounded-tl-full rounded-bl-full ${showArrows ? 'opacity-100': 'opacity-0'}`}
                ref={navigationNextRef}
            >
                <FaChevronRight className='ml-4' color='#3483fa' fontWeight='bold' />
            </div>
            <Swiper
                ref={swiperRef}
                style={{userSelect: 'none'}}
                modules={[Autoplay, Navigation, Pagination]}
                loop={true}
                slidesPerView={1}
                autoplay={{ 
                    delay: 5000,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: prevElement,
                    nextEl: nextElement
                }}
                allowTouchMove={false}
                pagination={{ clickable: true }}
            >
                <SwiperSlide> <img src={navidadBanner} /> </SwiperSlide>
                <SwiperSlide> <img src={yukeryBanner} /> </SwiperSlide>
                <SwiperSlide> <img src={futbolBanner} /> </SwiperSlide>
            </Swiper>  
        </div>
    )
}