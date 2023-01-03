import { forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { CiUser } from 'react-icons/ci'

import { userSelector, logout } from '../../redux/slices/userSlice'

export const DropdownList2 = forwardRef(({  }, ref) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { result } = useSelector(userSelector)

    const handleClick = function(e){
        e.preventDefault()
        dispatch(logout())
        navigate('/')
    }

    return (
        <div ref={ref} className='absolute -left-24 top-8 z-10 rounded-md w-80 py-4 bg-white hidden hover:block shadow-md'>
            <div className="retalite">
                <div className='w-5 h-5 rotate-45 bg-white absolute -top-1 right-28' />
                <div className='flex flex-col divide-y'>
                    <div className='flex px-4'>
                        <CiUser size={35} />
                        <div className='ml-4'>
                            <p className='font-roboto font-medium text-md'>{ result?.user?.username }</p>
                            <p className='font-roboto text-gray-400 font-medium text-sm'>{ result?.user?.email }</p>
                        </div>
                    </div>
                    <div className='py-2'>
                        <a href="#" className='w-full h-8 flex items-center hover:bg-gray-100'>
                            <p className='px-5 text-sm font-proxima-nova'>
                                Compras
                            </p>
                        </a>
                        <a href="#" className='w-full h-8 flex items-center hover:bg-gray-100'>
                            <p className='px-5 text-sm font-proxima-nova'>
                                Preguntas
                            </p>
                        </a>
                    </div>
                    <div className='py-2'>
                        <a href="#" className='w-full h-8 flex items-center hover:bg-gray-100'>
                            <p className='px-5 text-sm font-proxima-nova'>
                                Mi perfil
                            </p>
                        </a>
                    </div>
                    <div className='py-2'>
                        <Link to="/account/publish" className='w-full h-8 flex items-center hover:bg-gray-100'>
                            <p className='px-5 text-sm font-proxima-nova'>
                                Vender
                            </p>
                        </Link>
                    </div>
                    <div className='pt-2'>
                        <a 
                            href="#" 
                            className='w-full h-8 flex items-center hover:bg-gray-100'
                            onClick={handleClick}
                        >
                            <p className='px-5 text-sm font-proxima-nova'>
                                Salir
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
})