import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { getFavorites } from "../../redux/slices/getFavorites"


export const FavoriteCard = function({ title, price, stock, image, isFree, onDelete, linkTo }){
    const dispatch = useDispatch()

    const handleClick = function(e){
        console.log(e.target)
        if(e.target.name === 'delete-button') e.preventDefault()
        dispatch(getFavorites({ limit: 10, page: 1 }))
    }

    return (
        <div className="relative">
            <Link to={linkTo} onClick={handleClick} className="flex py-2 cursor-pointer bg-white px-2 z-20">
                <img src={image} className='w-32 h-36 object-cover' />
                <div className="px-2 ml-2">
                    <h3 className='text-sm text-gray-600 mb-1'>
                        {title}
                    </h3>
                    <Price USD={price} />
                    <p className="text-sm text-gray-600 mb-1">
                        {stock} disponible
                    </p>
                    {isFree && (
                        <div className='text-green-600 font-medium text-xs'>
                            Envío gratis
                        </div>
                    )}
                </div>
            </Link>
            <button onClick={onDelete} name='delete-button' className='text-xs text-blue-500 hover:text-blue-600 p-2 pl-0 absolute left-[9.5rem] bottom-1'>
                Eliminar
            </button>
        </div>
    )
}

const Price = function({ USD }){
    const formatter = new Intl.NumberFormat('es-VE')
    const price = formatter.format(USD).toString().split(',')
    
    return (
        <span className='text-xl text-gray-600 flex mb-1'>
            U$S { 
                price.length === 1 
                    ? <span className="ml-2">{price[0]}</span>
                    : <span className="flex ml-2">
                        {price[0]}
                        <span className="text-xs mt-1">
                            {price[1]}
                        </span>
                    </span>
                }
        </span>
    )
}