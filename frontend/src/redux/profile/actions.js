import { profileSlice } from './slice';

const actions = profileSlice.actions;

export const actionCreator = {
  setSideNavbarHidden: (value) => (dispatch, getState) => {
    dispatch(actions.setSideNavbarHidden(value));
  },
};
