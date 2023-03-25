import { useRef, useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import { AiOutlineShopping } from 'react-icons/ai'
import { BsTag } from 'react-icons/bs'
import { HiOutlineUserCircle } from 'react-icons/hi'

import { DropdownMenu } from '../molecules/DropdownMenu'

export const SidebarWrapper = function({ children, activeIndex }){
    const ref = useRef()
    const [open, setOpen] = useState(false)


    const dropdowns = [
        {
            name: 'Compras',
            icon: AiOutlineShopping,
            active: true,
            items: [
                {
                    name: 'Compras',
                    active: true,
                    link: '#'
                },
                {
                    name: 'Preguntas',
                    active: false,
                    link: '#'
                },
                {
                    name: 'Favoritos',
                    active: false,
                    link: '#'
                }
            ]
        },
        {
            name: 'Ventas',
            icon: BsTag,
            active: false,
            items: [
                {
                    name: 'Ventas',
                    active: false,
                    link: '#'
                },
                {
                    name: 'Publicaciones',
                    active: false,
                    link: '#'
                },
                {
                    name: 'Preguntas',
                    active: false,
                    link: '#',
                },
                {
                    name: 'Reputación',
                    active: false,
                    link: '#'
                }
            ]
        },
        {
            name: 'Mi perfil',
            icon: HiOutlineUserCircle,
            active: false,
            items: [
                {
                    name: 'Mis datos',
                    active: false,
                    link: '#'
                },
                {
                    name: 'Seguridad',
                    active: false,
                    link: '#'
                },
                {
                    name: 'Direcciones',
                    active: false,
                    link: '#'
                }
            ]
        }
    ]


    const handleOver = function(){
        ref?.current?.classList?.remove('hidden')
        ref?.current?.classList?.add('block')
        setOpen(true)
    }

    const handleLeave = function(){
        ref?.current?.classList?.remove('block')
        ref?.current?.classList?.add('hidden')
        setOpen(false)
    }

    const actions = {
        onMouseOver: () => handleOver(),
        onMouseLeave: () => handleLeave()
    }

    return (
        <section className="flex gap-6 relative"  style={{height: 'calc(100vh - 6.25rem)' }}>
            <div {...actions} className={`absolute top-0 left-0 *px-4 font-proxima-nova z-20 bg-white h-full shadow-md duration-500 ${ open ? "w-64" : "w-16"}`}>
                <div className="p-4 flex justify-start mt-8 items-center">
                    <div className='pl-1'>
                        {
                            open
                                ? <RxCross2 size={25} className="text-blue-500" />
                                : <FiMenu size={25} className="text-blue-500" />
                        }
                    </div>
                    <h2 className='whitespace-pre text-gray-600 duration-500 overflow-hidden pl-4 text-sm font-medium select-none'>
                        Mi cuenta
                    </h2>
                </div>
                <div className="mt-6 flex flex-col gap-4 relative">
                    {
                        dropdowns.map((drop, i) => (
                            <DropdownMenu 
                                key={i}
                                name={drop.name}
                                icon={drop.icon}
                                active={drop.active}
                                items={drop?.items}
                                isSidebarOpen={open}
                            />
                        ))
                    }
                </div>
            </div>
            <div ref={ref} className='absolute top-0 left-0 h-full w-full bg-black opacity-40 hidden z-10' />
            <div className="w-full">
                { children }
            </div>
        </section>
    )
}