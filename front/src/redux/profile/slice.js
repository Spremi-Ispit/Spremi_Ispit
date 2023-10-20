import { createSlice } from '@reduxjs/toolkit';
import state from './state';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    ...state,
  },
  reducers: {
    setProfileView: (state, action) => {
      state.profileView = action.payload;
    },
    setSideNavbarHidden: (state, action) => {
      state.sideNavbarHidden = action.payload;
    },
  },
});
