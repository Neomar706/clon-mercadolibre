import { ShipmentSwitch } from "../atoms/ShipmentSwitch"



export const ShipmentCard = function({  }){
    return (
        <div className='flex items-center content-between px-3 py-4 rounded-md w-full bg-white' style={{userSelect: 'none'}}>
            <span className='text-sm font-quicksand font-semibold'>Envío gratis</span>
            <div className='ml-auto'>
                <ShipmentSwitch />
            </div>
        </div>
    )
}