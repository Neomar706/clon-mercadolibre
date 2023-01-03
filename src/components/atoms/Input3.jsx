import { useState } from 'react'
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri'
import { Input1 } from "./Input1"


export const Input3 = function({ value, onChange, className, placeholder, ...props }){
    const [isShowPWD, setIsShowPWD] = useState(false)

    return (
        <div className='relative'>
            <Input1 
                {...props}
                type={isShowPWD ? 'text' : 'password'}
                className={`pr-10 ${className}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {
                isShowPWD
                    ? <RiEyeCloseLine
                            onClick={() => setIsShowPWD(!isShowPWD)}
                            size={20} 
                            className={`absolute top-[10px] right-2 text-gray-600 cursor-pointer`}
                        />
                    : <RiEyeLine 
                            onClick={() => setIsShowPWD(!isShowPWD)}
                            size={20} 
                            className={`absolute top-[10px] right-2 text-gray-600 cursor-pointer`}
                        />
            }
        </div>
    )
}