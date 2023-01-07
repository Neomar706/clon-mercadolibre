import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    loading: false,
    success: false,
    message: '',
    results: []
}


export const getArticles = createAsyncThunk('article/getArticles', async (qtyCategories, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue } = thunkAPI

    const distinctOf = []
    const resultsRet = []

    for(let i = 0; i < qtyCategories; i++){
        try {
            const encodeDistinctCategories = distinctOf.length
                ? encodeURIComponent(JSON.stringify(distinctOf))
                : encodeURIComponent(JSON.stringify(['']))
            const url = `${process.env.BACKEND_HOST}/api/v1/articles?distinct_of=${encodeDistinctCategories}`
            const res = await axios.get(url, { withCredentials: true })
            distinctOf.push(res.data.result.category)
            resultsRet.push(res.data.result)
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }

    return fulfillWithValue({
        success: true,
        results: resultsRet
    })
})

const getArticlesPending = function(state, _){
    state.loading = true
    state.success = false
    state.message = ''
    state.results = []
}

const getArticlesFulfilled = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = ''
    state.results = payload?.results
}

const getArticlesRejected = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = payload?.message
    state.results = []
}


const articleSlice = createSlice({
    name: 'article',
    initialState,
    extraReducers(builder){
        builder.addCase(getArticles.pending, getArticlesPending)
        builder.addCase(getArticles.fulfilled, getArticlesFulfilled)
        builder.addCase(getArticles.rejected, getArticlesRejected)
    }
})

export const articleReducer = articleSlice.reducer
export const articleSelector = (state) => state.article