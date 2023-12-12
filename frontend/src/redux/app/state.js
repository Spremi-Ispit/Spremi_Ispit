import {
  keys,
  localStorageManager,
} from '../../utils/managers/LocalStorageManager';

export const userRole = {
  visitor: 'visitor',
  admin: 'admin',
  moderator: 'moderator',
};

export const initialState = {
  token: null,
  role: userRole.visitor,
  username: null,
  welcomeModalViewed: false,
  settingsSidePanelVisible: true,
};

export default localStorageManager.getState(keys.app) ?? initialState;
