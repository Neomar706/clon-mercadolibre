import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

/**
 * ****************** My Questions ****************** 
 */

const initialState = {
    loading: false,
    success: false,
    message: '',
    results: []
}

export const getMyQuestions = createAsyncThunk('question/myQuestions', async (id, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue } = thunkAPI

    const url = `${process.env.BACKEND_HOST}/api/v1/question/my-questions?articleId=${id}`
    return axios
        .get(url, { withCredentials: true })
        .then(res => fulfillWithValue(res.data))
        .catch(err => rejectWithValue(err.response.data))
})

const getMyQuestionsPending = function(state, _){
    state.loading = true
    state.success = false
    state.message = ''
    state.results = []
}

const getMyQuestionsFulfilled = function(state, { payload }){
    state.loading = false
    state.success = payload?.success
    state.message = ''
    state.results = payload?.results
}

const getMyQuestionsRejected = function(state, { payload }){
    state.loading = false
    state.success = false
    state.message = payload?.message
    state.results = []
}

const getMyQuestionsSlice = createSlice({
    name: 'myQuestion',
    initialState,
    extraReducers(builder){
        builder
            .addCase(getMyQuestions.pending, getMyQuestionsPending)
            .addCase(getMyQuestions.fulfilled, getMyQuestionsFulfilled)
            .addCase(getMyQuestions.rejected, getMyQuestionsRejected)
    }
})

export const getMyQuestionsReducer = getMyQuestionsSlice.reducer
export const getMyQuestionsSelector = state => state.myQuestions