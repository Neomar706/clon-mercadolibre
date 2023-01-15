import { useState } from 'react'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import { Button } from '../atoms/Button'
import { Input3 } from '../atoms/Input3'
import { SidebarWrapper } from '../organisms/SidebarWrapper'

import { updatePassword } from '../../redux/slices/updatePasswordSlice'

export const Security = function({  }){
    const [editing, setEditing] = useState(false)
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleEditing = function(){
        if(editing){
            setOldPassword('')
            setNewPassword('')
            setConfirmPassword('')
        }
        setEditing(!editing)
    }

    const sendData = function(e){
        e.preventDefault()
        if(!oldPassword.length || !newPassword.length || !confirmPassword.length)
            return toast.error('Todos los campos son requeridos', { autoClose: false })
        const data = {
            oldPassword,
            newPassword,
            confirmPassword
        }
        dispatch(updatePassword({ ...data, navigate}))
    }

    return (
        <SidebarWrapper>
            <div className='w-full h-full flex items-center justify-center -mt-5'>
                <div className='w-[45%]'>
                    <div className='flex justify-center items-center w-full h-full shadow-md'>
                        <div className='w-full flex items-center p-6 bg-white rounded-md shadow-sm'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-full border-2 border-blue-500'>
                                <HiOutlineLockClosed className='text-blue-500 font-light' size={30} /> 
                            </div>
                            <h1 className='ml-5 text-xl font-proxima-nova font-medium text-gray-700'>
                                Seguridad
                            </h1>
                            <div className={`ml-auto ${!editing ? 'w-44' : 'w-24'}`}>
                                <Button text={!editing ? 'Cambiar contraseña' : 'Cancelar'} style='bg-in-out' onClick={() => handleEditing()} />
                            </div>
                        </div>
                    </div>
                    {
                        editing && (
                            <div className='flex mt-10 bg-white p-10 shadow-md rounded-md'>
                                <form onSubmit={sendData} className='grid grid-cols-1 gap-6 w-full'>
                                    <Input3
                                        value={oldPassword}
                                        onChange={({ target }) => setOldPassword(target.value)}
                                        className={`
                                            outline-gray-300 h-10 rounded-md pl-3
                                            ${editing ? 'focus:outline-blue-500' : 'text-gray-400'}
                                            
                                        `}
                                        placeholder='Contraseña anterior'
                                    />
                                    <Input3
                                        value={newPassword}
                                        onChange={({ target }) => setNewPassword(target.value)}
                                        className={`
                                            outline-gray-300 h-10 rounded-md pl-3
                                            ${editing ? 'focus:outline-blue-500' : 'text-gray-400'}
                                            
                                        `}
                                        placeholder='Nueva contraseña'
                                    />
                                    <Input3
                                        value={confirmPassword}
                                        onChange={({ target }) => setConfirmPassword(target.value)}
                                        className={`
                                            outline-gray-300 h-10 rounded-md pl-3
                                            ${editing ? 'focus:outline-blue-500' : 'text-gray-400'}
                                            
                                        `}
                                        placeholder='Confirma tu nueva contraseña'
                                    />
                                    <Button text='Actualizar contraseña' />
                                </form>
                                <div className='h-20 w-full ml-10'>
                                    <h2 className='text-md font-proxima-nova text-gray-700'>
                                        Como debe ser tu nueva contraseña
                                    </h2>
                                    <p className='text-sm mt-5 text-gray-500 font-proxima-nova tracking-wide'>
                                        Debe tener como mínimo 6 caracteres.<br/>
                                        No incluyas tu nombre, apellido o e-mail, ni caracteres idénticos consecutivos.
                                    </p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </SidebarWrapper>
    )
}