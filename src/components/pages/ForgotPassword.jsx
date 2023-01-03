import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

import { Input1 } from '../atoms/Input1'
import { Button } from '../atoms/Button'

import { forgotPassword } from '../../redux/slices/userSlice'

import { isValidEmail } from '../../utils/verifyEmail'

export const ForgotPassword = function({  }){
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = function(e){
        e.preventDefault()
        if(!isValidEmail(email)) return toast.error('El email no es válido.')
        dispatch(forgotPassword({ email }))
    }

    return (
        <div style={{ height: 'calc(100vh - 100px)' }} className='flex items-center'>
            <div className='p-10 w-104 bg-white mx-auto rounded-md m-5 shadow-md'>
                <h1 className='text-2xl font-medium font-roboto'>Por favor ingresa tu E-mail</h1>
                <form className='flex flex-col items-center bg-white' onSubmit={handleSubmit}>
                    <div className='w-full mt-7'>
                        <Input1 
                            required
                            className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                            placeholder='E-mail o usuario'
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />
                    </div>
                    <div className='w-full mt-7'>
                        <Button text='Recuperar contraseña' type='submit' />
                    </div>
                </form>
            </div>
        </div>
    )
}