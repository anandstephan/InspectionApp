import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface CounterState {
  isLoggedIn: Boolean;
  profileDetails: Object;
  carFetchData: Object;
  validation: Object;
  todayCount: number;
  missCount: number;
  completedCount: number;
  allCount: number;
  currentTab: string;
}

const initialState: CounterState = {
  isLoggedIn: false,
  profileDetails: {},
  carFetchData: {},
  validation: {},
  todayCount: 0,
  missCount: 0,
  completedCount: 0,
  allCount: 0,
  currentTab: null,
};

export const globalSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    isLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setProfileDetails: (state, action) => {
      state.profileDetails = action.payload;
    },
    setCarFetchData: (state, action) => {
      state.carFetchData = action.payload;
    },
    setValidation: (state, action) => {
      state.validation = action.payload;
    },
    deleteValidationKey: (state, _) => {
      state.validation = {};
    },
    setTodayCount: (state, action) => {
      state.todayCount = action.payload;
    },
    setMissCount: (state, action) => {
      state.missCount = action.payload;
    },
    setCompletedCount: (state, action) => {
      state.completedCount = action.payload;
    },
    setAllCount: (state, action) => {
      state.allCount = action.payload;
    },
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload;
    },
  },
});

export const {
  isLoggedIn,
  setCarFetchData,
  setValidation,
  deleteValidationKey,
  setTodayCount,
  setMissCount,
  setCompletedCount,
  setAllCount,
  setCurrentTab,
} = globalSlice.actions;

export default globalSlice.reducer;
