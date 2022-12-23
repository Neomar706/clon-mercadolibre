import { useState } from 'react'

import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useSwiper } from "../../hooks/useSwiper"
import { Card1 } from "./Card1"
import { ChevronButton } from '../atoms/ChevronButton'
import imgMultimetro from '../../assets/img-multimetro.webp'


export const ProductsSlider = function({ title, itemsPerView, withTitle = true, cards }){
    const [prevElement, navigationPrevRef] = useSwiper()
	const [nextElement, navigationNextRef] = useSwiper()

    const [showArrows, setShowArrows] = useState(false)
    const [isBeginnig, setIsBeginnig] = useState(true)
    const [isEnd, setIsEnd] = useState(false)

    const verifyPosition = function(e){
        setIsBeginnig(e.isBeginning)
        setIsEnd(e.isEnd)
    }


    return (
        <div>
            { withTitle && <h2 className='text-2xl font-quicksand font-light'>{title}</h2> }
            <div className='flex relative' onMouseOver={() => setShowArrows(true)} onMouseLeave={() => setShowArrows(false)}>
                <ChevronButton ref={navigationPrevRef} direction='left' active={isBeginnig} show={showArrows} />
                <ChevronButton ref={navigationNextRef} direction='right' active={isEnd} show={showArrows} />
                <Swiper
                    style={{userSelect: 'none'}}
                    slidesPerView={itemsPerView}
                    spaceBetween={18}
                    onSlideChange={verifyPosition}
                    modules={[Navigation]}
                    slidesPerGroup={5}
                    allowTouchMove={false}
                    navigation={{
                        prevEl: prevElement,
                        nextEl: nextElement,
                    }}
                >
                    { cards.map((elem, i) => <SwiperSlide key={i}>{elem}</SwiperSlide>) }
                </Swiper>
                
            </div>
        </div>
    )
}