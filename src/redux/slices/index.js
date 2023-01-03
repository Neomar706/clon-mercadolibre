import { combineReducers } from '@reduxjs/toolkit'

import { categoryReducer } from './categorySlice'
import { userReduder } from './userSlice'

export const rootReducer = combineReducers({
    user: userReduder,
    category: categoryReducer
})