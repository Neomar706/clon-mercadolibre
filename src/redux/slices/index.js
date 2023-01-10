import { combineReducers } from '@reduxjs/toolkit'

import { categoryReducer } from './categorySlice'
import { userReduder } from './userSlice'
import { articleReducer } from './articlesSlice'
import { publishArticleReducer } from './publishArticleSlice'

export const rootReducer = combineReducers({
    user: userReduder,
    category: categoryReducer,
    article: articleReducer,
    publishArticle: publishArticleReducer
})