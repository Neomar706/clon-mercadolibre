import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TfiLocationPin } from 'react-icons/tfi'

import { Button } from '../atoms/Button'
import { InfoAddress } from '../molecules/InfoAddress'
import { SidebarWrapper } from '../organisms/SidebarWrapper'
import { AddAddress } from '../organisms/AddAddress'

import { getAddress, getAddressSelector } from '../../redux/slices/getAddressSlice'
import { addAddress } from '../../redux/slices/addAddressSlice'

export const Address = function({  }){
    const { loading, success, message, results } = useSelector(getAddressSelector)
    const [adding, setAdding] = useState(false)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAddress())
    }, [])

    const sendAddress = function(data){
        const _data = {
            state: data.state,
            city: data.city,
            municipality: data.municipality,
            parish: data.parish,
            street: data.street,
            houseNumber: data.houseNumber ? Number(data.houseNumber) : null,
            currentAddress: data.currentAddress
        }
        dispatch(addAddress(_data))
        setAdding(false)
        dispatch(getAddress())
    }

    return (
        <SidebarWrapper>
            <div className='w-full h-full flex items-center justify-center -mt-5'>
                <div className='w-[45%]'>
                    <div className='flex justify-center items-center w-full h-full shadow-md'>
                        <div className='w-full flex items-center p-6 bg-white rounded-md shadow-sm'>
                            <div className='w-16 h-16 flex items-center justify-center rounded-full border-2 border-blue-500'>
                                <TfiLocationPin className='text-blue-500 font-light' size={30} /> 
                            </div>
                            <h1 className='ml-5 text-xl font-proxima-nova font-medium text-gray-700'>
                                Dirección
                            </h1>
                            <div className={`ml-auto ${!false ? 'w-44' : 'w-24'}`}>
                                <Button text={!adding ? 'Agregar domicilio' : 'Cancelar'} style='bg-in-out' onClick={() => setAdding(!adding)} />
                            </div>
                        </div>
                    </div>
                    <div className='flex mt-10 bg-white p-10 shadow-md rounded-md'>
                        {!adding
                            ? (
                                <div className={`
                                    grid grid-cols-2 gap-5 w-full max-h-88
                                    ${success && results.length > 2 ? 'overflow-y-scroll' : ''}
                                `}>
                                    {
                                        loading
                                            ? <h2>Cargando...</h2>
                                            : !success 
                                                ? <p className='font-proxima-nova text-gray-700'>{ message }</p>
                                                : results.map((result, i) =>  <InfoAddress key={i} data={result} />)
                                    }
                                </div>
                            )
                            : <AddAddress hasAddress={success} onGetData={sendAddress} />}
                    </div>
                </div>
            </div>
        </SidebarWrapper>
    )
}