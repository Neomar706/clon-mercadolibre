import { BsTrash } from 'react-icons/bs'



export const Added = function({ text, img, onClick }){
    return (
        <button onClick={onClick} className='rounded-md overflow-hidden cursor-pointer'>
            <div className='relative flex group'>
                <img src={img} className='max-w-full h-32 w-full object-center object-cover' />
                <div className='absolute w-full h-full bg-gray-200 opacity-80 items-center hidden group-hover:flex'>        
                    <div className="p-4 w-full h-full">
                        <div className='flex items-center h-full rounded-md text-blue-500 border border-blue-500'>
                            <div className='mx-auto'>
                                <BsTrash className='mx-auto' size={25} />
                                <p className='mt-2 font-roboto text-sm'>{ text }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </button>
    )
}