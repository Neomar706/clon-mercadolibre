import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { toast } from 'react-toastify'


const initialState = {
    loading: false,
    success: false,
    result: {},
    message: '',
    isLogged: false
}


export const login = createAsyncThunk('user/login', async ({ username, password }, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue } = thunkAPI

    return axios
        .post(`${process.env.BACKEND_HOST}/api/v1/auth/signin`, { username, password }, { withCredentials: true })
        .then(res => fulfillWithValue(res.data))
        .catch(err => rejectWithValue(err.response.data))
})


export const register = createAsyncThunk('user/register', async ({ name, lastname, username, dni, email, phone, password, navigate }, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue } = thunkAPI

    return axios
        .post(`${process.env.BACKEND_HOST}/api/v1/auth/signup`, { name, lastname, username, dni, email, phone, password }, { withCredentials: true })
        .then(res => fulfillWithValue({ ...res.data, navigate }))
        .catch(err => rejectWithValue(err.response.data))
})


export const me = createAsyncThunk('user/me', async (_, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue } = thunkAPI

    return axios
        .get(`${process.env.BACKEND_HOST}/api/v1/user/me`, { withCredentials: true })
        .then(res => fulfillWithValue(res.data))
        .catch(err => rejectWithValue(err.response.data))
})


export const logout = createAsyncThunk('user/logout', async (_, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue } = thunkAPI

    return axios
        .get(`${process.env.BACKEND_HOST}/api/v1/auth/signout`, { withCredentials: true })
        .then(res => fulfillWithValue(res.data))
        .catch(err => rejectWithValue(err.response.data))
    
})


export const forgotPassword = createAsyncThunk('user/forgotPassword', async ({ email }, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue } = thunkAPI

    return axios
        .post(`${process.env.BACKEND_HOST}/api/v1/auth/password/forgot`, { email }, { withCredentials: true })
        .then(res => fulfillWithValue(res.data))
        .catch(err => rejectWithValue(err.response.data))
    
})



export const resetPassword = createAsyncThunk('user/resetPassword', async ({ password, confirmPassword, token, navigate }, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue } = thunkAPI

    console.log({ password, confirmPassword, token, navigate })

    const data = { 
        password,
        confirm_password: confirmPassword,
        token
    }

    return axios
        .patch(`${process.env.BACKEND_HOST}/api/v1/auth/password/reset`, data, { withCredentials: true })
        .then(res => fulfillWithValue({ ...res.data, navigate }))
        .catch(err => rejectWithValue(err.response.data))
})


const userPending = function(state, _){
    state.success = false
    state.loading = true
    state.result = {}
    state.message = ''
    state.isLogged = false
}

const userFulfilled = function(state, { payload }){
    state.success = payload?.success
    state.loading = false
    state.result = payload?.result
    state.message = ''
    state.isLogged = true
}

const userRejected = function(state, { payload }){
    state.success = payload?.success
    state.loading = false
    state.result = {}
    state.message = payload?.message
    state.isLogged = false
}

const loginRejected = function(state, { payload }){
    state.success = payload?.success
    state.loading = false
    state.result = {}
    state.message = payload?.message
    state.isLogged = false

    toast.error(payload?.message)
}

const registerPending = function(state, _){
    state.success = false
    state.loading = true
    state.result = {}
    state.message = ''
    state.isLogged = false
}

const registerFulfilled = function(state, { payload }){
    state.success = payload?.success
    state.loading = false
    state.result = {}
    state.message = payload?.message
    state.isLogged = false

    payload?.navigate('/login')
    toast.success(payload?.message)
}

const registerRejected = function(state, { payload }){
    state.success = payload?.success
    state.loading = false
    state.result = {}
    state.message = payload?.message
    state.isLogged = false

    toast.error(payload?.message)
}

const logoutPending = function(state, _){
    state.success = false
    state.loading = true
    state.message = ''
    state.isLogged = true
}

const logoutFulfilled = function(state, { payload }){
    state.success = payload?.success
    state.loading = false
    state.result = {}
    state.message = payload?.message
    state.isLogged = false

    toast.success(payload?.message)
}

const logoutRejected = function(state, _){
    state.success = false
    state.loading = false
    state.message = 'Se produjo un error al cerrar la sesión'
    state.isLogged = true

    toast.error('Se produjo un error al cerrar la sesión')
}

const forgotPasswordPending = function(state, _){
    state.success = false
    state.loading = true
    state.result = {}
    state.message = ''
    state.isLogged = false
}

const forgotPasswordfulfilled = function(state, { payload }){
    state.success = payload?.success
    state.loading = false
    state.result = {}
    state.message = payload?.message
    state.isLogged = false

    toast.success('Enviamos un enlace de recuperación a tu email.', { autoClose: false })
    toast.success('Si después de un tiempo no llega el correo, pulsa nuevamente en recuperar contraseña.', { autoClose: false })
}

const forgotPasswordRejected = function(state, { payload }){
    state.success = payload?.success
    state.loading = false
    state.result = {}
    state.message = payload?.message
    state.isLogged = false

    toast.error(payload?.message)
}

const resetPasswordPending = function(state, _){
    state.success = false
    state.loading = true
    state.result = {}
    state.message = ''
    state.isLogged = false
}

const resetPasswordFulfilled = function(state, { payload }){
    state.success = payload?.success
    state.loading = false
    state.result = payload?.result
    state.message = ''
    state.isLogged = true

    payload?.navigate('/')
    toast.success('Su contraseña de actualizó con exito.')
}

const resetPasswordRejected = function(state, { payload }){
    state.success = payload?.success
    state.loading = false
    state.result = {}
    state.message = payload?.message
    state.isLogged = false

    toast.error(payload?.message)
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers(builder){
        builder
            .addCase(login.pending, userPending)
            .addCase(login.fulfilled, userFulfilled)
            .addCase(login.rejected, loginRejected)
            .addCase(me.pending, userPending)
            .addCase(me.fulfilled, userFulfilled)
            .addCase(me.rejected, userRejected)
            .addCase(logout.pending, logoutPending)
            .addCase(logout.fulfilled, logoutFulfilled)
            .addCase(logout.rejected, logoutRejected)
            .addCase(register.pending, registerPending)
            .addCase(register.fulfilled, registerFulfilled)
            .addCase(register.rejected, registerRejected)
            .addCase(forgotPassword.pending, forgotPasswordPending)
            .addCase(forgotPassword.fulfilled, forgotPasswordfulfilled)
            .addCase(forgotPassword.rejected, forgotPasswordRejected)
            .addCase(resetPassword.pending, resetPasswordPending)
            .addCase(resetPassword.fulfilled, resetPasswordFulfilled)
            .addCase(resetPassword.rejected, resetPasswordRejected)
    }
})

export const userReduder = userSlice.reducer
export const userSelector = (state) => state.user