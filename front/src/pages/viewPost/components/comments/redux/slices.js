import initialState from './state';
import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
  name: 'viewPostComments',
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },

    setComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const actions = commentsSlice.actions;
export const { setLoading, setError, setComments } = commentsSlice.actions;
export const commentsReducer = commentsSlice.reducer;
