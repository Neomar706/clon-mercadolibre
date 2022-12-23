import { Brand } from '../atoms/Brand'
import { Search } from '../molecules/Search'
import { HiChevronDown } from 'react-icons/hi'
import { CiUser } from 'react-icons/ci'
import { BsBell } from 'react-icons/bs'
import imgEnviosExpress from '../../assets/img-envios-express.jpg'
import { Link } from 'react-router-dom'

const isLoged = false

export const Navbar = function(){
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
                <ul className='flex content-center'>
                    <li>
                        <a href='#' className='flex items-center text-sm'>
                            Categorías 
                            <HiChevronDown size={14} color='gray' className='mt-1' />
                        </a>
                    </li>
                    <li className='ml-28 text-sm text-gray-600'> <a href="#">Historial</a> </li>
                    <li className='ml-9 text-sm text-gray-600'> <a href="#">Tiendas oficiales</a> </li>
                    <li className='ml-9 text-sm text-gray-600'> <a href="#">Ofertas de la semana</a> </li>
                    <li className='ml-9 text-sm text-gray-600'> <a href="#">Vender</a> </li>
                    <li className='ml-9 text-sm text-gray-600'> <a href="#">Ayuda</a> </li>
                </ul>
                <ul className='flex items-center'>
                    {
                        isLoged ? (
                            <>
                                <li className='ml-4'>
                                    <a href='#' className='flex items-center text-sm'>
                                        <CiUser size={20} fontWeight={200} />
                                        UsuarioName
                                        <HiChevronDown size={14} color='gray' className='mt-1' />
                                    </a>
                                </li>
                                <li className='ml-4'> <a href='#' className='text-sm'>Mis compras</a> </li>
                                <li className='ml-4'> <a href="#" className='text-sm'>Favoritos</a> </li>
                                <li className='ml-4'> <a href="#" className='text-sm'><BsBell /></a> </li>
                            </>
                        ) : (
                            <>
                                <li className='ml-4'> <a href='#' className='text-sm'>Crea tu cuenta</a> </li>
                                <li className='ml-4'> <a href='#' className='text-sm'>Ingresa</a> </li>
                                <li className='ml-4'> <a href='#' className='text-sm'>Mis compras</a> </li>
                            </>
                        )
                    }
                </ul>
            </nav>
        </div>
    </div>
    )
}