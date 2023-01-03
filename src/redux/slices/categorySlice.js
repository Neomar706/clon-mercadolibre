import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    success: false,
    message: '',
    result: {},
    results: []
}

export const getCategories = createAsyncThunk('category/getCategories', async (_, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue } = thunkAPI

    return axios
        .get(`${process.env.BACKEND_HOST}/api/v1/category/all`)
        .then(res => fulfillWithValue(res.data))
        .catch(err => rejectWithValue(err.data.response))
})


const getCategoriesPending = function(state, _){
    state.loading = true
    state.success = false
    state.message = ''
    state.result = {}
    state.results = []
}

const getCategoriesFulfilled = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = payload?.message
    state.result = payload?.result || {}
    state.results = payload?.results || []
}

const getCategoriesRejected = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = payload?.message
    state.result = {}
    state.results = []
}

const categorySlice = createSlice({
    name: 'cagetory',
    initialState,
    extraReducers(builder){
        builder
            .addCase(getCategories.pending, getCategoriesPending)
            .addCase(getCategories.fulfilled, getCategoriesFulfilled)
            .addCase(getCategories.rejected, getCategoriesRejected)
    }
})

export const categoryReducer = categorySlice.reducer
export const categorySelector = (state) => state.category