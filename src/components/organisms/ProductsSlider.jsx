import { useState } from 'react'

import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import { useSwiper } from "../../hooks/useSwiper"
import { Card1 } from "./Card1"
import imgMultimetro from '../../assets/img-multimetro.webp'


export const ProductsSlider = function({ title }){
    const [prevElement, navigationPrevRef] = useSwiper()
	const [nextElement, navigationNextRef] = useSwiper()

    const [showArrows, setShowArrows] = useState(false)
    const [isBeginnig, setIsBeginnig] = useState(true)
    const [isEnd, setIsEnd] = useState(false)

    const verifyPosition = function(e){
        setIsBeginnig(e.isBeginning)
        setIsEnd(e.isEnd)
    }

    const cards = [
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35.24} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35.24} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
    ]


    return (
        <div>
            <h2 className='text-2xl font-quicksand font-light'>{title}</h2>
            <div className='flex mb-5 relative' onMouseOver={() => setShowArrows(true)} onMouseLeave={() => setShowArrows(false)}>
                <button ref={navigationPrevRef} className={`cursor-pointer flex items-center justify-center w-16 h-16 absolute z-10 top-36 -left-8 bg-white rounded-full shadow-lg ${!showArrows ? 'opacity-0' : 'opacity-100'} ${isBeginnig ? 'hidden' : ''}`}>
                    <BsChevronLeft className='*ml-2' size={20} color='#000' />
                </button>
                <button ref={navigationNextRef} className={`cursor-pointer flex items-center justify-center w-16 h-16 absolute z-10 top-36 -right-8 bg-white rounded-full shadow-lg ${!showArrows ? 'opacity-0' : 'opacity-100'} ${isEnd ? 'hidden' : ''}`}>
                    <BsChevronRight className='*ml-2' size={20} color='#000' />
                </button>
                <Swiper
                    style={{userSelect: 'none'}}
                    slidesPerView={5}
                    spaceBetween={18}
                    onSlideChange={verifyPosition}
                    modules={[Navigation]}
                    slidesPerGroup={5}
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