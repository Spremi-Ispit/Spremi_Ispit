import { createSlice } from '@reduxjs/toolkit';
import state from './state';

const loginSlice = createSlice({
  name: 'login',
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

export const actions = loginSlice.actions;
export const { setLoading, setError } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
