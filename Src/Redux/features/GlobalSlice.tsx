import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
  isLoggedIn: Boolean;
}

const initialState: CounterState = {
  isLoggedIn: false,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    isLoggedIn: state => {
      state.isLoggedIn = true;
    },
  },
});

export const {isLoggedIn} = counterSlice.actions;

export default counterSlice.reducer;
