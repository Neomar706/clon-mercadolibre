import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import { CardTitle } from "../atoms/CardTitle"
import { Price } from "../atoms/Price"
import { Shipment } from "../atoms/Shipment"


export const Card3 = function({ price, images, linkTo, title }){

    return (
        <Link to={linkTo.replaceAll(' ', '+')} title={title}>
            <article className="w-full h-104 divide-y divide-gray-300 bg-white rounded-md">
                <div className='w-auto h-72 overflow-hidden flex items-center'>
                    <Swiper>
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
    )
}