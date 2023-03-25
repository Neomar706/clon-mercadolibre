import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import { withCleanUrl } from '../../utils/withCleanUrl'


export const List = function({ type, title, data }){

    const location = useLocation()

    useEffect(() => {
        console.log({location})
        console.log({data})
    }, [location])

    return (
        <div>
            <p className='text-lg text-gray-700 mb-2'>{title}</p>
            <ul>
                {Object.keys(data).map((key, i) => (
                    <li className='leading-5' key={i}>
                        <Link to={withCleanUrl(`${location.search}&${type}=${
                            key === 'Gratis'
                            ? true
                            : key === 'Nuevo' 
                                ? true 
                                : key === 'Usado' 
                                    ? false 
                                    : key}`
                        )}>
                            <span className='text-sm font-normal text-gray-800'>
                                {key}
                                <span className='text-light text-gray-600'>
                                    &nbsp;({data[key]})
                                </span>
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}