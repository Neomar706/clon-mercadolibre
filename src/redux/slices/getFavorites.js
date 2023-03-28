import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

/**
 * ********************* Get Favorites *********************
 */

const initialState = {
    loading: false,
    success: false,
    message: '',
    count: 0,
    results: []
}

export const getFavorites = createAsyncThunk('favorite/getFavorites', async (data, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue } = thunkAPI
    const { limit, page } = data

    let url = `${process.env.BACKEND_HOST}/api/v1/favorites`
    if(limit) url += `?limit=${limit}`
    if(page) url += `&page=${page}`

    return axios
        .get(url, { withCredentials: true })
        .then(res => fulfillWithValue(res.data))
        .catch(err => rejectWithValue(err.response.date))
})


const getFavoritesPending = function(state, _){
    state.loading = true
    state.success = false
    state.message = ''
    state.count   = 0
    state.results = []
}

const getFavoritesFulfilled = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = ''
    state.count   = payload?.result?.count
    state.results = payload?.result?.favorites
}

const getFavoritesRejected = function(state, { paylaod }){
    state.loading = false
    state.success = paylaod?.success
    state.message = paylaod?.message
    state.count   = 0
    state.results = []
}


const getFavoritesSlice = createSlice({
    name: 'getFavorites',
    initialState,
    extraReducers(builder){
        builder
            .addCase(getFavorites.pending, getFavoritesPending)
            .addCase(getFavorites.fulfilled, getFavoritesFulfilled)
            .addCase(getFavorites.rejected, getFavoritesRejected)
    }
})


export const getFavoritesReducer = getFavoritesSlice.reducer
export const getFavoritesSelector = state => state.getFavorites