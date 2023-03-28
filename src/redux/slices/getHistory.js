import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

/**
 * ********************* Get History *********************
 */

const initialState = {
    loading: false,
    success: false,
    message: '',
    count: 0,
    results: []
}


export const getHistory = createAsyncThunk('history/getHistory', async (data, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue } = thunkAPI
    const { limit, page } = data

    let url = `${process.env.BACKEND_HOST}/api/v1/history/all`
    if(limit) url += `?limit=${limit}`
    if(page) url += `&page=${page}`

    return axios
        .get(url, { withCredentials: true })
        .then(res => fulfillWithValue(res.data))
        .catch(err => rejectWithValue(err.response.date))
})

const getHistoryPending = function(state, _){
    state.loading = true
    state.success = false
    state.message = ''
    state.count = 0
    state.results = []
}

const getHistoryFulfilled = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = '',
    state.count = payload?.result?.count
    state.results = payload?.result.histories
}

const getHistoryRejected = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = payload?.message
    state.count = 0
    state.results = []
}

const getHistorySlice = createSlice({
    name: 'getHistory',
    initialState,
    extraReducers(builder){
        builder
            .addCase(getHistory.pending, getHistoryPending)
            .addCase(getHistory.fulfilled, getHistoryFulfilled)
            .addCase(getHistory.rejected, getHistoryRejected)
    }
})

export const getHistoryReducer = getHistorySlice.reducer
export const getHistorySelector = state => state.getHistory