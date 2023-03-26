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


export const Home = function({  }){
    const dispatch = useDispatch()
    const { results, loading, success } = useSelector(articleSelector)
    const { isLogged } = useSelector(userSelector)
    

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

    // if(isLogged) dispatch(getArticles(2))

    useEffect(() => {
    //     console.log({isLogged})
        dispatch(getArticles(4))
    }, [isLogged])

    return (
        <>
            <BannerSlider />
            <div className='w-9/12 mx-auto my-5'>
                {
                    loading 
                    ? <h2>Cargando...</h2>
                    : success && results.map((result, i) => (
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
                }
                <div className='flex mb-10'>
                    <Card2 linkTo='#' title='electrodomésticos' image={electrodomesticos} />
                    <Card2 linkTo='#' className='ml-3' title='tv y audio' image={tvYAudio} />
                    <Card2 linkTo='#' className='ml-3' title='celulares' image={celulares} />
                    <Card2 linkTo='#' className='ml-3' title='computación' image={computacion} />
                </div>
                <div className='flex mb-10'>
                    <Card2 linkTo='#' title='Limpieza' image={limpieza} />
                    <Card2 linkTo='#' className='ml-3' title='mascotas' image={mascotas} />
                    <Card2 linkTo='#' className='ml-3' title='alimentos' image={alimentos} />
                </div>
                <div className='flex mb-10'>
                    <Card2 linkTo='#' title='Limpieza' image={iluminacion} />
                    <Card2 linkTo='#' className='ml-3' title='mascotas' image={herramientas} />
                    <Card2 linkTo='#' className='ml-3' title='alimentos' image={hogarYMuebles} />
                    <Card2 linkTo='#' className='ml-3' title='alimentos' image={oficina} />
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
}