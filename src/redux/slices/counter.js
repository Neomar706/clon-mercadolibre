import { createSlice } from '@reduxjs/toolkit'


export const initialState = {
    count: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addOne: function(state, action){
            console.log('AVISAME')
            state.count = state.count + 1
        },
        subtractOne: function(state, action){
            console.log('AVISAME')
            state.count = state.count - 1
        },
        addN: function(state, action){
            state = state + action.payload
        },
        subtractN: function(state, action){
            state = state - action.payload
        }
    }
})

const {
    addOne,
    subtractOne,
    addN,
    subtractN,
} = counterSlice.actions

export const counterSelector = (state) => state.counter
export const counterReducer = counterSlice.reducer
export const _counterSlice = counterSlice


export const _addOne = () => (dispatch) => {
    dispatch(addOne())
}

export const _subtractOne = () => (dispatch) => {
    dispatch(subtractOne())
}

export const _addN = (n) => (dispatch) => {
    dispatch(addN(n))
}

export const _subtractN = (n) => (dispatch) => {
    dispatch(subtractN(n))
}