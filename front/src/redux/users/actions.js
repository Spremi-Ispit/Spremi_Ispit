import { usersSlice } from './slice';

const actions = usersSlice.actions;

export const actionCreator = {
  setLoadPromoteUserForm: (value) => (dispatch, getState) => {
    dispatch(actions.setLoadPromoteUserForm(value));
  },
  setLoadUsersTable: (value) => (dispatch, getState) => {
    dispatch(actions.setLoadUsersTable(value));
  },
};
