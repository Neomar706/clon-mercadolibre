


export const Input1 = function({ placeholder, value, name, onChange }){
    return (
        <input 
            className="w-full border-none outline-none bg-transparent" 
            placeholder={placeholder} 
            value={value}
            name={name}
            onChange={onChange}
        />
    )
}