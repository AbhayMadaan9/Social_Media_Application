import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "light"
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    current_theme: (state) =>{
        if(state.value == "light")
        {
            state.value = "dark"
        }
        else state.value = "light"
    }
  },
})

export const { current_theme } = counterSlice.actions

export default counterSlice.reducer