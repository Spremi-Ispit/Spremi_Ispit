import { homeSlice } from './slice';

const actions = homeSlice.actions;

export const actionCreator = {
  setFiltersVisible: (value) => (dispatch, getState) => {
    dispatch(actions.setFiltersVisible(value));
  },
  setPaginationCurrentPage: (value) => (dispatch, getState) => {
    dispatch(actions.setPaginationCurrentPage(value));
  },
  setPaginationPostPerPage: (value) => (dispatch, getState) => {
    dispatch(actions.setPaginationPostPerPage(value));
  },
  setPaginationTotalNumberOfPages: (value) => (dispatch, getState) => {
    dispatch(actions.setPaginationTotalNumberOfPages(value));
  },
  setPaginationTotalNumberOfPosts: (value) => (dispatch, getState) => {
    dispatch(actions.setPaginationTotalNumberOfPosts(value));
  },
};
