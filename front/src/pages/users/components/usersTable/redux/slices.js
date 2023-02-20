import { createSlice } from '@reduxjs/toolkit';
import state from './state';

const usersTableSlice = createSlice({
  name: 'usersTable',
  initialState: state,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const actions = usersTableSlice.actions;
export const { setLoading, setError, setUsers } = usersTableSlice.actions;

export const usersTableReducer = usersTableSlice.reducer;
