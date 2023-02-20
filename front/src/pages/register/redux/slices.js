import { createSlice } from '@reduxjs/toolkit';
import state from './state';

const registerSlice = createSlice({
  name: 'register',
  initialState: state,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const actions = registerSlice.actions;
export const { setLoading, setError } = registerSlice.actions;

export const registerReducer = registerSlice.reducer;
