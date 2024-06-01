import { createSlice } from '@reduxjs/toolkit';
import state from './state';

export const appSlice = createSlice({
  name: 'app',
  initialState: state,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setWelcomeModalViewed: (state, action) => {
      state.welcomeModalViewed = action.payload;
    },
    setSettingsSidePanelVisible: (state, action) => {
      state.settingsSidePanelVisible = action.payload;
    },
  },
});

export const appActions = appSlice.actions;
