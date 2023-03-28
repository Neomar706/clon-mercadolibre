import { useEffect } from 'react'

import { BannerSlider } from '../organisms/BannerSlider'
import { ProductsSlider } from '../organisms/ProductsSlider'
import { Card2 } from '../organisms/Card2'
import { Card1 } from '../organisms/Card1'

import { useDispatch, useSelector } from 'react-redux'
import { getArticles, articleSelector } from '../../redux/slices/articlesSlice'


// Images imports
import electrodomesticos from '../../assets/electrodomesticos.webp'
import tvYAudio from '../../assets/tv-y-audio.webp'
import celulares from '../../assets/celulares.webp'
import computacion from '../../assets/computacion.webp'
import limpieza from '../../assets/limpieza.webp'
import mascotas from '../../assets/mascotas.webp'
import alimentos from '../../assets/alimentos.webp'
import iluminacion from '../../assets/iluminacion.webp'
import herramientas from '../../assets/herramientas.webp'
import hogarYMuebles from '../../assets/hogar-y-muebles.webp'
import oficina from '../../assets/equipamiento-y-oficina.webp'
import imgMultimetro from '../../assets/img-multimetro.webp'
import { userSelector } from '../../redux/slices/userSlice'
import { toggleFavoriteRequest } from '../../utils/toggleFavoriteRequest'
import { getFavorites, getFavoritesSelector } from '../../redux/slices/getFavorites'


