import { createSlice } from '@reduxjs/toolkit';
import state from './state';

export const viewPostSlice = createSlice({
  name: 'viewPost',
  initialState: state,
  reducers: {
    setPostLoading: (state, action) => {
      state.postLoading = action.payload;
    },
    setCommentsLoading: (state, action) => {
      state.commentsLoading = action.payload;
    },
  },
});
