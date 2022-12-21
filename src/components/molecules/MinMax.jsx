import { useState } from 'react'

import { GoChevronRight } from 'react-icons/go'

import { Input2 } from '../atoms/Input2'
import { CircleButton } from '../atoms/CircleButton'


export const MinMax = function({  }){
    const [range, setRange] = useState({
        min: '',
        max: ''
    })
    const [active, setActive] = useState(false)

    const handleChange = function({ target }){
        setRange({
            ...range,
            [target.name]: target.value
        })
        if(target.value.length !== 0 || target.value.length !== 0) setActive(true)
        else setActive(false)
    }

    const handleSubmit = function(e){
        e.preventDefault()
        console.log(range.min)
        console.log(range.max)
    }

    return (
        <form className='flex items-start' onSubmit={handleSubmit}>
            <div className='mr-2'>
                <Input2 name='min' value={range.min} placeholder='Mínimo' onChange={handleChange} />
            </div>
            <div className='mr-2'>
                <Input2 name='max' value={range.max} placeholder='Máximo' onChange={handleChange} />
            </div>
            <CircleButton bgColor={!active ? 'bg-gray-300' : 'bg-blue-500'} icon={<GoChevronRight size={18} color='white' />} />
        </form>
    )
}