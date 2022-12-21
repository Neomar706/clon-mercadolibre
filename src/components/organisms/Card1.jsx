import { Price } from '../atoms/Price'
import { Shipment } from '../atoms/Shipment'
import { CardTitle } from '../atoms/CardTitle'
// 'Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+'

export const Card1 = function({ title, image, className, linkTo, price, ref }){
    return (
        <a className={className} href={linkTo} title={title} ref={ref}>			
            <article className='rounded-md cursor-pointer hover:shadow-lg border-spacing-12 w-56 h-88 bg-white my-5 divide-y divide-gray-300'>
                <div className='flex items-center flex-col'>
                    <img src={image} alt="img" className='w-auto h-60' />
                </div>
                <div className='p-3 flex flex-col'>
                    <Shipment type='gratis' />
                    <Price USD={price} />
                    <CardTitle title={title} />
                </div>
            </article>
        </a>
    )
}