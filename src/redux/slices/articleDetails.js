import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


/**
 * ****************** Get Article Details ****************** 
 */

const initialState = {
    loading: false,
    success: false,
    message: '',
    result: {}
}

export const getArticleDetails = createAsyncThunk('article/articleDetails', async (id, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue, getState } = thunkAPI

    let url = `${process.env.BACKEND_HOST}/api/v1/article/details?id=${id}`
    if(getState().user.isLogged) url += `&userId=${getState().user.result.user.id}`
    
    return axios
        .get(url, { withCredentials: true })
        .then(res => fulfillWithValue(res.data))
        .catch(err => rejectWithValue(err.response.data))
})

const getArticleDetailsPending = function(state, _){
    state.loading = true
    state.success = false
    state.message = ''
    state.result = {}
}

const getArticleDetailsFulfilled = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = ''
    state.result = payload?.result
}

const getArticleDetailsRejected = function(state, { payload }){
    state.loading = false
    state.success = false
    state.message = payload?.message
    state.result = {}
}

const articleDetails = createSlice({
    name: 'articleDetails',
    initialState,
    extraReducers(builder){
        builder.addCase(getArticleDetails.pending, getArticleDetailsPending)
        builder.addCase(getArticleDetails.fulfilled, getArticleDetailsFulfilled)
        builder.addCase(getArticleDetails.rejected, getArticleDetailsRejected)
    }
})


export const articleDetailsReducer = articleDetails.reducer
export const articleDetailsSelector = state => state.articleDetails