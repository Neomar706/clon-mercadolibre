



export const Shipment = function({ type }){
    return type.toLowerCase() === 'gratis'
        ? (
            <span className='text-green-600 font-medium text-sm'>
                Envío gratis
            </span>
        )
        : <></>
}