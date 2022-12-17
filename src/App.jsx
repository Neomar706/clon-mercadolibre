import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/organisms/Navbar'
import { Home } from './components/pages/Home'

export const App = function(){
	return (
		<BrowserRouter>
			<div className='w-full pb-5 bg-[#ebebeb]'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}
	