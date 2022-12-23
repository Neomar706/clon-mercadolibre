import { BannerSlider } from '../organisms/BannerSlider'
import { ProductsSlider } from '../organisms/ProductsSlider'
import { Card2 } from '../organisms/Card2'
import { Card1 } from '../organisms/Card1'

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


export const Home = function({  }){

    const cards = [
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35.24} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35.24} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
        <Card1 linkTo='#' title='Tester Multímetro Capacímetro Digital 40mf Uni-t Ut136b+' image={imgMultimetro} price={35} />,
    ]


    return (
        <>
            <BannerSlider />
            <div className='w-9/12 mx-auto my-5'>
                <div className="mb-5">
                    <ProductsSlider cards={cards} title='Basado en tu última búsqueda.' itemsPerView={5} />
                </div>
                <div className="mb-5">
                    <ProductsSlider cards={cards} title='De tu historial.' itemsPerView={5} />
                </div>
                <div className="mb-5">
                    <ProductsSlider cards={cards} title='Basado en tus búsquedas de: Computación.' itemsPerView={5} />
                </div>
                <div className="mb-5">
                    <ProductsSlider cards={cards} title='Basado en tus búsquedas de: Papelería.' itemsPerView={5} />
                </div>
                <div className="mb-5">
                    <ProductsSlider cards={cards} title='Basado en tus búsquedas de: Alimentos.' itemsPerView={5} />
                </div>
                <div className="mb-5">
                    <ProductsSlider cards={cards} title='Basado en tus búsquedas de: Moda.' itemsPerView={5} />
                </div>
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
                <ProductsSlider cards={cards} title='Esto también te puede interesar.' />
            </div>
        </>
    )
}