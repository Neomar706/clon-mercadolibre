import { useEffect, useState } from 'react'
import { useNavigate }  from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import swal from 'sweetalert'

import { Input1 } from '../atoms/Input1'
import { Button } from '../atoms/Button'
import { Input2 } from '../atoms/Input2'

import { Add } from '../atoms/Add'
import { Added } from '../atoms/Added'

import { categorySelector } from '../../redux/slices/categorySlice'
import { publishArticleSelector, publishArticle } from '../../redux/slices/publishArticleSlice'
import { userSelector } from '../../redux/slices/userSlice'


const IMG_QTY = 8
export const Publish = function({  }){
    const [title, setTitle] = useState('')
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [isNew, setNew] = useState(true)
    const [isShipmentFree, setShipmentFree] = useState(true)
    const [stock, setStock] = useState('')
    const [price, setPrice] = useState('')
    const [warranty, setWarranty] = useState('')
    const [description, setDescription] = useState('')
    const [categories, setCategories] = useState([])
    const [images, setImages] = useState([])
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading: loading, success: success, results } = useSelector(categorySelector)
    const { loading: _loading, success: _success, message } = useSelector(publishArticleSelector)
    const { result: { user } } = useSelector(userSelector)


    const toggleCategory = function(id){
        if(!categories.includes(id)) return setCategories(prev => [...prev, id])
        setCategories(categories.filter(category => category !== id))
    }

    const handleChangeImages = function(e){
        for(let i = 0; i < e.target.files.length; i++) 
            if(e.target.files[i].type.indexOf('image') < 0) 
                return toast.error('Solo se permite cargar imágenes')

        if(e.target.files.length + images.length > IMG_QTY){
            console.log("target.files.length:", e.target.files.length)
            if(images.length){
                console.log('images.length:', images.length)
                const imgSpaces = IMG_QTY - images.length
                toast.error(`Solo puedes colocar ${imgSpaces === 1 ? 'una imágen' : `${imgSpaces} imágenes`} más.`)
                return
            }
            toast.error('Solo tienes un máximo de 6 imágenes')
            return
        }
        const _images = e.target.files

        for(let i = 0; i < _images.length; i++){
            const reader = new FileReader()
            
            reader.onload = function(event){
                setImages(prev => [...prev, event.target.result])
            }
            reader.readAsDataURL(_images[i])
        }
    }

    const handleRemoveImage = function(img){
        setImages(images.filter(image => image !== img))
    }


    const handlePublish = function(){
        if(!user.addresses.length){
            toast.error('No puedes publicar sin haber registrado un domicilio.')
            navigate('/account/profile/address')
            return
        }

        const verifyFields = []

        if(!title) verifyFields.push('Título')
        if(!brand) verifyFields.push('Marca')
        if(!model) verifyFields.push('Modelo')
        if(!stock) verifyFields.push('Cantidad disponible')
        if(!price) verifyFields.push('Precio')
        if(!description) verifyFields.push('Descripción')
        if(!categories.length) verifyFields.push('Categoría(s)')
        if(!images.length) verifyFields.push('Imágen(es)')

        if(verifyFields.length) return swal({
            title: 'Faltan los siguientes campos:',
            text: '• ' + verifyFields.join(`\n• `),
            icon: 'warning'
        })

        const data = {
            title,
            brand,
            model,
            isNew,
            isShipmentFree,
            stock,
            price,
            warranty,
            description,
            categories,
            images
        }

        dispatch(publishArticle(data))
    }

    if(_loading) {
        swal({
            title: 'Cargando...'
        })
    }

    useEffect(() => {
        if(_success) navigate('/')
    }, [_success])

    return (
        <div className='py-10'>
            <div className='w-9/12 *mt-10 mx-auto p-5 bg-white rounded-md shadow-md'>
                <div className='mb-5 text-center text-2xl font-proxima-nova font-normal text-gray-700'>
                    Publicar Artículo
                </div>
                <div className='flex items-center mt-5'>
                    <div className='w-1/2 p-3'>
                        <Input1 
                            required
                            value={title}
                            onChange={({ target }) => setTitle(target.value)}
                            className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                            placeholder='Título'
                        />
                    </div>
                    <div className='w-1/4 p-3'>
                        <Input1 
                            required
                            value={brand}
                            onChange={({ target }) => setBrand(target.value)}
                            className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                            placeholder='Marca'
                        />
                    </div>
                    <div className='w-1/4 p-3'>
                        <Input1 
                            required
                            value={model}
                            onChange={({ target }) => setModel(target.value)}
                            className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                            placeholder='Modelo'
                        />
                    </div>
                </div>
                <div className='flex items-center mt-5'>
                    <div className='w-1/2 p-3 flex'>
                        <div className='mr-2 w-full'>
                            <Button 
                                text='Nuevo' 
                                style={isNew ? '' : 'bg-in-out'} 
                                onClick={() => setNew(true)} 
                            />
                        </div>
                        <div className='ml-2 w-full'>
                            <Button 
                                text='Usado' 
                                style={!isNew ? '' : 'bg-in-out'} 
                                onClick={() => setNew(false)} 
                            />
                        </div>
                    </div>
                    <div className='w-1/4 p-3'>
                        <Input2
                            required
                            value={stock}
                            onChange={({ target }) => setStock(target.value)}
                            className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3' 
                            placeholder='Cantidad disponible'
                        />
                    </div>
                    <div className='w-1/4 p-3'>
                        <Input2 
                            required
                            value={price}
                            onChange={({ target }) => setPrice(target.value)}
                            className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3 text-md' 
                            placeholder='Precio'
                        />
                    </div>
                </div>
                <div className='flex mt-5 items-center'>
                    <div className='w-3/4 p-3 flex'>
                        <div className='mr-2 w-full'>
                            <Button 
                                text='Envío gratis' 
                                style={isShipmentFree ? '' : 'bg-in-out'} 
                                onClick={() => setShipmentFree(true)} 
                            />
                        </div>
                        <div className='ml-2 w-full'>
                            <Button 
                                text='Envío por cuenta del comprador' 
                                style={!isShipmentFree ? '' : 'bg-in-out'} 
                                onClick={() => setShipmentFree(false)} 
                            />
                        </div>
                    </div>
                    <div className='w-1/4'>
                        <div className='p-3'>
                            <Input2 
                                required
                                value={warranty}
                                onChange={({ target }) => setWarranty(target.value)}
                                className='focus:outline-blue-500 outline-gray-300 h-10 rounded-md pl-3 text-md' 
                                placeholder='Días de garantía'
                            />
                        </div>
                    </div>
                </div>

                <div className='flex mt-5 flex-col'>
                    <h2 className='text-md font-proxima-nova font-normal text-gray-500 mb-3'>
                        Añade la(s) imágenes de tu artículo, (máximo { IMG_QTY }):
                    </h2>
                    <div className='grid grid-cols-8 gap-4 w-full'>
                        {
                            images?.map((image, i) => (
                                <Added onClick={() => handleRemoveImage(image)} key={i} text='Eliminar' img={image} />
                            ))
                        }
                        {
                            images.length < IMG_QTY && (
                                <>
                                    <Add text='Añadir' toId='images' />
                                    <input 
                                        id='images' 
                                        type='file' 
                                        multiple
                                        className='hidden'
                                        onChange={handleChangeImages}
                                    />
                                </>
                            )
                        }
                    </div>
                </div>

                <div className='flex mt-5 flex-col'>
                    <h2 className='text-md font-proxima-nova font-normal text-gray-500 mb-3'>
                        Selecciona la(s) categorías que consideres apropiadas:
                    </h2>
                    <div className='grid grid-cols-4 gap-4 w-full'>
                        {
                            loading
                                ? <h2>Cargando...</h2>
                                : success && results.map(result => (
                                    <Button 
                                        key={result.id}
                                        text={result.category}
                                        style={categories.includes(result.id) ? '' : 'outline'}
                                        onClick={() => toggleCategory(result.id)} 
                                    /> 
                                ))
                        }
                    </div>
                </div>
                <div className='flex mt-5 items-center'>
                    <textarea 
                        value={description} 
                        onChange={({ target }) => setDescription(target.value)}
                        placeholder='Descripción' 
                        className='w-full outline-none border-3 p-3 rounded-md shadow-md text-lg text-gray-500 font-roboto tracking-wide h-104 resize-none' 
                    />
                </div>
                <div className="flex mt-5">
                    <div className='w-80 ml-auto'>
                        <Button 
                            text='Publicar ahora'
                            onClick={() => handlePublish()}
                        />
                    </div>
                </div>
            </div>        
        </div>
    )
}