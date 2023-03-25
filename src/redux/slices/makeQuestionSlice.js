import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'
import { getMyQuestions } from './myQuestionsSlice'


/**
 * ****************** Make Questions ****************** 
 */

const initialState = {
    loading: false,
    success: false,
    message: ''
}

export const makeQuestion = createAsyncThunk('question/makeQuestion', async (data, thunkAPI) => {
    const { fulfillWithValue, rejectWithValue, dispatch, getState } = thunkAPI
    const { articleId, link, question } = data

    const url = `${process.env.BACKEND_HOST}/api/v1/question/new?articleId=${articleId}`
    return axios
        .post(url, { link, question }, { withCredentials: true })
        .then(res => fulfillWithValue(res.data))
        .catch(err => rejectWithValue(err.response.data))
})

const makeQuestionPending = function(state, _){
    state.loading = true,
    state.success = false,
    state.message = ''
}

const makeQuestionFilfilled = function(state, { payload }){
    state.loading = false,
    state.success = true,
    state.message = payload?.message

    toast.success(payload?.message)
    
}

const makeQuestionRejected = function(state, { payload }){
    state.loading = false,
    state.success = false,
    state.message = payload?.message

    toast.error(payload.message)
}

const makeQuestionSlice = createSlice({
    name: 'makeQuestion',
    initialState,
    extraReducers(builder){
        builder
            .addCase(makeQuestion.pending, makeQuestionPending)
            .addCase(makeQuestion.fulfilled, makeQuestionFilfilled)
            .addCase(makeQuestion.rejected, makeQuestionRejected)
    }
})

export const makeQuestionReducer = makeQuestionSlice.reducer
export const makeQuestionSelector = state => state.makeQuestion