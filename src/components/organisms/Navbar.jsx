import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import { CiUser } from 'react-icons/ci'
import { BsBell } from 'react-icons/bs'
import { HiChevronDown } from 'react-icons/hi'

import { Brand } from '../atoms/Brand'
import { Search } from '../molecules/Search'
import imgEnviosExpress from '../../assets/img-envios-express.jpg'

import { userSelector } from '../../redux/slices/userSlice'

import { DropdownList1 } from '../atoms/DropdownList1'
import { DropdownList2 } from '../atoms/DropdownList2'
import { FavoriteDropdown } from '../atoms/FavoriteDropdown'
import { FavoriteCard } from './FavoriteCard'


import { useDropdown } from '../../hooks/useDropdown'
import { getFavorites, getFavoritesSelector } from '../../redux/slices/getFavorites'
import { toggleFavoriteRequest } from '../../utils/toggleFavoriteRequest'

export const Navbar = function(){
    const dispatch = useDispatch()

    const { result, isLogged } = useSelector(userSelector)
    const { loading, success, results, message } = useSelector(getFavoritesSelector)

    const [ over, leave, dropRef ] = useDropdown()
    const [ _over, _leave, _dropRef ] = useDropdown()
    const [ favOver, favLeave, favDropRef ] = useDropdown()


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
                            { <DropdownList1 ref={_dropRef} /> }
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
                                    <li className='ml-4 text-gray-800 hover:text-gray-900 relative'>
                                        <span 
                                            href="#" className='flex items-center text-sm cursor-pointer'
                                            onMouseOver={e => {
                                                favOver(e)
                                                dispatch(getFavorites({ limit: 10, page: 1 }))
                                            }}
                                            onMouseLeave={favLeave}
                                        >
                                            Favoritos
                                            <HiChevronDown size={14} color='gray' />
                                        </span>
                                        <FavoriteDropdown
                                            ref={favDropRef}
                                            cards={ 
                                                loading ? (
                                                    <div className='flex justify-center items-center h-20 bg-white'>
                                                        <div className='w-6 h-6 border-blue-500 border-t-2 border-r-2 rounded-full animate-spin' />
                                                    </div>
                                                ) : success && results.length ?
                                                    results.map(result => (
                                                        <FavoriteCard
                                                            key={result.id}
                                                            title={result.article.title}
                                                            price={result.article.price}
                                                            stock={result.article.stock}
                                                            image={result.article.pictures[0].link}
                                                            isFree={result.article.shipmentFree}
                                                            onDelete={() => {
                                                                toggleFavoriteRequest(result.article.id)
                                                                dispatch(getFavorites({ limit: 10, page: 1 }))
                                                            }}
                                                            linkTo={result.link}
                                                        />
                                                    )) : success && !result.length ? (
                                                            <div className='px-5 text-sm text-gray-600 h-20 bg-white flex items-center w-full'>
                                                                No se encontraron resultados
                                                            </div>
                                                        )
                                                        : (
                                                            <div className='px-5 text-sm text-gray-600 h-20 bg-white flex items-center w-full'>
                                                                {message}
                                                            </div>
                                                        )
                                            } 
                                        />
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