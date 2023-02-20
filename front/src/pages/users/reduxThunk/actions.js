import {
  setError as setErrorUsersTable,
  setLoading as setLoadingUsersTable,
  setUsers,
} from '../components/usersTable/redux/slices';
import {
  setError as setErrorUserForm,
  setLoading as setLoadingUserForm,
  setAllUsers,
} from '../components/userForm/redux/slices';
import {
  loadUserAndLikesRepository,
  loadUsernamesWithRolesRepository,
  updateUserRoleRepository,
} from '../repository/users';

import serialize from '../../../utils/serialize';

export const loadUserAndLikes = () => async (dispatch, getState) => {
  try {
    dispatch(setLoadingUsersTable(true));
    const usersAndLikes = await loadUserAndLikesRepository();
    dispatch(setUsers(usersAndLikes));
  } catch (err) {
    dispatch(setErrorUsersTable(serialize(err)));
  } finally {
    dispatch(setLoadingUsersTable(false));
  }
};

export const loadUsernamesWithRoles = () => async (dispatch, getState) => {
  try {
    dispatch(setLoadingUserForm(true));
    const usernamesWithRoles = await loadUsernamesWithRolesRepository();
    dispatch(setAllUsers(usernamesWithRoles));
  } catch (err) {
    dispatch(setErrorUserForm(serialize(err)));
  } finally {
    dispatch(setLoadingUserForm(false));
  }
};

export const updateUserRole = (email, role) => async (dispatch, getState) => {
  try {
    const DTO = {
      email,
      role,
    };

    dispatch(setLoadingUserForm(true));
    await updateUserRoleRepository(DTO);
    dispatch(loadUserAndLikes());
    dispatch(loadUsernamesWithRoles());
  } catch (err) {
    dispatch(setErrorUserForm(serialize(err)));
  } finally {
    dispatch(setLoadingUserForm(false));
  }
};
