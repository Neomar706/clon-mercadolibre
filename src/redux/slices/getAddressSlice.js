import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    loading: false,
    success: false,
    results: [],
    message: ''
}

export const getAddress = createAsyncThunk('address/getAddress', async (_, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue } = thunkAPI

    return axios
        .get(`${process.env.BACKEND_HOST}/api/v1/addresses`, { withCredentials: true })
        .then(res => fulfillWithValue(res.data))
        .catch(err => rejectWithValue(err.response.data))
})


const getAddressPending = function(state, _){
    state.loading = true
    state.success = false
    state.results = []
    state.message = ''
}

const getAddressFulfilled = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.results = payload?.results
    state.message = ''
}

const getAddressRejected = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.results = []
    state.message = payload?.message
}


const getAddressSlice = createSlice({
    name: 'getAddress',
    initialState,
    extraReducers(builder){
        builder
            .addCase(getAddress.pending, getAddressPending)
            .addCase(getAddress.fulfilled, getAddressFulfilled)
            .addCase(getAddress.rejected, getAddressRejected)
    }
})


export const getAddressReducer = getAddressSlice.reducer
export const getAddressSelector = state => state.getAddress