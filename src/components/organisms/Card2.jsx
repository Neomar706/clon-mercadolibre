import electrodomesticos from '../../assets/electrodomesticos.webp'


export const Card2 = function({ linkTo, className, title, image }){
    return (
        <a className={className} href={linkTo}>
            <div className='w-auto h-72 bg-white flex flex-col items-center rounded-md overflow-hidden hover:shadow-lg'>
                <img src={image} />
                <span className='mt-5 text-gray-700 font-roboto text-sm font-medium '>{title.toUpperCase()}</span>
            </div>
        </a>
    )
}