import { Link, useParams } from 'react-router-dom'

import { Divider } from '../atoms/Divider'

import { Zoom } from '../organisms/Zoom'
import { Card1 } from '../organisms/Card1'
import { Card4 } from '../organisms/Card4'
import { Card5 } from '../organisms/Card5'
import { ProductsSlider } from '../organisms/ProductsSlider'

import compuerta from '../../assets/compuerta.webp'
import compuertaDiagrama from '../../assets/compuerta-diagrama.jpg'
import { FeaturesCard } from '../atoms/FeaturesCard'
import { AskForm } from '../molecules/AskForm'
import { QuestionAnswer } from '../atoms/QuestionAnswer'

import imgMultimetro from '../../assets/img-multimetro.webp'


import nl2br from 'react-nl2br'
export const Article = function({  }){ 
	const text = `****************************************************\nPOR FAVOR LEA LAS CONDICIONES DE VENTA\n****************************************************\n- NO hacemos entregas personales en BARQUISIMETO. \n\n- EL PRODUCTO SOLO PODRÁ SER ENVIADO EL MISMO DÍA SI REALIZA Y CONFIRMA EL PAGO (Y ENVIA LOS DATOS DE ENVIO) ANTES DE LAS 09:00AM.\n\n****************************************************\nCaracterística \n****************************************************\nVoltaje de alimentación: 4,75VDC - 5,25VDC\n\n****************************************************\nUBICACIÓN\n****************************************************\nSomos tienda virtual en la ciudad de Carora, Estado Lara.\n\n****************************************************\nHORARIO DE TRABAJO\n****************************************************\nLaboramos todos los dias de 7:00AM a 12:00PM y de 1:00PM a 9:00PM\n\n****************************************************\nMÉTODOS DE PAGO\n****************************************************\n* Transferencias y/o pago movil\n- Banesco (Pago móvil y transferencia)\n- Banco de Venezuela (Transferencia) \n- Provincial (Transferencia)\n* Divisas \n- Efectivo \n- Binance USDT \n\n****************************************************\nMÉTODOS DE DESPACHO\n****************************************************\n* \n* Envíos a Nivel Nacional\n- MRW \n- TEALCA (Cobro a destino)\n\nCONSULTE DISPONIBILIDAD DEL PRODUCTO ANTES DE OFERTAR. No ofertar si no está seguro de concretar la compra. De no concretarla será CALIFICADO NEGATIVO. Realice todas sus preguntas y amablemente se las responderemos.\n`

	const params = useParams()
	console.log(params)

	const images = [
		{
			id: 1, 
			image: 'https://laurenashpole.github.io/react-inner-image-zoom/images/unsplash-10-large.jpg',
			// image: compuerta,
		},
		{
			id: 2,
			image: 'https://laurenashpole.github.io/react-inner-image-zoom/images/unsplash-10-large.jpg'
			// image: compuertaDiagrama,
		}
	]

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
			<div className='w-9/12 mx-auto mt-10 p-4 *flex grid grid-cols-12 rounded-sm bg-white relative'>
				<div className='grid grid-row-3 col-start-1 col-span-8'>

					<Zoom images={images} />
					<Divider className='mt-12' />

					<div className='w-full h-auto overflow-hidden pr-10 pl-5 mt-10'>
						<h3 className='text-2xl text-gray-700 font-roboto tracking-wide'>Publicaciones del vendedor</h3>
						<ProductsSlider cards={cards} itemsPerView={3} withTitle={false} />
					</div>
					<div className='pr-10 pl-5'>
						<Link to='#' className='text-sm text-blue-500 hover:text-blue-600 mb-4'>Ver más publicaciones del vendedor</Link>
					</div>
					<Divider className='my-10' />

					<div className="pl-5 pr-10">
						<h3 className='text-2xl text-gray-700 font-roboto tracking-wide mb-5'>Características principales</h3>
						<FeaturesCard brand='Genérica' model='SN74LS04N' />
					</div>
					<Divider className='my-10' />

					<div className='w-full my-5 pr-10 pl-5'>
						<div className="">
							<h3 className='text-2xl text-gray-700 font-roboto tracking-wide mb-5'>Descripción</h3>
							<p className='text-lg text-gray-500 font-roboto tracking-wide'>
								{ nl2br(text) }
							</p>
						</div>
					</div>
					<Divider className='my-10' />

					<div className="pl-5 pr-10">
						<h3 className='text-2xl text-gray-700 font-roboto tracking-wide'>Preguntas y respuestas</h3>
						<h4 className='mb-1 text-gray-900 text-lg font-roboto mt-8'>Pregúntale al vendedor</h4>
						<AskForm onSubmit={value => console.log(value)} />

						<h4 className='mb-1 text-gray-900 text-lg font-roboto mt-8'>Últimas realizadas</h4>
						<QuestionAnswer question='Buenos días no tendrás el integrado 0ictmsa002f' answer='Buenas tardes. No lo tenemos' answerDate='15/12/2022' />
						<QuestionAnswer question='Buenos días no tendrás el integrado 0ictmsa002f Lg631 9r 57z2 6ea3k' answer='Buenas tardes. No lo tenemos' answerDate='15/12/2022' />
						<QuestionAnswer question='Buenos días son smd ( montaje superficial) ?? Rekiero 5' answer='Buen dia. No, pcb' answerDate='08/11/2022' />
						<QuestionAnswer question='Disponible 74LS04 y 74LS08? Cuánto tarda el envío?' answer='Disponibles. Depende de la ciudad destino y la empresa de encomiendas. Cumpliendo con las condiciones de la descripción se envia mañana a la agencia de la empresa de encomiendas.' answerDate='26/10/2022' />

					</div>

				</div>
				<div className='grid gap-3 absolute top-4 right-4 col-start-9 col-span-12'>
					<Card4
						isNew={true}
						sold={2}
						isFavorite={true}
						onFavorite={isFav => console.log(isFav)}
						title={params.articleName.replaceAll('+', ' ')}
						price={2.40}
						isShipmentFree={true}
						location='Mun. Libertador (centro), Distrito Capital'
						onQty={qty => console.log(qty)}
						inStock={6}
						onBuy={() => console.log('COMPRADO')}
					/>
					<Card5
						title='Información sobre el vendedor'
						location='Mun. Libertador (centro), Distrito Capital'
						isPlatinum={true}
						recomenderRate={99}
						activeSince='9 días'
						salesAchieved={21}
					/>
				</div>
			</div>
			<div className='w-9/12 mx-auto mt-3 flex'>
				<div className='ml-auto text-sm text-gray-800 font-roboto'>
					Publicación
					<span className='font-medium'> #{ 723481544 }</span>
				</div>
			</div>
			<div className='w-9/12 mx-auto mt-10'>
			<h3 className='text-2xl text-gray-700 font-roboto tracking-wide'>Quienes vieron este producto también compraron</h3>
				<ProductsSlider cards={cards} withTitle={false} itemsPerView={5} />
			</div>
		</>
	)
}