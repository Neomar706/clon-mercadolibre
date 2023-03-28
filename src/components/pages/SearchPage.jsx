import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { BsChevronDown } from 'react-icons/bs'

import { Card3 } from '../organisms/Card3'
import { ShipmentCard } from '../molecules/ShipmentCard'
import { List } from '../atoms/List'
import { Range } from '../molecules/Range'
import { useQuery } from '../../hooks/useQuery'
import { capitalize } from '../../utils/capitalize'

import { filterArticles, filterArticlesSelector } from '../../redux/slices/filterArticles'
import { toggleFavoriteRequest } from '../../utils/toggleFavoriteRequest'

export const SearchPage = function({  }){
    const navigate = useNavigate()
    const query = useQuery()
    const location = useLocation()

    const dispatch = useDispatch()
    const { loading, success, result } = useSelector(filterArticlesSelector)


    const handleRange = function(range){
        const url = location.search
        const output = new URLSearchParams(url)
        const entriesMap = new Map(output.entries())

        let addingRange = [...entriesMap.entries()].filter(([key, val]) => !key.includes('price'))
        if(range.min && range.min !== 0) addingRange = [...addingRange, ['price[gte]', range.min]]
        if(range.max && range.max !== 0) addingRange = [...addingRange, ['price[lte]', range.max]]
        
        const newUrl = new URLSearchParams(addingRange)
        navigate('?' + newUrl.toString())
    }


    useEffect(() => {
        dispatch(filterArticles(query))
    }, [location])

    return (
        <div className='w-9/12 mx-auto'>
            <div className="flex mt-8 mb-5">
                <div className='text-sm text-gray-600 font-quicksand font-medium'>
                    {success && Object.keys(result.counters.categoriesCount).slice(0, 3).map(cat => cat).join(', ')}
                    {success && Object.keys(result.counters.categoriesCount).length > 3 ? ' ...' : null}
                </div>
                <div className='ml-auto text-sm text-gray-900 font-roboto font-medium flex'>
                    Ordenar por
                    <span className='hover:text-blue-500 cursor-pointer flex ml-2'>
                        Más relevantes
                        <BsChevronDown className='mt-[2px] ml-1' size={16}  />
                    </span>
                </div>
            </div>
            <div className='flex'>
                <div className='w-1/4 pr-10'>
                    <div className='text-2xl text-gray-800 font-semibold flex flex-col'>
                        <p>
                            {
                                query?.keyword 
                                    ? capitalize(query?.keyword)
                                    : capitalize(query?.category)
                            }
                        </p>
                        {success && (
                            <span className='text-sm text-gray-600'>{result.counters.articlesCount} resultados</span>
                        )}

                        <div className='mt-8'>
                            <ShipmentCard />
                        </div>

                        {success && (
                            <>
                                <div className="mt-8">
                                    <List type='state' title='Ubicación' data={result.counters.locationsCount} />
                                </div>
                                <div className="mt-8">
                                    <List type='category' title='Categorías' data={result.counters.categoriesCount} />
                                </div>
                                <div className="mt-8">
                                    <List type='news' title='Condición' data={result.counters.conditionCount} />
                                </div>
                                <div className="mt-8">
                                    <List type='shipmentFree' title='Costo de envío' data={result.counters.shipmentCostCount} />
                                </div> 
                                <Range onRange={handleRange} />
                            </>
                        )}
                    </div>
                </div>
                {[
                    loading && (
                        <div key={1} className='w-3/4 h-screen flex'>
                            <div className='mx-auto my-52 w-14 h-14 border-blue-500 border-t-4 border-r-border-t-4 rounded-full animate-spin' />
                        </div>
                    ),
                    !loading && success && !!result.articles?.length && (
                        <div key={2} className='w-3/4 h-104 grid grid-cols-3 gap-4 grid-rows-auto'>
                            {success && result.articles?.map(article => (
                                <Card3 
                                    key={article.id}
                                    images={article.pictures} 
                                    price={article.price} 
                                    title={article.title}
                                    linkTo={`/article?id=${article.id}`}
                                    isFavorite={article.isFavorite} 
                                    isFree={article.shipmentFree}
                                    onFavorite={isFav => toggleFavoriteRequest(article.id)} 
                                />
                            ))}
                        </div>
                    ),
                    !loading && success && !result.articles?.length && (
                        <div key={3} className='w-3/4 h-screen flex'>
                            <h2 className='mx-auto my-52 text-lg text-gray-600 font-roboto'>
                                No se encontraron resultados 404
                            </h2>
                        </div>
                    )
                ]}
            </div>
        </div>
    )
}