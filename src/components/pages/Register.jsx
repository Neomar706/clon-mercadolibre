import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RegisterForm } from '../molecules/RegisterForm'

import { register } from '../../redux/slices/userSlice'

export const Register = function({  }){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRegister = function(data){
        dispatch(register({ ...data, navigate }))
    }

    return (
        <div className='w-1/2 mx-auto'>
            <RegisterForm onGetData={handleRegister} />
        </div>
    )
}