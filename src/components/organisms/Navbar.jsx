import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CiUser } from 'react-icons/ci'
import { BsBell } from 'react-icons/bs'
import { HiChevronDown } from 'react-icons/hi'

import { Brand } from '../atoms/Brand'
import { Search } from '../molecules/Search'
import imgEnviosExpress from '../../assets/img-envios-express.jpg'

import { userSelector } from '../../redux/slices/userSlice'
import { DropdownList1 } from '../atoms/DropdownList1'
import { DropdownList2 } from '../atoms/DropdownList2'

import { useDropdown } from '../../hooks/useDropdown'

export const Navbar = function(){
    const { result, isLogged } = useSelector(userSelector)

    const [ over, leave, dropRef ] = useDropdown()
    const [ _over, _leave, _dropRef ] = useDropdown()
    

    return (
    <div className='w-full bg-[#fff159]'>
        <div className='h-14 flex items-center'>
            <div className='w-9/12 h-full m-auto flex items-center'>
                <Link to='/'> <Brand /> </Link>
                <Search />
                <img className='w-[22rem] h-auto' src={imgEnviosExpress} alt='Envios Express' draggable={false} />
            </div>
        </div>
        <div className='h-11'>
            <nav style={{justifyContent: 'space-between'}} className='flex items-center content-between w-9/12 m-auto h-full'>
                <ul className='flex content-center font-proxima-nova'>
                    <li className='text-gray-800 hover:text-gray-900 relative group'>
                        <span 
                            className='flex items-center text-sm cursor-pointer'
                            onMouseOver={_over}
                            onMouseLeave={_leave}
                        >
                            Categorías 
                            <HiChevronDown size={14} color='gray' />
                        </span>
                        {<DropdownList1 ref={_dropRef} /> }
                    </li>
                    <li className='ml-28 text-sm text-gray-600 hover:text-gray-800'>
                        <Link to={isLogged ? '/account/history' : '/login?redirect=history'}>Historial</Link>
                    </li>
                    <li className='ml-9 text-sm text-gray-600 hover:text-gray-800'> <a href="#">Tiendas oficiales</a> </li>
                    <li className='ml-9 text-sm text-gray-600 hover:text-gray-800'> <a href="#">Ofertas de la semana</a> </li>
                    <li className='ml-9 text-sm text-gray-600 hover:text-gray-800'>
                        <Link to={isLogged ? '/account/publish' : '/login?redirect=publish'}>Vender</Link>
                    </li>
                    <li className='ml-9 text-sm text-gray-600 hover:text-gray-800'> <a href="#">Ayuda</a> </li>
                </ul>
                <ul className='flex items-center font-proxima-nova'>
                    {
                        isLogged ? (
                            <>
                                <li className='ml-4 text-gray-800 hover:text-gray-900 relative *group'>
                                    <span 
                                        className='flex items-center text-sm cursor-pointer' 
                                        onMouseLeave={leave}
                                        onMouseOver={over}
                                    >
                                        <CiUser size={20} fontWeight={200} />
                                        { result?.user?.username }
                                        <HiChevronDown size={14} color='gray' />
                                    </span>
                                    <DropdownList2 ref={dropRef} />
                                </li>
                                <li className='ml-4 text-gray-800 hover:text-gray-900'>
                                    <Link to='/account/puchases' className='text-sm'>Mis compras</Link>
                                </li>
                                <li className='ml-4 text-gray-800 hover:text-gray-900'>
                                    <a href="#" className='flex items-center text-sm'>
                                        Favoritos
                                        <HiChevronDown size={14} color='gray' />
                                    </a>
                                </li>
                                <li className='ml-4 text-gray-800 hover:text-gray-900'> <a href="#" className='text-sm'><BsBell /></a> </li>
                            </>
                        ) : (
                            <>
                                <li className='ml-4 text-gray-800 hover:text-gray-900'>
                                    <Link to='/register' className='text-sm'>Crea tu cuenta</Link>
                                </li>
                                <li className='ml-4 text-gray-800 hover:text-gray-900'> <Link to='/login' className='text-sm'>Ingresa</Link> </li>
                                <li className='ml-4 text-gray-800 hover:text-gray-900'>
                                    <Link to='/login?redirect=puchases' className='text-sm'>Mis compras</Link>
                                </li>
                            </>
                        )
                    }
                </ul>
            </nav>
        </div>
    </div>
    )
}