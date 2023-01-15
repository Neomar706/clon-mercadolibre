import { useState } from 'react'

import { BsThreeDots } from 'react-icons/bs'


export const InfoAddress = function({ data }){
    const [open, setOpen] = useState(false)

    const objCopy = {...data}
    delete objCopy.id
    delete objCopy.current_address
    if(!objCopy.house_number) delete objCopy.house_number
    const keysSpain = ['Estado:', 'Ciudad:', 'Municipio:', 'Parroquia:', 'Calle:', !!objCopy.house_number && 'Número de casa:']

    return (
        <div className='relative w-full border-2 rounded-md p-4 font-proxima-nova tracking-wide'>
            {data.current_address && (
                <span className='py-1 px-2 text-xs rounded-full bg-blue-500 text-white absolute top-4 right-10 select-none'>
                    actual
                </span>
            )}
            <BsThreeDots onClick={() => setOpen(!open)} className='absolute top-5 right-4 text-lg cursor-pointer' />
            <div className={`w-20 text-sm absolute top-12 right-4 rounded-md shadow-md bg-white ${open ? 'block' : 'hidden'}`}>
                {!data.current_address && (
                    <button className='hover:bg-gray-100 cursor-pointer px-2 py-1 w-full flex justify-start'>
                        Actual
                    </button>
                )}
                <button className='hover:bg-gray-100 cursor-pointer px-2 py-1 w-full flex justify-start'>
                    Editar
                </button>
                {!data.current_address && (
                    <button className='hover:bg-gray-100 cursor-pointer px-2 py-1 w-full flex justify-start'>
                        Eliminar
                    </button>
                )}
            </div>
            {Object.keys(objCopy).map((elem, i) => (
                <div key={i}>
                    <strong>
                        {keysSpain[i]}&nbsp;
                    </strong>
                    <p className='inline'>
                        {objCopy[elem]}
                    </p>
                </div>  
            ))}
        </div>
    )
}