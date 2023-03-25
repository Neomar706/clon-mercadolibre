import { useState } from 'react'
import swal from 'sweetalert'


import { Input1 } from '../atoms/Input1'
import { Input2 } from '../atoms/Input2'
import { Button } from '../atoms/Button'

export const AddAddress = function({ hasAddress = true, onGetData }){
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [municipality, setMunicipality] = useState('')
    const [parish, setParish] = useState('')
    const [street, setStreet] = useState('')
    const [houseNumber, setHouseNumber] = useState('')
    const [currentAddress, setCurrentAddress] = useState(!hasAddress ? true : false)


    const handleSendAddress = function(){
        const verifyFields = []
        
        if(!state) verifyFields.push('Estado')
        if(!city) verifyFields.push('Ciudad')
        if(!municipality) verifyFields.push('Municipio')
        if(!parish) verifyFields.push('Parroquia')
        if(!street) verifyFields.push('Calle')

        if(verifyFields.length) return swal({
            title: 'Estos campos son requeridos:',
            text: '• ' + verifyFields.join(`\n• `),
            icon: 'warning'
        })

        const data = {
            state,
            city,
            municipality,
            parish,
            street,
            houseNumber,
            currentAddress
        }

        onGetData(data)
    }


    return (
        <div className='flex flex-col w-full'>
            <p className='font-proxima-nova font-medium text-gray-700 mb-2'>
                Rellena los siguientes campos:
            </p>
            <div className='grid grid-cols-2 gap-5 w-full relative'>
                <Input1 
                    required
                    value={state}
                    onChange={({ target }) => setState(target.value)}
                    className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                    placeholder='Estado'
                />
                <Input1 
                    required
                    value={city}
                    onChange={({ target }) => setCity(target.value)}
                    className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                    placeholder='Ciudad'
                />
                <Input1 
                    required
                    value={municipality}
                    onChange={({ target }) => setMunicipality(target.value)}
                    className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                    placeholder='Municipio'
                />
                <Input1 
                    required
                    value={parish}
                    onChange={({ target }) => setParish(target.value)}
                    className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                    placeholder='Parroquia'
                />
                <Input1 
                    required
                    value={street}
                    onChange={({ target }) => setStreet(target.value)}
                    className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                    placeholder='Calle'
                />
                <Input2 
                    required
                    value={houseNumber}
                    onChange={({ target }) => setHouseNumber(target.value)}
                    className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                    placeholder='Número de casa (Opcional)'
                />
                <Button 
                    style={!currentAddress &&'bg-in-out'}
                    text='Es mi domicilio actual'
                    onClick={() => setCurrentAddress(!currentAddress)}
                />
                <Button text='Agregar domicilio' onClick={() => handleSendAddress()} />
            </div>
        </div>
    )
}