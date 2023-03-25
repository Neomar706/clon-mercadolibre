import { BiAddToQueue } from 'react-icons/bi'


export const Add = function({ text, toId }){
    return (
        <label htmlFor={toId}>
            <div className='w-22 h-32 p-4 bg-gray-200 hover:bg-gray-300 rounded-md cursor-pointer'>
                <div className='border border-blue-500 h-full flex items-center rounded-md'>
                    <div className='flex flex-col mx-auto text-blue-500'>
                        <BiAddToQueue className='mx-auto' size={25} />
                        <p className='mt-2 font-roboto text-sm'>{ text }</p>
                    </div>
                </div>
            </div>
        </label>
    )
}