import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const gameSlice = createSlice({
    name: 'game',
    initialState: {
    },
    reducers: {
        setUser(state, payload) {

        }
    }
})

export default gameSlice.reducer;

export const {
    setUser,
} = gameSlice.actions