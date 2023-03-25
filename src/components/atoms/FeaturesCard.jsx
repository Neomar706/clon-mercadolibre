


export const FeaturesCard = function({ brand, model }){
    return (
        <div className='flex rounded-md overflow-hidden border'>
            <div className='w-1/4'>
                <div className='h-14 bg-gray-200 flex items-center pl-4 text-roboto text-gray-800 font-semibold'>Marca</div>
                <div className='h-14 bg-gray-100 flex items-center pl-4 text-roboto text-gray-800 font-semibold'>Modelo</div>
            </div>
            <div className='w-3/4'>
                <div className='h-14 flex items-center pl-4 text-proxima-nova text-gray-700'>{brand}</div>
                <div className='h-14 flex items-center pl-4 text-proxima-nova text-gray-700'>{model}</div>
            </div>
        </div>
    )
}