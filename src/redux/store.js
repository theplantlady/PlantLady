import { configureStore } from '@reduxjs/toolkit'
import addToCartSlice from './addToCartSlice'
import uiSlice from './uiSlice'

export const store = configureStore({
    reducer: {
        addToCart: addToCartSlice,
        ui: uiSlice
    },
})
