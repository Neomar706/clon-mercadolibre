import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    loading: false,
    success: false,
    result: {}
}


export const filterArticles = createAsyncThunk('filterArticles', async (data, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue, getState } = thunkAPI

    const categoriesCount = {}
    const locationsCount = {}
    const conditionCount = { 
        Nuevo: 0,
        Usado: 0
    }
    const shipmentCostCount = {
        Gratis: 0
    }

    const successResponse = function(res){
        const data = res.data.result
        
        data.articles.forEach(article => {
            article.categories.forEach(cat => {
                if(!Object.keys(categoriesCount).includes(cat.category)) categoriesCount[cat.category] = 1
                else categoriesCount[cat.category]++
            })

            if(!Object.keys(locationsCount).includes(article.user.addresses[0].state)) locationsCount[article.user.addresses[0].state] = 1
            else locationsCount[article.user.addresses[0].state]++

            if(article.isNew) conditionCount.Nuevo++
            else conditionCount.Usado++
            
            if(article.shipmentFree) shipmentCostCount.Gratis++
        })
        
        const ret = {
            counters: {
                articlesCount: data.articlesQuantity,
                categoriesCount,
                locationsCount,
                conditionCount,
                shipmentCostCount
            },
            articles: data.articles
        }

        return fulfillWithValue({
            success: data.success,
            result: ret
        })
    }

    let strQuery = `${process.env.BACKEND_HOST}/api/v1/article/search?`
    for(let key in data) strQuery += `${key}=${data[key]}&`

    if(getState().user.isLogged) strQuery += `&userId=${getState().user.result.user.id}`

    return axios
        .get(strQuery)
        .then(successResponse)
        .catch(err => rejectWithValue(err.response.data))
})


const filterArticlesPending = function(state, _){
    state.loading = true
    state.success = false
    state.result = {}
}

const filterArticlesFulfilled = function(state, { payload }){
    state.loading = false
    state.success = true
    state.result = payload?.result
}

const filterArticlesRejected = function(state, { payload }){
    state.loading = false
    state.success = false,
    state.result = {}
}


const filterArticlesSlice = createSlice({
    name: 'filterArticles',
    initialState,
    extraReducers(builder){
        builder
            .addCase(filterArticles.pending, filterArticlesPending)
            .addCase(filterArticles.fulfilled, filterArticlesFulfilled)
            .addCase(filterArticles.rejected, filterArticlesRejected)
    }
})


export const filterArticlesReducer = filterArticlesSlice.reducer
export const filterArticlesSelector = state => state.filterArticles