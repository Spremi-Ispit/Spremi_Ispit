import { createSlice } from '@reduxjs/toolkit';
import state from './state';

export const homeSlice = createSlice({
  name: 'home',
  initialState: state,
  reducers: {
    setFiltersVisible: (state, action) => {
      state.filters.visible = action.payload;
    },
    setPaginationCurrentPage: (state, action) => {
      state.pagination.currentPage = action.payload;
    },
    setPaginationPostPerPage: (state, action) => {
      state.pagination.postPerPage = action.payload;
    },
    setPaginationTotalNumberOfPages: (state, action) => {
      state.pagination.totalNumberOfPages = action.payload;
    },
    setPaginationTotalNumberOfPosts: (state, action) => {
      state.pagination.totalNumberOfPosts = action.payload;
    },
  },
});
