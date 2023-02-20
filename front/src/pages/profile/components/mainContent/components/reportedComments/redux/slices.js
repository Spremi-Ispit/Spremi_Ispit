import { createSlice } from '@reduxjs/toolkit';
import state from './state';

const commentsSlice = createSlice({
  name: 'profileComments',
  initialState: state,
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
