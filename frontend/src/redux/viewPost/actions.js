import { viewPostSlice } from './slice';

const actions = viewPostSlice.actions;

export const actionCreator = {
  setPostLoading: (value) => (dispatch, getState) => {
    dispatch(actions.setPostLoading(value));
  },
  setCommentsLoading: (value) => (dispatch, getState) => {
    dispatch(actions.setCommentsLoading(value));
  },
};
