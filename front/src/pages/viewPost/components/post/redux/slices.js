import initialState from './state';
import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'viewPostPost',
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setPost: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const actions = postSlice.actions;
export const { setLoading, setError, setPost, setLoadPost } = postSlice.actions;
export const postReducer = postSlice.reducer;
