import { profileSlice } from './slice';

const actions = profileSlice.actions;

export const actionCreator = {
  setProfileView: (value) => (dispatch, getState) => {
    dispatch(actions.setProfileView(value));
  },
  setSideNavbarHidden: (value) => (dispatch, getState) => {
    dispatch(actions.setSideNavbarHidden(value));
  },
};
