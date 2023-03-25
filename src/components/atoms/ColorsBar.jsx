
export const ColorsBar = function({ sold }){
    return (
        <div className='grid grid-cols-5 gap-2'>
            <span className={`h-3 ${sold > 3 && sold <= 6 ? 'bg-red-500' : 'bg-red-100'}`} />
            <span className={`h-3 ${sold > 6 && sold <= 9 ? 'bg-orange-500' : 'bg-orange-100'}`} />
            <span className={`h-3 ${sold > 9 && sold <= 12 ? 'bg-yellow-500' : 'bg-yellow-100'}`} />
            <span className={`h-3 ${sold > 12 && sold <= 15 ? 'bg-lime-500' : 'bg-lime-100'}`} />
            <span className={`h-3 ${sold > 15 ? 'bg-green-500' : 'bg-green-100'}`} />
        </div>
    )
}