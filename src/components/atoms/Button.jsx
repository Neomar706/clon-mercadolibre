


export const Button = function({ onClick, text, style, ...props }){
    return (
        <button
            {...props}
            onClick={onClick} 
            className={`w-full h-12 font-proxima-nova rounded-md transition-all duration-200 flex-none ${
                style === 'outline' 
                    ? 'hover:border-blue-600 hover:text-blue-600 text-blue-500 border border-blue-500' 
                    : style === 'bg-in-out'
                        ? 'hover:bg-blue-100 bg-white text-blue-500 font-medium'
                        : 'hover:bg-blue-600 text-white bg-blue-500'}`
            }
        >
            {text}
        </button>
    )
}