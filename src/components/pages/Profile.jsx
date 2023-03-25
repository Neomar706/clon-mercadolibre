import { createElement } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FiUser } from 'react-icons/fi'
import { FaChevronRight } from 'react-icons/fa'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { TfiLocationPin } from 'react-icons/tfi'

import { SidebarWrapper } from '../organisms/SidebarWrapper'

import { userSelector } from '../../redux/slices/userSlice'

export const Profile = function({  }){
    const { result } = useSelector(userSelector)


    const ListItem = function({ navigateTo, icon, title, subTitle }){
        return (
            <Link to={`/account/profile/${navigateTo}`}>
                <div className='flex items-center py-4 cursor-pointer'>
                    <div className='flex items-center justify-center w-14 h-14 rounded-full border'>
                        { createElement(icon, { className: 'text-blue-500 font-light', size: 30 }) }
                    </div>
                    <div className='ml-5'>
                        <h2 className='text-md font-proxima-nova text-gray-700'>
                            { title }
                        </h2>
                        <p className='text-sm font-proxima-nova text-gray-500 mt-1'>
                            { subTitle }
                        </p>
                    </div>
                    <div className='ml-auto'>
                        <FaChevronRight className='text-gray-400' />
                    </div>
                </div>
            </Link>
        )
    }

    return (
        <SidebarWrapper>
            <div className='flex justify-center items-center w-full h-full'>
                <div className='w-[45%] h-3/4'>
                    <div className='flex items-center p-6 bg-white rounded-md shadow-sm'>
                        <div className='w-16 h-16 flex items-center justify-center rounded-full border-2 border-blue-500'>
                            <FiUser className='text-blue-500 font-light' size={30} /> 
                        </div>
                        <p className='ml-5 text-xl font-proxima-nova font-medium text-gray-700'>
                            { result.user.name }&nbsp;
                            { result.user.lastname }
                        </p>
                    </div>
                    <div className='bg-white p-10 mt-10 rounded-md divide-y-2 shadow-md'>
                        <ListItem navigateTo='my-details' icon={FiUser} title='Mis datos' subTitle='Gestiona tus datos personales' />
                        <ListItem navigateTo='security' icon={HiOutlineLockClosed} title='Seguridad' subTitle='Configura la seguridad de tu cuenta' />
                        <ListItem navigateTo='address' icon={TfiLocationPin} title='Direcciones' subTitle='Modifíca tus direcciones o agrega una nueva' />
                    </div>
                </div>
            </div>
        </SidebarWrapper>
    )
}