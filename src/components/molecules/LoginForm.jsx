import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Input1 } from '../atoms/Input1'
import { Input3 } from '../atoms/Input3'
import { Button } from '../atoms/Button'


export const LoginForm = function({ onGetData }){
    const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

    const navigate = useNavigate()


    const handleSubmit = function(e){
        e.preventDefault()
        if(username.length === 0 || password.length === 0) return

        onGetData({
            username,
            password
        })
    }

    return (
        <div className='p-10 w-104 bg-white mx-auto rounded-md m-5 shadow-md'>
            <h1 className='text-2xl font-medium font-roboto'>¡Hola! Ingresa ingresa tu e-mail o usuario y contraseña</h1>
            <form className='flex flex-col items-center bg-white' onSubmit={handleSubmit}>
                <div className='w-full mt-7'>
                    <Input1 
                        required
                        className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                        placeholder='E-mail o usuario'
                        value={username}
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div className='w-full mt-7'>
                    <Input3
                        required
                        className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3 ' 
                        placeholder='Contraseña'
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <div className='w-full mt-7'>
                    <Button text='Ingresar' type='submit' />
                </div>
            </form>
            <div className='w-full mt-3'>
                <Button style='outline' text='Crear cuenta' onClick={() => navigate('/register')} />
            </div>
            <div className='w-full mt-3'>
                <Button style='bg-in-out' text='¿Olvidaste tu contraseña?' onClick={() => navigate('/password/forgot')} />
            </div>
        </div>
    )
}