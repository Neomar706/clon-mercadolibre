import { forwardRef } from 'react'
import { Link } from 'react-router-dom'


export const FavoriteDropdown = forwardRef(({ cards }, ref) => {
    return (
        <div ref={ref} className='hidden absolute w-104 h-20 bg-white *bg-teal-500 text-gray-700 -right-5 top-8 rounded-md z-10 hover:block shadow-lg'>
            <div>
                <div className='w-5 h-5 rotate-45 bg-white absolute -top-1 right-4' />
                <div className="flex flex-col">
                    <div className='flex items-center h-10 border-b border-gray-300 px-5'>
                        <p className='font-roboto font-medium text-md'>
                            Favoritos
                        </p>
                    </div>
                    <div className='max-h-104 overflow-y-auto border-b border-gray-300'>
                        {cards}
                    </div>
                    <div className="py-2 flex px-5 w-full bg-white rounded-b-md">
                        <div className='items-center content-center mx-auto'>
                            <Link to='/account/favorites/1' className='text-sm text-blue-500 hover:text-blue-600'>
                                Ver todos los favoritos
                            </Link>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
})