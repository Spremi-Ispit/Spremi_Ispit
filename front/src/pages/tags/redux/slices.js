import initialState from './state';
import { createSlice } from '@reduxjs/toolkit';

const tagsSlice = createSlice({
  name: 'tags',
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setTags: (state, action) => {
      state.tags = action.payload;
    },
  },
});

export const { setLoading, setError, setTags } = tagsSlice.actions;
export const tagsReducer = tagsSlice.reducer;
