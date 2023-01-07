import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsHeartFill, BsHeart } from 'react-icons/bs'

import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useSwiper } from '../../hooks/useSwiper'

import { CardTitle } from "../atoms/CardTitle"
import { Price } from "../atoms/Price"
import { Shipment } from "../atoms/Shipment"
import { ChevronButton2 } from '../atoms/ChevronButton2'

export const Card3 = function({ price, images, linkTo, title, isFavorite, onFavorite }){
    const [favorite, setFavorite] = useState(isFavorite)

    const [prevEl, navPrevRef] = useSwiper()
    const [nextEl, navNextRef] = useSwiper()

    const [showArrows, setShowArrows] = useState(false)
    const [isBeginnig, setIsBeginnig] = useState(true)
    const [isEnd, setIsEnd] = useState(false)

    const verifyPosition = function(e){
        setIsBeginnig(e.isBeginning)
        setIsEnd(e.isEnd)
    }

    const handleClick = function(){
        onFavorite(!favorite)
        setFavorite(!favorite)
    }

    return (
        <div className='relative group'>
            <button onClick={() => handleClick()} className='absolute right-4 top-4 hidden group-hover:block z-10'>
                <div>
                    {
                        favorite
                        ? <BsHeartFill className='text-blue-500' size={22} />
                        : <BsHeart className='text-blue-500' size={22} />
                    }
                </div>
            </button>
            <Link to={decodeURIComponent(linkTo)} title={title}>
                <article 
                onMouseOver={() => setShowArrows(true)} 
                onMouseLeave={() => setShowArrows(false)} 
                className="w-full h-104 divide-y divide-gray-300 bg-white rounded-md relative hover:shadow-xl">
                    <div className='w-auto h-72 overflow-hidden flex items-center'>
                        <ChevronButton2 ref={navPrevRef} direction='left' active={isBeginnig} show={showArrows} />
                        <ChevronButton2 ref={navNextRef} direction='right' active={isEnd} show={showArrows} />
                        <Swiper
                            onSlideChange={verifyPosition}
                            navigation={{ prevEl, nextEl }}
                            modules={[Navigation]}
                            allowTouchMove={false}
                        >
                            {
                                images.map(({ img, id }) => (
                                    <SwiperSlide key={id}> 
                                        <div className="w-auto h-[18rem] overflow-hidden flex items-center justify-center">
                                            <img className="w-auto h-auto max-h-64" src={img} /> 
                                        </div>    
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div>
                        <div className='w-full h-full p-3'>
                            <CardTitle title={title} />
                            <Price USD={price} />
                            <Shipment type='gratis' />
                        </div>
                    </div>
                </article>
            </Link>
        </div>
    )
}