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
  docSection: Object;
  exteriorSection: Object;
  interiorSection: Object;
  engineSection: Object;
  finalSection: Object;
  submitTabStatus: Object;
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
  currentTab: '',
  docSection: {},
  exteriorSection: {},
  interiorSection: {},
  engineSection: {},
  finalSection: {},
  submitTabStatus: {},
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
    setDocSection: (state, action) => {
      const {key, value} = action.payload;
      state.docSection[key] = value;
    },
    setExteriorSection: (state, action) => {
      const {key, value} = action.payload;
      state.exteriorSection[key] = value;
    },
    setEngineSection: (state, action) => {
      const {key, value} = action.payload;
      state.engineSection[key] = value;
    },
    setInteriorSection: (state, action) => {
      const {key, value} = action.payload;
      state.interiorSection[key] = value;
    },
    setFinalSection: (state, action) => {
      const {key, value} = action.payload;
      state.finalSection[key] = value;
    },
    setSubmitTabStatus: (state, action) => {
      const {tabName, loadingStatus} = action.payload;
      state.submitTabStatus[tabName] = loadingStatus;
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
  setDocSection,
  setExteriorSection,
  setEngineSection,
  setInteriorSection,
  setFinalSection,
  setSubmitTabStatus,
} = globalSlice.actions;

export default globalSlice.reducer;
