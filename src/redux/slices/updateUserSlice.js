import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

import { me } from './userSlice'

const initialState = {
    loading: false,
    success: false,
    message: ''
}


export const updateUser = createAsyncThunk('user/updateUser', async (data, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue, dispatch } = thunkAPI

    const body = {
        name: data.name,
        lastname: data.lastname,
        username: data.username,
        dni: data.dni,
        email: data.email,
        phone: data.phone,
    }

    const successResponse = function(res){
        dispatch(me())
        return fulfillWithValue(res.data)
    }

    return axios
        .put(`${process.env.BACKEND_HOST}/api/v1/user/me/update`, body, { withCredentials: true })
        .then(successResponse)
        .catch(err => rejectWithValue(err.response.data))
})


const updateUserPending = function(state, _){
    state.loading = true
    state.success = false
    state.message = ''
}

const updateUserFulfilled = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = payload?.message

    toast.success(payload?.message, { autoClose: false })
    
}

const updateUserRejected = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = payload?.message

    toast.error(payload?.error, { autoClose: false })
}


const updateUserSlice = createSlice({
    name: 'updateUser',
    initialState,
    extraReducers(builder){
        builder
            .addCase(updateUser.pending, updateUserPending)
            .addCase(updateUser.fulfilled, updateUserFulfilled)
            .addCase(updateUser.rejected, updateUserRejected)
    }
})

export const updateUserReducer = updateUserSlice.reducer
export const updateUserSelector = state => state.updateUser