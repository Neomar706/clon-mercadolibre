import { combineReducers } from '@reduxjs/toolkit'

import { categoryReducer } from './categorySlice'
import { userReduder } from './userSlice'
import { articleReducer } from './articlesSlice'

export const rootReducer = combineReducers({
    user: userReduder,
    category: categoryReducer,
    article: articleReducer
})