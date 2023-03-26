



export const Shipment = function({ free }){
    return free
        ? (
            <span className='text-green-600 font-medium text-sm'>
                Envío gratis
            </span>
        )
        : <></>
}