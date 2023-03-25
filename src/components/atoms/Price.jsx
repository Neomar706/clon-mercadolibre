


export const Price = function({ USD }){

    const formatter = new Intl.NumberFormat('es-VE')
    const price = formatter.format(USD).toString().split(',')
    
    return (
        <span className={`text-2xl text-gray-600 flex`}>
            U$S { 
                price.length === 1 
                    ? <span className="ml-2">{price[0]}</span>
                    : <span className="flex ml-2">
                        {price[0]}
                        <span className="text-sm mt-1">
                            {price[1]}
                        </span>
                    </span>
                }
        </span>
    )
}