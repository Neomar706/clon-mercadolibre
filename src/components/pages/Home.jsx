import { Navbar } from '../organisms/Navbar'
import { Slider } from '../organisms/Slider'
import { ProductsSlider } from '../organisms/ProductsSlider'
import { Card2 } from '../organisms/Card2'


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


export const Home = function({  }){
    return (
        <>
            <Slider />
            <div className='w-9/12 m-auto my-5'>
                <ProductsSlider title='Basado en tu última búsqueda.' />
                <ProductsSlider title='De tu historial.' />
                <ProductsSlider title='Basado en tus búsquedas de: Computación.' />
                <ProductsSlider title='Basado en tus búsquedas de: Papelería.' />
                <ProductsSlider title='Basado en tus búsquedas de: Alimentos.' />
                <ProductsSlider title='Basado en tus búsquedas de: Moda.' />
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
                <ProductsSlider title='Esto también te puede interesar.' />
            </div>
        </>
    )
}