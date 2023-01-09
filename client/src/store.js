import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './theme_toggle'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})