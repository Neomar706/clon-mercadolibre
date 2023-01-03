import { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { me, userSelector } from '../redux/slices/userSlice'

export const ProtectedRoute = function({ isLogged }){
    console.log({isLogged})


    if(!isLogged) return <Navigate to='/' />
    return <Outlet />
}