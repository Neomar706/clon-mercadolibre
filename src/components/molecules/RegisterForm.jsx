import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../atoms/Button'
import { Input1 } from '../atoms/Input1'
import { Input3 } from '../atoms/Input3'

import { isValidEmail } from '../../utils/verifyEmail'
import { toast } from 'react-toastify'

export const RegisterForm = function({ onGetData }){
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [username, setUsername] = useState('')
    const [dni, setDni] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = function(e){
        e.preventDefault()
        if(
            name.length === 0 ||
            lastname.length === 0 ||
            username.length === 0 ||
            dni.length === 0 ||
            email.length === 0 ||
            phone.length === 0 ||
            password.length === 0 ||
            confirmPassword.length === 0
        ) return
        if(!isValidEmail(email)){
            toast.error('El email no es válido.')
            return
        }
        if(password !== confirmPassword){
            toast.error('Las contraseñas no coinciden.')
            return
        }
        onGetData({
            name,
            lastname,
            username,
            dni,
            email,
            phone,
            password
        })
    }


    return (
        <div className='mt-12'>
            <h1 className='text-2xl font-medium font-roboto'>
                Completa tus datos
            </h1>
            <div className='p-8 bg-white mt-6 rounded-md shadow-md relative'>
                <form onSubmit={handleSubmit}>
                    <div className='w-full'>
                        <div className='flex'>
                            <div className='w-full mr-3'>
                                <div className='mb-1'>
                                    <Input1 
                                        required
                                        className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                                        placeholder='Nombre'
                                        value={name}
                                        onChange={({ target }) => setName(target.value)}
                                    />
                                </div>
                                <span className='text-xs font-roboto text-gray-500'>
                                    Ingrésalo tal como figura en tu documento.
                                </span>
                            </div>
                            <div className='w-full ml-3'>
                                <div className='mb-1'>
                                    <Input1 
                                        required
                                        className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                                        placeholder='Apellido'
                                        value={lastname}
                                        onChange={({ target }) => setLastname(target.value)}
                                    />
                                </div>
                                <span className='text-xs font-roboto text-gray-500'>
                                    Ingrésalo tal como figura en tu documento.
                                </span>
                            </div>
                        </div>
                        <div className='flex mt-8'>
                            <div className='w-full mr-3'>
                                <div className='mb-2'>
                                    <Input1 
                                        required
                                        className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                                        placeholder='Nombre de usuario'
                                        value={username}
                                        onChange={({ target }) => setUsername(target.value)}
                                    />
                                </div>
                            </div>
                            <div className='w-full ml-3'>
                                <div className='mb-2'>
                                    <Input1 
                                        required
                                        className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                                        placeholder='Cédula de identidad'
                                        value={dni}
                                        onChange={({ target }) => setDni(target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='flex mt-8'>
                            <div className='w-full mr-3'>
                                <div className='mb-1'>
                                    <Input1 
                                        required
                                        className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                                        placeholder='E-mail'
                                        value={email}
                                        onChange={({ target }) => setEmail(target.value)}
                                    />
                                </div>
                                <span className='text-xs font-roboto text-gray-500'>
                                    Asegúrate de tener acceso a este e-mail.
                                </span>
                            </div>
                            <div className='w-full pl-3'>
                                <div className='mb-1'>
                                    <Input1 
                                        required
                                        className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                                        placeholder='Número de teléfono'
                                        value={phone}
                                        onChange={({ target }) => setPhone(target.value)}
                                    />
                                </div>
                                <span className='text-xs font-roboto text-gray-500'>
                                    Asegúrate de tener acceso a este contacto.
                                </span>
                            </div>
                        </div>
                        <div className='flex mt-8'>
                            <div className='w-full mr-3'>
                                <div className='mb-1'>
                                <Input3
                                    required
                                    className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3 ' 
                                    placeholder='Contraseña'
                                    value={password}
                                    onChange={({ target }) => setPassword(target.value)}
                                />
                                </div>
                                <span className='text-xs font-roboto text-gray-500'>
                                    Usa entre 6 y 20 caracteres
                                </span>
                            </div>
                            <div className='w-full ml-3'>
                                <div className='mb-1'>
                                    <Input3
                                        required
                                        className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3 ' 
                                        placeholder='Confirma la contraseña'
                                        value={confirmPassword}
                                        onChange={({ target }) => setConfirmPassword(target.value)}
                                    />
                                </div>
                                <span className='text-xs font-roboto text-gray-500'>
                                    Usa entre 6 y 20 caracteres
                                </span>
                            </div>
                        </div>
                        <div className='flex mt-8'>
                            <div className='w-1/2'>
                                <div className='mr-2'>
                                    <Button text='Registrar' type='submit' />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='w-1/2 absolute bottom-8 right-8'>
                    <div className='ml-10'>
                        <Button style='outline' text='Ya tengo cuenta' onClick={() => navigate('/login')} />
                    </div>
                </div>
            </div>
        </div>
    )
}