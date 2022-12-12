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


export const Slider = function(){
    const [prevElement, navigationPrevRef] = useSwiper()
    const [nextElement, navigationNextRef] = useSwiper()


    return (
        <div className='relative flex'>
            <div 
                className="absolute opacity-70 hover:opacity-100 z-10 top-32 flex items-center content-center w-10 h-16 bg-white cursor-pointer rounded-tr-full rounded-br-full" 
                ref={navigationPrevRef}
            >
                <BsChevronLeft className='ml-2' color='#000' />
            </div>
            <Swiper
                style={{userSelect: 'none'}}
                modules={[Navigation, Pagination]}
                loop={true}
                slidesPerView={1}
                navigation={{
                    prevEl: prevElement,
                    nextEl: nextElement
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide> <img src={navidadBanner} /> </SwiperSlide>
                <SwiperSlide> <img src={yukeryBanner} /> </SwiperSlide>
                <SwiperSlide> <img src={futbolBanner} /> </SwiperSlide>
            </Swiper>                
            <div 
                className="absolute opacity-70 hover:opacity-100 z-10 top-32 right-0 flex items-center content-center w-10 h-16 bg-white *ml-auto cursor-pointer rounded-tl-full rounded-bl-full" 
                ref={navigationNextRef}
            >
                <BsChevronRight className='ml-4' color='#000' />
            </div>
        </div>
    )
}