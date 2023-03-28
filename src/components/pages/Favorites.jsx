import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ResponsivePagination from 'react-responsive-pagination'

import { Card1 } from '../organisms/Card1'
import { SidebarWrapper } from '../organisms/SidebarWrapper'

import { getFavorites, getFavoritesSelector } from '../../redux/slices/getFavorites'
import { toggleFavoriteRequest } from '../../utils/toggleFavoriteRequest'

export const Favorites = function({  }){
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()
    const { loading, success, results, count } = useSelector(getFavoritesSelector)

    useEffect(() => {
        dispatch(getFavorites({ limit: 5, page: params.page }))
    }, [params.page])

    return (
        <SidebarWrapper>
            <h1 className='w-9/12 mx-auto mt-12 text-xl font-proxima-nova font-medium text-gray-700'>Favoritos</h1>
            <div className='w-9/12 mx-auto'>
                {[
                    loading && (
                        <div key={1} className='flex flex-col justify-center content-center w-full mt-52'>
                            <div className='flex justify-center items-center h-20'>
                                <div className='w-14 h-14 border-blue-500 border-t-4 border-r-border-t-4 rounded-full animate-spin' />
                            </div>
                        </div>
                    ),
                    !loading && success && (
                        <div key={2} className='grid grid-cols-4 gap-2'>
                            {results.map(result => (
                                <div className=''>
                                    <Card1 
                                        key={result.id}
                                        linkTo={result.link}
                                        title={result.article.title}
                                        image={result.article.pictures[0].link} 
                                        isShipmentFree={result.article.shipmentFree} 
                                        price={result.article.price} 
                                        isFavorite={true}
                                        onFavorite={isFav => {
                                            toggleFavoriteRequest(result.article.id)
                                            dispatch(getFavorites({ limit: 5, page: params.page }))
                                        }} />
                                </div>
                            ))}
                        </div>
                    ),
                    !loading && success && !results.length && (
                        <div key={3} className='flex flex-col justify-center content-center w-full mt-52'>
                            <div className='flex justify-center items-center'>
                                <h2 className='text-lg text-gray-600 font-roboto'>
                                    No se encontraron resultados 404
                                </h2>
                            </div>
                        </div>
                    )
                ]}
            </div>
            {!loading && success && (
                <div className='my-10'>
                    <ResponsivePagination
                        current={Number(params.page)}
                        total={Math.ceil(count/5)}
                        onPageChange={page => navigate(`/account/favorites/${page}`)}
                    />
                </div>
            )}
        </SidebarWrapper>
    )
}