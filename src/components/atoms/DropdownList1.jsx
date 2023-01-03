import { forwardRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { categorySelector, getCategories } from '../../redux/slices/categorySlice'


export const DropdownList1 = forwardRef(({  }, ref) => {

    const dispatch = useDispatch()
    const { loading, results } = useSelector(categorySelector)


    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return !loading ? (
        <div ref={ref} className='absolute top-8 left-0 z-10 min-w-max hover:block hidden shadow-md'>
            <div className='w-full h-full bg-[#333] relative py-6 rounded-md'>
                <div className='bg-[#333] w-5 h-5 absolute -top-1 left-16 rotate-45' />
                <ul>
                    {
                        results.map((item) => (
                            <li key={item.id} className='h-9 hover:bg-blue-500'>
                                <Link 
                                    to={`/search?category_id=${item.id}&category_name=${item.category}`} 
                                    className='px-6 text-md font-roboto text-white w-full h-full flex items-center'
                                >
                                    <p className='flex-none'>
                                        {item.category}
                                    </p>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    ) : null
})