import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
  isLoggedIn: Boolean;
}

const initialState: CounterState = {
  value: 0,
  isLoggedIn: false,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    login: state => {
      state.isLoggedIn = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
