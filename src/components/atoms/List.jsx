import { Link } from 'react-router-dom'



export const List = function({ title, list }){
    return (
        <div>
            <p className='text-lg text-gray-700 mb-2'>{title}</p>
            <ul>
                {
                    list.map(({ name, quantity, id }) => (
                        <li className='leading-5' key={id}>
                            <Link>
                                <span className='text-sm font-normal text-gray-800'>
                                    {name}
                                    <span className='text-light text-gray-600'> ({quantity})</span>
                                </span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}