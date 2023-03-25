import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'


const initialState = {
    loading: false,
    success: false,
    message: ''
}


export const addAddress = createAsyncThunk('address/addAddress', async (data, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue } = thunkAPI

    const body = {
        state: data.state,
        city: data.city,
        municipality: data.municipality,
        parish: data.parish,
        street: data.street,
        house_number: data.houseNumber,
        current_address: data.currentAddress
    }

    console.log({body})

    return axios
        .post(`${process.env.BACKEND_HOST}/api/v1/address/new`, body, { withCredentials: true })
        .then(res => fulfillWithValue(res.data))
        .catch(err => rejectWithValue(err.response.data))
})


const addAddressPending = function(state, _){
    state.loading = true
    state.success = false,
    state.message = ''
}

const addAddressFulfilled = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = payload?.message

    toast.success(payload?.message)
}

const addAddressRejected = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = payload?.message

    toast.error(payload?.message, { autoClose: false })
}


const addAddressSlice = createSlice({
    name: 'addAddress',
    initialState,
    extraReducers(builder){
        builder
            .addCase(addAddress.pending, addAddressPending)
            .addCase(addAddress.fulfilled, addAddressFulfilled)
            .addCase(addAddress.rejected, addAddressRejected)
    }
})


export const addAddressReducer = addAddressSlice.reducer
export const addAddressSelector = state => state.addAddress