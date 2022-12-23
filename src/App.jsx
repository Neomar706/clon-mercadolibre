import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/organisms/Navbar'

import { Home } from './components/pages/Home'
import { SearchPage } from './components/pages/SearchPage'
import { Article } from './components/pages/Article'

import { useSelector, useDispatch } from 'react-redux'
import { counterSelector, _addOne, _subtractOne, _counterSlice } from './redux/slices/counter'


const TestComponent = function({  }){
	const dispatch = useDispatch()
	const { count } = useSelector(counterSelector)
	

	const handleClickAdd = () => dispatch(_addOne())

	const handleClickSubtract = () => dispatch(_subtractOne())

	return (
		<>
			<div>{count}</div>
			<div>
				<button className='w-20 h-20 bg-red-200 m-5' onClick={() => handleClickSubtract()}>-</button>
				<button className='w-20 h-20 bg-red-200 m-5' onClick={() => handleClickAdd()}>+</button>
			</div>
		</>
	)
}


export const App = function(){
	return (
		<BrowserRouter>
			<div className='w-full bg-gray-200 pb-20'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/search/:search' element={<SearchPage />} />
					<Route path='/article/:articleName' element={<Article />} />
					<Route path='/test' element={<TestComponent />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}
	