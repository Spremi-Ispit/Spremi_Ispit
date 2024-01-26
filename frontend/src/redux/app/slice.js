import { createSlice } from '@reduxjs/toolkit';
import state from './state';

export const appSlice = createSlice({
  name: 'app',
  initialState: state,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setWelcomeModalViewed: (state, action) => {
      state.welcomeModalViewed = action.payload;
    },
    setSettingsSidePanelVisible: (state, action) => {
      state.settingsSidePanelVisible = action.payload;
    },
  },
});
