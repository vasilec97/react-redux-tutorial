import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => state.value += 1,
    decrement: (state) => state.value > 0 ? state.value -= 1 : 0,
    incrementByAmount: (state, action) => state += action.payload, 
  }
})

export const { reducer: counterReducer } = counterSlice;
export const { actions: counterActions } = counterSlice;