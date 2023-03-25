import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FiUser } from 'react-icons/fi'

import { Input1 } from '../atoms/Input1'
import { Button } from '../atoms/Button'
import { SidebarWrapper } from '../organisms/SidebarWrapper'

import { userSelector } from '../../redux/slices/userSlice'
import { updateUser } from '../../redux/slices/updateUserSlice'


export const MyDetails = function({  }){
    const dispatch = useDispatch()
    const { result, success } = useSelector(userSelector)

    const [editing, setEditing] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [dni, setDni] = useState('')
    const [phone, setPhone] = useState('')
    

    useEffect(() => {
        setUsername(result.user.username)
        setEmail(result.user.email)
        setName(result.user.name)
        setLastname(result.user.lastname)
        setDni(result.user.dni)
        setPhone(result.user.phone)
    }, [success, editing])

    const sendData = function(e){
        e.preventDefault()
        const data = {
            name,
            lastname,
            username,
            email,
            dni,
            phone
        }
        dispatch(updateUser(data))
    }

    return (
        <SidebarWrapper>
            <div className='flex justify-center items-center w-full h-full -mt-5'>
                <div className='w-[45%]'>
                    <div className='flex items-center p-6 bg-white rounded-md shadow-sm'>
                        <div className='w-16 h-16 flex items-center justify-center rounded-full border-2 border-blue-500'>
                            <FiUser className='text-blue-500 font-light' size={30} /> 
                        </div>
                        <h1 className='ml-5 text-xl font-proxima-nova font-medium text-gray-700'>
                            Mis datos
                        </h1>
                        <div className='w-28 ml-auto'>
                            <Button text={!editing ? 'Editar' : 'Cancelar'} style='bg-in-out' onClick={() => setEditing(!editing)} />
                        </div>
                    </div>
                    <form onSubmit={sendData} className='bg-white p-10 mt-10 rounded-md divide-y-2 shadow-md'>
                        <div className='pb-8'>
                            <p className='font-proxima-nova font-medium text-gray-700'>
                                Datos de cuenta
                            </p>
                            <div className='flex mt-3'>
                                <div className='grid grid-cols-2 gap-6 w-full'>
                                    <Input1 
                                        readOnly={!editing}
                                        value={username}
                                        onChange={({ target }) => setUsername(target.value)}
                                        className={`
                                            outline-gray-300 h-10 rounded-md pl-3
                                            ${editing ? 'focus:outline-blue-500' : 'text-gray-400'}
                                            
                                        `}
                                        placeholder='Nombre de usuario'
                                    />
                                    <Input1 
                                        readOnly={!editing}
                                        value={email}
                                        onChange={({ target }) => setEmail(target.value)}
                                        className={`
                                            outline-gray-300 h-10 rounded-md pl-3
                                            ${editing ? 'focus:outline-blue-500' : 'text-gray-400'}
                                            
                                        `}
                                        placeholder='E-mail'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <p className='font-proxima-nova font-medium text-gray-700'>
                                Datos personales
                            </p>
                            <div className='flex mt-3'>
                                <div className='grid grid-cols-2 gap-6 w-full'>
                                    <Input1 
                                        readOnly={!editing}
                                        value={name}
                                        onChange={({ target }) => setName(target.value)}
                                        className={`
                                            outline-gray-300 h-10 rounded-md pl-3
                                            ${editing ? 'focus:outline-blue-500' : 'text-gray-400'}
                                            
                                        `}
                                        placeholder='Nombre de usuario'
                                    />
                                    <Input1 
                                        readOnly={!editing}
                                        value={lastname}
                                        onChange={({ target }) => setLastname(target.value)}
                                        className={`
                                            outline-gray-300 h-10 rounded-md pl-3
                                            ${editing ? 'focus:outline-blue-500' : 'text-gray-400'}
                                            
                                        `}
                                        placeholder='E-mail'
                                    />
                                    <Input1 
                                        readOnly={!editing}
                                        value={dni}
                                        onChange={({ target }) => setDni(target.value)}
                                        className={`
                                            outline-gray-300 h-10 rounded-md pl-3
                                            ${editing ? 'focus:outline-blue-500' : 'text-gray-400'}
                                            
                                        `}
                                        placeholder='E-mail'
                                    />
                                    <Input1 
                                        readOnly={!editing}
                                        value={phone}
                                        onChange={({ target }) => setPhone(target.value)}
                                        className={`
                                            outline-gray-300 h-10 rounded-md pl-3
                                            ${editing ? 'focus:outline-blue-500' : 'text-gray-400'}
                                            
                                        `}
                                        placeholder='E-mail'
                                    />
                                    {
                                        editing && (
                                            <div className='col-start-2 col-span-1 mt-2'>
                                                <Button text='Cargar nuevos datos' />
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </SidebarWrapper>
    )
}