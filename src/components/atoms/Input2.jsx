



export const Input2 = function({ placeholder, onChange, name, value }){
    return (
        <div>
            <input 
                type="text" 
                className='w-full h-7 outline-none pl-2 text-sm text-gray-600 rounded-md focus:border focus:border-blue-500' 
                placeholder={placeholder} 
                onChange={onChange}
                name={name}
                value={value}
            />
        </div>
    )
}