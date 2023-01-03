import { forwardRef } from 'react'

export const DropdownList1 = forwardRef(({  }, ref) => {

    return (
        <div ref={ref} className='absolute top-8 left-0 z-10 min-w-max hover:block hidden shadow-md'>
            <div className='w-full h-full bg-[#333] relative py-6 rounded-md'>
                <div className='bg-[#333] w-5 h-5 absolute -top-1 left-16 rotate-45' />
                <ul>
                    {
                        (() => {
                            let arr = []
                            for(let i = 0; i < 10; i++){
                                arr.push(
                                    <li key={i} className='h-9 hover:bg-blue-500'>
                                        <a href='#' className='px-6 text-md font-roboto text-white w-full h-full flex items-center'>
                                            <p className='flex-none'>
                                                Celulares y Teléfonos
                                            </p>
                                        </a>
                                    </li>
                                )
                            }
                            return arr
                        })()
                    }
                </ul>
            </div>
        </div>
    )
})