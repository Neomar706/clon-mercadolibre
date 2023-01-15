import { createElement, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'



export const DropdownMenu = function({ name, icon, active, items, isSidebarOpen }){
    const [show, setShow] = useState(false)


    return (
        <div className='text-sm font-medium select-none'>
            <div 
                onClick={() => setShow(!show)}
                className='flex items-center px-4 py-3 border-l-4 hover:border-blue-500 cursor-pointer'>
                <div>
                    { createElement(icon, { className: active ? 'text-blue-500' : 'text-gray-500', size: 25 }) }
                </div>
                <div className='whitespace-pre text-gray-500 overflow-hidden flex items-center w-full'>
                    <h3 className='pl-4'>
                        { name }   
                    </h3>
                    {
                        items && (
                            <div className='ml-auto'>
                                <FaChevronDown size={16} className={show ? 'rotate-180' : 'rotate-0'} />
                            </div>
                        )
                    }
                </div>
            </div>
            <div className={`flex-col text-xs overflow-hidden tracking-wide ${show && isSidebarOpen ? 'flex' : 'hidden'}`}>
                {
                    items?.map((item, i) => (
                        <Link key={i} to={item.link} className={`pl-16 mt-2 hover:text-blue-500 ${item.active ? 'text-gray-900' : 'text-gray-500'}`}>
                            { item.name }
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}