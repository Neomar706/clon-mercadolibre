


export const Input1 = function({ placeholder, value, name, onChange, className, ...props }){
    return (
        <input 
            {...props}
            className={`w-full border-none outline-none bg-transparent ${className}`} 
            placeholder={placeholder} 
            value={value}
            name={name}
            onChange={onChange}
        />
    )
}