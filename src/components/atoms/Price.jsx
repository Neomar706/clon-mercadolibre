


export const Price = function({ USD }){

    const price = USD.toLocaleString('en-US', { minimumFractionDigits: 2,maximumFractionDigits: 2 }).toString().split('.')

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