


export const Button = function({ onClick, text }){
    return (
        <button onClick={onClick} className='hover:bg-blue-600 w-full h-12 bg-blue-500 text-white font-proxima-nova rounded-md transition-all duration-200'>
            {text}
        </button>
    )
}