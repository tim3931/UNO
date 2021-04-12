import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import gameReducer from './slices/gameSlice'


let rootReducer = combineReducers({
    game: gameReducer,

})

export default store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware({ immutableCheck: false })]
})