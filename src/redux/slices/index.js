import { combineReducers } from "@reduxjs/toolkit";

import { userReduder } from "./userSlice";

export const rootReducer = combineReducers({
    user: userReduder
})