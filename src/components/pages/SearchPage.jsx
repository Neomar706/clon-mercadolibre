
import { BsChevronDown } from 'react-icons/bs'

import { Card3 } from '../organisms/Card3'

import { ShipmentCard } from '../molecules/ShipmentCard'
import { List } from '../atoms/List'
import { MinMax } from '../molecules/MinMax'

import compuerta from '../../assets/compuerta.webp'
import compuertaDiagrama from '../../assets/compuerta-diagrama.jpg'

import { useQuery } from '../../hooks/useQuery'

export const SearchPage = function({  }){
    const query = useQuery()
    console.log(query)
    
    const capitalize = function(text){
        const txt = decodeURIComponent(text)
        return txt[0].toUpperCase() + txt.slice(1)
    }

    const images = [
        {
            id: 1,
            img: compuerta
        },
        {
            id: 2,
            img: compuertaDiagrama
        }
    ]

    const ubicaciones = [
        {
            id: 1,
            name: 'Lara',
            quantity: 5
        },
        {
            id: 2,
            name: 'Distrito Capital',
            quantity: 2
        },
        {
            id: 3,
            name: 'Carabobo',
            quantity: 2
        },
        {
            id: 4,
            name: 'Bolívar',
            quantity: 1
        },
        {
            id: 5,
            name: 'Monagas',
            quantity: 1
        },
        {
            id: 6,
            name: 'Zulia',
            quantity: 1
        },
    ]

    const categorias = [
        {
            id: 1,
            name: 'Componentes Electrónicos',
            quantity: 8
        },
        {
            id: 2,
            name: 'Accesorios para Audio y Video',
            quantity: 3
        },
        {
            id: 3,
            name: 'Otros',
            quantity: 1
        },
    ]

    const conditions = [
        {
            id: 1,
            name: 'Nuevo',
            quantity: 11
        },
        {
            id: 2,
            name: 'Usado',
            quantity: 1
        },
    ]

    const costoDeEnvio = [
        {
            id: 1,
            name: 'Gratis',
            quantity: 5
        }
    ]

    const precios = [
        {
            id: 1,
            name: 'Hasta U$S 2',
            quantity: 3
        },
        {
            id: 2,
            name: 'U$S 2 a U$S 2',
            quantity: 2
        },
        {
            id: 3,
            name: 'Más de U$S 2',
            quantity: 7
        },
    ]


    return (
        <div className='w-9/12 mx-auto'>
            <div className="flex mt-8 mb-5">
                <div className='text-sm text-gray-600 font-quicksand font-medium'>{ query?.keywork && 'Electrónica, Audio y Video' }</div>
                <div className='ml-auto text-sm text-gray-900 font-roboto font-medium flex'>
                    Ordenar por
                    <span className='hover:text-blue-500 cursor-pointer flex ml-2'>Más relevantes <BsChevronDown className='mt-[2px] ml-1' size={16}  /></span>
                </div>
            </div>
            <div className='flex'>
                <div className='w-1/4 pr-10'>
                    <div className='text-2xl text-gray-800 font-semibold flex flex-col'>
                        <p>{query?.keywork ? capitalize(query?.keywork) : capitalize(query?.category_name)}</p>
                        <span className='text-sm text-gray-600'>53 resultados</span>

                        <div className='mt-8'>
                            <ShipmentCard />
                        </div>

                        <div className="mt-8">
                            <List title='Ubicación' list={ubicaciones} />
                        </div>

                        <div className="mt-8">
                            <List title='Categorías' list={categorias} />
                        </div>

                        <div className="mt-8">
                            <List title='Condición' list={conditions} />
                        </div>

                        <div className="mt-8">
                            <List title='Costo de envío' list={costoDeEnvio} />
                        </div>

                        <div className="mt-8">
                            <List title='Precio' list={precios} />
                            <MinMax />
                        </div>

                    </div>
                </div>
                <div className='w-3/4 h-104 grid grid-cols-3 gap-4 grid-rows-auto'>
                    <Card3 images={images} price={2.40} title='74ls86 Compuerta Logica Or Exclusiva Ttl Sn74ls86n' linkTo='/article/74ls86 Compuerta Logica Or Exclusiva Ttl Sn74ls86n' />
                    <Card3 images={images} price={2.40} title='74ls86 Compuerta Logica Or Exclusiva Ttl Sn74ls86n' linkTo='/article/74ls86 Compuerta Logica Or Exclusiva Ttl Sn74ls86n' />
                    <Card3 images={images} price={2.40} title='74ls86 Compuerta Logica Or Exclusiva Ttl Sn74ls86n' linkTo='/article/74ls86 Compuerta Logica Or Exclusiva Ttl Sn74ls86n' />
                    <Card3 images={images} price={2.40} title='74ls86 Compuerta Logica Or Exclusiva Ttl Sn74ls86n' linkTo='/article/74ls86 Compuerta Logica Or Exclusiva Ttl Sn74ls86n' />
                    <Card3 images={images} price={2.40} title='74ls86 Compuerta Logica Or Exclusiva Ttl Sn74ls86n' linkTo='/article/74ls86 Compuerta Logica Or Exclusiva Ttl Sn74ls86n' />
                    <Card3 images={images} price={2.40} title='74ls86 Compuerta Logica Or Exclusiva Ttl Sn74ls86n' linkTo='/article/74ls86 Compuerta Logica Or Exclusiva Ttl Sn74ls86n' />
                </div>
            </div>
        </div>
    )
}