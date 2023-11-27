import { createSlice } from '@reduxjs/toolkit';
import state from './state';

export const usersSlice = createSlice({
  name: 'users',
  initialState: state,
  reducers: {
    setLoadPromoteUserForm: (state, action) => {
      state.loadPromoteUserForm = action.payload;
    },
    setLoadUsersTable: (state, action) => {
      state.loadUsersTable = action.payload;
    },
  },
});
