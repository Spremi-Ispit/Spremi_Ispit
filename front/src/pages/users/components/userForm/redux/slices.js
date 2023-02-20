import { createSlice } from '@reduxjs/toolkit';
import state from './state';

const userFormSlice = createSlice({
  name: 'usersUserFormSlice',
  initialState: state,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const actions = userFormSlice.actions;
export const { setLoading, setError, setAllUsers, setRole } =
  userFormSlice.actions;

export const userFormReducer = userFormSlice.reducer;
