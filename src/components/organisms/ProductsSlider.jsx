import { useSwiper } from "../../hooks/useSwiper"
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Card1 } from "./Card1"
import imgMultimetro from '../../assets/img-multimetro.webp'


export const ProductsSlider = function({ title }){
    const [prevElement, navigationPrevRef] = useSwiper()
	const [nextElement, navigationNextRef] = useSwiper()


    const cards = [
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} />
    ]


    return (
        <div>
            <h2 className='text-2xl font-quicksand font-light'>{title}</h2>
            <div className='flex mb-5 relative'>
                <button ref={navigationPrevRef} className='cursor-pointer flex items-center justify-center w-16 h-16 absolute z-10 top-36 -left-8 bg-white rounded-full shadow-lg'>
                    <BsChevronLeft className='*ml-2' size={20} color='#000' />
                </button>
                <button ref={navigationNextRef} className='cursor-pointer flex items-center justify-center w-16 h-16 absolute z-10 top-36 -right-8 bg-white rounded-full shadow-lg'>
                    <BsChevronRight className='*ml-2' size={20} color='#000' />
                </button>
                <Swiper
                    style={{userSelect: 'none'}}
                    loop={true}
                    slidesPerView={5}
                    spaceBetween={120}
                    modules={[Navigation]}
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