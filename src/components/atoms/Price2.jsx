


export const Price2 = function({ USD }){
    const price = USD.toLocaleString('en-US', { minimumFractionDigits: 2,maximumFractionDigits: 2 }).toString().split('.')

    return (
        <span className={`text-4xl text-gray-700 font-proxima-nova font-light flex`}>
            U$S { 
                price.length === 1 
                    ? <span className="ml-2">{price[0]}</span>
                    : <span className="flex ml-2">
                        {price[0]}
                        <span className="text-lg">
                            {price[1]}
                        </span>
                    </span>
                }
        </span>
    )
}