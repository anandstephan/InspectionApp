import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
  isLoggedIn: Boolean;
}

const initialState: CounterState = {
  isLoggedIn: false,
};

export const globalSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    isLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {isLoggedIn} = globalSlice.actions;

export default globalSlice.reducer;
