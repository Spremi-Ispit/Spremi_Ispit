import { jwtDecode } from 'jwt-decode';
import { userRole } from './state';

export const selectToken = (state) => state.app.token;

export const selectRole = (state) =>
  state.app.token ? jwtDecode(state.app.token).role : userRole.visitor;
export const selectEmail = (state) =>
  state.app.token ? jwtDecode(state.app.token).email : null;
export const selectUsername = (state) =>
  state.app.token ? jwtDecode(state.app.token).username : null;
export const selectUserId = (state) =>
  state.app.token ? jwtDecode(state.app.token).id : null;

export const selectWelcomeModalViewed = (state) => state.app.welcomeModalViewed;
export const selectSettingsSidePanelVisible = (state) =>
  state.app.settingsSidePanelVisible;
