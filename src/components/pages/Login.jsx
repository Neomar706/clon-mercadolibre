import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

import { LoginForm } from '../molecules/LoginForm'
import { login, userSelector } from '../../redux/slices/userSlice'
import { useQuery } from '../../hooks/useQuery'
import { to } from '../../utils/redirect'


export const Login = function({  }){
    const query = useQuery()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading, isLogged } = useSelector(userSelector)

    const handleLogin = function(data){
        dispatch(login(data))
        query.redirect && navigate(to(query.redirect))
    }

    if(loading) return <h1>Cargando...</h1>
    else if(isLogged) return <Navigate to='/' />
    else return (
        <div style={{ height: 'calc(100vh - 100px)' }} className='flex items-center'>
            <LoginForm onGetData={handleLogin} />
        </div>
    )
}