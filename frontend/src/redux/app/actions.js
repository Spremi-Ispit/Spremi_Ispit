import { appSlice } from './slice';

const actions = appSlice.actions;

export const actionCreator = {
  setToken: (value) => (dispatch, getState) => {
    dispatch(actions.setToken(value));
  },
  setRole: (value) => (dispatch, getState) => {
    dispatch(actions.setRole(value));
  },
  setEmail: (value) => (dispatch, getState) => {
    dispatch(actions.setEmail(value));
  },
  setUsername: (value) => (dispatch, getState) => {
    dispatch(actions.setUsername(value));
  },
  setWelcomeModalViewed: (value) => (dispatch, getState) => {
    dispatch(actions.setWelcomeModalViewed(value));
  },
  setSettingsSidePanelVisible: (value) => (dispatch, getState) => {
    dispatch(actions.setSettingsSidePanelVisible(value));
  },
};
