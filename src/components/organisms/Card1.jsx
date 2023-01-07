import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsHeartFill, BsHeart } from 'react-icons/bs'

import { Price } from '../atoms/Price'
import { Shipment } from '../atoms/Shipment'
import { CardTitle } from '../atoms/CardTitle'
// 'Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+'

export const Card1 = function({ title, image, className, linkTo, price, ref, isShipmentFree, isFavorite, onFavorite }){
    const [favorite, setFavorite] = useState(isFavorite)

    const handleClick = function(){
        onFavorite(!favorite)
        setFavorite(!favorite)
    }

    return (
        <div className='relative group w-56'>
            <button onClick={() => handleClick()} className='absolute right-4 top-4 hidden group-hover:block'>
                <div>
                    {
                        favorite
                        ? <BsHeartFill className='text-blue-500' size={22} />
                        : <BsHeart className='text-blue-500' size={22} />
                    }
                </div>
            </button>
            <Link className={`${className}`} to={linkTo} title={title} ref={ref}>
                <article className='rounded-md cursor-pointer hover:shadow-lg border-spacing-12 w-56 h-88 bg-white my-5 divide-y divide-gray-300'>
                    <div className='flex items-center flex-col'>
                        <img src={image} alt="img" className='w-auto h-60' />
                    </div>
                    <div className='p-3 flex flex-col'>
                        <Shipment type={isShipmentFree ? 'gratis' : ''} />
                        <Price USD={price} />
                        <CardTitle title={title} />
                    </div>
                </article>
            </Link>
        </div>
    )
}