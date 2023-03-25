import { useState } from 'react'

import { Input1 } from '../atoms/Input1'
import { Button } from '../atoms/Button'
import { useSelector } from 'react-redux'
import { makeQuestionSelector } from '../../redux/slices/makeQuestionSlice'


export const AskForm = function({ onSubmit }){
    const [value, setValue] = useState('')

    const { loading } = useSelector(makeQuestionSelector)

    const handleSubmit = function(e){
        e.preventDefault()
        onSubmit(value)
        setValue('')
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
                <Button className text={loading ? 'Cargando...' : 'Preguntar'} />
            </div>
        </form>
    )
}