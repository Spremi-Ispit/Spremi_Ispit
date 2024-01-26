import {
  keys,
  localStorageManager,
} from '../../utils/managers/LocalStorageManager';
import { screens } from '../../utils/useScreens';

export const userRole = {
  visitor: 'visitor',
  admin: 'admin',
  moderator: 'moderator',
};

export const initialState = {
  token: null,
  role: userRole.visitor,
  username: null,
  email: null,
  welcomeModalViewed: false,
  settingsSidePanelVisible: window.screen.width > screens.laptop,
};

export default localStorageManager.getState(keys.app) ?? initialState;
