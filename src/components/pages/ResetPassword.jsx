import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { resetPassword } from '../../redux/slices/userSlice'

import { UpdatePasswordForm } from '../molecules/UpdatePasswordForm'

import { useQuery } from '../../hooks/useQuery'


export const ResetPassword = function({  }){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { token } = useQuery()

    const handleUpdatePassword = function(data){
        dispatch(resetPassword({ ...data, token, navigate }))
    }


    return (
        <div style={{ height: 'calc(100vh - 100px)' }} className='flex items-center'>
            <UpdatePasswordForm onGetData={handleUpdatePassword} />
        </div>
    )
}