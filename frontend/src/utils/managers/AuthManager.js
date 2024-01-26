import { useDispatch } from 'react-redux';
import { initialState } from '../../redux/app/state';
import { useAppActions } from '../../redux/useAppActions';

export class AuthManager {
  #dispatch;
  #setToken;
  #setRole;
  #setUsername;
  #setEmail;

  constructor(dispatch) {
    const { appActions } = useAppActions(dispatch);
    const { setToken, setRole, setUsername, setEmail } = appActions;

    this.#setToken = setToken;
    this.#setRole = setRole;
    this.#setUsername = setUsername;
    this.#setEmail = setEmail;
  }

  login(user) {
    const { token, role, username, email } = user;

    this.#setToken(token);
    this.#setRole(role);
    this.#setUsername(username);
    this.#setEmail(email);
  }

  logout() {
    this.#setToken(initialState.token);
    this.#setRole(initialState.role);
    this.#setUsername(initialState.username);
    this.#setEmail(initialState.email);
  }

  banUser(data) {
    alert(data);
    this.#setToken(initialState.token);
    this.#setRole(initialState.role);
    this.#setUsername(initialState.username);
    this.#setEmail(initialState.email);
  }

  updateUsernameAndToken({ token, username }) {
    this.#setToken(token);
    this.#setUsername(username);
  }

  updateToken({ token, role, username, email }) {
    this.#setToken(token);
  }
}

export const useAuthManager = () => {
  const dispatch = useDispatch();
  const authManager = new AuthManager(dispatch);

  return authManager;
};
