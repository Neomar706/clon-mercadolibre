import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


/**
 * ****************** Get Questions ****************** 
 */

const initialState = {
    loading: false,
    success: false,
    message: '',
    results: []
}

export const getQuestions = createAsyncThunk('question/getQuestions', async (id, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue, getState } = thunkAPI

    let url = `${process.env.BACKEND_HOST}/api/v1/question/all?articleId=${id}`
    if(getState().user.isLogged) url += `&userId=${getState().user.result.user.id}`
    return axios
        .get(url, { withCredentials: true })
        .then(res => fulfillWithValue(res.data))
        .catch(err => rejectWithValue(err.response.data))
})


const getQuestionsPending = function(state, _){
    state.loading = true
    state.success = false
    state.message = ''
    state.results = []
}

const getQuestionsFulfilled = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = ''
    state.results = payload?.results
}

const getQuestionRejected = function(state, { payload }){
    state.loading = false
    state.success = false
    state.message = payload?.message
    state.results = []
}

const questionSlice = createSlice({
    name: 'getQuestions',
    initialState,
    extraReducers(builder){
        builder
            .addCase(getQuestions.pending, getQuestionsPending)
            .addCase(getQuestions.fulfilled, getQuestionsFulfilled)
            .addCase(getQuestions.rejected, getQuestionRejected)
    }
})

export const getQuestionsReducer = questionSlice.reducer
export const getQuestionsSelector = state => state.getQuestions