import { homeSlice } from './slice';

const actions = homeSlice.actions;

export const actionCreator = {
  setFiltersVisible: (value) => (dispatch, getState) => {
    dispatch(actions.setFiltersVisible(value));
  },
};
