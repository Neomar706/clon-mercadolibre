import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    success: false,
    message: '',
    results: []
}

export const getArticlesByUserId = createAsyncThunk('article/articlesByUserId', async (data, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue } = thunkAPI
    const { userId, limit, distinctId } = data
    let url = `http://localhost:5000/api/v1/articles/by-user?userId=${userId}`
    
    if(limit) url += `&limit=${limit}`
    if(distinctId) url += `&distinctId=${distinctId}`

    console.log({url})

    return axios
        .get(url, { withCredentials: true })
        .then(res => fulfillWithValue(res.data))
        .catch(err => rejectWithValue(err.response.data))
})


const getArticlesByUserIdPending = function(state, _){
    state.loading = true
    state.success = false
    state.message = ''
    state.results = []
}

const getArticlesByUserIdFulfilled = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = ''
    state.results = payload?.results
}

const getArticlesByUserIdRejected = function(state, { payload }){
    state.loading = false
    state.success = false
    state.message = payload?.message
    state.results = []
}

const articlesByUserIdSlice = createSlice({
    name: 'articlesByUserId',
    initialState,
    extraReducers(builder){
        builder
            .addCase(getArticlesByUserId.pending, getArticlesByUserIdPending)
            .addCase(getArticlesByUserId.fulfilled, getArticlesByUserIdFulfilled)
            .addCase(getArticlesByUserId.rejected, getArticlesByUserIdRejected)
    }
})

export const articlesByUserIdReducer = articlesByUserIdSlice.reducer
export const articlesByUserIdSelector = state => state.articlesByUserId