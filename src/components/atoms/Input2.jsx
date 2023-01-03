



export const Input2 = function({ placeholder, onChange, name, value, className, id }){
    return (
        <div>
            <input 
                id={id}
                type="number" 
                className={`w-full h-7 outline-none pl-2 text-sm text-gray-600 rounded-md focus:border focus:border-blue-500 ${className}`} 
                placeholder={placeholder} 
                onChange={onChange}
                name={name}
                value={value}
            />
        </div>
    )
}