import { useState } from 'react'

import { BsHeartFill, BsHeart, BsChatRightDots } from 'react-icons/bs'
import { TbCar } from 'react-icons/tb'

import { Price2 } from '../atoms/Price2'
import { Input2 } from '../atoms/Input2'
import { Button } from '../atoms/Button'


export const Card4 = function({ isNew, sold, isFavorite, onFavorite, title, price, isShipmentFree, location, onQty, inStock, onBuy }){
    const [favorite, setFavorite] = useState(isFavorite)
    const [qty, setQty] = useState(1)

    const handleClick = function(){
        onFavorite(!favorite)
        setFavorite(!favorite)
    }

    const handleChange = function({ target }){
        if(target.value >= 1 && target.value <= inStock){
            setQty(target.value)
            onQty(target.value)
        }
    }

    return (
        <div className="w-full *bg-orange-100 rounded-md p-4 border-2">
            <div className='flex divide-x divide-gray-300'>
                <span className='text-sm text-gray-500 font-quicksand font-bold pr-2 leading-3'>{isNew ? 'Nuevo' : 'Usado'}</span>
                <span className='text-sm text-gray-500 font-quicksand font-bold pl-2 leading-3'>{sold} vendidos</span>
            </div>
            <div className='flex mt-3'>
                <div className='text-2xl font-proxima-nova font-normal text-gray-700 pr-3'>{title}</div>
                <div className='pt-2'>
                    <button onClick={() => handleClick()}>
                        {
                            favorite
                                ? <BsHeartFill className='text-blue-500' size={22} />
                                : <BsHeart className='text-blue-500' size={22} />
                        }
                    </button>
                </div>
            </div>
            <div className='mt-5'>
                <Price2 USD={price} />
                <span className='block text-proxima-nova text-lg font-normal'>
                    Bs. 38.83
                </span>
            </div>
            {
                isShipmentFree ? (
                    <div className='flex items-center mt-5 text-green-500'>
                        <TbCar size={25} />
                        <span className='ml-2 font-medium font-proxima-nova'>
                            Envío gratis a todo el pais
                        </span>
                    </div>
                ) : (
                    <div className='flex items-center mt-5 text-gray-600'>
                        <BsChatRightDots size={20} />
                        <span className='ml-2 font-medium font-proxima-nova'>
                            Entrega a acordar con el vendedor
                        </span>
                    </div>
                )
            }
            <div className='text-sm text-gray-500 font-proxima-nova pt-1 pl-8'>
                {location}
            </div>
            <div className='mt-5 flex flex-row items-center'>
                <span className='mr-2'>
                    Cantidad: 
                </span>
                <Input2 className='w-12' type='number' value={qty} onChange={handleChange} />
                <span className='text-sm text-gray-500 font-proxima-nova ml-2'>
                    ({inStock} Disponibles)
                </span>
            </div>
            <div className='mt-5'>
                <Button text='Comprar ahora' onClick={() => onBuy()} />
            </div>
        </div>
    )
}