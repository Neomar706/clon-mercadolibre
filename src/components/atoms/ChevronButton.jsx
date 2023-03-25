import { forwardRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'



export const ChevronButton = forwardRef(({ direction, show, active }, ref) => {
    return (
        <button 
            ref={ref} 
            className={`
                cursor-pointer 
                flex items-center 
                justify-center 
                w-16 
                h-16 
                absolute 
                z-10 
                top-36 
                rounded-full 
                bg-white 
                shadow-lg
                ${direction.toLowerCase() === 'left' ? '-left-8' : '-right-8'}
                ${!show ? 'opacity-0' : 'opacity-100'} 
                ${active ? 'hidden' : ''}
            `}
        >
            {
                direction.toLowerCase() === 'left'
                ? <FaChevronLeft size={20} className='text-blue-500' />
                : <FaChevronRight size={20} className='text-blue-500' />
            }
        </button>
    )
})
    
