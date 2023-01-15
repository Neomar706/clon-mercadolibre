import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'


const initialState = {
    loading: false,
    success: false,
    message: ''
}


export const updatePassword = createAsyncThunk('user/updatePassword', async (data, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue } = thunkAPI

    const body = {
        old_password: data.oldPassword,
        new_password: data.newPassword,
        confirm_password: data.confirmPassword
    }

    const successResponse = function(res){
        data.navigate('/account/profile')
        return fulfillWithValue(res.data)
    }

    return axios
        .patch(`${process.env.BACKEND_HOST}/api/v1/user/password/update`, body, { withCredentials: true })
        .then(successResponse)
        .catch(err => rejectWithValue(err.response.data))
})


const updatePasswordPending = function(state, _){
    state.loading = true
    state.success = false
    state.message = ''
}

const updatePasswordFulfilled = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = payload?.message

    toast.success(payload?.message, { autoClose: false })
}

const updatePasswordRejected = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = payload?.message

    toast.error(payload?.message, { autoClose: false })
}


const updatePasswordSlice = createSlice({
    name: 'updatePassword',
    initialState,
    extraReducers(builder){
        builder
            .addCase(updatePassword.pending, updatePasswordPending)
            .addCase(updatePassword.fulfilled, updatePasswordFulfilled)
            .addCase(updatePassword.rejected, updatePasswordRejected)
    }
})


export const updatePasswordReducer = updatePasswordSlice.reducer
export const updatePasswordSelector = state => state.updatePassword