export const Home = function({  }){
    const dispatch = useDispatch()
    const { results, loading, success } = useSelector(articleSelector)
    const { isLogged } = useSelector(userSelector)
    const { loading: _loading, success: _success, results: _results, count } = useSelector(getFavoritesSelector)
    

    const cards = [
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} isShipmentFree={true} isFavorite={false} onFavorite={isFav => console.log(isFav)} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} isShipmentFree={true} isFavorite={false} onFavorite={isFav => console.log(isFav)} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} isShipmentFree={true} isFavorite={false} onFavorite={isFav => console.log(isFav)} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} isShipmentFree={true} isFavorite={false} onFavorite={isFav => console.log(isFav)} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} isShipmentFree={true} isFavorite={false} onFavorite={isFav => console.log(isFav)} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} isShipmentFree={true} isFavorite={false} onFavorite={isFav => console.log(isFav)} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} isShipmentFree={true} isFavorite={false} onFavorite={isFav => console.log(isFav)} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} isShipmentFree={true} isFavorite={false} onFavorite={isFav => console.log(isFav)} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} isShipmentFree={true} isFavorite={false} onFavorite={isFav => console.log(isFav)} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} isShipmentFree={true} isFavorite={false} onFavorite={isFav => console.log(isFav)} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} isShipmentFree={true} isFavorite={false} onFavorite={isFav => console.log(isFav)} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} isShipmentFree={true} isFavorite={false} onFavorite={isFav => console.log(isFav)} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} isShipmentFree={true} isFavorite={false} onFavorite={isFav => console.log(isFav)} price={35.24} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} isShipmentFree={true} isFavorite={false} onFavorite={isFav => console.log(isFav)} price={35.24} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} isShipmentFree={true} isFavorite={false} onFavorite={isFav => console.log(isFav)} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} isShipmentFree={true} isFavorite={false} onFavorite={isFav => console.log(isFav)} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} isShipmentFree={true} isFavorite={false} onFavorite={isFav => console.log(isFav)} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} isShipmentFree={true} isFavorite={false} onFavorite={isFav => console.log(isFav)} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} isShipmentFree={true} isFavorite={false} onFavorite={isFav => console.log(isFav)} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} isShipmentFree={true} isFavorite={false} onFavorite={isFav => console.log(isFav)} price={35} />,
    ]

    useEffect(() => {
        dispatch(getArticles(4))
        dispatch(getFavorites({ limit: 10, page: 1 }))
    }, [isLogged])


    return loading && _loading ? (
        <div className='-mt-14'>
            <div className='flex justify-center items-center h-screen'>
                <div className='mx-auto my-52 w-14 h-14 border-blue-500 border-t-4 border-r-border-t-4 rounded-full animate-spin' />
            </div>
        </div>
    ) : (
        <>
            <BannerSlider />
            <div className='w-9/12 mx-auto my-5'>
                {[
                    !_loading && _success && _results.length && (
                        <div className="mb-5" key={476}>
                            <ProductsSlider 
                                title='De tus favoritos' 
                                itemsPerView={_results.length <= 5 ? _results.length : 5} 
                                hasNavigation={_results.length > 5}
                                cards={
                                    _results.map((result, j) => (
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
                                                dispatch(getFavorites({ limit: 5, page: 1 }))
                                            }} 
                                        />
                                    ))
                                }
                            />
                        </div>
                    ),
                    loading && (
                        <h2 key={45}>Cargando...</h2>
                    ),
                    !loading && success && results.length &&  (
                        results.map((result, i) => (
                            <div className="mb-5" key={i}>
                                <ProductsSlider 
                                    title={result.category} 
                                    itemsPerView={result.articles.length <= 5 ? result.articles.length : 5} 
                                    hasNavigation={result.articles.length > 5}
                                    cards={
                                        result.articles.map((article, j) => (
                                            <Card1 
                                                key={j}
                                                linkTo={`/article?id=${article.id}`}
                                                title={article.title}
                                                image={article.pictures[0].link} 
                                                isShipmentFree={article.shipmentFree} 
                                                price={article.price} 
                                                isFavorite={article.isFavorite}
                                                onFavorite={isFav => toggleFavoriteRequest(article.id)} 
                                            />
                                        ))
                                    }
                                />
                            </div>
                        ))
                    )
                ]}
                <div className='flex mb-10'>
                    <Card2 linkTo='/search?category=Electrodomésticos' title='electrodomésticos' image={electrodomesticos} />
                    <Card2 linkTo='/search?category=TV, Audio y Video' className='ml-3' title='tv y audio' image={tvYAudio} />
                    <Card2 linkTo='/search?category=Celulares y Teléfonos' className='ml-3' title='celulares' image={celulares} />
                    <Card2 linkTo='/search?category=Computación' className='ml-3' title='computación' image={computacion} />
                </div>
                <div className='flex mb-10'>
                    <Card2 linkTo='/search?category=Limpieza' title='Limpieza' image={limpieza} />
                    <Card2 linkTo='/search?category=Mascotas' className='ml-3' title='mascotas' image={mascotas} />
                    <Card2 linkTo='/search?category=Alimentos' className='ml-3' title='alimentos' image={alimentos} />
                </div>
                <ProductsSlider 
                    cards={cards} 
                    title='Esto también te puede interesar.' 
                    itemsPerView={5} 
                    hasNavigation={true}
                />
            </div>
        </>
    )

    // return (
    //     <>
    //         <BannerSlider />
    //         <div className='w-9/12 mx-auto my-5'>
    //             {[
    //                 !_loading && _success && _results.length && (
    //                     <div className="mb-5" key={476}>
    //                         <ProductsSlider 
    //                             title='De tus favoritos' 
    //                             itemsPerView={_results.length <= 5 ? _results.length : 5} 
    //                             hasNavigation={_results.length > 5}
    //                             cards={
    //                                 _results.map((result, j) => (
    //                                     <Card1 
    //                                         key={result.id}
    //                                         linkTo={result.link}
    //                                         title={result.article.title}
    //                                         image={result.article.pictures[0].link} 
    //                                         isShipmentFree={result.article.shipmentFree} 
    //                                         price={result.article.price} 
    //                                         isFavorite={true}
    //                                         onFavorite={isFav => {
    //                                             toggleFavoriteRequest(result.article.id)
    //                                             dispatch(getFavorites({ limit: 5, page: 1 }))
    //                                         }} 
    //                                     />
    //                                 ))
    //                             }
    //                         />
    //                     </div>
    //                 ),
    //                 loading && (
    //                     <h2 key={45}>Cargando...</h2>
    //                 ),
    //                 !loading && success && results.length &&  (
    //                     results.map((result, i) => (
    //                         <div className="mb-5" key={i}>
    //                             <ProductsSlider 
    //                                 title={result.category} 
    //                                 itemsPerView={result.articles.length <= 5 ? result.articles.length : 5} 
    //                                 hasNavigation={result.articles.length > 5}
    //                                 cards={
    //                                     result.articles.map((article, j) => (
    //                                         <Card1 
    //                                             key={j}
    //                                             linkTo={`/article?id=${article.id}`}
    //                                             title={article.title}
    //                                             image={article.pictures[0].link} 
    //                                             isShipmentFree={article.shipmentFree} 
    //                                             price={article.price} 
    //                                             isFavorite={article.isFavorite}
    //                                             onFavorite={isFav => toggleFavoriteRequest(article.id)} 
    //                                         />
    //                                     ))
    //                                 }
    //                             />
    //                         </div>
    //                     ))
    //                 )
    //             ]}
    //             <div className='flex mb-10'>
    //                 <Card2 linkTo='#' title='electrodomésticos' image={electrodomesticos} />
    //                 <Card2 linkTo='#' className='ml-3' title='tv y audio' image={tvYAudio} />
    //                 <Card2 linkTo='#' className='ml-3' title='celulares' image={celulares} />
    //                 <Card2 linkTo='#' className='ml-3' title='computación' image={computacion} />
    //             </div>
    //             <div className='flex mb-10'>
    //                 <Card2 linkTo='#' title='Limpieza' image={limpieza} />
    //                 <Card2 linkTo='#' className='ml-3' title='mascotas' image={mascotas} />
    //                 <Card2 linkTo='#' className='ml-3' title='alimentos' image={alimentos} />
    //             </div>
    //             <ProductsSlider 
    //                 cards={cards} 
    //                 title='Esto también te puede interesar.' 
    //                 itemsPerView={5} 
    //                 hasNavigation={true}
    //             />
    //         </div>
    //     </>
    // )
}