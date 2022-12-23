import { GoLocation  } from 'react-icons/go'
import { FaMedal } from 'react-icons/fa'

import { ColorsBar } from '../atoms/ColorsBar'



export const Card5 = function({ title, location, isPlatinum, recomenderRate = 0, activeSince, salesAchieved }){
    return (
        <div className="w-full rounded-md border-2 p-3">
            <h3 className='font-proxima-nova text-lg text-gray-700'>{title}</h3>
            <div className='mt-5 flex items-start mx-1'>
                <GoLocation size={16} className='mt-1 mr-3' />
                <div>
                    <div className='text-md text-gray-700 font-proxima-nova'>Ubicación</div>
                    <p className='text-sm text-gray-600'>{location}</p>
                </div>
            </div>
            {
                isPlatinum && (
                    <div className='mt-5 flex items-start mx-1'>
                        <FaMedal size={16} className='mt-1 mr-3 text-green-500' />
                        <div>
                            <div className='text-md font-proxima-nova font-medium text-green-500'>MercadoLíder Platinum</div>
                            <p className='text-sm text-gray-600'>¡Es uno de los mejores del sitio!</p>
                        </div>
                    </div>
                )
            }
            <div className='mt-5'>
                <ColorsBar sold={21} />
            </div>
            <div className='mt-2 grid grid-cols-3 gap-3'>
                <div className='w-full *bg-lime-300 flex flex-col items-center'>
                    <div className='text-xl font-proxima-nova font-medium text-gray-700'>{recomenderRate}%</div>
                    <div className='text-xs px-2 text-center text-gray-700 mt-1'>de compradores lo recomiendan</div>
                </div>
                <div className='w-full *bg-lime-300 flex flex-col items-center'>
                    <div className='text-xl font-proxima-nova font-medium text-gray-700'>{activeSince}</div>
                    <div className='text-xs px-2 text-center text-gray-700 mt-1'>vendiendo en Mercado Libre</div>
                </div>
                <div className='w-full *bg-lime-300 flex flex-col items-center'>
                    <div className='text-xl font-proxima-nova font-medium text-gray-700'>{salesAchieved}</div>
                    <div className='text-xs px-2 text-center text-gray-700 mt-1'>ventas concretadas</div>
                </div>
            </div>
        </div>
    )
}