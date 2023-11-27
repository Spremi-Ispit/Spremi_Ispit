import {
  keys,
  localStorageManager,
} from '../../utils/managers/LocalStorageManager';

const initialState = {
  loadPromoteUserForm: false,
  loadUsersTable: false,
};

export default localStorageManager.getState(keys.users) ?? initialState;
