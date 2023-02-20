import { createSlice } from '@reduxjs/toolkit';

import userForm from '../components/userForm/redux/state';
import {
  userFormReducer,
  actions as userFormActions,
} from '../components/userForm/redux/slices';

import usersTable from '../components/usersTable/redux/state';
import {
  usersTableReducer,
  actions as usersTableActions,
} from '../components/usersTable/redux/slices';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    userForm,
    usersTable,
  },

  extraReducers: (builder) => {
    builder.addCase(userFormActions.setError, (state, action) => {
      state.userForm = userFormReducer(state.userForm, action);
    });
    builder.addCase(userFormActions.setLoading, (state, action) => {
      state.userForm = userFormReducer(state.userForm, action);
    });
    builder.addCase(userFormActions.setRole, (state, action) => {
      state.userForm = userFormReducer(state.userForm, action);
    });
    builder.addCase(userFormActions.setAllUsers, (state, action) => {
      state.userForm = userFormReducer(state.userForm, action);
    });
    builder.addCase(usersTableActions.setError, (state, action) => {
      state.usersTable = usersTableReducer(state.usersTable, action);
    });
    builder.addCase(usersTableActions.setLoading, (state, action) => {
      state.usersTable = usersTableReducer(state.usersTable, action);
    });
    builder.addCase(usersTableActions.setUsers, (state, action) => {
      state.usersTable = usersTableReducer(state.usersTable, action);
    });
  },
});

export const usersReducer = usersSlice.reducer;
