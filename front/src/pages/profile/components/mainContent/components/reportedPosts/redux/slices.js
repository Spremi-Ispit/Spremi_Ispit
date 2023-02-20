import { createSlice } from '@reduxjs/toolkit';
import state from './state';

const postsSlice = createSlice({
  name: 'profilePosts',
  initialState: state,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const actions = postsSlice.actions;
export const { setLoading, setError, setPosts, setOrder } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
