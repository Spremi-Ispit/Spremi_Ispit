import { appSlice } from './slice';

const actions = appSlice.actions;

export const actionCreator = {
  setToken: (value) => (dispatch, getState) => {
    dispatch(actions.setToken(value));
  },
  setWelcomeModalViewed: (value) => (dispatch, getState) => {
    dispatch(actions.setWelcomeModalViewed(value));
  },
  setSettingsSidePanelVisible: (value) => (dispatch, getState) => {
    dispatch(actions.setSettingsSidePanelVisible(value));
  },
};
