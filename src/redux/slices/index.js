import { combineReducers } from '@reduxjs/toolkit'

import { categoryReducer } from './categorySlice'
import { userReduder } from './userSlice'
import { articleReducer } from './articlesSlice'
import { publishArticleReducer } from './publishArticleSlice'
import { updateUserReducer } from './updateUserSlice'
import { updatePasswordReducer } from './updatePasswordSlice'
import { getAddressReducer } from './getAddressSlice'
import { addAddressReducer } from './addAddressSlice'

export const rootReducer = combineReducers({
    user: userReduder,
    category: categoryReducer,
    article: articleReducer,
    publishArticle: publishArticleReducer,
    updateUser: updateUserReducer,
    updatePassword: updatePasswordReducer,
    getAddress: getAddressReducer,
    addAddress: addAddressReducer
})