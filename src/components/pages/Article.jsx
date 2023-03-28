import { Link, useLocation } from 'react-router-dom'
import nl2br from 'react-nl2br'
import axios from 'axios'

import { Divider } from '../atoms/Divider'
import { FeaturesCard } from '../atoms/FeaturesCard'
import { QuestionAnswer } from '../atoms/QuestionAnswer'

import { Zoom } from '../organisms/Zoom'
import { Card1 } from '../organisms/Card1'
import { Card4 } from '../organisms/Card4'
import { Card5 } from '../organisms/Card5'
import { ProductsSlider } from '../organisms/ProductsSlider'

import { AskForm } from '../molecules/AskForm'

import { useQuery } from '../../hooks/useQuery'
import imgMultimetro from '../../assets/img-multimetro.webp'


import { getArticleDetails, articleDetailsSelector } from '../../redux/slices/articleDetails'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { userSelector } from '../../redux/slices/userSlice'
import { toggleFavoriteRequest } from '../../utils/toggleFavoriteRequest'
import { articlesByUserIdSelector, getArticlesByUserId } from '../../redux/slices/articlesByUserId'
import { getQuestions, getQuestionsSelector } from '../../redux/slices/questionSlice'
import { makeQuestion, makeQuestionSelector } from '../../redux/slices/makeQuestionSlice'
import { getMyQuestions, getMyQuestionsSelector } from '../../redux/slices/myQuestionsSlice'
import { add2HistoryRequest } from '../../utils/add2HistoryRequest'

export const Article = function({  }){ 
	const query = useQuery()
	const location = useLocation()

	const dispatch = useDispatch()
	const { success, result, loading } = useSelector(articleDetailsSelector)
	const { success: _success, loading: _loading, results } = useSelector(articlesByUserIdSelector)
	const { isLogged, result: { user } } = useSelector(userSelector)
	const { success: __success, loading: __loading, results: _results } = useSelector(getQuestionsSelector)
	const { success: ___success, loading: ___loading, results: __results } = useSelector(getMyQuestionsSelector)
	const _makeQuestion = useSelector(makeQuestionSelector)

	const handleQuestion = function(question){
		dispatch(makeQuestion({
			articleId: result.id,
			link: `/article?id=${result.id}`,
			question
		}))
	}
	
	useEffect(() => {
		dispatch(getArticleDetails(query.id))
	}, [location])

	// useEffect(() => {
	// 	dispatch(getArticleDetails(query.id))
	// }, [isLogged])

	useEffect(() => {
		if(result.userId && result.id)
			dispatch(getArticlesByUserId({
				userId: result.userId,
				distinctId: result.id,
				limit: 9 // Opcional. Por defecto es 12
			}))
		if(result.id) {
			dispatch(getQuestions(result.id))
			dispatch(getMyQuestions(result.id))
			add2HistoryRequest(result.id)
		}
	}, [result])

	useEffect(() => {
		if(result.id) dispatch(getMyQuestions(result.id))
	}, [_makeQuestion.success])

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

	return loading 
	? <div>Cargando...</div> 
	: success && (
		<>
			<div className='w-9/12 mx-auto mt-10 p-4 *flex grid grid-cols-12 rounded-sm bg-white relative'>
				<div className='grid grid-row-3 col-start-1 col-span-8'>

					<Zoom images={result.pictures} />
					{_success && (
						<>
							<Divider className='mt-12' />
							<div className='w-full h-auto overflow-hidden pr-10 pl-5 mt-10'>
								<h3 className='text-2xl text-gray-700 font-roboto tracking-wide'>
									{result.userId === user?.id ? 'Otras de mis publicaciones' : 'Publicaciones del vendedor'}
								</h3>
								<ProductsSlider
									itemsPerView={results.length <= 3 ? results.length : 3}
									withTitle={false}
									hasNavigation={results.length > 3}
									cards={results.map((article, i) => (
										<Card1 
											key={i}
											linkTo={`/article?id=${article.id}`}
											title={article.title}
											image={article.pictures[0].link} 
											isShipmentFree={article.shipmentFree} 
											price={article.price} 
											isFavorite={article.isFavorite}
											onFavorite={isFav => toggleFavoriteRequest(article.id)} 
										/>
									))}
								/>
							</div>
							<div className='pr-10 pl-5'>
								<Link to='#' className='text-sm text-blue-500 hover:text-blue-600 mb-4'>
									{result.userId === user?.id ? 'Ver mis publicaciones' : 'Ver más publicaciones del vendedor'}
								</Link>
							</div>
						</>
					)}
					<Divider className='my-10' />
					<div className="pl-5 pr-10">
						<h3 className='text-2xl text-gray-700 font-roboto tracking-wide mb-5'>Características principales</h3>
						<FeaturesCard brand={result.brand} model={result.model} />
					</div>
					<Divider className='my-10' />

					<div className='w-full my-5 pr-10 pl-5'>
						<div className="">
							<h3 className='text-2xl text-gray-700 font-roboto tracking-wide mb-5'>Descripción</h3>
							<p className='text-lg text-gray-500 font-roboto tracking-wide'>
								{nl2br(result.description)}
							</p>
						</div>
					</div>
					<Divider className='my-10' />

					<div className="pl-5 pr-10">
						<h3 className='text-2xl text-gray-700 font-roboto tracking-wide'>Preguntas y respuestas</h3>
						<h4 className='mb-1 text-gray-900 text-lg font-roboto mt-8'>Pregúntale al vendedor</h4>
						<AskForm onSubmit={handleQuestion} />
						
						{/* __results <- pertenecen al slice getMyQuestions */}
						{__results.length ? (
							<>
								<h4 className='mb-1 text-gray-900 text-lg font-roboto mt-8'>
									{__results.length >= 2 ? 'Tus preguntas' : 'Tu pregunta'}
								</h4>

								<div className='w-full bg-gray-100 p-4 rounded-md mt-2'>
									{/* ___loading, ___success, __results <- pertenecen al slice getMyQuestions */}
									{!___loading && ___success && __results.map(q => (
										<QuestionAnswer
											question={q.question}
											answer={q.answer}
											answerDate={new Date(q.answerDate).toLocaleDateString()}
										/>
									))}
								</div>
							</>
						) : null}


						<h4 className='mb-1 text-gray-900 text-lg font-roboto mt-8'>
							{_results.length ? 'Últimas realizadas' : 'Los demás usuarios no han hecho preguntas'}
						</h4>

						{/* __loading, __success, _results <- pertenecen al slice getQuestions */}
						{!__loading && __success && _results.map((q, i) => (
							<QuestionAnswer
								key={i}
								question={q.question}
								answer={q.answer}
								answerDate={new Date(q.answerDate).toLocaleDateString()}
							/>
						))}
					</div>

				</div>
				<div className='grid gap-3 absolute top-4 right-4 col-start-9 col-span-12'>
					<>
						<Card4
							isNew={result.isNew}
							sold={result.purchases.length}
							isFavorite={result.isFavorite}
							onFavorite={isFav => toggleFavoriteRequest(result.id)}
							title={result.title}
							price={result.price}
							isShipmentFree={result.shipmentFree}
							location={result.user.addresses[0].city + ', ' + result.user.addresses[0].state}
							onQty={qty => console.log(qty)}
							inStock={result.stock}
							onBuy={() => console.log('COMPRADO')}
						/>
						<Card5
							title='Información sobre el vendedor'
							location={result.user.addresses[0].city + ', ' + result.user.addresses[0].state}
							isPlatinum={true}
							recomenderRate={99}
							activeSince='9 días'
							salesAchieved={result.user.salesAchieved}
						/>
					</>
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