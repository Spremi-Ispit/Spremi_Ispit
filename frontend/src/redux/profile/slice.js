import { createSlice } from '@reduxjs/toolkit';
import state from './state';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    ...state,
  },
  reducers: {
    setSideNavbarHidden: (state, action) => {
      state.sideNavbarHidden = action.payload;
    },
  },
});
