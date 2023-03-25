



export const CircleButton = function({ icon, onClick, bgColor }){
    return (
        <button 
            className={`w-14 h-8 flex items-center justify-center rounded-full mt-1 ${bgColor}`}
            onClick={onClick} 
        >
            {icon}
        </button>
    )
}