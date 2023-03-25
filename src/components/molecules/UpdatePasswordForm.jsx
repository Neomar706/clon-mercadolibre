import { useState } from 'react'

import { Button } from '../atoms/Button'
import { Input3 } from '../atoms/Input3'


export const UpdatePasswordForm = function({ onGetData }){
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = function(e){
        e.preventDefault()
        if(!password.length || !confirmPassword.length) return
        onGetData({
            password,
            confirmPassword
        })
    }


    return (
        <div className='mx-auto'>
            <h1 className='text-2xl font-medium font-roboto'>
                Cambiar contraseña
            </h1>
            <div className='p-8 bg-white mt-6 rounded-md shadow-md flex'>
                <form onSubmit={handleSubmit} className='w-1/2 mr-4'>
                    <div className='w-full'>
                        <div className='flex flex-col'>
                            <div className='w-full'>
                                <div className='mb-1'>
                                    <Input3 
                                        required
                                        className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                                        placeholder='Nueva contraseña'
                                        value={password}
                                        onChange={({ target }) => setPassword(target.value)}
                                    />
                                </div>
                            </div>
                            <div className='w-full mt-8'>
                                <div className='mb-1'>
                                    <Input3 
                                        required
                                        className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                                        placeholder='Confirma la nueva contraseña'
                                        value={confirmPassword}
                                        onChange={({ target }) => setConfirmPassword(target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-8'>
                                <Button text='Registrar' type='submit' />
                        </div>
                    </div>
                </form>
                <div className='w-1/2 ml-4 h-20'>
                    <h2 className='text-gray-800 text-md font-roboto font-medium'>
                        Cómo debe ser tu contraseña
                    </h2>
                    <p className='mt-4 text-gray-400 text-sm font-roboto'>
                        Debe tener como mínimo 6 caracteres.<br />
                        No incluyas tu nombre, apellido o email, ni caracteres idénticos consecutivos.
                    </p>
                </div>
            </div>
        </div>
    )
}