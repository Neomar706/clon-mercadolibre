import { useState } from "react"
import { useNavigate } from 'react-router-dom'

import { Input1 } from "../atoms/Input1"
import { IoIosSearch } from 'react-icons/io'

export const Search = function(){
    const [value, setValue] = useState('')
    const navigate = useNavigate()

    const handleChange = function(e){
        setValue(e.target.value)
    }

    const handleSubmit = function(e){
        e.preventDefault()
        if(value.length < 3) return
        navigate(`/search?keyword=${value}`)
        setValue('')
    }
    
    return (
        <form className='flex items-center px-3 py-2 mx-14 w-1/2 bg-white' onSubmit={(e) => handleSubmit(e)}>
            <Input1 placeholder='Buscar productos, marcas y más...' value={value} onChange={handleChange} />
            <button>
                <IoIosSearch className="ml-3" size={22} />
            </button>
        </form>
    )
}