import { Input } from "../atoms/Input"
import { IoIosSearch } from 'react-icons/io'

export const Search = function(){
    return (
        <form className='flex items-center px-3 py-2 mx-14 w-1/2 bg-white'>
            <Input placeholder='Buscar productos, marcas y más...' />
            <button>
                <IoIosSearch className="ml-3" size={22} />
            </button>
        </form>
    )
}