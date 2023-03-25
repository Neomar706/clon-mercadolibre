import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'


const initialState = {
    loading: false,
    success: false,
    message: ''
}


export const publishArticle = createAsyncThunk('article/publishArticle', async (data, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue } = thunkAPI

    const body = {
        title: data.title,
        brand: data.brand,
        model: data.model,
        isNew: data.isNew,
        shipmentFree: data.isShipmentFree,
        stock: Number(data.stock),
        price: Number(data.price),
        daysWarranty: Number(data.warranty),
        description: data.description,
        categories: data.categories,
        images: data.images
    }

    return axios
        .post(`${process.env.BACKEND_HOST}/api/v1/article/new`, body, { withCredentials: true })
        .then(res => fulfillWithValue(res.data))
        .catch(err => rejectWithValue(err.response.data))
})

const publishArticlePending = function(state, _){
    state.loading = true
    state.success = false
    state.message = ''
}

const publishArticleFulfilled = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = payload?.message

    toast.success(payload?.message)
}

const publishArticleRejected = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = payload?.message

    toast.error(payload?.message)
}


const publishArticleSlice = createSlice({
    name: 'publishArticle',
    initialState,
    extraReducers(builder){
        builder
            .addCase(publishArticle.pending, publishArticlePending)
            .addCase(publishArticle.fulfilled, publishArticleFulfilled)
            .addCase(publishArticle.rejected, publishArticleRejected)
    }
})

export const publishArticleReducer = publishArticleSlice.reducer
export const publishArticleSelector = (state) => state.publishArticle