import { createSlice } from '@reduxjs/toolkit';
import state from './state';

const tagsSlice = createSlice({
  name: 'createPostTags',
  initialState: state,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSelectedTags: (state, action) => {
      state.selectedTags = action.payload;
    },
    setAllTags: (state, action) => {
      state.allTags = action.payload;
    },
  },
});

export const { setLoading, setError, setSelectedTags, setAllTags } =
  tagsSlice.actions;
export const actions = tagsSlice.actions;
export const tagsReducer = tagsSlice.reducer;
