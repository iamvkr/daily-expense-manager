import { configureStore } from '@reduxjs/toolkit'
import datasReducer  from './DataSlice'

export const store = configureStore({
    reducer: {
        datas:datasReducer
    },
})