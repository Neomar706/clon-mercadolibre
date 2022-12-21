import { useState } from 'react'


export const ShipmentSwitch = function({  }){
    const [isSwitched, setIsSwitched] = useState(false)
    
    return (
        <button 
            onClick={() => setIsSwitched(!isSwitched)} 
            className={`w-10 h-5 flex items-center rounded-full transition-all duration-300 ${!isSwitched ? 'bg-gray-300' : 'bg-blue-500'}`}
        >
            <div className={`w-4 h-4 mx-[2px] bg-white rounded-full shadow-md transition-all duration-300 ${!isSwitched ? 'ml-[2px]' : 'ml-6'}`} />
        </button>
    )
}