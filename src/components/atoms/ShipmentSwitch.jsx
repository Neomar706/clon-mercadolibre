import { useEffect, useState } from 'react'
import { useQuery } from '../../hooks/useQuery'


export const ShipmentSwitch = function({ onSwitch }){
    const query = useQuery()
    const [isSwitched, setIsSwitched] = useState(query?.shipmentFree === 'true')
    
    const handleClick = function(){
        setIsSwitched(!isSwitched)
        onSwitch(!isSwitched)
    }

    useEffect(() => {
        setIsSwitched(query?.shipmentFree === 'true')
    }, [query])

    return (
        <button 
            onClick={() => handleClick()} 
            className={`w-10 h-5 flex items-center rounded-full transition-all duration-300 ${!isSwitched ? 'bg-gray-300' : 'bg-blue-500'}`}
        >
            <div className={`w-4 h-4 mx-[2px] bg-white rounded-full shadow-md transition-all duration-300 ${!isSwitched ? 'ml-[2px]' : 'ml-6'}`} />
        </button>
    )
}