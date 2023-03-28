import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/organisms/Navbar'

import { Home } from './components/pages/Home'
import { SearchPage } from './components/pages/SearchPage'
import { Article } from './components/pages/Article'
import { Login } from './components/pages/Login'
import { Register } from './components/pages/Register'
import { Puchases } from './components/pages/Puchases'
import { Publish } from './components/pages/Publish'
import { History } from './components/pages/History'
import { ForgotPassword } from './components/pages/ForgotPassword'
import { ResetPassword } from './components/pages/ResetPassword'
import { MyDetails } from './components/pages/MyDetails'
import { Security } from './components/pages/Security'
import { Address } from './components/pages/Address'
import { Favorites } from './components/pages/Favorites'

import { ProtectedRoute } from './components/ProtectedRoute'

import { me, userSelector } from './redux/slices/userSlice'
import { Profile } from './components/pages/Profile'

export const App = function(){
	const dispatch = useDispatch()
	const { isLogged } = useSelector(userSelector)

	useEffect(() => {
		dispatch(me())
	}, [])

	return (
		<BrowserRouter>
			<div className='w-full bg-gray-200 min-h-screen'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/search' element={<SearchPage />} />
					<Route path='/article' element={<Article />} />
					<Route path='/password/forgot' element={<ForgotPassword />} />
					<Route path='/password/reset' element={<ResetPassword />} />
					<Route element={<ProtectedRoute isLogged={isLogged} />}>
						<Route path='/account/puchases' element={<Puchases />} />
						<Route path='/account/history/:page' element={<History />} />
						<Route path='/account/publish' element={<Publish />} />
						<Route path='/account/profile' element={<Profile />} />
						<Route path='/account/profile/my-details' element={<MyDetails />} />
						<Route path='/account/profile/security' element={<Security />} />
						<Route path='/account/profile/address' element={<Address />} />
						<Route path='/account/favorites/:page' element={<Favorites />} />
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	)
}