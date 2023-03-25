import { useNavigate, useLocation } from 'react-router-dom'

import { ShipmentSwitch } from '../atoms/ShipmentSwitch'
import { withCleanUrl } from '../../utils/withCleanUrl'

export const ShipmentCard = function({  }){
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <div className='flex items-center content-between px-3 py-4 rounded-md w-full bg-white' style={{userSelect: 'none'}}>
            <span className='text-sm font-quicksand font-semibold'>Envío gratis</span>
            <div className='ml-auto'>
                <ShipmentSwitch onSwitch={(isSwitched) => 
                    navigate(withCleanUrl(`${location.search}&shipmentFree=${isSwitched}`))
                } />
            </div>
        </div>
    )
}