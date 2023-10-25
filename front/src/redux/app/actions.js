import { appSlice } from './slice';

const actions = appSlice.actions;

export const actionCreator = {
  setToken: (value) => (dispatch, getState) => {
    dispatch(actions.setToken(value));
  },
  setRole: (value) => (dispatch, getState) => {
    dispatch(actions.setRole(value));
  },
  setUsername: (value) => (dispatch, getState) => {
    dispatch(actions.setUsername(value));
  },
};