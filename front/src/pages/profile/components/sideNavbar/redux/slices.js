import { createSlice } from '@reduxjs/toolkit';
import state from './state';

const sideNavbarSlice = createSlice({
  name: 'profileSideNavbar',
  initialState: state,
  reducers: {
    setProfileView: (state, action) => {
      state.profileView = action.payload;
    },
    setSideNavbarHidden: (state, action) => {
      state.sideNavbarHidden = action.payload;
    },
  },
});

export const { setProfileView, setSideNavbarHidden } = sideNavbarSlice.actions;
export const actions = sideNavbarSlice.actions;
export const sideNavbarReducer = sideNavbarSlice.reducer;
