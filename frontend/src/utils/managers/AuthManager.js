import { useDispatch } from 'react-redux';
import { initialState } from '../../redux/app/state';
import { useAppActions } from '../../redux/useAppActions';

export class AuthManager {
  #dispatch;
  #setToken;
  #setRole;
  #setUsername;

  constructor(dispatch) {
    const { appActions } = useAppActions(dispatch);
    const { setToken, setRole, setUsername } = appActions;

    this.#setToken = setToken;
    this.#setRole = setRole;
    this.#setUsername = setUsername;
  }

  login({ token, role, username }) {
    this.#setToken(token);
    this.#setRole(role);
    this.#setUsername(username);
  }

  logout() {
    this.#setToken(initialState.token);
    this.#setRole(initialState.role);
    this.#setUsername(initialState.username);
  }

  banUser(data) {
    alert(data);
    this.#setToken(initialState.token);
    this.#setRole(initialState.role);
    this.#setUsername(initialState.username);
  }

  updateUsernameAndToken({ token, username }) {
    this.#setToken(token);
    this.#setUsername(username);
  }

  updateToken({ token, role, username }) {
    this.#setToken(token);
  }
}

export const useAuthManager = () => {
  const dispatch = useDispatch();
  const authManager = new AuthManager(dispatch);

  return authManager;
};
