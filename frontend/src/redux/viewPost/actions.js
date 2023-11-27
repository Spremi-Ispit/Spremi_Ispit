import { viewPostSlice } from './slice';

const actions = viewPostSlice.actions;

export const actionCreator = {
  setPostLoading: (value) => (dispatch, getState) => {
    dispatch(actions.setPostLoading(value));
  },
  setNextPost: (value) => (dispatch, getState) => {
    dispatch(actions.setNextPost(value));
  },
  setPrevPost: (value) => (dispatch, getState) => {
    dispatch(actions.setPrevPost(value));
  },
  setCommentsLoading: (value) => (dispatch, getState) => {
    dispatch(actions.setCommentsLoading(value));
  },
};
