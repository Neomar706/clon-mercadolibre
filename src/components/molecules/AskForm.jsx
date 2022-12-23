import { useState } from 'react'

import { Input1 } from '../atoms/Input1'
import { Button } from '../atoms/Button'


export const AskForm = function({ onSubmit }){
    const [value, setValue] = useState('')

    const handleSubmit = function(e){
        e.preventDefault()
        onSubmit(value)
    }

    return (
        <form className='flex items-center bg-white' onSubmit={handleSubmit}>
            <Input1 
                className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                placeholder='Escribe tu pregunta...'
                value={value}
                onChange={({ target }) => setValue(target.value)}
            />
            <div className='w-44 ml-4'>
                <Button className text='Preguntar' />
            </div>
        </form>
    )
}